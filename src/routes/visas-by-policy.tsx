import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-policy.jpg";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/visas-by-policy")({
  head: () => ({
    meta: [
      { title: "Visas by Policy — VisaGuide World" },
      { name: "description", content: "Understand visa policies: visa-free, visa-on-arrival, eVisa, embassy visa and more." },
      { property: "og:title", content: "Visas by Policy — VisaGuide World" },
      { property: "og:description", content: "Compare visa policies worldwide — visa-free, VoA, eVisa and embassy application types." },
    ],
  }),
  component: Page,
});

const POLICIES = [
  { name: "Visa-Free", count: "80+", desc: "Travel with just your passport for tourism or short stays.", icon: "M5 12h14M12 5l7 7-7 7", color: "oklch(0.72 0.16 155)" },
  { name: "Visa on Arrival", count: "45+", desc: "Get your visa stamped directly at the destination airport.", icon: "M2 12l10-10 10 10M12 22V4", color: "oklch(0.78 0.14 82)" },
  { name: "eVisa", count: "70+", desc: "Fully online application — receive your visa by email.", icon: "M4 4h16v14H4zM8 21h8", color: "oklch(0.7 0.13 195)" },
  { name: "Embassy Visa", count: "120+", desc: "Traditional consulate application with biometrics and interview.", icon: "M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6", color: "oklch(0.7 0.12 30)" },
  { name: "ETA / ESTA", count: "20+", desc: "Electronic travel authorization for approved passport holders.", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", color: "oklch(0.75 0.15 300)" },
  { name: "Transit Visa", count: "60+", desc: "Short-term transit through airports on connecting flights.", icon: "M2 12h20M12 2v20", color: "oklch(0.75 0.12 220)" },
];

function Page() {
  return (
    <>
      <Hero
        image={heroImg}
        eyebrow="POLICY TYPES"
        title={<>Visas by <span className="gradient-gold-text italic">Policy</span></>}
        subtitle="Not all visas are equal. Understand the six major visa policy types worldwide before you plan your trip."
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="THE 6 CATEGORIES" title="Choose your policy path" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POLICIES.map((p, i) => (
              <div key={p.name} className="group relative p-8 rounded-2xl bg-card border border-border/60 overflow-hidden card-glow hover:[&]:card-glow-hover animate-fade-up"
                style={{ animationDelay: `${i*0.08}s` }}>
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-30 transition-opacity group-hover:opacity-60"
                  style={{ background: p.color }} />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl border border-border flex items-center justify-center mb-5"
                    style={{ background: `${p.color}22`, borderColor: `${p.color}55` }}>
                    <svg width="26" height="26" fill="none" stroke={p.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={p.icon}/>
                    </svg>
                  </div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-2xl font-display font-bold">{p.name}</h3>
                    <span className="text-sm font-semibold" style={{ color: p.color }}>{p.count} countries</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
