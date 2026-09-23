# Infitax Accounting Services LLP — Website

A production-ready single-page website for an Indian accounting, taxation and
compliance firm, with a dedicated **Authorized Tally Training Centre** section.

Built with **React + Tailwind CSS**, animated with **Framer Motion** and
**Lenis** smooth scrolling. Frontend-only — no backend required.

## Getting started

```bash
yarn install     # install dependencies
yarn start       # run locally (http://localhost:3000)
yarn build       # production build → /build
```

## Editing your business details

Everything about the firm lives in one file:

- `src/config/business.js` — name, phone, WhatsApp, email, address, working
  hours, and the `tallyAuthorized` flag.
- `src/data/content.js` — all website copy (services, FAQs, curriculum, stats).

## Contact form → Google Sheets

The contact form is frontend-only and currently simulates a successful
submission. To connect it to Google Sheets:

1. Create a Google Apps Script Web App that appends rows to a sheet.
2. Paste its URL into `CONTACT_FORM_ENDPOINT` in `src/utils/contactApi.js`.

The submitted payload keys map directly to sheet columns:

```js
{ name, phone, email, service, message, submittedAt, source }  // source: "Website"
```

No UI changes are needed — the submission logic is isolated in
`src/hooks/useContactForm.js` and `src/utils/contactApi.js`.

## Deploying to GitHub Pages

1. Build the site: `yarn build`.
2. Push the contents of the `build/` folder to a `gh-pages` branch, or use a
   GitHub Action (e.g. `peaceiris/actions-gh-pages`) pointing at `build`.
3. In repo **Settings → Pages**, set the source to the `gh-pages` branch.

If deploying to a project sub-path (`/repo-name/`), set `"homepage"` in
`package.json` accordingly before building.

## Structure

```
src/
├── components/        # Navbar, Hero, Services, TallySkills, Contact, Footer …
│   └── shared/motion  # reusable animation primitives
├── config/business.js # editable business identity & contact
├── data/content.js    # website copy
├── hooks/useContactForm.js
├── utils/contactApi.js
└── App.js
```
