import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { Bindings } from './services/supabase.js';
import { DataService } from './services/store.js';
import {
  CreateEventDTO,
  CreateHouseholdDTO,
  DogNotesImportItem,
  PetEvent,
  SignUpDTO,
  SignInDTO,
  AuthUser,
} from '@watslog/shared';

const app = new Hono<{ Bindings: Bindings }>();

// Enable CORS for Lit PWA
app.use(
  '*',
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
  })
);

// Error handler
app.onError((err, c) => {
  console.error('BFF Error:', err);
  return c.json({ error: err.message || 'Internal Server Error' }, 500);
});

// Health check
app.get('/api/health', (c) => c.json({ status: 'ok', time: new Date().toISOString() }));

// Helper: Extract authenticated user from Authorization header
async function getAuthUser(c: any): Promise<AuthUser | null> {
  const authHeader = c.req.header('Authorization');
  const token = authHeader?.replace(/^Bearer\s+/i, '');
  if (!token) return null;
  try {
    const service = new DataService(c.env);
    const session = await service.getMe(token);
    return session?.user || null;
  } catch {
    return null;
  }
}

// --- AUTHENTICATION ---
app.post('/api/auth/signup', async (c) => {
  try {
    const service = new DataService(c.env);
    const body = await c.req.json<SignUpDTO>();
    if (!body.email || !body.password) {
      return c.json({ error: 'Email and password are required' }, 400);
    }
    if (body.password.length < 6) {
      return c.json({ error: 'Password must be at least 6 characters' }, 400);
    }
    const session = await service.signUpUser(body);
    return c.json(session, 201);
  } catch (err: any) {
    console.error('Error in signup:', err);
    return c.json({ error: err.message || 'Failed to sign up' }, 400);
  }
});

app.post('/api/auth/signin', async (c) => {
  try {
    const service = new DataService(c.env);
    const body = await c.req.json<SignInDTO>();
    if (!body.email || !body.password) {
      return c.json({ error: 'Email and password are required' }, 400);
    }
    const session = await service.signInUser(body);
    return c.json(session, 200);
  } catch (err: any) {
    console.error('Error in signin:', err);
    return c.json({ error: err.message || 'Invalid email or password' }, 401);
  }
});

app.get('/api/auth/me', async (c) => {
  try {
    const authHeader = c.req.header('Authorization');
    const token = authHeader?.replace(/^Bearer\s+/i, '');
    if (!token) {
      return c.json({ error: 'Missing authorization token' }, 401);
    }
    const service = new DataService(c.env);
    const session = await service.getMe(token);
    return c.json(session, 200);
  } catch (err: any) {
    return c.json({ error: err.message || 'Unauthorized' }, 401);
  }
});

app.post('/api/households/join-authenticated', async (c) => {
  try {
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }
    const body = await c.req.json<{ code: string; role?: string }>();
    if (!body.code) {
      return c.json({ error: 'Invite code is required' }, 400);
    }
    const service = new DataService(c.env);
    const result = await service.joinAuthenticated(user.id, body.code, user.displayName, 'member');
    return c.json(result, 200);
  } catch (err: any) {
    return c.json({ error: err.message || 'Failed to join household' }, 400);
  }
});

app.post('/api/households/claim', async (c) => {
  try {
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }
    const body = await c.req.json<{ householdId: string; role?: string }>();
    if (!body.householdId) {
      return c.json({ error: 'Household ID is required' }, 400);
    }
    const service = new DataService(c.env);
    const result = await service.claimHousehold(user.id, body.householdId, user.displayName);
    return c.json(result, 200);
  } catch (err: any) {
    return c.json({ error: err.message || 'Failed to claim household' }, 400);
  }
});

// --- HOUSEHOLDS ---
app.post('/api/households', async (c) => {
  try {
    const service = new DataService(c.env);
    const body = await c.req.json<CreateHouseholdDTO>();
    if (!body.name && !body.ownerName) {
      return c.json({ error: 'Household name or owner name required' }, 400);
    }
    const household = await service.createHousehold(body);
    return c.json(household, 201);
  } catch (err: any) {
    console.error('Error creating household:', err);
    return c.json({ error: err.message || 'Failed to create household' }, 500);
  }
});

app.get('/api/households/:id', async (c) => {
  try {
    const service = new DataService(c.env);
    const id = c.req.param('id');
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }
    const isMember = await service.isHouseholdMember(user.id, id);
    if (!isMember) {
      return c.json({ error: 'Forbidden: You are not a member of this household' }, 403);
    }

    const household = await service.getHousehold(id);
    if (!household) return c.json({ error: 'Household not found' }, 404);
    return c.json(household);
  } catch (err: any) {
    return c.json({ error: 'Household not found' }, 404);
  }
});

