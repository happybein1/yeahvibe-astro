# yeahvibe-astro (YeahCore, yeahcore.happybein.com; formerly core.yeahvibe.com) — Changelog

Started 2026-10-13. Earlier versions (up to 1.7.1) were only tracked in `src/version.ts` and git history. This site keeps its existing `MAJOR.MINOR.PATCH` scheme, shown in the footer from `src/version.ts`. Newest version first.

---

## 2.4.0

**YeahSight is no longer a YeahCore pillar: four pillars instead of five.** The owner asked for YeahSight to be removed from YeahCore (first from the new YeahCore intro video, then from the site). YeahSight has had its own site since 2026-10-13, and the three sites now stand as separate links in one chain (YeahCore → YeahSight → YeahVibe), so a "pillar" pointing to another site no longer fitted.

- **Removed:** the *Pillar 5: YeahSight* page (`pillars/yeahsight.md`, EN + FR), its menu entry, its home card, its block on Start Here, the YeahSight topic card on Welcome, item 5 in About YeahCore, and the "Next: Pillar 5" link at the bottom of Collaboration.
- **Renamed:** "The 5 Pillars" → "The 4 Pillars" (menu, home, Start Here, How It Works, `llms.txt`); "five pillars" → "four" on Welcome and About, with "a clear view of the world" dropped from the Welcome list. EN and FR.
- **Kept:** every other link to YeahSight as a sister site: the chain at the bottom of the home page, the "YeahSight ↗" footer/menu link, About YeahCore's intro line and How It Works' "Go deeper with YeahSight" step.
- **Redirects:** `/pillars/yeahsight/` → `https://yeahsight.happybein.com/` and `/fr/pillars/yeahsight/` → `/fr/` (301, `public/_redirects`), so old links keep working.

**Verification:** built in a scratch copy; no "5 pillars"/"pillar 5"/`pillars/yeahsight` left in the source; home and menu checked in Firefox.

---

## 2.3.0

