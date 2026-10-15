import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  Phone,
  Send,
  Users,
  Award,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { COACHING_DATA, CONTACT_INFO, CoachingData } from "@/lib/site-data";
import duolingoHeroImg from "@/assets/hero-about.jpg";
import tofelHeroImg from "@/assets/hero-passport.jpg";

const COACHING_HERO_IMAGES: Record<string, string> = {
  "ielts-coaching": tofelHeroImg,
  "pte-coaching": tofelHeroImg,
  "duolingo-coaching": duolingoHeroImg,
  "oet-coaching": duolingoHeroImg,
  "tofel-coaching": tofelHeroImg,
};

export const Route = createFileRoute("/coaching/$slug")({
  loader: ({ params }) => {
    const slug = params.slug === "oet-coaching" ? "duolingo-coaching" : params.slug;
    const coach = COACHING_DATA.find((c) => c.slug === slug);
    if (!coach) throw notFound();
    return { coach };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.coach.metaTitle },
          { name: "description", content: loaderData.coach.metaDescription },
          { property: "og:title", content: loaderData.coach.metaTitle },
          { property: "og:description", content: loaderData.coach.metaDescription },
        ]
      : [{ title: "Coaching Programs — VisaEnter" }],
  }),
  component: CoachingPage,
  notFoundComponent: () => (
    <PageLayout>
      <div className="py-40 text-center">
        <h1 className="text-4xl font-bold">Coaching Program Not Found</h1>
        <p className="mt-2 text-muted-foreground">The requested coaching module was not found.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full gradient-primary px-6 py-2.5 text-sm font-bold text-white"
        >
          Back to Home
        </Link>
      </div>
    </PageLayout>
  ),
});

