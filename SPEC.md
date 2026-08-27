# Product Specification: Dooty Pet Activity Tracking PWA

## Problem Statement

Pet owners, couples, and multi-member households struggle to stay in sync regarding their pet's daily bathroom habits, feeding times, walks, and health events (such as medication and vomiting). Notes taken on disparate apps or legacy local tools like DogNotes are siloed on individual devices, lack seamless real-time synchronization between family members, do not provide intuitive geospatial visualizers for walks/potty spots, and lack structured time-of-day analytics to help owners anticipate pet needs and spot health anomalies early. Furthermore, owners need an instant, offline-capable mobile experience that works reliably even during walks with poor cell signal, in both English and Korean.

## Solution

Dooty is a fast, offline-first Progressive Web Application (PWA) built with Lit Web Components, a Cloudflare Worker Backend-for-Frontend (BFF) gateway, and Supabase PostgreSQL. It provides shared household spaces where multiple family members can log daily events for their pets simultaneously. It features a playful, tactile neo-brutalist user interface (Dooty design system), GPS walk recording, Leaflet mapping of bathroom spots, rich time-of-day histograms and health trend analytics, a robust DogNotes JSON migration tool, and seamless bilingual support (English and Korean).

---

## User Stories

1. As a pet owner, I want to log a poop event in one tap from my phone's home screen, so that I can quickly record my pet's bathroom habits without navigating complex menus.
2. As a pet owner, I want to log pee, food, water, medicine, grooming, play, and vomit events, so that I maintain a complete log of my pet's daily health and routine.
3. As a partner or family member, I want to join my household using a shared invite code/link, so that my partner and I can both view and contribute to the same pet's timeline in real time.
4. As a dog owner walking outside with spotty cellular reception, I want to log events offline, so that my actions are saved locally in IndexedDB and automatically synced to the server when I reconnect.
5. As a dog owner going on a walk, I want to start a live walk session that tracks my GPS route and duration, so that I can see the total distance walked and where my pet took bathroom breaks.
6. As a pet parent with years of historical records in DogNotes, I want to upload my `dognote-events-export.json` file and preview a dry-run breakdown before importing, so that all our historical data is preserved accurately in the new app without duplicate entries.
7. As a bilingual user, I want the app to automatically detect my language (English or Korean) and allow me to switch manually in Settings, so that all family members can comfortably use their preferred language.
8. As a pet owner, I want to see an hourly 24-hour time-of-day histogram of my pet's bathroom habits, so that I know the most probable times my dog will need to go outside.
9. As a pet owner, I want to track daily logging streaks, so that my family remains motivated and consistent in maintaining our pet's care journal.
10. As a pet owner managing medications or recovery from illness, I want to review recent vomit and medication history in a dedicated health log, so that I can provide accurate timelines to our veterinarian.
11. As an owner with multiple pets, I want to switch between pet profiles within the same household, so that logs and analytics remain separated per animal.
12. As an owner, I want to view a map showing pins for where bathroom breaks occurred, so that I can recognize spatial patterns in our neighborhood walks.
13. As a user, I want all network requests to go through a secure Cloudflare Worker BFF gateway, so that backend API secrets and database permissions are safely guarded.
14. As a developer, I want all packages in the npm workspace to be marked private, so that private schemas and client code are never published to public registries.

---

## Implementation Decisions

### 1. Architecture & Repository Topology
- **Private npm Workspaces Monorepo**: The project is structured into three workspaces with `"private": true` enforced at root and package levels:
  - `packages/web`: Lit Web Components + Vite + TypeScript PWA.
  - `packages/bff`: Cloudflare Worker API Gateway using Hono and `@supabase/supabase-js`.
  - `packages/shared`: Shared TypeScript definitions, event constants, i18n dictionaries, and DogNotes parser logic.
- **Strict Gateway Pattern**: The Lit frontend exclusively communicates with the Cloudflare Worker BFF (`/api/*`). The BFF authenticates requests, enforces household permission boundaries, and executes queries against Supabase.

### 2. Design System & User Interface
- **Theme**: Neo-brutalist "Dooty" design language.
  - Primary colors: Warm Butter Yellow (`#FFCE2E`), Coral Tangerine (`#FF5A3C`), Deep Charcoal Ink (`#17140F`), Warm Paper Cream (`#F4EFE2` / `#FFFBF2`).
  - Borders & Shadows: Bold `3px` solid `#17140F` outlines with hard offset box-shadows (`3px 3px 0 #17140F` / `5px 5px 0 #17140F`).
  - Typography: `Bricolage Grotesque` for expressive headings and counters; `Nunito` for legible body text and microcopy.
- **Form Factor**: Mobile-first responsive PWA shell with bottom tab navigation, quick-action float/grid trigger for 9 event types, and responsive desktop container frame.

