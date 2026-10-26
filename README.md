# Process safety portfolio

Personal resume site for a process safety engineer (chemicals, pharmaceuticals, manufacturing). Built with [Astro](https://astro.build) as a fast static site and deployed to GitHub Pages.

> **Status:** design baseline. Every name, number, and employer on the site is sample content.

## Design approach

The site is built for an overwhelmed recruiter first and a technical hiring manager second.

- **First screen answers the screening questions.** Name, role, years, industries, credentials, location, work mode, and contact are visible without scrolling or clicking.
- **ISA-101 high-performance HMI styling.** Quiet grays, with one accent color reserved for actions, status, and results, so the eye goes where it should.
- **Layers of detail.** Scan (hero and key numbers) → depth (experience, capabilities, case studies) → reference (credentials, data sheet).
- **One signature element.** Experience is drawn as a P&ID: education is the feed, each role is a piece of equipment on the process line, and the off-page connector leads to contact. It is a horizontal diagram on desktop, a vertical process line on phones, and works without JavaScript.
- **Boring where it counts.** Static HTML, small JavaScript, accessible markup, light and dark themes, and a print-ready resume page at `/resume/`.

## Editing content

All content lives in [`src/data/resume.ts`](src/data/resume.ts). Components read from it, so updating the resume should not require touching any layout code.

| Section          | Data                                         |
| ---------------- | -------------------------------------------- |
| Hero and summary | `profile`, `metrics`                         |
| Experience       | `roles` (newest first), `education`          |
| Capabilities     | `capabilities`                               |
| Selected work    | `caseStudies`                                |
| Credentials      | `certifications`, `education`, `training`    |
| About            | `dataSheet`                                  |

Each role picks a P&ID symbol with `equipment`: `exchanger`, `vessel`, `column`, `reactor`, or `tank`.

### Adding a PDF resume

Put the file in `public/` (for example `public/resume.pdf`) and set `resumePdf: 'resume.pdf'` in `profile`. Until then, resume buttons open the printable `/resume/` page.

## Local development

Requires Node 22.23.4 or newer (Node 24 recommended).

```bash
npm install
npm run dev
```

The site runs at http://localhost:4321. `npm run build` writes the static site to `dist/`.

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages (Settings → Pages → Source: GitHub Actions).

`astro.config.mjs` sets the base path automatically: a repo named `<user>.github.io` is served from the root, and any other repo from `/<repo>/`. For a custom domain, add `public/CNAME` and set a `SITE_URL` repository variable (Settings → Secrets and variables → Actions → Variables), e.g. `https://yourname.com`.