app.delete('/api/households/:id/members/:memberId', async (c) => {
  try {
    const service = new DataService(c.env);
    const id = c.req.param('id');
    const memberId = c.req.param('memberId');
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const isMember = await service.isHouseholdMember(user.id, id);
    if (!isMember) {
      return c.json({ error: 'Forbidden' }, 403);
    }

    const callerRole = await service.getMemberRole(user.id, id);
    const household = await service.getHousehold(id);
    const targetMember = household?.members?.find((m: any) => m.id === memberId);
    if (!targetMember) {
      return c.json({ error: 'Member not found' }, 404);
    }

    const isSelf = targetMember && targetMember.userId === user.id;
    if (!isSelf) {
      if (callerRole !== 'owner' && callerRole !== 'admin') {
        return c.json({ error: 'Forbidden: Only owners and admins can remove other members' }, 403);
      }
      // Hierarchy check: Admins cannot remove owners or other admins
      if (callerRole === 'admin' && (targetMember.role === 'owner' || targetMember.role === 'admin')) {
        return c.json({ error: 'Forbidden: Admins cannot remove owners or other admins' }, 403);
      }
      // Owners cannot be removed by others unless they leave themselves
      if (targetMember.role === 'owner' && callerRole !== 'owner') {
        return c.json({ error: 'Forbidden: Cannot remove household owner' }, 403);
      }
    }

    const success = await service.removeMember(id, memberId);
    if (!success) return c.json({ error: 'Failed to remove member' }, 400);
    return c.json({ success: true });
  } catch (err: any) {
    return c.json({ error: err.message || 'Failed to remove member' }, 500);
  }
});

app.post('/api/households/:id/invites', async (c) => {
  try {
    const service = new DataService(c.env);
    const id = c.req.param('id');
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const callerRole = await service.getMemberRole(user.id, id);
    if (callerRole !== 'owner' && callerRole !== 'admin') {
      return c.json({ error: 'Forbidden: Only household owners and admins can create invite codes' }, 403);
    }

    const code = await service.createInviteCode(id);
    return c.json({ code, expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() });
  } catch (err: any) {
    return c.json({ error: err.message || 'Failed to create invite' }, 500);
  }
});

app.post('/api/households/join', async (c) => {
  try {
    const service = new DataService(c.env);
    const body = await c.req.json<{ code: string; displayName: string; role?: any }>();
    if (!body.code) return c.json({ error: 'Invite code required' }, 400);

    const user = await getAuthUser(c);
    const household = await service.joinHouseholdByCode(
      body.code,
      body.displayName || 'Member',
      'member',
      user?.id
    );
    if (!household) return c.json({ error: 'Invalid or expired invite code' }, 400);
    return c.json(household);
  } catch (err: any) {
    return c.json({ error: err.message || 'Failed to join household' }, 500);
  }
});

// --- PETS ---
app.get('/api/households/:id/pets', async (c) => {
  try {
    const service = new DataService(c.env);
    const id = c.req.param('id');
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }
    const isMember = await service.isHouseholdMember(user.id, id);
    if (!isMember) {
      return c.json({ error: 'Forbidden' }, 403);
    }

    const pets = await service.getPets(id);
    return c.json(pets || []);
  } catch (err: any) {
    return c.json([]);
  }
});

app.post('/api/households/:id/pets', async (c) => {
  try {
    const service = new DataService(c.env);
    const id = c.req.param('id');
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }
    const isMember = await service.isHouseholdMember(user.id, id);
    if (!isMember) {
      return c.json({ error: 'Forbidden' }, 403);
    }

    const body = await c.req.json();
    const pet = await service.createPet(id, body);
    return c.json(pet, 201);
  } catch (err: any) {
    return c.json({ error: err.message || 'Failed to create pet' }, 500);
  }
});

app.patch('/api/pets/:id', async (c) => {
  try {
    const service = new DataService(c.env);
    const id = c.req.param('id');
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const pet = await service.getPet(id);
    if (!pet) return c.json({ error: 'Pet not found' }, 404);

    const isMember = await service.isHouseholdMember(user.id, pet.householdId);
    if (!isMember) {
      return c.json({ error: 'Forbidden' }, 403);
    }

    const body = await c.req.json();
    const updated = await service.updatePet(id, body);
    if (!updated) return c.json({ error: 'Pet not found' }, 404);
    return c.json(updated);
  } catch (err: any) {
    return c.json({ error: err.message || 'Failed to update pet' }, 500);
  }
});

