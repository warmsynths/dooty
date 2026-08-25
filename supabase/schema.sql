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
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 5. EVENTS (Food, Water, Walk, Playing, Pee, Poop, Medicine, Grooming, Vomit, Weight, Vet, Symptom, Nap, Training)
CREATE TABLE IF NOT EXISTS public.events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    household_id UUID NOT NULL REFERENCES public.households(id) ON DELETE CASCADE,
    pet_id UUID NOT NULL REFERENCES public.pets(id) ON DELETE CASCADE,
    event_type TEXT NOT NULL CHECK (event_type IN ('poop', 'pee', 'walk', 'food', 'water', 'medicine', 'grooming', 'playing', 'vomit', 'weight', 'vet', 'symptom', 'nap', 'training')),
    logged_by_name TEXT NOT NULL,
    logged_by_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    timestamp TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    notes TEXT DEFAULT '',
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 6. WALK ROUTES
CREATE TABLE IF NOT EXISTS public.walk_routes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID REFERENCES public.events(id) ON DELETE CASCADE,
    household_id UUID NOT NULL REFERENCES public.households(id) ON DELETE CASCADE,
    pet_id UUID NOT NULL REFERENCES public.pets(id) ON DELETE CASCADE,
    started_at TIMESTAMPTZ NOT NULL,
    ended_at TIMESTAMPTZ,
    distance_meters NUMERIC DEFAULT 0,
    coordinates JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
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

-- Helper security function: Check user membership in household
CREATE OR REPLACE FUNCTION public.is_household_member(h_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.household_members
        WHERE household_id = h_id AND user_id = auth.uid()
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Policies for households
CREATE POLICY "Members can view their households" ON public.households
    FOR SELECT USING (public.is_household_member(id));

CREATE POLICY "Users can create households" ON public.households
    FOR INSERT WITH CHECK (true);

-- Policies for household_members
CREATE POLICY "Members can view fellow household members" ON public.household_members
    FOR SELECT USING (public.is_household_member(household_id));

CREATE POLICY "Members can manage household members" ON public.household_members
    FOR ALL USING (public.is_household_member(household_id));

-- Policies for pets
CREATE POLICY "Members can view household pets" ON public.pets
    FOR SELECT USING (public.is_household_member(household_id));

CREATE POLICY "Members can insert/update household pets" ON public.pets
    FOR ALL USING (public.is_household_member(household_id));

-- Policies for events
CREATE POLICY "Members can view household events" ON public.events
    FOR SELECT USING (public.is_household_member(household_id));

CREATE POLICY "Members can insert/update household events" ON public.events
    FOR ALL USING (public.is_household_member(household_id));

-- Policies for walk routes
CREATE POLICY "Members can view walk routes" ON public.walk_routes
    FOR SELECT USING (public.is_household_member(household_id));

CREATE POLICY "Members can insert walk routes" ON public.walk_routes
    FOR ALL USING (public.is_household_member(household_id));
