-- ==============================================================================
-- WATSLOG / DOOTY DATABASE SCHEMA (Supabase PostgreSQL)
-- ==============================================================================

-- Enable UUID extension if not enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. HOUSEHOLDS
CREATE TABLE IF NOT EXISTS public.households (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL DEFAULT 'My Household',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. HOUSEHOLD MEMBERS
CREATE TABLE IF NOT EXISTS public.household_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    household_id UUID NOT NULL REFERENCES public.households(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    display_name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member')),
    joined_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    UNIQUE (household_id, user_id)
);

-- 3. HOUSEHOLD INVITES
CREATE TABLE IF NOT EXISTS public.household_invites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    household_id UUID NOT NULL REFERENCES public.households(id) ON DELETE CASCADE,
    code TEXT NOT NULL UNIQUE,
    created_by UUID REFERENCES auth.users(id),
    expires_at TIMESTAMPTZ NOT NULL DEFAULT (timezone('utc'::text, now()) + interval '7 days'),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 4. PETS
CREATE TABLE IF NOT EXISTS public.pets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    household_id UUID NOT NULL REFERENCES public.households(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    species TEXT NOT NULL DEFAULT 'dog',
    breed TEXT,
    birthday DATE,
    avatar_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    UNIQUE (id, household_id)
);

-- 5. EVENTS (Food, Water, Walk, Playing, Pee, Poop, Medicine, Grooming, Vomit, Weight, Vet, Symptom, Nap, Training)
CREATE TABLE IF NOT EXISTS public.events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    household_id UUID NOT NULL REFERENCES public.households(id) ON DELETE CASCADE,
    pet_id UUID NOT NULL,
    event_type TEXT NOT NULL CHECK (event_type IN ('poop', 'pee', 'walk', 'food', 'water', 'medicine', 'grooming', 'playing', 'vomit', 'weight', 'vet', 'symptom', 'nap', 'training')),
    logged_by_name TEXT NOT NULL,
    logged_by_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    timestamp TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    notes TEXT DEFAULT '',
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    FOREIGN KEY (pet_id, household_id) REFERENCES public.pets(id, household_id) ON DELETE CASCADE
);

-- 6. WALK ROUTES
CREATE TABLE IF NOT EXISTS public.walk_routes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID REFERENCES public.events(id) ON DELETE CASCADE,
    household_id UUID NOT NULL REFERENCES public.households(id) ON DELETE CASCADE,
    pet_id UUID NOT NULL,
    started_at TIMESTAMPTZ NOT NULL,
    ended_at TIMESTAMPTZ,
    distance_meters NUMERIC DEFAULT 0,
    coordinates JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    FOREIGN KEY (pet_id, household_id) REFERENCES public.pets(id, household_id) ON DELETE CASCADE
);

