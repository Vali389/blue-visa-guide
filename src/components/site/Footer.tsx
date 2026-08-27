import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Globe2 } from "lucide-react";
import { CONTACT_INFO } from "@/lib/site-data";

const EXPLORE_LINKS = [
  { to: "/about", label: "About Us" },
  { to: "/visa-categories/student-visa", label: "Visa Categories" },
  { to: "/countries/germany", label: "Countries" },
  { to: "/contact", label: "Contact Us" },
  { to: "/gallery", label: "Gallery" },
];

const VISA_LINKS = [
  { to: "/visa-categories/student-visa", label: "Student Visa" },
  { to: "/visa-categories/business-visa", label: "Business Visa" },
  { to: "/visa-categories/tourist-visa", label: "Tourist Visa" },
  { to: "/visa-categories/family-visa", label: "Family Visa" },
];

const SERVICES_LINKS = [
  { to: "/services/university-admissions", label: "University Admissions" },
  { to: "/services/visa-appointment", label: "Visa Appointment" },
  { to: "/services/funding", label: "Funding" },
  { to: "/services/travel-medical-insurance", label: "Travel & Medical Insurance" },
  { to: "/services/accommodation", label: "Accommodation" },
  { to: "/services/flight-booking", label: "Flight Booking" },
];

const SOCIAL_ICONS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

function FooterLinkList({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">{title}</h4>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.to + link.label}>
            <Link
              to={link.to}
              className="text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
            >
              <span className="h-1 w-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: "var(--accent)" }} />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-[oklch(0.18_0.03_240)] text-white border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle at 80% 20%, var(--primary) 0, transparent 40%), radial-gradient(circle at 10% 80%, var(--accent) 0, transparent 35%)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 sm:grid-cols-2 md:grid-cols-5 relative z-10">
        {/* Column 1: Brand */}
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-white shadow-lg">
              <Globe2 className="h-5 w-5" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Visa<span style={{ color: "var(--accent)" }}>Enter</span>
            </span>
          </div>

          <p className="text-sm leading-relaxed text-white/60 max-w-xs">
            Get expert guidance from our visa team with over 15 years of experience. We are your trusted immigration partner.
          </p>

          {/* Contact */}
          <div className="space-y-3 text-sm text-white/70">
            <a
              href={CONTACT_INFO.phoneHref}
              className="flex items-center gap-3 hover:text-white transition-colors group"
            >
              <Phone className="h-4 w-4 shrink-0 group-hover:scale-110 transition-transform" style={{ color: "var(--accent)" }} />
              {CONTACT_INFO.phone}
            </a>
            <a
              href={CONTACT_INFO.emailHref}
              className="flex items-center gap-3 hover:text-white transition-colors group"
            >
              <Mail className="h-4 w-4 shrink-0 group-hover:scale-110 transition-transform" style={{ color: "var(--accent)" }} />
              {CONTACT_INFO.email}
            </a>
            <div className="flex items-start gap-3 group">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
              <span className="leading-relaxed">{CONTACT_INFO.address}</span>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 pt-1">
            {SOCIAL_ICONS.map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.label}
                className="w-9 h-9 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/15 hover:border-white/30 hover:scale-110 flex items-center justify-center transition-all duration-300"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Explore */}
        <FooterLinkList title="Explore" links={EXPLORE_LINKS} />

        {/* Column 3: Visa Categories */}
        <FooterLinkList title="Visa" links={VISA_LINKS} />

        {/* Column 4: Services */}
        <FooterLinkList title="Services" links={SERVICES_LINKS} />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6 text-center text-xs text-white/40 bg-black/10 relative z-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} VisaEnter — All rights reserved. Excellence in Visa &amp; Immigration.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
