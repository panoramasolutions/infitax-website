# Google Sheets contact-form setup

This folder contains the server-side Google Apps Script used by the website's
Contact form. The website remains a static GitHub Pages site; Apps Script is the
small serverless endpoint that writes enquiries to your spreadsheet.

## 1. Create the spreadsheet and script

1. Create a new Google Sheet. A name such as **InfiTax Website Enquiries** is
   recommended.
2. In that sheet, open **Extensions > Apps Script**.
3. Delete the sample code in `Code.gs`.
4. Copy the complete contents of this repository's `google-apps-script/Code.gs`
   into the Apps Script editor.
5. Click **Save** and name the Apps Script project, for example
   **InfiTax Contact Form**.

You do not need to create columns manually. On the first valid submission, the
script creates an **Enquiries** tab with these columns:

`Received At, Name, Phone, Email, Requirement, Message, Source, Page URL, Client Submitted At, Status`

## 2. Deploy it as a web app

1. In Apps Script, click **Deploy > New deployment**.
2. Next to **Select type**, choose **Web app**.
3. Set **Execute as** to **Me**.
4. Set **Who has access** to **Anyone**. It must allow visitors who are not
   signed in to Google.
5. Click **Deploy**.
6. Approve Google's authorization prompts for access to the spreadsheet.
7. Copy the **Web app URL**. Use the production URL ending in `/exec`, not the
   test URL ending in `/dev`.

Opening the `/exec` URL in a browser should display a small JSON response with
`"ok": true`.

## 3. Configure GitHub Pages

1. Open the GitHub repository.
2. Go to **Settings > Secrets and variables > Actions**.
3. Select the **Variables** tab and click **New repository variable**.
4. Enter this exact variable name:

   `REACT_APP_CONTACT_FORM_ENDPOINT`

5. Paste the Apps Script `/exec` URL as its value and save it.
6. Re-run the **Deploy to GitHub Pages** workflow, or push a new commit, so the
   site is rebuilt with the endpoint.

The Apps Script URL is necessarily included in the browser's built JavaScript,
so it is a configuration value rather than a password. The server script still
validates fields, uses a spam honeypot, prevents spreadsheet formulas from user
input, and locks simultaneous writes.

## 4. Configure local development

Inside `frontend`, create a file named `.env.local` containing:

```env
REACT_APP_CONTACT_FORM_ENDPOINT=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Restart `npm start` after changing an environment file.

## 5. Test the complete flow

1. Submit a real test enquiry from the deployed website.
2. Open the Google Sheet.
3. Confirm an **Enquiries** tab was created and a row was added.
4. Check that the row includes the timestamp, contact details, requirement,
   message, source page, and a default status of **New**.

## Updating the Apps Script later

After changing `Code.gs`, open **Deploy > Manage deployments**, edit the web-app
deployment, select **New version**, and deploy it. Updating the existing
deployment keeps the same `/exec` URL, so the GitHub variable does not need to
change.
