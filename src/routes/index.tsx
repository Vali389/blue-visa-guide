import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Users,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  HelpCircle,
  FileCheck2,
  Calendar,
  Globe2,
  Send,
  Star,
  DollarSign,
  Hourglass,
  Quote,
  Check,
} from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import {
  HERO_SLIDES,
  COUNTRIES_DATA,
  COACHING_DATA,
  VISA_CATEGORIES_DATA,
  VISAENTER_SERVICES,
  TESTIMONIALS,
  AWARDS,
  FAQ_ITEMS,
  CONTACT_INFO,
} from "@/lib/site-data";

// Asset Imports for Rich Cards
import heroSlider1 from "@/assets/hero-slider-1.jpg";
import heroSlider2 from "@/assets/hero-slider-2.jpg";
import heroSlider3 from "@/assets/hero-slider-3.jpg";

import canadaImg from "@/assets/service-canada.jpg";
import germanyImg from "@/assets/service-schengen.jpg";
import franceImg from "@/assets/hero-about.jpg";
import spainImg from "@/assets/hero-passport.jpg";
import ukImg from "@/assets/service-uk.jpg";
import usaImg from "@/assets/service-us.jpg";
import australiaImg from "@/assets/service-australia.jpg";
import dubaiImg from "@/assets/service-business.jpg";

import studentCatImg from "@/assets/service-student.jpg";
import businessCatImg from "@/assets/service-business.jpg";
import touristCatImg from "@/assets/service-tourist.jpg";
import familyCatImg from "@/assets/service-family.jpg";

import admissionsSrvImg from "@/assets/service-student.jpg";
import appointmentSrvImg from "@/assets/hero-home.jpg";
import fundingSrvImg from "@/assets/cta-bg.jpg";
import insuranceSrvImg from "@/assets/service-residency.jpg";
import accommodationSrvImg from "@/assets/hero-about.jpg";
import flightSrvImg from "@/assets/hero-country.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VisaEnter — Best Visa & Immigration Consultants in Bangalore" },
      {
        name: "description",
        content:
          "VisaEnter provides premier visa services with near 100% success rate. Student, Tourist, Business & Family visas for Germany, UK, Canada, USA, Australia, and Dubai.",
      },
      { property: "og:title", content: "VisaEnter — Best Visa & Immigration Consultants" },
      {
        property: "og:description",
        content:
          "Helping clients achieve their immigration and study abroad dreams for 15+ years. 99% visa approval rate. Call +91-81252 98332.",
      },
    ],
  }),
  component: Index,
});

const HERO_IMAGES = [heroSlider1, heroSlider2, heroSlider3];

const COUNTRY_CARDS_IMAGES: Record<string, string> = {
  germany: germanyImg,
  canada: canadaImg,
  france: franceImg,
  spain: spainImg,
  "united-kingdom": ukImg,
  "united-states": usaImg,
  australia: australiaImg,
  dubai: dubaiImg,
};

const CATEGORY_CARDS_IMAGES: Record<string, string> = {
  "student-visa": studentCatImg,
  "business-visa": businessCatImg,
  "tourist-visa": touristCatImg,
  "family-visa": familyCatImg,
};

