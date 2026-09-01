# Dooty

Dooty is a fast, offline-first Progressive Web App (PWA) built for households to log and track pet activities together. It lets family members and partners record bathroom habits, meals, medications, walks, and health events in real time under shared pet profiles.

---

## Features

- **Quick Event Logging**: Log 9 event types in a single tap: Poop, Pee, Walk, Food, Water, Medicine, Grooming, Play, and Vomit. Includes optional details like stool texture, medication dosages, notes, and photos.
- **Shared Household Sync**: Multi-user household accounts. Invite family members with a short invite code so everyone updates the same timeline.
- **Live GPS Walk Tracking**: Start an active walk session to record live routes, elapsed time, distance in meters, and drop potty markers directly onto the route.
- **Interactive Potty Map**: Leaflet map view displaying pins for bathroom spots and walk paths around your neighborhood.
- **Time-of-Day Histograms & Analytics**: 24-hour hourly distribution charts to spot peak bathroom windows, daily logging streaks, and dedicated health logs for medications and vomit history.
- **Offline-First Support**: Powered by IndexedDB (`idb`). Log events during walks without cellular service; events queue up locally and sync automatically when your device reconnects.
- **DogNotes Importer**: Built-in migration tool to import historical `dognote-events-export.json` backups with dry-run validation and chunked batch processing.
- **Bilingual Interface**: Full English and Korean translation with automatic browser detection and manual language toggling.
- **Neo-Brutalist Design**: Custom high-contrast tactile UI built with bold outlines, hard shadows, warm color accents, and responsive layouts for mobile and desktop.

---

## Architecture & Tech Stack

The project is structured as an npm workspaces monorepo:

```
watslog/
├── packages/
│   ├── web/          # Frontend PWA (Lit Web Components + Vite + TypeScript)
│   ├── bff/          # API Gateway (Cloudflare Worker + Hono + Supabase)
│   └── shared/       # Shared TypeScript types, analytics, i18n, and parsers
├── supabase/
│   └── schema.sql    # PostgreSQL schema, tables, policies, and indexes
├── docs/             # Production build output for static hosting
├── specs/            # Product and architecture specifications
└── package.json      # Monorepo root workspace config
```

### Package Overview

1. **`@dooty/web` (`packages/web`)**
   - Built with Lit 3 web components and TypeScript.
   - Bundled with Vite and `vite-plugin-pwa` for service worker offline caching.
   - Uses Leaflet for map rendering and GPS route tracking.
   - Uses `idb` for IndexedDB offline event queues.

2. **`@dooty/bff` (`packages/bff`)**
   - Cloudflare Worker backend-for-frontend built with Hono.
   - Manages authentication sessions, household membership validation, event CRUD, batch synchronization, and DogNotes file imports.
   - Communicates with Supabase PostgreSQL via `@supabase/supabase-js`.

3. **`@dooty/shared` (`packages/shared`)**
   - Pure TypeScript library shared across web and bff.
   - Contains domain models, DTOs, i18n dictionaries (EN/KO), streak calculation logic, 24-hour histogram aggregators, and the DogNotes JSON parser.

4. **Supabase (`supabase/schema.sql`)**
   - Tables: `households`, `household_members`, `household_invites`, `pets`, `events`, `walk_routes`, `event_photos`.
   - Row-level security and relational integrity across household boundaries.

---

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm 10 or higher
- A Supabase project (for database and auth)
- Cloudflare Wrangler CLI (optional, for deploying the worker)

### Installation

Clone the repository and install dependencies at the root:

```bash
git clone https://github.com/warmsynths/dooty.git
cd dooty
npm install
```

### Environment Configuration

1. Configure the BFF environment file in `packages/bff/.dev.vars`:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
SUPABASE_ANON_KEY=your-supabase-anon-key
```

2. (Optional) In `packages/web/vite.config.ts`, adjust the proxy target if running the BFF locally:

```ts
// packages/web/vite.config.ts
server: {
  port: 5173,
  proxy: {
    '/api': {
      target: process.env.BFF_TARGET_URL || 'http://localhost:8787',
      changeOrigin: true,
    },
  },
}
```

3. Set up the database:
   - Run the SQL statements from `supabase/schema.sql` in your Supabase SQL Editor.

---

## Development Scripts

Run scripts from the repository root:

- **Start Web Dev Server**:
  ```bash
  npm run dev
  ```
  Starts the Vite dev server at `http://localhost:5173`.

- **Start Web + BFF Concurrently**:
  ```bash
  npm run dev:all
  ```
  Runs both the Cloudflare Worker (`http://localhost:8787`) and the Vite web client concurrently.

- **Build All Packages**:
  ```bash
  npm run build
  ```
  Compiles `@dooty/shared`, checks `@dooty/bff`, and outputs the production web build to `docs/`.

- **Run Tests**:
  ```bash
  npm run test
  ```
  Runs the unit test suite in `@dooty/shared`.

---

## Testing

Shared logic tests cover parsers, analytics algorithms, and localization:

```bash
npm run test --workspace=@dooty/shared
```

Test files are located in `packages/shared/tests/`:
- `dognotes.test.ts`: Validates DogNotes JSON parsing, error handling, and event type normalization.
- `analytics.test.ts`: Tests consecutive day streak logic and 24-hour histogram time bucket distribution.
- `i18n.test.ts`: Validates translation dictionary coverage for English and Korean.
- `csv.test.ts`: Tests export and import data conversions.

---

## Production Deployment

- **Web Frontend**: The frontend builds directly to the `docs/` folder for static hosting (such as GitHub Pages or Cloudflare Pages). Run `npm run build` to update.
- **Worker BFF**: Deploy the backend gateway with Wrangler:
  ```bash
  cd packages/bff
  npx wrangler deploy
  ```

---

## License

GPL-3.0 License. See `LICENSE` for details.
