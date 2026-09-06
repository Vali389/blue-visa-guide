import { useState, useRef, useEffect } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  CheckCircle2,
  Phone,
  Send,
  ShieldCheck,
  Star,
  ArrowRight,
  Sparkles,
  Check,
  ChevronDown,
  AlertCircle,
  Loader2,
  Clock,
  Award,
} from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { VISAENTER_SERVICES, CONTACT_INFO, VisaEnterService } from "@/lib/site-data";

import admissionsImg from "@/assets/service-student.jpg";
import appointmentImg from "@/assets/hero-home.jpg";
import fundingImg from "@/assets/cta-bg.jpg";
import insuranceImg from "@/assets/service-residency.jpg";
import accommodationImg from "@/assets/hero-about.jpg";
import flightImg from "@/assets/hero-country.jpg";

const SERVICE_HERO_IMAGES: Record<string, string> = {
  "university-admissions": admissionsImg,
  "visa-appointment": appointmentImg,
  funding: fundingImg,
  "travel-medical-insurance": insuranceImg,
  accommodation: accommodationImg,
  "flight-booking": flightImg,
};

const DESTINATION_OPTIONS = [
  { value: "Germany", label: "Germany", sub: "APS, Public Universities & Blocked Account", icon: "🇩🇪" },
  { value: "United Kingdom", label: "United Kingdom", sub: "CAS, Russell Group & Graduate Route", icon: "🇬🇧" },
  { value: "Canada", label: "Canada", sub: "DLI, SDS Stream & PGWP Eligible", icon: "🇨🇦" },
  { value: "United States", label: "United States", sub: "I-20, F1 Visa & SEVIS Assistance", icon: "🇺🇸" },
  { value: "Australia", label: "Australia", sub: "CoE, GS Criteria & Subclass 500", icon: "🇦🇺" },
  { value: "Dubai (UAE)", label: "Dubai (UAE)", sub: "Green Visa, Investor & Universities", icon: "🇦🇪" },
  { value: "Europe / Schengen", label: "Europe / Schengen", sub: "France, Italy, Spain, Ireland", icon: "🇪🇺" },
  { value: "Other Countries", label: "Other Country", sub: "Worldwide Relocation Support", icon: "🌐" },
];

