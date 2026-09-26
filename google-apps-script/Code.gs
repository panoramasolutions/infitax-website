const SHEET_NAME = "Enquiries";
const HEADERS = [
  "Received At",
  "Name",
  "Phone",
  "Email",
  "Requirement",
  "Message",
  "Source",
  "Page URL",
  "Client Submitted At",
  "Status",
];

function doGet() {
  return jsonResponse_({
    ok: true,
    service: "InfiTax website enquiries",
  });
}

function doPost(event) {
  try {
    const data = parsePayload_(event);

    // Honeypot field: silently accept automated submissions without saving them.
    if (String(data.website || "").trim()) {
      return jsonResponse_({ ok: true });
    }

    validatePayload_(data);

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      if (!spreadsheet) {
        throw new Error("This script must be created from the target Google Sheet.");
      }

      let sheet = spreadsheet.getSheetByName(SHEET_NAME);
      if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);

      if (sheet.getLastRow() === 0) {
        sheet.appendRow(HEADERS);
        sheet.setFrozenRows(1);
        sheet
          .getRange(1, 1, 1, HEADERS.length)
          .setFontWeight("bold")
          .setBackground("#f1eff8");
      }

      sheet.appendRow([
        new Date(),
        safeCell_(data.name, 120),
        safeCell_(data.phone, 30),
        safeCell_(data.email, 180),
        safeCell_(data.service, 120),
        safeCell_(data.message, 3000),
        safeCell_(data.source || "InfiTax Website", 80),
        safeCell_(data.pageUrl || "", 500),
        safeCell_(data.submittedAt || "", 60),
        "New",
      ]);

      const lastRow = sheet.getLastRow();
      sheet.getRange(lastRow, 1).setNumberFormat("dd-mmm-yyyy hh:mm:ss");
      SpreadsheetApp.flush();
    } finally {
      lock.releaseLock();
    }

    return jsonResponse_({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse_({
      ok: false,
      error: "Unable to save the enquiry.",
    });
  }
}

function parsePayload_(event) {
  if (!event || !event.postData || !event.postData.contents) {
    throw new Error("Request body is missing.");
  }

  return JSON.parse(event.postData.contents);
}

function validatePayload_(data) {
  const name = String(data.name || "").trim();
  const phone = String(data.phone || "").trim();
  const email = String(data.email || "").trim();
  const service = String(data.service || "").trim();
  const message = String(data.message || "").trim();

  if (!name || name.length > 120) throw new Error("Invalid name.");
  if (!/^[0-9+()\-\s]{7,20}$/.test(phone)) throw new Error("Invalid phone number.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 180) {
    throw new Error("Invalid email address.");
  }
  if (!service || service.length > 120) throw new Error("Invalid requirement.");
  if (message.length < 5 || message.length > 3000) throw new Error("Invalid message.");
}

function safeCell_(value, maxLength) {
  let text = String(value == null ? "" : value).trim().slice(0, maxLength);

  // Prevent user-controlled values from being interpreted as spreadsheet formulas.
  if (/^[=+\-@]/.test(text)) text = "'" + text;

  return text;
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
