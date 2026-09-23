// ─────────────────────────────────────────────────────────────
//  BUSINESS CONFIGURATION — single source of truth
// ─────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: "InfiTax Accounting Services LLP",
  shortName: "InfiTax",
  tagline: "Accounting • Income tax • GST • Tally Education",

  phone: "+91 81047 41939",
  whatsapp: "918104741939", // digits only, country code, no +
  email: "office@infitaxaccounting.com",

  emails: {
    office: "office@infitaxaccounting.com",
    ajinkya: "ajinkya@infitaxaccounting.com",
    aditya: "aditya@infitaxaccounting.com",
  },

  address:
    "Office No. 1, First Floor, KVK Xenia, Plot No. 53, Sector 4, Karanjade, Panvel – 410206, Maharashtra.",
  addressLines: [
    "Office No. 1, First Floor,",
    "KVK Xenia, Plot No. 53,",
    "Sector 4, Karanjade,",
    "Panvel – 410206, Maharashtra.",
  ],
  workingHours: "Monday – Saturday · 10:00 AM – 7:00 PM",

  partners: [
    { name: "Aditya Jadhav", role: "Partner", phone: "+91 98197 46501" },
    { name: "Ajinkya Karve", role: "Partner", phone: "+91 88501 20408" },
  ],

  social: {
    linkedin: "https://www.linkedin.com/company/infitax-accounting-services-llp/",
    instagram: "https://www.instagram.com/infitax.accounting",
  },

  tallyAuthorized: true,

  // Paste the Google Drive brochure share URL here when it is ready.
  tallyBrochureUrl: "",
};

export const buildWhatsAppLink = (service) => {
  const svc = service && service !== "Other" ? service : "your services";
  const message = `Hello, I found your website and would like to enquire about ${svc}.`;
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const buildTelLink = () => `tel:${BUSINESS.phone.replace(/\s+/g, "")}`;
export const buildMailLink = () => `mailto:${BUSINESS.email}`;
