// VisaEnter — Central Site Data

// ---------- HERO SLIDERS ----------
export const HERO_SLIDES = [
  {
    id: 1,
    eyebrow: "Immigration Experts with 15+ Years",
    title: "Got A Visa Denial? Learn How To Succeed",
    subtitle: "Don't let a rejection stop your dreams. Our experts turn refusals into approvals.",
    bullets: ["No Interviews", "Near 100% Success Rate", "Affordable Fee"],
    cta: "Discover More",
    ctaLink: "/about",
    ctaSecondary: "Check Visa Eligibility",
    ctaSecondaryLink: "/contact",
  },
  {
    id: 2,
    eyebrow: "Study Abroad Specialists",
    title: "Planning to Study Abroad",
    subtitle: "Get complete assistance from our immigration experts to your dream university.",
    bullets: ["No Interviews", "Relocate in 30 Days", "Affordable Fee"],
    cta: "Check Visa Eligibility",
    ctaLink: "/contact",
    ctaSecondary: "Discover More",
    ctaSecondaryLink: "/about",
  },
  {
    id: 3,
    eyebrow: "Your Trusted Visa Partner",
    title: "Leave NOTHING To Risk & Everything TO US",
    subtitle: "We take care of every document, appointment, and step so you travel stress-free.",
    bullets: ["Helping Customers For 15+ Years", "Relocate in 30 Days", "Affordable Fee"],
    cta: "Discover More",
    ctaLink: "/about",
    ctaSecondary: "Contact Us",
    ctaSecondaryLink: "/contact",
  },
];

// ---------- COUNTRIES ----------
export interface CountryData {
  slug: string;
  name: string;
  flag: string;
  region: string;
  tagline: string;
  highlights: string[];
  description: string;
  requirements: string[];
  processingTime: string;
  visaFee: string;
  validityPeriod: string;
  metaTitle: string;
  metaDescription: string;
}

