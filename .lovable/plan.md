## Plan

### 1. Hero image swap
- Upload `user-uploads://image-8.png` as a CDN asset → `src/assets/hero-truck.jpg.asset.json` (replace existing hero asset pointer; delete old hero file).
- Use it as the hero background image (full-bleed, right-anchored object position).

### 2. Hero section restructure (`src/routes/index.tsx`)
Match the reference layout (image-7) but without fabricated stats:
- Full-bleed hero with new image as background, `object-position: right center` so truck/courier stay visible on the right.
- Overlay: linear gradient `from-black via-black/80 to-transparent` left→right (solid black on left for text contrast, transparent on right).
- Text column (left, ~55% width):
  - H1: "WE DELIVER / MORE THAN / PARCELS." — "MORE THAN" in orange (`text-primary`), Urbanist, large weight-black.
  - Short orange divider bar.
  - Subhead: "Fast. Reliable. Secure." (white).
  - Supporting paragraph (existing copy).
  - 4 inline icon+label trust chips: Safe & Secure (Shield), Fast & Reliable (Zap/Clock), Nationwide Coverage (MapPin), Dedicated Support (Headphones) — orange icons, small uppercase labels.
  - CTAs: "Send a Parcel" (solid orange → `/contact`) + "Track Shipment" (outlined orange → `/track`).
- **No stats bar.** Replace with a thin qualitative trust strip at hero bottom: "Registered Logistics Company • Mombasa & Nairobi Coverage • Real-Time Tracking" (icons + text, subtle).

### 3. Header (`src/components/site/Header.tsx`)
- Verify nav links: Home, Services, About, Track, Contact.
- Add "Services" link (new route).
- Phone button top right: "0100 293 388" with phone icon, orange pill, links to `tel:+254100293388`.

### 4. New Services section + route
- Add `src/routes/services.tsx` with full Services page using the same grid.
- Also embed a Services section on the homepage between hero and footer CTA area.
- Grid: 4 cols desktop / 2 tablet / 1 mobile, 8 cards, equal heights (`h-full`, flex layout):
  1. Parcel Delivery — Package
  2. Full Truck Load (FTL) — Truck
  3. Door-to-Door Delivery — Home
  4. Cash on Delivery (COD) — Wallet
  5. Pickup Station Services — Store/MapPin
  6. Same-Day & Scheduled Deliveries — Clock
  7. Real-Time Tracking — Radar/Navigation
  8. Dedicated Support — Headphones
- Card style: dark `bg-card` with subtle border, orange icon in tinted square, title (Urbanist), short description (DM Sans).
- Closing strip below grid: "FAST | RELIABLE | SECURE" — three icons + labels in a horizontal row, orange dividers.

### 5. Cleanup
- Remove the 10K+/5K+/50+/99% stats bar from index.
- Keep all existing SEO/head metadata; add `head()` for the new `/services` route (title, description, og:*, canonical).
- Add `/services` to sitemap.

### Files
- **New:** `src/routes/services.tsx`, `src/components/site/ServicesGrid.tsx`, new `src/assets/hero-truck.jpg.asset.json` (replaces existing)
- **Edited:** `src/routes/index.tsx`, `src/components/site/Header.tsx`, `src/routes/sitemap[.]xml.ts`
