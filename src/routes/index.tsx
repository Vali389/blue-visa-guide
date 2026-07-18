import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-home.jpg";
import schengenDest from "@/assets/schengen-dest.png";
import usaDest from "@/assets/usa-dest.png";
import ukDest from "@/assets/uk-dest.png";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Testimonials } from "@/components/Testimonials";
import { SERVICES } from "@/lib/services-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Globe,
  Clock,
  Compass,
  Shield,
  ArrowRight,
  HelpCircle,
  MapPin,
  Calendar,
  FileCheck,
  Zap,
  Bookmark,
  Award
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VisaGuide World — Premium Visa & Passport Guidance" },
      { name: "description", content: "Explore visas by country, policy and passport rankings. Trusted visa specialists for tourist, business, student, work & residency visas." },
      { property: "og:title", content: "VisaGuide World — Premium Visa & Passport Guidance" },
      { property: "og:description", content: "Trusted visa specialists worldwide. Tourist, business, student, work and residency visas." },
    ],
  }),
  component: Home,
});

const STATS = [
  { n: "190+", l: "Countries covered" },
  { n: "50K+", l: "Visas approved" },
  { n: "98%", l: "Success rate" },
  { n: "15+", l: "Years of expertise" },
];

const HIGHLIGHTS = [
  { icon: "M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z", title: "Expert Consultants", desc: "Senior advisors with 15+ years handling complex immigration cases." },
  { icon: "M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12z", title: "Verified & Trusted", desc: "Licensed agents, transparent pricing and end-to-end accountability." },
  { icon: "M12 8v4l3 2M12 22a10 10 0 100-20 10 10 0 000 20z", title: "Fast Turnaround", desc: "Priority appointments and same-day document review available." },
];

const DESTINATIONS = [
  {
    country: "Schengen Area",
    region: "Europe",
    flag: "🇪🇺",
    popularVisa: "Schengen Visitor Visa",
    stay: "Up to 90 days",
    processing: "10–15 Days",
    fee: "From €90",
    description: "Access 29 European countries with a single borderless visa. Perfect for tourism, business meetings, and short-term family visits.",
    features: ["Borderless travel in Europe", "Multiple entry options", "High approval rate"]
  },
  {
    country: "United States",
    region: "North America",
    flag: "🇺🇸",
    popularVisa: "B1/B2 Visitor Visa",
    stay: "Up to 180 days",
    processing: "3–5 Weeks",
    fee: "From $185",
    description: "Travel to the US for leisure, medical treatment, or business conferences. Valid for up to 10 years with multiple entries allowed.",
    features: ["10-year multi-entry validity", "Covers business & tourism", "Flexible stays"]
  },
  {
    country: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    popularVisa: "Standard Visitor Visa",
    stay: "Up to 6 months",
    processing: "2–3 Weeks",
    fee: "From £115",
    description: "Visit the UK for holidays, visiting friends, business appointments, or private medical treatment under one unified visa stream.",
    features: ["Covers all four UK nations", "Fast-track slots available", "Extendable for work/study"]
  },
  {
    country: "Canada",
    region: "North America",
    flag: "🇨🇦",
    popularVisa: "Visitor Visa / eTA",
    stay: "Up to 6 months",
    processing: "10–20 Days",
    fee: "From $100 CAD",
    description: "Explore the vast landscapes and cosmopolitan cities of Canada. Simple online application processes available for select nationalities.",
    features: ["eTA options for visa-exempts", "10-year validity potential", "Super Visa for parents"]
  },
  {
    country: "Australia",
    region: "Oceania",
    flag: "🇦🇺",
    popularVisa: "Visitor Visa (Subclass 600)",
    stay: "Up to 12 months",
    processing: "2–10 Days",
    fee: "From $195 AUD",
    description: "Enjoy holidays, cruise travels, or visit family in Australia. Most applications are processed online with fast turnaround times.",
    features: ["100% digital eVisitor pathways", "Flexible stay lengths", "Multi-year tourist streams"]
  },
  {
    country: "Japan",
    region: "Asia",
    flag: "🇯🇵",
    popularVisa: "Temporary Visitor Visa",
    stay: "Up to 90 days",
    processing: "5–7 Days",
    fee: "From $25 USD",
    description: "Experience the unique blend of ancient tradition and futuristic cities. Simplified electronic visas now available for many countries.",
    features: ["eVisa available for many regions", "Zero visa fees for select nations", "Fast embassy processing"]
  }
];