### 3. Data Schema & Supabase Model
- **Households & Memberships**: Multi-tenant household model linking `auth.users` to `households` via `household_members` with roles (`owner`, `member`) and shareable invite codes in `household_invites`.
- **Pets**: Owned by a household with attributes: `id`, `household_id`, `name`, `species`, `breed`, `birthday`, `avatar_url`.
- **Events**: Canonical event stream table supporting all 9 event types:
  - `event_type`: `'poop' | 'pee' | 'walk' | 'food' | 'water' | 'medicine' | 'grooming' | 'playing' | 'vomit'`.
  - Attributes: `id`, `household_id`, `pet_id`, `logged_by_name`, `logged_by_user_id`, `timestamp`, `notes`, `latitude`, `longitude`, `metadata` (JSONB).
- **Walk Routes**: Linked to walk events storing `started_at`, `ended_at`, `distance_meters`, and `coordinates` (JSONB array of `[lat, lng, timestamp]`).

### 4. DogNotes Importer Specification
- Parser consumes standard DogNotes JSON records:
  ```ts
  interface DogNotesRecord {
    Time: string;       // ISO timestamp e.g. "2026-08-24T22:24:48.992Z"
    "Pet Name": string; // e.g. "Jjols"
    Event: string;      // "Poop" | "Vomit" | "Medicine" | "Playing" | ...
    Note: string;
    "Logged by": string;// e.g. "Reynold Ismail"
  }
  ```
- Normalizes incoming event labels to canonical lowercase keys and matches/creates the target Pet in the active household.
- Provides a client-side dry-run summary (total count, date range, breakdown by event type) before sending chunked batch requests (500 items/chunk) to `/api/import/dognotes`.

### 5. Geospatial & Map Engine
- Uses **Leaflet** with standard OpenStreetMap and Carto tile layers.
- Supports single-point marker clustering and custom Dooty emoji icons (💩, 💧, 🍖, 💊) with detail popups.
- Live walk session manager using `navigator.geolocation.watchPosition` with distance computation via Haversine formula and polyline rendering.

### 6. Analytics & Intelligence Engine
- **24-Hour Time Distribution**: Aggregates event occurrences by hour of day (0–23) to compute peak bathroom/activity windows.
- **Streak Calculation**: Calculates consecutive calendar days with at least one logged event for the pet.
- **Frequency Trends**: Daily, weekly, and monthly histograms across all event categories.
- **Health Watch**: Specialized summaries tracking vomit frequency and medication schedules.

### 7. Internationalization (i18n)
- Bilingual JSON dictionaries for English (`en`) and Korean (`ko`).
- Automatic detection via `navigator.language` with user override persisted in `localStorage`.
- Contextual date and time formatting using standard `Intl.DateTimeFormat`.

### 8. Offline Storage & PWA Service Worker
- Local **IndexedDB** database (`dooty-offline`) stores cached pet/event data and an outgoing `pending_events` sync queue.
- Online event listener reconciles pending offline events via `/api/events/batch-sync` upon reconnection.
- Vite PWA Plugin configures Service Worker cache strategies for HTML shell, CSS, Google Fonts, and Leaflet assets.

---

## Testing Decisions

### What Makes a Good Test
- Tests must evaluate observable external behaviors, API contracts, and user flows rather than internal implementation details or private component state.
- Pure business logic (parsers, streak calculators, i18n translators, offline queue reconciliation) must be thoroughly covered by automated unit tests.

### Tested Modules & Seams
1. **DogNotes Parser (`packages/shared/src/parsers`)**:
   - Validate conversion of actual `dognote-events-export.json` records to internal `PetEvent` schemas.
   - Verify handling of missing fields, unknown event types, malformed dates, and whitespace.
2. **Analytics & Streak Logic (`packages/shared/src/analytics` & `packages/bff/src/services`)**:
   - Verify streak continuity, broken streak resets, multi-event daily grouping, and 24h hourly bucket distribution.
3. **Cloudflare Worker BFF Endpoints (`packages/bff/src/routes`)**:
   - Validate HTTP request handling, input schema validation, auth token verification, and error responses for events, households, and import endpoints.
4. **Lit Web Components & Offline Queue (`packages/web/src`)**:
   - Verify component rendering of daily logs, quick log event emissions, offline queue storage, and language toggle state changes.

---

## Out of Scope

- Native iOS/Android App Store builds (the application is delivered as an installable PWA).
- Paid billing/subscription management (free multi-user household access).
- Bluetooth hardware pet collar integration.
- Public social media feeds or public pet discovery (all data is private to the household).

---

## Further Notes

- Design reference files in `c:\reyn\Projects\watslog-design\` (`Dooty.dc.html`, `Dooty - Korean.dc.html`, `Characters.dc.html`, `dognote-events-export.json`) are the direct aesthetic and data source for this implementation.
- All code across the repository uses TypeScript with strict mode enabled.
