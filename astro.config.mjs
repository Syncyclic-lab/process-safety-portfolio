// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages serves a user site (<owner>.github.io) from the root and any
// other repo from /<repo>/. Work out which one we are from the Actions env so
// the same config builds correctly for either. SITE_URL overrides everything
// (set it when a custom domain is added).
const [owner = 'syncyclic-lab', repo = ''] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const site = process.env.SITE_URL || `https://${owner.toLowerCase()}.github.io`;
const base = process.env.SITE_URL || !repo || isUserSite ? '/' : `/${repo}`;

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
});
