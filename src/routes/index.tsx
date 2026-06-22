import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Clock,
  MapPin,
  Headphones,
  ArrowRight,
  Package,
  PackageCheck,
  CheckCircle2,
  Radio,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import heroAsset from "@/assets/hero-truck.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AliShip Logistics | Fast Courier & Parcel Delivery Across Kenya" },
      {
        name: "description",
        content:
          "AliShip Logistics is a registered Kenyan courier moving parcels across Nairobi, Mombasa and Nakuru — same-day pickups, real-time tracking and proof of delivery.",
      },
      { property: "og:title", content: "AliShip Logistics | Fast Courier & Parcel Delivery Across Kenya" },
      {
        property: "og:description",
        content:
          "Same-day parcel pickups, real-time tracking and proof of delivery across Kenya.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroAsset },
      { name: "twitter:image", content: heroAsset },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroAsset, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "/#aliship",
          additionalType: "https://schema.org/CourierService",
          name: "AliShip Logistics Limited",
          url: "/",
          telephone: "+254100293388",
          email: "logistics.aliship@gmail.com",
          areaServed: [
            { "@type": "City", name: "Nairobi" },
            { "@type": "City", name: "Mombasa" },
            { "@type": "City", name: "Nakuru" },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Philadelphia House, Shop 525, Tom Mboya Street & Hakati Road",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
          sameAs: [],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <ServicesGrid eyebrow="Our Services" heading="What We Offer" />
      <WhySection />
      <HowItWorks />
      <CtaStrip />
    </SiteLayout>
  );
}

const chips = [
  { icon: ShieldCheck, title: "Safe &", title2: "Secure" },
  { icon: Clock, title: "Fast &", title2: "Reliable" },
  { icon: MapPin, title: "Nationwide", title2: "Coverage" },
  { icon: Headphones, title: "Dedicated", title2: "Support" },
];

const trustStrip = [
  { icon: CheckCircle2, label: "Registered Logistics Company" },
  { icon: MapPin, label: "Mombasa, Nairobi & County-Wide Coverage" },
  { icon: Radio, label: "Real-Time Tracking" },
];


function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      {/* Background image */}
      <img
        src={heroAsset}
        alt="AliShip Logistics branded delivery truck at sunset with a courier in branded uniform carrying an AliShip parcel"
        width={1792}
        height={1024}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-right"
      />
      {/* Left→right dark gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent md:from-black md:via-black/70 md:to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-none"
        aria-hidden
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:py-36">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl font-black uppercase leading-[0.95] text-white sm:text-6xl md:text-7xl">
            We Deliver{" "}
            <span className="block text-[#FF6600]">More Than</span>
            <span className="block">Parcels.</span>
          </h1>

          <div className="mt-6 h-1 w-20 bg-[#FF6600]" />

          <p className="font-display mt-6 text-2xl font-bold text-white">
            Fast. Reliable. Secure.
          </p>
          <p className="mt-3 max-w-md text-white/80">
            From local deliveries to nationwide shipping, AliShip Logistics
            ensures your parcels reach their destination safely and on time.{" "}
            <Link to="/track" className="text-[#FF6600] underline-offset-4 hover:underline">
              Track a shipment
            </Link>{" "}
            or{" "}
            <Link to="/contact" className="text-[#FF6600] underline-offset-4 hover:underline">
              book a pickup
            </Link>
            .
          </p>

          <ul className="mt-8 grid max-w-lg grid-cols-4 gap-3">
            {chips.map((c) => (
              <li key={c.title2} className="flex flex-col items-start">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#FF6600]/40 bg-[#FF6600]/10 text-[#FF6600]">
                  <c.icon size={20} />
                </span>
                <span className="font-display mt-2 text-[10px] font-bold uppercase tracking-wider text-white/85 leading-tight">
                  {c.title}
                  <br />
                  {c.title2}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF6600] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-[#FF6600]/30 transition hover:bg-[#ff7a1f]"
            >
              <Package size={16} /> Send a Parcel <ArrowRight size={16} />
            </Link>
            <Link
              to="/track"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#FF6600] bg-black/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#FF6600] backdrop-blur transition hover:bg-[#FF6600]/10"
            >
              <MapPin size={16} /> Track Shipment
            </Link>
          </div>
        </div>
      </div>

      {/* Qualitative trust strip */}
      <div className="relative border-t border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-5 md:justify-between md:px-8">
          {trustStrip.map((t) => (
            <div key={t.label} className="flex items-center gap-2 text-white/85">
              <t.icon size={18} className="text-[#FF6600]" />
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em]">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: PackageCheck,
    title: "Door-to-door",
    body: "Pickups from your location, delivered straight to the recipient.",
  },
  {
    icon: Clock,
    title: "Same-day options",
    body: "Express service available for urgent shipments within Nairobi.",
  },
  {
    icon: ShieldCheck,
    title: "Secure handling",
    body: "Every parcel scanned at every stage with proof of delivery.",
  },
  {
    icon: MapPin,
    title: "Live tracking",
    body: "Customers track in real time using only the waybill number.",
  },
];

function WhySection() {
  return (
    <section className="bg-[#f1f2f4] py-20 text-black">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-display text-4xl font-extrabold">Why AliShip</h2>
          <p className="mx-auto mt-3 max-w-2xl text-black/60">
            Built for retailers, businesses and individuals across Kenya who need
            parcels to just arrive — on time, every time.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <f.icon className="text-[#FF6600]" size={28} />
              <h3 className="font-display mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-1 text-sm text-black/65">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Book", d: "Request a pickup from our office or via WhatsApp." },
  { n: "02", t: "Scan", d: "We pick up, scan, and bag your parcel for the route." },
  { n: "03", t: "Track & deliver", d: "Recipient gets WhatsApp updates and signs on delivery." },
];

function HowItWorks() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-center text-4xl font-extrabold text-white">
          How it works
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-white/10 bg-[#0c0c0c] p-6"
            >
              <div className="font-display text-xs font-bold text-[#FF6600]">
                {s.n}
              </div>
              <h3 className="font-display mt-2 text-xl font-bold text-white">
                {s.t}
              </h3>
              <p className="mt-2 text-sm text-white/65">{s.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-white/55">
          Ready to ship?{" "}
          <Link to="/contact" className="font-semibold text-[#FF6600] underline-offset-4 hover:underline">
            Contact our team
          </Link>{" "}
          or{" "}
          <Link to="/track" className="font-semibold text-[#FF6600] underline-offset-4 hover:underline">
            track an existing parcel
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function CtaStrip() {
  return (
    <section className="bg-[#FF6600]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 md:flex-row">
        <div>
          <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
            Have a parcel ready to move?
          </h2>
          <p className="mt-1 text-white/90">We'll pick it up today.</p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-black/80"
        >
          Book a pickup <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}