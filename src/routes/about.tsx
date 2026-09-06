import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Globe, Phone, Rocket, ShieldCheck, Target, Users, Sparkles, Star } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Testimonials } from "@/components/site/Testimonials";
import { CONTACT_INFO, AWARDS } from "@/lib/site-data";
import heroImg from "@/assets/hero-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About VisaEnter — Best Visa Consultants with 15+ Years Experience" },
      {
        name: "description",
        content:
          "Learn more about VisaEnter, Bangalore's trusted immigration agency. 15+ years handling student, business, tourist and family visa cases with a 99% success rate.",
      },
      { property: "og:title", content: "About VisaEnter — 15+ Years Visa Excellence" },
      {
        property: "og:description",
        content:
          "Dedicated to supporting your immigration and study abroad dreams with custom strategies, zero hassle, and near 100% approvals.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Target,
    title: "Applicant-First Approach",
    text: "We listen to your academic and professional goals to create a customized visa application strategy.",
  },
  {
    icon: ShieldCheck,
    title: "15+ Years Handling Complex Cases",
    text: "Deep expertise in overcoming visa refusals, gap years, complex financials, and APS certifications.",
  },
  {
    icon: Award,
    title: "Near 100% Success Rate",
    text: "Proven methodology and meticulous documentation review delivering exceptional approval rates.",
  },
  {
    icon: Rocket,
    title: "End-to-End Support",
    text: "From university admissions and SOP drafting to mock interviews, accommodation, and pre-departure.",
  },
];

function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden bg-slate-950 flex items-center">
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

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-white pt-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md mb-4">
            <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent)" }} />
            ABOUT VISAENTER
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight md:whitespace-nowrap">
            Providing the <span className="text-gradient">Best Visa Services</span> to Clients
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-sm md:text-base text-white/85 font-light md:whitespace-nowrap">
            Dedicated to turning your international dreams into reality with over 15 years of industry excellence.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          {/* Centered Section Header */}
          <div className="mx-auto max-w-4xl text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-primary shadow-sm mb-3">
              OUR MISSION &amp; EXPERTISE
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight md:whitespace-nowrap">
              A Strategic Pathway to <span className="text-gradient">Global Mobility</span>
            </h2>
            <p className="mt-3 text-slate-700 text-sm md:text-base max-w-3xl mx-auto leading-relaxed md:whitespace-nowrap font-medium">
              Empowering students and professionals with tailored immigration roadmaps and proven guidance.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between"
            >
              <div className="space-y-4 text-slate-700 font-medium leading-relaxed text-base">
                <p>
                  At <strong className="font-bold text-slate-900">VisaEnter</strong>, we are all driven by dedication and highly motivated to support your immigration dream on its way to success. We achieve this by truly listening to your professional goals and needs and give all in for inspiring, creative, effective solutions to accelerate your preparation to achieve success.
                </p>
                <p>
                  Our team of experts have been handling cases for <strong className="font-bold text-slate-900">15+ years</strong> and hence we develop strategies for each case depending on the applicants’ background and current immigration situation to increase the chances of visa approvals.
                </p>
                <p>
                  Headquartered in Bangalore, India, we have guided thousands of students to prestigious universities across Germany, UK, Canada, USA, and Australia, and assisted hundreds of professionals with corporate and business visas.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  <Phone className="h-4 w-4" /> Call: {CONTACT_INFO.phone}
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold text-foreground hover:bg-secondary transition-all"
                >
                  Visit Bangalore Office
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4 h-full"
            >
              {VALUES.map((v, idx) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group rounded-3xl border border-sky-100 bg-white p-6 shadow-sm hover:border-primary/50 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0099ff] text-white shadow-md shadow-sky-500/20 mb-4 transition-transform duration-300 ease-out group-hover:scale-120 group-hover:shadow-xl group-hover:shadow-sky-500/35">
                      <v.icon className="h-7 w-7 text-white stroke-[2.2]" />
                    </div>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-primary transition-colors leading-snug">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-700 font-medium leading-relaxed">
                      {v.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Section (RECOGNITION) */}
      <section className="py-24 bg-gradient-to-b from-sky-50/40 via-white to-sky-50/20 relative overflow-hidden border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-primary shadow-sm mb-3">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> RECOGNITION
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight md:whitespace-nowrap">
              Agency Awards &amp; <span className="text-gradient">Milestones</span>
            </h2>
            <p className="mt-3 text-slate-700 font-medium text-sm md:text-base max-w-3xl mx-auto leading-relaxed md:whitespace-nowrap">
              Honored internationally for outstanding visa advisory, compliance, and client satisfaction.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {AWARDS.map((award, idx) => (
              <motion.div
                key={award.year}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-3xl border border-sky-100 bg-white p-8 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Ambient watermark */}
                <div className="absolute -right-8 -bottom-8 text-9xl font-black text-sky-500/5 select-none pointer-events-none">
                  {award.year}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full gradient-primary px-4 py-1 text-xs font-extrabold text-white shadow-sm">
                      <Award className="h-3.5 w-3.5" /> {award.year} OFFICIAL EXCELLENCE
                    </span>
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0099ff] text-white text-2xl shadow-md transition-transform duration-300 ease-out group-hover:scale-115">
                      {award.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-primary transition-colors">
                    {award.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-700 font-medium leading-relaxed">
                    {award.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-primary">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" /> Verified Quality Standard
                  </span>
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </PageLayout>
  );
}
