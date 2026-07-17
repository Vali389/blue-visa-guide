import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-blog.jpg";
import s1 from "@/assets/service-schengen.jpg";
import s2 from "@/assets/service-us.jpg";
import s3 from "@/assets/service-japan.jpg";
import s4 from "@/assets/service-canada.jpg";
import s5 from "@/assets/service-australia.jpg";
import s6 from "@/assets/service-uk.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — VisaGuide.world" },
      { name: "description", content: "Travel visa news, application tips and destination guides." },
    ],
  }),
  component: Page,
});

const POSTS = [
  { image: s1, title: "Schengen fee increase 2026 — what applicants need to know", excerpt: "The Schengen short-stay visa fee has been revised. Here's everything you should prepare before your next application.", date: "Mar 14, 2026", read: "6 min" },
  { image: s2, title: "US visa interview: 12 questions you'll almost certainly hear", excerpt: "A veteran consular officer walks us through the questions most applicants get — and how to answer with confidence.", date: "Feb 28, 2026", read: "8 min" },
  { image: s3, title: "Japan opens digital nomad visa — is it worth it?", excerpt: "We break down eligibility, income thresholds, tax implications and how it stacks up against Portugal and Estonia.", date: "Feb 09, 2026", read: "5 min" },
  { image: s4, title: "Canada Express Entry draws are back — score updates inside", excerpt: "Recent draws are targeting healthcare and STEM. Here's how to boost your CRS above the current cutoff.", date: "Jan 21, 2026", read: "7 min" },
  { image: s5, title: "Working Holiday Australia — beyond the tourist trail", excerpt: "Second-year extensions, regional work requirements and the best months to arrive for a smooth start.", date: "Jan 03, 2026", read: "6 min" },
  { image: s6, title: "UK Skilled Worker changes: salary threshold jumps 48%", excerpt: "The new minimum salary lands April 2026. Compare 2025 vs 2026 requirements side-by-side.", date: "Dec 12, 2025", read: "4 min" },
];

function Page() {
  return (
    <PageLayout>
      <Hero
        image={heroImg}
        eyebrow="Blog · Insights · News"
        title={<>Stories from the <span className="text-gradient">visa world</span></>}
        subtitle="Deeply-reported guides, policy updates and practical tips for every kind of traveller."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-black/5"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.read}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
                  <Link to="/blog" className="mt-5 inline-block text-sm font-semibold text-primary hover:underline">Read more →</Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