export const COUNTRIES_DATA: CountryData[] = [
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    region: "Europe",
    tagline: "Study, Work & Settle in Europe's Powerhouse",
    highlights: ["APS Certificate Support", "Student & Work Visa", "Schengen Zone Access"],
    description:
      "Germany offers world-class education and strong career opportunities. VisaEnter provides end-to-end support for German student, work, and business visa applications, including APS certificate guidance.",
    requirements: [
      "Valid Passport (6m+ validity)",
      "APS Certificate (for students from certain countries)",
      "Admission Letter / Employment Contract",
      "Proof of Financial Means (Blocked Account)",
      "Health Insurance Coverage",
      "Biometric Photos",
    ],
    processingTime: "4–8 weeks",
    visaFee: "€75",
    validityPeriod: "Up to 90 days (Tourist) / Multi-year (Student/Work)",
    metaTitle: "Germany Visa Services — VisaEnter",
    metaDescription:
      "Apply for a Germany student, work, or tourist visa with VisaEnter. Expert guidance on APS certificates, blocked accounts, and embassy appointments.",
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "Americas",
    tagline: "Visitor, Study & Work Permits Made Easy",
    highlights: ["Express Entry Support", "Study Permit", "5 Year Multiple Entry"],
    description:
      "Canada welcomes skilled workers and students with open arms. VisaEnter assists with eTA, visitor visas, study permits, and Express Entry immigration pathways.",
    requirements: [
      "Valid Passport",
      "Proof of Funds",
      "Purpose of Travel Letter",
      "Biometrics (fingerprint + photo)",
      "Medical Exam (if applicable)",
      "Police Certificate",
    ],
    processingTime: "2–12 weeks",
    visaFee: "CAD $100",
    validityPeriod: "Up to 10 years",
    metaTitle: "Canada Visa Services — VisaEnter",
    metaDescription:
      "Get expert help for Canada visitor visa, study permit, or Express Entry with VisaEnter. Near 100% success rate.",
  },
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    region: "Europe",
    tagline: "Discover the Heart of Europe",
    highlights: ["Schengen Visa Access", "Top University Admissions", "Work & Research Visas"],
    description:
      "France is a premier study and travel destination. VisaEnter helps you navigate the French visa process seamlessly, from Schengen short-stay to long-stay student visas.",
    requirements: [
      "Valid Passport",
      "Completed Visa Application Form",
      "Proof of Accommodation",
      "Financial Sufficiency Documents",
      "Travel Insurance (min €30,000)",
      "Admission Letter (for students)",
    ],
    processingTime: "10–15 working days",
    visaFee: "€80",
    validityPeriod: "90 days / Long-stay",
    metaTitle: "France Visa Services — VisaEnter",
    metaDescription:
      "Apply for France Schengen visa or long-stay student visa with VisaEnter. Expert guidance from India.",
  },
  {
    slug: "spain",
    name: "Spain",
    flag: "🇪🇸",
    region: "Europe",
    tagline: "Study & Explore Vibrant Spain",
    highlights: ["Schengen Zone Access", "Student Visa Support", "Business Travel"],
    description:
      "Spain offers affordable education and a vibrant culture. VisaEnter assists with Schengen, student, and business visa applications for Spain.",
    requirements: [
      "Valid Passport",
      "Visa Application Form",
      "Travel Insurance",
      "Proof of Financial Means",
      "Admission Letter (students)",
      "Accommodation Proof",
    ],
    processingTime: "10–15 working days",
    visaFee: "€80",
    validityPeriod: "90 days / Long-stay",
    metaTitle: "Spain Visa Services — VisaEnter",
    metaDescription:
      "Expert Spain visa assistance from VisaEnter. Schengen, student, and business visa applications handled end-to-end.",
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    tagline: "Study, Work & Live in the UK",
    highlights: ["Student Visa (Tier 4)", "Skilled Worker Visa", "Priority Processing"],
    description:
      "The UK remains one of the top destinations for Indian students and professionals. VisaEnter provides complete UK visa support from CAS guidance to biometrics and TB test arrangements.",
    requirements: [
      "Valid Passport",
      "Online Application (UK Visas and Immigration)",
      "TB Test Certificate (if applicable)",
      "CAS Number (for students)",
      "Bank Statements (last 6 months)",
      "Accommodation Proof",
    ],
    processingTime: "3 weeks",
    visaFee: "£490 (Student)",
    validityPeriod: "Course duration + 6 months",
    metaTitle: "UK Visa Services — VisaEnter",
    metaDescription:
      "Apply for UK student or skilled worker visa with VisaEnter. Expert guidance from Bangalore for CAS, TB test, and biometrics.",
  },
  {
    slug: "united-states",
    name: "United States",
    flag: "🇺🇸",
    region: "Americas",
    tagline: "Study, Work & Thrive in the USA",
    highlights: ["F1 Student Visa", "B1/B2 Tourist Visa", "H1B Work Visa Support"],
    description:
      "The USA is the world's most sought-after destination for education and careers. VisaEnter provides comprehensive US visa support including DS-160 filing, interview preparation, and SEVIS guidance.",
    requirements: [
      "Valid Passport",
      "DS-160 Confirmation Page",
      "SEVIS Fee Receipt",
      "Interview Appointment Letter",
      "I-20 / Admission Letter",
      "Financial Documentation",
    ],
    processingTime: "3–8 weeks",
    visaFee: "$185",
    validityPeriod: "Up to 10 years (B1/B2)",
    metaTitle: "USA Visa Services — VisaEnter",
    metaDescription:
      "Expert USA visa guidance from VisaEnter. DS-160 filing, F1 student visa, B1/B2 tourist visa — all handled by immigration experts.",
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    tagline: "Study, Work & Explore Down Under",
    highlights: ["Student Visa (Subclass 500)", "Visitor Visa (600)", "Working Holiday (417)"],
    description:
      "Australia offers world-class education and an enviable lifestyle. VisaEnter helps with ImmiAccount setup, GTE statements, health declarations, and character certificates.",
    requirements: [
      "Valid Passport",
      "ImmiAccount Profile",
      "Health Insurance",
      "Proof of Funds",
      "Character Declaration",
      "Genuine Temporary Entrant (GTE) Statement",
    ],
    processingTime: "24 hours – 30 days",
    visaFee: "AUD $710 (Student)",
    validityPeriod: "Course duration + 2 months",
    metaTitle: "Australia Visa Services — VisaEnter",
    metaDescription:
      "Apply for Australia student or visitor visa with VisaEnter. Expert help with GTE statement, ImmiAccount, and health checks.",
  },
  {
    slug: "dubai",
    name: "Dubai",
    flag: "🇦🇪",
    region: "Middle East",
    tagline: "5 Years Business Visa & Tourism",
    highlights: ["5 Years Business Visa", "Apply via Online", "Student Visa"],
    description:
      "Dubai is a global business hub offering tax-free income and world-class infrastructure. VisaEnter handles tourism, 5-year business visa, and student visa applications with online processing.",
    requirements: [
      "Valid Passport (6m+ validity)",
      "Passport-sized Photographs",
      "Proof of Travel Insurance",
      "Bank Statements",
      "Hotel Booking / Accommodation Proof",
      "Employment / Business Documents",
    ],
    processingTime: "3–5 working days",
    visaFee: "AED 300 onwards",
    validityPeriod: "30 days / 5 years (Business)",
    metaTitle: "Dubai Visa Services — VisaEnter",
    metaDescription:
      "Get your Dubai 5 Years Business Visa, Tourist Visa or Student Visa with VisaEnter. Apply via Online with quick processing.",
  },
];

