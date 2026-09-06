import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Check,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
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

const SERVICE_OPTIONS = [
  { value: "Germany (Student / Work / APS)", label: "Germany", sub: "Student / Work / APS", icon: "🇩🇪" },
  { value: "United Kingdom", label: "United Kingdom", sub: "Student & Skilled Worker", icon: "🇬🇧" },
  { value: "Canada (Study / Express Entry PR)", label: "Canada", sub: "Study / Express Entry PR", icon: "🇨🇦" },
  { value: "United States (F1 / B1-B2)", label: "United States", sub: "F1 Student / B1-B2 Visitor", icon: "🇺🇸" },
  { value: "Australia (Subclass 500 / PR)", label: "Australia", sub: "Subclass 500 / PR", icon: "🇦🇺" },
  { value: "Dubai (UAE Business / Golden Visa)", label: "Dubai (UAE)", sub: "Business / Golden Visa", icon: "🇦🇪" },
  { value: "IELTS / PTE / OET Coaching", label: "Language Coaching", sub: "IELTS / PTE / OET Masterclass", icon: "🎓" },
  { value: "Visa Refusal Consultation", label: "Refusal Overturn", sub: "Refusal Analysis & Re-filing", icon: "🛡️" },
  { value: "General Visa Inquiry", label: "General Inquiry", sub: "Consultation & Profile Check", icon: "🌐" },
];

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Germany (Student / Work / APS)",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
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

  const selectedOption =
    SERVICE_OPTIONS.find((opt) => opt.value === form.service) || SERVICE_OPTIONS[0];

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

    toast.success("Inquiry received! Connecting with senior visa counselor...");

    const formattedMessage = `*New Contact Inquiry — VisaEnter Bangalore*
----------------------------------------
*Applicant Name:* ${form.name.trim()}
*Phone Number:* ${form.phone.trim()}
*Email Address:* ${form.email.trim()}
*Service / Destination:* ${form.service}
*Message / Case Details:* ${form.message.trim() || "Interested in consultation and profile check."}
----------------------------------------
Please schedule my consultation appointment.`;

    const whatsappUrl = `https://wa.me/918125298332?text=${encodeURIComponent(formattedMessage)}`;

    setIsSubmitting(false);
    setSent(true);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] max-h-[580px] w-full overflow-hidden bg-slate-950 flex items-center">
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

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-white pt-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md mb-4">
            <span className="h-2 w-2 rounded-full animate-pulse bg-emerald-400" />
            CONTACT WITH US
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight md:whitespace-nowrap">
            Feel Free to <span className="text-gradient">Get in Touch with Us</span>
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-sm md:text-base text-white/85 font-light leading-relaxed md:whitespace-nowrap">
            Our senior visa advisors are available to answer your queries and plan your application roadmap.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-primary shadow-sm mb-3">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> VISAENTER OFFICE
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight md:whitespace-nowrap">
              Connect With Our <span className="text-gradient">Bangalore Office</span>
            </h2>
            <p className="mt-3 text-slate-700 font-medium text-sm md:text-base max-w-3xl mx-auto leading-relaxed md:whitespace-nowrap">
              Visit our office in Hebbal Kempapura or call us directly. We provide in-person and online video consultations.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Contact Details with Electric Blue Enlarge on Hover */}
            <div className="space-y-4">
              <div className="group flex items-start gap-5 rounded-3xl border border-sky-100 bg-white p-6 shadow-xs hover:border-primary/40 hover:shadow-md transition-all">
                <div className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-[#0099ff] text-white shadow-md shadow-sky-500/20 group-hover:scale-120 group-hover:shadow-xl group-hover:shadow-sky-500/35 transition-transform duration-300 ease-out">
                  <MapPin className="h-6 w-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Office Address</div>
                  <div className="mt-1 font-extrabold text-slate-900 text-base leading-relaxed">
                    {CONTACT_INFO.address}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Country: {CONTACT_INFO.country}</div>
                </div>
              </div>

              <div className="group flex items-start gap-5 rounded-3xl border border-sky-100 bg-white p-6 shadow-xs hover:border-primary/40 hover:shadow-md transition-all">
                <div className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-[#0099ff] text-white shadow-md shadow-sky-500/20 group-hover:scale-120 group-hover:shadow-xl group-hover:shadow-sky-500/35 transition-transform duration-300 ease-out">
                  <Phone className="h-6 w-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</div>
                  <a href={CONTACT_INFO.phoneHref} className="mt-1 text-base font-extrabold text-primary block hover:underline">
                    {CONTACT_INFO.phone}
                  </a>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Mon–Sat, 9:30am–7:00pm</div>
                </div>
              </div>

              <div className="group flex items-start gap-5 rounded-3xl border border-sky-100 bg-white p-6 shadow-xs hover:border-primary/40 hover:shadow-md transition-all">
                <div className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-[#0099ff] text-white shadow-md shadow-sky-500/20 group-hover:scale-120 group-hover:shadow-xl group-hover:shadow-sky-500/35 transition-transform duration-300 ease-out">
                  <Mail className="h-6 w-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</div>
                  <a href={CONTACT_INFO.emailHref} className="mt-1 text-base font-extrabold text-primary block hover:underline">
                    {CONTACT_INFO.email}
                  </a>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Fast response within 2 hours</div>
                </div>
              </div>

              <div className="group flex items-start gap-5 rounded-3xl border border-emerald-100 bg-white p-6 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-[#25D366] text-white shadow-md shadow-emerald-500/20 group-hover:scale-120 group-hover:shadow-xl group-hover:shadow-emerald-500/35 transition-transform duration-300 ease-out">
                  <MessageCircle className="h-6 w-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">WhatsApp Chat</div>
                  <a
                    href={CONTACT_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-base font-extrabold text-[#25D366] block hover:underline"
                  >
                    Chat Directly on WhatsApp
                  </a>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Instant case assessment &amp; checklist</div>
                </div>
              </div>
            </div>

            {/* Form with Full Validation & Animated Custom Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-sky-100 bg-white p-7 sm:p-9 shadow-xl shadow-sky-500/5"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Send Us a Message
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Advisors
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Fill out the form below to receive a call from our immigration counselors.
              </p>

              {sent ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center text-emerald-900 space-y-4">
                  <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-extrabold">Message Sent Successfully!</h4>
                  <p className="text-sm text-emerald-700 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting VisaEnter. We have opened WhatsApp so you can connect directly with our counselor, and we will also follow up via phone shortly.
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => setSent(false)}
                      className="rounded-full gradient-primary px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:scale-105 transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={CONTACT_INFO.phoneHref}
                      className="rounded-full bg-white border border-emerald-300 px-6 py-2.5 text-xs font-bold text-slate-800 shadow-sm hover:bg-slate-50 transition-all"
                    >
                      Call Now: {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              ) : (
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
                        placeholder="Enter your full name"
                        className={`w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-sm outline-none transition-all ${
                          touched.name && errors.name
                            ? "border-rose-400 bg-rose-50/30 text-rose-900 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                            : "border-slate-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                        }`}
                      />
                      {touched.name && errors.name && (
                        <AlertCircle className="absolute right-3.5 top-3.5 h-4 w-4 text-rose-500 pointer-events-none" />
                      )}
                    </div>
                    {touched.name && errors.name && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-1.5 text-xs text-rose-600 font-medium">
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Phone & Email in 2 Cols */}
                  <div className="grid gap-4 sm:grid-cols-2">
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
                          className={`w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-sm outline-none transition-all ${
                            touched.phone && errors.phone
                              ? "border-rose-400 bg-rose-50/30 text-rose-900 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                              : "border-slate-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                          }`}
                        />
                        {touched.phone && errors.phone && (
                          <AlertCircle className="absolute right-3.5 top-3.5 h-4 w-4 text-rose-500 pointer-events-none" />
                        )}
                      </div>
                      {touched.phone && errors.phone && (
                        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-1.5 text-xs text-rose-600 font-medium">
                          {errors.phone}
                        </motion.p>
                      )}
                    </div>

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
                          className={`w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-sm outline-none transition-all ${
                            touched.email && errors.email
                              ? "border-rose-400 bg-rose-50/30 text-rose-900 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                              : "border-slate-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                          }`}
                        />
                        {touched.email && errors.email && (
                          <AlertCircle className="absolute right-3.5 top-3.5 h-4 w-4 text-rose-500 pointer-events-none" />
                        )}
                      </div>
                      {touched.email && errors.email && (
                        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-1.5 text-xs text-rose-600 font-medium">
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Interested Country or Service Custom Animated Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Interested Country or Service <span className="text-rose-500">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className={`w-full rounded-xl border bg-slate-50/70 hover:bg-slate-50 px-4 py-3 text-sm flex items-center justify-between outline-none transition-all cursor-pointer ${
                        isDropdownOpen
                          ? "border-primary ring-2 ring-primary/20 bg-white"
                          : "border-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden text-left">
                        <span className="text-base shrink-0">{selectedOption.icon}</span>
                        <span className="font-bold text-slate-900 truncate">{selectedOption.label}</span>
                        <span className="text-slate-500 text-xs hidden sm:inline truncate">({selectedOption.sub})</span>
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
                          {SERVICE_OPTIONS.map((opt) => {
                            const isSelected = form.service === opt.value;
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => {
                                  handleChange("service", opt.value);
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full px-4 py-2.5 text-left flex items-center justify-between hover:bg-sky-50/80 transition-colors cursor-pointer text-sm ${
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

                  {/* Message / Case Details */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Message / Case Details
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="Provide any details regarding your current visa status, refusals (if any), course intake, or travel timeline..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 resize-none text-slate-900"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl gradient-primary py-3.5 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Submitting Inquiry...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map Location Section */}
      <section className="pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-sky-100 bg-white overflow-hidden shadow-xl shadow-sky-500/5">
            <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-primary">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> BANGALORE HEADQUARTERS
                </span>
                <h3 className="mt-2 text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Visit Our Hebbal Kempapura Office
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 font-medium">
                  {CONTACT_INFO.address}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Hebbal+Kempapura+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-xs font-bold text-white shadow-md hover:scale-105 transition-all shrink-0"
                >
                  Open in Google Maps <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="w-full h-[400px] sm:h-[450px] relative bg-slate-100">
              <iframe
                title="VisaEnter Bangalore Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7348995324395!2d77.58988631524317!3d13.040183190810767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179e8c460d57%3A0x639db5c5a0445d4e!2sHebbal%20Kempapura%2C%20Bengaluru%2C%20Karnataka%20560024!5e0!3m2!1sen!2sin!4v1709740000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
