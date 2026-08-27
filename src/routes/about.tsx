import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Globe, Phone, Rocket, ShieldCheck, Target, Users } from "lucide-react";
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

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white pt-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md mb-4">
            <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent)" }} />
            ABOUT VISAENTER
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
            Providing the <span className="text-gradient">Best Visa Services</span> to Clients
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85 font-light">
            Dedicated and motivated to turn your international dreams into reality with over 15 years of industry excellence.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-24 bg-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.3em]" style={{ color: "var(--primary)" }}>
              OUR MISSION &amp; EXPERTISE
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl text-foreground leading-tight">
              A Strategic, Dedicated Pathway to Global Mobility
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-base">
              <p>
                At VisaEnter, we are all driven by dedication and highly motivated to support your immigration dream on its way to success. We achieve this by truly listening to your professional goals and needs and give all in for inspiring, creative, effective solutions to accelerate your preparation to achieve success.
              </p>
              <p>
                Our team of experts have been handling cases for 15+ years and hence we develop strategies for each case depending on the applicants’ background and current immigration situation to increase the chances of visa approvals.
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
            className="grid sm:grid-cols-2 gap-4"
          >
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm hover:shadow-card transition-all">
                <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-white mb-4 shadow">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-base text-foreground">{v.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em]" style={{ color: "var(--primary)" }}>
              RECOGNITION
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl text-foreground">
              Agency Awards &amp; Milestones
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {AWARDS.map((award) => (
              <div
                key={award.year}
                className="flex items-start gap-5 rounded-3xl border border-border/80 bg-white p-7 shadow-sm"
              >
                <div className="text-4xl">{award.icon}</div>
                <div>
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-extrabold text-primary mb-1">
                    {award.year} AWARD
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{award.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </PageLayout>
  );
}
