import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-passport.jpg";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/passport-index")({
  head: () => ({
    meta: [
      { title: "Passport Index — VisaGuide World" },
      { name: "description", content: "Global passport strength rankings — see visa-free access for every nationality." },
      { property: "og:title", content: "Passport Index — VisaGuide World" },
      { property: "og:description", content: "Compare passports worldwide by visa-free access, mobility score and global rank." },
    ],
  }),
  component: Page,
});

const RANKINGS = [
  { rank: 1, country: "Singapore", flag: "🇸🇬", score: 195 },
  { rank: 2, country: "Japan", flag: "🇯🇵", score: 193 },
  { rank: 3, country: "Germany", flag: "🇩🇪", score: 192 },
  { rank: 3, country: "South Korea", flag: "🇰🇷", score: 192 },
  { rank: 4, country: "Finland", flag: "🇫🇮", score: 191 },
  { rank: 4, country: "Italy", flag: "🇮🇹", score: 191 },
  { rank: 5, country: "France", flag: "🇫🇷", score: 190 },
  { rank: 5, country: "Spain", flag: "🇪🇸", score: 190 },
  { rank: 6, country: "United Kingdom", flag: "🇬🇧", score: 189 },
  { rank: 7, country: "Netherlands", flag: "🇳🇱", score: 188 },
  { rank: 8, country: "United States", flag: "🇺🇸", score: 186 },
  { rank: 9, country: "Canada", flag: "🇨🇦", score: 185 },
  { rank: 10, country: "Australia", flag: "🇦🇺", score: 184 },
  { rank: 11, country: "UAE", flag: "🇦🇪", score: 183 },
  { rank: 12, country: "India", flag: "🇮🇳", score: 62 },
];

function Page() {
  return (
    <>
      <Hero
        image={heroImg}
        eyebrow="GLOBAL RANKINGS"
        title={<>Passport <span className="gradient-gold-text italic">Index</span> 2026</>}
        subtitle="How powerful is your passport? Explore visa-free access scores for every country in the world."
      />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader eyebrow="RANKINGS" title="Top passports of 2026" subtitle="Higher score = more countries accessible visa-free or with visa on arrival." />
          <div className="bg-card border border-border/60 rounded-2xl overflow-hidden card-glow">
            <div className="grid grid-cols-12 px-6 py-4 border-b border-border bg-[color:var(--navy-deep)] text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              <div className="col-span-2">Rank</div>
              <div className="col-span-7">Country</div>
              <div className="col-span-3 text-right">Visa-free score</div>
            </div>
            {RANKINGS.map((r, i) => (
              <div key={r.country} className="grid grid-cols-12 items-center px-6 py-4 border-b border-border/40 last:border-0 hover:bg-primary/5 transition-colors animate-fade-up"
                style={{ animationDelay: `${i*0.03}s` }}>
                <div className="col-span-2 flex items-center gap-3">
                  <span className={`inline-flex w-9 h-9 rounded-full items-center justify-center font-bold text-sm ${r.rank <= 3 ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>{r.rank}</span>
                </div>
                <div className="col-span-7 flex items-center gap-3">
                  <span className="text-2xl">{r.flag}</span>
                  <span className="font-medium">{r.country}</span>
                </div>
                <div className="col-span-3 text-right">
                  <span className="font-display text-2xl font-bold gradient-gold-text">{r.score}</span>
                  <span className="text-xs text-muted-foreground ml-1">/ 199</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
