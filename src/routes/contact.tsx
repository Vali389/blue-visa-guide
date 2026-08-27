import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send, Clock, CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CONTACT_INFO } from "@/lib/site-data";
import heroImg from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact With Us — VisaEnter Bangalore" },
      {
        name: "description",
        content:
          "Feel Free to Get in Touch with VisaEnter. Visit our Bangalore office in Hebbal Kempapura or call +91-81252 98332 for immediate visa assistance.",
      },
      { property: "og:title", content: "Contact VisaEnter — Bangalore Office" },
      {
        property: "og:description",
        content: "Book a free visa assessment or schedule a visit to our office in Bangalore.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] w-full overflow-hidden bg-slate-950 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15, 23, 42, 0.72) 0%, rgba(15, 23, 42, 0.9) 100%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white pt-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md mb-4">
            <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent)" }} />
            CONTACT WITH US
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
            Feel Free to <span className="text-gradient">Get in Touch with Us</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85 font-light">
            Our senior visa advisors are available to answer your queries and plan your application roadmap.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-start">
          {/* Contact Details */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.3em]" style={{ color: "var(--primary)" }}>
                VISAENTER OFFICE
              </p>
              <h2 className="mt-2 text-3xl font-bold text-foreground">
                India Head Office (Bangalore)
              </h2>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Visit our office or call us directly. We provide both in-person and online video consultations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-5 rounded-3xl border border-border/80 bg-secondary/30 p-6 shadow-sm">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-primary text-white shadow">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Office Address</div>
                  <div className="mt-1 font-bold text-foreground text-base leading-relaxed">
                    {CONTACT_INFO.address}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Country: {CONTACT_INFO.country}</div>
                </div>
              </div>

              <div className="flex items-start gap-5 rounded-3xl border border-border/80 bg-secondary/30 p-6 shadow-sm">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-primary text-white shadow">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</div>
                  <a href={CONTACT_INFO.phoneHref} className="mt-1 text-base font-bold text-primary block hover:underline">
                    {CONTACT_INFO.phone}
                  </a>
                  <div className="text-xs text-muted-foreground mt-0.5">Mon–Sat, 9:30am–7:00pm</div>
                </div>
              </div>

              <div className="flex items-start gap-5 rounded-3xl border border-border/80 bg-secondary/30 p-6 shadow-sm">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-primary text-white shadow">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</div>
                  <a href={CONTACT_INFO.emailHref} className="mt-1 text-base font-bold text-primary block hover:underline">
                    {CONTACT_INFO.email}
                  </a>
                  <div className="text-xs text-muted-foreground mt-0.5">Fast response within 2 hours</div>
                </div>
              </div>

              <div className="flex items-start gap-5 rounded-3xl border border-border/80 bg-secondary/30 p-6 shadow-sm">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#25D366] text-white shadow">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">WhatsApp Chat</div>
                  <a
                    href={CONTACT_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-base font-bold text-[#25D366] block hover:underline"
                  >
                    Chat Directly on WhatsApp
                  </a>
                  <div className="text-xs text-muted-foreground mt-0.5">Instant case assessment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border/80 bg-white p-8 shadow-card"
          >
            <h3 className="text-2xl font-bold text-foreground">Send Us a Message</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Fill out the form below to receive a call from our immigration counselors.
            </p>

            {sent ? (
              <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center text-emerald-800">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-xl font-bold">Message Sent Successfully!</h4>
                <p className="mt-2 text-sm text-emerald-700">
                  Thank you for reaching out to VisaEnter. One of our senior visa consultants will call you within 2 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-6 space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Full Name *
                  </label>
                  <input
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@email.com"
                      className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91-XXXXX XXXXX"
                      className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Select Visa Category / Country
                  </label>
                  <select className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option>Germany Student Visa (APS)</option>
                    <option>United Kingdom Visa</option>
                    <option>Canada Study Permit / Express Entry</option>
                    <option>United States F-1 / B1/B2</option>
                    <option>Australia Visa</option>
                    <option>Dubai 5-Year Business Visa</option>
                    <option>OET Coaching</option>
                    <option>TOFEL Coaching</option>
                    <option>Other Visa Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Message / Case Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide any details regarding your current visa status, refusals (if any), or academic score..."
                    className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl gradient-primary py-3.5 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" /> Submit Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
