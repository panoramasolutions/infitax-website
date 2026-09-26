const CONTACT_FORM_ENDPOINT = (
  process.env.REACT_APP_CONTACT_FORM_ENDPOINT || ""
).trim();

const APPS_SCRIPT_WEB_APP_URL =
  /^https:\/\/script\.google\.com\/macros\/s\/[a-zA-Z0-9_-]+\/exec$/;

const REQUEST_TIMEOUT_MS = 15000;

export function isContactFormConfigured() {
  return APPS_SCRIPT_WEB_APP_URL.test(CONTACT_FORM_ENDPOINT);
}

export async function submitContactForm(data) {
  if (!CONTACT_FORM_ENDPOINT) {
    throw new Error("The contact form endpoint has not been configured.");
  }

  if (!isContactFormConfigured()) {
    throw new Error("The contact form endpoint is not a valid Apps Script web app URL.");
  }

  const payload = {
    name: data.name.trim(),
    phone: data.phone.trim(),
    email: data.email.trim(),
    service: data.service.trim(),
    message: data.message.trim(),
    website: data.website || "",
    submittedAt: new Date().toISOString(),
    source: "InfiTax Website",
    pageUrl: window.location.href,
  };

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    // Apps Script ContentService redirects responses to googleusercontent.com.
    // no-cors allows this static GitHub Pages site to submit without a preflight.
    await fetch(CONTACT_FORM_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      cache: "no-store",
      credentials: "omit",
      redirect: "follow",
      referrerPolicy: "no-referrer",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } finally {
    window.clearTimeout(timeoutId);
  }

  return { ok: true };
}
