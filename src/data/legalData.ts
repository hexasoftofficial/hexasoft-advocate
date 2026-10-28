export interface FeatureItem {
  id: string;
  number: number;
  title: string;
  shortDesc: string;
  category: 'core' | 'court' | 'finance' | 'portal';
  fullDescription: string;
  indianContext: string;
  highlights: string[];
}

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'client-management',
    number: 1,
    title: 'Client Management',
    shortDesc: 'Keep complete client information, documents and billing details organized.',
    category: 'core',
    fullDescription: 'Comprehensive CRM tailored for legal practices. Maintain individual, corporate, and institutional client portfolios with auto-generated Client IDs, KYC documents, contact hierarchy, and matter history.',
    indianContext: 'Track client Aadhaar/PAN, corporate GSTIN, authorized signatory letters, and conflict-of-interest checks before onboarding.',
    highlights: ['Auto-generated Client IDs (e.g. CLI-2026-042)', 'KYC & Identification records', 'Multi-contact corporate hierarchies', 'Complete billing & matter ledger']
  },
  {
    id: 'case-management',
    number: 2,
    title: 'Case Management',
    shortDesc: 'Create, organize and track the complete lifecycle of every legal case.',
    category: 'core',
    fullDescription: 'Centralize every case from filing to final decree. Track case types, CNR references, suit numbers, opposing counsels, stage progression, prayer details, and court orders.',
    indianContext: 'Tailored for Indian civil suits, writ petitions, criminal appeals, SLPs, consumer complaints, and arbitration matters across forums.',
    highlights: ['Case stage tracking (Pleadings, Evidence, Arguments)', 'Opposing party & counsel details', 'CNR / Case Number tagging', 'Lead & assisting advocate assignment']
  },
  {
    id: 'court-management',
    number: 3,
    title: 'Court Management',
    shortDesc: 'Maintain court, judge and case-related information in one place.',
    category: 'court',
    fullDescription: 'Maintain a directory of courts, tribunals, police stations, and quasi-judicial authorities. Track court complexes, room numbers, presiding officers, and courtroom registries.',
    indianContext: 'Pre-structured for Supreme Court of India, High Courts, District & Sessions Courts, NCLT, NCLAT, RERA, Consumer Commissions, and DRT.',
    highlights: ['Court complex & courtroom index', 'Judge & Bench designations', 'Jurisdiction & forum categorization', 'Court registry contact notes']
  },
  {
    id: 'hearing-management',
    number: 4,
    title: 'Hearing Management',
    shortDesc: 'Schedule and monitor important hearings with reminders.',
    category: 'court',
    fullDescription: 'Never miss a cause list appearance. Log hearing dates, bench items, cause list serial numbers, proceedings summaries, next steps, and interim relief granted.',
    indianContext: 'Daily hearing board aligned with Indian cause list numbering (Item No, Court No, Daily Board, Supplementary Board).',
    highlights: ['Daily cause list diary', 'Bench item numbers & courtroom alert', 'Hearing stage & outcome logs', 'Automated hearing reminders']
  },
  {
    id: 'document-management',
    number: 5,
    title: 'Document Management',
    shortDesc: 'Securely organize case and client documents.',
    category: 'core',
    fullDescription: 'Store petitions, replies, rejoinders, affidavits, annexures, Vakalatnamas, certified orders, and evidence in bank-grade encrypted cloud storage.',
    indianContext: 'Structured folders for Vakalatnama, Plaint, Written Statement, Replication, Evidence Affidavits, and Certified Copy orders.',
    highlights: ['Matter-wise & client-wise folder trees', 'Vakalatnama & Affidavit repository', 'Version history for draft petitions', 'Instant search by keyword & tag']
  },
  {
    id: 'tasks-calendar',
    number: 6,
    title: 'Tasks & Calendar',
    shortDesc: 'Manage tasks, deadlines, hearings and important activities.',
    category: 'core',
    fullDescription: 'Interactive legal calendar unifying limitation deadlines, court appearances, drafting tasks, conferences, and filing dates with priority tagging.',
    indianContext: 'Calculate limitation periods under the Limitation Act 1963, statutory reply windows, and appeal filing deadlines.',
    highlights: ['Unified court diary & master calendar', 'Limitation period alerts', 'Task delegation with due dates', 'Hearing clash detector']
  },
  {
    id: 'time-tracking',
    number: 7,
    title: 'Time Tracking',
    shortDesc: 'Track time spent on legal work and billable hours.',
    category: 'finance',
    fullDescription: 'Log billable and non-billable hours per associate, partner, and matter. Track research time, drafting hours, client conferences, and courtroom appearances.',
    indianContext: 'Support for hourly billing, per-appearance fees, retainer billing, and senior advocate briefing session tracking.',
    highlights: ['Stopwatch timer & manual timesheets', 'Billable vs non-billable categorization', 'Matter-specific billing rates', 'Time approval workflow for partners']
  },
  {
    id: 'expense-management',
    number: 8,
    title: 'Expense Management',
    shortDesc: 'Track case-related and operational expenses.',
    category: 'finance',
    fullDescription: 'Record every out-of-pocket disbursement and operational cost. Tag expenses to specific cases for client reimbursement or practice overhead.',
    indianContext: 'Track court fees, stamp papers, clerkage, process fees, certified copy charges, filing disbursements, and outstation travel.',
    highlights: ['Case-linked disbursement tracking', 'Receipt attachment upload', 'Clerkage & court fee logs', 'Reimbursable expense invoicing']
  },
  {
    id: 'billing-invoicing',
    number: 9,
    title: 'Billing & Invoicing',
    shortDesc: 'Create invoices, calculate charges and track billing.',
    category: 'finance',
    fullDescription: 'Generate professional legal fee bills in seconds. Automatically calculate professional fees, conference charges, drafting fees, and disbursements.',
    indianContext: 'GST-ready invoicing compliant with Indian tax norms (SAC codes 998211/998212, Reverse Charge Mechanism - RCM notes, and state GST split).',
    highlights: ['Sequential tax invoices with SAC code', 'GST calculation (CGST, SGST, IGST)', 'Retainer & milestone billing options', 'Custom firm branding & letterhead']
  },
  {
    id: 'payment-management',
    number: 10,
    title: 'Payment Management',
    shortDesc: 'Track full payments, partial payments, installments and outstanding amounts.',
    category: 'finance',
    fullDescription: 'Maintain complete clarity on receivables. Track stage-wise installment payments, advance retainers, partial payments, and overdue balances.',
    indianContext: 'Record NEFT/RTGS, UPI, cheque numbers with bank clearing dates, and cash receipts with instant payment voucher generation.',
    highlights: ['Partial payments & installment schedules', 'Outstanding aging reports', 'Instant digital payment receipts', 'Automated payment follow-up reminders']
  },
  {
    id: 'client-portal',
    number: 11,
    title: 'Client Portal',
    shortDesc: 'Give clients secure access to relevant cases, documents and billing information.',
    category: 'portal',
    fullDescription: 'Provide your clients with a modern, self-service portal. Clients can view their case timeline, next hearing dates, approved documents, and invoice history.',
    indianContext: 'Drastically reduce repetitive phone calls from clients asking for the next date of hearing or order sheet copy.',
    highlights: ['Restricted case status timeline', 'Downloadable interim orders & filings', 'Invoice view & payment status', 'Secure message exchange']
  },
  {
    id: 'reports-analytics',
    number: 12,
    title: 'Reports & Analytics',
    shortDesc: 'Understand cases, finances, clients and practice performance.',
    category: 'finance',
    fullDescription: 'Executive dashboards showing practice health: case win/disposal rates, upcoming hearing volume, monthly fee collections, advocate workload, and aged receivables.',
    indianContext: 'Analyze revenue per court forum (High Court vs District Court vs NCLT) and track practice growth year-over-year.',
    highlights: ['Monthly practice revenue & collections', 'Case stage breakdown & disposal velocity', 'Advocate workload & billable ratio', 'Comprehensive practice audit export']
  },
  {
    id: 'team-permissions',
    number: 13,
    title: 'Team & Permissions',
    shortDesc: 'Control access using roles and permissions.',
    category: 'core',
    fullDescription: 'Role-based access control protecting client confidentiality. Granular permission sets for Managing Partners, Senior Advocates, Associates, Interns, and Accounts staff.',
    indianContext: 'Ensure sensitive matters (such as matrimonial, criminal, or proprietary commercial disputes) are restricted only to designated team members.',
    highlights: ['4 Default Roles: Admin, Advocate, Team Member, Client', 'Module-level read/write/delete controls', 'Matter-specific team access gating', 'Comprehensive user activity audit trail']
  },
  {
    id: 'notifications-reminders',
    number: 14,
    title: 'Notifications & Reminders',
    shortDesc: 'Stay updated about hearings, tasks and payments.',
    category: 'court',
    fullDescription: 'Automated notification engine keeping your entire chamber synchronized. Receive daily morning briefs, upcoming hearing alerts, and pending task alerts.',
    indianContext: 'Configurable alerts sent ahead of court hours so advocates and clerks are fully prepped with files before 10:30 AM.',
    highlights: ['Morning court hearing digest', 'Limitation deadline alerts', 'Payment due notifications', 'SMS / Email & WhatsApp trigger hooks']
  },
  {
    id: 'multi-language',
    number: 15,
    title: 'Multi-language',
    shortDesc: 'Support a multilingual legal practice experience.',
    category: 'portal',
    fullDescription: 'Empower your chambers to navigate and communicate in multiple languages, making case intake and client interactions accessible across states.',
    indianContext: 'Support for Indian regional practice workflows, client portal display, and localized communication templates.',
    highlights: ['Multi-lingual portal interface', 'Regional client communication templates', 'Flexible character encoding for vernacular notes', 'State-wise practice customization']
  },
  {
    id: 'mobile-app',
    number: 16,
    title: 'Mobile App',
    shortDesc: 'Available with the Premium plan.',
    category: 'court',
    fullDescription: 'Carry your entire law chamber in your pocket. Access case files, court schedules, hearing notes, and contact directories directly from your smartphone inside the courtroom.',
    indianContext: 'Quick offline mode for courtrooms with poor mobile connectivity; quick audio voice notes after completing a hearing.',
    highlights: ['Included with Premium Plan', 'Instant access in courtroom corridors', 'Fast case search by CNR / Party name', 'One-tap voice notes for hearing outcomes']
  }
];

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: number;
  cadence: string;
  targetAudience: string;
  popular?: boolean;
  teamMembers: number;
  cases: number;
  clients: number;
  storage: string;
  features: string[];
  cta: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 24000,
    cadence: 'Year',
    targetAudience: 'Individual Advocates',
    popular: false,
    teamMembers: 25,
    cases: 50,
    clients: 25,
    storage: '1 GB',
    features: [
      'Client Management',
      'Case Management',
      'Court & Hearings',
      'Documents',
      'Tasks & Calendar',
      'Time Tracking',
      'Expenses & Billing',
      'Payments',
      'Client Portal',
      'Reports & Analytics',
      'Reminders',
      'Team & Permissions',
      'Multi-language'
    ],
    cta: 'Book a Demo'
  },
  {
    id: 'professional',
    name: 'Professional',
    badge: '⭐ Recommended',
    price: 36000,
    cadence: 'Year',
    targetAudience: 'Growing Legal Practices',
    popular: true,
    teamMembers: 50,
    cases: 100,
    clients: 75,
    storage: '5 GB',
    features: [
      'Everything in Basic Plan',
      '50 Team Members',
      '100 Active Cases',
      '75 Active Clients',
      '5 GB Cloud Storage',
      'Advanced Hearing Management',
      'GST Billing & Invoice Customization',
      'Role-based Access & Audit Logs',
      'Priority Support Assistance'
    ],
    cta: 'Book a Demo'
  },
  {
    id: 'premium',
    name: 'Premium',
    badge: '👑 Enterprise',
    price: 60000,
    cadence: 'Year',
    targetAudience: 'Growing Law Firms',
    popular: false,
    teamMembers: 75,
    cases: 200,
    clients: 100,
    storage: '25 GB',
    features: [
      'Everything in Professional Plan',
      'Mobile App Access Included',
      '75 Team Members',
      '200 Active Cases',
      '100 Active Clients',
      '25 GB Cloud Storage',
      'Dedicated 24/7 Support',
      'Multi-Branch & Chamber Setup',
      'Custom Training & Onboarding'
    ],
    cta: 'Book a Demo'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'What is HexaSoft Advocate?',
    answer: 'HexaSoft Advocate is a comprehensive, cloud-based legal practice management software engineered specifically for Indian advocates, lawyers, and law firms. It unifies client CRM, case lifecycle tracking, court hearing diaries, document management, associate tasks, billable hours, GST-ready invoicing, payment tracking, client portals, and performance reports into one secure platform.'
  },
  {
    question: 'Who is this software for?',
    answer: 'HexaSoft Advocate is tailored for Individual Advocates, Independent Practitioners, Law Firms, Legal Consultancies, Chamber Associations, and In-house Legal Teams operating across District Courts, High Courts, Tribunals (NCLT, RERA, DRT, Consumer Commissions), and the Supreme Court of India.'
  },
  {
    question: 'Can an individual advocate use it?',
    answer: 'Yes! The Basic Plan (₹24,000/year) is specifically designed for individual practitioners and solo advocates with up to 25 team members/interns, 50 active cases, and 25 clients, providing full access to case diaries, hearing schedules, and billing.'
  },
  {
    question: 'Can law firms use it?',
    answer: 'Yes. Law firms can utilize the Professional (₹36,000/year) or Premium (₹60,000/year) plans, which support multi-advocate teams (up to 75 members), 200 cases, role-based permission controls, partner review workflows, client portals, and mobile apps.'
  },
  {
    question: 'What modules are included?',
    answer: 'HexaSoft Advocate includes 16 powerful modules: Client Management, Case Management, Court Management, Hearing Management, Document Management, Tasks & Calendar, Time Tracking, Expense Management, Billing & Invoicing, Payment Management, Client Portal, Reports & Analytics, Team & Permissions, Notifications & Reminders, Multi-language support, and Mobile App access (with Premium plan).'
  },
  {
    question: 'Can I get a live demo?',
    answer: 'Yes! You can book a free, personalized 1-on-1 demo with our product specialists by clicking the "Book Free Demo" button or messaging us directly on WhatsApp at +91 96621 65636. We will walk you through your exact chamber workflow.'
  },
  {
    question: 'Do you provide support?',
    answer: 'Yes. HexaSoft provides dedicated customer support via WhatsApp, phone (+91 96621 65636), and email. Our Premium tier includes 24/7 priority support and personalized chamber onboarding.'
  },
  {
    question: 'Is a mobile app available?',
    answer: 'Yes, mobile app access is available with the Premium Plan (₹60,000/year), enabling advocates to access files, hearing cause lists, and client contacts on iOS and Android while in court corridors or traveling.'
  },
  {
    question: 'What are the pricing plans?',
    answer: 'We offer three simple, transparent yearly plans: Basic at ₹24,000 / Year (for Individual Advocates), Professional at ₹36,000 / Year (for Growing Practices), and Premium at ₹60,000 / Year (for Law Firms with Mobile App and 24/7 Support). There are no hidden fees.'
  },
  {
    question: 'Can I upgrade my plan?',
    answer: 'Yes. You can seamlessly upgrade from Basic to Professional or Premium at any time as your caseload and chamber team expand. Your data and settings transition automatically with prorated billing.'
  },
  {
    question: 'How can I contact HexaSoft?',
    answer: 'You can contact HexaSoft directly by calling or WhatsApping us at +91 96621 65636, following us on Instagram @hexasoft.official, or visiting www.hexasoft.com. Our team is based in India and ready to assist you.'
  }
];

