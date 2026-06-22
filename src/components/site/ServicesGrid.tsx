import {
  Package,
  Truck,
  Home,
  Wallet,
  Store,
  Clock,
  Navigation,
  Headphones,
  ShieldCheck,
  Zap,
} from "lucide-react";

const services = [
  { icon: Package, title: "Parcel Delivery", body: "Fast and secure delivery to your doorstep." },
  { icon: Truck, title: "Full Truck Load (FTL)", body: "Reliable transport for large and bulk shipments." },
  { icon: Home, title: "Door-to-Door Delivery", body: "We pick up and deliver right to your location." },
  { icon: Wallet, title: "Cash on Delivery (COD)", body: "We collect payments on your behalf." },
  { icon: Store, title: "Pickup Station Services", body: "Drop off or pick up at our convenient locations." },
  { icon: Clock, title: "Same-Day & Scheduled", body: "Flexible delivery options to fit your timeline." },
  { icon: Navigation, title: "Real-Time Tracking", body: "Track your shipment status anytime, anywhere." },
  { icon: Headphones, title: "Dedicated Support", body: "Real people via WhatsApp and phone, when you need us." },
];

const trustRow = [
  { icon: Zap, label: "Fast" },
  { icon: ShieldCheck, label: "Reliable" },
  { icon: ShieldCheck, label: "Secure" },
];

export function ServicesGrid({ heading = "What We Offer", eyebrow }: { heading?: string; eyebrow?: string }) {
  return (
    <section id="services" className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          {eyebrow && (
            <div className="font-display text-xs font-bold uppercase tracking-[0.3em] text-[#FF6600]">
              {eyebrow}
            </div>
          )}
          <h2 className="font-display mt-2 text-4xl font-extrabold uppercase text-white md:text-5xl">
            {heading}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-[#FF6600]" />
          <p className="mx-auto mt-4 max-w-2xl text-white/65">
            End-to-end logistics built for businesses and individuals across Kenya.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0c0c0c] p-6 transition hover:border-[#FF6600]/50 hover:bg-[#111]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6600]/10 text-[#FF6600] ring-1 ring-[#FF6600]/30 transition group-hover:bg-[#FF6600] group-hover:text-white">
                <s.icon size={22} />
              </span>
              <h3 className="font-display mt-5 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-[#FF6600]/30 bg-[#FF6600]/5 px-6 py-5 text-white">
          {trustRow.map((t, i) => (
            <div key={t.label} className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <t.icon size={18} className="text-[#FF6600]" />
                <span className="font-display text-sm font-extrabold uppercase tracking-[0.25em]">
                  {t.label}
                </span>
              </div>
              {i < trustRow.length - 1 && (
                <span className="h-5 w-px bg-[#FF6600]/40" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
