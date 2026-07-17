import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Priya Menon",
    role: "Traveller · Hyderabad → Paris",
    quote:
      "The Schengen guide made a scary process feel manageable. I had my appointment ready in 30 minutes.",
    rating: 5,
  },
  {
    name: "Marcus Reed",
    role: "Software Engineer · US H1B",
    quote:
      "Clearest breakdown of the DS-160 I've ever read. Approved on the first attempt with zero back-and-forth.",
    rating: 5,
  },
  {
    name: "Sofia Alvarez",
    role: "Student · Canada Study Permit",
    quote:
      "The document checklist matched exactly what IRCC asked for. Saved me weeks of confusion.",
    rating: 5,
  },
  {
    name: "Kenji Sato",
    role: "Working Holiday · Australia",
    quote:
      "Their timeline predictor was spot on — visa granted in 11 days. Highly recommend.",
    rating: 5,
  },
  {
    name: "Amelia Clarke",
    role: "Business Traveller · UK",
    quote:
      "Beautifully written, factually accurate, and refreshingly free of ads. My go-to visa resource.",
    rating: 5,
  },
  {
    name: "Diego Costa",
    role: "Digital Nomad · 27 countries",
    quote:
      "As someone who applies for visas constantly, VisaGuide is the one site I trust for up-to-date rules.",
    rating: 5,
  },
];

function Card({ t }: { t: typeof TESTIMONIALS[number] }) {
  return (
    <figure className="mx-3 flex w-[360px] shrink-0 flex-col justify-between rounded-2xl border bg-card p-6 shadow-card">
      <Quote className="h-8 w-8" style={{ color: "var(--primary)" }} />
      <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
      <div className="mt-6 flex items-center gap-3 border-t pt-4">
        <div className="grid h-10 w-10 place-items-center rounded-full gradient-primary font-bold text-white">
          {t.name[0]}
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
        </div>
        <div className="flex gap-0.5" style={{ color: "var(--accent)" }}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
      </div>
    </figure>
  );
}

export function Testimonials() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="py-24 bg-secondary/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--primary)" }}>
          Testimonials
        </p>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl">What our clients say</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Real travellers, real approvals — trusted by thousands of applicants across 200+ countries.
        </p>
      </div>

      <div className="relative mt-14 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-marquee">
          {doubled.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
