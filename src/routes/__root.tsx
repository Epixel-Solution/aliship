import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";
import { Home, Search } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-lg text-center">
        <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-[#FF6600]">
          404
        </p>
        <h1 className="font-display mt-3 text-5xl font-extrabold uppercase text-white md:text-6xl">
          Lost in transit
        </h1>
        <p className="mt-4 text-white/65">
          We couldn't find that page. Let's get you back on route.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF6600] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#ff7a1f]"
          >
            <Home size={16} /> Home
          </Link>
          <Link
            to="/track"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#FF6600] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#FF6600] hover:bg-[#FF6600]/10"
          >
            <Search size={16} /> Track a parcel
          </Link>
        </div>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AliShip Logistics — Courier delivery across Kenya" },
      {
        name: "description",
        content:
          "AliShip Logistics moves parcels across Kenya — same-day pickups, real-time tracking, and proof of delivery on every drop.",
      },
      { property: "og:site_name", content: "AliShip Logistics" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#FF6600" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Urbanist:wght@600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AliShip Logistics Limited",
          legalName: "AliShip Logistics Limited",
          alternateName: "AliShip Logistics",
          url: "https://aliship.co.ke",
          logo: "https://aliship.co.ke/logo.png",
          image: "https://aliship.co.ke/logo.png",
          email: "logistics.aliship@gmail.com",
          telephone: "+254100293388",
          areaServed: ["Nairobi", "Mombasa", "Nakuru", "Kenya"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster theme="dark" position="bottom-center" richColors />
    </QueryClientProvider>
  );
}