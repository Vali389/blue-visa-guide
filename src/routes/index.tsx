import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  Clock,
  Compass,
  FileCheck2,
  MessageCircle,
  PlaneTakeoff,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Palmtree,
  Briefcase,
  GraduationCap,
  Wrench,
  Activity,
  Plane,
  Building2,
  Laptop,
  MapPin,
  CheckCircle2,
  Hourglass,
  DollarSign,
  CheckCircle,
  Check,
  Globe,
  FileText,
  ChevronDown,
} from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { PageLayout } from "@/components/site/PageLayout";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Testimonials } from "@/components/site/Testimonials";
import { SERVICES } from "@/lib/services";
import heroImg from "@/assets/hero-home.jpg";
import ctaBg from "@/assets/cta-bg.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VisaGuide.world — Worldwide Travel Visa Guide" },
      { name: "description", content: "Requirements, timelines and applications for 200+ destinations." },
    ],
  }),
  component: Index,
});

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Verified Information",
    text: "Every guide is reviewed by immigration specialists and updated with the latest policy changes.",
  },
  {
    icon: Clock,
    title: "Real Processing Times",
    text: "Live data from embassies and consulates so you know exactly when to expect a decision.",
  },
  {
    icon: Users,
    title: "Expert Community",
    text: "Connect with travellers who've walked the same path — genuine stories, real advice.",
  },
  {
    icon: Award,
    title: "Trusted Worldwide",
    text: "Referenced by universities, HR teams and travel agencies across 45+ countries.",
  },
];

const STEPS = [
  { icon: Search, title: "Discover", text: "Pick your destination and see live requirements for your passport." },
  { icon: FileCheck2, title: "Prepare", text: "Follow our checklist — forms, photos, financials, appointments." },
  { icon: MessageCircle, title: "Consult", text: "Talk to a specialist for interview prep and edge-case guidance." },
  { icon: PlaneTakeoff, title: "Travel", text: "Get approved with confidence and board your flight stress-free." },
];

const DESTINATIONS = [
  "United States", "Canada", "United Kingdom", "Schengen", "Australia",
  "Japan", "UAE", "Singapore", "New Zealand", "Germany", "France", "South Korea",
];

const PURPOSE_VISAS = [
  {
    title: "Tourist / Visitor Visa",
    icon: Palmtree,
    validity: "Short-Stay",
    description: "Designed for leisure travel, sightseeing, holidays, and visiting family or friends. Focuses on short durations without employment options.",
    requirements: ["Valid Passport (6m+)", "Proof of Financial Sufficiency", "Confirmed Return Ticket", "Detailed Travel Itinerary"],
    workAllowed: false,
  },
  {
    title: "Business Visa",
    icon: Briefcase,
    validity: "Short-Stay",
    description: "Issued for professionals participating in meetings, commercial conferences, contract signings, or exploratory business activities.",
    requirements: ["Host Letter of Invitation", "Employment Cover Letter", "Business Entity Registration", "Event Tickets / Schedules"],
    workAllowed: false,
  },
  {
    title: "Student Visa",
    icon: GraduationCap,
    validity: "Temporary Residence",
    description: "Enables international students to reside and pursue full-time academic courses, research, or training at approved colleges or universities.",
    requirements: ["Official Admission Letter (COE/I-20)", "Tuition Payment Receipts", "Language Test Score Reports", "Sufficient Fund Guarantees"],
    workAllowed: true,
  },
  {
    title: "Work Visa",
    icon: Wrench,
    validity: "Long-Stay / Perm",
    description: "Grants legal employment clearance under an approved employer. Often requires local labor audits and certificate sponsorships.",
    requirements: ["Signed Employment Contract", "Sponsor License Certificate", "Labor Market Assessment Approval", "Background Police Clearances"],
    workAllowed: true,
  },
  {
    title: "Transit Visa",
    icon: Plane,
    validity: "Ultra Short-Stay",
    description: "For passengers transferring flights or connecting vessels inside a country's ports en route to a separate third destination.",
    requirements: ["Confirmed Ticket to Third Country", "Valid Destination Country Visa", "Passport and Transit Forms"],
    workAllowed: false,
  },
  {
    title: "Medical Visa",
    icon: Activity,
    validity: "Treatment Term",
    description: "For individuals traveling to seek specific surgeries, specialist clinical consults, or therapeutic rehabilitation programs overseas.",
    requirements: ["Local Doctor Referral Letter", "Host Medical Clinic Admission letter", "Prepaid Expense proof", "Escort / Companion passport"],
    workAllowed: false,
  },
];

