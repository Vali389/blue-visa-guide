import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VisaGuide.world" },
      { name: "description", content: "Talk to our visa experts. Response within 24 hours." },
    ],
  }),
  component: Page,
});

const INFO = [
  { icon: Mail, title: "Email", value: "hello@visaguide.world", sub: "24 hour response" },
  { icon: Phone, title: "Phone", value: "+1 (555) 010-2030", sub: "Mon–Fri, 9am–6pm" },
  { icon: MapPin, title: "Office", value: "London · Berlin · Singapore", sub: "By appointment" },
  { icon: MessageCircle, title: "Chat", value: "Live support", sub: "In-app messenger" },
];

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <PageLayout>
      <Hero
        image={heroImg}
        eyebrow="Get in touch"
        title={<>Let's plan your <span className="text-gradient">next journey</span></>}
        subtitle="Question about a visa? Feedback on a guide? A partnership idea? We'd love to hear from you."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            {INFO.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-5 rounded-2xl border bg-card p-6 shadow-card"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-primary text-white">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{it.title}</div>
                  <div className="mt-1 text-lg font-semibold">{it.value}</div>
                  <div className="text-xs text-muted-foreground">{it.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border bg-card p-8 shadow-card"
          >
            <h3 className="text-2xl font-bold">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">We'll reply within one business day.</p>
            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Full name" className="rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                <input required type="email" placeholder="Email" className="rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <input placeholder="Subject" className="rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              <textarea required rows={5} placeholder="How can we help?" className="rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg gradient-primary py-3 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                {sent ? "Message sent ✓" : (<>Send message <Send className="h-4 w-4" /></>)}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </PageLayout>
  );
}
