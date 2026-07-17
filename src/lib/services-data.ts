import tourist from "@/assets/service-tourist.jpg";
import business from "@/assets/service-business.jpg";
import student from "@/assets/service-student.jpg";
import family from "@/assets/service-family.jpg";
import work from "@/assets/service-work.jpg";
import residency from "@/assets/service-residency.jpg";
import type { Service } from "@/components/ServiceCard";

export const SERVICES: (Service & {
  fullDescription: string;
  benefits: string[];
  process: { step: string; detail: string }[];
  duration: string;
  price: string;
})[] = [
  {
    slug: "tourist-visa",
    title: "Tourist Visa",
    tagline: "Fast, hassle-free tourist visas",
    description: "Short-stay travel visas for leisure, exploration and tourism across 190+ countries with expert guidance.",
    image: tourist,
    badge: "Popular",
    badgeColor: "gold",
    fullDescription: "Whether you're planning a European getaway, a US adventure, or an exotic Asia trip, our tourist visa specialists ensure you get approved the first time. We handle document review, appointment booking, and interview prep end-to-end.",
    benefits: ["190+ destinations supported", "Document checklist tailored to you", "Interview preparation included", "Priority appointment booking", "Multi-entry visa options", "24/7 case tracking"],
    process: [
      { step: "Free Consultation", detail: "We assess your travel plans, eligibility, and best-fit visa category." },
      { step: "Document Preparation", detail: "Personalised checklist, form-filling and financial statement review." },
      { step: "Appointment & Biometrics", detail: "We book the earliest embassy slot and prep you for biometrics." },
      { step: "Approval & Delivery", detail: "Track decision in real time and receive your passport securely." },
    ],
    duration: "5–15 business days",
    price: "From $99",
  },
  {
    slug: "business-visa",
    title: "Business Visa",
    tagline: "Global mobility for professionals",
    description: "Corporate and business visitor visas for meetings, conferences, negotiations, and B2B engagements worldwide.",
    image: business,
    badge: "Popular",
    badgeColor: "teal",
    fullDescription: "Move fast across borders for business. We coordinate invitation letters, corporate documentation, and multi-country Schengen or APEC solutions for executives and teams.",
    benefits: ["Corporate discount packages", "Multi-country coverage", "Invitation letter drafting", "Executive fast-track service", "Team application handling", "Dedicated account manager"],
    process: [
      { step: "Corporate Onboarding", detail: "KYC and travel policy alignment for your organisation." },
      { step: "Documentation", detail: "Company letters, itinerary, and financial guarantees." },
      { step: "Filing", detail: "Priority filing with the appropriate consulate." },
      { step: "Delivery", detail: "Doorstep passport delivery to your office." },
    ],
    duration: "3–10 business days",
    price: "From $149",
  },
  {
    slug: "student-visa",
    title: "Student Visa",
    tagline: "Study-abroad visa specialists",
    description: "End-to-end student visa support for undergraduate, masters and PhD study across the US, UK, Canada, Australia and EU.",
    image: student,
    badge: "Popular",
    badgeColor: "emerald",
    fullDescription: "From SOP polishing to financial documentation and mock interviews, our student visa mentors have guided 25,000+ students to their dream universities globally.",
    benefits: ["SOP review by experts", "Financial documentation help", "Mock visa interviews", "SEVIS / CAS guidance", "Post-arrival support", "Scholarship advisory"],
    process: [
      { step: "University Confirmation", detail: "Verify offer, tuition and living cost estimates." },
      { step: "Financial Proof", detail: "Sponsor letters, loans, and bank statement structuring." },
      { step: "Application Filing", detail: "DS-160 / CAS / GTE forms and payment coordination." },
      { step: "Interview Coaching", detail: "1-on-1 mock interviews with a former visa officer." },
    ],
    duration: "3–8 weeks",
    price: "From $199",
  },
  {
    slug: "family-visa",
    title: "Family & Spouse Visa",
    tagline: "Reunite with loved ones",
    description: "Dependent, spouse, partner and family reunion visas — get your loved ones with you, wherever life takes you.",
    image: family,
    fullDescription: "Family visa cases are emotional and complex. Our senior consultants specialise in genuine-relationship documentation, sponsorship undertakings and appeals if a case is refused.",
    benefits: ["Spouse & partner visas", "Dependent children support", "Parent visa options", "Relationship evidence guidance", "Appeals & refusals", "Post-arrival settlement help"],
    process: [
      { step: "Eligibility Check", detail: "Sponsor income, relationship duration and evidence review." },
      { step: "Evidence Bundle", detail: "Photos, communications, joint finances presentation." },
      { step: "Filing", detail: "Country-specific forms with senior consultant sign-off." },
      { step: "Decision Support", detail: "Follow-up, appeals or reapplication if needed." },
    ],
    duration: "2–6 months",
    price: "From $299",
  },
  {
    slug: "work-visa",
    title: "Work Permit",
    tagline: "Career mobility, worldwide",
    description: "Skilled worker, H-1B, Tier 2, Blue Card, LMIA and specialist work permits with employer coordination.",
    image: work,
    fullDescription: "Whether you have an offer in hand or are exploring points-based migration, we handle the paperwork with your employer and the immigration authority.",
    benefits: ["H-1B / Tier 2 / Blue Card", "Employer coordination", "Points calculator", "Credential evaluation", "Family dependants", "Pathway to residency"],
    process: [
      { step: "Offer Review", detail: "Contract, salary and role classification check." },
      { step: "Employer Filing", detail: "Sponsorship / LMIA / CoS coordination." },
      { step: "Visa Application", detail: "Applicant filing and biometric booking." },
      { step: "Relocation", detail: "Landing, SSN/NIN, and settlement support." },
    ],
    duration: "1–4 months",
    price: "From $399",
  },
  {
    slug: "residency",
    title: "Permanent Residency",
    tagline: "Your second home, secured",
    description: "PR pathways, golden visas, citizenship by investment and long-term settlement in tier-1 countries.",
    image: residency,
    fullDescription: "Whether it's Portugal Golden Visa, Canadian Express Entry, or UAE Golden Residency — our senior partners have handled hundreds of high-net-worth cases end-to-end.",
    benefits: ["Golden visa programs", "Express Entry (Canada)", "EB-5 (USA) advisory", "Citizenship by investment", "Tax residency planning", "Family inclusion"],
    process: [
      { step: "Strategy Session", detail: "Best-fit country and program based on goals and profile." },
      { step: "Due Diligence", detail: "Source-of-funds, KYC and background clearance." },
      { step: "Investment / Filing", detail: "Investment routing or points-based application." },
      { step: "Residency Card", detail: "Landing, ID card issuance and renewal roadmap." },
    ],
    duration: "6–18 months",
    price: "Custom quote",
  },
];

export function getService(slug: string) {
  return SERVICES.find(s => s.slug === slug);
}
