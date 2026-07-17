import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart, Palmtree, Plane, Stamp, Users2, Zap } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-policy.jpg";

export const Route = createFileRoute("/visas-by-policy")({
  head: () => ({
    meta: [
      { title: "Visas by Policy — VisaGuide.world" },
      { name: "description", content: "Explore visa categories — tourist, work, student, transit and more." },
    ],
  }),
  component: Page,
});

const POLICIES = [
  { icon: Palmtree, title: "Tourist Visa", desc: "Short-stay visas for leisure and sightseeing across the globe.", color: "#f59e0b" },
  { icon: Briefcase, title: "Business Visa", desc: "Attend meetings, conferences and negotiate deals abroad.", color: "#0d9488" },
  { icon: GraduationCap, title: "Student Visa", desc: "Enrol in universities, language courses and exchange programmes.", color: "#7c3aed" },
  { icon: Users2, title: "Work Visa", desc: "Temporary and long-term employment permits worldwide.", color: "#2563eb" },
  { icon: Heart, title: "Family Reunion", desc: "Join a spouse, child or dependent already living abroad.", color: "#db2777" },
  { icon: Plane, title: "Transit Visa", desc: "Layovers and airside connections — know when you need one.", color: "#0891b2" },
  { icon: Stamp, title: "Digital Nomad", desc: "Live and work remotely with new-generation nomad visas.", color: "#65a30d" },
  { icon: Zap, title: "eVisa & ETA", desc: "Fast online authorisations replacing traditional stamps.", color: "#dc2626" },
];

function Page() {
  return (
    <PageLayout>
      <Hero
        image={heroImg}
        eyebrow="Visa Categories"
        title={<>Visas by <span className="text-gradient">Policy</span></>}
        subtitle="Find the right visa category for your purpose — tourism, work, study, family or transit."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {POLICIES.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border bg-card p-8 shadow-card cursor-pointer"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl" style={{ background: `${p.color}20`, color: p.color }}>
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-6 h-px w-8 group-hover:w-full transition-all duration-500" style={{ background: p.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
