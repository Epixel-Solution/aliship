import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BRAND, whatsappUrl } from "@/lib/brand";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AliShip Logistics | Mombasa & Nairobi Offices" },
      {
        name: "description",
        content:
          "Reach AliShip Logistics by WhatsApp, phone or at our Nairobi CBD and Mombasa offices to arrange same-day parcel pickup across Kenya.",
      },
      { property: "og:title", content: "Contact AliShip Logistics | Mombasa & Nairobi Offices" },
      {
        property: "og:description",
        content:
          "WhatsApp, call or visit our offices in Nairobi and Mombasa to arrange a pickup.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="bg-black py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="font-display text-5xl font-extrabold text-white md:text-6xl">
            Get in touch
          </h1>
          <p className="mt-3 max-w-xl text-white/70">
            The fastest way to reach us is on WhatsApp — most pickups are
            arranged in under 5 minutes. Already shipped?{" "}
            <a href="/track" className="font-semibold text-[#FF6600] underline-offset-4 hover:underline">
              Track your parcel here
            </a>
            .
          </p>

          <a
            href={whatsappUrl("Hi AliShip, I'd like to arrange a pickup.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#00CC66] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#00CC66]/30 hover:bg-[#00b85c]"
          >
            <MessageCircle size={20} /> Chat on WhatsApp
          </a>

          <div className="mt-8 flex flex-wrap gap-3">
            {BRAND.phones.map((p) => (
              <a
                key={p}
                href={`tel:${p}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white hover:bg-white/10"
              >
                <Phone size={14} className="text-[#FF6600]" /> {p}
              </a>
            ))}
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white hover:bg-white/10"
            >
              <Mail size={14} className="text-[#FF6600]" /> {BRAND.email}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f2f4] py-16 text-black">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-extrabold">Our offices</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {BRAND.offices.map((o) => (
              <div
                key={o.city}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <div className="flex items-center gap-2 text-[#FF6600]">
                  <MapPin size={18} />
                  <h3 className="font-display text-xl font-bold text-black">
                    {o.city}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-black/70">{o.address}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            <h2 className="font-display text-2xl font-extrabold">
              Send us a message
            </h2>
            <p className="mt-1 text-sm text-black/60">
              Prefer not to use WhatsApp? Drop us a note and we'll get back to
              you.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  function onChange<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // No backend yet — log and show success.
    // eslint-disable-next-line no-console
    console.log("[contact form]", form);
    setTimeout(() => {
      toast.success("Thanks! We'll get back to you shortly.");
      setForm({ name: "", phone: "", message: "" });
      setSubmitting(false);
    }, 400);
  }

  const inputClass =
    "w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:border-[#FF6600] focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="mt-5 grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          value={form.name}
          onChange={(e) => onChange("name", e.target.value)}
          placeholder="Your name"
          aria-label="Your name"
          className={inputClass}
        />
        <input
          required
          value={form.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          placeholder="Phone number"
          aria-label="Phone number"
          className={inputClass}
        />
      </div>
      <textarea
        required
        rows={4}
        value={form.message}
        onChange={(e) => onChange("message", e.target.value)}
        placeholder="How can we help?"
        aria-label="Message"
        className={inputClass}
      />
      <button
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6600] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff7a1f] disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
