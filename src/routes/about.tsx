import { createFileRoute } from "@tanstack/react-router";
import { Truck, Users, MapPin, Award } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AliShip Logistics | Registered Courier Company in Kenya" },
      {
        name: "description",
        content:
          "AliShip Logistics Limited is a registered Kenyan courier serving Nairobi, Mombasa and Nakuru with same-day pickups, country-wide express and proof of delivery.",
      },
      { property: "og:title", content: "About AliShip Logistics | Registered Courier Company in Kenya" },
      {
        property: "og:description",
        content:
          "Registered courier company in Kenya — same-day pickups, country-wide express, proof of delivery.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "/#aliship",
          name: "AliShip Logistics Limited",
          description:
            "Registered courier service in Kenya offering same-day pickups, country-wide express delivery and real-time parcel tracking.",
          url: "/",
          telephone: "+254100293388",
          email: "logistics.aliship@gmail.com",
          areaServed: [
            { "@type": "City", name: "Nairobi" },
            { "@type": "City", name: "Mombasa" },
            { "@type": "City", name: "Nakuru" },
            { "@type": "Country", name: "Kenya" },
          ],
          address: [
            {
              "@type": "PostalAddress",
              streetAddress:
                "Philadelphia House, Shop 525, Tom Mboya Street & Hakati Road",
              addressLocality: "Nairobi",
              addressCountry: "KE",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "Majengo King'orani, near Bayleaf Hospital",
              addressLocality: "Mombasa",
              addressCountry: "KE",
            },
          ],
          additionalType: "https://schema.org/CourierService",
        }),
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { icon: Truck, value: "10k+", label: "Parcels delivered" },
  { icon: Users, value: "200+", label: "Active senders" },
  { icon: MapPin, value: "47", label: "Counties served" },
  { icon: Award, value: "98%", label: "On-time rate" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-black py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="font-display text-5xl font-extrabold text-white md:text-6xl">
            About <span className="text-[#FF6600]">AliShip</span> Logistics
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">
            We help businesses and individuals move parcels across Kenya with
            confidence — every shipment scanned, tracked, and delivered with
            proof.
          </p>
        </div>
      </section>

      <section className="bg-[#f1f2f4] py-16 text-black">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5">
              <h2 className="font-display text-2xl font-extrabold">Our story</h2>
              <p className="mt-3 text-sm leading-relaxed text-black/70">
                AliShip Logistics was founded in Mombasa to simplify last-mile
                delivery for retailers and small businesses. We saw too many
                parcels lost in handoffs, customers calling for updates, and
                riders without tools. So we built our own tracking system from
                scratch — the same one you can use right now. Today we're a
                registered Private Limited Company expanding across Kenya.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5">
              <h2 className="font-display text-2xl font-extrabold">What we do</h2>
              <ul className="mt-3 space-y-2 text-sm text-black/70">
                <li>• Same-day pickup and delivery within Nairobi</li>
                <li>• Country-wide express and LTL freight</li>
                <li>• Cash on delivery (COD) reconciliation</li>
                <li>• Real-time WhatsApp updates to your customers</li>
                <li>• Proof of delivery on every drop</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5"
              >
                <s.icon className="mx-auto text-[#FF6600]" size={26} />
                <div className="font-display mt-3 text-3xl font-extrabold text-[#FF6600]">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-black/60">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-black p-8 text-white">
            <h2 className="font-display text-2xl font-extrabold">
              Where we deliver
            </h2>
            <p className="mt-3 text-white/70">
              We operate from physical hubs in <strong>Mombasa</strong> and{" "}
              <strong>Nairobi</strong>, with <strong>county-wide coverage</strong>{" "}
              extending express delivery to all 47 counties of Kenya. More
              physical pickup stations are coming online as we grow.
            </p>
            <p className="mt-2 text-sm text-white/55">
              Legally registered Private Limited Company with physical offices
              and real local presence — not a fly-by-night courier.
            </p>
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
