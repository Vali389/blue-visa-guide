import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import visaLogo from "@/assets/visaenter-logo.png";
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
  Calendar,
  CreditCard,
  ShieldCheck,
  Home,
  PlaneTakeoff,
  BookOpen,
  Compass,
  Landmark,
  Sun,
  Phone,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { CONTACT_INFO } from "@/lib/site-data";

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
    to: "/coaching/duolingo-coaching",
    title: "Duolingo Coaching",
    subtitle: "Duolingo English Test Preparation",
    icon: GraduationCap,
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

type DropdownKey = "services" | "countries" | "visas" | "coaching";

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Get current pathname to highlight active header links
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isHomeActive = pathname === "/";
  const isAboutActive = pathname === "/about";
  const isServicesActive = pathname.startsWith("/services");
  const isCountriesActive = pathname.startsWith("/countries");
  const isVisaCategoriesActive = pathname.startsWith("/visa-categories");
  const isCoachingActive = pathname.startsWith("/coaching");
  const isContactActive = pathname === "/contact";

  const handleMouseEnter = (dropdown: DropdownKey) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleNavItemHover = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(null);
  };

  const handleToggle = (dropdown: DropdownKey) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-7xl h-[92px] items-center justify-between px-6">
        {/* Brand Logo */}
        <Link
          to="/"
          onMouseEnter={handleNavItemHover}
          className="flex items-center group shrink-0 py-0.5 focus:outline-none"
          aria-label="VisaEnter Home"
        >
          <img
            src={visaLogo}
            alt="VisaEnter"
            className="w-[185px] sm:w-[210px] md:w-[230px] lg:w-[245px] h-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          ref={navRef}
          className="hidden lg:flex items-center gap-1"
          aria-label="Main Navigation"
        >
          {/* 1. Home */}
          <Link
            to="/"
            activeOptions={{ exact: true }}
            onMouseEnter={handleNavItemHover}
            className={`px-3 py-2 text-sm font-semibold transition-colors relative group ${
              isHomeActive
                ? "text-primary"
                : "text-slate-700 hover:text-primary"
            }`}
          >
            Home
            {isHomeActive && (
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 gradient-primary rounded-full shadow-glow-primary" />
            )}
          </Link>

          {/* 2. About */}
          <Link
            to="/about"
            onMouseEnter={handleNavItemHover}
            className={`px-3 py-2 text-sm font-semibold transition-colors relative group ${
              isAboutActive
                ? "text-primary"
                : "text-slate-700 hover:text-primary"
            }`}
          >
            About
            {isAboutActive && (
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 gradient-primary rounded-full shadow-glow-primary" />
            )}
          </Link>

          {/* 3. Services ▾ */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => handleToggle("services")}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-colors relative group ${
                isServicesActive || activeDropdown === "services"
                  ? "text-primary"
                  : "text-slate-700 hover:text-primary"
              }`}
              aria-expanded={activeDropdown === "services"}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  activeDropdown === "services" ? "rotate-180 text-primary" : ""
                }`}
              />
              {isServicesActive && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 gradient-primary rounded-full shadow-glow-primary" />
              )}
            </button>

            {activeDropdown === "services" && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 pointer-events-auto"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute -top-3 inset-x-0 h-4" />
                <div className="w-[540px] grid grid-cols-2 gap-2 p-3 bg-white rounded-3xl border border-border/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)]">
                  {SERVICES_MENU.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setActiveDropdown(null)}
                      className="group flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-200 hover:bg-secondary/60 hover:shadow-sm"
                      activeProps={{ className: "bg-primary/10 border border-primary/20" }}
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-white transition-all duration-300 shadow-sm">
                        <item.icon className="h-5 w-5" />
                      </div>
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
              </div>
            )}
          </div>

          {/* 4. Countries ▾ */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("countries")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => handleToggle("countries")}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-colors relative group ${
                isCountriesActive || activeDropdown === "countries"
                  ? "text-primary"
                  : "text-slate-700 hover:text-primary"
              }`}
              aria-expanded={activeDropdown === "countries"}
              aria-haspopup="true"
            >
              <span>Countries</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  activeDropdown === "countries" ? "rotate-180 text-primary" : ""
                }`}
              />
              {isCountriesActive && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 gradient-primary rounded-full shadow-glow-primary" />
              )}
            </button>

            {activeDropdown === "countries" && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 pointer-events-auto"
                onMouseEnter={() => handleMouseEnter("countries")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute -top-3 inset-x-0 h-4" />
                <div className="w-[540px] grid grid-cols-2 gap-2 p-3 bg-white rounded-3xl border border-border/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)]">
                  {COUNTRIES_MENU.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setActiveDropdown(null)}
                      className="group flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-200 hover:bg-secondary/60 hover:shadow-sm"
                      activeProps={{ className: "bg-primary/10 border border-primary/20" }}
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-white transition-all duration-300 shadow-sm">
                        <item.icon className="h-5 w-5" />
                      </div>
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
              </div>
            )}
          </div>

          {/* 5. Visa Categories ▾ */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("visas")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => handleToggle("visas")}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-colors relative group ${
                isVisaCategoriesActive || activeDropdown === "visas"
                  ? "text-primary"
                  : "text-slate-700 hover:text-primary"
              }`}
              aria-expanded={activeDropdown === "visas"}
              aria-haspopup="true"
            >
              <span>Visa Categories</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  activeDropdown === "visas" ? "rotate-180 text-primary" : ""
                }`}
              />
              {isVisaCategoriesActive && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 gradient-primary rounded-full shadow-glow-primary" />
              )}
            </button>

            {activeDropdown === "visas" && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 pointer-events-auto"
                onMouseEnter={() => handleMouseEnter("visas")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute -top-3 inset-x-0 h-4" />
                <div className="w-[520px] grid grid-cols-2 gap-2 p-3 bg-white rounded-3xl border border-border/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)]">
                  {VISA_CATEGORIES_MENU.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setActiveDropdown(null)}
                      className="group flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-200 hover:bg-secondary/60 hover:shadow-sm"
                      activeProps={{ className: "bg-primary/10 border border-primary/20" }}
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-white transition-all duration-300 shadow-sm">
                        <item.icon className="h-5 w-5" />
                      </div>
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
              </div>
            )}
          </div>

          {/* 6. Coaching ▾ */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("coaching")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => handleToggle("coaching")}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-colors relative group ${
                isCoachingActive || activeDropdown === "coaching"
                  ? "text-primary"
                  : "text-slate-700 hover:text-primary"
              }`}
              aria-expanded={activeDropdown === "coaching"}
              aria-haspopup="true"
            >
              <span>Coaching</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  activeDropdown === "coaching" ? "rotate-180 text-primary" : ""
                }`}
              />
              {isCoachingActive && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 gradient-primary rounded-full shadow-glow-primary" />
              )}
            </button>

            {activeDropdown === "coaching" && (
              <div
                className="absolute right-0 top-full pt-2 z-50 pointer-events-auto"
                onMouseEnter={() => handleMouseEnter("coaching")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute -top-3 inset-x-0 h-4" />
                <div className="w-[320px] flex flex-col gap-1.5 p-3 bg-white rounded-3xl border border-border/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)]">
                  {COACHING_MENU.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setActiveDropdown(null)}
                      className="group flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-200 hover:bg-secondary/60 hover:shadow-sm"
                      activeProps={{ className: "bg-primary/10 border border-primary/20" }}
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-white transition-all duration-300 shadow-sm">
                        <item.icon className="h-5 w-5" />
                      </div>
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
              </div>
            )}
          </div>

          {/* 7. Contact Us Button */}
          <Link
            to="/contact"
            onMouseEnter={handleNavItemHover}
            className={`ml-2 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold shadow-md hover:scale-105 transition-all ${
              isContactActive
                ? "bg-slate-100 text-primary ring-2 ring-primary"
                : "gradient-primary text-white hover:shadow-lg"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors"
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
            {/* 1. Home */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`py-3 px-3 text-sm font-semibold border-b rounded-xl ${
                isHomeActive ? "bg-primary/10 text-primary font-bold" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>

            {/* 2. About */}
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className={`py-3 px-3 text-sm font-semibold border-b rounded-xl ${
                isAboutActive ? "bg-primary/10 text-primary font-bold" : "text-foreground hover:text-primary"
              }`}
            >
              About
            </Link>

            {/* 3. Services (Accordion Dropdown) */}
            <div className="border-b">
              <button
                type="button"
                className={`flex w-full items-center justify-between py-3 px-3 text-sm font-semibold ${
                  isServicesActive || mobileExpanded === "Services" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                onClick={() =>
                  setMobileExpanded(mobileExpanded === "Services" ? null : "Services")
                }
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileExpanded === "Services" ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {mobileExpanded === "Services" && (
                <div className="pb-3 pl-3 pr-2 flex flex-col gap-1.5 bg-secondary/30 rounded-2xl p-2 mb-2">
                  {SERVICES_MENU.map((link) => (
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

            {/* 4. Countries (Accordion Dropdown) */}
            <div className="border-b">
              <button
                type="button"
                className={`flex w-full items-center justify-between py-3 px-3 text-sm font-semibold ${
                  isCountriesActive || mobileExpanded === "Countries" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                onClick={() =>
                  setMobileExpanded(mobileExpanded === "Countries" ? null : "Countries")
                }
              >
                <span>Countries</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileExpanded === "Countries" ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {mobileExpanded === "Countries" && (
                <div className="pb-3 pl-3 pr-2 flex flex-col gap-1.5 bg-secondary/30 rounded-2xl p-2 mb-2">
                  {COUNTRIES_MENU.map((link) => (
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

            {/* 5. Visa Categories (Accordion Dropdown) */}
            <div className="border-b">
              <button
                type="button"
                className={`flex w-full items-center justify-between py-3 px-3 text-sm font-semibold ${
                  isVisaCategoriesActive || mobileExpanded === "Visa Categories" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                onClick={() =>
                  setMobileExpanded(mobileExpanded === "Visa Categories" ? null : "Visa Categories")
                }
              >
                <span>Visa Categories</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileExpanded === "Visa Categories" ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {mobileExpanded === "Visa Categories" && (
                <div className="pb-3 pl-3 pr-2 flex flex-col gap-1.5 bg-secondary/30 rounded-2xl p-2 mb-2">
                  {VISA_CATEGORIES_MENU.map((link) => (
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

            {/* 6. Coaching (Accordion Dropdown) */}
            <div className="border-b">
              <button
                type="button"
                className={`flex w-full items-center justify-between py-3 px-3 text-sm font-semibold ${
                  isCoachingActive || mobileExpanded === "Coaching" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                onClick={() =>
                  setMobileExpanded(mobileExpanded === "Coaching" ? null : "Coaching")
                }
              >
                <span>Coaching</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileExpanded === "Coaching" ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {mobileExpanded === "Coaching" && (
                <div className="pb-3 pl-3 pr-2 flex flex-col gap-1.5 bg-secondary/30 rounded-2xl p-2 mb-2">
                  {COACHING_MENU.map((link) => (
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

            {/* 7. Contact Us */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 w-full text-center rounded-full gradient-primary py-3.5 text-sm font-bold text-white shadow-md"
            >
              Contact Us
            </Link>

            {/* Helpline Numbers */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={CONTACT_INFO.phoneIndiaHref}
                className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-primary" /> India: {CONTACT_INFO.phoneIndia}
              </a>
              <a
                href={CONTACT_INFO.phoneUSAHref}
                className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-primary" /> USA: {CONTACT_INFO.phoneUSA}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
