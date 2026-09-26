# Infitax Accounting Services LLP — Website

A production-ready single-page website for an Indian accounting, taxation and
compliance firm, with a dedicated **Authorized Tally Training Centre** section.

Built with **React + Tailwind CSS**, animated with **Framer Motion** and
**Lenis** smooth scrolling. The public site is static and deploys to GitHub
Pages. Contact enquiries are stored through a small Google Apps Script web app
connected to Google Sheets.

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

The form submits to a Google Apps Script web app and stores each enquiry in an
`Enquiries` worksheet. The Apps Script source and complete setup instructions
are in [`google-apps-script/`](google-apps-script/README.md).

For local development, copy `frontend/.env.example` to `frontend/.env.local`
and replace the sample value with the deployed Apps Script `/exec` URL.

For GitHub Pages, create the repository Actions variable
`REACT_APP_CONTACT_FORM_ENDPOINT`. The deployment workflow injects it when the
React app is built.

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