function ServiceInquiryForm({ serviceName }: { serviceName: string }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "Germany",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedDestination =
    DESTINATION_OPTIONS.find((opt) => opt.value === form.destination) || DESTINATION_OPTIONS[0];

  const validateField = (field: string, value: string): string => {
    if (field === "name") {
      if (!value.trim()) return "Full name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
    }
    if (field === "phone") {
      if (!value.trim()) return "Phone number is required";
      const cleanPhone = value.replace(/[\s\-\+\(\)]/g, "");
      if (cleanPhone.length < 8 || !/^[0-9]+$/.test(cleanPhone)) {
        return "Please enter a valid phone number (min 8 digits)";
      }
    }
    if (field === "email") {
      if (!value.trim()) return "Email address is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
        return "Please enter a valid email address";
      }
    }
    return "";
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, form[field as keyof typeof form]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const errorMsg = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched = { name: true, phone: true, email: true };
    setTouched(allTouched);

    const newErrors: Record<string, string> = {
      name: validateField("name", form.name),
      phone: validateField("phone", form.phone),
      email: validateField("email", form.email),
    };
    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((msg) => Boolean(msg));
    if (hasError) {
      toast.error("Please fill in all mandatory fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    toast.success(`Inquiry for ${serviceName} received! Connecting with service desk...`);

    const formattedMessage = `*New Service Request — ${serviceName}*
----------------------------------------
*Applicant Name:* ${form.name.trim()}
*Phone Number:* ${form.phone.trim()}
*Email Address:* ${form.email.trim()}
*Requested Service:* ${serviceName}
*Target Country / Intake:* ${form.destination}
*Case Notes:* ${form.notes.trim() || `Inquiring about ${serviceName} process and quote.`}
----------------------------------------
Please provide quotation and next steps.`;

    const whatsappUrl = `https://wa.me/918125298332?text=${encodeURIComponent(formattedMessage)}`;

    setIsSubmitting(false);
    window.open(whatsappUrl, "_blank");

    setForm({
      name: "",
      phone: "",
      email: "",
      destination: "Germany",
      notes: "",
    });
    setTouched({});
    setErrors({});
  };

  return (
    <div className="rounded-3xl border border-sky-100 bg-white p-7 sm:p-8 shadow-xl shadow-sky-500/5 sticky top-24">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
          Inquire About {serviceName}
        </h3>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
          Live Desk
        </span>
      </div>
      <p className="text-xs text-slate-700 font-medium leading-relaxed mb-6">
        Get a direct quote, checklist, and processing timeline from our coordinators.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => handleBlur("name")}
              placeholder="Your full name"
              className={`w-full rounded-xl border bg-slate-50/50 px-4 py-2.5 text-sm outline-none transition-all ${
                touched.name && errors.name
                  ? "border-rose-400 bg-rose-50/30 text-rose-900 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                  : "border-slate-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
              }`}
            />
            {touched.name && errors.name && (
              <AlertCircle className="absolute right-3.5 top-3 h-4 w-4 text-rose-500 pointer-events-none" />
            )}
          </div>
          {touched.name && errors.name && (
            <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-xs text-rose-600 font-medium">
              {errors.name}
            </motion.p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              onBlur={() => handleBlur("phone")}
              placeholder="+91-XXXXX XXXXX"
              className={`w-full rounded-xl border bg-slate-50/50 px-4 py-2.5 text-sm outline-none transition-all ${
                touched.phone && errors.phone
                  ? "border-rose-400 bg-rose-50/30 text-rose-900 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                  : "border-slate-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
              }`}
            />
            {touched.phone && errors.phone && (
              <AlertCircle className="absolute right-3.5 top-3 h-4 w-4 text-rose-500 pointer-events-none" />
            )}
          </div>
          {touched.phone && errors.phone && (
            <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-xs text-rose-600 font-medium">
              {errors.phone}
            </motion.p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              placeholder="you@email.com"
              className={`w-full rounded-xl border bg-slate-50/50 px-4 py-2.5 text-sm outline-none transition-all ${
                touched.email && errors.email
                  ? "border-rose-400 bg-rose-50/30 text-rose-900 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                  : "border-slate-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
              }`}
            />
            {touched.email && errors.email && (
              <AlertCircle className="absolute right-3.5 top-3 h-4 w-4 text-rose-500 pointer-events-none" />
            )}
          </div>
          {touched.email && errors.email && (
            <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-xs text-rose-600 font-medium">
              {errors.email}
            </motion.p>
          )}
        </div>

        {/* Target Country Custom Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Target Country / Destination <span className="text-rose-500">*</span>
          </label>
          <button
            type="button"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className={`w-full rounded-xl border bg-slate-50/70 hover:bg-slate-50 px-4 py-2.5 text-sm flex items-center justify-between outline-none transition-all cursor-pointer ${
              isDropdownOpen
                ? "border-primary ring-2 ring-primary/20 bg-white"
                : "border-slate-200"
            }`}
          >
            <div className="flex items-center gap-2.5 overflow-hidden text-left">
              <span className="text-base shrink-0">{selectedDestination.icon}</span>
              <span className="font-bold text-slate-900 truncate">{selectedDestination.label}</span>
              <span className="text-slate-500 text-xs hidden sm:inline truncate">({selectedDestination.sub})</span>
            </div>
            <ChevronDown
              className={`h-4 w-4 text-slate-400 shrink-0 ml-2 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180 text-primary" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="absolute z-50 left-0 right-0 mt-1.5 bg-white rounded-2xl border border-sky-100 shadow-2xl overflow-hidden py-1.5 max-h-60 overflow-y-auto"
              >
                {DESTINATION_OPTIONS.map((opt) => {
                  const isSelected = form.destination === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        handleChange("destination", opt.value);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left flex items-center justify-between hover:bg-sky-50/80 transition-colors cursor-pointer text-sm ${
                        isSelected ? "bg-sky-50 text-primary font-bold" : "text-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-base shrink-0">{opt.icon}</span>
                        <div className="truncate">
                          <p className={`truncate leading-snug ${isSelected ? "font-bold text-primary" : "font-medium text-slate-900"}`}>
                            {opt.label}
                          </p>
                          <p className="text-[11px] text-slate-500 truncate leading-snug">
                            {opt.sub}
                          </p>
                        </div>
                      </div>
                      {isSelected && <Check className="h-4 w-4 text-primary shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Case Notes / Questions */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Service Details / Intake Timeline
          </label>
          <textarea
            rows={3}
            value={form.notes}
            onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
            placeholder="Intended intake (e.g. Winter 2026), current visa status, or specific requirements..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 resize-none text-slate-900"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl gradient-primary py-3 text-sm font-bold text-white shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Submitting Request...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Request Service Quote
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = VISAENTER_SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.service.metaTitle },
          { name: "description", content: loaderData.service.metaDescription },
          { property: "og:title", content: loaderData.service.metaTitle },
          { property: "og:description", content: loaderData.service.metaDescription },
        ]
      : [{ title: "Immigration Services — VisaEnter" }],
  }),
  component: ServicePage,
  notFoundComponent: () => (
    <PageLayout>
      <div className="py-40 text-center">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
        <p className="mt-2 text-muted-foreground">The requested service is not available.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full gradient-primary px-6 py-2.5 text-sm font-bold text-white"
        >
          Back to Home
        </Link>
      </div>
    </PageLayout>
  ),
});

function ServicePage() {
  const { service } = Route.useLoaderData<{ service: VisaEnterService }>();
  const otherServices = VISAENTER_SERVICES.filter((s) => s.slug !== service.slug);
  const heroImage = SERVICE_HERO_IMAGES[service.slug] || appointmentImg;

  return (
    <PageLayout>
      {/* Hero with Standardized Single-Line Title & Subtitle */}
      <section className="relative h-[60vh] min-h-[440px] max-h-[580px] w-full overflow-hidden bg-slate-950 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
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

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-white pt-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md mb-4">
              <span className="h-2 w-2 rounded-full animate-pulse bg-emerald-400" />
              Value Added Services
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight md:whitespace-nowrap">
              <span className="text-white">{service.name}</span>{" "}
              <span className="text-gradient">Services</span>
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-sm md:text-base text-white/85 font-light leading-relaxed md:whitespace-nowrap">
              {service.tagline} — Guaranteed precision and direct embassy coordination by VisaEnter.
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <a
                href="#service-inquiry"
                className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all"
              >
                Inquire for {service.name} <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={CONTACT_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md hover:bg-white/20 transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          {/* Centered Section Header */}
          <div className="mx-auto max-w-4xl text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-primary shadow-sm mb-3">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> SERVICE SPECIFICATIONS
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight md:whitespace-nowrap">
              Comprehensive <span className="text-gradient">{service.name} Solutions</span>
            </h2>
            <p className="mt-3 text-slate-700 font-medium text-sm md:text-base max-w-3xl mx-auto leading-relaxed md:whitespace-nowrap">
              {service.tagline} — Professional end-to-end guidance by VisaEnter specialists.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3 items-start">
            {/* Left 2 Cols: Description & Highlights */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3">
                  Overview of {service.name}
                </h3>
                <p className="text-slate-700 font-medium leading-relaxed text-sm md:text-base">
                  {service.fullDescription}
                </p>
              </div>

              {/* Highlights with Animated Staggered Cards */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                    Key Service Inclusions
                  </h3>
                  <span className="text-xs font-bold text-primary bg-sky-50 border border-sky-100 px-3 py-1 rounded-full">
                    Deliverables
                  </span>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed mb-5">
                  Complete roadmap of what is covered under our {service.name} consultation package.
                </p>

                <div className="space-y-3">
                  {service.highlights.map((hl, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ x: 6, scale: 1.01 }}
                      className="group flex items-start gap-3.5 p-4 rounded-2xl border border-sky-100 bg-white shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-200"
                    >
                      <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-sky-50 text-[#0099ff] group-hover:bg-[#0099ff] group-hover:text-white transition-colors duration-200 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 stroke-[2.4]" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800 leading-snug group-hover:text-slate-950 transition-colors">
                        {hl}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Why choose callout */}
              <div className="rounded-3xl gradient-primary p-7 sm:p-8 text-white shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2">
                  <Star className="h-4 w-4 fill-white" /> VisaEnter Quality Promise
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold">Fast Turnaround &amp; Expert Advisory</h3>
                <p className="mt-2 text-sm text-white/90 leading-relaxed font-medium">
                  We handle every service request with utmost urgency and precision to ensure you never miss an embassy or university deadline.
                </p>
                <div className="mt-6">
                  <a
                    href={CONTACT_INFO.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-slate-900 shadow hover:bg-white/95 hover:scale-105 transition-all"
                  >
                    <Phone className="h-4 w-4 text-primary" /> Call for Assistance: {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Consultation Form */}
            <div id="service-inquiry" className="lg:sticky lg:top-24">
              <ServiceInquiryForm serviceName={service.name} />
            </div>
          </div>

          {/* Other Services */}
          <div className="mt-24 border-t border-slate-100 pt-16">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-primary shadow-sm mb-3">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> VALUE ADDED SERVICES
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight md:whitespace-nowrap text-center">
                Explore Other <span className="text-gradient">VisaEnter Services</span>
              </h2>
              <p className="mt-3 text-slate-700 font-medium text-sm md:text-base max-w-3xl mx-auto leading-relaxed md:whitespace-nowrap text-center">
                Comprehensive overseas mobility solutions from admissions to flight ticketing.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {otherServices.map((s) => (
                <motion.div
                  key={s.slug}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="rounded-3xl border border-sky-100 bg-white p-6 shadow-xs hover:shadow-lg hover:border-primary/40 transition-all flex items-center justify-between group h-full"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl p-2 rounded-2xl bg-sky-50">{s.icon}</span>
                      <div>
                        <div className="font-extrabold text-slate-900 group-hover:text-primary transition-colors text-base">
                          {s.name}
                        </div>
                        <div className="text-xs text-slate-500 mt-1 line-clamp-1">{s.tagline}</div>
                      </div>
                    </div>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-sky-50 text-primary font-bold group-hover:bg-primary group-hover:text-white transition-colors shrink-0 ml-2">
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