const WORLD_REGIONS = [
  {
    name: "Europe",
    emoji: "🇪🇺",
    gradient: "from-blue-500/20 to-indigo-600/10",
    glow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
    border: "hover:border-indigo-400/40",
    countries: 44,
    popular: ["Schengen Area", "United Kingdom", "Germany", "France", "Italy"],
    desc: "Schengen Zone + UK: the world's largest borderless travel area"
  },
  {
    name: "Asia",
    emoji: "🌏",
    gradient: "from-red-500/20 to-orange-600/10",
    glow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
    border: "hover:border-red-400/40",
    countries: 48,
    popular: ["Japan", "UAE", "Thailand", "Singapore", "India"],
    desc: "From Tokyo to Dubai — Asia's rich mix of culture and commerce"
  },
  {
    name: "Americas",
    emoji: "🌎",
    gradient: "from-emerald-500/20 to-teal-600/10",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    border: "hover:border-emerald-400/40",
    countries: 35,
    popular: ["United States", "Canada", "Brazil", "Mexico", "Argentina"],
    desc: "North to South — business hubs and stunning landscapes"
  },
  {
    name: "Africa",
    emoji: "🌍",
    gradient: "from-amber-500/20 to-yellow-600/10",
    glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
    border: "hover:border-amber-400/40",
    countries: 54,
    popular: ["South Africa", "Morocco", "Kenya", "Egypt", "Nigeria"],
    desc: "A continent of diversity — safari, culture, and fast-growing economies"
  },
  {
    name: "Oceania",
    emoji: "🌊",
    gradient: "from-cyan-500/20 to-sky-600/10",
    glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    border: "hover:border-cyan-400/40",
    countries: 14,
    popular: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"],
    desc: "Pacific paradise destinations with streamlined eVisa systems"
  },
  {
    name: "Middle East",
    emoji: "🕌",
    gradient: "from-purple-500/20 to-violet-600/10",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    border: "hover:border-purple-400/40",
    countries: 18,
    popular: ["UAE", "Saudi Arabia", "Qatar", "Jordan", "Oman"],
    desc: "Gulf states and ancient civilisations with modern visa infrastructure"
  }
];

const HIGHLIGHTED_DESTINATIONS = [
  {
    country: "Schengen Area",
    region: "Europe",
    flag: "🇪🇺",
    popularVisa: "Schengen Visitor Visa",
    stay: "Up to 90 days (per 180 days)",
    processing: "10–15 Days",
    fee: "From €90 (Embassy Fee)",
    description: "Travel freely across 29 European member states without internal border checks. The Schengen visa is ideal for tourism, family visits, and short-term business negotiations.",
    features: [
      "Access France, Germany, Italy, Switzerland, and 25 more",
      "Multiple-entry pathways available for frequent travelers",
      "Highly standardized visa rules and documentation list"
    ],
    visualStyle: "schengen",
    image: schengenDest
  },
  {
    country: "United States",
    region: "North America",
    flag: "🇺🇸",
    popularVisa: "B1/B2 Visitor Visa",
    stay: "Up to 180 days per entry",
    processing: "3–5 Weeks",
    fee: "From $185 USD (MRV Fee)",
    description: "The B1/B2 visa allows individuals to travel to the United States for business consultations, leisure, tourism, or medical treatments. Applications typically grant up to 10 years of validity.",
    features: [
      "10-year multiple entry visa validity for most citizens",
      "Flexible stay permissions granted at the port of entry",
      "Supports tourism, medical care, and professional conferences"
    ],
    visualStyle: "usa",
    image: usaDest
  },
  {
    country: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    popularVisa: "Standard Visitor Visa",
    stay: "Up to 6 months per visit",
    processing: "2–3 Weeks",
    fee: "From £115 (Standard Route)",
    description: "A single visitor visa that covers travel to England, Scotland, Wales, and Northern Ireland. Suitable for holidays, visiting relatives, or short training courses.",
    features: [
      "Covers all four nations of the United Kingdom",
      "Priority processing options available (24hr / 5-day)",
      "Can be used for short study courses up to 6 months"
    ],
    visualStyle: "uk",
    image: ukDest
  }
];

