import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import {
  Search,
  Loader2,
  Phone,
  PackageX,
  CheckCircle2,
  CircleDot,
  AlertTriangle,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase, type TrackEvent } from "@/lib/supabase";
import {
  formatEventTime,
  statusBadgeClasses,
  statusTone,
  whatsappUrl,
} from "@/lib/brand";

const searchSchema = z.object({ n: z.string().optional() });

export const Route = createFileRoute("/track")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Track Your Parcel | AliShip Logistics Kenya" },
      {
        name: "description",
        content:
          "Track your AliShip parcel in real time. Enter your waybill number to see live status, route history and proof of delivery anywhere in Kenya.",
      },
      { property: "og:title", content: "Track Your Parcel | AliShip Logistics Kenya" },
      {
        property: "og:description",
        content:
          "Live parcel tracking for shipments across Kenya — enter your waybill number to see status updates.",
      },
      { property: "og:url", content: "/track" },
    ],
    links: [{ rel: "canonical", href: "/track" }],
  }),
  component: TrackPage,
});

type State =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "empty" }
  | { kind: "error"; message: string }
  | { kind: "ok"; events: TrackEvent[] };

function TrackPage() {
  const { n: initial } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [value, setValue] = useState(initial ?? "");
  const [state, setState] = useState<State>({ kind: "idle" });

  async function lookup(num: string) {
    setState({ kind: "loading" });
    const { data, error } = await supabase.rpc("track_parcel", {
      p_tracking_number: num,
    });
    if (error) {
      setState({ kind: "error", message: error.message });
      return;
    }
    const events = (data as TrackEvent[] | null) ?? [];
    if (events.length === 0) {
      setState({ kind: "empty" });
      return;
    }
    events.sort(
      (a, b) =>
        new Date(a.event_time).getTime() - new Date(b.event_time).getTime(),
    );
    setState({ kind: "ok", events });
  }

  useEffect(() => {
    if (initial && initial.trim()) {
      setValue(initial);
      lookup(initial.trim());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initial]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = value.trim();
    if (!v) return;
    navigate({ search: { n: v }, replace: true });
    lookup(v);
  }

  return (
    <SiteLayout>
      <section className="bg-black py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold text-white md:text-5xl">
            Track your parcel
          </h1>
          <p className="mt-3 text-white/65">
            Enter the waybill or tracking number to see live status.
          </p>
        </div>
      </section>

      <section className="bg-[#f1f2f4] pb-20 pt-10 text-black">
        <div className="mx-auto max-w-3xl px-4">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/10"
          >
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              aria-label="Tracking number"
              placeholder="e.g. ALS-20260506-1234"
              className="w-full rounded-lg border border-[#FF6600]/50 bg-white px-4 py-3 text-base focus:border-[#FF6600] focus:outline-none"
            />
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                disabled={state.kind === "loading" || !value.trim()}
                className="inline-flex items-center gap-2 rounded-full bg-[#FF6600] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff7a1f] disabled:opacity-60"
              >
                {state.kind === "loading" ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : (
                  <Search size={16} />
                )}
                Search
              </button>
            </div>
          </form>

          <div className="mt-10">
            {state.kind === "idle" && (
              <p className="text-center text-sm text-black/55">
                Enter your waybill number above to see your parcel status.
              </p>
            )}
            {state.kind === "loading" && (
              <p className="text-center text-sm text-black/55">
                Looking up your parcel…
              </p>
            )}
            {state.kind === "error" && (
              <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
                Something went wrong: {state.message}
              </div>
            )}
            {state.kind === "empty" && <NotFoundBlock />}
            {state.kind === "ok" && <Result events={state.events} />}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function NotFoundBlock() {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-8 text-center shadow-sm">
      <PackageX className="mx-auto text-[#FF6600]" size={36} />
      <h2 className="font-display mt-3 text-xl font-bold">
        We couldn't find that tracking number
      </h2>
      <p className="mt-2 text-sm text-black/60">
        Please check the number and try again, or reach out to us on WhatsApp
        and we'll help you locate your parcel.
      </p>
      <a
        href={whatsappUrl("Hi AliShip, I can't find my tracking number.")}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#00CC66] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#00b85c]"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
}

function Result({ events }: { events: TrackEvent[] }) {
  const head = events[events.length - 1]; // latest as "summary row"
  const status = head.current_status;
  const rider = events.find((e) => e.rider_phone)?.rider_phone ?? null;
  const tone = statusTone(status);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-wider text-black/45">
            Tracking number
          </div>
          <div className="font-display text-lg font-bold">
            {head.tracking_number}
          </div>
        </div>
        <span
          className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide ${statusBadgeClasses(
            status,
          )}`}
        >
          {status}
        </span>
      </div>

      {rider && tone !== "delivered" && (
        <a
          href={`tel:${rider}`}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#00CC66] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#00b85c]"
        >
          <Phone size={16} /> Contact rider
        </a>
      )}

      <ol className="mt-8 space-y-0">
        {[...events].reverse().map((e, i) => (
          <li key={`${e.event_time}-${i}`} className="relative pl-8 pb-6 last:pb-0">
            <span className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center">
              {i === 0 ? (
                statusTone(e.event_status) === "delivered" ? (
                  <CheckCircle2 size={20} className="text-[#00CC66]" />
                ) : statusTone(e.event_status) === "exception" ? (
                  <AlertTriangle size={20} className="text-red-500" />
                ) : (
                  <CircleDot size={20} className="text-[#FF6600]" />
                )
              ) : (
                <span className="h-2.5 w-2.5 rounded-full bg-black/30" />
              )}
            </span>
            {i < events.length - 1 && (
              <span className="absolute left-[9px] top-6 h-full w-px bg-black/10" />
            )}
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-display text-base font-bold text-black">
                {e.event_status}
              </p>
              <p className="text-xs text-black/50">
                {formatEventTime(e.event_time)}
              </p>
            </div>
            {e.event_notes && (
              <p className="mt-1 text-sm text-black/60">{e.event_notes}</p>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-8 border-t border-black/10 pt-4 text-center text-xs text-black/45">
        Need help with this parcel?{" "}
        <Link to="/contact" className="font-semibold text-[#FF6600]">
          Contact us
        </Link>
      </div>
    </div>
  );
}
