import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServicesGrid } from "@/components/site/ServicesGrid";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | AliShip Logistics Kenya" },
      {
        name: "description",
        content:
          "Parcel delivery, FTL, door-to-door, cash on delivery, pickup stations and real-time tracking across Kenya with AliShip Logistics.",
      },
      { property: "og:title", content: "Our Services | AliShip Logistics Kenya" },
      {
        property: "og:description",
        content:
          "Full courier services across Kenya: parcels, FTL, door-to-door, COD, pickup stations, same-day delivery and live tracking.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-black pt-16 pb-4 md:pt-24">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <div className="font-display text-xs font-bold uppercase tracking-[0.3em] text-[#FF6600]">
            Services
          </div>
          <h1 className="font-display mt-3 text-5xl font-black uppercase text-white md:text-6xl">
            Logistics, end to end.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            From a single parcel to a full truck load — AliShip moves it safely,
            on time, with proof every step of the way. Operating from Mombasa
            and Nairobi with county-wide coverage across Kenya.
          </p>

        </div>
      </section>

      <ServicesGrid heading="What We Offer" />

      <section className="bg-[#FF6600]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 md:flex-row">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
              Need a custom logistics plan?
            </h2>
            <p className="mt-1 text-white/90">
              Talk to our team or{" "}
              <Link to="/track" className="underline">
                track an existing parcel
              </Link>
              .
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-black/80"
          >
            Contact us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
