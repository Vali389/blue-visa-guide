import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-passport.jpg";

export const Route = createFileRoute("/passport-index")({
  head: () => ({
    meta: [
      { title: "Passport Index — VisaGuide.world" },
      { name: "description", content: "Ranking of the world's most powerful passports by visa-free access." },
    ],
  }),
  component: Page,
});

const RANKINGS = [
  { rank: 1, country: "Singapore", visaFree: 195, color: "#dc2626" },
  { rank: 2, country: "Japan", visaFree: 193, color: "#e11d48" },
  { rank: 3, country: "France", visaFree: 192, color: "#2563eb" },
  { rank: 3, country: "Germany", visaFree: 192, color: "#111827" },
  { rank: 3, country: "Italy", visaFree: 192, color: "#16a34a" },
  { rank: 4, country: "Spain", visaFree: 191, color: "#eab308" },
  { rank: 4, country: "Netherlands", visaFree: 191, color: "#ea580c" },
  { rank: 5, country: "United Kingdom", visaFree: 190, color: "#1e40af" },
  { rank: 6, country: "United States", visaFree: 188, color: "#3b82f6" },
  { rank: 7, country: "Canada", visaFree: 187, color: "#ef4444" },
  { rank: 8, country: "Australia", visaFree: 186, color: "#0d9488" },
  { rank: 9, country: "Switzerland", visaFree: 185, color: "#b91c1c" },
];

function Page() {
  return (
    <PageLayout>
      <Hero
        image={heroImg}
        eyebrow="Passport Rankings"
        title={<>The <span className="text-gradient">Passport Index</span></>}
        subtitle="Discover which passports open the most doors — updated with the latest visa-free access data."
      />
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-2xl border shadow-card">
            <div className="grid grid-cols-[80px_1fr_auto] gap-4 gradient-primary px-6 py-4 text-sm font-bold uppercase tracking-widest text-white">
              <div>Rank</div>
              <div>Country</div>
              <div>Visa-free destinations</div>
            </div>
            {RANKINGS.map((r, i) => (
              <motion.div
                key={r.country}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="grid grid-cols-[80px_1fr_auto] items-center gap-4 border-b bg-card px-6 py-5 hover:bg-secondary transition-colors"
              >
                <div className="text-2xl font-bold" style={{ color: r.color }}>#{r.rank}</div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded" style={{ background: r.color }} />
                  <span className="font-semibold">{r.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full gradient-primary" style={{ width: `${(r.visaFree / 200) * 100}%` }} />
                  </div>
                  <span className="w-12 text-right font-mono font-semibold">{r.visaFree}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
