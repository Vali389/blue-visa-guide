import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Award, CheckCircle2, Globe2, Sparkles, Star } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Success Gallery — VisaEnter" },
      {
        name: "description",
        content:
          "Explore VisaEnter's success stories, approved visa celebrations, client seminars, and overseas orientation events.",
      },
    ],
  }),
  component: GalleryPage,
});

const GALLERY_ITEMS = [
  {
    title: "Germany Student Visa Approvals",
    category: "Student Visas",
    desc: "Over 450+ APS-certified German student visa approvals processed smoothly in recent intakes.",
    tag: "Germany",
    color: "from-blue-600/80 to-cyan-500/80",
    icon: "🇩🇪",
  },
  {
    title: "UK Tier 4 / Skilled Worker Batch",
    category: "UK Migration",
    desc: "Successful CAS issuances and priority visa stamping for University of Manchester and Warwick students.",
    tag: "United Kingdom",
    color: "from-indigo-600/80 to-blue-500/80",
    icon: "🇬🇧",
  },
  {
    title: "Canada Study & Express Entry Success",
    category: "Canada Permits",
    desc: "Fast biometrics and visa deliveries for students heading to Ontario, British Columbia & Alberta.",
    tag: "Canada",
    color: "from-red-600/80 to-amber-500/80",
    icon: "🇨🇦",
  },
  {
    title: "USA F-1 Visa Mock Interview Sessions",
    category: "Training & Interviews",
    desc: "Our interactive 1-on-1 mock interview preparation delivering first-attempt approvals for US universities.",
    tag: "USA",
    color: "from-blue-700/80 to-teal-500/80",
    icon: "🇺🇸",
  },
  {
    title: "Australia Subclass 500 Approvals",
    category: "Australia Studies",
    desc: "Comprehensive GTE statement structuring ensuring flawless grant rates for Group of Eight universities.",
    tag: "Australia",
    color: "from-emerald-600/80 to-teal-500/80",
    icon: "🇦🇺",
  },
  {
    title: "Dubai 5-Year Business Visa Grants",
    category: "Corporate Mobility",
    desc: "Corporate invitations and multi-entry investor permits processed within 5 business days.",
    tag: "Dubai",
    color: "from-amber-600/80 to-orange-500/80",
    icon: "🇦🇪",
  },
  {
    title: "OET Healthcare Cohort High Scores",
    category: "Coaching Excellence",
    desc: "Nurses and healthcare specialists achieving straight Grade A/B scores in their first OET exam attempts.",
    tag: "OET Coaching",
    color: "from-cyan-600/80 to-emerald-500/80",
    icon: "🏥",
  },
  {
    title: "Annual Pre-Departure Briefing Bangalore",
    category: "Events & Seminars",
    desc: "Connecting students and parents with alumni, currency exchange partners, and housing coordinators.",
    tag: "Bangalore Office",
    color: "from-violet-600/80 to-purple-500/80",
    icon: "🎉",
  },
];

function GalleryPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] w-full overflow-hidden bg-slate-950 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.92) 100%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white pt-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md mb-4">
            <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--accent)" }} /> Success Stories
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
            VisaEnter <span className="text-gradient">Success Gallery</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80 font-light">
            Celebrating approvals, study abroad achievements, and client success for 15+ years.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p
              className="text-xs font-extrabold uppercase tracking-[0.3em]"
              style={{ color: "var(--primary)" }}
            >
              HALL OF SUCCESS
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl text-foreground">
              Our Journey of Approvals
            </h2>
            <p className="mt-4 text-muted-foreground text-base">
              Every card below represents a real client dream fulfilled by our dedicated immigration team.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="group relative rounded-3xl border border-border/80 bg-white overflow-hidden shadow-card hover:shadow-glow-primary hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Header */}
                <div
                  className={`h-40 bg-gradient-to-br ${item.color} p-6 flex flex-col justify-between text-white relative overflow-hidden`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="rounded-full bg-white/20 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-white/90">{item.category}</div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center justify-between">
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Approved Case
                    </span>
                    <Link
                      to="/contact"
                      className="text-xs font-bold text-primary hover:underline"
                    >
                      Apply Now →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
