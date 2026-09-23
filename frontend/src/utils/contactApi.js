// ─────────────────────────────────────────────────────────────
//  CONTACT FORM SUBMISSION UTILITY
//
//  The form is currently frontend-only. When you are ready to
//  connect it to Google Sheets, deploy a Google Apps Script Web
//  App and paste its URL into CONTACT_FORM_ENDPOINT below.
//
//  The payload keys map directly to Google Sheet columns.
// ─────────────────────────────────────────────────────────────

export const CONTACT_FORM_ENDPOINT = ""; // e.g. "https://script.google.com/macros/s/XXXX/exec"

export async function submitContactForm(data) {
  const payload = {
    name: data.name,
    phone: data.phone,
    email: data.email,
    service: data.service,
    message: data.message,
    submittedAt: new Date().toISOString(),
    source: "Website",
  };

  // No endpoint configured yet — simulate a successful submission so
  // the UI can be reviewed. Swap in your Apps Script URL to go live.
  if (!CONTACT_FORM_ENDPOINT) {
    await new Promise((r) => setTimeout(r, 900));
    return { ok: true, payload, simulated: true };
  }

  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: "POST",
    // Apps Script Web Apps accept text/plain to avoid CORS preflight.
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Submission failed with status ${response.status}`);
  }

  return { ok: true, payload, simulated: false };
}
