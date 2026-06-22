# AliShip Logistics — Public Website

Marketing + live tracking frontend for AliShip Logistics Limited.
`aliship.co.ke`

## Stack

- **Framework:** TanStack Start (React, file-based routing)
- **Styling:** Tailwind, brand theme (dark + orange/green accents)
- **Fonts:** Urbanist (headings), DM Sans (body)
- **Backend:** Existing Supabase project (shared with AliShip internal
  ops app) — **no new tables created**, this site only reads via the
  `track_parcel` RPC function
- **Built in:** Lovable, exported to GitHub
- **Hosting:** Vercel
- **Package manager:** npm

## Setup

```bash
npm install
cp .env.example .env.local   # fill in Supabase URL + anon key
npm run dev
```

### Env vars

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Anon key only — never the service_role key, this is a public frontend.

## Routes (file-based — TanStack Start)

This project uses **file-based routing**. Every `.tsx` file in
`src/routes/` is a route. Don't create `src/pages/`,
`src/routes/_app/index.tsx`, or `app/layout.tsx` — those are Next.js /
Remix conventions, not TanStack Start. The only root layout is
`src/routes/__root.tsx`.

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `services.tsx` | `/services` |
| `track.tsx` | `/track` |
| `contact.tsx` | `/contact` |
| `users/$id.tsx` | dynamic param (bare `$`, no curly braces) |
| `posts/{-$category}.tsx` | optional segment |
| `files/$.tsx` | splat — read via `_splat`, never `*` |
| `_layout.tsx` | layout route, renders `<Outlet />` |
| `__root.tsx` | app shell, wraps every page |

`routeTree.gen.ts` is auto-generated — don't hand-edit it, it regenerates
on dev/build.

## Live data: parcel tracking

The `/track` page is the only page with a backend dependency. It calls
an existing Postgres function on Supabase:

```ts
const { data, error } = await supabase.rpc('track_parcel', {
  p_tracking_number: input
})
```

**Returns:** an array of rows (one per status event), not a nested
object — `current_status` and `rider_phone` repeat on every row.

```ts
{
  tracking_number: string
  current_status: ParcelStatus
  event_status: string | null
  event_notes: string | null
  event_time: string // ISO timestamp
  rider_phone: string | null
}[]
```

- Empty array = tracking number not found → show the
  "couldn't find that number" + WhatsApp fallback state
- `rider_phone` is `null` until `profiles.phone` is populated on the
  internal app — hide the "Contact Rider" button when null
- The function already excludes sender/receiver names, phone, location,
  and amount. **Never add fields to this query that expose those** —
  this is a public, unauthenticated endpoint.

## What NOT to do

- Don't create a new Supabase project — this connects to the existing
  AliShip one
- Don't add auth/login — entire site is public, no accounts
- Don't add a stats bar with fabricated numbers (parcels delivered,
  customer count, etc.) unless the number is real
- Don't list a service (warehousing, business credit accounts, LTL,
  etc.) until it's confirmed operational — check before adding cards
  to `/services`

## Deploy

Two paths depending on where you're editing:

**While still iterating in Lovable:**
Just use Lovable's publish flow. Don't push local edits back to GitHub
in parallel — fighting syncs between Lovable's editor and manual commits
gets messy.

**Once fully handed off from Lovable:**
1. Lovable → Connect to GitHub (one-time, pushes the real repo)
2. Clone locally, `npm install`
3. Connect repo to Vercel, set the env vars above in Vercel's dashboard
4. Push to `main` → auto-deploys
5. Point `aliship.co.ke` DNS at Vercel (A/CNAME records, shown in
   Vercel's domain settings)

## SEO checklist (don't skip after any major content change)

- Unique `<title>` + meta description per route
- LocalBusiness JSON-LD on `/` and `/about` — keep `areaServed` honest
  (only list cities actually served)
- Sitemap + robots.txt stay in sync if routes change
- Re-submit to Google Search Console after structural changes
