import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-blog.jpg";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — VisaGuide World" },
      { name: "description", content: "Travel, visa and immigration insights from expert consultants." },
      { property: "og:title", content: "Blog — VisaGuide World" },
      { property: "og:description", content: "Expert insights on visas, immigration, travel policy and global mobility." },
    ],
  }),
  component: Page,
});

const POSTS = [
  { title: "Schengen Visa in 2026: What's Changing With ETIAS", cat: "Europe", date: "Jul 12, 2026", read: "6 min", excerpt: "Europe's new travel authorization system rolls out this year. Here's what every non-EU traveller must know." },
  { title: "US F1 Visa Interview — 25 Questions You Must Prepare", cat: "Student", date: "Jul 08, 2026", read: "9 min", excerpt: "Our senior counsellors break down the most-asked F1 interview questions and how to answer them right." },
  { title: "UAE Golden Visa vs Portugal Golden Visa — Which Wins?", cat: "Residency", date: "Jun 30, 2026", read: "11 min", excerpt: "A side-by-side comparison of the two most-searched residency-by-investment programs." },
  { title: "Canada Express Entry: 2026 CRS Cutoff Trends", cat: "Immigration", date: "Jun 22, 2026", read: "5 min", excerpt: "The latest draw analysis and what it means for your ITA chances this year." },
  { title: "10 Countries Offering Digital Nomad Visas in 2026", cat: "Travel", date: "Jun 15, 2026", read: "7 min", excerpt: "Live and work remotely — legally. Here are the top-value digital nomad visa programs to consider." },
  { title: "UK Skilled Worker Visa: Salary Threshold Update", cat: "Work", date: "Jun 08, 2026", read: "4 min", excerpt: "The new £38,700 threshold and what it means for sponsored applicants." },
];

function Page() {
  return (
    <>
      <Hero
        image={heroImg}
        eyebrow="INSIGHTS & GUIDES"
        title={<>The <span className="gradient-gold-text italic">VisaGuide</span> Blog</>}
        subtitle="Trusted analysis on visas, immigration policy and global travel — from advisors who file cases every day."
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="LATEST ARTICLES" title="Stories, guides, & analysis" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p, i) => (
              <article key={p.title} className="group bg-card rounded-2xl overflow-hidden border border-border/60 card-glow hover:[&]:card-glow-hover animate-fade-up"
                style={{ animationDelay: `${i*0.08}s` }}>
                <div className="h-48 bg-gradient-to-br from-primary/20 via-card to-[color:var(--navy-deep)] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-display font-bold gradient-gold-text opacity-30 group-hover:scale-125 transition-transform duration-700">{p.cat[0]}</span>
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider">{p.cat}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{p.date}</span><span>·</span><span>{p.read} read</span>
                  </div>
                  <h3 className="font-display text-xl font-bold leading-snug group-hover:text-primary transition mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.excerpt}</p>
                  <button className="text-sm font-medium text-primary inline-flex items-center gap-1.5">
                    Read article
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition"><path d="M2 8h12M9 3l5 5-5 5"/></svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
