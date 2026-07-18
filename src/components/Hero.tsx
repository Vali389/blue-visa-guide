import type { ReactNode } from "react";

interface HeroProps {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  height?: "sm" | "md" | "lg";
}

export function Hero({ image, eyebrow, title, subtitle, children, height = "md" }: HeroProps) {
  const h = height === "lg" ? "min-h-[92vh]" : height === "sm" ? "min-h-[55vh]" : "min-h-[75vh]";
  return (
    <section className={`relative overflow-hidden ${h} flex items-center justify-center`}>
      <div className="absolute inset-0 animate-ken-burns">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_95%)] opacity-60" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-primary/50 text-primary text-xs tracking-[0.3em] font-medium mb-6 animate-fade-in-slow">
            {eyebrow}
          </div>
        )}
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>{children}</div>}
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
