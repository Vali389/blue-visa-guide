const TESTIMONIALS = [
  { name: "Priya Sharma", role: "US Student Visa · Stanford", quote: "The team held my hand through every step. My F1 visa was approved the first time — SOP and mock interview help was gold." },
  { name: "Marcus Weber", role: "Germany Blue Card", quote: "Flawless coordination with my employer in Munich. I moved with my family within 8 weeks. Exceptional service." },
  { name: "Aisha Rahman", role: "UK Spouse Visa", quote: "After one refusal elsewhere, VisaGuide rebuilt my case with a proper evidence bundle. Approved in 6 weeks." },
  { name: "Diego Alvarez", role: "Portugal Golden Visa", quote: "Serious, senior advisors. They structured our investment cleanly and residency came through smoothly." },
  { name: "Hana Kobayashi", role: "Canada Express Entry", quote: "From ECA to PR, every milestone was tracked. Got my COPR letter in 5 months. Highly recommend." },
  { name: "Omar El-Sayed", role: "UAE Business Visa", quote: "Same-week appointments, priority handling — perfect for how fast I need to move for deals." },
  { name: "Sophie Laurent", role: "Australia Skilled 189", quote: "The points strategy alone was worth it. They advised on state nomination and I got invited quickly." },
  { name: "Rohan Kapoor", role: "Schengen Multi-Entry", quote: "5-year multi-entry approved. Their document review caught issues I would have missed. Truly professional." },
];

export function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <p className="text-primary text-xs tracking-[0.3em] font-medium mb-4">TESTIMONIALS</p>
        <h2 className="text-4xl md:text-5xl font-bold">What our clients say</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Real stories from travellers, students, professionals and families we've helped move across borders.</p>
      </div>
      <div className="relative">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <div key={i} className="w-[380px] shrink-0 bg-card border border-border/60 rounded-2xl p-7 card-glow">
              <div className="flex items-center gap-1 text-primary mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-5 text-[15px]">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