const SERVICE_CARDS_IMAGES: Record<string, string> = {
  "university-admissions": admissionsSrvImg,
  "visa-appointment": appointmentSrvImg,
  funding: fundingSrvImg,
  "travel-medical-insurance": insuranceSrvImg,
  accommodation: accommodationSrvImg,
  "flight-booking": flightSrvImg,
};

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[current];

  return (
    <section className="relative h-[80vh] min-h-[520px] max-h-[720px] w-full overflow-hidden bg-slate-950">
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGES[current % HERO_IMAGES.length]})` }}
          aria-hidden
        />
      </AnimatePresence>

      {/* Hero overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15, 23, 42, 0.65) 0%, rgba(15, 23, 42, 0.85) 100%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 text-white pt-4 md:pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            {/* Eyebrow badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md">
              <span
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--accent)" }}
              />
              {slide.eyebrow}
            </span>

            {/* Main H1 Title with Gradient Styling & Balanced Font Size */}
            <h1 className="mt-3.5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-white drop-shadow-md">
              <span className="text-white">{slide.title.split(" ").slice(0, 2).join(" ")} </span>
              <span className="text-gradient">
                {slide.title.split(" ").slice(2).join(" ")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-base md:text-lg text-white/85 leading-relaxed font-light">
              {slide.subtitle}
            </p>

            {/* Supporting Bullet points from document */}
            <div className="mt-5 flex flex-wrap gap-3">
              {slide.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-1.5 text-xs md:text-sm font-medium backdrop-blur-md border border-white/15"
                >
                  <CheckCircle2
                    className="h-4 w-4 shrink-0"
                    style={{ color: "var(--accent)" }}
                  />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to={slide.ctaLink}
                className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3 text-sm md:text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                {slide.cta} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={slide.ctaSecondaryLink}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm md:text-base font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all"
              >
                {slide.ctaSecondary}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="absolute bottom-8 right-6 flex items-center gap-3 z-20">
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
            }
            className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md hover:bg-white/20 transition-all"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${current === i ? "w-8 bg-primary" : "w-2.5 bg-white/40"
                  }`}
                style={{ backgroundColor: current === i ? "var(--accent)" : undefined }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md hover:bg-white/20 transition-all"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () =>
    setCurrent((p) => (p + 1) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p
              className="text-xs font-extrabold uppercase tracking-[0.3em]"
              style={{ color: "var(--primary)" }}
            >
              OUR FEEDBACKS
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl text-foreground">
              What They’re Talking About Guidevisa
            </h2>
            <p className="mt-4 text-muted-foreground text-base">
              Learn from our satisfied customers what they have to say about our services.
            </p>
          </div>

          {/* Left & Right Arrow Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              className="grid h-12 w-12 place-items-center rounded-full border border-border/80 bg-white text-foreground shadow-sm hover:gradient-primary hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 active:scale-95"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="grid h-12 w-12 place-items-center rounded-full border border-border/80 bg-white text-foreground shadow-sm hover:gradient-primary hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 active:scale-95"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 3-Card Grid with Active Slide Emphasis on mobile and desktop */}
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => {
            const isFeatured = idx === current;
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setCurrent(idx)}
                className={`relative rounded-3xl border p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer ${isFeatured
                  ? "bg-white border-primary/50 shadow-glow-primary -translate-y-2 ring-2 ring-primary/20"
                  : "bg-white/80 border-border/80 shadow-sm hover:bg-white hover:border-primary/30 hover:-translate-y-1"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <Quote
                      className={`h-8 w-8 transition-colors ${isFeatured ? "text-primary" : "text-muted/40"
                        }`}
                    />
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed italic">
                    "{t.review}"
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3.5 border-t pt-4">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl gradient-primary text-white font-bold shadow-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Indicator Dots */}
        <div className="mt-10 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${current === i
                ? "w-8 bg-primary shadow-sm"
                : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              style={{ backgroundColor: current === i ? "var(--primary)" : undefined }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const VISA_STEPS = [
  {
    step: "01",
    label: "Step 01",
    title: "Complete Online Form",
    subtitle: "Initial Profile & Eligibility Assessment",
    duration: "24 — 48 Hours",
    desc: "Fill out your details on our website or get in touch with our counselors for an initial assessment of your background and academic or travel goals.",
    icon: FileCheck2,
    deliverables: [
      "Free profile & eligibility evaluation by senior counselors",
      "Assessment of previous refusal history & gap-year justification",
      "Customized roadmap for university admission or visa category",
      "Clear breakdown of embassy fees and blocked fund requirements",
    ],
    clientRole: "Submit basic academic documents & passport copy",
    visaEnterRole: "Conduct preliminary assessment & build strategic profile dossier",
    cta: "Start Free Assessment",
    ctaLink: "#apply-form",
  },
  {
    step: "02",
    label: "Step 02",
    title: "Apply for Visa & Documentation",
    subtitle: "Dossier Preparation, SOP & Embassy Filing",
    duration: "1 — 2 Weeks",
    desc: "Get complete assistance from immigration experts with 15+ years of experience. We finalize your documents, draft high-approval SOPs, and book appointments.",
    icon: ShieldCheck,
    deliverables: [
      "Drafting & polishing high-impact Statement of Purpose (SOP)",
      "Blocked account setup (Sperrkonto / GIC / Proof of Funds)",
      "Online filing on official portals (VFS, TLS, ImmiAccount, DS-160)",
      "1-on-1 mock interview preparation with senior counselors",
    ],
    clientRole: "Attend biometric appointment & embassy interview",
    visaEnterRole: "Manage end-to-end documentation, scheduling & mock coaching",
    cta: "Speak with Specialist",
    ctaLink: "/about",
  },
  {
    step: "03",
    label: "Step 03",
    title: "Receive Your Visa & Relocate",
    subtitle: "Passport Stamping, Flight & Accommodation",
    duration: "3 — 5 Business Days",
    desc: "Receive your approved visa and travel with confidence. Our team assists with pre-departure orientation, student housing, flight tickets, and forex.",
    icon: Award,
    deliverables: [
      "99% Visa Approval Track Record with verified stamps",
      "Pre-departure orientation & customs baggage guidelines",
      "Verified student housing & accommodation booking assistance",
      "Discounted international student airfares & travel insurance",
    ],
    clientRole: "Collect stamped passport & pack your bags",
    visaEnterRole: "Coordinate arrival support, flight tickets & accommodation",
    cta: "Book Relocation Services",
    ctaLink: "/contact",
  },
];

function VisaProcessStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const current = VISA_STEPS[activeStep];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p
            className="text-xs font-extrabold uppercase tracking-[0.3em]"
            style={{ color: "var(--primary)" }}
          >
            HOW WE WORK
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl text-foreground">
            Our 3-Step Visa Process
          </h2>
          <p className="mt-4 text-muted-foreground text-base">
            A structured, interactive roadmap ensuring zero confusion and near 100% visa success.
          </p>
        </div>

        {/* Split Interactive Stepper */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Left Column: Interactive Step Selector (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {VISA_STEPS.map((s, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left rounded-3xl p-6 transition-all duration-300 border flex items-start gap-4 relative overflow-hidden focus:outline-none ${isActive
                    ? "bg-white border-primary/50 shadow-glow-primary -translate-y-1 ring-2 ring-primary/20"
                    : "bg-white/70 border-border/80 hover:bg-white hover:border-primary/30"
                    }`}
                >
                  {/* Left Step Badge */}
                  <div
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-sm font-extrabold transition-all duration-300 ${isActive
                      ? "gradient-primary text-white shadow-md scale-105"
                      : "bg-secondary text-muted-foreground"
                      }`}
                  >
                    {s.step}
                  </div>

                  {/* Step Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary">
                        {s.label}
                      </span>
                      <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-bold text-muted-foreground">
                        {s.duration}
                      </span>
                    </div>

                    <h3
                      className={`text-base font-bold mt-1 transition-colors ${isActive ? "text-foreground" : "text-foreground/80"
                        }`}
                    >
                      {s.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {s.desc}
                    </p>
                  </div>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStepperBar"
                      className="absolute left-0 top-0 bottom-0 w-1.5 gradient-primary"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Step Showcase Panel (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full rounded-3xl border border-border/80 bg-white p-8 md:p-10 shadow-card flex flex-col justify-between"
              >
                <div>
                  {/* Panel Header */}
                  <div className="flex items-center justify-between gap-4 pb-6 border-b">
                    <div className="flex items-center gap-3.5">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-white shadow-md">
                        <current.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-primary">
                          {current.label} Overview
                        </span>
                        <h3 className="text-2xl font-bold text-foreground mt-0.5">
                          {current.title}
                        </h3>
                      </div>
                    </div>

                    <span className="hidden sm:inline-flex rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
                      {current.duration}
                    </span>
                  </div>

                  {/* Subtitle & Description */}
                  <p className="mt-5 text-sm text-foreground/80 font-medium">
                    {current.subtitle}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {current.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-6">
                    <div className="text-xs font-extrabold uppercase text-foreground tracking-wider mb-3">
                      Key Deliverables &amp; Inclusions:
                    </div>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {current.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-secondary/40 border border-border/60"
                        >
                          <CheckCircle2
                            className="h-4 w-4 shrink-0 mt-0.5"
                            style={{ color: "var(--accent)" }}
                          />
                          <span className="text-xs font-medium text-foreground/90 leading-tight">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process Breakdown (Client vs VisaEnter) */}
                  <div className="mt-6 grid gap-3 sm:grid-cols-2 p-4 rounded-2xl bg-secondary/20 border">
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                        Your Part:
                      </div>
                      <p className="text-xs font-semibold text-foreground mt-1">
                        {current.clientRole}
                      </p>
                    </div>
                    <div className="sm:border-l sm:pl-3">
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-primary">
                        VisaEnter Experts:
                      </div>
                      <p className="text-xs font-semibold text-foreground mt-1">
                        {current.visaEnterRole}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    {VISA_STEPS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveStep(i)}
                        className={`h-2 rounded-full transition-all ${activeStep === i ? "w-7 bg-primary" : "w-2 bg-border"
                          }`}
                        aria-label={`Step ${i + 1}`}
                      />
                    ))}
                  </div>

                  <a
                    href={current.ctaLink}
                    className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-2.5 text-xs font-bold text-white shadow hover:scale-105 transition-all"
                  >
                    {current.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <PageLayout>
      {/* 1. Hero Section with Sliders */}
      <HeroSlider />

      {/* 2. About VisaEnter Section (Premium Dark Glassmorphism) */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        {/* Ambient Glowing Blobs */}
        <div
          className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full opacity-20 blur-[120px]"
          style={{ background: "var(--primary)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full opacity-15 blur-[120px]"
          style={{ background: "var(--accent)" }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-xs font-extrabold uppercase tracking-[0.3em]"
                style={{ color: "var(--accent)" }}
              >
                ABOUT VISAENTER
              </p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-5xl text-white leading-tight">
                Providing the <span className="text-gradient">Best Visa Services</span> to Clients
              </h2>
              <div className="mt-6 space-y-4 text-white/80 leading-relaxed text-base">
                <p>
                  At Visa Enter, we are all driven by dedication and highly motivated to support your
                  immigration dream on its way to success. We achieve this by truly listening to your
                  professional goals and needs and give all in for inspiring, creative, effective
                  solutions to accelerate your preparation to achieve success.
                </p>
                <p>
                  Our team of experts have been handling cases for 15+ years and hence we develop
                  strategies for each case depending on the applicants’ background and current
                  immigration situation to increase the chances of visa approvals.
                </p>
              </div>

              {/* Trust Points */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { title: "Ready to Help You in Immigration", desc: "Dedicated guidance" },
                  { title: "Works Fast & We’re Cost Effective", desc: "Affordable transparent fee" },
                  { title: "Visa Success – 99%", desc: "High approval rate" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-4 shadow-sm hover:border-primary/50 transition-all"
                  >
                    <CheckCircle2
                      className="h-5 w-5 mb-2"
                      style={{ color: "var(--accent)" }}
                    />
                    <div className="font-bold text-white text-sm leading-tight">{item.title}</div>
                    <div className="text-xs text-white/60 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>

              {/* Contact Prompt Button */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="inline-flex items-center gap-3 rounded-full gradient-primary px-6 py-3.5 text-sm font-bold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                  <Phone className="h-4 w-4" /> Have Question? Free {CONTACT_INFO.phone}
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white hover:underline"
                >
                  Learn More About Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Card / Visual Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl border border-white/15 bg-slate-900/80 backdrop-blur-xl p-8 shadow-2xl overflow-hidden">
                <div
                  className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl pointer-events-none"
                  style={{ background: "var(--gradient-primary)" }}
                />

                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl gradient-primary text-white text-2xl font-bold shadow-lg">
                    15+
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Years of Experience</h3>
                    <p className="text-sm text-white/60">
                      Trusted immigration & study abroad agency
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 shadow-sm">
                    <ShieldCheck
                      className="h-6 w-6 shrink-0 mt-0.5"
                      style={{ color: "var(--primary)" }}
                    />
                    <div>
                      <div className="font-bold text-sm text-white">Strategic Case Handling</div>
                      <div className="text-xs text-white/60 mt-1">
                        Tailored strategies for every profile, background & refusal history.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 shadow-sm">
                    <GraduationCap
                      className="h-6 w-6 shrink-0 mt-0.5"
                      style={{ color: "var(--accent)" }}
                    />
                    <div>
                      <div className="font-bold text-sm text-white">Global University Network</div>
                      <div className="text-xs text-white/60 mt-1">
                        Admissions support for Germany, UK, Canada, USA, and Australia.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 shadow-sm">
                    <Award
                      className="h-6 w-6 shrink-0 mt-0.5"
                      style={{ color: "var(--primary)" }}
                    />
                    <div>
                      <div className="font-bold text-sm text-white">Recognized Agency Awards</div>
                      <div className="text-xs text-white/60 mt-1">
                        2022 Visa Guarantee & 2018 Quality Management award winner.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. HOW WE WORK (Interactive Visual Stepper) */}
      <VisaProcessStepper />

      {/* 4. OUR SERVICES (Prominently Featured with Rich Visuals) */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p
                className="text-xs font-extrabold uppercase tracking-[0.3em]"
                style={{ color: "var(--primary)" }}
              >
                OUR SERVICES
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl text-foreground">
                Comprehensive Visa &amp; Travel Solutions
              </h2>
              <p className="mt-3 text-muted-foreground text-base max-w-2xl">
                End-to-end relocation, admissions, insurance, accommodation, and ticketing services designed for a smooth journey.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-xs font-bold text-white shadow hover:scale-105 transition-all shrink-0"
            >
              Book All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {VISAENTER_SERVICES.map((srv, idx) => {
              const srvImg = SERVICE_CARDS_IMAGES[srv.slug] || admissionsSrvImg;
              return (
                <motion.div
                  key={srv.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group rounded-3xl border border-border/80 bg-white overflow-hidden shadow-sm hover:shadow-glow-primary hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header Image with Gradient */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={srvImg}
                        alt={srv.name}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <span className="absolute top-4 left-4 text-3xl bg-white/20 backdrop-blur-md rounded-2xl p-2">
                        {srv.icon}
                      </span>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-accent drop-shadow" style={{ color: "var(--accent)" }}>
                          VISAENTER SPECIALTY
                        </span>
                        <h3 className="text-xl font-bold text-white leading-tight mt-0.5">
                          {srv.name}
                        </h3>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      <p className="text-xs font-bold text-primary mb-2">{srv.tagline}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                        {srv.shortDescription}
                      </p>

                      <div className="space-y-1.5 border-t pt-3">
                        {srv.highlights.slice(0, 3).map((hl, i) => (
                          <div key={i} className="flex items-center gap-2 text-[11px] text-foreground/80 font-medium">
                            <Check className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to="/services/$slug"
                      params={{ slug: srv.slug }}
                      className="flex items-center justify-between w-full py-2.5 px-4 rounded-xl text-xs font-bold border border-border/80 bg-secondary/30 group-hover:gradient-primary group-hover:text-white group-hover:border-transparent transition-all duration-300"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. OUR COUNTRIES LIST (Redesigned with Rich Photography & Gradient Cards) */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p
                className="text-xs font-extrabold uppercase tracking-[0.3em]"
                style={{ color: "var(--primary)" }}
              >
                OUR COUNTRIES LIST
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl text-foreground">
                Select the Country of Your Choice
              </h2>
              <p className="mt-3 text-muted-foreground text-base">
                Discover visa procedures, processing fees, and requirements for top destinations.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:underline shrink-0"
            >
              Explore All Destinations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COUNTRIES_DATA.map((country, idx) => {
              const countryImg = COUNTRY_CARDS_IMAGES[country.slug] || germanyImg;
              return (
                <motion.div
                  key={country.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative rounded-3xl border border-border/80 bg-white overflow-hidden shadow-sm hover:shadow-glow-primary hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Country Photo Header */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={countryImg}
                        alt={country.name}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="rounded-full bg-white/20 backdrop-blur-md border border-white/25 px-3 py-0.5 text-[10px] font-extrabold text-white uppercase tracking-wider shadow-sm">
                          Visa Services
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="text-xl font-extrabold text-white drop-shadow">
                          {country.name}
                        </h3>
                        <p className="text-[11px] font-bold text-accent drop-shadow truncate" style={{ color: "var(--accent)" }}>
                          {country.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5">
                      <ul className="space-y-2 text-xs text-muted-foreground">
                        {country.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2 font-medium text-foreground/80">
                            <CheckCircle2
                              className="h-3.5 w-3.5 shrink-0"
                              style={{ color: "var(--accent)" }}
                            />
                            <span className="truncate">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      to="/countries/$slug"
                      params={{ slug: country.slug }}
                      className="flex items-center justify-between w-full py-2.5 px-4 rounded-xl text-xs font-bold border border-border/80 bg-secondary/30 group-hover:gradient-primary group-hover:text-white group-hover:border-transparent transition-all duration-300"
                    >
                      <span>View Visa Details</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Coaching Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p
              className="text-xs font-extrabold uppercase tracking-[0.3em]"
              style={{ color: "var(--primary)" }}
            >
              COACHING WE OFFER
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl text-foreground">
              Get the Best Trainings You Deserve
            </h2>
            <p className="mt-4 text-muted-foreground text-base">
              Score high with our expert faculty and personalized test preparation programs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {COACHING_DATA.map((coach, idx) => (
              <motion.div
                key={coach.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-3xl border border-border/80 bg-white p-8 shadow-card hover:shadow-glow-primary transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{coach.icon}</span>
                    <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
                      {coach.duration}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {coach.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">
                    {coach.tagline}
                  </p>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {coach.description}
                  </p>

                  <div className="mt-6 space-y-2 border-t pt-4">
                    {coach.highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                        <CheckCircle2
                          className="h-3.5 w-3.5 shrink-0"
                          style={{ color: "var(--accent)" }}
                        />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t flex items-center justify-between">
                  <Link
                    to="/coaching/$slug"
                    params={{ slug: coach.slug }}
                    className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-2.5 text-xs font-bold text-white shadow hover:scale-105 transition-all"
                  >
                    Discover More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="text-xs text-muted-foreground font-semibold">
                    {coach.mode}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Promotional / Trust Banner */}
      <section className="relative overflow-hidden py-20 bg-[oklch(0.18_0.03_240)] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--primary) 0, transparent 50%), radial-gradient(circle at 80% 50%, var(--accent) 0, transparent 50%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span
              className="text-xs font-extrabold uppercase tracking-[0.25em]"
              style={{ color: "var(--accent)" }}
            >
              Excellence in Visa &amp; Immigration
            </span>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl tracking-tight leading-tight">
              Most Trusted Visa &amp; Immigration Agency!
            </h2>
            <p className="mt-4 text-white/70 text-base leading-relaxed">
              With 15+ years of proven success, we guarantee strategic case handling, zero hidden
              costs, and continuous support until your passport is stamped.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full gradient-primary px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Discover More <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={CONTACT_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md hover:bg-white/20 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 8. OUR VISA CATEGORIES (Redesigned with Imagery & Sleek Cards) */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p
              className="text-xs font-extrabold uppercase tracking-[0.3em]"
              style={{ color: "var(--primary)" }}
            >
              OUR VISA CATEGORIES
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl text-foreground">
              We Offers Citizenship &amp; Immigration Services
            </h2>
            <p className="mt-4 text-muted-foreground text-base">
              Comprehensive visa guidance tailored for students, professionals, entrepreneurs, and families.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {VISA_CATEGORIES_DATA.map((cat, idx) => {
              const catImg = CATEGORY_CARDS_IMAGES[cat.slug] || studentCatImg;
              return (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group rounded-3xl border border-border/80 bg-white overflow-hidden shadow-sm hover:shadow-glow-primary hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Photo Header */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={catImg}
                        alt={cat.name}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                      <span className="absolute top-3.5 left-3.5 text-2xl bg-white/20 backdrop-blur-md rounded-2xl p-1.5">
                        {cat.icon}
                      </span>
                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="text-xl font-extrabold text-white drop-shadow leading-tight">
                          {cat.name}
                        </h3>
                        <p className="text-[11px] font-bold text-accent drop-shadow truncate" style={{ color: "var(--accent)" }}>
                          {cat.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {cat.description}
                      </p>

                      <div className="mt-4 pt-3 border-t">
                        <div className="text-[10px] font-extrabold uppercase text-muted-foreground tracking-wider mb-2">
                          Popular For:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.popularCountries.slice(0, 3).map((pc) => (
                            <span
                              key={pc}
                              className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold text-foreground/80 border"
                            >
                              {pc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      to="/visa-categories/$slug"
                      params={{ slug: cat.slug }}
                      className="flex items-center justify-between w-full py-2.5 px-4 rounded-xl text-xs font-bold border border-border/80 bg-secondary/30 group-hover:gradient-primary group-hover:text-white group-hover:border-transparent transition-all duration-300"
                    >
                      <span>Category Guide</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p
              className="text-xs font-extrabold uppercase tracking-[0.3em]"
              style={{ color: "var(--primary)" }}
            >
              COMMON FAQS
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl text-foreground">
              Frequently Asked Questions?
            </h2>
            <p className="mt-4 text-muted-foreground text-base">
              Got queries regarding APS certificates, visa appointments, or application steps?
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQ_ITEMS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="rounded-2xl border border-border/80 px-6 py-1 shadow-sm data-[state=open]:shadow-md data-[state=open]:border-primary/40 transition-all"
              >
                <AccordionTrigger className="text-left font-bold text-base hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 10. OUR FEEDBACKS (Interactive Slider with Left and Right Arrows) */}
      <TestimonialsSlider />

      {/* 11. THEY TRUST GUIDEVISA (Awards & Achievements Redesigned) */}
      {/* 11. THEY TRUST GUIDEVISA (Awards & Achievements Luxury Showcase) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p
              className="text-xs font-extrabold uppercase tracking-[0.3em]"
              style={{ color: "var(--primary)" }}
            >
              THEY TRUST GUIDEVISA
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl text-foreground">
              Our Agency <span className="text-gradient">Awards &amp; Achievements</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-base">
              Recognized worldwide for 15+ years of proven immigration excellence, certified quality management, and industry-leading visa success.
            </p>
          </div>

          {/* 4 Trust Key Numbers */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto mb-14">
            {[
              { num: "15+", label: "Years Experience", desc: "Since 2008 in Bangalore" },
              { num: "99%", label: "Visa Approval Rate", desc: "Near 100% success record" },
              { num: "10k+", label: "Visas Granted", desc: "Students & professionals" },
              { num: "100%", label: "Transparent Pricing", desc: "No hidden embassy charges" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl border border-border/80 bg-secondary/20 p-6 text-center shadow-sm hover:shadow-card hover:border-primary/40 transition-all"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-gradient">
                  {stat.num}
                </div>
                <div className="text-sm font-bold text-foreground mt-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Awards Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {AWARDS.map((award, idx) => (
              <motion.div
                key={award.year}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-3xl border border-primary/20 bg-gradient-to-br from-white via-secondary/20 to-primary/5 p-8 shadow-card hover:shadow-glow-primary hover:border-primary/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Ambient glow watermark */}
                <div className="absolute -right-8 -bottom-8 text-9xl font-black text-primary/5 select-none pointer-events-none">
                  {award.year}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-4 py-1 text-xs font-extrabold text-white shadow-sm"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      <Award className="h-3.5 w-3.5" /> {award.year} OFFICIAL EXCELLENCE
                    </span>
                    <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-white text-2xl shadow-md group-hover:scale-110 transition-transform">
                      {award.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                    {award.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/80 flex items-center justify-between text-xs font-bold text-primary">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" /> Verified Quality Standard
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">★ ★ ★ ★ ★</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. VISIT US (VisaEnter Bangalore Office & Animated Consultation Form) */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="text-xs font-extrabold uppercase tracking-[0.3em]"
                style={{ color: "var(--primary)" }}
              >
                VISIT US
              </span>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl text-foreground">
                VisaEnter Office
              </h2>
              <p className="mt-4 text-muted-foreground text-base leading-relaxed">
                Drop by our Bangalore office or connect with our senior immigration specialists
                for immediate assistance.
              </p>

              <div className="mt-8 space-y-4">
                <motion.div
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border shadow-sm"
                >
                  <MapPin
                    className="h-6 w-6 shrink-0 mt-1"
                    style={{ color: "var(--primary)" }}
                  />
                  <div>
                    <div className="font-bold text-sm text-foreground">India Head Office (Bangalore)</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {CONTACT_INFO.address}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border shadow-sm"
                >
                  <Phone
                    className="h-6 w-6 shrink-0 mt-1"
                    style={{ color: "var(--accent)" }}
                  />
                  <div>
                    <div className="font-bold text-sm text-foreground">Direct Helpline</div>
                    <a
                      href={CONTACT_INFO.phoneHref}
                      className="text-sm font-bold text-primary mt-1 inline-block hover:underline"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border shadow-sm"
                >
                  <Mail
                    className="h-6 w-6 shrink-0 mt-1"
                    style={{ color: "var(--primary)" }}
                  />
                  <div>
                    <div className="font-bold text-sm text-foreground">Official Inquiries</div>
                    <a
                      href={CONTACT_INFO.emailHref}
                      className="text-sm font-bold text-primary mt-1 inline-block hover:underline"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Consultation Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-border/80 bg-white p-8 shadow-card"
            >
              <h3 className="text-2xl font-bold text-foreground">Book a Free Consultation</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Get a personalized visa roadmap from our senior consultants within 2 hours.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Our visa counselor will contact you shortly.");
                }}
                className="mt-6 space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91-XXXXX XXXXX"
                      className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@email.com"
                      className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Interested Country or Service
                  </label>
                  <select className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option value="Germany">Germany (Student / Work / APS)</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada (Study / Express Entry)</option>
                    <option value="United States">United States (F1 / B1/B2)</option>
                    <option value="Australia">Australia</option>
                    <option value="Dubai">Dubai (UAE Business / Tourist)</option>
                    <option value="OET Coaching">OET Coaching</option>
                    <option value="TOFEL Coaching">TOFEL Coaching</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Tell us about your visa case
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Previous visa history, course details, or target relocation date..."
                    className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl gradient-primary py-3.5 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" /> Request Free Callback
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