// ---------- COACHING ----------
export interface CoachingData {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  syllabus: string[];
  duration: string;
  batchSize: string;
  mode: string;
  metaTitle: string;
  metaDescription: string;
}

export const COACHING_DATA: CoachingData[] = [
  {
    slug: "oet-coaching",
    name: "OET Coaching",
    tagline: "Occupational English Test Preparation",
    icon: "🏥",
    description:
      "Specialized English language test coaching for healthcare professionals planning to work in English-speaking countries.",
    fullDescription:
      "The Occupational English Test (OET) is designed for healthcare professionals seeking registration or migration to English-speaking countries like Australia, UK, NZ, and Canada. Our OET coaching program is tailored for doctors, nurses, dentists, and other healthcare workers, with a focus on real-world medical communication scenarios.",
    highlights: [
      "Healthcare-specific language training",
      "Expert faculty with medical communication experience",
      "Mock OET examinations with feedback",
      "Sub-test coaching (Listening, Reading, Writing, Speaking)",
      "Flexible batch timings",
      "Study materials included",
    ],
    syllabus: [
      "OET Listening — Medical consultation recordings",
      "OET Reading — Healthcare article comprehension",
      "OET Writing — Referral and discharge letters",
      "OET Speaking — Role-play medical scenarios",
      "Grammar for healthcare professionals",
      "Medical vocabulary mastery",
    ],
    duration: "2–3 Months",
    batchSize: "10–15 Students",
    mode: "Online & Offline",
    metaTitle: "OET Coaching — VisaEnter",
    metaDescription:
      "Join VisaEnter's expert OET coaching for healthcare professionals. Prepare for Australia, UK, and Canada healthcare registration.",
  },
  {
    slug: "tofel-coaching",
    name: "TOFEL Coaching",
    tagline: "TOFEL Exam Preparation",
    icon: "📚",
    description:
      "Comprehensive TOFEL preparation for students planning to study at universities in the USA, Canada, and other English-speaking countries.",
    fullDescription:
      "The TOFEL is recognized by thousands of universities and institutions worldwide. Our TOFEL coaching program covers all four sections of the test — Reading, Listening, Speaking, and Writing — with exam-focused techniques, timed practice tests, and one-on-one feedback.",
    highlights: [
      "All 4 sections covered in depth",
      "Official TOFEL practice tests",
      "Personalized score improvement plan",
      "Expert faculty with high score records",
      "Online and offline modes available",
      "Study materials and mock tests included",
    ],
    syllabus: [
      "TOFEL Reading — Academic passage comprehension",
      "TOFEL Listening — Lecture and conversation analysis",
      "TOFEL Speaking — Independent and integrated tasks",
      "TOFEL Writing — Integrated and independent essays",
      "Vocabulary for academic English",
      "Time management strategies",
    ],
    duration: "1.5–2 Months",
    batchSize: "12–20 Students",
    mode: "Online & Offline",
    metaTitle: "TOFEL Coaching — VisaEnter",
    metaDescription:
      "Expert TOFEL coaching at VisaEnter. Prepare for US, Canada, UK university admissions with our comprehensive TOFEL training program.",
  },
];

