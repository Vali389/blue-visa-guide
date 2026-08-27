import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Clock,
  FileCheck2,
  Globe2,
  Phone,
  Send,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import {
  VISA_CATEGORIES_DATA,
  CONTACT_INFO,
  VisaCategoryData,
} from "@/lib/site-data";

import studentImg from "@/assets/service-student.jpg";
import businessImg from "@/assets/service-business.jpg";
import touristImg from "@/assets/service-tourist.jpg";
import familyImg from "@/assets/service-family.jpg";
import defaultHeroImg from "@/assets/hero-policy.jpg";

const CATEGORY_HERO_IMAGES: Record<string, string> = {
  "student-visa": studentImg,
  "business-visa": businessImg,
  "tourist-visa": touristImg,
  "family-visa": familyImg,
};

export const Route = createFileRoute("/visa-categories/$slug")({
  loader: ({ params }) => {
    const category = VISA_CATEGORIES_DATA.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.category.metaTitle },
          { name: "description", content: loaderData.category.metaDescription },
          { property: "og:title", content: loaderData.category.metaTitle },
          { property: "og:description", content: loaderData.category.metaDescription },
        ]
      : [{ title: "Visa Categories — VisaEnter" }],
  }),
  component: VisaCategoryPage,
  notFoundComponent: () => (
    <PageLayout>
      <div className="py-40 text-center">
        <h1 className="text-4xl font-bold">Category Not Found</h1>
        <p className="mt-2 text-muted-foreground">The requested visa category does not exist.</p>
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

function VisaCategoryPage() {
  const { category } = Route.useLoaderData<{ category: VisaCategoryData }>();
  const otherCategories = VISA_CATEGORIES_DATA.filter((c) => c.slug !== category.slug);
  const heroImage = CATEGORY_HERO_IMAGES[category.slug] || defaultHeroImg;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] w-full overflow-hidden bg-slate-950 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15, 23, 42, 0.72) 0%, rgba(15, 23, 42, 0.9) 100%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white pt-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="text-white">{category.name}</span>{" "}
              <span className="text-gradient">Services</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85 font-light">{category.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#category-form"
                className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all"
              >
                Apply for {category.name} <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={CONTACT_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md hover:bg-white/20 transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          {/* Key Metrics */}
          <div className="grid gap-6 sm:grid-cols-2 max-w-2xl">
            <div className="rounded-3xl border border-border/80 bg-secondary/20 p-6 shadow-sm flex items-center gap-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-primary text-white shadow-md">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
                  Typical Processing
                </div>
                <div className="text-xl font-bold text-foreground mt-0.5">
                  {category.processingTime}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border/80 bg-secondary/20 p-6 shadow-sm flex items-center gap-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-primary text-white shadow-md">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
                  Visa Validity
                </div>
                <div className="text-xl font-bold text-foreground mt-0.5">
                  {category.validityPeriod}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            {/* Left 2 Cols: Details, Eligibility, Documents */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Overview of {category.name}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed text-base">
                  {category.fullDescription}
                </p>
              </div>

              {/* Eligibility */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  Eligibility Criteria
                </h3>
                <div className="mt-6 space-y-3">
                  {category.eligibility.map((el, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3 p-4 rounded-2xl border bg-card shadow-sm"
                    >
                      <CheckCircle2
                        className="h-5 w-5 shrink-0 mt-0.5"
                        style={{ color: "var(--accent)" }}
                      />
                      <span className="text-sm font-medium text-foreground">{el}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  Required Documents
                </h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {category.documents.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 rounded-2xl border bg-secondary/30"
                    >
                      <FileCheck2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-xs font-semibold text-foreground">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular countries banner */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Top Destinations for {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.popularCountries.map((pc) => (
                    <span
                      key={pc}
                      className="rounded-full bg-secondary px-4 py-2 text-xs font-bold text-foreground border"
                    >
                      {pc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Consultation Form */}
            <div id="category-form">
              <div className="rounded-3xl border border-border/80 bg-white p-7 shadow-card sticky top-24">
                <h3 className="text-xl font-bold text-foreground">Apply for {category.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Speak to our senior visa consultant for case assessment.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Thank you! Our ${category.name} expert will contact you.`);
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
                      Destination Country
                    </label>
                    <input
                      placeholder="e.g. Germany, UK, Canada, Dubai"
                      className="w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl gradient-primary py-3 text-sm font-bold text-white shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" /> Start Application
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Other visa categories */}
          <div className="mt-24 border-t pt-16">
            <h3 className="text-2xl font-bold text-foreground">Other Visa Categories</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {otherCategories.map((c) => (
                <Link
                  key={c.slug}
                  to="/visa-categories/$slug"
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
        </div>
      </section>
    </PageLayout>
  );
}