app.patch('/api/households/:id/members/:memberId', async (c) => {
  try {
    const service = new DataService(c.env);
    const householdId = c.req.param('id');
    const memberId = c.req.param('memberId');
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const isMember = await service.isHouseholdMember(user.id, householdId);
    if (!isMember) {
      return c.json({ error: 'Forbidden' }, 403);
    }

    const callerRole = await service.getMemberRole(user.id, householdId);
    const household = await service.getHousehold(householdId);
    const targetMember = household?.members?.find((m: any) => m.id === memberId);

    const body = await c.req.json();
    // If updating role, must be household owner
    if (body.role !== undefined && callerRole !== 'owner') {
      return c.json({ error: 'Forbidden: Only household owners can change member roles' }, 403);
    }

    // If updating profile details (displayName/avatar), must be owner/admin or self
    const isSelf = targetMember && targetMember.userId === user.id;
    if (!isSelf && callerRole !== 'owner' && callerRole !== 'admin') {
      return c.json({ error: 'Forbidden: Cannot update other member profiles' }, 403);
    }

    const member = await service.updateMember(householdId, memberId, body);
    if (!member) return c.json({ error: 'Member not found' }, 404);
    return c.json(member);
  } catch (err: any) {
    return c.json({ error: err.message || 'Failed to update member' }, 500);
  }
});

// --- EVENTS ---
app.get('/api/pets/:petId/events', async (c) => {
  try {
    const service = new DataService(c.env);
    const petId = c.req.param('petId');
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const pet = await service.getPet(petId);
    if (!pet) {
      return c.json({ error: 'Pet not found' }, 404);
    }

    const isMember = await service.isHouseholdMember(user.id, pet.householdId);
    if (!isMember) {
      return c.json({ error: 'Forbidden' }, 403);
    }

    const limitQuery = c.req.query('limit');
    const offsetQuery = c.req.query('offset');
    const since = c.req.query('since');
    const startDate = c.req.query('startDate');
    const endDate = c.req.query('endDate');

    const limit = limitQuery ? Number(limitQuery) : undefined;
    const offset = offsetQuery ? Number(offsetQuery) : undefined;

    const events = await service.getEvents(petId, {
      limit,
      offset,
      since,
      startDate,
      endDate,
    });
    return c.json(events || []);
  } catch (err: any) {
    return c.json({ error: err.message || 'Failed to fetch events' }, 500);
  }
});

app.post('/api/events', async (c) => {
  try {
    const service = new DataService(c.env);
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const body = await c.req.json<CreateEventDTO>();
    if (!body.petId || !body.eventType || !body.householdId) {
      return c.json({ error: 'petId, householdId, and eventType are required' }, 400);
    }

    const isMember = await service.isHouseholdMember(user.id, body.householdId);
    if (!isMember) {
      return c.json({ error: 'Forbidden: You are not a member of this household' }, 403);
    }

    const pet = await service.getPet(body.petId);
    if (!pet || pet.householdId !== body.householdId) {
      return c.json({ error: 'Forbidden: Pet does not belong to this household' }, 403);
    }

    const event = await service.createEvent({
      ...body,
      loggedByUserId: user.id,
      loggedByName: body.loggedByName || user.displayName || 'Owner',
    });
    return c.json(event, 201);
  } catch (err: any) {
    return c.json({ error: err.message || 'Failed to create event' }, 500);
  }
});

app.post('/api/events/batch-sync', async (c) => {
  try {
    const service = new DataService(c.env);
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const body = await c.req.json<{ events: CreateEventDTO[] }>();
    if (!body.events || !Array.isArray(body.events)) {
      return c.json({ error: 'events array required' }, 400);
    }

    // Verify membership and pet affiliation for each target household
    for (const evt of body.events) {
      if (!evt.householdId || !evt.petId) {
        return c.json({ error: 'Each event must include householdId and petId' }, 400);
      }
      const isMember = await service.isHouseholdMember(user.id, evt.householdId);
      if (!isMember) {
        return c.json({ error: 'Forbidden: Household access denied' }, 403);
      }
      const pet = await service.getPet(evt.petId);
      if (!pet || pet.householdId !== evt.householdId) {
        return c.json({ error: 'Forbidden: Pet does not belong to specified household' }, 403);
      }
    }

    const synced = await service.batchSyncEvents(
      body.events.map((e) => ({
        ...e,
        loggedByUserId: user.id,
        loggedByName: e.loggedByName || user.displayName || 'Owner',
      }))
    );
    return c.json({ syncedCount: synced.length, events: synced });
  } catch (err: any) {
    return c.json({ error: err.message || 'Failed to sync events' }, 500);
  }
});