// ---------- VISA CATEGORIES ----------
export interface VisaCategoryData {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  fullDescription: string;
  eligibility: string[];
  documents: string[];
  processingTime: string;
  validityPeriod: string;
  popularCountries: string[];
  metaTitle: string;
  metaDescription: string;
}

export const VISA_CATEGORIES_DATA: VisaCategoryData[] = [
  {
    slug: "student-visa",
    name: "Student Visa",
    icon: "🎓",
    tagline: "Study at World-Class Universities Abroad",
    description:
      "End-to-end student visa support for undergraduate, masters, and PhD programs in Germany, UK, Canada, USA, Australia, and more.",
    fullDescription:
      "Our student visa service provides complete guidance from university shortlisting to visa approval. With 15+ years of experience, our experts have helped over 10,000 students achieve their study-abroad dreams. We handle documentation, financial proof, mock interviews, and embassy appointments.",
    eligibility: [
      "Valid offer of admission from a recognized university",
      "Proof of financial sufficiency for tuition + living costs",
      "English language proficiency (IELTS/TOFEL/OET)",
      "Valid passport with sufficient validity",
      "Academic transcripts and certificates",
      "Statement of Purpose (SOP)",
    ],
    documents: [
      "Valid Passport",
      "Admission / Offer Letter",
      "Financial Statements / Sponsor Letter",
      "Language Test Scores (IELTS / TOFEL / OET)",
      "Academic Transcripts",
      "Statement of Purpose (SOP)",
      "Biometric Photos",
      "Health Insurance",
    ],
    processingTime: "3–8 weeks",
    validityPeriod: "Duration of course",
    popularCountries: ["Germany", "United Kingdom", "Canada", "United States", "Australia", "France"],
    metaTitle: "Student Visa Services — VisaEnter",
    metaDescription:
      "Apply for a student visa to Germany, UK, Canada, USA, or Australia with VisaEnter. Expert guidance, 99% success rate, 15+ years experience.",
  },
  {
    slug: "business-visa",
    name: "Business Visa",
    icon: "💼",
    tagline: "Expand Your Business Globally",
    description:
      "Corporate and business visitor visas for meetings, conferences, trade fairs, and B2B engagements in major business hubs worldwide.",
    fullDescription:
      "VisaEnter's business visa service is designed for entrepreneurs, executives, and professionals who need to travel for meetings, conferences, trade exhibitions, and negotiations. We offer corporate documentation support, invitation letter drafting, and priority filing.",
    eligibility: [
      "Valid employment proof or business ownership documents",
      "Invitation letter from host company / organization",
      "Proof of financial sufficiency",
      "Clean travel history",
      "Purpose of travel clearly documented",
    ],
    documents: [
      "Valid Passport",
      "Business Invitation Letter",
      "Company Registration Documents",
      "Bank Statements (last 6 months)",
      "Employment Letter / Business Ownership Proof",
      "Travel Itinerary",
      "Hotel Bookings",
      "Travel Insurance",
    ],
    processingTime: "5–15 working days",
    validityPeriod: "Single/Multiple entry up to 5 years",
    popularCountries: ["Dubai", "United States", "United Kingdom", "Germany", "Canada", "Australia"],
    metaTitle: "Business Visa Services — VisaEnter",
    metaDescription:
      "Expert business visa assistance for USA, UK, Dubai, Germany, and more. VisaEnter handles invitation letters, corporate documentation, and fast processing.",
  },
  {
    slug: "tourist-visa",
    name: "Tourist Visa",
    icon: "🌍",
    tagline: "Explore the World Stress-Free",
    description:
      "Short-stay tourist visas for leisure travel, sightseeing, and family visits across 190+ countries with expert documentation support.",
    fullDescription:
      "Travelling for leisure, sightseeing, or visiting family abroad? VisaEnter makes tourist visa applications effortless. Our team prepares your entire document set, books appointments, and ensures your application meets all embassy requirements — delivering near-100% approval success.",
    eligibility: [
      "Valid passport with at least 6 months validity",
      "Confirmed return ticket",
      "Travel insurance",
      "Proof of financial means",
      "Accommodation booking",
      "Clean travel history (preferred)",
    ],
    documents: [
      "Valid Passport",
      "Return Flight Tickets",
      "Travel Insurance Certificate",
      "Bank Statements",
      "Accommodation / Hotel Bookings",
      "Detailed Travel Itinerary",
      "Biometric Photos",
      "Leave Letter from Employer (if applicable)",
    ],
    processingTime: "5–15 working days",
    validityPeriod: "15–90 days",
    popularCountries: ["Dubai", "France", "Spain", "United Kingdom", "United States", "Australia"],
    metaTitle: "Tourist Visa Services — VisaEnter",
    metaDescription:
      "Get your tourist visa with VisaEnter. Expert support for Dubai, Europe, USA, and 190+ countries. Hassle-free documentation and appointment booking.",
  },
  {
    slug: "family-visa",
    name: "Family Visa",
    icon: "👨‍👩‍👧‍👦",
    tagline: "Reunite With Your Loved Ones",
    description:
      "Dependent, spouse, partner, and family reunion visas — join your family anywhere in the world with expert support from VisaEnter.",
    fullDescription:
      "Family visas are emotionally sensitive and legally complex. VisaEnter's senior consultants specialize in genuine-relationship documentation, sponsorship undertakings, and refusal appeals. We have reunited thousands of families across the UK, Canada, Germany, Australia, and USA.",
    eligibility: [
      "Sponsor must be a citizen or permanent resident of the destination country",
      "Proof of genuine relationship (marriage/birth certificates)",
      "Sponsor's financial sufficiency",
      "Accommodation availability for the family",
      "No adverse immigration history",
    ],
    documents: [
      "Valid Passport (sponsor and applicant)",
      "Marriage / Birth Certificates",
      "Sponsor's Residency / Citizenship Proof",
      "Sponsor's Financial Documents",
      "Evidence of Relationship (photos, communication records)",
      "Accommodation Proof",
      "Sponsor's Employment Documents",
      "Police Clearance Certificate",
    ],
    processingTime: "2–6 months",
    validityPeriod: "Varies by country — 1 year renewable",
    popularCountries: ["United Kingdom", "Canada", "Germany", "United States", "Australia", "Spain"],
    metaTitle: "Family Visa Services — VisaEnter",
    metaDescription:
      "Reunite with family abroad with VisaEnter's expert family visa service. Spouse, dependent, and family reunion visas for UK, Canada, USA, Germany, and more.",
  },
];