const APPLICATION_METHODS = [
  {
    title: "Consulate / Embassy",
    icon: Building2,
    channel: "Physical Submit",
    description: "The classic paper-based application. Involves compiling document physical decks, mailing papers or visiting embassies, and scanning biometric signatures.",
    speedText: "2–6 Weeks",
    speedVal: 1,
    effortText: "High Effort",
    simplicityVal: 1,
    examples: ["Schengen Visa", "US B1/B2", "UK Visitor"],
  },
  {
    title: "Electronic Visa (e-Visa)",
    icon: Laptop,
    channel: "100% Online",
    description: "A fast, fully digital process. Applications are filled out on official web portals with scanned uploads, and digital approvals are emailed.",
    speedText: "24–72 Hours",
    speedVal: 4,
    effortText: "Low Effort",
    simplicityVal: 4,
    examples: ["Australia ETA", "India eVisa", "Vietnam Visa"],
  },
  {
    title: "Visa on Arrival (VoA)",
    icon: MapPin,
    channel: "At Port Entry",
    description: "Applied for immediately upon stepping off the aircraft or passing land borders. Minimal pre-travel logistics, but entails queues and cash fees at checkpoints.",
    speedText: "10–30 Mins",
    speedVal: 5,
    effortText: "Medium Effort",
    simplicityVal: 3,
    examples: ["Thailand VoA", "Jordan Entry", "Egypt Border"],
  },
  {
    title: "Visa-Free Entry",
    icon: CheckCircle2,
    channel: "Bilateral Waiver",
    description: "Direct entry enabled via international bilateral waivers. Requires only a passport, though some countries require brief electronic registrations (ESTA/ETIAS).",
    speedText: "Instant",
    speedVal: 5,
    effortText: "Minimal Effort",
    simplicityVal: 5,
    examples: ["EU to UK", "Japan to USA", "Schengen to Canada"],
  },
];

const HISTORICAL_TIMELINE = [
  {
    year: "420 BC",
    title: "Ancient Safe Conduct Letters",
    icon: FileText,
    content: "The earliest referenced travel permit is documented in the Hebrew Bible (Nehemiah 2:7-9). Nehemiah, an official of the Persian Empire, requested safe-passage letters from King Artaxerxes I to travel safely through the provinces beyond the Euphrates river.",
  },
  {
    year: "1414 AD",
    title: "Henry V's Passports",
    icon: Award,
    content: "King Henry V of England is widely credited with establishing the first official passport precursor: standard 'safe conducts'. These royal certificates helped English subjects identify themselves and verify their peaceful intentions when visiting foreign kingdoms.",
  },
  {
    year: "1918–1922",
    title: "The Interwar Formalization",
    icon: Globe,
    content: "World War I sparked border security paranoia. Under the League of Nations, countries gathered to establish standardized guidelines for passports and visas. In 1922, the Nansen Passport was introduced as the first internationally recognized travel permit for stateless refugees.",
  },
  {
    year: "1945–Present",
    title: "The Digital Passport Age",
    icon: Laptop,
    content: "Post-WWII globalization led to visa-waiver alliances, the Schengen Agreement (1985), and modern electronic systems. Today, physical ink stamps are rapidly being replaced by biometric credentials, automated border scanners, and online e-Visas.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is the difference between a passport and a travel visa?",
    answer: "A passport is an official ID issued by your home country proving your citizenship and identity, allowing you to travel internationally. A travel visa is a formal endorsement or digital clearance granted by a foreign government allowing you to enter and stay in their territory for a specific period and purpose.",
  },
  {
    question: "How long does it take for a travel visa to be processed?",
    answer: "Processing wait times depend entirely on the visa application method: Online e-Visas typically process in 24 to 72 hours; Visas on Arrival are granted immediately at the border within 15 to 30 minutes; traditional embassy or consulate visas require physically scheduling appointments and submitting paper files, which can take between 2 to 6 weeks.",
  },
  {
    question: "Can I apply for a travel visa online, or do I have to visit an embassy?",
    answer: "This is based on your nationality and destination. Many countries offer convenient online e-Visas or digital travel authorizations (like the US ESTA or European ETIAS). If a country does not support electronic waivers for your specific passport, you must book an appointment at their official embassy or outsourcing visa agencies like VFS Global or TLScontact.",
  },
  {
    question: "What are the most common reasons for a travel visa application denial?",
    answer: "Rejections are usually caused by incomplete application packets, lack of sufficient funds, failure to purchase travel health insurance, not providing clean travel bookings, or not proving strong ties to your home country (creating overstay suspicions). Double-checking details and submitting solid documents is critical.",
  },
  {
    question: "Do I need a transit visa if I am connecting flights at the airport?",
    answer: "Typically, if your layover is brief and you stay inside the airport's international transit zone, you do not require a transit visa. However, you will need a visa if your connection requires changing airports, claiming luggage, staying in a local hotel, or if you hold a passport from a nationality where the country requires an Airport Transit Visa (ATV) for all travelers.",
  },
  {
    question: "Are visa application fees refundable if my application is rejected?",
    answer: "No, government and agency processing fees are non-refundable. The fee pays for the labor and system infrastructure involved in examining and processing your visa request. It is charged regardless of whether the visa is approved or denied.",
  },
];