const PURPOSES = [
  {
    id: "tourism",
    label: "Tourism & Leisure",
    title: "Explore the World Without Borders",
    description: "Designed for individuals looking to explore historical landmarks, enjoy holidays, visit friends and family, or participate in short-term recreational and wellness programs abroad.",
    stay: "Typically 30 to 90 days per visit",
    processing: "5 to 15 business days",
    docs: [
      "Passport valid for at least 6 months beyond stay",
      "Confirmed round-trip flight itinerary",
      "Detailed day-by-day travel plan/itinerary",
      "Proof of accommodation (hotel booking or invitation letter)",
      "Sufficient financial means (recent bank statements)",
      "Comprehensive travel health insurance coverage"
    ],
    highlight: "Essential for vacations, cruising, family reunions, and short sightseeing getaways."
  },
  {
    id: "business",
    label: "Business & Work",
    title: "Unlock Global Career & Commerce Potential",
    description: "For professionals, corporate employees, entrepreneurs, and skilled specialists seeking business negotiations, conference attendance, professional training, or long-term employment in foreign markets.",
    stay: "Short-stay (up to 90 days) or long-term (1-5 years work permit)",
    processing: "3 days (eVisas) to 3 months (corporate work permits)",
    docs: [
      "Official business invitation letter from the host company",
      "Employer dispatch letter outlining purpose and financial support",
      "Professional credentials, resume, and degree certificates",
      "Employment contract or corporate sponsorship approval",
      "Valid business registration documents of the host company",
      "Proof of professional qualifications / licenses if applicable"
    ],
    highlight: "Covers business meetings, technical services, temporary consulting, and skilled employment visas."
  },
  {
    id: "study",
    label: "Study & Education",
    title: "Pursue Academic Excellence Internationally",
    description: "Dedicated to students accepted into foreign universities, language schools, vocational courses, exchange programs, or academic research internships worldwide.",
    stay: "Duration of the academic program (extendable)",
    processing: "3 to 8 weeks",
    docs: [
      "Official Letter of Acceptance (LOA) or university enrollment confirmation",
      "Proof of tuition fee payment and scholarship certificates",
      "Evidence of sufficient funds to cover living expenses (e.g., Blocked account, GIC)",
      "Language proficiency test results (IELTS, TOEFL, or CEFR)",
      "Previous academic transcripts and diplomas",
      "Medical check clearance certificates (if required by country)"
    ],
    highlight: "Includes pre-departure counseling, financial structuring guidance, and student spouse visa options."
  },
  {
    id: "family",
    label: "Family & Settlement",
    title: "Reunite and Build a Life Together",
    description: "Designed for spouses, children, parents, and direct dependents of foreign residents or citizens seeking to relocate, settle, or establish long-term residency in their sponsor's country.",
    stay: "Permanent residency / Long-term indefinite leave to remain",
    processing: "2 to 6 months",
    docs: [
      "Certified Marriage Certificate or Birth Certificate",
      "Proof of relationship genuineness (photos, shared accounts, communication logs)",
      "Sponsor's proof of status (passport, permanent residency card, or citizenship)",
      "Sponsor's proof of minimum income / financial guarantee requirements",
      "Criminal record certificate and background clearance",
      "Medical examination and biometrics records"
    ],
    highlight: "Supports spouse visas, dependent children paths, and golden visas/residency by investment."
  }
];

const APPLICATION_METHODS = [
  {
    title: "Consular & Embassy Visa",
    icon: Shield,
    complexity: "High Complexity",
    speed: "2–8 Weeks",
    description: "The traditional visa application method. Involves submitting physical documents and passport to a consulate or visa outsourcing agency, and attending an interview or biometric collection.",
    bestFor: "Long-term stays, work permits, permanent immigration, and nationalities not qualifying for simplified schemes.",
    cost: "Higher (embassy fees + agent fees)"
  },
  {
    title: "Electronic Visa (eVisa)",
    icon: Globe,
    complexity: "Low Complexity",
    speed: "1–5 Days",
    description: "A 100% digital process. Travelers apply online, upload digital documents, make payment, and receive their visa via email in PDF format. No passport submission required.",
    bestFor: "Short-term tourism, standard business visits, and transit for qualifying passport holders.",
    cost: "Variable (often lower than consular visas)"
  },
  {
    title: "Visa on Arrival (VoA)",
    icon: Compass,
    complexity: "Medium Complexity",
    speed: "Instant (On landing)",
    description: "Obtained directly at the border or airport checkpoint of the destination country. Travelers queue at the arrivals desk, submit forms, pay the required fee, and receive a physical stamp.",
    bestFor: "Short tourist stays where prior online visa applications are not mandatory or available.",
    cost: "Standard fee at border (cash/card)"
  },
  {
    title: "Visa-Free & eTA / ETIAS",
    icon: Clock,
    complexity: "Very Low Complexity",
    speed: "Instant to 72 Hours",
    description: "Based on bilateral visa waiver agreements. Travelers only need their passport to enter, or they must pre-register through an automated electronic system (like ESTA or ETIAS) before departure.",
    bestFor: "Tourism, leisure, transit, and business visits for passport holders from highly ranked countries.",
    cost: "Free or low-cost authorization fee"
  }
];