// ---------- VISAENTER SERVICES ----------
export interface VisaEnterService {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  metaTitle: string;
  metaDescription: string;
}

export const VISAENTER_SERVICES: VisaEnterService[] = [
  {
    slug: "university-admissions",
    name: "University Admissions",
    icon: "🎓",
    tagline: "Your Path to the World's Best Universities",
    shortDescription:
      "Complete university shortlisting, application, and SOP review services for top institutions worldwide.",
    fullDescription:
      "VisaEnter's University Admissions team provides end-to-end guidance to help you secure admissions at top universities in Germany, UK, Canada, USA, and Australia. From shortlisting universities based on your profile to writing a compelling Statement of Purpose (SOP) and submitting your application — we handle everything.",
    highlights: [
      "Profile-based university shortlisting",
      "SOP and LOR writing support",
      "Application submission and tracking",
      "Scholarship guidance and advisory",
      "Admission interview preparation",
      "Post-admission visa support",
    ],
    metaTitle: "University Admissions Services — VisaEnter",
    metaDescription:
      "Get into your dream university abroad with VisaEnter. Expert SOP writing, university shortlisting, and application support for Germany, UK, Canada, USA.",
  },
  {
    slug: "visa-appointment",
    name: "Visa Appointment",
    icon: "📅",
    tagline: "Secure Your Embassy Slot Fast",
    shortDescription:
      "Priority embassy appointment booking and biometric scheduling for Germany, UK, Canada, USA, and more.",
    fullDescription:
      "Embassy appointments are often the most stressful part of the visa process. VisaEnter's visa appointment service monitors embassy slots in real-time and books your appointment at the earliest available slot. We handle VFS Global, TLScontact, and direct embassy portals.",
    highlights: [
      "Real-time embassy slot monitoring",
      "VFS Global and TLScontact support",
      "Biometric appointment scheduling",
      "Appointment rescheduling if needed",
      "Pre-appointment document checklist",
      "Escort support at VAC (if needed)",
    ],
    metaTitle: "Visa Appointment Booking — VisaEnter",
    metaDescription:
      "Book your visa appointment at the earliest slot with VisaEnter. VFS Global, TLScontact, and embassy portals — all managed by our experts.",
  },
  {
    slug: "funding",
    name: "Funding",
    icon: "💰",
    tagline: "Finance Your Dreams Abroad",
    shortDescription:
      "Scholarship research, education loan guidance, and blocked account setup for study-abroad aspirants.",
    fullDescription:
      "Funding is one of the biggest challenges for students planning to study abroad. VisaEnter's funding advisory service helps you explore scholarships, education loans, and other financial aid options. We also assist with Germany blocked accounts (Sperrkonto) and UK financial self-sufficiency calculations.",
    highlights: [
      "Scholarship database and matching",
      "Education loan advisory and referrals",
      "Germany blocked account (Sperrkonto) setup",
      "Financial document preparation for visa",
      "Sponsor letter and affidavit of support drafting",
      "Post-arrival banking and finance guidance",
    ],
    metaTitle: "Study Abroad Funding & Scholarships — VisaEnter",
    metaDescription:
      "Find scholarships and education loans for study abroad with VisaEnter. Expert guidance on Germany blocked accounts, financial documents, and aid applications.",
  },
  {
    slug: "travel-medical-insurance",
    name: "Travel & Medical Insurance",
    icon: "🏥",
    tagline: "Travel Safe, Travel Insured",
    shortDescription:
      "Comprehensive travel and medical insurance plans meeting Schengen, UK, USA, and other visa requirements.",
    fullDescription:
      "A comprehensive travel insurance policy is mandatory for most visa categories. VisaEnter partners with top-rated insurance providers to offer you plans that meet all embassy requirements — including minimum €30,000 Schengen coverage, US travel health insurance, and student health cover for the UK and Canada.",
    highlights: [
      "Schengen visa-compliant travel insurance",
      "Student health insurance for UK, Canada, Australia",
      "US travel medical insurance",
      "Emergency medical evacuation cover",
      "Trip cancellation and interruption cover",
      "Instant policy issuance and embassy-ready documents",
    ],
    metaTitle: "Travel & Medical Insurance — VisaEnter",
    metaDescription:
      "Get embassy-approved travel and medical insurance from VisaEnter. Schengen, UK student, US travel — instant policy issuance for visa applications.",
  },
  {
    slug: "accommodation",
    name: "Accommodation",
    icon: "🏠",
    tagline: "Find Your Home Away From Home",
    shortDescription:
      "Student accommodation and short-term housing assistance in Germany, UK, Canada, Australia, and other destinations.",
    fullDescription:
      "Finding the right accommodation abroad can be daunting, especially for first-time international students. VisaEnter's accommodation service connects you with verified student residences, homestays, and private flats near your university — providing the proof-of-accommodation letter you need for your visa application.",
    highlights: [
      "Verified student accommodations near universities",
      "Homestay and private flat options",
      "Accommodation letter for visa application",
      "Virtual tours available",
      "Flexible lease duration options",
      "Post-arrival settling-in support",
    ],
    metaTitle: "Student Accommodation Abroad — VisaEnter",
    metaDescription:
      "Find verified student accommodation in Germany, UK, Canada, and Australia with VisaEnter. Get accommodation letter for visa. Book from India.",
  },
  {
    slug: "flight-booking",
    name: "Flight Booking",
    icon: "✈️",
    tagline: "Best Fares, Best Timing",
    shortDescription:
      "Visa-compliant flight booking with confirmed reservation letters for embassy submission and departure.",
    fullDescription:
      "Many embassies require confirmed flight booking details as part of the visa application. VisaEnter's flight booking service provides dummy/confirmed ticket reservations for visa purposes, and books your actual travel tickets at the best available fares once your visa is approved.",
    highlights: [
      "Dummy flight reservation for visa application",
      "Confirmed ticket booking post-visa approval",
      "Best fare search across 500+ airlines",
      "Multi-city and stopover itinerary planning",
      "Seat selection and upgrade support",
      "Travel documentation and check-in assistance",
    ],
    metaTitle: "Flight Booking Services — VisaEnter",
    metaDescription:
      "Book flights for your study or travel abroad with VisaEnter. Dummy reservation letters for visa + best-fare actual bookings after approval.",
  },
];