export const SAMPLE_CASES = [
  {
    id: 'CAS-2026-0182',
    title: 'M/s Apex Logistics vs. Union of India & Anr.',
    type: 'Writ Petition (Civil)',
    cnr: 'DLHC01-004128-2026',
    court: 'High Court of Delhi',
    bench: 'Court No. 14 · Hon’ble Justice P. S. Rao',
    client: 'Apex Logistics Pvt. Ltd.',
    clientId: 'CLI-2026-0042',
    stage: 'Final Arguments',
    priority: 'High',
    nextHearing: 'Tomorrow · 10:30 AM',
    causeListNo: 'Item 27',
    leadAdvocate: 'Adv. Rajeshwar Sharma',
    opposingAdvocate: 'Addl. Solicitor General',
    status: 'In Progress'
  },
  {
    id: 'CAS-2026-0145',
    title: 'Sharma & Sons vs. Horizon Realty Infra',
    type: 'Commercial Arbitration',
    cnr: 'KA-ARB-2026-0089',
    court: 'Commercial Court, Bengaluru',
    bench: 'Court No. 3 · Hon’ble Judge V. K. Gowda',
    client: 'Sharma Enterprises',
    clientId: 'CLI-2026-0031',
    stage: 'Cross Examination of Witness',
    priority: 'Medium',
    nextHearing: 'Nov 04, 2026 · 02:00 PM',
    causeListNo: 'Item 12',
    leadAdvocate: 'Adv. Neha Kulkarni',
    opposingAdvocate: 'Adv. Suresh Menon',
    status: 'In Progress'
  },
  {
    id: 'CAS-2026-0199',
    title: 'Anita Verma vs. Dr. R. K. Singhania',
    type: 'Consumer Appeal',
    cnr: 'NCDRC-APPEAL-2026-442',
    court: 'National Consumer Disputes Redressal Commission',
    bench: 'Bench No. 2 · Presiding Member',
    client: 'Anita Verma',
    clientId: 'CLI-2026-0056',
    stage: 'Admission & Stay Hearing',
    priority: 'High',
    nextHearing: 'Nov 08, 2026 · 11:15 AM',
    causeListNo: 'Item 08',
    leadAdvocate: 'Adv. Rajeshwar Sharma',
    opposingAdvocate: 'Adv. M. L. Gupta',
    status: 'In Progress'
  }
];