function CoachingPage() {
  const { coach } = Route.useLoaderData<{ coach: CoachingData }>();
  const otherCoaching = COACHING_DATA.filter((c) => c.slug !== coach.slug);
  const heroImg = COACHING_HERO_IMAGES[coach.slug] || duolingoHeroImg;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[380px] sm:min-h-[440px] md:h-[60vh] w-full overflow-hidden bg-slate-950 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10, 20, 40, 0.88) 0%, rgba(10, 20, 40, 0.80) 50%, rgba(10, 20, 40, 0.94) 100%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-white pt-[98px] sm:pt-[116px] pb-8 sm:pb-10 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:font-extrabold leading-[1.2] tracking-tight break-words drop-shadow-md">
              <span className="text-white">{coach.heroTitleWhite ?? coach.name}</span>{" "}
              <span className="text-gradient">{coach.heroTitleGradient ?? "Training"}</span>
            </h1>
            {!coach.hideHeroTagline && coach.tagline && (
              <p className="mt-2.5 sm:mt-3 max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-white/90 font-light leading-relaxed drop-shadow-sm">{coach.tagline}</p>
            )}
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-2.5 sm:gap-4">
              <a
                href="#enroll-form"
                className="inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg hover:scale-105 transition-all"
              >
                Enroll in Next Batch <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={CONTACT_INFO.phoneIndiaHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 sm:px-5 sm:py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md hover:bg-white/20 transition-all"
              >
                <Phone className="h-3.5 w-3.5" /> India: {CONTACT_INFO.phoneIndia}
              </a>
              <a
                href={CONTACT_INFO.phoneUSAHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 sm:px-5 sm:py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md hover:bg-white/20 transition-all"
              >
                <Phone className="h-3.5 w-3.5" /> USA: {CONTACT_INFO.phoneUSA}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Key Metrics */}
          <div className="grid gap-3 sm:gap-6 grid-cols-1 sm:grid-cols-3">
            {[
              { icon: Clock, label: "Course Duration", value: coach.duration },
              { icon: Users, label: "Batch Size", value: coach.batchSize },
              { icon: GraduationCap, label: "Training Mode", value: coach.mode },
            ].map((m, i) => (
              <div
                key={i}
                className="rounded-2xl sm:rounded-3xl border border-border/80 bg-secondary/20 p-4 sm:p-6 shadow-xs flex items-center gap-4 sm:gap-5"
              >
                <div className="grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-xl sm:rounded-2xl gradient-primary text-white shadow-md">
                  <m.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase text-muted-foreground tracking-wider">
                    {m.label}
                  </div>
                  <div className="text-base sm:text-xl font-bold text-foreground mt-0.5">{m.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-16 grid gap-8 lg:gap-12 lg:grid-cols-3">
            {/* Left 2 Cols: Details, Highlights & Syllabus */}
            <div className="lg:col-span-2 space-y-8 sm:space-y-12">
              <div>
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground">
                  About {coach.name} Program
                </h2>
                <p className="mt-2.5 sm:mt-4 text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">
                  {coach.fullDescription}
                </p>
              </div>

              {/* Course Highlights */}
              <div>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-foreground">
                  Program Highlights &amp; Benefits
                </h3>
                <div className="mt-4 sm:mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2">
                  {coach.highlights.map((h, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl border bg-card shadow-xs"
                    >
                      <CheckCircle2
                        className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 mt-0.5"
                        style={{ color: "var(--accent)" }}
                      />
                      <span className="text-xs sm:text-sm font-medium text-foreground">{h}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Syllabus */}
              <div>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-foreground">
                  Detailed Training Syllabus
                </h3>
                <div className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
                  {coach.syllabus.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl border bg-secondary/30"
                    >
                      <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-primary" />
                      <span className="text-xs sm:text-sm font-semibold text-foreground">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout */}
              <div className="rounded-2xl sm:rounded-3xl gradient-primary p-5 sm:p-8 text-white shadow-card">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Score Improvement Support
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold">Targeted Score Preparation</h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/90 leading-relaxed">
                  Join our upcoming batch or book a 1-on-1 diagnostic test session with our lead instructor.
                </p>
                <div className="mt-5 sm:mt-6 flex flex-wrap gap-2.5">
                  <a
                    href={CONTACT_INFO.phoneIndiaHref}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-foreground shadow hover:bg-white/90 transition-all"
                  >
                    <Phone className="h-3.5 w-3.5 text-primary" /> India: {CONTACT_INFO.phoneIndia}
                  </a>
                  <a
                    href={CONTACT_INFO.phoneUSAHref}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/20 border border-white/40 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-white shadow hover:bg-white/30 transition-all backdrop-blur-md"
                  >
                    <Phone className="h-3.5 w-3.5 text-white" /> USA: {CONTACT_INFO.phoneUSA}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Col: Enroll Form */}
            <div id="enroll-form">
              <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-white p-5 sm:p-7 shadow-card sticky top-24">
                <h3 className="text-lg sm:text-xl font-bold text-foreground">Enroll in {coach.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Reserve your seat for the upcoming weekday or weekend batch.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Thank you! You have registered for ${coach.name}. Our team will contact you.`);
                  }}
                  className="mt-6 space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91-XXXXX XXXXX"
                      className="w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
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
                      className="w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Preferred Mode
                    </label>
                    <select className="w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                      <option>Online Live Classes</option>
                      <option>Classroom (Bangalore)</option>
                      <option>1-on-1 Private Tutoring</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl gradient-primary py-3 text-sm font-bold text-white shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" /> Book Demo Class
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Other coaching programs */}
          {otherCoaching.length > 0 && (
            <div className="mt-24 border-t pt-16">
              <h3 className="text-2xl font-bold text-foreground">Other Coaching Programs</h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 max-w-2xl">
                {otherCoaching.map((c) => (
                  <Link
                    key={c.slug}
                    to="/coaching/$slug"
                    params={{ slug: c.slug }}
                    className="rounded-3xl border border-border/80 p-6 hover:shadow-glow-primary hover:border-primary/40 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{c.icon}</span>
                      <div>
                        <div className="font-bold text-foreground group-hover:text-primary transition-colors">
                          {c.name}
                        </div>
                        <div className="text-xs text-muted-foreground">{c.tagline}</div>
                      </div>
                    </div>
                    <span className="text-primary font-bold">→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
