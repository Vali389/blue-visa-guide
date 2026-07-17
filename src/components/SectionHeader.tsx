interface Props { eyebrow?: string; title: string; subtitle?: string; align?: "left" | "center"; }
export function SectionHeader({ eyebrow, title, subtitle, align = "center" }: Props) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${a} mb-14`}>
      {eyebrow && <p className="text-primary text-xs tracking-[0.3em] font-medium mb-4">{eyebrow}</p>}
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}
