import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-contact.jpg";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VisaGuide World" },
      { name: "description", content: "Book a free consultation with a senior visa advisor." },
      { property: "og:title", content: "Contact — VisaGuide World" },
      { property: "og:description", content: "Reach our global offices or book a free 15-minute consultation." },
    ],
  }),
  component: Page,
});

const OFFICES = [
  { city: "London", addr: "12 Bishopsgate, EC2N 4AJ", phone: "+44 20 7946 0123" },
  { city: "Dubai", addr: "DIFC, Gate Village 4, Level 3", phone: "+971 4 555 0198" },
  { city: "Singapore", addr: "1 Raffles Place, #40-02", phone: "+65 6812 4400" },
  { city: "Toronto", addr: "100 King St W, Suite 5600", phone: "+1 416 555 0177" },
];

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <Hero
        image={heroImg}
        eyebrow="GET IN TOUCH"
        title={<>Let's plan your <span className="gradient-gold-text italic">journey</span></>}
        subtitle="Book a free 15-minute consultation with a senior advisor — no obligation, no sales pitch."
      />
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="p-8 md:p-10 rounded-2xl bg-card border border-border/60 card-glow">
            <h2 className="text-2xl font-display font-bold mb-2">Send us a message</h2>
            <p className="text-muted-foreground mb-8 text-sm">We reply within 4 business hours.</p>
            {sent ? (
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/40 text-center">
                <div className="text-4xl mb-2">✓</div>
                <p className="font-semibold text-primary">Message sent!</p>
                <p className="text-sm text-muted-foreground mt-1">A senior advisor will reach out shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Name</label>
                    <input required className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition" />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Destination</label>
                  <input className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition" placeholder="e.g. United States, Canada" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Visa Type</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition">
                    <option>Tourist</option><option>Business</option><option>Student</option>
                    <option>Work</option><option>Family / Spouse</option><option>Residency</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
                  <textarea rows={4} required className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition" />
                </div>
                <button type="submit" className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-[0_0_40px_-10px_var(--gold)]">
                  Send message
                </button>
              </form>
            )}
          </div>
          {/* Info */}
          <div>
            <SectionHeader eyebrow="OUR OFFICES" title="Visit us worldwide" align="left" />
            <div className="space-y-4">
              {OFFICES.map((o, i) => (
                <div key={o.city} className="p-6 rounded-xl bg-card border border-border/60 card-glow animate-fade-up flex items-start gap-4" style={{animationDelay:`${i*0.08}s`}}>
                  <div className="w-12 h-12 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-9 8-13a8 8 0 10-16 0c0 4 8 13 8 13z"/><circle cx="12" cy="9" r="3"/></svg>
                  </div>
                  <div>
                    <div className="font-display text-xl font-bold text-primary">{o.city}</div>
                    <p className="text-sm text-muted-foreground mt-1">{o.addr}</p>
                    <p className="text-sm font-medium mt-1">{o.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
