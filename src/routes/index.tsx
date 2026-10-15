import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
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
  BookOpen,
  Users,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
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
  Loader2,
  AlertCircle,
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
import heroSliderAppointment from "@/assets/hero-slider-appointment.jpg";
import heroSliderStudyAbroad from "@/assets/hero-slider-study-abroad.jpg";
import heroSliderClientGuidance from "@/assets/hero-slider-client-guidance.jpg";

import canadaImg from "@/assets/hero-country-canada.jpg";
import germanyImg from "@/assets/hero-country-germany.jpg";
import franceImg from "@/assets/hero-country-france.jpg";
import spainImg from "@/assets/hero-country-spain.jpg";
import aboutTeamImg from "@/assets/hero-about.jpg";
import ukImg from "@/assets/hero-country-uk.jpg";
import usaImg from "@/assets/hero-country-usa.jpg";
import australiaImg from "@/assets/hero-country-australia.jpg";
import dubaiImg from "@/assets/hero-country-dubai.jpg";

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
          "VisaEnter provides premier visa & immigration services. VisaEnter: Navigate Your Journey with Confidence. Student, Tourist, Business & Family visas for Germany, UK, Canada, USA, Australia, and Dubai.",
      },
      { property: "og:title", content: "VisaEnter — Best Visa & Immigration Consultants" },
      {
        property: "og:description",
        content:
          "Helping clients achieve their immigration and study abroad dreams for 15+ years. VisaEnter: Navigate Your Journey with Confidence. Call India: 9000-89-8811 or USA: 786-938-3318.",
      },
    ],
  }),
  component: Index,
});

