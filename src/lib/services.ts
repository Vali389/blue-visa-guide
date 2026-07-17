import schengen from "@/assets/service-schengen.jpg";
import us from "@/assets/service-us.jpg";
import canada from "@/assets/service-canada.jpg";
import uk from "@/assets/service-uk.jpg";
import australia from "@/assets/service-australia.jpg";
import japan from "@/assets/service-japan.jpg";
import type { ServiceCardData } from "@/components/site/ServiceCard";

export const SERVICES: (ServiceCardData & {
  longDescription: string;
  processingTime: string;
  validity: string;
  fee: string;
  requirements: string[];
})[] = [
  {
    slug: "schengen-visa",
    image: schengen,
    title: "Schengen Visa",
    tagline: "27 EUROPEAN COUNTRIES — ONE VISA",
    description:
      "Unified short-stay visa granting entry across the entire Schengen Area for tourism, business or family visits.",
    badge: "POPULAR",
    accentColor: "#c9a24b",
    longDescription:
      "The Schengen Visa allows holders to travel freely between 27 European countries for up to 90 days within a 180-day period. Ideal for tourism, business meetings, family visits and short courses.",
    processingTime: "15 working days",
    validity: "Up to 90 days / 180",
    fee: "€90",
    requirements: [
      "Valid passport (issued within last 10 years)",
      "Completed application form",
      "Two recent biometric photos",
      "Travel medical insurance (min. €30,000)",
      "Proof of accommodation & itinerary",
      "Proof of financial means",
    ],
  },
  {
    slug: "us-visa",
    image: us,
    title: "US Visa",
    tagline: "TOURIST · BUSINESS · STUDENT",
    description:
      "Comprehensive guidance for B1/B2, F1, H1B and every major US non-immigrant visa category.",
    badge: "POPULAR",
    accentColor: "#2f7f9b",
    longDescription:
      "The United States offers several visa categories depending on your purpose of visit. Our guide walks you through DS-160 filing, interview preparation, supporting documents and expected wait times.",
    processingTime: "3–8 weeks",
    validity: "Up to 10 years",
    fee: "$185",
    requirements: [
      "Valid passport",
      "DS-160 confirmation page",
      "Interview appointment letter",
      "Photograph meeting US specs",
      "Proof of ties to home country",
      "Financial documentation",
    ],
  },
  {
    slug: "canada-visa",
    image: canada,
    title: "Canada Visa",
    tagline: "VISITOR · WORK · STUDY PERMITS",
    description:
      "eTA, Visitor Visa, Study Permit and Express Entry — step-by-step for every profile.",
    badge: "TRENDING",
    accentColor: "#c0392b",
    longDescription:
      "From short visits to permanent residency via Express Entry, Canada offers welcoming pathways. This service covers eligibility scoring, document checklists, biometrics and processing centres.",
    processingTime: "2–12 weeks",
    validity: "Up to 10 years",
    fee: "CAD $100",
    requirements: [
      "Passport valid throughout stay",
      "Proof of funds",
      "Purpose of travel letter",
      "Biometrics (fingerprint + photo)",
      "Medical exam (if applicable)",
      "Police certificate",
    ],
  },
  {
    slug: "uk-visa",
    image: uk,
    title: "UK Visa",
    tagline: "STANDARD VISITOR · SKILLED WORKER",
    description:
      "Standard Visitor, Skilled Worker, Student and Family visas — with priority processing options.",
    accentColor: "#1e3a8a",
    longDescription:
      "The UK visa system is points-based. We help you assess eligibility, prepare online applications and organise required English tests, TB certificates and sponsor documents.",
    processingTime: "3 weeks",
    validity: "6 months – 5 years",
    fee: "£115",
    requirements: [
      "Valid passport",
      "Online application form",
      "TB test certificate (if applicable)",
      "Sponsor certificate (work/study)",
      "Bank statements (last 6 months)",
      "Accommodation proof",
    ],
  },
  {
    slug: "australia-visa",
    image: australia,
    title: "Australia Visa",
    tagline: "ETA · VISITOR · WORKING HOLIDAY",
    description:
      "Fast eVisitor, Visitor 600, Working Holiday 417/462 and Skilled Migration pathways.",
    badge: "NEW",
    accentColor: "#0d9488",
    longDescription:
      "Australia processes most visitor visas online. Our specialists prepare your ImmiAccount application, health & character declarations and Genuine Temporary Entrant statement.",
    processingTime: "24 hours – 30 days",
    validity: "3 – 12 months",
    fee: "AUD $190",
    requirements: [
      "Valid passport",
      "ImmiAccount profile",
      "Health insurance",
      "Proof of funds",
      "Character declaration",
      "Purpose statement",
    ],
  },
  {
    slug: "japan-visa",
    image: japan,
    title: "Japan Visa",
    tagline: "TOURIST · BUSINESS · WORKING",
    description:
      "Single and multiple-entry visas plus complete guidance for Working Holiday and Specified Skilled Worker.",
    accentColor: "#be123c",
    longDescription:
      "Japan requires visas from many nationalities. We arrange COE issuance where needed, embassy appointments and prepare itineraries that meet Japanese immigration expectations.",
    processingTime: "5–10 working days",
    validity: "3 months – 5 years",
    fee: "¥3,000",
    requirements: [
      "Passport valid 6+ months",
      "Visa application form",
      "Photo (45x45mm)",
      "Flight & hotel bookings",
      "Bank statements",
      "Certificate of Eligibility (COE)",
    ],
  },
];

export const findService = (slug: string) => SERVICES.find((s) => s.slug === slug);