function Index() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);
  return (
    <PageLayout>
      <Hero
        image={heroImg}
        eyebrow="Worldwide Travel Visa Guide"
        title={
          <>
            Travel the world with <span className="text-gradient">confidence.</span>
          </>
        }
        subtitle="Planning a trip? Get visa requirements, application steps and processing times for any country in the world — in one place."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/visas-by-country"
            className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
          >
            Explore Visas <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/passport-index"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md hover:bg-white/20"
          >
            <Compass className="h-4 w-4" /> Passport Index
          </Link>
        </div>
      </Hero>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--primary)" }}>
              Popular Services
            </p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Travel visa requirements
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.slug} data={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose (Dark, animated cards) */}
      <section className="relative overflow-hidden py-28 bg-[oklch(0.18_0.03_240)] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--primary) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--accent) 0, transparent 45%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--accent)" }}>
              Why VisaGuide
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold md:text-6xl">
              Precision, transparency, results
            </h2>
            <p className="mt-4 text-white/70">
              A modern, boutique approach to a traditionally opaque industry.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: "var(--gradient-primary)" }}
                />
                <div
                  className="relative grid h-12 w-12 place-items-center rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: "color-mix(in oklab, var(--accent) 15%, transparent)", border: "1px solid color-mix(in oklab, var(--accent) 30%, transparent)" }}
                >
                  <f.icon className="h-5 w-5" style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="relative mt-6 font-serif text-xl font-semibold">{f.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/60">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--primary)" }}>
              How it works
            </p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Four steps to your visa</h2>
          </div>

          <div className="relative mt-16 grid gap-8 md:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px md:block"
              style={{ background: "linear-gradient(90deg, transparent, var(--primary), var(--accent), transparent)" }}
            />
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-full gradient-primary text-white shadow-card">
                  <s.icon className="h-6 w-6" />
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-white text-xs font-bold" style={{ color: "var(--primary)" }}>
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular destinations chip cloud */}
      <section className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--primary)" }}>
            Popular Destinations
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Where travellers are going</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {DESTINATIONS.map((d, i) => (
              <motion.span
                key={d}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -3 }}
                className="cursor-pointer rounded-full border bg-card px-5 py-2.5 text-sm font-medium shadow-sm hover:border-primary hover:text-primary transition-colors"
              >
                {d}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Popular Destinations Spotlight */}
      <section className="py-24 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--primary)" }}>
              Spotlight Destinations
            </p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Explore Popular Hubs
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Get the latest details on visa protocols, fees, and timelines for the world's most visited travel spots.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s, i) => {
              const accent = s.accentColor ?? "var(--primary)";
              return (
                <motion.div
                  key={`spotlight-${s.slug}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white p-4 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-500"
                >
                  <div>
                    {/* Aspect image block with smaller height */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      {s.badge && (
                        <span
                          className="absolute top-3 right-3 rounded-full px-2.5 py-0.5 text-[9px] font-extrabold tracking-widest text-white shadow-md uppercase"
                          style={{ background: s.badge === "NEW" ? "var(--accent)" : s.badge === "TRENDING" ? "#e8a24b" : accent }}
                        >
                          {s.badge}
                        </span>
                      )}
                      <div className="absolute bottom-3 left-4 right-4">
                        <p className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-1 mb-0.5" style={{ color: "var(--accent)" }}>
                          <MapPin className="h-2.5 w-2.5" /> {s.tagline}
                        </p>
                        <h3 className="text-xl font-bold text-white drop-shadow-sm leading-tight">
                          {s.title}
                        </h3>
                      </div>
                    </div>

                    {/* Smaller compact details */}
                    <div className="flex flex-col pt-4">
                      {/* Primary metadata row */}
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <div className="flex items-center gap-1.5">
                          <Hourglass className="h-3.5 w-3.5 text-muted-foreground" />
                          <div>
                            <p className="text-[8px] text-muted-foreground uppercase font-bold tracking-wider">Processing</p>
                            <p className="text-xs font-bold text-foreground">{s.processingTime}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-right">
                          <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
                          <div>
                            <p className="text-[8px] text-muted-foreground uppercase font-bold tracking-wider">Standard Fee</p>
                            <p className="text-xs font-bold text-foreground">{s.fee}</p>
                          </div>
                        </div>
                      </div>

                      {/* Short description - only 1 line */}
                      <p className="text-xs text-muted-foreground line-clamp-1 mb-1">
                        {s.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    {/* Slim border link */}
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl text-[11px] font-bold border border-border/80 hover:border-primary hover:bg-primary/5 text-foreground hover:text-primary transition-all duration-300"
                    >
                      Explore Guide <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visa Types by Purpose */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--primary)" }}>
              Visa Classifications
            </p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Visa Types by Purpose
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Understand standard visa categories tailored to your traveling intentions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PURPOSE_VISAS.map((pv, i) => {
              const Icon = pv.icon;
              return (
                <motion.div
                  key={pv.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white p-8 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-500"
                >
                  <div>
                    <div className="flex items-start gap-4">
                      {/* Logo-aligned icon box */}
                      <div className="h-12 w-12 rounded-xl flex items-center justify-center gradient-primary text-white shadow-md shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase mb-1 bg-secondary text-primary border border-primary/10">
                          {pv.validity}
                        </span>
                        <h3 className="text-lg font-bold text-foreground">{pv.title}</h3>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                      {pv.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border/60">
                    <div className="mb-4">
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-2.5">Required Checklist</p>
                      <ul className="space-y-2">
                        {pv.requirements.map((r, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/80">
                            <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-semibold px-4 py-2.5 rounded-xl bg-secondary/50 border">
                      <span className="text-muted-foreground">Work Permission</span>
                      <span className="font-bold text-[10px] uppercase tracking-wider" style={{ color: pv.workAllowed ? "var(--accent)" : "var(--muted-foreground)" }}>
                        {pv.workAllowed ? "Allowed (Limited)" : "Prohibited"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visa Types by Method of Application */}
      <section className="relative overflow-hidden py-28 bg-[oklch(0.18_0.03_240)] text-white border-t border-white/5">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, var(--primary) 0, transparent 40%), radial-gradient(circle at 70% 80%, var(--accent) 0, transparent 45%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--accent)" }}>
              Processing Channels
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl text-white">
              Visa Types by Method of Application
            </h2>
            <div className="mt-4 h-1 w-16 bg-accent mx-auto rounded-full" />
            <p className="mt-4 text-white/70 text-lg">
              Different pathways to request entry clearance, spanning physical consulates to automated electronic waivers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {APPLICATION_METHODS.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-primary/20 hover:-translate-y-1 transition-all duration-500"
                >
                  {/* Watermark indexing */}
                  <span className="text-white/5 font-extrabold select-none pointer-events-none absolute right-4 top-2 text-8xl opacity-10 group-hover:scale-105 transition-all duration-700">
                    0{i + 1}
                  </span>

                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-white shadow-md group-hover:gradient-primary group-hover:border-transparent transition-all duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-white/45 block">{m.channel}</span>
                        <h3 className="text-base font-bold text-white leading-tight">{m.title}</h3>
                      </div>
                    </div>

                    <p className="text-xs text-white/60 leading-relaxed line-clamp-2">{m.description}</p>
                  </div>

                  <div>
                    {/* Inline badges replacing stacked bars */}
                    <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                      <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                        {m.speedText}
                      </span>
                      <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20" style={{ color: "var(--accent)", borderColor: "rgba(141,198,63,0.2)" }}>
                        {m.effortText}
                      </span>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[10px]">
                      <span className="text-white/30 uppercase font-bold tracking-wider">Examples</span>
                      <span className="text-white/70 font-semibold truncate max-w-[120px]" title={m.examples.join(", ")}>
                        {m.examples.join(", ")}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section: A Brief History of Travel Visas */}
      <section className="py-28 bg-gradient-to-b from-secondary/40 to-background relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--primary)" }}>
              Travel Chronology
            </p>
            <h2 className="mt-3 text-4xl font-serif font-bold md:text-5xl">
              A Brief History of Travel Visas
            </h2>
            <div className="mt-4 h-1 w-16 gradient-primary mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground text-lg">
              Interact with the timeline to trace the evolution of travel authorization from ancient Persia to the modern digital era.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Interactive Timeline Stepper */}
            <div className="relative flex items-center justify-between px-4 py-8">
              {/* Stepper background line */}
              <div className="absolute left-6 right-6 top-1/2 h-0.5 bg-border/60 -translate-y-1/2 pointer-events-none" />
              {/* Stepper active line */}
              <div
                className="absolute left-6 top-1/2 h-0.5 gradient-primary -translate-y-1/2 transition-all duration-500 ease-in-out pointer-events-none"
                style={{ width: `calc(${(activeTimelineStep / (HISTORICAL_TIMELINE.length - 1)) * 100}% - 12px)` }}
              />

              {HISTORICAL_TIMELINE.map((node, idx) => {
                const isActive = activeTimelineStep === idx;
                const Icon = node.icon;
                return (
                  <button
                    key={node.year}
                    onClick={() => setActiveTimelineStep(idx)}
                    className="relative flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    {/* Stepper Node Ball */}
                    <div
                      className={`h-12 w-12 rounded-full border-4 flex items-center justify-center transition-all duration-500 z-10 ${isActive
                          ? "bg-white border-primary text-primary scale-110 shadow-lg font-extrabold"
                          : "bg-white border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                        }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    {/* Year Label */}
                    <span
                      className={`absolute -top-7 text-xs font-extrabold tracking-wider transition-all duration-300 whitespace-nowrap ${isActive ? "text-primary scale-105" : "text-muted-foreground group-hover:text-foreground"
                        }`}
                    >
                      {node.year}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Display Card for Active Step */}
            <motion.div
              key={activeTimelineStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 bg-white p-8 md:p-10 rounded-3xl border border-border/80 shadow-soft hover:shadow-card transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center group"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 gradient-primary" />
              {/* Large floating graphic symbol */}
              <div className="h-20 w-20 rounded-2xl flex items-center justify-center gradient-primary text-white shadow-card shrink-0 group-hover:scale-110 transition-transform duration-500">
                {(() => {
                  const ActiveIcon = HISTORICAL_TIMELINE[activeTimelineStep].icon;
                  return <ActiveIcon className="h-8 w-8" />;
                })()}
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-xs font-extrabold uppercase tracking-widest text-primary block mb-1">
                  Milestone Era • {HISTORICAL_TIMELINE[activeTimelineStep].year}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {HISTORICAL_TIMELINE[activeTimelineStep].title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {HISTORICAL_TIMELINE[activeTimelineStep].content}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-card relative border-t border-border/80">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--primary)" }}>
              Got Questions?
            </p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-4 h-1 w-16 gradient-primary mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground text-lg">
              Find quick answers to common questions about global travel visa regulations and procedures.
            </p>
          </div>

          <div className="w-full space-y-4">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="border border-border/80 rounded-2xl overflow-hidden bg-card transition-all duration-300 hover:shadow-soft">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-foreground hover:text-primary transition-colors cursor-pointer group"
                  >
                    <span className="text-base md:text-lg">{faq.question}</span>
                    <div className={`p-1.5 rounded-full bg-secondary text-muted-foreground transition-all duration-300 ${isOpen ? "rotate-180 text-primary bg-primary/10" : "group-hover:bg-secondary/85"}`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>
                  <div
                    className="transition-all duration-300 ease-in-out overflow-hidden"
                    style={{ maxHeight: isOpen ? "250px" : "0px", opacity: isOpen ? 1 : 0 }}
                  >
                    <div className="p-6 text-sm md:text-base text-muted-foreground leading-relaxed bg-secondary/20 border-t border-dashed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA with background */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl p-12 text-white shadow-card md:p-20">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${ctaBg})` }}
              aria-hidden
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(115deg, oklch(0.18 0.03 240 / 0.92) 0%, oklch(0.18 0.03 240 / 0.75) 50%, color-mix(in oklab, var(--primary) 55%, transparent) 100%)",
              }}
              aria-hidden
            />
            <Sparkles className="absolute -right-8 -top-8 h-40 w-40 text-white/10" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--accent)" }}>
                Ready when you are
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-bold md:text-5xl">
                Ready to plan your next journey?
              </h2>
              <p className="mt-4 max-w-xl text-white/85">
                Get personalised visa guidance in minutes. Tell us where you're going — we'll do the rest.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-foreground hover:scale-[1.03] transition-transform"
              >
                Talk to an expert <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
