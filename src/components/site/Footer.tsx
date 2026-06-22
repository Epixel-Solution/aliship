import { Link } from "@tanstack/react-router";
import { Package, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { BRAND } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="bg-[#FF6600]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl font-extrabold text-white">
              Ready to ship with us?
            </h3>
            <p className="mt-1 text-white/90">
              Talk to our team — we'll arrange pickup the same day.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#FF6600]"
          >
            <Package size={18} />
            Learn more
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-white/65">
            AliShip Logistics — Sorted. Shipped. Simple. Reliable parcel
            delivery and tracking across Kenya.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-white/70 hover:text-[#FF6600]">
                About us
              </Link>
            </li>
            <li>
              <Link to="/track" className="text-white/70 hover:text-[#FF6600]">
                Track a parcel
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white/70 hover:text-[#FF6600]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2 text-white/80">
              <Phone size={14} className="text-[#FF6600]" />
              <a href={`tel:${BRAND.phones[0]}`} className="hover:text-[#FF6600]">
                {BRAND.phones[0]}
              </a>
              <span className="text-white/40">/</span>
              <a href={`tel:${BRAND.phones[1]}`} className="hover:text-[#FF6600]">
                {BRAND.phones[1]}
              </a>
            </li>
            <li className="flex items-center gap-2 text-white/80">
              <Mail size={14} className="text-[#FF6600]" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-[#FF6600]">
                {BRAND.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} AliShip Logistics. All rights reserved.</p>
          <p>Reliable courier delivery across Kenya — Mombasa · Nairobi · County-wide coverage</p>
        </div>
      </div>
    </footer>
  );
}