// --- IMPORT ---
app.post('/api/import/events', async (c) => {
  try {
    const service = new DataService(c.env);
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const body = await c.req.json<{
      events: Omit<PetEvent, 'id' | 'createdAt'>[];
    }>();

    if (!body.events || !body.events.length) {
      return c.json({ error: 'Missing events array' }, 400);
    }

    for (const evt of body.events) {
      if (!evt.householdId || !evt.petId) {
        return c.json({ error: 'Each event must include householdId and petId' }, 400);
      }
      const isMember = await service.isHouseholdMember(user.id, evt.householdId);
      if (!isMember) {
        return c.json({ error: 'Forbidden: Household access denied' }, 403);
      }
      const pet = await service.getPet(evt.petId);
      if (!pet || pet.householdId !== evt.householdId) {
        return c.json({ error: 'Forbidden: Pet does not belong to specified household' }, 403);
      }
    }

    const result = await service.importEvents(body.events);
    return c.json(result);
  } catch (err: any) {
    return c.json({ error: err.message || 'Import failed' }, 500);
  }
});

app.post('/api/import/dognotes', async (c) => {
  try {
    const service = new DataService(c.env);
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const body = await c.req.json<{
      householdId: string;
      petId: string;
      items: DogNotesImportItem[];
    }>();

    if (!body.items || !body.items.length || !body.householdId || !body.petId) {
      return c.json({ error: 'Missing householdId, petId, or items array' }, 400);
    }

    const isMember = await service.isHouseholdMember(user.id, body.householdId);
    if (!isMember) {
      return c.json({ error: 'Forbidden: Household access denied' }, 403);
    }

    const pet = await service.getPet(body.petId);
    if (!pet || pet.householdId !== body.householdId) {
      return c.json({ error: 'Forbidden: Pet does not belong to specified household' }, 403);
    }

    const result = await service.importDogNotesItems(body.items, body.householdId, body.petId);
    return c.json(result);
  } catch (err: any) {
    return c.json({ error: err.message || 'Import failed' }, 500);
  }
});

// --- ANALYTICS ---
app.get('/api/pets/:petId/analytics', async (c) => {
  try {
    const service = new DataService(c.env);
    const petId = c.req.param('petId');
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const pet = await service.getPet(petId);
    if (!pet) {
      return c.json({ error: 'Pet not found' }, 404);
    }

    const isMember = await service.isHouseholdMember(user.id, pet.householdId);
    if (!isMember) {
      return c.json({ error: 'Forbidden' }, 403);
    }

    const startDate = c.req.query('startDate');
    const endDate = c.req.query('endDate');
    const analytics = await service.getAnalytics(petId, { startDate, endDate });
    return c.json(analytics);
  } catch (err: any) {
    return c.json({ error: err.message || 'Failed to get analytics' }, 500);
  }
});

// --- WALKS ---
app.post('/api/walks', async (c) => {
  try {
    const service = new DataService(c.env);
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const body = await c.req.json();
    let targetHouseholdId = body.householdId;
    if (!targetHouseholdId && body.petId) {
      const pet = await service.getPet(body.petId);
      if (pet) {
        targetHouseholdId = pet.householdId;
      }
    }

    if (!targetHouseholdId) {
      return c.json({ error: 'householdId or valid petId is required' }, 400);
    }

    const isMember = await service.isHouseholdMember(user.id, targetHouseholdId);
    if (!isMember) {
      return c.json({ error: 'Forbidden' }, 403);
    }

    if (body.petId) {
      const pet = await service.getPet(body.petId);
      if (!pet || pet.householdId !== targetHouseholdId) {
        return c.json({ error: 'Forbidden: Pet does not belong to specified household' }, 403);
      }
    }

    const walk = await service.saveWalkRoute({ ...body, householdId: targetHouseholdId });
    return c.json(walk, 201);
  } catch (err: any) {
    return c.json({ error: err.message || 'Failed to save walk' }, 500);
  }
});

app.get('/api/pets/:petId/walks', async (c) => {
  try {
    const service = new DataService(c.env);
    const petId = c.req.param('petId');
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const pet = await service.getPet(petId);
    if (!pet) {
      return c.json({ error: 'Pet not found' }, 404);
    }

    const isMember = await service.isHouseholdMember(user.id, pet.householdId);
    if (!isMember) {
      return c.json({ error: 'Forbidden' }, 403);
    }

    const walks = await service.getWalkRoutes(petId);
    return c.json(walks || []);
  } catch (err: any) {
    return c.json({ error: err.message || 'Failed to fetch walk routes' }, 500);
  }
});

export default app;