// ---------- TESTIMONIALS ----------
export const TESTIMONIALS = [
  {
    name: "Mazhar",
    role: "Germany Student Visa",
    avatar: "M",
    rating: 5,
    review:
      "When I was researching for companies that could assist me with visa appointment and visa application filing for a Germany Student Visa I was recommended to contact Guide visa. This proved to be great advice. Guide Visa provided invaluable assistance throughout the process and finally got my visa in just 3 weeks. I would not hesitate to recommend it to my friends and colleagues.",
  },
  {
    name: "Shajauddin",
    role: "Approved Visa Client",
    avatar: "S",
    rating: 5,
    review:
      "The GuideVisa team is extremely professional and knowledgeable. I really had challenges to secure my visa from Pakistan but when I contacted GuideVisa team from the day one I felt I am in safe hands. Some unusual circumstances in my application were thoroughly analyzed and taken care. Hence, I am now with my approved visa.",
  },
  {
    name: "Neha",
    role: "Satisfied Client",
    avatar: "N",
    rating: 5,
    review:
      "I appreciate everything that Guide Visa team have done for me. I am extremely satisfied with your efforts and I am confident that I will come back to Guide Visa in the future should I need any services.",
  },
];

// ---------- AWARDS ----------
export const AWARDS = [
  {
    year: "2022",
    title: "2022 AWARD – Visa Guarantee",
    description: "Recognized for near-100% visa approval rate and client satisfaction excellence.",
    icon: "🏆",
  },
  {
    year: "2018",
    title: "2018 AWARD – Quality Management",
    description: "Awarded for ISO-compliant documentation processes and systematic case handling.",
    icon: "⭐",
  },
];

