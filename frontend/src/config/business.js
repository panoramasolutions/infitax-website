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
  workingHours: "Monday – Saturday · 10:30 AM – 6:30 PM",

  partners: [
    {
      name: "Aditya Jadhav",
      role: "Partner",
      linkedin:
        "https://www.linkedin.com/in/aditya-jadhav-1788229b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Ajinkya Karve",
      role: "Partner",
      linkedin:
        "https://www.linkedin.com/in/ajinkya-karve-741822158?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  ],

  social: {
    linkedin: "https://www.linkedin.com/company/infitax-accounting-services-llp/",
    instagram: "https://www.instagram.com/infitax.accounting",
  },
  mapUrl: "https://maps.app.goo.gl/2sDcuiQHuoCYBbkK8",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Office%20No.%201%2C%20First%20Floor%2C%20KVK%20Xenia%2C%20Plot%20No.%2053%2C%20Sector%204%2C%20Karanjade%2C%20Panvel%20410206&output=embed",

  tallyAuthorized: true,

  // Paste the Google Drive brochure share URL here when it is ready.
  tallyBrochureUrl:
    "https://drive.google.com/file/d/1HXI5qh1TC28qNzVo7G0NX9PG6HxGznmv/view?usp=drivesdk",
};

export const buildWhatsAppLink = (service) => {
  const svc = service && service !== "Other" ? service : "your services";
  const message = `Hello, I found your website and would like to enquire about ${svc}.`;
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const buildTelLink = () => `tel:${BUSINESS.phone.replace(/\s+/g, "")}`;
export const buildMailLink = () => `mailto:${BUSINESS.email}`;
