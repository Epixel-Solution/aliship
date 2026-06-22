import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/track", label: "Track" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link to="/" aria-label="AliShip Logistics home">
          <Logo />
        </Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-display text-sm font-bold uppercase tracking-wide text-white/85 transition-colors hover:text-[#FF6600]"
              activeProps={{ className: "text-[#FF6600] border-b-2 border-[#FF6600] pb-1" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="tel:+254100293388"
            className="hidden items-center gap-2 rounded-full bg-[#FF6600] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#FF6600]/30 transition hover:bg-[#ff7a1f] sm:inline-flex"
          >
            <Phone size={16} /> 0100 293 388
          </a>
          <button
            className="rounded-md p-2 text-white md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-display py-3 text-sm font-bold uppercase tracking-wide text-white/85 hover:text-[#FF6600]"
                activeProps={{ className: "text-[#FF6600]" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+254100293388"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6600] px-5 py-3 text-sm font-bold text-white sm:hidden"
            >
              <Phone size={16} /> 0100 293 388
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
