import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe2 } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/visas-by-country", label: "Visas by Country" },
  { to: "/visas-by-policy", label: "Visas by Policy" },
  { to: "/passport-index", label: "Passport Index" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-[0_2px_20px_-8px_rgba(0,0,0,0.15)]"
          : "bg-gradient-to-b from-black/70 via-black/40 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="grid h-9 w-9 place-items-center rounded-lg gradient-primary text-white shadow-md group-hover:scale-110 transition-transform">
            <Globe2 className="h-5 w-5" />
          </div>
          <div className="flex items-baseline">
            <span className="text-xl font-bold tracking-tight" style={{ color: "var(--primary)" }}>Visa</span>
            <span className="text-xl font-bold tracking-tight" style={{ color: scrolled ? "var(--foreground)" : "#ffffff" }}>Guide</span>
            <span className="ml-1 text-xs font-semibold" style={{ color: "var(--accent)" }}>.world</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={`px-3 py-2 text-sm font-medium transition-colors relative group hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-white/90"
              }`}
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 gradient-primary transition-transform group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden p-2 rounded-md hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t">
          <nav className="flex flex-col p-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-sm font-medium border-b last:border-none"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