const HISTORY_MILESTONES = [
  {
    date: "450 BC",
    title: "The Earliest Safe Conduct",
    description: "In the Hebrew Bible, Nehemiah is granted a safe-conduct letter by Persian King Artaxerxes I for travel through the provinces beyond the Euphrates river—the first recorded travel document."
  },
  {
    date: "1414 AD",
    title: "First Passport Act",
    description: "King Henry V of England introduces official 'Safe Conducts' to protect both foreigners traveling to England and English subjects traveling abroad, which are recognized in court archives."
  },
  {
    date: "1914–1918 (WWI)",
    title: "Passports Become Mandatory",
    description: "Due to espionage fears and military security during World War I, passport and visa controls are rapidly formalized internationally, replacing the relatively open travel of the 19th century."
  },
  {
    date: "1920",
    title: "League of Nations Standard",
    description: "The League of Nations convenes a conference in Paris on Passports and Customs, establishing a uniform booklet design (size, layout, and language) that shapes the modern passport used today."
  },
  {
    date: "1985",
    title: "The Schengen Agreement",
    description: "Signed in a small Luxembourg town, Schengen eliminates internal border controls in Europe, launching the world's largest border-free travel zone and unified short-stay Schengen visa."
  },
  {
    date: "2010s–Present",
    title: "The Digital Revolution",
    description: "eVisas, biometric electronic passports, and pre-travel authorizations (ESTA, ETIAS, eTAs) shift the industry away from paper stamps and physical interviews to instant cloud checks."
  }
];

const FAQS = [
  {
    q: "What is a travel visa and do I always need one?",
    a: "A travel visa is an official document or endorsement placed in your passport that grants you legal permission to enter, stay, or transit through a foreign country for a specific purpose and duration. Whether you need one depends on your nationality, your destination, the purpose of your trip, and bilateral agreements. Many passport holders can travel 'visa-free' for short stays in specific regions, while others must secure an approved visa in advance."
  },
  {
    q: "What is the difference between an eVisa and a Visa on Arrival?",
    a: "An eVisa is applied for and approved online *before* you depart for your trip. Once approved, you print it or save it digitally, and presenting it to the airline and immigration officers guarantees smooth check-in. A Visa on Arrival (VoA), however, is obtained after you land at your destination airport or border checkpoint. This requires queuing at a designated desk, submitting physical forms, paying in cash or card, and waiting for the stamp. While convenient, VoAs carry a risk of long lines or denial at the border if you lack proper documentation."
  },
  {
    q: "How early should I apply for a visa before my travel date?",
    a: "It is generally recommended to apply at least 1 to 2 months before your planned departure date. While eVisas can be processed in as little as 24-72 hours, traditional consular visas that require passport submission, physical courier delivery, or in-person biometric appointments often take 15 to 45 days. Booking early avoids delays and protects your travel investments (like flights and hotel reservations)."
  },
  {
    q: "Can my visa application be rejected? If so, what should I do?",
    a: "Yes, visas can be rejected for several reasons, including incomplete paperwork, insufficient financial proof, lack of ties to your home country, incorrect visa category selection, or inadequate travel insurance. If rejected, you will usually receive an official refusal letter stating the reason. Depending on the country, you can either file a formal appeal (common for Schengen visas) or correct the issues and submit a completely new application. Our expert consulting team helps identify structural gaps to avoid visa refusals."
  },
  {
    q: "What is a Schengen Visa and which countries does it cover?",
    a: "A Schengen Visa is a short-stay visa that allows a traveler to visit any of the 29 member states within the European Schengen Area for tourism or business. These countries include Germany, France, Italy, Spain, Switzerland, and many more, which have collectively abolished border controls between their boundaries. A single Schengen visa allows you to travel freely between these nations for up to 90 days within any 180-day window."
  },
  {
    q: "Does having an approved visa guarantee entry into my destination country?",
    a: "No. An approved visa is a travel document that permits you to travel to the country's port of entry (such as an airport or land border). The final decision to grant entry always rests with the border control or immigration officers on duty. They may review your passport, ask questions about your stay, verify your return ticket or funding, and deny entry if they believe your intentions do not match your visa category or if you pose a security risk."
  }
];

