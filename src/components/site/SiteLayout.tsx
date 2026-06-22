import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