const HERO_IMAGES = [
  heroSlider1,
  heroSliderAppointment,
  heroSliderStudyAbroad,
  heroSliderClientGuidance,
];

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
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = HERO_SLIDES[current];

  return (
    <section className="relative min-h-[480px] sm:min-h-[560px] md:h-[84vh] md:min-h-[600px] md:max-h-[750px] w-full overflow-hidden bg-slate-950 flex flex-col justify-center">
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGES[current % HERO_IMAGES.length]})` }}
          aria-hidden
        />
      </AnimatePresence>

      {/* Hero overlay: Mobile-first strong protective contrast overlay, seamless desktop gradient */}
      <div
        className="absolute inset-0 sm:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(8, 15, 30, 0.90) 0%, rgba(8, 15, 30, 0.82) 50%, rgba(8, 15, 30, 0.95) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(10, 20, 40, 0.94) 0%, rgba(10, 20, 40, 0.80) 45%, rgba(10, 20, 40, 0.40) 75%, rgba(10, 20, 40, 0.50) 100%), linear-gradient(180deg, rgba(10, 20, 40, 0.40) 0%, transparent 40%, rgba(10, 20, 40, 0.80) 100%)",
        }}
        aria-hidden
      />

      {/* Content - with pt-[96px] sm:pt-[116px] md:pt-[100px] so it is NEVER clipped by the fixed 92px header */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 sm:px-6 text-white pt-[96px] sm:pt-[116px] md:pt-[100px] pb-8 sm:pb-12 md:py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="max-w-5xl"
          >
            {/* Eyebrow badge */}
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 sm:px-3.5 sm:py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-[0.2em] backdrop-blur-md">
              <span
                className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--accent)" }}
              />
              {slide.eyebrow}
            </span>

            {/* Main H1 Title - Responsive: lighter and balanced on small devices, bold and punchy on desktop */}
            <h1 className="mt-2 sm:mt-3 text-[20px] sm:text-3xl md:text-5xl lg:text-[3.25rem] font-bold sm:font-extrabold leading-[1.2] sm:leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] max-w-4xl break-words">
              <span className="text-white">{slide.title.split(" ").slice(0, 2).join(" ")} </span>
              <span className="text-gradient">
                {slide.title.split(" ").slice(2).join(" ")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-1.5 sm:mt-2.5 text-xs sm:text-sm md:text-base text-white/95 leading-relaxed font-normal sm:font-light max-w-2xl drop-shadow-sm">
              {slide.subtitle}
            </p>

            {/* Supporting Bullet points - matching user's reference mockup */}
            <div className="mt-3 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2.5">
              {slide.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-slate-900/70 backdrop-blur-md border border-white/20 px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[10px] sm:text-xs md:text-sm font-medium text-white shadow-sm"
                >
                  <CheckCircle2
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0"
                    style={{ color: "var(--accent)" }}
                  />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Call to Actions - Distinct button styling matching reference */}
            <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-4">
              <Link
                to={slide.ctaLink}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 px-4.5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm md:text-base font-bold text-white shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 transition-all"
              >
                {slide.cta} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={slide.ctaSecondaryLink}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-slate-950/60 hover:bg-slate-900/80 px-4.5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-white backdrop-blur-md hover:border-white/50 hover:scale-105 transition-all shadow-md"
              >
                {slide.ctaSecondary}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls - Hidden on mobile devices, shown on medium/desktop screens */}
        <div className="hidden md:flex absolute bottom-6 md:bottom-8 right-6 items-center gap-3 z-20">
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
            }
            className="grid h-10 w-10 md:h-11 md:w-11 place-items-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur-md hover:bg-white/20 transition-all"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </button>
          <div className="flex gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === i ? "w-8 bg-sky-400 shadow-sm" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
                style={{ backgroundColor: current === i ? "var(--accent)" : undefined }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="grid h-10 w-10 md:h-11 md:w-11 place-items-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur-md hover:bg-white/20 transition-all"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

import ctaBgImg from "@/assets/cta-bg.jpg";

function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const prev = () =>
    setCurrent((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () =>
    setCurrent((p) => (p + 1) % TESTIMONIALS.length);

  // Display 3 cards at a time based on current index
  const visibleIndices = [
    current % TESTIMONIALS.length,
    (current + 1) % TESTIMONIALS.length,
    (current + 2) % TESTIMONIALS.length,
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-sky-50/40 via-white to-sky-50/20 relative overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Centered Header */}
        <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary shadow-sm mb-2.5 sm:mb-3">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> OUR FEEDBACKS
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            What They’re Talking About <span className="text-gradient">VisaEnter</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Learn from our satisfied clients what they have to say about our premier services.
          </p>

          {/* Left & Right Arrow Buttons */}
          <div className="flex items-center justify-center gap-3 mt-5 sm:mt-6">
            <button
              onClick={prev}
              className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border border-sky-200 bg-white text-slate-700 shadow-sm hover:gradient-primary hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 active:scale-95"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border border-sky-200 bg-white text-slate-700 shadow-sm hover:gradient-primary hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 active:scale-95"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 3-Card Grid Matching User Attached Speech Bubble UI with Strictly Equal Height */}
        <div className="grid gap-10 md:gap-6 lg:gap-10 md:grid-cols-3 pt-4 sm:pt-6 pb-4 sm:pb-6 items-stretch">
          {visibleIndices.map((reviewIdx, slotIdx) => {
            const t = TESTIMONIALS[reviewIdx];
            const isFeatured = slotIdx === 0;
            return (
              <motion.div
                key={`${t.name}-${reviewIdx}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: slotIdx * 0.08 }}
                onClick={() => setCurrent(reviewIdx)}
                className="cursor-pointer flex flex-col items-center group h-full justify-between"
              >
                {/* Speech Bubble Card with Consistent Equal Height */}
                <div
                  className={`relative w-full rounded-2xl sm:rounded-3xl bg-white border pt-8 sm:pt-10 pb-6 sm:pb-8 px-4 sm:px-7 transition-all duration-300 flex flex-col justify-between min-h-[170px] sm:min-h-[190px] md:h-[210px] ${
                    isFeatured
                      ? "border-blue-400 shadow-xl shadow-blue-500/10 -translate-y-1 sm:-translate-y-1.5 ring-2 ring-blue-300/40"
                      : "border-sky-300/80 shadow-sm hover:border-blue-400 hover:shadow-md hover:-translate-y-1"
                  }`}
                >
                  {/* Top Circular Blue Quote Icon Badge */}
                  <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2">
                    <div className="grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-full bg-blue-600 text-white shadow-md ring-3 sm:ring-4 ring-white">
                      <Quote className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5 fill-current rotate-180" />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    {/* Centered 5 Golden Stars */}
                    <div className="flex justify-center gap-1 text-amber-400 mb-2">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Centered Review Text */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-center font-medium line-clamp-4">
                      "{t.review}"
                    </p>
                  </div>

                  {/* Downward Speech Bubble Tail Pointer */}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-sky-300/80 rotate-45" />
                </div>

                {/* Author Avatar & Info Below Speech Bubble */}
                <div className="mt-4 sm:mt-6 flex flex-col items-center text-center">
                  {/* Rotating Circular Avatar on Card Hover */}
                  <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full bg-blue-600 text-white font-black text-base sm:text-lg shadow-md ring-3 sm:ring-4 ring-white transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] group-hover:scale-110">
                    {t.avatar}
                  </div>
                  <div className="font-bold text-slate-900 text-xs sm:text-base mt-2 sm:mt-2.5 leading-snug group-hover:text-primary transition-colors">
                    {t.name}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-primary mt-0.5">
                    {t.role}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Indicator Dots for all reviews */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === i
                  ? "w-8 gradient-primary shadow-sm"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
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
    title: "Profile Assessment",
    duration: "24 — 48 Hours",
    desc: "Free evaluation of your academic background, travel goals, and refusal history with a clear visa roadmap.",
    icon: FileCheck2,
    cta: "Start Free Assessment",
    ctaLink: "#apply-form",
  },
  {
    step: "02",
    title: "Document Filing & SOP",
    duration: "1 — 2 Weeks",
    desc: "End-to-end documentation, high-approval SOP drafting, blocked fund setup, and priority embassy booking.",
    icon: ShieldCheck,
    cta: "Speak with Specialist",
    ctaLink: "/about",
  },
  {
    step: "03",
    title: "Visa Grant & Relocation",
    duration: "3 — 5 Days",
    desc: "Stamped passport collection, 1-on-1 mock interview preparation, discounted airfares, and student housing support.",
    icon: Award,
    cta: "Book Relocation",
    ctaLink: "/contact",
  },
];

