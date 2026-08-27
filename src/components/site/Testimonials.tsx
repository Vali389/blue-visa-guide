import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () =>
    setCurrent((p) => (p + 1) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p
              className="text-xs font-extrabold uppercase tracking-[0.3em]"
              style={{ color: "var(--primary)" }}
            >
              OUR FEEDBACKS
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl text-foreground">
              What They’re Talking About Guidevisa
            </h2>
            <p className="mt-4 text-muted-foreground text-base">
              Learn from our satisfied customers what they have to say about our services.
            </p>
          </div>

          {/* Left & Right Arrow Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              className="grid h-12 w-12 place-items-center rounded-full border border-border/80 bg-white text-foreground shadow-sm hover:gradient-primary hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 active:scale-95"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="grid h-12 w-12 place-items-center rounded-full border border-border/80 bg-white text-foreground shadow-sm hover:gradient-primary hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 active:scale-95"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 3-Card Grid with Active Slide Emphasis */}
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => {
            const isFeatured = idx === current;
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setCurrent(idx)}
                className={`relative rounded-3xl border p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isFeatured
                    ? "bg-white border-primary/50 shadow-glow-primary -translate-y-2 ring-2 ring-primary/20"
                    : "bg-white/80 border-border/80 shadow-sm hover:bg-white hover:border-primary/30 hover:-translate-y-1"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <Quote
                      className={`h-8 w-8 transition-colors ${
                        isFeatured ? "text-primary" : "text-muted/40"
                      }`}
                    />
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed italic">
                    "{t.review}"
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3.5 border-t pt-4">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl gradient-primary text-white font-bold shadow-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Indicator Dots */}
        <div className="mt-10 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === i
                  ? "w-8 bg-primary shadow-sm"
                  : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              style={{ backgroundColor: current === i ? "var(--primary)" : undefined }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
