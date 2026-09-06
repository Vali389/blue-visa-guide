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

  // Display 3 cards at a time based on current index
  const visibleIndices = [
    current % TESTIMONIALS.length,
    (current + 1) % TESTIMONIALS.length,
    (current + 2) % TESTIMONIALS.length,
  ];

  return (
    <section className="py-20 sm:py-24 bg-secondary/30 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Centered Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-primary shadow-sm mb-3">
            OUR FEEDBACKS
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight md:whitespace-nowrap">
            What They’re Talking About <span className="text-gradient">VisaEnter</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed md:whitespace-nowrap">
            Learn from our satisfied customers what they have to say about our services.
          </p>

          {/* Left & Right Arrow Buttons */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={prev}
              className="grid h-10 w-10 place-items-center rounded-full border border-border/80 bg-white text-foreground shadow-sm hover:gradient-primary hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 active:scale-95"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="grid h-10 w-10 place-items-center rounded-full border border-border/80 bg-white text-foreground shadow-sm hover:gradient-primary hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 active:scale-95"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 3-Card Grid Matching User Attached Speech Bubble UI with Strictly Equal Height */}
        <div className="grid gap-12 md:grid-cols-3 pt-6 pb-6 items-stretch">
          {visibleIndices.map((reviewIdx, slotIdx) => {
            const t = TESTIMONIALS[reviewIdx];
            const isFeatured = slotIdx === 0;
            return (
              <motion.div
                key={`${t.name}-${reviewIdx}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: slotIdx * 0.08 }}
                onClick={() => setCurrent(reviewIdx)}
                className="cursor-pointer flex flex-col items-center group h-full justify-between"
              >
                {/* Speech Bubble Card with Guaranteed Equal Height */}
                <div
                  className={`relative w-full rounded-3xl bg-white border pt-10 pb-8 px-6 sm:px-7 transition-all duration-300 flex flex-col justify-between h-[215px] sm:h-[200px] ${
                    isFeatured
                      ? "border-blue-400 shadow-xl shadow-blue-500/10 -translate-y-1.5 ring-2 ring-blue-300/40"
                      : "border-sky-300/80 shadow-sm hover:border-blue-400 hover:shadow-md hover:-translate-y-1"
                  }`}
                >
                  {/* Top Circular Blue Quote Icon Badge */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-blue-600 text-white shadow-md ring-4 ring-white">
                      <Quote className="h-4.5 w-4.5 fill-current rotate-180" />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    {/* Centered 5 Golden Stars */}
                    <div className="flex justify-center gap-1 text-amber-400 mb-2.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Centered Review Text */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-center font-medium line-clamp-4">
                      "{t.review}"
                    </p>
                  </div>

                  {/* Downward Speech Bubble Tail Pointer */}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-sky-300/80 rotate-45" />
                </div>

                {/* Author Avatar & Info Below Speech Bubble */}
                <div className="mt-6 flex flex-col items-center text-center">
                  {/* Rotating Circular Avatar on Card Hover */}
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-blue-600 text-white font-black text-lg shadow-md ring-4 ring-white transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] group-hover:scale-110">
                    {t.avatar}
                  </div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base mt-2.5 leading-snug group-hover:text-primary transition-colors">
                    {t.name}
                  </div>
                  <div className="text-xs font-semibold text-primary mt-0.5">
                    {t.role}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Indicator Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === i
                  ? "w-8 gradient-primary shadow-sm"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
