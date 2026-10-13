# yeahvibe-astro (core.yeahvibe.com, to become YeahCore) — Changelog

Started 2026-10-13. Earlier versions (up to 1.7.1) were only tracked in `src/version.ts` and git history. This site keeps its existing `MAJOR.MINOR.PATCH` scheme, shown in the footer from `src/version.ts`. Newest version first.

---

## 1.8.0

**YeahSight articles moved to their own site, `yeahsight.happybein.com` (yeahsight v2.00); core keeps the base and the practical guides.** Part of the content split agreed with the user. HappyBein holds the "understanding" side: YeahCore (this site, later to move to `yeahcore.happybein.com`) is the base, and YeahSight is the societal view. YeahVibe holds the "solutions" side (tools).

**Removed:** all of `src/content/docs/applications/` and `fr/applications/`. That is Foresight Trends plus the Environment & Energy, Economy & Equity, Technology & Automation and Social Organization articles, in EN and FR, including the *Inheritance* article that had been added here earlier the same day. The newest text of each now lives on YeahSight.

**Kept, moved to Personal Effectiveness:** *Mastering Finance Basics* and *Time Spent Identification*. They are personal rather than societal; the user agreed. New paths: `/personal-effectiveness/mastering-finance-basics/` and `/personal-effectiveness/time-spent-identification/` (and `/fr/…`). Both were added to the Personal Effectiveness sidebar group, and to the Personal Effectiveness lists on Welcome, Start Here and Home (EN+FR), taken out of those pages' YeahSight lists.

**Links:**

- Every `/applications/…` and `/fr/applications/…` link in the remaining pages now points to the matching `https://yeahsight.happybein.com/…` page: welcome, start-here, home, pillars/yeahsight, about/how-it-works, about/user-flow, EN and FR.
- After the build, every YeahSight link was checked against YeahSight's built page list: none missing.
- `public/llms.txt`: the YeahSight section is replaced by one line pointing to the new site and its own `llms.txt`. The two moved pages are listed under Personal Effectiveness.

**Pillar 5 (YeahSight) page** (EN+FR) becomes a bridge: a tip box at the top says YeahSight now has its own site, mentions the new *Fair Space Sharing*, *Inheritance* and *Vision & Roadmap* pages, and says the article links below open there. The two moved pages are removed from its lists.

**Sidebar:** the whole "YeahSight" group is replaced by a single "🔭 YeahSight ↗" link to the new site, opening in a new tab. The "Pillar 5: YeahSight" entry stays.

**`public/_redirects`** (replaces the old file, whose only rules tried to send `https://yeahsight.com/*` to this site's foresight-trends page — a domain-level redirect that belongs in Cloudflare, not in this Pages project):

- `/applications/economy-equity/mastering-finance-basics/` and `/applications/social-organization/time-spent-identification/` (EN+FR) → their new Personal Effectiveness paths. These come first, because Cloudflare Pages uses the first match.
- `/applications/*` → `https://yeahsight.happybein.com/:splat`
- `/fr/applications/*` → `https://yeahsight.happybein.com/fr/:splat`

**Fixed: page titles, descriptions and French labels.** Same bug as yeahsight v2.01. Starlight 0.32+ passes route data via `Astro.locals.starlightRoute`, not props, but `Head.astro`, `Footer.astro` and `MarkdownContent.astro` still read `Astro.props.entry` / `.lang` (always `undefined`). As a result:

- every page got the default title and description, and `og:locale` was always `en_US`
- the French footer and reading-time label were in English
- each page carried two `<title>` tags and two descriptions, because Starlight's own ones were emitted as well

The fix reads from `Astro.locals.starlightRoute`, and `Head.astro` drops Starlight's own title, description, canonical, `og:*` and `twitter:*` entries before rendering `<Default>`.

**Verification:**

- `npm ci` + `astro build` in a scratch copy: 75 pages, no warnings.
- Scanned all built HTML for internal links: none broken.
- Built titles are correct and single, e.g. "Sleeping Well | YeahVibe by HappyBein" and "Pilier 5 : YeahSight — Voir le Monde | YeahVibe par HappyBein".
- The repo's `src`/`public` are byte-identical to the scratch copy that was built.

**Still to do:**

- Point `yeahsight.com` at `yeahsight.happybein.com` with a Cloudflare redirect rule in the yeahsight.com zone.
- Update links on happybein.com and the YeahVibe hub.
- Later: rebrand this site to YeahCore and move it to `yeahcore.happybein.com`, with redirects.
