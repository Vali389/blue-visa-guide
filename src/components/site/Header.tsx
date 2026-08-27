import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Globe2,
  GraduationCap,
  Briefcase,
  Plane,
  Users,
  Building2,
  MapPin,
  Calendar,
  CreditCard,
  ShieldCheck,
  Home,
  PlaneTakeoff,
  Stethoscope,
  BookOpen,
  Compass,
  Landmark,
  Sun,
  Award,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface MenuItem {
  to: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

const COUNTRIES_MENU: MenuItem[] = [
  {
    to: "/countries/germany",
    title: "Germany",
    subtitle: "APS & Study / Job Seeker Visa",
    icon: Landmark,
  },
  {
    to: "/countries/canada",
    title: "Canada",
    subtitle: "Study Permit & Express Entry",
    icon: GraduationCap,
  },
  {
    to: "/countries/united-kingdom",
    title: "United Kingdom",
    subtitle: "CAS, Graduate Route & Student",
    icon: Building2,
  },
  {
    to: "/countries/united-states",
    title: "United States",
    subtitle: "F-1 Study & B1/B2 Visitor",
    icon: Globe2,
  },
  {
    to: "/countries/australia",
    title: "Australia",
    subtitle: "Subclass 500 & Skilled PR",
    icon: Compass,
  },
  {
    to: "/countries/dubai",
    title: "Dubai (UAE)",
    subtitle: "5-Year Green & Business Visa",
    icon: Briefcase,
  },
  {
    to: "/countries/france",
    title: "France",
    subtitle: "Schengen & Master's Admissions",
    icon: ShieldCheck,
  },
  {
    to: "/countries/spain",
    title: "Spain",
    subtitle: "Study & Non-Lucrative Visa",
    icon: Sun,
  },
];

const COACHING_MENU: MenuItem[] = [
  {
    to: "/coaching/oet-coaching",
    title: "OET Coaching",
    subtitle: "Occupational English test for doctors & nurses",
    icon: Stethoscope,
  },
  {
    to: "/coaching/tofel-coaching",
    title: "TOFEL Coaching",
    subtitle: "High score training for global universities",
    icon: BookOpen,
  },
];

const VISA_CATEGORIES_MENU: MenuItem[] = [
  {
    to: "/visa-categories/student-visa",
    title: "Student Visa",
    subtitle: "University admissions & work permits",
    icon: GraduationCap,
  },
  {
    to: "/visa-categories/business-visa",
    title: "Business Visa",
    subtitle: "Corporate meetings & business expansion",
    icon: Briefcase,
  },
  {
    to: "/visa-categories/tourist-visa",
    title: "Tourist Visa",
    subtitle: "Leisure holidays & visiting friends/family",
    icon: Plane,
  },
  {
    to: "/visa-categories/family-visa",
    title: "Family Visa",
    subtitle: "Spouse, dependent & child sponsorship",
    icon: Users,
  },
];

const SERVICES_MENU: MenuItem[] = [
  {
    to: "/services/university-admissions",
    title: "University Admissions",
    subtitle: "Global university shortlisting & offers",
    icon: GraduationCap,
  },
  {
    to: "/services/visa-appointment",
    title: "Visa Appointment",
    subtitle: "VFS, TLS & embassy slot booking",
    icon: Calendar,
  },
  {
    to: "/services/funding",
    title: "Funding & Blocked Funds",
    subtitle: "Education loans & Sperrkonto accounts",
    icon: CreditCard,
  },
  {
    to: "/services/travel-medical-insurance",
    title: "Travel & Medical Insurance",
    subtitle: "Embassy-approved health coverage",
    icon: ShieldCheck,
  },
  {
    to: "/services/accommodation",
    title: "Accommodation Abroad",
    subtitle: "Verified student housing & dorms",
    icon: Home,
  },
  {
    to: "/services/flight-booking",
    title: "Flight Booking",
    subtitle: "Discounted student airfares & baggage",
    icon: PlaneTakeoff,
  },
];

function MegaDropdown({
  label,
  items,
  isActive,
  scrolled,
  columns = 2,
}: {
  label: string;
  items: MenuItem[];
  isActive: boolean;
  scrolled: boolean;
  columns?: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold transition-all relative group ${
          isActive
            ? "text-primary"
            : scrolled
            ? "text-foreground/80 hover:text-primary"
            : "text-white/90 hover:text-white"
        }`}
      >
        <span>{label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180 text-primary" : ""
          }`}
        />
        {/* Active Indicator Underline */}
        {isActive && (
          <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 gradient-primary rounded-full shadow-glow-primary" />
        )}
      </button>

      {open && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-full z-50 mt-2 p-3 bg-white rounded-3xl border border-border/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] animate-float-up ${
            columns === 2 ? "w-[540px] grid grid-cols-2 gap-2" : "w-[300px] flex flex-col gap-1.5"
          }`}
        >
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="group flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-200 hover:bg-secondary/60 hover:shadow-sm"
              activeProps={{ className: "bg-primary/10 border border-primary/20" }}
            >
              {/* Rounded Icon Container */}
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-white transition-all duration-300 shadow-sm">
                <item.icon className="h-5 w-5" />
              </div>

              {/* Title & Subtitle */}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
                  {item.title}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                  {item.subtitle}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  // Get current pathname to highlight active header links
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isHomeActive = pathname === "/";
  const isAboutActive = pathname === "/about";
  const isCountriesActive = pathname.startsWith("/countries");
  const isCoachingActive = pathname.startsWith("/coaching");
  const isVisaCategoriesActive = pathname.startsWith("/visa-categories");
  const isServicesActive = pathname.startsWith("/services");
  const isContactActive = pathname === "/contact";

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
          ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_-8px_rgba(0,0,0,0.15)]"
          : "bg-gradient-to-b from-black/75 via-black/40 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="grid h-9 w-9 place-items-center rounded-xl gradient-primary text-white shadow-md group-hover:scale-110 transition-transform">
            <Globe2 className="h-5 w-5" />
          </div>
          <div className="flex items-baseline">
            <span
              className="text-xl font-extrabold tracking-tight"
              style={{ color: "var(--primary)" }}
            >
              Visa
            </span>
            <span
              className="text-xl font-extrabold tracking-tight"
              style={{ color: scrolled ? "var(--foreground)" : "#ffffff" }}
            >
              Enter
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Home Link */}
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className={`px-3.5 py-2 text-sm font-semibold transition-all relative group ${
              isHomeActive
                ? "text-primary"
                : scrolled
                ? "text-foreground/80 hover:text-primary"
                : "text-white/90 hover:text-white"
            }`}
          >
            Home
            {isHomeActive && (
              <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 gradient-primary rounded-full shadow-glow-primary" />
            )}
          </Link>

          {/* About Link */}
          <Link
            to="/about"
            className={`px-3.5 py-2 text-sm font-semibold transition-all relative group ${
              isAboutActive
                ? "text-primary"
                : scrolled
                ? "text-foreground/80 hover:text-primary"
                : "text-white/90 hover:text-white"
            }`}
          >
            About
            {isAboutActive && (
              <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 gradient-primary rounded-full shadow-glow-primary" />
            )}
          </Link>

          {/* Dropdown Mega Menus */}
          <MegaDropdown
            label="Countries"
            items={COUNTRIES_MENU}
            isActive={isCountriesActive}
            scrolled={scrolled}
            columns={2}
          />
          <MegaDropdown
            label="Coaching"
            items={COACHING_MENU}
            isActive={isCoachingActive}
            scrolled={scrolled}
            columns={1}
          />
          <MegaDropdown
            label="Visa Categories"
            items={VISA_CATEGORIES_MENU}
            isActive={isVisaCategoriesActive}
            scrolled={scrolled}
            columns={2}
          />
          <MegaDropdown
            label="Services"
            items={SERVICES_MENU}
            isActive={isServicesActive}
            scrolled={scrolled}
            columns={2}
          />

          {/* Contact Button */}
          <Link
            to="/contact"
            className={`ml-2 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold shadow-md hover:scale-105 transition-all ${
              isContactActive
                ? "bg-white text-primary ring-2 ring-primary"
                : "gradient-primary text-white hover:shadow-lg"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`lg:hidden p-2 rounded-xl transition-colors ${
            scrolled
              ? "hover:bg-secondary text-foreground"
              : "hover:bg-white/10 text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t shadow-xl max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col p-4 gap-1">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`py-3 px-3 text-sm font-bold border-b rounded-xl ${
                isHomeActive ? "bg-primary/10 text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className={`py-3 px-3 text-sm font-bold border-b rounded-xl ${
                isAboutActive ? "bg-primary/10 text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              About
            </Link>

            {/* Mobile Dropdown Groups */}
            {[
              { label: "Countries", links: COUNTRIES_MENU, active: isCountriesActive },
              { label: "Coaching", links: COACHING_MENU, active: isCoachingActive },
              {
                label: "Visa Categories",
                links: VISA_CATEGORIES_MENU,
                active: isVisaCategoriesActive,
              },
              { label: "Services", links: SERVICES_MENU, active: isServicesActive },
            ].map((group) => (
              <div key={group.label} className="border-b">
                <button
                  className={`flex w-full items-center justify-between py-3 px-3 text-sm font-bold ${
                    group.active ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === group.label ? null : group.label)
                  }
                >
                  <span>{group.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileExpanded === group.label ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === group.label && (
                  <div className="pb-3 pl-3 pr-2 flex flex-col gap-1.5 bg-secondary/30 rounded-2xl p-2 mb-2">
                    {group.links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 p-2 rounded-xl text-sm font-semibold text-foreground/80 hover:bg-white hover:text-primary transition-colors"
                        activeProps={{ className: "bg-white text-primary shadow-sm" }}
                      >
                        <link.icon className="h-4 w-4 text-primary shrink-0" />
                        <div>
                          <div className="text-xs font-bold leading-tight">{link.title}</div>
                          <div className="text-[10px] text-muted-foreground truncate">
                            {link.subtitle}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 w-full text-center rounded-full gradient-primary py-3.5 text-sm font-bold text-white shadow-md"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
