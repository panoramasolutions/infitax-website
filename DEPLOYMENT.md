# Deploying to GitHub Pages (automatic)

This repo auto-builds and publishes the site to GitHub Pages on every push
to the `main` (or `master`) branch, using GitHub Actions.

## One-time setup

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
   (You do NOT need to pick a branch — the workflow handles publishing.)

That's it. From now on, every `git push` to `main`/`master` triggers the
workflow in `.github/workflows/deploy.yml`, which:

- installs dependencies in `frontend/` with `npm ci`
- runs `npm run build`
- publishes `frontend/build` to GitHub Pages

Node 24 is used, dependencies are locked via `frontend/package-lock.json`, and
`frontend/.npmrc` sets `legacy-peer-deps=true` (required for React 19 peer ranges).

Your site URL appears in the Actions run summary and under **Settings → Pages**,
typically:

```
https://<your-username>.github.io/<your-repo-name>/
```

## Notes

- Asset paths are relative (`"homepage": "."` in `frontend/package.json`), so the
  site works whether it's served from a project sub-path or a custom domain.
- `frontend/public/.nojekyll` ensures GitHub Pages serves the CRA `static/` files
  as-is (no Jekyll processing).
- A `404.html` copy of `index.html` is generated so any deep link still loads the app.
- The build is fully static and needs no backend — the contact form is frontend-only
  (set `CONTACT_FORM_ENDPOINT` in `src/utils/contactApi.js` to connect Google Sheets later).

## Custom domain (optional)

Add a `CNAME` file to `frontend/public/` containing your domain (e.g.
`www.infitax.in`), then set the domain under **Settings → Pages**.

## Manual trigger

You can also run the deploy manually from the **Actions** tab
→ **Deploy to GitHub Pages** → **Run workflow**.