**New YeahCore logo: a compass, needle pointing north-east.** The owner wanted to change the old logo (concentric rings in the old colours #0088CC / #46E8C1, which read as a target). I showed a compass, a sprout and refreshed rings; the owner chose the compass. Then: needle north vs north-east (owner: "should the needle not show north east?"); the wide north-east needle "looks like an eye", so three slimmer versions; a mountain was also sketched (three versions) and set aside because it overlaps with YeahSight's horizon and mountain imagery. Owner picked "compass 2": slim needle with four compass marks and a blue pivot.

- **Mark:** blue ring (#29ABE2) with four short marks, slim needle turned 45° (north half green #4CAF50, south half teal #2ABFBF), blue pivot. Idea: finding your direction and deciding well; it matches the compass hero photo and sits next to YeahSight's sunrise as a pair.
- **Wordmark:** "Yeah" blue #29ABE2, "Core" teal #2ABFBF, bold (Nunito → Segoe UI → Arial), same layout as YeahSight's.
- **Files:** `src/assets/logo.svg` (header), `public/favicon.svg` (mark on a dark rounded square), `favicon.png` 32px, `favicon.ico` 16+32, `icon-192.png` (rounded), `apple-touch-icon.png` 180px (square, iOS rounds it), `og-image.png` 1200×630 (link previews, same layout as before with the new mark and colours). PNGs rendered with headless Firefox and scaled with Pillow.
- **Hero title** on the home page uses the logo colours: `.w-yeah` #29ABE2 light / #5CC4F0 dark, `.w-x` #2ABFBF (the hero is dark in both themes). The rest of the site's accent colours (`--yv-blue` / `--yv-green`) are unchanged.

**Verification:** built in a scratch copy (75 pages); home page checked at 1200px and 412px in Firefox (header logo, hero title); icons and social image looked at as images.

---

## 2.2.2

**Links to YeahSight follow its new four-section structure** (yeahsight v2.05: articles moved into `how-society-works/`, `forces/` and `sharing-fairly/`).

- Every `https://yeahsight.happybein.com/<old path>` link in YeahCore was rewritten to the new path, EN and FR. That covers home, start-here, welcome, pillars/yeahsight, about/user-flow and `public/llms.txt`.
- Link texts were renamed to match: *Earth Land — View per Individual* → *Land per Person*, *The Economical System* → *The Economic System*.
- Every YeahSight URL in the source was checked against YeahSight's built page list: all exist.

The `/applications/* → yeahsight.happybein.com/:splat` rule in `public/_redirects` is unchanged. It lands on YeahSight's old paths, which YeahSight now redirects onward.

Build passed (75 pages).

---

## 2.2.1

**Sharper compass photo in the landing hero.** The user replaced `public/images/hero-compass.jpg` with the full-size original: 3300×2096, about 1.1 MB (it was 570×320 in 2.2.0).

- **Two versions:** re-saved as `hero-compass.jpg` (1800px wide) and a new `hero-compass-sm.jpg` (900px), both JPEG at quality 78, progressive. They follow the same pattern as YeahSight's hero images.
- **`src/styles/custom.css`:** the per-site variables now set `--yv-hero-img-sm` to the small version, so phones load a lighter file. `--yv-hero-pos` changes from `50% 60%` to `50% 55%` for the new framing.

No layout change. Build in a scratch copy passed.

**Decided with the user the same session:** the compass stays the YeahCore hero. A generated alternative (a person on a rock at sunrise with five floating pillar icons) was judged too close to YeahSight's mountain-view hero; the two sites should look distinct. That image may be used later inside the 5 Pillars section instead.

---

## 2.2.0

**Landing hero now shows the compass photo the user supplied** (a hand holding a compass in front of a mountain ridge). It fits "how to decide". User request.

- **Image:** the file the user saved is only **570×320** (a smaller copy than the about 2000px photo they showed in chat). It was re-saved as JPEG at quality 85 (about 30 KB) and not enlarged.
- **Display size:** on desktop it is shown in the right part of the hero, about 620px wide, so it is only slightly stretched.
- **Upgrade path:** replace `public/images/hero-compass.jpg` with the full-size original (same name) for a sharper result. No code change is needed.
- **Position:** `--yv-hero-pos: 50% 60%`.
- **Layout (CSS block appended to `src/styles/custom.css`, identical in both sites):**
  - The hero becomes a dark panel (`#0d1620`, `min-height: clamp(340px, 42vw, 460px)`).
  - On screens of 64rem and wider, the photo fills the right 58% of the panel through a `::after` layer. A left-to-right mask fades it from transparent to opaque, so the text column on the left (max 30rem) stays readable.
  - Below 64rem the photo fills the whole panel, under a top-to-bottom dark gradient.
  - Hero text colours are fixed to light tones, so they work in both themes.
- **Per-site variables** at the end of `custom.css`: `--yv-hero-img`, an optional `--yv-hero-img-sm` and `--yv-hero-pos`.
- **Removed:** the drawn SVG mark (`hero.image.html`) from the hero front matter of `index.mdx` (EN+FR), since the photo replaces it.
- **Checked:** at a 1280px viewport in the built-in browser, with a stand-in gradient in place of the photo, the text column ends at 529px. The photo layer starts at 454px but is still nearly transparent there; it is fully opaque only from about 736px. The real photo was not viewed in the browser.
- **Licence:** the source of the photo was not confirmed. If it is from Unsplash or Pexels, no credit is required, though a credit is courteous.

---

## 2.1.0

**A real landing page at the root, and brand colours instead of Starlight's default purple.** User request, done together with YeahSight v2.03.

**What changed at the root:** `/` (and `/fr/`) used to be a near-empty splash page whose only job was a JavaScript redirect to `/welcome/`. That was poor for visitors and for search engines, which saw an empty page at the root. `src/content/docs/index.mdx` (EN+FR) is now a full splash landing page:

- **Hero:**
  - Two-colour "YeahCore" wordmark.
  - Tagline "What people need, and how to decide.", with a sub-line on what YeahCore is.
  - A large inline-SVG concentric-rings mark.
  - Buttons: **Start here** (gradient) and **Take the self-assessment**, which opens the existing Jotform.
- **"Start from what people need":** three link cards for Human needs, Drivers of feelings and Primary goals.
- **"The 5 Pillars":** five coloured cards. Each shows the pillar's "Remedy for" line, shortened from the pillar page, and links to it.
- **"Practical guides":** four cards with chips linking to every article in Decision Foundation, Personal Effectiveness, Organizational Processes, and Collaboration & Leadership.
- **"From understanding to solutions":** the chain strip **YeahCore** → YeahSight → YeahVibe, with YeahCore highlighted. Footer line links HappyBein and the Welcome page, which keeps its video.

The descriptions in the front matter are now quoted. The French one contains ": ", which broke the YAML parse on the first build.

**`src/styles/custom.css`:** the same shared landing and brand-accent block as YeahSight v2.03.

**Unchanged:** `/welcome/` (and its video, which still shows the old YeahVibe branding inside the video itself) and the sidebar.

**Verification:**

- Built in a scratch copy: 75 pages, no warnings.
- The page uses the same components and CSS as the YeahSight landing page, which was previewed in the built-in browser on desktop and mobile. This page itself was not previewed.

---

## 2.0.0

**Renamed from "YeahVibe" (core.yeahvibe.com) to YeahCore, for `yeahcore.happybein.com`.** This is the last step of the content split agreed with the user. HappyBein holds the "understanding" side, under its own domain:

- **YeahCore** (this site) is the base: the human needs and drivers behind what people want, plus the decision foundation and practical guides.
- **YeahSight** (`yeahsight.happybein.com`) builds on it: the societal view.
- **YeahVibe** (`yeahvibe.com`) is now only the tools brand.

The name and subtitle were chosen with the user: "YeahCore — What people need, and how to decide". It is a major bump because the domain, the brand and one page path change.

**Content** (EN+FR, 22 files). Every self-reference "YeahVibe" now reads "YeahCore":

- page titles such as *Welcome to YeahCore* and *Start Here — The YeahCore Roadmap*
- the about pages, *How it works*, *User flow*, *Supporters & partners* and *Advised tools*
- the mindset pillar

**Deliberately kept:**

- The name of the "YeahVibe Prioritization Notion Template" / "Modèle Notion YeahVibe": an external Notion page called that.
- Links that point at the YeahVibe tools.

**Hand-written changes:**

- *About* says YeahCore is HappyBein's knowledge base, the foundation that YeahSight and the YeahVibe tools build on. It used to say "YeahVibe is HappyBein's flagship knowledge platform".
- The Pillar 5 page: "YeahSight is the foresight layer of the framework, and now has its own site".
- *Welcome* opens with the subtitle and one line placing YeahCore under YeahSight and the YeahVibe tools.

**Page renamed:** `/about/about-yeahvibe/` → `/about/about-yeahcore/` (and `/fr/…`). There are 301s for the old paths in `public/_redirects`, and the sidebar slug is updated.

**Site setup:**

- `astro.config.mjs`:
  - `site` → `https://yeahcore.happybein.com`; title YeahCore.
  - Logo now `logo.svg`; favicon `favicon.svg`.
  - The single "YeahSight ↗" sidebar link became a "Related" group: YeahSight, YeahVibe tools, HappyBein.
- `Head.astro`: rebranded the site URL, site name ("YeahCore by HappyBein"), home title, default descriptions (EN/FR), keywords (YeahSight/foresight dropped, "human needs" added), author, OG/Twitter alt text and JSON-LD. The bottom-left pill now reads "⊞ YeahVibe tools" ("Outils YeahVibe" in French) and still goes to yeahvibe.com.
- New visual identity:
  - `src/assets/logo.svg`: concentric-rings "core" mark, plus "Yeah" in blue and "Core" in green.
  - Favicons from the same mark: svg, ico, png, 192, apple-touch.
  - `og-image.png`: 1200×630, wordmark, subtitle and "A HappyBein initiative".
  - Removed the old YeahVibe `logo.png`.
- `public/llms.txt`: retitled YeahCore, with a new intro explaining where it sits; all URLs → yeahcore.happybein.com.
- `public/robots.txt`: sitemap URL updated.
- Kept unchanged: the GitHub repo name `yeahvibe-astro` (and its footer/social link) and the `@yeahvibe` twitter:site handle.

**Not done here (Cloudflare, the user's part):**

- Add `yeahcore.happybein.com` as a custom domain on this Pages project.
- Add a redirect rule in the yeahvibe.com zone: `core.yeahvibe.com/*` → `https://yeahcore.happybein.com/$1` (301).
- Purge the cache.

Until the redirect exists, core.yeahvibe.com keeps serving the site, now with canonical URLs pointing at yeahcore.happybein.com.

**Links updated in the other sites the same session:** yeahsight v2.02, happybein-astro v3.10, dailyapp v1.16.

**Verification:**

- `astro build` in a scratch copy: 75 pages, no warnings.
- Scanned all built HTML for internal links: none broken.
- Example built titles: "About YeahCore | YeahCore by HappyBein" (canonical `https://yeahcore.happybein.com/about/about-yeahcore/`) and "Bienvenue sur YeahCore | YeahCore par HappyBein".
- The only remaining "YeahVibe" strings in the built pages are the "YeahVibe tools" links.
- Checked the generated OG image visually.
- The repo's `src`/`public` are byte-identical to the scratch copy that was built.

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