-- INDEXES and CONSTRAINTS for performance and deduplication
CREATE INDEX IF NOT EXISTS idx_events_household_pet ON public.events(household_id, pet_id);
CREATE INDEX IF NOT EXISTS idx_events_timestamp ON public.events(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_events_type ON public.events(event_type);
CREATE INDEX IF NOT EXISTS idx_household_members_user ON public.household_members(user_id);
CREATE INDEX IF NOT EXISTS idx_household_invites_code ON public.household_invites(code);
ALTER TABLE public.events DROP CONSTRAINT IF EXISTS events_pet_timestamp_type_unique;
ALTER TABLE public.events ADD CONSTRAINT events_pet_timestamp_type_unique UNIQUE (pet_id, timestamp, event_type);

-- ROW LEVEL SECURITY (RLS)
ALTER TABLE public.households ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.household_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.household_invites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.walk_routes ENABLE ROW LEVEL SECURITY;

-- Helper security functions with explicit search_path
CREATE OR REPLACE FUNCTION public.is_household_member(h_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.household_members
        WHERE household_id = h_id AND user_id = auth.uid()
    );
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public, pg_temp;

CREATE OR REPLACE FUNCTION public.get_household_role(h_id UUID)
RETURNS TEXT AS $$
    SELECT role FROM public.household_members
    WHERE household_id = h_id AND user_id = auth.uid()
    LIMIT 1;
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, pg_temp;

CREATE OR REPLACE FUNCTION public.is_household_admin_or_owner(h_id UUID)
RETURNS BOOLEAN AS $$
    SELECT EXISTS (
        SELECT 1 FROM public.household_members
        WHERE household_id = h_id 
          AND user_id = auth.uid() 
          AND role IN ('owner', 'admin')
    );
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, pg_temp;

-- Secure join function for authenticated users with invite code
CREATE OR REPLACE FUNCTION public.join_household_with_code(invite_code TEXT, member_display_name TEXT)
RETURNS UUID AS $$
DECLARE
    target_household_id UUID;
    calling_user_id UUID;
BEGIN
    calling_user_id := auth.uid();
    IF calling_user_id IS NULL THEN
        RAISE EXCEPTION 'Authentication required to join household';
    END IF;

    SELECT household_id INTO target_household_id
    FROM public.household_invites
    WHERE code = UPPER(TRIM(invite_code)) AND expires_at > timezone('utc'::text, now());

    IF target_household_id IS NULL THEN
        RAISE EXCEPTION 'Invalid or expired invite code';
    END IF;

    INSERT INTO public.household_members (household_id, user_id, display_name, role)
    VALUES (target_household_id, calling_user_id, COALESCE(NULLIF(TRIM(member_display_name), ''), 'Member'), 'member')
    ON CONFLICT (household_id, user_id) DO NOTHING;

    RETURN target_household_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp;

-- ==============================================================================
-- RLS POLICIES
-- ==============================================================================

-- 1. Households policies
DROP POLICY IF EXISTS "Members can view their households" ON public.households;
CREATE POLICY "Members can view their households" ON public.households
    FOR SELECT USING (public.is_household_member(id));

DROP POLICY IF EXISTS "Users can create households" ON public.households;
CREATE POLICY "Users can create households" ON public.households
    FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "Owners and admins can update households" ON public.households;
CREATE POLICY "Owners and admins can update households" ON public.households
    FOR UPDATE USING (public.is_household_admin_or_owner(id));

DROP POLICY IF EXISTS "Owners can delete households" ON public.households;
CREATE POLICY "Owners can delete households" ON public.households
    FOR DELETE USING (public.get_household_role(id) = 'owner');

-- 2. Household Members policies
DROP POLICY IF EXISTS "Members can view fellow household members" ON public.household_members;
CREATE POLICY "Members can view fellow household members" ON public.household_members
    FOR SELECT USING (public.is_household_member(household_id));

DROP POLICY IF EXISTS "Users can add themselves or members can add members" ON public.household_members;
DROP POLICY IF EXISTS "Owners and admins can add members" ON public.household_members;
CREATE POLICY "Owners and admins can add members" ON public.household_members
    FOR INSERT WITH CHECK (public.is_household_admin_or_owner(household_id));

DROP POLICY IF EXISTS "Members can update household members" ON public.household_members;
DROP POLICY IF EXISTS "Members can update own profile or owners update roles" ON public.household_members;
CREATE POLICY "Members can update own profile or owners update roles" ON public.household_members
    FOR UPDATE USING (
        user_id = auth.uid() OR public.get_household_role(household_id) = 'owner'
    );

DROP POLICY IF EXISTS "Members can delete household members" ON public.household_members;
DROP POLICY IF EXISTS "Members can leave or privileged members can remove others" ON public.household_members;
CREATE POLICY "Members can leave or privileged members can remove others" ON public.household_members
    FOR DELETE USING (
        user_id = auth.uid()
        OR (public.get_household_role(household_id) = 'owner' AND role != 'owner')
        OR (public.get_household_role(household_id) = 'admin' AND role = 'member')
    );

-- 3. Household Invites policies
DROP POLICY IF EXISTS "Members can view household invites" ON public.household_invites;
CREATE POLICY "Members can view household invites" ON public.household_invites
    FOR SELECT USING (public.is_household_member(household_id));

DROP POLICY IF EXISTS "Members can create household invites" ON public.household_invites;
DROP POLICY IF EXISTS "Owners and admins can create household invites" ON public.household_invites;
CREATE POLICY "Owners and admins can create household invites" ON public.household_invites
    FOR INSERT WITH CHECK (public.is_household_admin_or_owner(household_id));

DROP POLICY IF EXISTS "Members can delete household invites" ON public.household_invites;
DROP POLICY IF EXISTS "Owners and admins can delete household invites" ON public.household_invites;
CREATE POLICY "Owners and admins can delete household invites" ON public.household_invites
    FOR DELETE USING (public.is_household_admin_or_owner(household_id));

-- 4. Pets policies
DROP POLICY IF EXISTS "Members can view household pets" ON public.pets;
CREATE POLICY "Members can view household pets" ON public.pets
    FOR SELECT USING (public.is_household_member(household_id));

DROP POLICY IF EXISTS "Members can insert/update household pets" ON public.pets;
DROP POLICY IF EXISTS "Members can insert household pets" ON public.pets;
CREATE POLICY "Members can insert household pets" ON public.pets
    FOR INSERT WITH CHECK (public.is_household_member(household_id));

DROP POLICY IF EXISTS "Members can update household pets" ON public.pets;
CREATE POLICY "Members can update household pets" ON public.pets
    FOR UPDATE USING (public.is_household_member(household_id));

DROP POLICY IF EXISTS "Owners and admins can delete household pets" ON public.pets;
CREATE POLICY "Owners and admins can delete household pets" ON public.pets
    FOR DELETE USING (public.is_household_admin_or_owner(household_id));

-- 5. Events policies
DROP POLICY IF EXISTS "Members can view household events" ON public.events;
CREATE POLICY "Members can view household events" ON public.events
    FOR SELECT USING (public.is_household_member(household_id));

DROP POLICY IF EXISTS "Members can insert/update household events" ON public.events;
DROP POLICY IF EXISTS "Members can insert household events" ON public.events;
CREATE POLICY "Members can insert household events" ON public.events
    FOR INSERT WITH CHECK (public.is_household_member(household_id));

DROP POLICY IF EXISTS "Members can update household events" ON public.events;
CREATE POLICY "Members can update household events" ON public.events
    FOR UPDATE USING (public.is_household_member(household_id));

DROP POLICY IF EXISTS "Members can delete household events" ON public.events;
CREATE POLICY "Members can delete household events" ON public.events
    FOR DELETE USING (public.is_household_member(household_id));

-- 6. Walk Routes policies
DROP POLICY IF EXISTS "Members can view walk routes" ON public.walk_routes;
CREATE POLICY "Members can view walk routes" ON public.walk_routes
    FOR SELECT USING (public.is_household_member(household_id));

DROP POLICY IF EXISTS "Members can insert walk routes" ON public.walk_routes;
CREATE POLICY "Members can insert walk routes" ON public.walk_routes
    FOR INSERT WITH CHECK (public.is_household_member(household_id));

DROP POLICY IF EXISTS "Members can update walk routes" ON public.walk_routes;
CREATE POLICY "Members can update walk routes" ON public.walk_routes
    FOR UPDATE USING (public.is_household_member(household_id));

DROP POLICY IF EXISTS "Members can delete walk routes" ON public.walk_routes;
CREATE POLICY "Members can delete walk routes" ON public.walk_routes
    FOR DELETE USING (public.is_household_member(household_id));
