import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, CheckCircle2, Clock, CreditCard, FileCheck2 } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { PageLayout } from "@/components/site/PageLayout";
import { ServiceCard } from "@/components/site/ServiceCard";
import { findService, SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — VisaGuide.world` },
          { name: "description", content: loaderData.service.description },
        ]
      : [{ title: "Service — VisaGuide.world" }],
  }),
  component: Page,
  notFoundComponent: () => (
    <PageLayout>
      <div className="py-40 text-center">
        <h1 className="text-4xl font-bold">Service not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary underline">Back home</Link>
      </div>
    </PageLayout>
  ),
});

function Page() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const accent = service.accentColor ?? "var(--primary)";

  return (
    <PageLayout>
      <Hero
        image={service.image}
        eyebrow={service.tagline}
        title={service.title}
        subtitle={service.longDescription}
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-lg hover:scale-[1.03] transition-transform"
          style={{ background: accent }}
        >
          Start Application →
        </Link>
      </Hero>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Clock, label: "Processing Time", value: service.processingTime },
              { icon: Calendar, label: "Validity", value: service.validity },
              { icon: CreditCard, label: "Government Fee", value: service.fee },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border bg-card p-6 shadow-card"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ background: accent }}>
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
                <div className="mt-1 text-2xl font-bold">{s.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: accent }}>What you'll need</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Requirements checklist</h2>
              <p className="mt-4 text-muted-foreground">
                Gather the following documents before starting your application. Missing items are the #1 reason for delays.
              </p>
              <ul className="mt-8 space-y-3">
                {service.requirements.map((r: string, i: number) => (
                  <motion.li
                    key={r}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 rounded-xl border bg-card p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: accent }} />
                    <span className="text-sm">{r}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <aside className="rounded-3xl p-8 text-white shadow-card h-fit sticky top-24" style={{ background: accent }}>
              <FileCheck2 className="h-8 w-8" />
              <h3 className="mt-4 text-2xl font-bold">Need help applying?</h3>
              <p className="mt-2 text-sm text-white/90">
                Our specialists can review your documents, book appointments and file your application on your behalf.
              </p>
              <Link to="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-foreground">
                Book a free consultation
              </Link>
              <div className="mt-6 border-t border-white/20 pt-4 text-xs text-white/80">
                Average response time: <strong className="text-white">2 hours</strong>
              </div>
            </aside>
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-bold md:text-3xl">Other popular services</h3>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {others.map((s, i) => (
                <ServiceCard key={s.slug} data={s} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
