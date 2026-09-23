// ─────────────────────────────────────────────────────────────
//  WEBSITE COPY & CONTENT
//  All static text lives here, separated from presentation.
// ─────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Tally Education", href: "#tally" },
  { label: "Contact us", href: "#contact" },
];

export const MOBILE_NAV = [
  { no: "01", label: "Home", href: "#home" },
  { no: "02", label: "Services", href: "#services" },
  { no: "03", label: "Tally Education", href: "#tally" },
  { no: "04", label: "Contact us", href: "#contact" },
];

export const APPROACH = [
  { no: "01", title: "Understand", text: "We understand your business, transactions and compliance requirements." },
  { no: "02", title: "Organise", text: "We structure your accounting records and financial information correctly." },
  { no: "03", title: "Comply", text: "We help you manage important filings, taxes and statutory requirements." },
  { no: "04", title: "Support", text: "Whenever financial or accounting questions arise, you have someone to speak with." },
];

export const SERVICES = [
  {
    id: "accounting",
    image: "service-accounting.jpeg",
    title: "Accounting Services",
    lead: "Complete Accounting Solutions",
    summary:
      "We help businesses maintain accurate and up-to-date financial records with professional accounting and bookkeeping services.",
    itemsLabel: "Our Accounting Services include:",
    noteLabel: "Why it matters:",
    message:
      "Accurate accounting gives you a clear picture of your business's financial performance and helps you make better decisions.",
    items: [
      "Bookkeeping & Monthly Accounts",
      "Accounts Payable & Receivable",
      "Bank Reconciliation",
      "Ledger & Trial Balance Preparation",
      "Financial Statements",
      "Payroll & Salary Accounting",
      "Society Accounting Services",
      "MIS & Financial Reports",
    ],
  },
  {
    id: "income-tax",
    image: "service-income-tax.jpeg",
    title: "Income Tax Services",
    lead: "Simplifying Your Income Tax Compliance",
    summary:
      "From return filing to tax planning and TDS compliance, we provide practical solutions to help you meet your income tax obligations efficiently.",
    itemsLabel: "Our Income Tax Services include:",
    noteLabel: "Our approach:",
    message:
      "We focus on accurate calculations, timely compliance and keeping your tax records properly organized.",
    items: [
      "Income Tax Return (ITR) Filing",
      "Tax Computation & Planning",
      "TDS Return Filing",
      "TDS Payment & Compliance",
      "Advance Tax Calculation",
      "Income Tax Notice Assistance",
      "Tax Audit Support",
      "PAN & TAN Related Services",
    ],
  },
  {
    id: "gst",
    image: "service-gst.jpeg",
    title: "GST Services",
    lead: "End-to-End GST Compliance",
    summary:
      "Stay GST compliant with professional support for registration, return filing, reconciliation and ongoing GST requirements.",
    itemsLabel: "Our GST Services include:",
    noteLabel: "Our approach:",
    message:
      "We help businesses manage their GST compliance accurately and on time, reducing the risk of errors, notices and unnecessary penalties.",
    items: [
      "GST Registration",
      "GST Return Filing",
      "GSTR-1 & GSTR-3B",
      "GSTR-9 & Annual Return",
      "GST Reconciliation",
      "Input Tax Credit (ITC) Reconciliation",
      "E-Invoice & E-Way Bill Compliance",
      "GST Notice & Departmental Assistance",
    ],
  },
  {
    id: "other",
    image: "service-other.jpeg",
    title: "Other Services",
    lead: "Business & Statutory Compliance Solutions",
    summary:
      "We also provide a range of business registration, statutory compliance and professional support services.",
    itemsLabel: "Our Other Services include:",
    items: [
      "Company & LLP Compliance",
      "ROC/MCA Compliance",
      "Company Formation",
      "Business Registration",
      "MSME/Udyam Registration",
      "Professional Tax Compliance",
      "Digital Signature Certificate (DSC)",
      "Business & Financial Consultancy",
      "Accounting & Tax Advisory",
    ],
  },
];

export const ASSOCIATIONS = [
  {
    title: "Empanelled Tally Skill Incubation Centre (TSIC)",
    text: "InfiTax Accounting Services LLP is an empanelled Tally Skill Incubation Centre, delivering official Tally Education certifications with access to Tally's placement services.",
  },
  {
    title: "Tally Education partner",
    text: "Authorised to provide industry-oriented Tally learning aligned with applicable Tally education standards.",
  },
];

export const GST_FLOW = ["Register", "Account", "Reconcile", "File", "Comply"];
export const TDS_FLOW = ["Calculate", "Deduct", "Deposit", "File", "Certify"];

export const ACCOUNTING_QUESTIONS = [
  "How much did we earn?",
  "Where did the money go?",
  "Who still needs to pay us?",
  "What taxes are due?",
  "Are our books actually ready?",
];

