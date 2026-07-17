import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-country.jpg";

export const Route = createFileRoute("/visas-by-country")({
  head: () => ({
    meta: [
      { title: "Visas by Country — VisaGuide.world" },
      { name: "description", content: "Browse visa requirements by destination country — 200+ nations." },
    ],
  }),
  component: Page,
});

const REGIONS = [
  {
    name: "Europe",
    countries: ["France", "Germany", "Italy", "Spain", "Netherlands", "Portugal", "Greece", "Austria", "Belgium", "Switzerland"],
  },
  {
    name: "Americas",
    countries: ["United States", "Canada", "Mexico", "Brazil", "Argentina", "Chile", "Colombia", "Peru"],
  },
  {
    name: "Asia",
    countries: ["Japan", "South Korea", "China", "Thailand", "Vietnam", "Singapore", "India", "Indonesia", "Malaysia"],
  },
  {
    name: "Oceania",
    countries: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"],
  },
  {
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Israel", "Turkey", "Jordan", "Oman"],
  },
  {
    name: "Africa",
    countries: ["Egypt", "Morocco", "South Africa", "Kenya", "Tanzania", "Ghana", "Rwanda"],
  },
];

function Page() {
  return (
    <PageLayout>
      <Hero
        image={heroImg}
        eyebrow="Destinations"
        title={<>Visas by <span className="text-gradient">Country</span></>}
        subtitle="Choose your destination and get step-by-step visa guidance tailored to your nationality."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 space-y-16">
          {REGIONS.map((r, ri) => (
            <div key={r.name}>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8 text-3xl font-bold md:text-4xl"
              >
                <span className="text-gradient">{r.name}</span>
                <span className="ml-3 text-sm font-medium text-muted-foreground">
                  {r.countries.length} countries
                </span>
              </motion.h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {r.countries.map((c, i) => (
                  <motion.div
                    key={c}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (ri * 0.03) + i * 0.03 }}
                  >
                    <Link
                      to="/services/$slug"
                      params={{ slug: "schengen-visa" }}
                      className="group flex items-center justify-between rounded-xl border bg-card px-5 py-4 shadow-sm hover:border-primary hover:shadow-card transition-all"
                    >
                      <span className="font-medium">{c}</span>
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
