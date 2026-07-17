import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-about.jpg";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — VisaGuide World" },
      { name: "description", content: "Meet the team of senior visa consultants behind VisaGuide World." },
      { property: "og:title", content: "About — VisaGuide World" },
      { property: "og:description", content: "15+ years of visa & immigration expertise, trusted by 50,000+ clients globally." },
    ],
  }),
  component: Page,
});

const VALUES = [
  { title: "Transparency", desc: "Clear pricing, honest eligibility assessments — no fine print, no surprises." },
  { title: "Excellence", desc: "Senior consultants review every case. Nothing filed without a second set of expert eyes." },
  { title: "Care", desc: "Behind every visa is a life decision. We treat every case like it's our own family." },
];

const MILESTONES = [
  { year: "2009", event: "Founded in London by two immigration lawyers" },
  { year: "2014", event: "Expanded to Dubai, Singapore and Toronto offices" },
  { year: "2019", event: "Crossed 25,000 successful visa approvals" },
  { year: "2023", event: "Launched dedicated Golden Visa & investor migration desk" },
  { year: "2026", event: "50,000+ clients served across 190+ destinations" },
];

function Page() {
  return (
    <>
      <Hero
        image={heroImg}
        eyebrow="ABOUT US"
        title={<>Boutique advisory, <span className="gradient-gold-text italic">global reach</span></>}
        subtitle="For 15+ years, we've helped travellers, students, professionals and families move — with clarity, integrity and results."
      />
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-xs tracking-[0.3em] font-medium mb-4">OUR STORY</p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">Built by immigration lawyers. Designed for the modern traveller.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">VisaGuide World was founded on a simple belief: cross-border mobility should be transparent, efficient and dignified. We combine decades of legal expertise with a modern client experience.</p>
            <p className="text-muted-foreground leading-relaxed">Today, our team of 80+ advisors across 6 offices worldwide handles cases from short tourist visas to complex investor residency programs — with the same standard of care.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[{n:"50K+",l:"Cases handled"},{n:"98%",l:"Success rate"},{n:"6",l:"Global offices"},{n:"80+",l:"Advisors"}].map(s => (
              <div key={s.l} className="p-8 rounded-2xl bg-card border border-border/60 card-glow text-center">
                <div className="text-4xl font-display font-bold gradient-gold-text">{s.n}</div>
                <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--navy-deep)]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader eyebrow="OUR VALUES" title="What we stand for" />
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div key={v.title} className="p-8 rounded-2xl bg-card border border-border/60 card-glow animate-fade-up" style={{animationDelay:`${i*0.1}s`}}>
                <div className="text-5xl font-display font-bold gradient-gold-text mb-4">0{i+1}</div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader eyebrow="OUR JOURNEY" title="Milestones" />
          <div className="relative pl-8 md:pl-0">
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            {MILESTONES.map((m, i) => (
              <div key={m.year} className={`relative mb-10 md:grid md:grid-cols-2 md:gap-12 items-center animate-fade-up`} style={{animationDelay:`${i*0.1}s`}}>
                <div className="absolute -left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_var(--gold)]" />
                <div className={i % 2 === 0 ? "md:text-right md:pr-8" : "md:col-start-2 md:pl-8"}>
                  <div className="text-3xl font-display font-bold gradient-gold-text mb-1">{m.year}</div>
                  <p className="text-muted-foreground">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
