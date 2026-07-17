import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { getService, SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = getService(params.slug);
    if (!s) throw notFound();
    return { service: s };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — VisaGuide World` },
          { name: "description", content: loaderData.service.description },
          { property: "og:title", content: `${loaderData.service.title} — VisaGuide World` },
          { property: "og:description", content: loaderData.service.description },
        ]
      : [{ title: "Service — VisaGuide World" }, { name: "robots", content: "noindex" }],
  }),
  component: Page,
  notFoundComponent: ServiceNotFound,
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <p className="text-destructive">{error.message}</p>
        <button onClick={reset} className="mt-4 px-4 py-2 rounded bg-primary text-primary-foreground">Retry</button>
      </div>
    </div>
  ),
});

function ServiceNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Service not found</h1>
        <Link to="/" className="mt-6 inline-flex px-6 py-2.5 rounded-full bg-primary text-primary-foreground">Back home</Link>
      </div>
    </div>
  );
}

function Page() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter(s => s.slug !== service.slug).slice(0, 3);
  return (
    <>
      <Hero
        image={service.image}
        eyebrow={service.tagline.toUpperCase()}
        title={<>{service.title.split(" ").slice(0, -1).join(" ")} <span className="gradient-gold-text italic">{service.title.split(" ").slice(-1)[0]}</span></>}
        subtitle={service.description}
        height="md"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-5 py-2.5 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm">
            ⏱ {service.duration}
          </div>
          <div className="px-5 py-2.5 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm">
            💰 {service.price}
          </div>
        </div>
      </Hero>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-primary text-xs tracking-[0.3em] font-medium mb-4">OVERVIEW</p>
          <h2 className="text-4xl font-bold mb-6">About this service</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{service.fullDescription}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[color:var(--navy-deep)]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-primary text-xs tracking-[0.3em] font-medium mb-4 text-center">WHAT'S INCLUDED</p>
          <h2 className="text-4xl font-bold mb-14 text-center">Benefits & inclusions</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((b: string, i: number) => (
              <div key={b} className="p-6 rounded-xl bg-card border border-border/60 flex items-start gap-3 animate-fade-up" style={{animationDelay:`${i*0.05}s`}}>
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" fill="none" stroke="var(--gold)" strokeWidth="3"><path d="M2 7l4 4 6-8"/></svg>
                </div>
                <span className="text-foreground/90">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-primary text-xs tracking-[0.3em] font-medium mb-4 text-center">HOW IT WORKS</p>
          <h2 className="text-4xl font-bold mb-14 text-center">Our 4-step process</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p: { step: string; detail: string }, i: number) => (
              <div key={p.step} className="relative p-6 rounded-2xl bg-card border border-border/60 card-glow animate-fade-up" style={{animationDelay:`${i*0.1}s`}}>
                <div className="text-5xl font-display font-bold gradient-gold-text opacity-40 mb-2">0{i+1}</div>
                <h3 className="font-bold text-lg mb-2">{p.step}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl p-12 text-center border border-primary/30 bg-gradient-to-br from-card to-[color:var(--navy-deep)]">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Start your {service.title.toLowerCase()} today</h2>
              <p className="text-muted-foreground mb-8">Book a free consultation with a specialist.</p>
              <Link to="/contact" className="inline-flex px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-[0_0_40px_-10px_var(--gold)]">Get Started →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-display font-bold mb-8">Other services</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map(o => (
              <Link key={o.slug} to="/services/$slug" params={{ slug: o.slug }}
                className="group p-6 rounded-2xl bg-card border border-border/60 card-glow hover:[&]:card-glow-hover flex items-center gap-4">
                <img src={o.image} alt="" className="w-20 h-20 rounded-xl object-cover" />
                <div>
                  <h4 className="font-bold group-hover:text-primary transition">{o.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{o.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
