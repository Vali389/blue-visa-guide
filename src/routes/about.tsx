import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe, HandshakeIcon, Rocket, Target } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { PageLayout } from "@/components/site/PageLayout";
import { Testimonials } from "@/components/site/Testimonials";
import heroImg from "@/assets/hero-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — VisaGuide.world" },
      { name: "description", content: "Our mission, our team and the story behind VisaGuide.world." },
    ],
  }),
  component: Page,
});

const VALUES = [
  { icon: Target, title: "Accuracy first", text: "Every guide is cross-checked against official sources and updated the moment policies change." },
  { icon: Globe, title: "Global perspective", text: "200+ nationalities, 200+ destinations — our editorial team is genuinely global." },
  { icon: HandshakeIcon, title: "Applicant-first", text: "We answer to travellers, never to advertisers or agents. No paid placements. Ever." },
  { icon: Rocket, title: "Continuously improving", text: "Reader feedback drives our roadmap. If you spot something, we fix it within 48 hours." },
];

function Page() {
  return (
    <PageLayout>
      <Hero
        image={heroImg}
        eyebrow="About VisaGuide"
        title={<>Making travel <span className="text-gradient">accessible</span> for everyone</>}
        subtitle="We are an independent editorial team of researchers, former consular staff and travellers, obsessed with clarity."
      />
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--primary)" }}>Our Story</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Twelve years of visa expertise, one honest resource.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                VisaGuide.world was founded in 2014 by a group of travellers frustrated by conflicting information across
                embassy websites and paid consultancies. We started with Schengen — one country, one guide.
              </p>
              <p>
                Today we cover 200+ destinations across seven regions, publishing new updates weekly. Our small editorial team
                works directly with consulates, immigration lawyers and thousands of readers who share their approval stories.
              </p>
              <p>
                We remain proudly independent, ad-supported and free. Because getting a visa should never be another obstacle
                on the way to the trip of a lifetime.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border bg-card p-6 shadow-card">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-white">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <Testimonials />
    </PageLayout>
  );
}