// ---------- FAQS ----------
export const FAQ_ITEMS = [
  {
    question: "What is the APS certificate and why do I need it as a student from Germany?",
    answer:
      "To apply for the APS certificate, you will need to submit your educational documents, such as school leaving certificates, diplomas, and transcripts, to the German diplomatic missions in China. It is recommended to contact the embassy or consulate directly for detailed application procedures and requirements.",
  },
  {
    question: "Can I use the APS certificate for multiple applications to different Chinese universities?",
    answer:
      "Yes, the APS certificate can be used for multiple applications during its validity period. It verifies the authenticity of your educational credentials and can be submitted with multiple university applications.",
  },
  {
    question: "What is the success rate for visa applications handled by VisaEnter?",
    answer:
      "VisaEnter maintains a near 99% visa success rate, achieved through thorough case analysis, meticulous documentation, and 15+ years of immigration expertise. Each case is individually assessed and strategies are developed based on the applicant's specific background and immigration situation.",
  },
  {
    question: "How long does the visa process take?",
    answer:
      "Processing times vary by country and visa category. Tourist visas typically take 5–15 working days, student visas take 3–8 weeks, and work visas can take 1–4 months. VisaEnter monitors your application and provides real-time updates throughout the process.",
  },
  {
    question: "Do you offer post-visa services like accommodation and flight booking?",
    answer:
      "Yes! VisaEnter is a one-stop solution. Beyond visa processing, we offer university admissions support, accommodation finding, flight booking, travel and medical insurance, and funding guidance — everything you need for a smooth relocation abroad.",
  },
  {
    question: "What happens if my visa is rejected?",
    answer:
      "In the unlikely event of a rejection, VisaEnter's expert team analyzes the refusal reason in detail and develops a reapplication strategy. We handle appeals and resubmissions at no additional consultation fee. Our near 99% success rate is a testament to our thorough case preparation.",
  },
];

// ---------- CONTACT INFO ----------
export const CONTACT_INFO = {
  phone: "+91-81252 98332",
  phoneHref: "tel:+918125298332",
  whatsappHref: "https://wa.me/918125298332?text=Hello%20VisaEnter%2C%20I%20need%20help%20with%20my%20visa%20application.",
  email: "info@visaenter.com",
  emailHref: "mailto:info@visaenter.com",
  address: "#254, Coffee Board Layout, Main Road, Hebbal, Kempapura, Bangalore-24",
  country: "India",
  mapLink: "https://www.google.com/maps/search/Hebbal+Kempapura+Bangalore",
};
