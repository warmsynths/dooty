# Product Specification: Supabase Authentication and Multi-Household Management

## Problem Statement

Users of Dooty/Watslog currently create household and pet records in an unauthenticated or device-locked state without real user account credentials (Email and Password). Consequently, when a user switches devices, opens an incognito window, clears browser local storage, or experiences cache evictions, they are locked out of their existing household records and presented only with the initial setup form. Furthermore, pet parents, partners, roommates, and professional dog walkers often manage or contribute to multiple pet households (e.g. their own pet at home plus walking a neighbor or client's dog), but the system lacks the ability for a single authenticated user account to belong to and switch between multiple households seamlessly.

## Solution

Implement an enterprise-grade Supabase Authentication layer with Email and Password credentials integrated directly into the Cloudflare Worker Backend-for-Frontend (BFF) gateway and Lit Web Component PWA. The system presents a clean, focused two-tab authentication interface (**Log In** and **Sign Up**), granting instant access upon registration without email verification friction. It supports both **Creating a New Household** and **Joining an Existing Household** via a 6-character invite code during sign-up, and empowers logged-in users to belong to multiple households with an in-app household switcher and an in-app invite code entry flow in Settings.

---

## User Stories

1. As a returning pet owner, I want to log in using my email and password, so that I can access my pet's logs, walks, and analytics from any phone, tablet, or browser.
2. As a new pet owner, I want to sign up with my email, password, and name while simultaneously creating my new household and pet profile, so that I can start logging right away in one seamless flow.
3. As a new partner, family member, or dog walker who received an invite code, I want to sign up with my email and password while entering the 6-character invite code, so that I immediately join the shared household upon account creation.
4. As an invited user, I want to enter my name and specify my role/relationship as free text (e.g. "Partner", "Mom", "Dog Walker"), so that my contributions to the pet's timeline are clearly attributed to me.
5. As a newly registered user, I want instant access to the application dashboard without having to leave the app to click an email verification link, so that my onboarding experience is friction-free.
6. As a logged-in user who manages their own dog and also walks a friend's dog, I want my account to belong to multiple households simultaneously, so that I don't need to create separate accounts for different pets.
7. As a logged-in user belonging to multiple households, I want an intuitive household switcher in Settings and the top navigation, so that I can switch active households with a single tap.
8. As a logged-in user who receives an invite code from another household, I want to enter the code directly from my Settings tab without having to log out, so that I can add the new household to my existing account.
9. As a pet owner sharing my household, I want to generate a 6-character invite code with a 7-day expiration from Settings, so that I can easily copy and text it to family members or dog walkers.
10. As a user on a mobile device, I want my authenticated session token and active household data to be securely persisted in local storage, so that reloading the page or reopening the PWA never flashes the login screen or loses my state.
11. As a user experiencing a brief cellular network disconnect or offline walk, I want the app to retain my authenticated session and pet timeline from local cache, so that I am never logged out during offline use.
12. As a user logging out, I want my local session token and cached household data to be completely purged, so that my personal data is protected on shared devices.
13. As a user entering an incorrect password or non-existent email, I want clear, inline error feedback that keeps my entered email in the form, so that I can correct my mistake without retyping everything.
14. As a bilingual user, I want all authentication labels, placeholders, role hints, error messages, and household switcher options to be fully translated in both English and Korean, so that all household members can use their native language.
15. As a developer, I want all auth and household data requests to pass through the Cloudflare Worker BFF, so that Supabase Service Role keys and database row-level permissions are strictly enforced on the server.

---

## Implementation Decisions

### 1. Architectural Topology & Authentication Boundary
- **Unified BFF Auth Gateway**: The client-side Lit PWA does not directly talk to Supabase Auth; all authentication requests route through the Cloudflare Worker BFF (`/api/auth/*`).
- **Session Tokens**: The BFF returns Supabase JWT access tokens (`access_token` and `refresh_token`) to the client upon successful login or sign-up. The client stores the JWT in `localStorage` under `dooty_auth_token` and attaches `Authorization: Bearer <token>` to all subsequent API calls.
- **Immediate Onboarding (No Email Verification Barrier)**: The BFF executes `supabase.auth.signUp({ email, password, options: { data: { display_name } } })`. Supabase is configured for instant login (or auto-confirmed session creation), returning an active session immediately upon registration.

### 2. Multi-Household Data Model & Relationships
- **Database Schema**:
  - `households`: Stores household metadata (`id UUID PRIMARY KEY`, `name TEXT`).
  - `household_members`: Junction table linking `user_id UUID REFERENCES auth.users(id)` to `household_id UUID REFERENCES households(id)` with `role TEXT` and `display_name TEXT`. Unique constraint on `(household_id, user_id)` allows a single user to exist in multiple households across separate rows.
  - `household_invites`: Stores active invite codes (`id UUID`, `household_id UUID`, `code TEXT UNIQUE`, `expires_at TIMESTAMPTZ`).
  - `pets`: Linked to `household_id`.
  - `events`: Linked to `household_id` and `pet_id` with `logged_by_name` and `logged_by_user_id`.

### 3. API Contracts (BFF Routes)
- `POST /api/auth/signup`:
  - **Payload**:
    ```ts
    interface SignUpDTO {
      email: string;
      password: string;
      displayName: string;
      mode: 'create' | 'join';
      // If mode === 'create'
      householdName?: string;
      pet?: { name: string; species: 'dog' | 'cat' | 'other'; breed?: string };
      // If mode === 'join'
      inviteCode?: string;
      role?: string;
    }
    ```
  - **Response**: `{ user: AuthUser, token: string, activeHousehold: Household, households: Household[] }`.
- `POST /api/auth/signin`:
  - **Payload**: `{ email: string; password: string }`.
  - **Response**: `{ user: AuthUser, token: string, activeHousehold: Household, households: Household[] }`.
- `GET /api/auth/me`:
  - **Header**: `Authorization: Bearer <token>`.
  - **Response**: `{ user: AuthUser, activeHousehold: Household, households: Household[] }`.
- `POST /api/auth/switch-household`:
  - **Payload**: `{ householdId: string }`.
  - **Response**: `{ activeHousehold: Household }`.
- `POST /api/households/join-authenticated`:
  - **Payload**: `{ code: string; role?: string }`.
  - **Response**: `{ activeHousehold: Household, households: Household[] }`.

### 4. Client State & Lifecycle (`AppStateManager`)
- **Startup Lifecycle (`init()`)**:
  1. Synchronously reads `dooty_household_data` and `dooty_auth_token` from `localStorage` in the constructor to eliminate any visual flash of the login screen.
  2. Asynchronously calls `ApiClient.getMe()` to revalidate the token, refresh household/pet lists, and sync pending offline events.
  3. If offline or network unavailable, the cached session remains active. If the token is explicitly rejected (401 Unauthorized), the session is cleanly reset to the auth screen.
- **Sign Out (`signOut()`)**:
  - Clears `dooty_auth_token`, `dooty_household_id`, `dooty_household_data`, and `dooty_pet_id` from `localStorage`.
  - Resets reactive in-memory state and redirects to the **Log In** tab.

### 5. User Interface Specifications (`<dooty-auth>`)
- **Clean 2-Tab Segmented Switcher**:
  - Tab 1: **🔑 Log In** $\rightarrow$ Email input, Password input, Submit button.
  - Tab 2: **✨ Sign Up** $\rightarrow$ Email input, Password input, Your Name input, followed by a sub-segmented toggle:
    - *Option A: Create Household* (Household Name, Pet Name, Pet Type pills, Breed).
    - *Option B: Join Household* (6-Digit Invite Code, Role / Relationship text input).
- **No Demo Mode**: The "Try Demo" mode and sample data generator are completely removed from the UI.
- **Design System Consistency**: Strict neo-brutalist styling with `3px` solid `#17140F` borders, hard offset shadows (`4px 4px 0 #17140F`), and high-contrast coral/yellow action buttons.

---

## Testing Decisions

### What Makes a Good Test
- Tests evaluate end-to-end user workflows and public API interfaces (HTTP requests, token validation, session persistence, and error emissions) rather than private component states.
- Mocking is restricted to external Supabase network boundaries in isolated unit tests; integration tests against the local BFF verify real schema constraints.

### Modules Tested
1. **BFF Authentication Gateway (`packages/bff/src/services/store.ts` & `index.ts`)**:
   - `signUpUser`: Test creation with new household, creation via invite code, rejection on invalid invite codes, and duplicate email errors.
   - `signInUser`: Test successful authentication, invalid password rejection, and multi-household lookup.
   - `getMe`: Test valid token resolution, expired token rejection (401), and multi-household payload completeness.
   - `switchHousehold`: Test switching to an authorized household vs. rejecting access to a household the user does not belong to (403).
2. **Frontend State & Storage Manager (`packages/web/src/state/appState.ts`)**:
   - Test instant session restoration from `localStorage` on instantiation.
   - Test graceful offline fallback when `ApiClient.getMe()` fails on startup.
   - Test complete storage cleanup on `signOut()`.
3. **Web Authentication Component (`packages/web/src/components/dooty-auth.ts`)**:
   - Test validation errors (empty email, short password, missing pet name).
   - Test tab switching between Log In and Sign Up (Create vs Join).
   - Test error banner rendering on failed API responses.

---

## Out of Scope

- Third-party social logins (Google, Apple, Facebook OAuth) — Email and Password authentication is the primary mechanism.
- Complex RBAC permission matrices (roles are informational for timeline attribution, while all household members can log pet events and view analytics).
- Password reset email delivery / SMTP customization (handled via default Supabase project settings if enabled later).
- Public pet profile discovery or public feed sharing.

---

## Further Notes

- The Supabase schema already supports `user_id UUID REFERENCES auth.users(id)` across `household_members`, `household_invites`, and `events`.
- All code across `packages/shared`, `packages/bff`, and `packages/web` adheres to TypeScript strict mode.
