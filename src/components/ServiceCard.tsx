import { Link } from "@tanstack/react-router";

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  badge?: string;
  badgeColor?: "gold" | "teal" | "emerald";
}

const badgeStyles = {
  gold: "bg-primary text-primary-foreground",
  teal: "bg-[oklch(0.7_0.13_195)] text-[oklch(0.12_0.03_260)]",
  emerald: "bg-[oklch(0.72_0.16_155)] text-[oklch(0.12_0.03_260)]",
};

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden card-glow hover:[&]:card-glow-hover animate-fade-up border border-border/50"
      style={{ animationDelay: `${delay}s` }}>
      {/* Image top */}
      <div className="relative h-56 overflow-hidden">
        <img src={service.image} alt={service.title}
          className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        {service.badge && (
          <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${badgeStyles[service.badgeColor ?? "gold"]}`}>
            {service.badge}
          </span>
        )}
        <h3 className="absolute bottom-4 left-5 right-5 font-display text-2xl font-bold text-white drop-shadow-lg">
          {service.title}
        </h3>
      </div>
      {/* Content bottom */}
      <div className="p-6 bg-card">
        <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">{service.tagline}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
        <Link to="/services/$slug" params={{ slug: service.slug }}
          className="inline-flex items-center gap-1.5 text-foreground font-medium text-sm group-hover:text-primary transition">
          Explore Service
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
            <path d="M2 12L12 2M12 2H4M12 2v8"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}