export const SAMPLE_HEARINGS = [
  {
    time: '10:30 AM',
    itemNo: 'Item 27',
    court: 'High Court of Delhi · Court 14',
    case: 'WP(C) 4128/2026 · Apex Logistics vs. UOI',
    type: 'Final Arguments',
    advocate: 'Adv. Rajeshwar Sharma',
    status: 'Ready'
  },
  {
    time: '11:45 AM',
    itemNo: 'Item 41',
    court: 'District Court Saket · Court 06',
    case: 'CS(COMM) 182/2025 · Mehra vs. TechCraft Ltd',
    type: 'Framing of Issues',
    advocate: 'Adv. Aman Verma',
    status: 'Junior Deputed'
  },
  {
    time: '02:30 PM',
    itemNo: 'Item 09',
    court: 'NCLT New Delhi · Bench III',
    case: 'CP(IB) 942/2026 · Insolvency Petition',
    type: 'Interim Order / Rejoinder',
    advocate: 'Adv. Rajeshwar Sharma',
    status: 'Listed'
  }
];

export const BRAND_CONFIG = {
  company: 'HexaSoft',
  product: 'Advocate',
  fullName: 'Advocate Legal Management Software',
  tagline: 'Simplify. Automate. Grow.',
  subtagline: 'Your Complete Digital Workspace for Legal Practice',
  phone: '+91 96621 65636',
  phoneRaw: '919662165636',
  instagram: '@hexasoft.official',
  instagramUrl: 'https://instagram.com/hexasoft.official',
  website: 'www.hexasoft.com',
  websiteUrl: 'https://www.hexasoft.com',
  whatsappMessage: 'Hello HexaSoft, I am interested in Advocate Legal Management Software. I would like to know more and book a demo.'
};