function VisaProcessStepper() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-sky-50/30 to-white relative overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider sm:tracking-[0.25em] text-primary shadow-sm mb-2 sm:mb-3">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> HOW WE WORK
          </span>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Proven 3-Step <span className="text-gradient">Visa Process</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A transparent, stress-free horizontal roadmap ensuring zero confusion and near 100% visa success.
          </p>
        </div>

        {/* Compact, Simple Horizontal 3 Cards */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3 items-stretch">
          {VISA_STEPS.map((s, idx) => {
            const IconComponent = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group rounded-xl sm:rounded-2xl border border-sky-100/90 bg-white p-4 sm:p-6 shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-lg sm:rounded-xl gradient-primary text-white shadow-xs group-hover:scale-105 transition-transform">
                        <IconComponent className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-black tracking-wider text-slate-400 group-hover:text-primary transition-colors">
                        STEP {s.step}
                      </span>
                    </div>
                    <span className="rounded-full bg-sky-50 border border-sky-200/70 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-primary">
                      {s.duration}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    {s.title}
                  </h3>

                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={s.ctaLink.startsWith("#") ? "/contact" : s.ctaLink}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-sky-700 transition-colors"
                  >
                    <span>{s.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compact Horizontal Trust Bar */}
        <div className="mt-8 rounded-2xl border border-sky-100 bg-white p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl gradient-primary text-white shadow-xs">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="text-xs text-slate-700">
              <strong className="font-bold text-slate-900">100% Transparent Process:</strong> Every milestone tracked in real-time with zero hidden fees.
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2 text-xs font-bold text-white shadow-sm hover:scale-105 transition-all shrink-0"
          >
            Start Free Profile Assessment <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp: number | null = null;
    const duration = 1800; // 1.8 seconds

    let animationFrameId: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const SERVICE_OPTIONS = [
  { value: "Germany (Student / Work / APS)", label: "Germany", sub: "Student / Work / APS", icon: "🇩🇪" },
  { value: "United Kingdom", label: "United Kingdom", sub: "Student & Skilled Worker", icon: "🇬🇧" },
  { value: "Canada (Study / Express Entry PR)", label: "Canada", sub: "Study / Express Entry PR", icon: "🇨🇦" },
  { value: "United States (F1 / B1-B2)", label: "United States", sub: "F1 Student / B1-B2 Visitor", icon: "🇺🇸" },
  { value: "Australia (Subclass 500 / PR)", label: "Australia", sub: "Subclass 500 / PR", icon: "🇦🇺" },
  { value: "Dubai (UAE Business / Golden Visa)", label: "Dubai (UAE)", sub: "Business / Golden Visa", icon: "🇦🇪" },
  { value: "IELTS / PTE / Duolingo Coaching", label: "Coaching Programs", sub: "IELTS / PTE / Duolingo Masterclass", icon: "🎓" },
  { value: "Visa Refusal Consultation", label: "Refusal Overturn", sub: "Refusal Analysis & Re-filing", icon: "🛡️" },
];

function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Germany (Student / Work / APS)",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption =
    SERVICE_OPTIONS.find((opt) => opt.value === form.service) || SERVICE_OPTIONS[0];

  const validateField = (field: string, value: string): string => {
    if (field === "name") {
      if (!value.trim()) return "Full name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
    }
    if (field === "phone") {
      if (!value.trim()) return "Phone number is required";
      const cleanPhone = value.replace(/[\s\-\+\(\)]/g, "");
      if (cleanPhone.length < 8 || !/^[0-9]+$/.test(cleanPhone)) {
        return "Please enter a valid phone number (min 8 digits)";
      }
    }
    if (field === "email") {
      if (!value.trim()) return "Email address is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
        return "Please enter a valid email address";
      }
    }
    if (field === "service") {
      if (!value.trim()) return "Please select an interested country or service";
    }
    return "";
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, form[field as keyof typeof form]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const errorMsg = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched = { name: true, phone: true, email: true, service: true };
    setTouched(allTouched);

    const newErrors: Record<string, string> = {
      name: validateField("name", form.name),
      phone: validateField("phone", form.phone),
      email: validateField("email", form.email),
      service: validateField("service", form.service),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((msg) => Boolean(msg));

    if (hasError) {
      toast.error("Please fill in all mandatory fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay with loader
    await new Promise((resolve) => setTimeout(resolve, 900));

    toast.success("Application submitted successfully! Redirecting to WhatsApp counselor...");

    // Format professional WhatsApp inquiry message
    const formattedMessage = `*New Visa Consultation Request — VisaEnter Bangalore*
----------------------------------------
*Applicant Name:* ${form.name.trim()}
*Phone Number:* ${form.phone.trim()}
*Email Address:* ${form.email.trim()}
*Interested Destination / Service:* ${form.service}
*Case Notes:* ${form.message.trim() || "Ready for initial profile assessment and checklist."}
----------------------------------------
Please schedule my free consultation appointment.`;

    const whatsappUrl = `https://wa.me/919000898811?text=${encodeURIComponent(formattedMessage)}`;

    setIsSubmitting(false);

    // Navigate to WhatsApp with the user's message
    window.open(whatsappUrl, "_blank");

    // Reset form fields
    setForm({
      name: "",
      phone: "",
      email: "",
      service: "Germany (Student / Work / APS)",
      message: "",
    });
    setTouched({});
    setErrors({});
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl sm:rounded-3xl border border-sky-100 bg-white p-5 sm:p-9 shadow-xl shadow-sky-500/5 relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Book a Free Consultation
        </h3>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
          Live Advisors
        </span>
      </div>
      <p className="text-xs text-slate-500 leading-relaxed">
        Get a personalized visa roadmap from senior Bangalore consultants within 2 hours.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 sm:mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => handleBlur("name")}
              placeholder="e.g. Rahul Sharma"
              className={`w-full rounded-xl border bg-slate-50/50 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm outline-none transition-all ${
                touched.name && errors.name
                  ? "border-rose-400 bg-rose-50/30 text-rose-900 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                  : "border-slate-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
              }`}
            />
            {touched.name && errors.name && (
              <AlertCircle className="absolute right-3.5 top-3 h-4 w-4 text-rose-500 pointer-events-none" />
            )}
          </div>
          {touched.name && errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-[11px] sm:text-xs text-rose-600 font-medium flex items-center gap-1"
            >
              <span>{errors.name}</span>
            </motion.p>
          )}
        </div>

        {/* Phone & Email */}
        <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 sm:mb-1.5">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                onBlur={() => handleBlur("phone")}
                placeholder="+91 98765 43210"
                className={`w-full rounded-xl border bg-slate-50/50 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm outline-none transition-all ${
                  touched.phone && errors.phone
                    ? "border-rose-400 bg-rose-50/30 text-rose-900 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    : "border-slate-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                }`}
              />
              {touched.phone && errors.phone && (
                <AlertCircle className="absolute right-3.5 top-3 h-4 w-4 text-rose-500 pointer-events-none" />
              )}
            </div>
            {touched.phone && errors.phone && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-[11px] sm:text-xs text-rose-600 font-medium"
              >
                {errors.phone}
              </motion.p>
            )}
          </div>

          <div>
            <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 sm:mb-1.5">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                placeholder="rahul@example.com"
                className={`w-full rounded-xl border bg-slate-50/50 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm outline-none transition-all ${
                  touched.email && errors.email
                    ? "border-rose-400 bg-rose-50/30 text-rose-900 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    : "border-slate-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                }`}
              />
              {touched.email && errors.email && (
                <AlertCircle className="absolute right-3.5 top-3 h-4 w-4 text-rose-500 pointer-events-none" />
              )}
            </div>
            {touched.email && errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-[11px] sm:text-xs text-rose-600 font-medium"
              >
                {errors.email}
              </motion.p>
            )}
          </div>
        </div>

        {/* Interested Country / Service Custom Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 sm:mb-1.5">
            Interested Country or Service <span className="text-rose-500">*</span>
          </label>
          <button
            type="button"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className={`w-full rounded-xl border bg-slate-50/70 hover:bg-slate-50 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm flex items-center justify-between outline-none transition-all cursor-pointer ${
              isDropdownOpen
                ? "border-primary ring-2 ring-primary/20 bg-white"
                : "border-slate-200"
            }`}
          >
            <div className="flex items-center gap-2 overflow-hidden text-left">
              <span className="text-sm sm:text-base shrink-0">{selectedOption.icon}</span>
              <span className="font-bold text-slate-900 truncate text-xs sm:text-sm">{selectedOption.label}</span>
              <span className="text-slate-500 text-[11px] hidden sm:inline truncate">({selectedOption.sub})</span>
            </div>
            <ChevronDown
              className={`h-4 w-4 text-slate-400 shrink-0 ml-2 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180 text-primary" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="absolute z-50 left-0 right-0 mt-1.5 bg-white rounded-2xl border border-sky-100 shadow-2xl overflow-hidden py-1.5 max-h-64 overflow-y-auto"
              >
                {SERVICE_OPTIONS.map((opt) => {
                  const isSelected = form.service === opt.value;
                  return (
                    <div
                      key={opt.value}
                      onClick={() => {
                        handleChange("service", opt.value);
                        setIsDropdownOpen(false);
                      }}
                      className={`px-4 py-2 flex items-center justify-between cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-sky-50/80 text-primary font-bold"
                          : "hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 text-left">
                        <span className="text-base sm:text-lg">{opt.icon}</span>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold leading-tight">{opt.label}</div>
                          <div className="text-[10px] sm:text-[11px] text-slate-500">{opt.sub}</div>
                        </div>
                      </div>
                      {isSelected && <Check className="h-3.5 w-3.5 text-primary shrink-0" />}
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Notes / Message */}
        <div>
          <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 sm:mb-1.5">
            Tell us about your visa case
          </label>
          <textarea
            rows={3}
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Academic background, previous visa refusals, or target intake..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all resize-none text-slate-800"
          />
        </div>

        {/* Submit Button with Loading State */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl gradient-primary py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Verifying &amp; Connecting...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Submit &amp; Chat on WhatsApp</span>
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}

function Index() {
  return (
    <PageLayout>
      {/* 1. Hero Section with Sliders */}
      <HeroSlider />

      {/* 2. About VisaEnter Section (Luminous Logo-Aligned Palette: Crisp White, Electric Cyan & Deep Slate) */}
      <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-white via-sky-50/50 to-white relative overflow-hidden border-b border-slate-100">
        {/* Ambient Brand Glowing Orbs */}
        <div
          className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full opacity-[0.09] blur-[140px]"
          style={{ background: "#0099ff" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full opacity-[0.07] blur-[140px]"
          style={{ background: "#00c6ff" }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          {/* Centered Section Header */}
          <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider sm:tracking-[0.25em] text-primary shadow-sm mb-2 sm:mb-3">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> ABOUT VISAENTER
            </span>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Providing the <span className="text-gradient">Best Visa Services</span> to Clients
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-600 font-medium text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              Dedicated guidance and proven strategies turning your global immigration dreams into reality.
            </p>
          </div>

          <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 items-center">
            {/* Left Content (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-5 sm:space-y-7"
            >
              <div className="space-y-3 sm:space-y-4 text-slate-700 font-medium text-xs sm:text-sm md:text-base leading-relaxed">
                <p>
                  At <strong className="font-bold text-slate-900">VisaEnter</strong>, we are driven by unwavering dedication to turn your global immigration ambition into a confident reality. VisaEnter: Navigate Your Journey with Confidence. By listening closely to your individual academic and professional goals, our senior counselors build airtight, compliant applications tailored for optimal consulate approval.
                </p>
                <p>
                  With over <strong className="font-bold text-slate-900">15+ years of case-handling mastery</strong> across Europe, North America, and Australasia, we specialize in high-complexity filings, previous refusal overturns, and fast-track admissions.
                </p>
              </div>

              {/* 3 Animated Interactive Metric Stat Cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1">
                {[
                  { value: "15+", label: "Years Exp", sub: "Immigration", icon: Clock },
                  { value: "99%", label: "Approval Rate", sub: "Consulate", icon: ShieldCheck },
                  { value: "10k+", label: "Visas Granted", sub: "Students", icon: Award },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-xl sm:rounded-2xl border border-sky-200/80 bg-white p-2.5 sm:p-5 shadow-xs hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className="text-base sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                          {stat.value}
                        </span>
                        <div className="grid h-6 w-6 sm:h-8 sm:w-8 place-items-center rounded-lg sm:rounded-xl bg-sky-50 text-primary">
                          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </div>
                      </div>
                      <div className="font-bold text-slate-900 text-[10px] sm:text-xs md:text-sm leading-tight">
                        {stat.label}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 hidden sm:block">
                        {stat.sub}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Verified Trust Pillars */}
              <div className="space-y-2 pt-1">
                {[
                  "Tailored strategy for fresh applications & strategic refusal overturns",
                  "Direct embassy portal filing, verified blocked accounts & SOP polishing",
                  "1-on-1 rigorous mock embassy interview coaching with senior counselors",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-700">
                    <div className="grid h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0 place-items-center rounded-full bg-sky-500/15 text-primary">
                      <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </div>
                    <span className="font-medium text-xs sm:text-sm">{text}</span>
                  </div>
                ))}
              </div>

              {/* Interactive CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-4">
                <a
                  href={CONTACT_INFO.phoneIndiaHref}
                  className="inline-flex items-center gap-2 rounded-full gradient-primary px-4.5 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-glow-primary hover:scale-105 transition-all duration-300 group"
                >
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>India: {CONTACT_INFO.phoneIndia}</span>
                </a>
                <a
                  href={CONTACT_INFO.phoneUSAHref}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-primary/5 px-4.5 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-extrabold text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                >
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>USA: {CONTACT_INFO.phoneUSA}</span>
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4.5 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-slate-800 hover:border-primary hover:text-primary hover:bg-sky-50/50 shadow-xs transition-all duration-300"
                >
                  <span>Explore Agency Story</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <p className="mt-1 text-[11px] sm:text-xs text-slate-500 font-medium">
                Turnaround time for callback: within 24 hours
              </p>
            </motion.div>

            {/* Right Showcase: Real VisaEnter Counseling & Excellence Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 relative mt-4 lg:mt-0"
            >
              <div className="relative rounded-2xl sm:rounded-3xl border border-sky-200/90 bg-white p-2 sm:p-3 shadow-lg overflow-hidden group">
                {/* Visual Counselor & Office Image */}
                <div className="relative h-[250px] sm:h-[340px] md:h-[380px] w-full rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src={aboutTeamImg}
                    alt="VisaEnter Senior Counseling Team"
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                  {/* Bottom Right Glass Badge */}
                  <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 shadow-md border border-sky-100 flex items-center gap-2 sm:gap-3">
                    <div className="grid h-7 w-7 sm:h-9 sm:w-9 place-items-center rounded-lg sm:rounded-xl gradient-primary text-white text-[10px] sm:text-xs font-black shadow-xs">
                      99%
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Approval Precision</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-500">First-attempt filings</div>
                    </div>
                  </div>

                  {/* Bottom Left Badge */}
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 rounded-lg sm:rounded-xl bg-slate-900/90 backdrop-blur-md px-2.5 py-1.5 sm:px-3 sm:py-2 text-white text-[10px] sm:text-xs font-bold flex items-center gap-1.5 sm:gap-2 shadow-md">
                    <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-sky-400" />
                    <span>15+ Yrs Mastery</span>
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
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Centered Section Header */}
          <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider sm:tracking-[0.25em] text-primary shadow-sm mb-2 sm:mb-3">
              OUR SERVICES
            </span>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Visa &amp; <span className="text-gradient">Travel Solutions</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-muted-foreground text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              End-to-end admissions, insurance, accommodation, and ticketing designed for your journey.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {VISAENTER_SERVICES.map((srv, idx) => {
              const srvImg = SERVICE_CARDS_IMAGES[srv.slug] || admissionsSrvImg;
              return (
                <motion.div
                  key={srv.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group rounded-2xl sm:rounded-3xl border border-border/80 bg-white overflow-hidden shadow-xs hover:shadow-glow-primary hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header Image with Gradient */}
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <img
                        src={srvImg}
                        alt={srv.name}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <span className="absolute top-3.5 left-3.5 text-2xl sm:text-3xl bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-1.5 sm:p-2">
                        {srv.icon}
                      </span>
                      <div className="absolute bottom-3 sm:bottom-4 left-3.5 sm:left-4 right-3.5 sm:right-4">
                        <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-accent drop-shadow" style={{ color: "var(--accent)" }}>
                          VISAENTER SPECIALTY
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-white leading-tight mt-0.5">
                          {srv.name}
                        </h3>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-4 sm:p-6">
                      <p className="text-xs font-bold text-primary mb-1.5 sm:mb-2">{srv.tagline}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3 sm:mb-4">
                        {srv.shortDescription}
                      </p>

                      <div className="space-y-1 sm:space-y-1.5 border-t pt-2.5 sm:pt-3">
                        {srv.highlights.slice(0, 3).map((hl, i) => (
                          <div key={i} className="flex items-center gap-2 text-[10px] sm:text-[11px] text-foreground/80 font-medium">
                            <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 text-emerald-500" />
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 pt-0">
                    <Link
                      to="/services/$slug"
                      params={{ slug: srv.slug }}
                      className="flex items-center justify-between w-full py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-xl text-xs font-bold border border-border/80 bg-secondary/30 group-hover:gradient-primary group-hover:text-white group-hover:border-transparent transition-all duration-300"
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
      <section className="py-14 sm:py-20 md:py-24 bg-secondary/30 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Centered Section Header */}
          <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider sm:tracking-[0.25em] text-primary shadow-sm mb-2 sm:mb-3">
              OUR COUNTRIES LIST
            </span>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Select the Country of <span className="text-gradient">Your Choice</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Discover visa procedures, processing fees, and requirements for top destinations.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COUNTRIES_DATA.map((country, idx) => {
              const countryImg = COUNTRY_CARDS_IMAGES[country.slug] || germanyImg;
              return (
                <motion.div
                  key={country.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group relative rounded-2xl sm:rounded-3xl border border-border/80 bg-white overflow-hidden shadow-xs hover:shadow-glow-primary hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Country Photo Header */}
                    <div className="relative h-36 sm:h-44 overflow-hidden">
                      <img
                        src={countryImg}
                        alt={country.name}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                      <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5">
                        <span className="rounded-full bg-white/20 backdrop-blur-md border border-white/25 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-extrabold text-white uppercase tracking-wider shadow-xs">
                          Visa Services
                        </span>
                      </div>
                      <div className="absolute bottom-2.5 sm:bottom-3 left-3.5 sm:left-4 right-3.5 sm:right-4">
                        <h3 className="text-lg sm:text-xl font-extrabold text-white drop-shadow">
                          {country.name}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] font-bold text-accent drop-shadow truncate" style={{ color: "var(--accent)" }}>
                          {country.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-4 sm:p-5">
                      <ul className="space-y-1.5 sm:space-y-2 text-xs text-muted-foreground">
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

                  <div className="p-4 sm:p-5 pt-0">
                    <Link
                      to="/countries/$slug"
                      params={{ slug: country.slug }}
                      className="flex items-center justify-between w-full py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-xl text-xs font-bold border border-border/80 bg-secondary/30 group-hover:gradient-primary group-hover:text-white group-hover:border-transparent transition-all duration-300"
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-sky-50/30 to-white relative overflow-hidden border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          {/* Centered Section Header */}
          <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider sm:tracking-[0.25em] text-primary shadow-sm mb-2 sm:mb-3">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> COACHING WE OFFER
            </span>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Get the Best <span className="text-gradient">Trainings You Deserve</span>
            </h2>
            <p className="mt-2 sm:mt-2.5 text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Score high with our certified master faculty, AI mock scoring, and personalized test preparation programs.
            </p>
          </div>

          {/* 4-Card Responsive Coaching Grid (Decreased Height & Compact) */}
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {COACHING_DATA.map((coach, idx) => {
              const icons = [GraduationCap, BookOpen, ShieldCheck, Award];
              const targets = ["Band 7.5+", "Score 65–79+", "Grade B / A", "Score 100+"];
              const IconComp = icons[idx % icons.length];
              const targetBadge = targets[idx % targets.length];

              return (
                <motion.div
                  key={coach.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  whileHover={{ y: -3 }}
                  className="group rounded-xl sm:rounded-2xl border border-sky-100 bg-white p-3.5 sm:p-4 shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Compact Header: Icon, Course Name & Target Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2 sm:mb-2.5">
                      <div className="flex items-center gap-2 sm:gap-2.5">
                        <div className="grid h-8 w-8 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-lg sm:rounded-xl gradient-primary text-white shadow-xs group-hover:scale-105 transition-transform duration-300">
                          <IconComp className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                            {coach.name}
                          </h3>
                          <span className="text-[9px] sm:text-[10px] font-semibold text-primary/80 uppercase tracking-wider">
                            {coach.tagline}
                          </span>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full bg-sky-50 border border-sky-200/80 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-primary">
                        {targetBadge}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-snug line-clamp-2 mt-1">
                      {coach.description}
                    </p>
                  </div>

                  {/* Compact Bottom Action Area */}
                  <div className="mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 flex items-center gap-1">
                      <Clock className="h-3 w-3 text-primary" /> {coach.duration}
                    </span>

                    <Link
                      to="/coaching/$slug"
                      params={{ slug: coach.slug }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-sky-700 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Compact Bottom Diagnostic & Demo Class Banner */}
          <div className="mt-8 rounded-2xl border border-sky-200/80 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-primary text-white shadow">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-xs sm:text-sm">
                  Unsure which exam is right for your destination?
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Book a free diagnostic mock test and receive a 1-on-1 score roadmap from our certified master faculty.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2.5 text-xs font-bold text-white shadow-glow-primary hover:scale-105 transition-all shrink-0"
            >
              Book Free Demo Class <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Promotional / Trust Banner with Background Image */}
      <section className="relative overflow-hidden py-14 sm:py-20 md:py-24 bg-slate-950 text-white">
        {/* Background Image with Rich Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={ctaBgImg}
            alt="Excellence in Visa & Immigration"
            className="h-full w-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-950/95" />
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #0099ff 0, transparent 50%), radial-gradient(circle at 80% 50%, #00c6ff 0, transparent 50%)",
            }}
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center px-4 sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-cyan-300 shadow-sm mb-2.5 sm:mb-3">
            EXCELLENCE IN VISA &amp; IMMIGRATION
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Most Trusted Visa &amp; <span className="text-gradient">Immigration Agency</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-white/80 text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            15+ years of proven success with strategic case handling and zero hidden costs.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <Link
              to="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Discover More <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={CONTACT_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md hover:bg-white/20 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 8. OUR VISA CATEGORIES (Redesigned with Imagery & Sleek Cards) */}
      <section className="py-14 sm:py-20 md:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Centered Section Header */}
          <div className="mx-auto max-w-4xl text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary shadow-sm mb-2.5 sm:mb-3">
              OUR VISA CATEGORIES
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Citizenship &amp; <span className="text-gradient">Immigration Services</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Comprehensive visa guidance tailored for students, professionals, and families.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-7 sm:grid-cols-2 lg:grid-cols-4">
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
                  className="group rounded-2xl sm:rounded-3xl border border-border/80 bg-white overflow-hidden shadow-sm hover:shadow-glow-primary hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Photo Header */}
                    <div className="relative h-36 sm:h-44 overflow-hidden">
                      <img
                        src={catImg}
                        alt={cat.name}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                      <span className="absolute top-3 left-3 text-xl sm:text-2xl bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-1.5">
                        {cat.icon}
                      </span>
                      <div className="absolute bottom-2.5 sm:bottom-3 left-3.5 sm:left-4 right-3.5 sm:right-4">
                        <h3 className="text-lg sm:text-xl font-extrabold text-white drop-shadow leading-tight">
                          {cat.name}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] font-bold text-accent drop-shadow truncate" style={{ color: "var(--accent)" }}>
                          {cat.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5">
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {cat.description}
                      </p>

                      <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t">
                        <div className="text-[10px] font-extrabold uppercase text-muted-foreground tracking-wider mb-1.5 sm:mb-2">
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

                  <div className="p-4 sm:p-5 pt-0">
                    <Link
                      to="/visa-categories/$slug"
                      params={{ slug: cat.slug }}
                      className="flex items-center justify-between w-full py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-xl text-xs font-bold border border-border/80 bg-secondary/30 group-hover:gradient-primary group-hover:text-white group-hover:border-transparent transition-all duration-300"
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
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Centered Section Header */}
          <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary shadow-sm mb-2.5 sm:mb-3">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> COMMON FAQS
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Got queries regarding APS certificates, visa appointments, or application steps?
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {FAQ_ITEMS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="group rounded-2xl border border-sky-100/90 bg-white px-4 sm:px-6 py-0.5 sm:py-1 shadow-xs transition-all duration-300 data-[state=open]:border-primary data-[state=open]:shadow-md data-[state=open]:bg-gradient-to-b data-[state=open]:from-white data-[state=open]:to-sky-50/40 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-bold text-xs sm:text-sm md:text-base text-slate-900 hover:text-primary transition-colors data-[state=open]:text-primary py-3 sm:py-3.5 group-data-[state=open]:font-extrabold">
                  <div className="flex items-center gap-2.5 sm:gap-3.5 text-left">
                    <span className="grid h-6 w-6 sm:h-7 sm:w-7 place-items-center rounded-lg sm:rounded-xl bg-sky-50 text-primary font-extrabold text-[11px] sm:text-xs shrink-0 group-data-[state=open]:gradient-primary group-data-[state=open]:text-white transition-all shadow-2xs">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 pb-3.5 pl-8 sm:pl-10 pr-1 sm:pr-2 border-t border-sky-100/70 mt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 10. OUR FEEDBACKS (Interactive Slider with Left and Right Arrows) */}
      <TestimonialsSlider />

      {/* 11. THEY TRUST VISAENTER (Awards & Achievements Showcase with Animated Numbers from 0) */}
      <section className="py-14 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          {/* Centered Section Header */}
          <div className="mx-auto max-w-4xl text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary shadow-sm mb-2.5 sm:mb-3">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> THEY TRUST VISAENTER
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Our Agency <span className="text-gradient">Awards &amp; Achievements</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              Recognized for 15+ years of proven immigration excellence and industry-leading visa success.
            </p>
          </div>

          {/* 4 Redesigned Trust Key Numbers with Dynamic Count-Up Animation from 0 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 max-w-5xl mx-auto mb-10 sm:mb-14">
            {[
              { target: 15, suffix: "+", label: "Years Experience", desc: "Since 2008 in Bangalore", icon: Clock },
              { target: 99, suffix: "%", label: "Visa Approval Rate", desc: "Consulate verified record", icon: ShieldCheck },
              { target: 10, suffix: "k+", label: "Visas Granted", desc: "Students & professionals", icon: Award },
              { target: 100, suffix: "%", label: "Transparent Pricing", desc: "Zero hidden charges", icon: CheckCircle2 },
            ].map((stat, i) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group rounded-xl sm:rounded-2xl border border-sky-100 bg-white p-3 sm:p-4.5 text-center shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="mx-auto mb-2 grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-xl bg-[#0099ff] text-white shadow-md shadow-sky-500/20 transition-transform duration-300 ease-out group-hover:scale-120 group-hover:shadow-xl group-hover:shadow-sky-500/35">
                      <IconComp className="h-4 w-4 sm:h-5 sm:w-5 text-white stroke-[2.2]" />
                    </div>
                    <div className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight text-gradient">
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5 sm:mt-1 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 mt-1.5 sm:mt-2 border-t border-slate-100 pt-1.5 sm:pt-2 leading-tight">
                    {stat.desc}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Awards Cards Grid */}
          <div className="grid gap-5 sm:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {AWARDS.map((award, idx) => (
              <motion.div
                key={award.year}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-2xl sm:rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50/20 to-sky-100/10 p-5 sm:p-8 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Ambient glow watermark */}
                <div className="absolute -right-8 -bottom-8 text-8xl sm:text-9xl font-black text-primary/5 select-none pointer-events-none">
                  {award.year}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 sm:px-4 sm:py-1 text-[11px] sm:text-xs font-extrabold text-white shadow-sm"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      <Award className="h-3.5 w-3.5" /> {award.year} OFFICIAL EXCELLENCE
                    </span>
                    <div className="grid h-11 w-11 sm:h-14 sm:w-14 place-items-center rounded-xl sm:rounded-2xl gradient-primary text-white text-xl sm:text-2xl shadow-md group-hover:scale-110 transition-transform">
                      {award.icon}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {award.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-border/80 flex items-center justify-between text-[11px] sm:text-xs font-bold text-primary">
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

      {/* 12. VISIT US (VisaEnter Bangalore Office & Animated Consultation Form with Validation & WhatsApp Navigation) */}
      <section id="apply-form" className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-sky-50/30 via-white to-sky-50/20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Centered Section Header */}
          <div className="mx-auto max-w-4xl text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary shadow-sm mb-2.5 sm:mb-3">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> VISIT US
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Connect With Our <span className="text-gradient">Bangalore Office</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Drop by our office or schedule a personalized consultation with our senior specialists.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
            {/* Left Info with Modern Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3.5 sm:space-y-4"
            >
              <motion.div
                whileHover={{ x: 6 }}
                className="group flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-sky-100 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-xl bg-[#0099ff] text-white shadow-sm transition-transform duration-300 group-hover:scale-115">
                  <MapPin className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-primary transition-colors">India Head Office (Bangalore)</div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-0.5 sm:mt-1 leading-relaxed">
                    {CONTACT_INFO.address}
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="group flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-sky-100 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-xl bg-[#0099ff] text-white shadow-sm transition-transform duration-300 group-hover:scale-115">
                  <Phone className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-primary transition-colors">Direct Helpline</div>
                  <div className="flex flex-col gap-1 mt-1 text-xs sm:text-sm font-bold text-primary">
                    <a href={CONTACT_INFO.phoneIndiaHref} className="hover:underline flex items-center gap-1.5">
                      <span className="text-[11px] sm:text-xs text-slate-500 font-semibold">India:</span> {CONTACT_INFO.phoneIndia}
                    </a>
                    <a href={CONTACT_INFO.phoneUSAHref} className="hover:underline flex items-center gap-1.5">
                      <span className="text-[11px] sm:text-xs text-slate-500 font-semibold">USA:</span> {CONTACT_INFO.phoneUSA}
                    </a>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 mt-1">Mon – Sat: 9:30 AM to 6:30 PM</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="group flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-sky-100 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-xl bg-[#0099ff] text-white shadow-sm transition-transform duration-300 group-hover:scale-115">
                  <Mail className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-primary transition-colors">Official Inquiries</div>
                  <a
                    href={CONTACT_INFO.emailHref}
                    className="text-xs sm:text-sm font-bold text-primary mt-0.5 sm:mt-1 inline-block hover:underline"
                  >
                    {CONTACT_INFO.email}
                  </a>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">Turnaround time for callback: within 24 hours</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Consultation Form with Validation, Loading & WhatsApp Navigation */}
            <ConsultationForm />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