export const TALLY_CURRICULUM = [
  {
    no: "01",
    title: "Fundamentals",
    outcomes: ["TallyPrime fundamentals", "Company creation", "Ledger creation", "Groups and vouchers"],
  },
  {
    no: "02",
    title: "Accounting entries",
    outcomes: ["Purchase & sales entries", "Receipt & payment entries", "Bank reconciliation"],
  },
  {
    no: "03",
    title: "Inventory",
    outcomes: ["Inventory management", "Stock items & groups", "Godown & movement tracking"],
  },
  {
    no: "04",
    title: "GST",
    outcomes: ["GST setup in Tally", "GST invoices & returns", "Input tax credit in Tally"],
  },
  {
    no: "05",
    title: "TDS",
    outcomes: ["TDS configuration", "TDS entries in Tally", "TDS reports & challans"],
  },
  {
    no: "06",
    title: "Payroll",
    outcomes: ["Payroll basics", "Employee masters", "Salary processing in Tally"],
  },
  {
    no: "07",
    title: "Financial statements",
    outcomes: ["Profit & Loss", "Balance Sheet", "Business accounting workflows", "Practical exercises"],
  },
];

export const TALLY_AUDIENCE = [
  { title: "Students", text: "Build practical skills beyond textbook accounting." },
  { title: "Job seekers", text: "Develop accounting and Tally skills commonly required by businesses." },
  { title: "Working professionals", text: "Upgrade practical accounting and taxation knowledge." },
  { title: "Business owners", text: "Understand your own accounts and financial records better." },
];

export const AUDIENCE = [
  { title: "Proprietors", text: "Reliable accounting and compliance without an in-house finance team." },
  { title: "Startups", text: "Set up cleaner financial processes from day one." },
  { title: "Professionals", text: "Accounting and taxation for consultants, freelancers and practitioners." },
  { title: "Partnership firms", text: "Organised books, partner accounts and timely filings." },
  { title: "LLPs", text: "Statutory compliance and accounting handled end to end." },
  { title: "Growing SMEs", text: "Ongoing support as transactions and compliance responsibilities grow." },
];

export const WHY_US = [
  { title: "Professional Expertise", text: "Practical accounting and taxation support for businesses." },
  { title: "Timely Compliance", text: "We help you stay on top of important filing and payment deadlines." },
  { title: "Accurate Work", text: "We focus on maintaining accurate records and minimizing compliance errors." },
  { title: "Transparent Approach", text: "Clear communication and transparent professional services." },
  { title: "One-Stop Solution", text: "Accounting, Income Tax, GST and other compliance services under one roof." },
  { title: "Business-Focused Support", text: "We don't just maintain your accounts—we help you understand your numbers and make informed business decisions." },
];

export const TALLY_HIGHLIGHTS = [
  "Official Tally Education certifications",
  "Hands-on industry training",
  "Access to Tally's official placement services",
  "Practical accounting learning",
  "Industry-oriented training",
  "Placement support",
];

export const TALLY_LEG = [
  { k: "Learn", t: "Develop practical accounting and Tally skills." },
  { k: "Certify", t: "Earn recognised Tally Education certification." },
  { k: "Grow", t: "Prepare for employment and career opportunities." },
];

export const PROCESS = [
  { no: "01", title: "Tell us what you need", text: "Accounting, GST, TDS, tax filing, compliance or training." },
  { no: "02", title: "We understand your requirements", text: "We review the nature of your business and required services." },
  { no: "03", title: "Share the required information", text: "Documents and financial records are collected securely." },
  { no: "04", title: "We take it forward", text: "Our team assists with the agreed accounting or compliance work." },
];

export const STATS = [
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 500, suffix: "+", label: "Clients assisted" },
  { value: 1000, suffix: "+", label: "Returns & filings" },
  { value: 250, suffix: "+", label: "Learners trained" },
];

export const FAQS = [
  {
    q: "What accounting services do you provide?",
    a: "We assist businesses and individuals with bookkeeping, accounting, GST, TDS, taxation and related financial compliance requirements.",
  },
  {
    q: "Do you provide monthly accounting services?",
    a: "Yes. Businesses can engage us for ongoing accounting and bookkeeping assistance depending on their requirements.",
  },
  {
    q: "Can you handle GST registration and GST returns?",
    a: "Yes. We can assist with GST registration, return preparation, reconciliation and ongoing compliance.",
  },
  {
    q: "Do you provide TDS return filing?",
    a: "Yes. Our services can include TDS calculation, challan assistance, return filing and related compliance support.",
  },
  {
    q: "Can small businesses outsource their accounting to you?",
    a: "Yes. Outsourced accounting can be particularly useful for businesses that need professional financial support without building a complete internal accounting team.",
  },
  {
    q: "Do you provide Tally training?",
    a: "Yes. Our Tally Skills programme focuses on practical Tally usage together with accounting concepts, GST and real-world transaction workflows.",
  },
  {
    q: "Is Tally training suitable for beginners?",
    a: "Yes. Training can begin with accounting and Tally fundamentals before progressing toward practical business transactions.",
  },
  {
    q: "How can I get started?",
    a: "Send us an enquiry through the website, call us or WhatsApp us. Our team can understand your requirement and recommend the appropriate service or programme.",
  },
];

export const SERVICE_OPTIONS = [
  "Accounting",
  "Income tax",
  "GST",
  "Other services",
  "Tally Education",
];

export const TRUST_ITEMS = [
  "Reliable Accounting",
  "GST compliance",
  "TDS Management",
  "Tax Assistance",
  "Business Setup",
  "Taxation",
  "Company Formation",
  "Digital Signature",
  "Tally Education",
];