function Home() {
  return (
    <>
      <Hero
        image={heroImg}
        eyebrow="VISAGUIDE · WORLD"
        title={<>Your journey <span className="gradient-gold-text italic">across borders</span>, expertly guided</>}
        subtitle="Premium visa, passport and immigration guidance for travellers, students, professionals and families — trusted in 190+ countries."
        height="lg"
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/visas-by-country" className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-[0_0_40px_-10px_var(--gold)]">Explore Visas</Link>
          <Link to="/contact" className="px-8 py-3.5 rounded-full border border-primary/60 text-primary font-semibold hover:bg-primary/10 transition">Free Consultation</Link>
        </div>
      </Hero>

      {/* Stats */}
      <section className="border-y border-border bg-card/40">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {STATS.map(s => (
            <div key={s.l} className="text-center py-10 px-4">
              <div className="text-4xl md:text-5xl font-display font-bold gradient-gold-text">{s.n}</div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-widest">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="OUR SERVICES"
            title="Visa services, refined"
            subtitle="From short-stay tourism to permanent residency — one team, every category, worldwide."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => <ServiceCard key={s.slug} service={s} delay={i * 0.08} />)}
          </div>
        </div>
      </section>

      {/* Popular Destinations [NEW] */}
      <section className="py-24 border-t border-border/40 bg-[linear-gradient(180deg,transparent,var(--navy-deep))] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <SectionHeader
            eyebrow="POPULAR DESTINATIONS"
            title="Global Travel Hotspots"
            subtitle="Select a top destination to check specific documentation requirements, fees, and standard processing times."
          />
        </div>
        
        {/* Infinite Country Ticker */}
        <div className="relative w-full overflow-hidden py-6 border-y border-border/20 bg-card/10 mb-20">
          {/* Gradients to fade out edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] py-1">
            {[...DESTINATIONS, ...DESTINATIONS].map((d, index) => (
              <div
                key={`${d.country}-${index}`}
                className="flex items-center gap-3 bg-card/65 border border-border/40 px-5 py-2.5 rounded-full hover:border-primary/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all duration-300 shrink-0 select-none"
              >
                <span className="text-xl">{d.flag}</span>
                <div className="text-left">
                  <span className="text-xs font-bold block text-foreground leading-none">{d.country}</span>
                  <span className="text-[9px] text-primary/80 uppercase font-semibold tracking-wider block mt-0.5">Visa Guide Available</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlighted Top Destinations Split Layout (Mock Cards Always on Right) */}
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {HIGHLIGHTED_DESTINATIONS.map((hd, i) => {
            const contentSide = (
              <div className="flex flex-col justify-center animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/25">
                    {hd.region}
                  </span>
                  <span className="text-2xl">{hd.flag}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display text-foreground group-hover:text-primary transition-colors">
                  {hd.country}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {hd.description}
                </p>

                {/* Structured meta detail box */}
                <div className="bg-card/40 border border-border/30 rounded-2xl p-5 mb-6 space-y-2.5 max-w-xl">
                  <div className="flex justify-between items-center pb-2 border-b border-border/10">
                    <span className="text-xs text-muted-foreground">Popular Visa Category</span>
                    <span className="text-xs font-semibold text-primary">{hd.popularVisa}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border/10">
                    <span className="text-xs text-muted-foreground">Standard Validity Limit</span>
                    <span className="text-xs font-semibold text-foreground">{hd.stay}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border/10">
                    <span className="text-xs text-muted-foreground">Consular Processing Speed</span>
                    <span className="text-xs font-semibold text-foreground">{hd.processing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Standard Embassy Fee</span>
                    <span className="text-xs font-semibold text-primary">{hd.fee}</span>
                  </div>
                </div>

                <div className="space-y-2.5 mb-8">
                  {hd.features.map(f => (
                    <div key={f} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <Link
                    to="/visas-by-country"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition text-xs shadow-[0_0_30px_-5px_var(--gold)]"
                  >
                    Check Requirements & Apply <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );

            const visualSide = (
              <div className="flex justify-center items-center animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="relative w-full max-w-[500px] group">
                  {/* Glow effect behind image */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="relative overflow-hidden rounded-3xl border border-primary/20 shadow-2xl group-hover:border-primary/40 group-hover:shadow-[0_25px_60px_rgba(245,158,11,0.15)] transition-all duration-500">
                    <img
                      src={hd.image}
                      alt={`${hd.country} destination`}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay gradient at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
                    
                    {/* Country badge overlay */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-card/80 backdrop-blur-md border border-border/40 px-4 py-2 rounded-full">
                      <span className="text-lg">{hd.flag}</span>
                      <span className="text-xs font-bold text-foreground">{hd.country}</span>
                    </div>
                  </div>
                </div>
              </div>
            );

            return (
              <div key={hd.country} className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                {contentSide}
                {visualSide}
              </div>
            );
          })}
        </div>
      </section>

      {/* World Region Selector [NEW] */}
      <section className="py-24 border-t border-border/40 bg-[linear-gradient(180deg,var(--navy-deep),transparent)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="BROWSE BY REGION"
            title="For other destinations, choose a region"
            subtitle="Select a world region to explore visa requirements, entry conditions, and processing guidance for every country."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WORLD_REGIONS.map((region, i) => (
              <Link
                key={region.name}
                to="/visas-by-country"
                className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br ${region.gradient} p-6 ${region.glow} ${region.border} hover:-translate-y-1 transition-all duration-400 animate-fade-up`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {/* Ambient glow blob */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{region.emoji}</span>
                  <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                    {region.countries} Countries
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-foreground mb-1.5 group-hover:text-primary transition-colors">
                  {region.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                  {region.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {region.popular.slice(0, 3).map(c => (
                    <span key={c} className="text-[10px] bg-card/60 border border-border/40 px-2 py-0.5 rounded-full text-muted-foreground">
                      {c}
                    </span>
                  ))}
                  {region.popular.length > 3 && (
                    <span className="text-[10px] bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full text-primary font-semibold">
                      +{region.popular.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-primary text-xs font-bold group-hover:gap-3 transition-all duration-300">
                  Explore Region <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types by Purpose [NEW] */}
      <section className="py-24 border-t border-border/40 bg-[color:var(--navy-deep)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="VISA CATEGORIES"
            title="Visa Types by Purpose"
            subtitle="Explore how visas are structured based on your intention of travel. Choose a category below for specific breakdowns."
          />

          <Tabs defaultValue="tourism" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-card border border-border/60 p-1.5 h-auto rounded-xl flex flex-wrap gap-1 max-w-2xl justify-center">
                {PURPOSES.map(p => (
                  <TabsTrigger
                    key={p.id}
                    value={p.id}
                    className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer"
                  >
                    {p.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {PURPOSES.map(p => (
              <TabsContent key={p.id} value={p.id} className="focus:outline-none animate-fade-in-slow">
                <div className="grid md:grid-cols-12 gap-8 items-stretch">
                  <div className="md:col-span-7 flex flex-col justify-between p-8 rounded-2xl bg-card/40 border border-border/30 backdrop-blur-md">
                    <div>
                      <h3 className="text-3xl font-bold gradient-gold-text mb-4">{p.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{p.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 border-t border-border/30 pt-6 mb-6">
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] text-primary uppercase tracking-wider block font-semibold">Standard Validity</span>
                            <p className="text-sm font-medium">{p.stay}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] text-primary uppercase tracking-wider block font-semibold">Avg. Processing</span>
                            <p className="text-sm font-medium">{p.processing}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-border/30 pt-6 bg-primary/5 rounded-xl p-4 border border-primary/20">
                      <div className="flex gap-2.5">
                        <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Expert Insights</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed mt-1">{p.highlight}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 p-8 rounded-2xl bg-card border border-border/40 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold mb-5 flex items-center gap-2">
                        <FileCheck className="w-5 h-5 text-primary" /> Required Documentation
                      </h4>
                      <ul className="space-y-3.5">
                        {p.docs.map(doc => (
                          <li key={doc} className="text-sm text-muted-foreground flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Need custom checklist?</span>
                      <Link to="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold hover:bg-primary/20 transition">
                        Get Advisor Help <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Visa Types by Method of Application [NEW] */}
      <section className="py-24 border-t border-border/40 bg-[linear-gradient(180deg,var(--navy-deep),transparent)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="PROCESSING CHANNELS"
            title="Visa Processing Channels"
            subtitle="Visas are categorized not only by travel purpose, but also by how they are applied for and validated. Compare the main methods."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {APPLICATION_METHODS.map((m, i) => {
              const Icon = m.icon;
              // Specific colors and glows for premium aesthetics
              const colorConfig = i === 0 
                ? { complexity: "text-red-400", border: "from-primary/10 hover:border-primary/40", glow: "bg-primary" } 
                : i === 1
                ? { complexity: "text-emerald-400", border: "from-emerald-500/10 hover:border-emerald-500/40", glow: "bg-emerald-500" }
                : i === 2
                ? { complexity: "text-amber-400", border: "from-amber-500/10 hover:border-amber-500/40", glow: "bg-amber-500" }
                : { complexity: "text-teal-400", border: "from-teal-400/10 hover:border-teal-400/40", glow: "bg-teal-400" };

              return (
                <div
                  key={m.title}
                  className={`relative overflow-hidden p-8 rounded-3xl bg-gradient-to-b ${colorConfig.border} to-transparent border border-white/5 shadow-2xl hover:shadow-[0_20px_50px_rgba(245,158,11,0.06)] hover:-translate-y-1.5 transition-all duration-500 group flex flex-col justify-between animate-fade-up`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {/* Glowing absolute background blurred circles */}
                  <div className={`absolute -top-12 -right-12 w-28 h-28 ${colorConfig.glow} opacity-5 blur-3xl group-hover:opacity-15 group-hover:scale-125 transition-all duration-700 pointer-events-none`} />

                  {/* Watermark index */}
                  <div className="absolute right-8 bottom-6 text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-t from-primary/5 to-transparent select-none pointer-events-none group-hover:scale-105 transition-transform duration-500">
                    0{i + 1}
                  </div>

                  <div>
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-all duration-500">
                      <Icon className="w-5 h-5 text-primary filter drop-shadow-[0_0_8px_rgba(245,158,11,0.35)]" />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3.5 group-hover:text-primary transition-colors duration-300">{m.title}</h3>
                    
                    {/* Compact 3-Column horizontal data panel */}
                    <div className="grid grid-cols-3 gap-2 border-y border-border/15 py-3 my-4 text-[10px]">
                      <div>
                        <span className="text-muted-foreground block text-[8px] uppercase tracking-wider mb-0.5">Complexity</span>
                        <span className={`font-semibold ${colorConfig.complexity}`}>{m.complexity}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block text-[8px] uppercase tracking-wider mb-0.5">Duration</span>
                        <span className="font-semibold text-foreground/90">{m.speed}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block text-[8px] uppercase tracking-wider mb-0.5">Fee</span>
                        <span className="font-semibold text-primary">{m.cost}</span>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-6">{m.description}</p>
                  </div>

                  <div className="border-t border-border/10 pt-4 mt-auto">
                    <span className="text-[8px] text-primary uppercase font-bold tracking-widest block mb-1">Best For</span>
                    <p className="text-[11px] text-muted-foreground leading-normal">{m.bestFor}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 bg-[color:var(--navy-deep)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="WHY VISAGUIDE" title="Precision, transparency, results" subtitle="A modern, boutique approach to a traditionally opaque industry." />
          <div className="grid md:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <div key={h.title} className="p-8 rounded-2xl bg-card border border-border/60 card-glow animate-fade-up" style={{ animationDelay: `${i*0.1}s` }}>
                <div className="w-14 h-14 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
                  <svg width="26" height="26" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={h.icon}/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{h.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Brief History of Travel Visas [NEW] */}
      <section className="py-24 border-t border-border/40 bg-[linear-gradient(180deg,transparent,var(--navy-deep))] overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            eyebrow="VISA HISTORY"
            title="A Brief History of Travel Visas"
            subtitle="The concept of travel authorization has evolved over thousands of years, from ancient letters of safe conduct to modern global biometrics."
          />

          <div className="relative pl-8 md:pl-16 border-l-2 border-gradient-to-b border-primary/40 space-y-12">
            {/* Timeline Line Glow */}
            <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary/30 to-transparent" />

            {HISTORY_MILESTONES.map((m, i) => (
              <div
                key={m.date}
                className="relative group animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Connector Dot */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_12px_var(--gold)] group-hover:scale-125 transition-transform" />
                
                <div className="p-6 rounded-2xl bg-card/45 border border-border/30 hover:border-primary/30 backdrop-blur-sm transition-all duration-300">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <span className="text-xl font-display font-bold gradient-gold-text tracking-tight">{m.date}</span>
                    <h3 className="text-lg font-bold text-foreground">{m.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Frequently Asked Questions (FAQ) [NEW] */}
      <section className="py-24 border-t border-border/40 bg-[color:var(--navy-deep)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Content & Accordion */}
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="COMMON INQUIRIES"
                title="Frequently Asked Questions"
                subtitle="Find quick answers to common queries regarding global visas, requirements, application methods, and advisory support."
                align="left"
              />

              <Accordion type="single" collapsible className="w-full space-y-4">
                {FAQS.map((faq, i) => (
                  <AccordionItem
                    key={`faq-${i}`}
                    value={`item-${i}`}
                    className="border border-border/40 bg-card/40 backdrop-blur-sm rounded-xl px-6 transition-all duration-200 hover:border-primary/20"
                  >
                    <AccordionTrigger className="text-base font-semibold py-5 text-left text-foreground hover:text-primary transition-colors hover:no-underline cursor-pointer">
                      <span className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                        {faq.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5 pt-1 border-t border-border/20">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right Side: Visual Content/Image Box */}
            <div className="lg:col-span-5 flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-full max-w-[420px] rounded-3xl p-8 border border-primary/30 bg-gradient-to-b from-card to-background shadow-2xl overflow-hidden group">
                {/* Ambient glows */}
                <div className="absolute -top-16 -left-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(245,158,11,0.1)] group-hover:scale-110 transition-transform duration-500">
                    <Shield className="w-10 h-10 text-primary animate-pulse" />
                  </div>

                  <h4 className="text-2xl font-bold font-display mb-3">Global Visa Helpdesk</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Still have questions? Our senior consultants are online to analyze your profile and draft a custom checklist for your destination.
                  </p>

                  {/* Stamp styled list */}
                  <div className="w-full bg-card/85 border border-border/40 rounded-xl p-4.5 mb-6 text-left space-y-3.5">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-xs text-foreground/90 font-semibold">98.4% First-time Approval Rate</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-xs text-foreground/90 font-semibold">24/7 Document Checking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                      <span className="text-xs text-foreground/90 font-semibold">Official Embassy Verification</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-95 transition shadow-[0_0_40px_-5px_var(--gold)] flex items-center justify-center gap-2"
                  >
                    Start Free Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Latest News [NEW] */}
      <section className="py-24 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Heading */}
            <div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full inline-block mb-4">
                BLOG &amp; NEWS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                Latest <span className="gradient-gold-text italic">Visa News</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Stay up to date with the latest changes to visa policies, new entry requirements, travel advisories, and global immigration news.
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition shadow-[0_0_30px_-5px_var(--gold)]"
              >
                Browse All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: Highlight cards */}
            <div className="space-y-4">
              {[
                { tag: "Schengen", title: "2026 Schengen Visa Fee Increase: What Travelers Need to Know", date: "Jul 15, 2026", emoji: "🇪🇺" },
                { tag: "UK", title: "UK Standard Visitor Visa Processing Times Updated for Summer", date: "Jul 10, 2026", emoji: "🇬🇧" },
                { tag: "USA", title: "US B1/B2 Interview Wait Times Hit Record Low in 2026", date: "Jul 5, 2026", emoji: "🇺🇸" },
              ].map((article, i) => (
                <Link
                  key={article.title}
                  to="/blog"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card/40 border border-border/30 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 group animate-fade-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <span className="text-3xl shrink-0 mt-0.5">{article.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">{article.tag}</span>
                      <span className="text-[10px] text-muted-foreground">{article.date}</span>
                    </div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center border border-primary/30 bg-gradient-to-br from-card to-[color:var(--navy-deep)]">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to start your <span className="gradient-gold-text italic">next journey?</span></h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Get a free 15-minute consultation with a senior visa advisor.</p>
              <Link to="/contact" className="inline-flex px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-[0_0_40px_-10px_var(--gold)]">Book Consultation →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

