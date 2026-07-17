import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-country.jpg";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/visas-by-country")({
  head: () => ({
    meta: [
      { title: "Visas by Country — VisaGuide World" },
      { name: "description", content: "Browse visa requirements and application guidance for 190+ countries worldwide." },
      { property: "og:title", content: "Visas by Country — VisaGuide World" },
      { property: "og:description", content: "Explore visa guides for every country — requirements, fees, timelines and application steps." },
    ],
  }),
  component: Page,
});

const REGIONS = [
  {
    name: "Europe",
    countries: [
      { c: "United Kingdom", flag: "🇬🇧", note: "Visitor · Student · Skilled Worker" },
      { c: "Germany", flag: "🇩🇪", note: "Schengen · Blue Card · Job Seeker" },
      { c: "France", flag: "🇫🇷", note: "Schengen · Talent Passport" },
      { c: "Italy", flag: "🇮🇹", note: "Schengen · Elective Residency" },
      { c: "Spain", flag: "🇪🇸", note: "Schengen · Golden Visa · Digital Nomad" },
      { c: "Portugal", flag: "🇵🇹", note: "Schengen · D7 · Golden Visa" },
      { c: "Netherlands", flag: "🇳🇱", note: "Schengen · Highly Skilled" },
      { c: "Switzerland", flag: "🇨🇭", note: "Visitor · Work Permit" },
    ],
  },
  {
    name: "Americas",
    countries: [
      { c: "United States", flag: "🇺🇸", note: "B1/B2 · F1 · H-1B · EB-5" },
      { c: "Canada", flag: "🇨🇦", note: "Visitor · Study · Express Entry" },
      { c: "Mexico", flag: "🇲🇽", note: "Visitor · Temporary Resident" },
      { c: "Brazil", flag: "🇧🇷", note: "Visitor · Digital Nomad" },
      { c: "Argentina", flag: "🇦🇷", note: "Visitor · Rentista" },
      { c: "Chile", flag: "🇨🇱", note: "Visitor · Temporary" },
    ],
  },
  {
    name: "Asia Pacific",
    countries: [
      { c: "Australia", flag: "🇦🇺", note: "Visitor · 189 · 190 · Student" },
      { c: "New Zealand", flag: "🇳🇿", note: "Visitor · Skilled Migrant" },
      { c: "Singapore", flag: "🇸🇬", note: "Visitor · EP · S-Pass" },
      { c: "Japan", flag: "🇯🇵", note: "Visitor · HSP · Study" },
      { c: "South Korea", flag: "🇰🇷", note: "Visitor · E-Visa · Study" },
      { c: "Thailand", flag: "🇹🇭", note: "Tourist · Elite · LTR" },
    ],
  },
  {
    name: "Middle East & Africa",
    countries: [
      { c: "United Arab Emirates", flag: "🇦🇪", note: "Visitor · Golden · Employment" },
      { c: "Saudi Arabia", flag: "🇸🇦", note: "eVisa · Work · Umrah" },
      { c: "Qatar", flag: "🇶🇦", note: "Visitor · Work" },
      { c: "South Africa", flag: "🇿🇦", note: "Visitor · Critical Skills" },
      { c: "Egypt", flag: "🇪🇬", note: "Tourist · Business" },
      { c: "Kenya", flag: "🇰🇪", note: "eTA · Business" },
    ],
  },
];

function Page() {
  return (
    <>
      <Hero
        image={heroImg}
        eyebrow="EXPLORE THE WORLD"
        title={<>Visas by <span className="gradient-gold-text italic">Country</span></>}
        subtitle="From Schengen Europe to APEC Asia — browse visa requirements and step-by-step guides for 190+ destinations."
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="BY REGION" title="Pick your destination" subtitle="Each guide covers eligibility, documents, fees, timelines and interview prep." />
          <div className="space-y-16">
            {REGIONS.map((r, ri) => (
              <div key={r.name}>
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-2xl font-display font-bold text-primary">{r.name}</h3>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-muted-foreground">{r.countries.length} countries</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {r.countries.map((c, i) => (
                    <div key={c.c} className="group p-5 rounded-xl bg-card border border-border/60 card-glow hover:[&]:card-glow-hover cursor-pointer animate-fade-up"
                      style={{ animationDelay: `${(ri*0.05) + (i*0.03)}s` }}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl">{c.flag}</div>
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground group-hover:text-primary transition group-hover:translate-x-1"><path d="M2 12L12 2M12 2H4M12 2v8"/></svg>
                      </div>
                      <div className="font-semibold text-foreground">{c.c}</div>
                      <div className="text-xs text-muted-foreground mt-1">{c.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
