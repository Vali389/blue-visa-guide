import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface ServiceCardData {
  slug: string;
  image: string;
  title: string;
  tagline: string;
  description: string;
  badge?: "POPULAR" | "NEW" | "TRENDING";
  accentColor?: string; /* oklch or hex */
}

export function ServiceCard({ data, index = 0 }: { data: ServiceCardData; index?: number }) {
  const accent = data.accentColor ?? "var(--primary)";
  const badgeBg = data.badge === "NEW" ? "var(--accent)" : data.badge === "TRENDING" ? "#e8a24b" : accent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-black/5 hover:-translate-y-1 transition-transform duration-500"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {data.badge && (
          <span
            className="absolute top-4 right-4 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white shadow-lg"
            style={{ background: badgeBg }}
          >
            {data.badge}
          </span>
        )}
        <h3 className="absolute bottom-4 left-5 right-5 font-serif text-3xl font-semibold text-white drop-shadow-lg">
          {data.title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col gap-4 bg-white p-6">
        <p
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: accent }}
        >
          {data.tagline}
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {data.description}
        </p>
        <Link
          to="/services/$slug"
          params={{ slug: data.slug }}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:gap-3 transition-all"
        >
          Explore Service
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" style={{ color: accent }} />
        </Link>
      </div>
    </motion.div>
  );
}
