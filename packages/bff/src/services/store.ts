import {
  Household,
  HouseholdMember,
  Pet,
  PetEvent,
  CreateEventDTO,
  UpdateEventDTO,
  CreateHouseholdDTO,
  WalkRoute,
  calculatePetAnalytics,
  PetAnalytics,
  convertDogNotesToPetEvents,
  DogNotesImportItem,
  normalizeUserName,
  AuthUser,
  SignUpDTO,
  SignInDTO,
  AuthSessionResponse,
  GetEventsQuery,
} from '@watslog/shared';
import { getSupabaseClient, Bindings } from './supabase.js';

// In-memory data store for local dev / fallback
const memHouseholds: Household[] = [];
const memMembers: HouseholdMember[] = [];
const memPets: Pet[] = [];
const memEvents: PetEvent[] = [];
const memWalks: WalkRoute[] = [];
const memInvites = new Map<string, { householdId: string; code: string; expiresAt: string }>();

const isUuid = (id?: string | null): boolean =>
  typeof id === 'string' &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id.trim());

function generateSecureCode(length: number = 6): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    return Array.from(bytes)
      .map((b) => chars[b % chars.length])
      .join('');
  }
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export class DataService {
  private env: Bindings;

  constructor(env: Bindings) {
    this.env = env;
  }

  // --- AUTHENTICATION ---
  async signUpUser(dto: SignUpDTO): Promise<AuthSessionResponse> {
    const supabase = getSupabaseClient(this.env);
    if (!supabase) {
      const userId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'u-' + Date.now();
      const user: AuthUser = {
        id: userId,
        email: dto.email,
        displayName: dto.displayName,
        createdAt: new Date().toISOString(),
      };
      const token = 'mock-jwt-' + userId;

      if (dto.mode === 'join' && dto.inviteCode) {
        const invite = memInvites.get(dto.inviteCode.toUpperCase());
        if (!invite) throw new Error('Invalid or expired invite code');
        const h = memHouseholds.find((item) => item.id === invite.householdId);
        if (!h) throw new Error('Household not found');
        const newMember: HouseholdMember = {
          id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'm-' + Date.now(),
          householdId: h.id,
          userId,
          displayName: dto.displayName,
          role: 'member',
          joinedAt: new Date().toISOString(),
        };
        memMembers.push(newMember);
        const pets = memPets.filter((p) => p.householdId === h.id);
        const members = memMembers.filter((m) => m.householdId === h.id);
        const fullHousehold: Household = { ...h, members, pets };
        return { user, token, activeHousehold: fullHousehold, households: [fullHousehold] };
      }

      const householdId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'h-' + Date.now();
      const newHousehold: Household = {
        id: householdId,
        name: dto.householdName || `${dto.displayName}'s Family`,
        createdAt: new Date().toISOString(),
      };
      memHouseholds.push(newHousehold);

      const newMember: HouseholdMember = {
        id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'm-' + Date.now(),
        householdId,
        userId,
        displayName: dto.displayName,
        role: 'owner',
        joinedAt: new Date().toISOString(),
      };
      memMembers.push(newMember);

      let initialPets: Pet[] = [];
      if (dto.pet && dto.pet.name) {
        const newPet: Pet = {
          id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'pet-' + Date.now(),
          householdId,
          name: dto.pet.name,
          species: dto.pet.species || 'dog',
          breed: dto.pet.breed || '',
          avatarUrl: dto.pet.avatarUrl || '',
          createdAt: new Date().toISOString(),
        };
        memPets.push(newPet);
        initialPets = [newPet];
      }

      const fullHousehold: Household = {
        ...newHousehold,
        members: [newMember],
        pets: initialPets,
      };

      return {
        user,
        token,
        activeHousehold: fullHousehold,
        households: [fullHousehold],
      };
    }

    const { data: authData, error: authErr } = await supabase.auth.signUp({
      email: dto.email,
      password: dto.password,
      options: {
        data: {
          display_name: dto.displayName,
        },
        ...(dto.redirectTo ? { emailRedirectTo: dto.redirectTo } : {}),
      },
    });

    if (authErr) {
      throw new Error(authErr.message);
    }

    if (!authData.user) {
      throw new Error('User creation failed');
    }

    const userId = authData.user.id;
    const token = authData.session?.access_token || authData.user.id;
    const user: AuthUser = {
      id: userId,
      email: authData.user.email || dto.email,
      displayName: dto.displayName,
      createdAt: authData.user.created_at || new Date().toISOString(),
    };

    if (dto.mode === 'join' && dto.inviteCode) {
      const { data: invite, error: invErr } = await supabase
        .from('household_invites')
        .select('household_id, expires_at')
        .eq('code', dto.inviteCode.toUpperCase())
        .single();

      if (invErr || !invite) {
        throw new Error('Invalid or expired invite code');
      }

      if (new Date(invite.expires_at) < new Date()) {
        throw new Error('Invite code has expired');
      }

      const householdId = invite.household_id;
      const memberId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : undefined;
      await supabase.from('household_members').insert({
        ...(memberId ? { id: memberId } : {}),
        household_id: householdId,
        user_id: userId,
        display_name: dto.displayName,
        role: 'member',
      });

      const fullHousehold = await this.getHousehold(householdId);
      return {
        user,
        token,
        activeHousehold: fullHousehold,
        households: fullHousehold ? [fullHousehold] : [],
      };
    }

    if (dto.mode === 'claim' && dto.claimHouseholdId) {
      const cleanId = dto.claimHouseholdId.trim();
      const { data: hRow, error: hErr } = await supabase
        .from('households')
        .select('*')
        .eq('id', cleanId)
        .single();

      if (hErr || !hRow) {
        throw new Error('Household ID not found in database');
      }

      // Check for unlinked member rows
      const { data: unlinkedMembers } = await supabase
        .from('household_members')
        .select('*')
        .eq('household_id', cleanId)
        .is('user_id', null);

      if (!unlinkedMembers || unlinkedMembers.length === 0) {
        const { data: existing } = await supabase
          .from('household_members')
          .select('*')
          .eq('household_id', cleanId)
          .eq('user_id', userId)
          .maybeSingle();

        if (!existing) {
          throw new Error('Household has already been claimed or requires an invite code');
        }
      } else {
        const first = unlinkedMembers[0];
        await supabase
          .from('household_members')
          .update({
            user_id: userId,
            display_name: dto.displayName || first.display_name || 'Owner',
          })
          .eq('id', first.id);

        for (let i = 1; i < unlinkedMembers.length; i++) {
          await supabase.from('household_members').delete().eq('id', unlinkedMembers[i].id);
        }
      }

      const fullHousehold = await this.getHousehold(cleanId);
      return {
        user,
        token,
        activeHousehold: fullHousehold,
        households: fullHousehold ? [fullHousehold] : [],
      };
    }

    // Mode: Create new household
    const householdId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : undefined;
    const { data: householdRecord, error: hErr } = await supabase
      .from('households')
      .insert({
        ...(householdId ? { id: householdId } : {}),
        name: dto.householdName || `${dto.displayName}'s Family`,
      })
      .select()
      .single();

    if (hErr || !householdRecord) {
      throw new Error(hErr?.message || 'Failed to create household');
    }

    const hId = householdRecord.id;
    const memberId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : undefined;
    await supabase.from('household_members').insert({
      ...(memberId ? { id: memberId } : {}),
      household_id: hId,
      user_id: userId,
      display_name: dto.displayName,
      role: 'owner',
    });

    if (dto.pet && dto.pet.name) {
      const petId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : undefined;
      await supabase.from('pets').insert({
        ...(petId ? { id: petId } : {}),
        household_id: hId,
        name: dto.pet.name,
        species: dto.pet.species || 'dog',
        breed: dto.pet.breed || '',
        avatar_url: dto.pet.avatarUrl || '',
      });
    }

    const fullHousehold = await this.getHousehold(hId);
    return {
      user,
      token,
      activeHousehold: fullHousehold,
      households: fullHousehold ? [fullHousehold] : [],
    };
  }

  async signInUser(dto: SignInDTO): Promise<AuthSessionResponse> {
    const supabase = getSupabaseClient(this.env);
    if (!supabase) {
      const member = memMembers.find((m) => m.displayName.toLowerCase() === dto.email.toLowerCase()) || memMembers[0];
      const user: AuthUser = {
        id: member?.userId || 'u-demo',
        email: dto.email,
        displayName: member?.displayName || dto.email.split('@')[0],
        createdAt: new Date().toISOString(),
      };
      const token = 'mock-jwt-' + user.id;
      const h = member ? memHouseholds.find((item) => item.id === member.householdId) : memHouseholds[0];
      const fullHousehold = h ? await this.getHousehold(h.id) : null;
      return { user, token, activeHousehold: fullHousehold, households: fullHousehold ? [fullHousehold] : [] };
    }

    const { data: authData, error: authErr } = await supabase.auth.signInWithPassword({
      email: dto.email,
      password: dto.password,
    });

    if (authErr || !authData.user) {
      throw new Error(authErr?.message || 'Invalid email or password');
    }

    const userId = authData.user.id;
    const token = authData.session?.access_token || userId;
    const user: AuthUser = {
      id: userId,
      email: authData.user.email || dto.email,
      displayName: (authData.user.user_metadata?.display_name as string) || dto.email.split('@')[0],
      createdAt: authData.user.created_at || new Date().toISOString(),
    };

    const { data: memberships } = await supabase
      .from('household_members')
      .select('household_id')
      .eq('user_id', userId);

    const householdIds = memberships?.map((m) => m.household_id) || [];
    const households: Household[] = [];
    for (const hId of householdIds) {
      const h = await this.getHousehold(hId);
      if (h) households.push(h);
    }

    return {
      user,
      token,
      activeHousehold: households[0] || null,
      households,
    };
  }

  async getMe(authToken: string): Promise<AuthSessionResponse> {
    const supabase = getSupabaseClient(this.env, authToken);
    if (!supabase) {
      const defaultHousehold = memHouseholds[0] ? await this.getHousehold(memHouseholds[0].id) : null;
      return {
        user: {
          id: 'u-local',
          email: 'local@watslog.dev',
          displayName: 'Local User',
          createdAt: new Date().toISOString(),
        },
        token: authToken,
        activeHousehold: defaultHousehold,
        households: defaultHousehold ? [defaultHousehold] : [],
      };
    }

    const { data: userData, error: userErr } = await supabase.auth.getUser(authToken);
    if (userErr || !userData.user) {
      throw new Error('Unauthorized or session expired');
    }

    const userId = userData.user.id;
    const user: AuthUser = {
      id: userId,
      email: userData.user.email || '',
      displayName: (userData.user.user_metadata?.display_name as string) || userData.user.email?.split('@')[0] || 'User',
      createdAt: userData.user.created_at || new Date().toISOString(),
    };

    const { data: memberships } = await supabase
      .from('household_members')
      .select('household_id')
      .eq('user_id', userId);

    const householdIds = memberships?.map((m) => m.household_id) || [];
    const households: Household[] = [];
    for (const hId of householdIds) {
      const h = await this.getHousehold(hId);
      if (h) households.push(h);
    }

    return {
      user,
      token: authToken,
      activeHousehold: households[0] || null,
      households,
    };
  }

  async joinAuthenticated(userId: string, code: string, displayName: string, _role?: string): Promise<AuthSessionResponse> {
    const supabase = getSupabaseClient(this.env);
    if (!supabase) {
      const invite = memInvites.get(code.toUpperCase());
      if (!invite) throw new Error('Invalid or expired invite code');
      const h = memHouseholds.find((item) => item.id === invite.householdId);
      if (!h) throw new Error('Household not found');
      const newMember: HouseholdMember = {
        id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'm-' + Date.now(),
        householdId: h.id,
        userId,
        displayName: displayName || 'Family Member',
        role: 'member',
        joinedAt: new Date().toISOString(),
      };
      memMembers.push(newMember);
      const fullHousehold = await this.getHousehold(h.id);
      return {
        user: { id: userId, email: '', displayName, createdAt: new Date().toISOString() },
        token: 'mock-jwt-' + userId,
        activeHousehold: fullHousehold,
        households: fullHousehold ? [fullHousehold] : [],
      };
    }

    const { data: invite, error: invErr } = await supabase
      .from('household_invites')
      .select('household_id, expires_at')
      .eq('code', code.toUpperCase())
      .single();

    if (invErr || !invite) {
      throw new Error('Invalid or expired invite code');
    }

    if (new Date(invite.expires_at) < new Date()) {
      throw new Error('Invite code has expired');
    }

    const householdId = invite.household_id;
    const memberId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : undefined;
    await supabase.from('household_members').insert({
      ...(memberId ? { id: memberId } : {}),
      household_id: householdId,
      user_id: userId,
      display_name: displayName || 'Family Member',
      role: 'member',
    });

    // Re-fetch all households for user
    const { data: memberships } = await supabase
      .from('household_members')
      .select('household_id')
      .eq('user_id', userId);

    const householdIds = memberships?.map((m) => m.household_id) || [];
    const households: Household[] = [];
    for (const hId of householdIds) {
      const h = await this.getHousehold(hId);
      if (h) households.push(h);
    }

    const activeHousehold = households.find((h) => h.id === householdId) || households[0] || null;

    return {
      user: { id: userId, email: '', displayName, createdAt: new Date().toISOString() },
      token: '',
      activeHousehold,
      households,
    };
  }

  async claimHousehold(userId: string, householdId: string, displayName: string, _role?: string): Promise<AuthSessionResponse> {
    const cleanId = householdId.trim();
    const supabase = getSupabaseClient(this.env);

    if (!supabase) {
      const h = memHouseholds.find((item) => item.id === cleanId);
      if (!h) throw new Error('Household ID not found in database');
      const unlinked = memMembers.find((m) => m.householdId === cleanId && (!m.userId || m.userId === ''));
      const alreadyMember = memMembers.find((m) => m.householdId === cleanId && m.userId === userId);
      if (!unlinked && !alreadyMember) {
        throw new Error('Household has already been claimed or requires an invite code');
      }
      if (unlinked) {
        unlinked.userId = userId;
        unlinked.displayName = displayName || unlinked.displayName;
      }
      const fullHousehold = await this.getHousehold(h.id);
      return {
        user: { id: userId, email: '', displayName, createdAt: new Date().toISOString() },
        token: 'mock-jwt-' + userId,
        activeHousehold: fullHousehold,
        households: fullHousehold ? [fullHousehold] : [],
      };
    }

    if (!isUuid(cleanId)) {
      throw new Error('Invalid Household ID format');
    }

    const { data: hRow, error: hErr } = await supabase
      .from('households')
      .select('*')
      .eq('id', cleanId)
      .single();

    if (hErr || !hRow) {
      throw new Error('Household ID not found in database');
    }

    // Check for existing unlinked member rows (user_id is null) in this household
    const { data: unlinkedMembers } = await supabase
      .from('household_members')
      .select('*')
      .eq('household_id', cleanId)
      .is('user_id', null);

    if (!unlinkedMembers || unlinkedMembers.length === 0) {
      // Check if user is already a member
      const { data: userMember } = await supabase
        .from('household_members')
        .select('*')
        .eq('household_id', cleanId)
        .eq('user_id', userId)
        .maybeSingle();

      if (!userMember) {
        throw new Error('Household has already been claimed or requires an invite code');
      }
    } else {
      // Link the first unlinked member row to this authenticated user
      const first = unlinkedMembers[0];
      await supabase
        .from('household_members')
        .update({
          user_id: userId,
          display_name: displayName || first.display_name || 'Owner',
        })
        .eq('id', first.id);

      // Clean up any other remaining unlinked rows for this household
      for (let i = 1; i < unlinkedMembers.length; i++) {
        await supabase.from('household_members').delete().eq('id', unlinkedMembers[i].id);
      }
    }

    const { data: memberships } = await supabase
      .from('household_members')
      .select('household_id')
      .eq('user_id', userId);

    const householdIds = memberships?.map((m) => m.household_id) || [];
    const households: Household[] = [];
    for (const id of householdIds) {
      const h = await this.getHousehold(id);
      if (h) households.push(h);
    }

    const activeHousehold = households.find((h) => h.id === cleanId) || households[0] || null;

    return {
      user: { id: userId, email: '', displayName, createdAt: new Date().toISOString() },
      token: '',
      activeHousehold,
      households,
    };
  }

  // --- HOUSEHOLDS ---
  async createHousehold(dto: CreateHouseholdDTO): Promise<Household> {
    const supabase = getSupabaseClient(this.env);
    if (supabase) {
      try {
        const householdId = typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : 'h-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7);

        const { error: hErr } = await supabase
          .from('households')
          .insert({ id: householdId, name: dto.name || 'My Household' });

        if (hErr) {
          console.warn('Supabase household insert warning:', hErr.message);
        }

        const memberId = typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : 'm-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7);

        const { error: mErr } = await supabase
          .from('household_members')
          .insert({
            id: memberId,
            household_id: householdId,
            display_name: dto.ownerName || 'Owner',
            role: 'owner',
          });

        if (mErr) {
          console.warn('Supabase member insert warning:', mErr.message);
        }

        let createdPet: Pet | null = null;
        if (dto.pet && dto.pet.name) {
          const petId = typeof crypto !== 'undefined' && crypto.randomUUID
            ? crypto.randomUUID()
            : 'pet-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7);

          const { error: pErr } = await supabase
            .from('pets')
            .insert({
              id: petId,
              household_id: householdId,
              name: dto.pet.name,
              species: dto.pet.species || 'dog',
              breed: dto.pet.breed || '',
              avatar_url: dto.pet.avatarUrl || '',
            });

          if (pErr) console.warn('Supabase pet insert warning:', pErr.message);

          createdPet = {
            id: petId,
            householdId: householdId,
            name: dto.pet.name,
            species: dto.pet.species || 'dog',
            breed: dto.pet.breed || '',
            avatarUrl: dto.pet.avatarUrl || '',
            createdAt: new Date().toISOString(),
          };
        }

        const newHousehold: Household = {
          id: householdId,
          name: dto.name || 'My Household',
          createdAt: new Date().toISOString(),
          members: [
            {
              id: memberId,
              householdId: householdId,
              displayName: dto.ownerName || 'Owner',
              role: 'owner',
              joinedAt: new Date().toISOString(),
            },
          ],
          pets: createdPet ? [createdPet] : [],
        };

        // Also keep in-memory sync for instant reads
        memHouseholds.push(newHousehold);
        if (newHousehold.members) memMembers.push(...newHousehold.members);
        if (newHousehold.pets) memPets.push(...newHousehold.pets);

        return newHousehold;
      } catch (supabaseErr) {
        console.warn('Supabase createHousehold failed, using local store:', supabaseErr);
      }
    }

    const hId = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : 'h-' + Date.now();

    const newHousehold: Household = {
      id: hId,
      name: dto.name || 'My Household',
      createdAt: new Date().toISOString(),
    };
    memHouseholds.push(newHousehold);

    const newMember: HouseholdMember = {
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'm-' + Date.now(),
      householdId: hId,
      displayName: dto.ownerName || 'Owner',
      role: 'owner',
      joinedAt: new Date().toISOString(),
    };
    memMembers.push(newMember);

    let initialPets: Pet[] = [];
    if (dto.pet && dto.pet.name) {
      const newPet: Pet = {
        id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'pet-' + Date.now(),
        householdId: hId,
        name: dto.pet.name,
        species: dto.pet.species || 'dog',
        breed: dto.pet.breed || '',
        avatarUrl: dto.pet.avatarUrl || '',
        createdAt: new Date().toISOString(),
      };
      memPets.push(newPet);
      initialPets = [newPet];
    }

    return {
      ...newHousehold,
      members: [newMember],
      pets: initialPets,
    };
  }

  async removeMember(householdId: string, memberId: string): Promise<boolean> {
    const supabase = getSupabaseClient(this.env);
    if (supabase && isUuid(householdId)) {
      const { error } = await supabase
        .from('household_members')
        .delete()
        .eq('id', memberId)
        .eq('household_id', householdId);
      return !error;
    }
    const idx = memMembers.findIndex((m) => m.id === memberId && m.householdId === householdId);
    if (idx !== -1) {
      memMembers.splice(idx, 1);
      return true;
    }
    return false;
  }

  async getHousehold(id: string): Promise<Household | null> {
    const supabase = getSupabaseClient(this.env);
    if (supabase && isUuid(id)) {
      try {
        const { data, error } = await supabase
          .from('households')
          .select('*, members:household_members(*), pets(*)')
          .eq('id', id)
          .single();
        if (!error && data) {
          return {
            id: data.id,
            name: data.name,
            createdAt: data.created_at,
            members: data.members?.map((m: any) => ({
              id: m.id,
              householdId: m.household_id,
              userId: m.user_id,
              displayName: m.display_name,
              role: m.role,
              joinedAt: m.joined_at,
            })),
            pets: data.pets?.map((p: any) => ({
              id: p.id,
              householdId: p.household_id,
              name: p.name,
              species: p.species,
              breed: p.breed,
              birthday: p.birthday,
              avatarUrl: p.avatar_url,
              createdAt: p.created_at,
            })),
          };
        }
      } catch (err) {
        console.warn('Supabase getHousehold error:', err);
      }
    }

    const h = memHouseholds.find((item) => item.id === id);
    if (!h) return null;
    return {
      ...h,
      members: memMembers.filter((m) => m.householdId === h.id),
      pets: memPets.filter((p) => p.householdId === h.id),
    };
  }

  async isHouseholdMember(userId: string, householdId: string): Promise<boolean> {
    if (userId === 'u-local' || userId === 'u-demo') return true;
    const supabase = getSupabaseClient(this.env);
    if (supabase && isUuid(householdId)) {
      try {
        const { data, error } = await supabase
          .from('household_members')
          .select('id')
          .eq('household_id', householdId)
          .eq('user_id', userId)
          .maybeSingle();
        return !error && !!data;
      } catch (err) {
        console.warn('Supabase isHouseholdMember error:', err);
      }
    }
    return memMembers.some((m) => m.householdId === householdId && m.userId === userId);
  }

  async getMemberRole(userId: string, householdId: string): Promise<'owner' | 'admin' | 'member' | null> {
    if (userId === 'u-local' || userId === 'u-demo') return 'owner';
    const supabase = getSupabaseClient(this.env);
    if (supabase && isUuid(householdId)) {
      try {
        const { data, error } = await supabase
          .from('household_members')
          .select('role')
          .eq('household_id', householdId)
          .eq('user_id', userId)
          .maybeSingle();
        if (!error && data) {
          return data.role as any;
        }
      } catch (err) {
        console.warn('Supabase getMemberRole error:', err);
      }
    }
    const mem = memMembers.find((m) => m.householdId === householdId && m.userId === userId);
    return mem ? (mem.role as any) : null;
  }

  async createInviteCode(householdId: string): Promise<string> {
    const code = generateSecureCode(6);
    const supabase = getSupabaseClient(this.env);
    if (supabase && isUuid(householdId)) {
      try {
        await supabase.from('household_invites').insert({
          household_id: householdId,
          code,
        });
        return code;
      } catch (err) {
        console.warn('Supabase createInviteCode error:', err);
      }
    }
    memInvites.set(code, {
      householdId,
      code,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    });
    return code;
  }

  async joinHouseholdByCode(
    code: string,
    displayName: string,
    _role: string = 'member',
    userId?: string
  ): Promise<Household | null> {
    const cleanCode = code.trim().toUpperCase();
    const memberId = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : 'm-' + Date.now() + '-' + generateSecureCode(4);

    const supabase = getSupabaseClient(this.env);
    if (supabase) {
      try {
        const { data: invite } = await supabase
          .from('household_invites')
          .select('*')
          .eq('code', cleanCode)
          .single();
        if (invite) {
          if (new Date(invite.expires_at) < new Date()) {
            throw new Error('Invite code has expired');
          }
          await supabase.from('household_members').insert({
            id: memberId,
            household_id: invite.household_id,
            user_id: userId || null,
            display_name: displayName,
            role: 'member',
          });
          const fetched = await this.getHousehold(invite.household_id);
          if (fetched) return fetched;
        }
      } catch (err) {
        console.warn('Supabase joinHouseholdByCode error:', err);
        if (err instanceof Error && err.message.includes('expired')) {
          throw err;
        }
      }
    }

    const invite = memInvites.get(cleanCode);
    if (!invite) return null;
    if (new Date(invite.expiresAt) < new Date()) {
      throw new Error('Invite code has expired');
    }

    const newMember: HouseholdMember = {
      id: memberId,
      householdId: invite.householdId,
      userId: userId || undefined,
      displayName,
      role: 'member',
      joinedAt: new Date().toISOString(),
    };
    memMembers.push(newMember);
    return this.getHousehold(invite.householdId);
  }

  // --- PETS ---
  async getPet(petId: string): Promise<Pet | null> {
    const supabase = getSupabaseClient(this.env);
    if (supabase && isUuid(petId)) {
      try {
        const { data, error } = await supabase.from('pets').select('*').eq('id', petId).single();
        if (!error && data) {
          return {
            id: data.id,
            householdId: data.household_id,
            name: data.name,
            species: data.species,
            breed: data.breed,
            birthday: data.birthday,
            avatarUrl: data.avatar_url,
            createdAt: data.created_at,
          };
        }
      } catch (err) {
        console.warn('Supabase getPet error:', err);
      }
    }
    return memPets.find((p) => p.id === petId) || null;
  }

  async getPets(householdId: string): Promise<Pet[]> {
    const supabase = getSupabaseClient(this.env);
    if (supabase && isUuid(householdId)) {
      try {
        const { data, error } = await supabase.from('pets').select('*').eq('household_id', householdId);
        if (!error && data && data.length > 0) {
          return data.map((p: any) => ({
            id: p.id,
            householdId: p.household_id,
            name: p.name,
            species: p.species,
            breed: p.breed,
            birthday: p.birthday,
            avatarUrl: p.avatar_url,
            createdAt: p.created_at,
          }));
        }
      } catch (err) {
        console.warn('Supabase getPets error:', err);
      }
    }
    return memPets.filter((p) => p.householdId === householdId);
  }

  async createPet(householdId: string, petData: Partial<Pet>): Promise<Pet> {
    const petId = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : 'pet-' + Date.now();

    const supabase = getSupabaseClient(this.env);
    if (supabase && isUuid(householdId)) {
      try {
        const { data, error } = await supabase
          .from('pets')
          .insert({
            id: petId,
            household_id: householdId,
            name: petData.name || 'My Pet',
            species: petData.species || 'dog',
            breed: petData.breed || '',
            birthday: petData.birthday,
            avatar_url: petData.avatarUrl || '',
          })
          .select()
          .single();
        if (!error && data) {
          return {
            id: data.id,
            householdId: data.household_id,
            name: data.name,
            species: data.species,
            breed: data.breed,
            birthday: data.birthday,
            avatarUrl: data.avatar_url,
            createdAt: data.created_at,
          };
        }
      } catch (err) {
        console.warn('Supabase createPet error:', err);
      }
    }

    const newPet: Pet = {
      id: petId,
      householdId,
      name: petData.name || 'My Pet',
      species: petData.species || 'dog',
      breed: petData.breed,
      birthday: petData.birthday,
      avatarUrl: petData.avatarUrl,
      createdAt: new Date().toISOString(),
    };
    memPets.push(newPet);
    return newPet;
  }

  async updatePet(petId: string, petData: Partial<Pet>): Promise<Pet | null> {
    const supabase = getSupabaseClient(this.env);
    if (supabase && isUuid(petId)) {
      try {
        const updatePayload: Record<string, any> = {
          updated_at: new Date().toISOString(),
        };
        if (petData.name !== undefined) updatePayload.name = petData.name;
        if (petData.species !== undefined) updatePayload.species = petData.species;
        if (petData.breed !== undefined) updatePayload.breed = petData.breed;
        if (petData.birthday !== undefined) updatePayload.birthday = petData.birthday;
        if (petData.avatarUrl !== undefined) updatePayload.avatar_url = petData.avatarUrl;

        const { data, error } = await supabase
          .from('pets')
          .update(updatePayload)
          .eq('id', petId)
          .select()
          .single();

        if (!error && data) {
          return {
            id: data.id,
            householdId: data.household_id,
            name: data.name,
            species: data.species,
            breed: data.breed,
            birthday: data.birthday,
            avatarUrl: data.avatar_url,
            createdAt: data.created_at,
          };
        }
      } catch (err) {
        console.warn('Supabase updatePet error:', err);
      }
    }

    const pet = memPets.find((p) => p.id === petId);
    if (!pet) return null;
    if (petData.name !== undefined) pet.name = petData.name;
    if (petData.species !== undefined) pet.species = petData.species;
    if (petData.breed !== undefined) pet.breed = petData.breed;
    if (petData.birthday !== undefined) pet.birthday = petData.birthday;
    if (petData.avatarUrl !== undefined) pet.avatarUrl = petData.avatarUrl;
    return pet;
  }

  async updateMember(
    householdId: string,
    memberId: string,
    memberData: Partial<HouseholdMember>
  ): Promise<HouseholdMember | null> {
    const supabase = getSupabaseClient(this.env);
    if (supabase && isUuid(householdId)) {
      try {
        const updatePayload: Record<string, any> = {};
        if (memberData.displayName !== undefined) updatePayload.display_name = memberData.displayName;
        if (memberData.role !== undefined) updatePayload.role = memberData.role;

        const { data, error } = await supabase
          .from('household_members')
          .update(updatePayload)
          .eq('id', memberId)
          .eq('household_id', householdId)
          .select()
          .single();

        if (!error && data) {
          return {
            id: data.id,
            householdId: data.household_id,
            userId: data.user_id,
            displayName: data.display_name,
            role: data.role,
            joinedAt: data.joined_at,
          };
        }
      } catch (err) {
        console.warn('Supabase updateMember error:', err);
      }
    }

    const member = memMembers.find((m) => m.id === memberId && m.householdId === householdId);
    if (!member) return null;
    if (memberData.displayName !== undefined) member.displayName = memberData.displayName;
    if (memberData.avatarUrl !== undefined) member.avatarUrl = memberData.avatarUrl;
    if (memberData.role !== undefined) member.role = memberData.role;
    return member;
  }

  // --- EVENTS ---
  async getEvents(
    petId: string,
    limitOrOptions?: number | GetEventsQuery
  ): Promise<PetEvent[]> {
    const opts: GetEventsQuery =
      typeof limitOrOptions === 'number'
        ? { limit: limitOrOptions }
        : limitOrOptions || {};

    const maxAllowed = opts.since ? 1000 : 500;
    const safeLimit = Math.min(Math.max(opts.limit || (opts.since ? 1000 : 100), 1), maxAllowed);
    const supabase = getSupabaseClient(this.env);

    if (supabase && isUuid(petId)) {
      try {
        let query = supabase.from('events').select('*').eq('pet_id', petId);

        if (opts.since) {
          query = query.or(`created_at.gt.${opts.since},timestamp.gt.${opts.since}`);
        }
        if (opts.startDate) {
          query = query.gte('timestamp', opts.startDate);
        }
        if (opts.endDate) {
          query = query.lte('timestamp', opts.endDate);
        }

        query = query.order('timestamp', { ascending: false });

        if (opts.offset !== undefined && opts.offset > 0) {
          query = query.range(opts.offset, opts.offset + safeLimit - 1);
        } else {
          query = query.limit(safeLimit);
        }

        const { data, error } = await query;
        if (!error && data) {
          return data.map((e: any) => ({
            id: e.id,
            householdId: e.household_id,
            petId: e.pet_id,
            eventType: e.event_type,
            loggedByName: e.logged_by_name,
            loggedByUserId: e.logged_by_user_id,
            timestamp: e.timestamp,
            notes: e.notes,
            latitude: e.latitude,
            longitude: e.longitude,
            metadata: e.metadata,
            createdAt: e.created_at,
          }));
        }
      } catch (err) {
        console.warn('Supabase getEvents error:', err);
      }
    }

    let memFiltered = memEvents.filter((e) => e.petId === petId);
    if (opts.since) {
      const sinceTime = new Date(opts.since).getTime();
      memFiltered = memFiltered.filter(
        (e) => new Date(e.createdAt || e.timestamp).getTime() > sinceTime
      );
    }
    if (opts.startDate) {
      const startTime = new Date(opts.startDate).getTime();
      memFiltered = memFiltered.filter((e) => new Date(e.timestamp).getTime() >= startTime);
    }
    if (opts.endDate) {
      const endTime = new Date(opts.endDate).getTime();
      memFiltered = memFiltered.filter((e) => new Date(e.timestamp).getTime() <= endTime);
    }

    memFiltered.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    const offset = opts.offset || 0;
    return memFiltered.slice(offset, offset + safeLimit);
  }

  async createEvent(dto: CreateEventDTO): Promise<PetEvent> {
    const eventId = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : 'evt-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6);

    const supabase = getSupabaseClient(this.env);
    if (supabase && isUuid(dto.householdId) && isUuid(dto.petId)) {
      try {
        const { error } = await supabase
          .from('events')
          .insert({
            id: eventId,
            household_id: dto.householdId,
            pet_id: dto.petId,
            event_type: dto.eventType,
            logged_by_name: dto.loggedByName || 'Me',
            logged_by_user_id: dto.loggedByUserId,
            timestamp: dto.timestamp,
            notes: dto.notes,
            latitude: dto.latitude,
            longitude: dto.longitude,
            metadata: dto.metadata || {},
          });

        if (!error) {
          const event: PetEvent = {
            id: eventId,
            householdId: dto.householdId,
            petId: dto.petId,
            eventType: dto.eventType,
            loggedByName: dto.loggedByName || 'Me',
            loggedByUserId: dto.loggedByUserId,
            timestamp: dto.timestamp,
            notes: dto.notes,
            latitude: dto.latitude,
            longitude: dto.longitude,
            metadata: dto.metadata,
            createdAt: new Date().toISOString(),
          };
          memEvents.unshift(event);
          return event;
        }
      } catch (err) {
        console.warn('Supabase createEvent error:', err);
      }
    }

    const event: PetEvent = {
      id: eventId,
      householdId: dto.householdId,
      petId: dto.petId,
      eventType: dto.eventType,
      loggedByName: dto.loggedByName || 'Owner',
      loggedByUserId: dto.loggedByUserId,
      timestamp: dto.timestamp,
      notes: dto.notes,
      latitude: dto.latitude,
      longitude: dto.longitude,
      metadata: dto.metadata,
      createdAt: new Date().toISOString(),
    };
    memEvents.unshift(event);
    return event;
  }

  async getEvent(eventId: string): Promise<PetEvent | null> {
    const supabase = getSupabaseClient(this.env);
    if (supabase && isUuid(eventId)) {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .eq('id', eventId)
          .single();
        if (!error && data) {
          return {
            id: data.id,
            householdId: data.household_id,
            petId: data.pet_id,
            eventType: data.event_type,
            loggedByName: data.logged_by_name,
            loggedByUserId: data.logged_by_user_id,
            timestamp: data.timestamp,
            notes: data.notes,
            latitude: data.latitude,
            longitude: data.longitude,
            metadata: data.metadata,
            createdAt: data.created_at,
          };
        }
      } catch (err) {
        console.warn('Supabase getEvent error:', err);
      }
    }
    return memEvents.find((e) => e.id === eventId) || null;
  }

  async updateEvent(eventId: string, updates: UpdateEventDTO): Promise<PetEvent | null> {
    const supabase = getSupabaseClient(this.env);
    if (supabase && isUuid(eventId)) {
      try {
        const updatePayload: Record<string, any> = {};
        if (updates.eventType !== undefined) updatePayload.event_type = updates.eventType;
        if (updates.loggedByName !== undefined) updatePayload.logged_by_name = updates.loggedByName;
        if (updates.loggedByUserId !== undefined) updatePayload.logged_by_user_id = updates.loggedByUserId;
        if (updates.timestamp !== undefined) updatePayload.timestamp = updates.timestamp;
        if (updates.notes !== undefined) updatePayload.notes = updates.notes;
        if (updates.latitude !== undefined) updatePayload.latitude = updates.latitude;
        if (updates.longitude !== undefined) updatePayload.longitude = updates.longitude;
        if (updates.metadata !== undefined) updatePayload.metadata = updates.metadata;

        const { data, error } = await supabase
          .from('events')
          .update(updatePayload)
          .eq('id', eventId)
          .select()
          .single();

        if (!error && data) {
          const updatedEvt: PetEvent = {
            id: data.id,
            householdId: data.household_id,
            petId: data.pet_id,
            eventType: data.event_type,
            loggedByName: data.logged_by_name,
            loggedByUserId: data.logged_by_user_id,
            timestamp: data.timestamp,
            notes: data.notes,
            latitude: data.latitude,
            longitude: data.longitude,
            metadata: data.metadata,
            createdAt: data.created_at,
          };
          const memIdx = memEvents.findIndex((e) => e.id === eventId);
          if (memIdx !== -1) {
            memEvents[memIdx] = updatedEvt;
          }
          return updatedEvt;
        }
      } catch (err) {
        console.warn('Supabase updateEvent error:', err);
      }
    }

    const memIdx = memEvents.findIndex((e) => e.id === eventId);
    if (memIdx !== -1) {
      const existing = memEvents[memIdx];
      const updated: PetEvent = {
        ...existing,
        ...updates,
        eventType: updates.eventType ?? existing.eventType,
        notes: updates.notes !== undefined ? updates.notes : existing.notes,
        latitude: updates.latitude !== undefined ? (updates.latitude ?? undefined) : existing.latitude,
        longitude: updates.longitude !== undefined ? (updates.longitude ?? undefined) : existing.longitude,
        metadata: updates.metadata !== undefined ? updates.metadata : existing.metadata,
      };
      memEvents[memIdx] = updated;
      return updated;
    }
    return null;
  }

  async deleteEvent(eventId: string): Promise<boolean> {
    const supabase = getSupabaseClient(this.env);
    if (supabase && isUuid(eventId)) {
      try {
        const { error } = await supabase.from('events').delete().eq('id', eventId);
        if (!error) {
          const memIdx = memEvents.findIndex((e) => e.id === eventId);
          if (memIdx !== -1) {
            memEvents.splice(memIdx, 1);
          }
          return true;
        }
      } catch (err) {
        console.warn('Supabase deleteEvent error:', err);
      }
    }

    const memIdx = memEvents.findIndex((e) => e.id === eventId);
    if (memIdx !== -1) {
      memEvents.splice(memIdx, 1);
      return true;
    }
    return true;
  }

  async batchSyncEvents(events: CreateEventDTO[]): Promise<PetEvent[]> {
    const created: PetEvent[] = [];
    for (const dto of events) {
      const evt = await this.createEvent(dto);
      created.push(evt);
    }
    return created;
  }

  async importEvents(
    events: Omit<PetEvent, 'id' | 'createdAt'>[]
  ): Promise<{ importedCount: number }> {
    const supabase = getSupabaseClient(this.env);

    // Disambiguate and deduplicate events in the incoming payload so no batch has duplicate keys
    const seenMap = new Map<string, number>();
    const sanitizedEvents: Omit<PetEvent, 'id' | 'createdAt'>[] = [];

    for (const evt of events) {
      let isoTimestamp = evt.timestamp;
      try {
        isoTimestamp = new Date(evt.timestamp).toISOString();
      } catch {
        isoTimestamp = new Date().toISOString();
      }

      const baseKey = `${evt.petId}_${isoTimestamp}_${evt.eventType}`;
      const count = seenMap.get(baseKey) || 0;

      if (count === 0) {
        seenMap.set(baseKey, 1);
        sanitizedEvents.push({
          ...evt,
          timestamp: isoTimestamp,
        });
      } else {
        // Same pet, same timestamp, same event type in payload: offset by `count` seconds
        const dt = new Date(isoTimestamp);
        dt.setSeconds(dt.getSeconds() + count);
        const adjustedTimestamp = dt.toISOString();
        seenMap.set(baseKey, count + 1);
        sanitizedEvents.push({
          ...evt,
          timestamp: adjustedTimestamp,
        });
      }
    }

    if (supabase) {
      // Chunk in batches of 500
      const chunkSize = 500;
      for (let i = 0; i < sanitizedEvents.length; i += chunkSize) {
        const chunk = sanitizedEvents.slice(i, i + chunkSize).map((c) => ({
          household_id: c.householdId,
          pet_id: c.petId,
          event_type: c.eventType,
          logged_by_name: normalizeUserName(c.loggedByName),
          timestamp: c.timestamp,
          notes: c.notes || '',
          metadata: c.metadata || {},
        }));
        const { error } = await supabase.from('events').upsert(chunk, {
          onConflict: 'pet_id,timestamp,event_type',
          ignoreDuplicates: true,
        });
        if (error) {
          console.error('Supabase import chunk error:', error);
          throw new Error(`Failed to insert event batch into database: ${error.message}`);
        }
      }
    } else {
      for (const item of sanitizedEvents) {
        const normUser = normalizeUserName(item.loggedByName);
        const isDuplicate = memEvents.some(
          (e) =>
            e.petId === item.petId &&
            e.timestamp === item.timestamp &&
            e.eventType === item.eventType
        );
        if (!isDuplicate) {
          memEvents.push({
            id: 'evt-import-' + Math.random().toString(36).substring(2, 10),
            householdId: item.householdId,
            petId: item.petId,
            eventType: item.eventType,
            loggedByName: normUser,
            timestamp: item.timestamp,
            notes: item.notes,
            metadata: item.metadata,
            createdAt: new Date().toISOString(),
          });
        }
      }
    }

    return { importedCount: sanitizedEvents.length };
  }

  async importDogNotesItems(
    items: DogNotesImportItem[],
    householdId: string,
    petId: string
  ): Promise<{ importedCount: number }> {
    const converted = convertDogNotesToPetEvents(items, householdId, petId);
    return this.importEvents(converted);
  }

  // --- ANALYTICS ---
  async getAnalytics(
    petId: string,
    options?: { startDate?: string; endDate?: string }
  ): Promise<PetAnalytics> {
    const events = await this.getEvents(petId, {
      limit: 1000,
      startDate: options?.startDate,
      endDate: options?.endDate,
    });
    return calculatePetAnalytics(events, petId);
  }

  // --- WALKS ---
  async saveWalkRoute(walk: Partial<WalkRoute>): Promise<WalkRoute> {
    const walkId = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : 'walk-' + Date.now();

    const newWalk: WalkRoute = {
      id: walkId,
      eventId: walk.eventId || '',
      householdId: walk.householdId || '',
      petId: walk.petId || '',
      startedAt: walk.startedAt || new Date().toISOString(),
      endedAt: walk.endedAt || new Date().toISOString(),
      distanceMeters: walk.distanceMeters || 0,
      coordinates: walk.coordinates || [],
      createdAt: new Date().toISOString(),
    };

    const supabase = getSupabaseClient(this.env);
    if (supabase && isUuid(walk.householdId) && isUuid(walk.petId)) {
      try {
        const { error } = await supabase.from('walk_routes').insert({
          id: isUuid(walkId) ? walkId : undefined,
          event_id: walk.eventId && isUuid(walk.eventId) ? walk.eventId : null,
          household_id: walk.householdId,
          pet_id: walk.petId,
          started_at: newWalk.startedAt,
          ended_at: newWalk.endedAt,
          distance_meters: newWalk.distanceMeters,
          coordinates: newWalk.coordinates,
        });
        if (error) {
          console.warn('Supabase saveWalkRoute warning:', error.message);
        }
      } catch (err) {
        console.warn('Supabase saveWalkRoute error:', err);
      }
    }

    memWalks.push(newWalk);
    return newWalk;
  }

  async getWalkRoutes(petId: string): Promise<WalkRoute[]> {
    const supabase = getSupabaseClient(this.env);
    if (supabase && isUuid(petId)) {
      try {
        const { data, error } = await supabase
          .from('walk_routes')
          .select('*')
          .eq('pet_id', petId)
          .order('started_at', { ascending: false });

        if (!error && data && data.length > 0) {
          return data.map((w: any) => ({
            id: w.id,
            eventId: w.event_id || '',
            householdId: w.household_id,
            petId: w.pet_id,
            startedAt: w.started_at,
            endedAt: w.ended_at,
            distanceMeters: Number(w.distance_meters || 0),
            coordinates: w.coordinates || [],
            createdAt: w.created_at,
          }));
        }
      } catch (err) {
        console.warn('Supabase getWalkRoutes error:', err);
      }
    }

    return memWalks.filter((w) => w.petId === petId);
  }
}
