import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroProps {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}

export function Hero({ image, eyebrow, title, subtitle, children }: HeroProps) {
  return (
    <section className="relative min-h-[400px] sm:min-h-[500px] md:h-[80vh] md:min-h-[560px] w-full overflow-hidden flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center animate-hero-zoom"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8, 14, 28, 0.86) 0%, rgba(8, 14, 28, 0.76) 40%, rgba(8, 14, 28, 0.94) 100%)",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 sm:px-6 text-white text-center pt-[98px] sm:pt-[116px] pb-10 sm:pb-12 w-full">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-[0.2em] backdrop-blur-md mb-2"
          >
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2 sm:mt-3 max-w-4xl text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold sm:font-extrabold leading-[1.2] tracking-tight drop-shadow-md break-words"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 sm:mt-3 max-w-2xl text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-normal sm:font-light mx-auto drop-shadow-sm"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-2.5 sm:gap-4"
          >
            {children}
          </motion.div>
        )}
      </div>

      <div className="hidden sm:block absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70">
        <div className="h-9 w-5 rounded-full border-2 border-white/50 p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-full rounded-full bg-white"
          />
        </div>
      </div>
    </section>
  );
}
