import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold gradient-gold-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "root" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold gradient-gold-text">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground">Try again</button>
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
      { title: "VisaGuide World — Premium Visa & Passport Guidance" },
      { name: "description", content: "Expert visa guidance for every destination. Explore visas by country, policies, passport rankings and travel insights." },
      { property: "og:title", content: "VisaGuide World — Premium Visa & Passport Guidance" },
      { property: "og:description", content: "Expert visa guidance for every destination. Explore visas by country, policies, passport rankings and travel insights." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" },
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
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/visas-by-country", label: "Visas by Country" },
  { to: "/visas-by-policy", label: "Visas by Policy" },
  { to: "/passport-index", label: "Passport Index" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground group-hover:scale-110 transition">V</div>
          <span className="font-display text-xl font-bold tracking-wide gradient-gold-text">VisaGuide</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map(n => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/80 hover:text-primary" }}
              className="px-3 py-2 text-sm font-medium transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden lg:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition shadow-[0_0_30px_-8px_var(--gold)]">Get Started</Link>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <nav className="flex flex-col p-6 gap-2">
            {NAV.map(n => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                className="py-2 text-foreground/90 hover:text-primary transition">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--navy-deep)] mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground">V</div>
            <span className="font-display text-xl font-bold gradient-gold-text">VisaGuide</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">Premium visa guidance for every traveler — trusted worldwide.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-primary">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {NAV.slice(1,5).map(n => <li key={n.to}><Link to={n.to} className="hover:text-primary transition">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-primary">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-primary">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">Get travel & visa updates.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="you@email.com" className="flex-1 px-3 py-2 rounded-md bg-card border border-border text-sm focus:outline-none focus:border-primary" />
            <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} VisaGuide World. All rights reserved.
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1"><Outlet /></main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
