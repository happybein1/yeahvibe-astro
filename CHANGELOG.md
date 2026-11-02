# yeahvibe-astro (YeahCore, yeahcore.happybein.com; formerly core.yeahvibe.com) — Changelog

Started 2026-10-13. Earlier versions (up to 1.7.1) were only tracked in `src/version.ts` and git history. This site keeps its existing `MAJOR.MINOR.PATCH` scheme, shown in the footer from `src/version.ts`. Newest version first.

---

## 2.22.3

**"Start Here" becomes "All guides"** (owner, 2026-11-02: "is the start here page still needed?" → recommendation: keep it as the full list, rename, drop the duplicated situations → "makes sense").
- `start-here.mdx`: title "All guides" (address `/start-here/` kept), "The quickest start" situations list removed (same as the home) and replaced by one line pointing to the home. Pillar lists completed: "Find Your Direction" label updated; Working with Others gains "When a Discussion Turns into a Fight" and "How Your Organisation Makes Money" (both were missing).
- Menu label "📚 All guides" (French label unchanged). Link texts updated on home.mdx, welcome.mdx, about/how-it-works, about/user-flow, pillars/direction and `llms.txt`.

**Verification:** site builds in a scratch copy; no English page says "Start Here" any more.

## 2.22.2

**The 4 pillars on the home** (owner, 2026-11-02: "would it be good if the 4 pillars could be in the home page straight away instead of bringing to the start here page" → recommendation → "ok").
- "Go deeper": the "The 4 pillars of good decisions" row (to Start Here) became a 2 x 2 grid linking straight to the four pillar pages (`.yv-pillars`); the line above now reads "The ideas behind the guides, in four areas that make decisions easier."

**Verification:** site builds in a scratch copy; phone-width screenshot.

## 2.22.1

**Clearer lower home sections** (owner, 2026-11-02, phone screenshot: "and is this one clear?" → recommendation → "agreed").
- "The bigger picture" → **"Go deeper"** ("The ideas behind the guides."), links renamed "What every person needs", "The 4 pillars of good decisions", "All guides".
- "From understanding to solutions" (three stacked chain cards, the first pointing at the page itself) → **"Part of HappyBein"** with two plain links: YeahSight (what it means for society) and YeahVibe (tools to put it into practice). Footer line drops the repeated "A HappyBein initiative".

**Verification:** site builds in a scratch copy; phone-width screenshot.

## 2.22.0

**Home starts with the question** (owner, 2026-11-02, phone screenshot with large text where only 3 situations showed: "i still think the main page needs improvement" → recommendation → "go").
- `index.mdx`: the hero card is now the question "What do you need help with right now?" with one line under it ("3-minute guides. Read or listen, then try one small step."). The separate heading and its "Pick one…" line are gone; an empty anchor keeps `#what-do-you-need-help-with-right-now` working. "What people need, and how to decide." moves under "The bigger picture".
- `custom.css`: slimmer hero (no minimum height) and slimmer one-column situation rows (smaller padding and emoji).

**Verification:** site builds in a scratch copy; screenshots at 412 px (two columns, all six situations plus the video card on the first screen) and 330 px (one column, all six rows on the first screen).

## 2.21.1

**🎧 after related guides on situation pages** (owner, 2026-11-02: "should the podcast listen button also be added to related section below?" → recommendation: no full buttons, a small icon if wanted → "ok for the small icon").
- `help/*.mdx`: each "Related" / "Other ways in" link to a guide that has a podcast gets a small 🎧 button (`.yv-listen--icon`), 13 in all; pillar and Human needs links have none. Same in-place player as the Listen buttons (`Head.astro`): ❚❚ while playing, one episode at a time.

**Verification:** site builds in a scratch copy.

## 2.21.0

**Compact home; "Listen" buttons on situation pages** (owner, 2026-11-02, with phone screenshots: "how can the landing page be improved? the logo could be removed for instance. also for the sub page, should the podcast of the read article be already there for faster access?" → recommendation → "ok go ahead with yeahcore improvement").
- Home (`index.mdx`): the big "YeahCore" wordmark in the hero is gone (the name is already in the header); the hero title is now the tagline "What people need, and how to decide.", with the short line below ("read or listen for 3 minutes"). "Start here" button removed (it only scrolled to the list). Hero shorter (`.yv-hero-q` rules in `custom.css`). On a 412 px phone all six situations now show on the first screen.
- Intro video card moved below the situations list.
- The six situation pages (`help/*.mdx`): step 1 has "▶ Listen · N min" next to "Read", playing that guide's podcast episode in place (`.yv-listen`, script in `Head.astro`: one episode at a time, the button shows ❚❚ and the time while playing). French pages unchanged.

**Verification:** site builds in a scratch copy; phone-width screenshots of home and "I can't decide".

## 2.20.0

**New guide "How Your Organisation Makes Money"** (owner, 2026-11-02: "where would organizational finance basics go?" → "yeah create that new guide", draft reviewed → "go").
- New guide `collaboration-leadership/how-your-organisation-makes-money.md` (4 min, Collaboration & Leadership menu, last entry): why it matters even if numbers aren't your job; 1. money in, money out (revenue, fixed and variable costs); 2. profit (creating value; non-profits too); 3. cash (profitable on paper but out of cash); 4. what it owns and what it owes (balance sheet); using this at work (revenue, costs or cash?; pitch with cost, gain and timing; protect cash in hard times). Links to Money basics.
- `personal-effectiveness/mastering-finance-basics.md`: "Organizational finance basics" section removed (the podcast already skipped it); a closing line links to the new guide.
- Podcast: new Emma and Sam episode (2 min 34 s), added to the HappyBein Podcast feed (happybein-astro v4.27), 27 episodes.

**Verification:** site builds in a scratch copy; audio URL answers.

## 2.19.0

**"Find Your Direction" merged; new guide "Why We Feel What We Feel"** (owner, 2026-11-01: "can you make a draft for 2" (merge the purpose guides); "i miss the article about the neurotransmitter root of what makes people feel and desire" (none existed in any repo or history) → draft; "important that serotonin rewards recognition"; → "go ahead").
- `decision-foundation/find-your-directional-purpose.md` rewritten as "Find Your Direction" (4 min): a compass, not a map; 1. what do you want over time (wellbeing, relationships, growth, freedom); 2. what gives you energy and what drains it (progress, choice, feeling capable, belonging, meaning, safety); 3. are your basic needs covered (links to Human needs, which stays its own page); use it as a filter; when nothing sparks. Same address and "Try today". Business parts left out (covered in Working with Others).
- "What people aim for" and "What drives our feelings" removed (English files deleted, menu entries removed); their English addresses redirect to Find Your Direction (`public/_redirects`). French pages untouched until the French update. Links updated on home, welcome, Start Here, pillar 1, user flow, "I'm tired" page and `llms.txt`.
- New guide `personal-effectiveness/why-we-feel-what-we-feel.md` (4 min, Mindset & Wellbeing menu): dopamine (wanting; quick-reward trap; small wins), serotonin (recognition and contentment: feeling valued; likes/comparison trap; recognition works both ways), oxytocin, endorphins, cortisol (give stress an end); what this means for you; not medical advice. Linked from Find Your Direction's energy section.
- Podcast: new episodes for both (Emma and Sam); the two removed guides' episodes leave the HappyBein Podcast feed (happybein-astro v4.26), 26 episodes.

**Verification:** site builds in a scratch copy; both audio URLs answer; no English page links to the removed addresses.

## 2.18.0

**Podcast audio, batch 3: the last 7 guides** (owner, 2026-11-01: "can you prepare batch 3 in parallel", scripts reviewed → "yes for both").
- Organising Your Life: Basic Organization Principles, Files & Folder Organization, Managing Commuting Time.
- Working with Others: Group Decision Making, Speak Clearly and Confidently, Collaboration Principles, Influence and Leadership.
- Same format (Emma interviews Sam, one thing to try today, separate AI-voice line). All 27 English guides now have a podcast episode; overview pages (pillars, About, Advised Tools) have none.
- Also in the HappyBein Podcast feed (happybein-astro v4.25), so they show in Radio.

**Verification:** site builds in a scratch copy; the 7 audio URLs answer.

## 2.17.0

**Podcast audio, batch 2: 11 more guides** (owner, 2026-11-01: "ok go for batch 2", scripts reviewed → "go").
- Same format as 2.16.0 (Emma interviews Sam, one thing to try today, separate AI-voice line at the end).
- Direction & Priorities: Clarity & Alignment, Tracking and Update, What drives our feelings, What people aim for, Human needs.
- Mindset & Wellbeing: Habits Improvement, Growth Mindset, Fear Management, Mastering Finance Basics (personal part only; points to "When money is tight" if money is a struggle now), Time Spent Identification, Long-Term Goals.
- These guides have no "Try today" on the page; each episode adds its own.
- Files at `https://audio.happybein.com/yeahcore/<slug>.podcast.en.mp3`; front matter `audio`/`audioMinutes` added.

**Verification:** site builds in a scratch copy; the 11 audio URLs answer.

## 2.16.0

**Podcast audio for 9 guides** (owner, 2026-11-01: "the voice is really bad" for the browser voice → recorded audio; "I personally prefer a podcast like version, even if it does not perfectly match the text"; "more about someone interviewing a knowledgeable person"; "I feel better having the woman interviewing the man"; names Emma and Sam "fine"; AI note made clearer; scripts reviewed → "go").
- Each episode is a 2–3 minute interview: Emma (host, Kokoro `af_heart`) asks the listener's questions, Sam (guest, `am_puck`) explains the good practices with everyday examples and ends with one thing to try today. Last line, after a 1-second pause: "Just so you know: the voices in this episode were generated with AI."
- Guides: Independent Prioritization, Stress and Overwhelm, Find Your Directional Purpose, Sleeping Well, When Money Is Tight, Connection and Loneliness (these six replace their read-aloud audio from 2.12.0), plus When a Discussion Turns into a Fight, Ideation & Assessment and Daily Activities (new audio).
- Files at `https://audio.happybein.com/yeahcore/<slug>.podcast.en.mp3` (new addresses, so no cached old audio); front matter `audio`/`audioMinutes` updated.
- Player label (English): "Listen to the podcast" (was "Listen to this guide").
- Ideation & Assessment and Daily Activities have no "Try today" on the page; their episodes add one (ten ideas in ten minutes; one small habit every day this week).
- Recording: `make_podcast.py` on the ROG (Kokoro), scripts `podcast-<slug>.en.txt`; not in this repo.

**Verification:** site builds in a scratch copy; the 9 audio URLs answer; a guide page shows the player.

## 2.15.0

**New guide: "When a Discussion Turns into a Fight"** (owner, 2026-11-01: shared a French text with tips on arguments that go nowhere, "would it make sense to add an article covering these very useful tips?" → draft in our own words → "go ahead").
- `collaboration-leadership/when-a-discussion-turns-into-a-fight.md` (3 min): good arguments are not enough; watch before you answer; ask questions that make people think; stick to one point; you don't have to answer everything; check your own pride too; ends with "Your next step" (ask one precise question before answering) and a back button to "I feel alone, or it's hard with others".
- Written in our own words from the shared tips; no quotes, no philosopher name.
- Menu: Working with Others, after "Speak Clearly and Confidently" (French label set for later; no French page yet).
- `help/alone.mdx`: new "Other ways in" line linking to it.
- No audio yet.

**Verification:** site builds in a scratch copy; the guide and situation page render.

## 2.14.2

**Home: compact situation list on narrow phones** (owner, 2026-11-01, phone screenshot showing the six cards one per row with only four visible → "ok").
- When the situation cards fall back to one column (narrow screen or large text size), each card shows the emoji beside the text and is shorter, so all six fit on one screen. Uses a container query on a new `.yv-sits-wrap` around the grid (`index.mdx`, `custom.css`). The two-per-row layout on wider screens is unchanged.

**Verification:** site builds in a scratch copy; screenshots at 420px (two per row, unchanged) and 330px (compact list) checked.

## 2.14.1

**Home: "Start here" goes to the situations; floating tools button removed** (owner, 2026-11-01, phone screenshot: the floating "YeahVibe tools" button covered the "What do you need help with right now?" heading, and "should start here not just link to the 6 use cases below?" → "ok").
- The home banner's "Start here" button now scrolls down to the six situation cards (`#what-do-you-need-help-with-right-now`) instead of opening the Start Here page. Start Here stays in the menu.
- The floating "⊞ YeahVibe tools" pill (script in `overrides/Head.astro`) is removed from all pages. YeahVibe tools stays reachable from the menu ("Related → YeahVibe tools ↗") and a new footer link; the guides' "Your next step" boxes link to the right tool directly.

**Verification:** site builds in a scratch copy; phone-width screenshot checked; the button's anchor matches the heading id.

## 2.14.0

**"I feel stuck or lost" becomes "I feel stuck or uninspired"** (owner, 2026-11-01: "should we add i am not inspired as use case?" → widen the existing situation instead of a seventh card, "ok"; "should we mention multiple options beyond find your purpose such as ideation?" → one main path plus a short "Other ways in" line, "ok").
- New label on the home card, Start Here, the situation page title and the back button at the end of "Find your direction".
- Situation page lead: "You're busy but not sure what for, or nothing sparks anymore. A sense of direction brings back energy and makes everyday choices easier."
- New "Other ways in" line under the path: Ideation & Assessment ("Collect ideas before choosing") and Inspiration → Daily Activities ("Small daily activities that bring energy back"). The main path (Find your direction → try today → IntentFlow) is unchanged.
- Not changed: guide texts and audio; the intro video still says "I feel stuck or lost" (close enough, no re-record); French.

**Verification:** site builds in a scratch copy; phone-width screenshots of the home and the situation page checked.

## 2.13.4

**Old "Listen" button removed** (owner, 2026-11-01: "shall the previous listen button be removed? the voice is really bad" → "yes"). The floating Listen button read pages with the phone's built-in text-to-speech voice, which sounded robotic. It is gone from all pages (script in `overrides/Head.astro` and its `#yv-tts-*` styles in `custom.css`). The six situation guides keep their recorded audio player; other guides have no listen option for now.

**Verification:** site builds in a scratch copy; a guide page checked for no leftover button.

## 2.13.3

**Home: play icon and banner text** (owner, 2026-11-01, phone screenshot: "is this as intended?" → "ok").
- The video card's ▶ character showed as an orange emoji on Android; it is now a drawn (SVG) white triangle.
- Banner text matches the situation-based site and the video: "Short, practical guides to feel better and decide better. Pick what you need, read for 3 minutes, try one small step." (was "The base of HappyBein: the human needs behind what people want, and practical frameworks…").

**Verification:** site builds in a scratch copy; phone-width screenshot checked.

## 2.13.2

**Old self-assessment form removed from the remaining English pages** (owner, 2026-11-01: "yes" to the cleanup after 2.13.1). The external JotForm self-assessment (222552689387066) is replaced by the situation-based home:
- Pillar pages (all four): "Not sure this is your pillar? Start from what you need help with instead." (links to /).
- How it works: the "Self-Assessment Tool" item becomes "What do you need help with?" (pick a situation, get one short path).
- User flow, step 5: "Pick the situation closest to how you feel right now (1 min)".
- Advised tools: the "Measure Your Wellbeing" item (same form) is removed.
- Welcome and the old home page (`home.mdx`): the closing line now points to the situations and Start here; `home.mdx` loses its "Self Assessment" hero button.
- Unchanged: the French pages (English first), and the separate one-minute feedback form.

**Verification:** site builds in a scratch copy; no English page links the form any more.

## 2.13.1

**Self-assessment link removed from the English home banner** (owner, 2026-11-01: "yes"). The hero keeps only "Start here". The old JotForm self-assessment was already taken off Start here in 2.9.0. Still linked (unchanged, not asked): the French home, the pillar pages, How it works, the user-flow page, Advised tools, and the old `home.mdx` / `welcome.mdx` pages.

**Verification:** site builds in a scratch copy.

## 2.13.0

**The YeahCore intro video on the home** (owner, 2026-11-01: "does it make sense to publish on yeahcore landing page as well instead of the text" → recommendation: a folded card, situations stay first → "ok").
- New card between the hero and "What do you need help with right now?": **▶ Watch: YeahCore in 90 seconds** (What it is and how to use it · 1:28). Tapping it unfolds the video (`<details class="yv-video">`), so it doesn't push the situations down.
- The video plays from happybein.com (`/video/introducing-yeahcore.en.mp4`, poster `.jpg`, English subtitles `.en.vtt`; happybein.com sends `access-control-allow-origin: *`, so the subtitle track loads cross-origin). Kept on one line in `index.mdx` (MDX fails on a multi-line `<details>` block).
- Styles `.yv-video*` in `custom.css`. English only.

**Verification:** site builds in a scratch copy (91 pages); phone-width screenshot of the home checked.

## 2.12.0

**Recorded audio for the six situation guides** (owner, 2026-11-01: "shall we consider to get these articles recorded…?" → recommendation (audio first, explainer videos later) → "yes" → "publish"). English only.
- The six guides used as a situation's step 1 (Stress and Overwhelm, Connection and Loneliness, Independent Prioritization, Find Your Directional Purpose, Sleeping Well, When Money Is Tight) have a recording in the HappyBein video voice (Kokoro `am_puck`, speed 0.95, made on the ROG with `happybein-astro/tools/video/make_intro.py`, `NAME=guide-<slug>`), 2–4 min each, mp3 48 kbit/s mono, loudness-normalised like YeahSight's episodes.
- Hosted on R2 like YeahSight: `https://audio.happybein.com/yeahcore/<slug>.en.mp3` (uploaded with a copy of YeahSight's `upload_audio.py` using the `yeahcore/` prefix).
- New front matter `audio` and `audioMinutes` (`src/content.config.ts`), shown by `MarkdownContent.astro` as a **🎧 Listen to this guide** player above the text (same look as YeahSight's). On those pages the floating "Listen" button (browser speech) in `Head.astro` steps aside.
- Voice scripts were made from the guide text (title, then one part per heading; links, bold and the "Your next step" box removed). Independent Prioritization's impact/difficulty table is spoken as four sentences instead.

**Verification:** site builds in a scratch copy (91 pages); the player appears on the six guides and not on others; the R2 file answers 200 `audio/mpeg`.

## 2.11.0

**New guide "When Money Is Tight" for "💸 Money worries me"** (owner, 2026-11-01: "the finance article is not very well for a user having financial problem" → outline → "agree for you to draft" → "should that article refer to shoptools for budgets?" → "yes" → "okay"). English only.
- `personal-effectiveness/when-money-is-tight.md` (3 min): first, breathe; see the full picture (income, fixed bills with dates, debts); protect the essentials first (housing, energy and water, food, health and getting to work; then debts with the biggest consequences); talk to creditors early; help you may be missing (benefits, free debt advice, local services; warning about paid "debt solutions" and quick loans); small steps (cancel unused subscriptions, weekly spending amount with the ShopTools Budget tab, shop with a list); when to get help, and a link to Money basics for when things are stable; at the societal level. Ends with "Your next step": list your fixed bills and their due dates, **Open ShopTools** (ShopTools has no link that opens the Budget tab directly, so the button opens the app), back to the situation.
- `help/money.mdx`: step 1 reads the new guide; lead text matches it; step 2 "List your fixed bills and their due dates on one page"; step 3 "Set a weekly amount… in the Budget tab" with Open ShopTools; Related now Money basics · Where your time goes.
- Mastering Finance Basics is no longer the situation's guide, so its "Your next step" box is removed (its content is unchanged; the owner has not yet decided on removing its business section).
- Added to the Mindset & Wellbeing menu (fr label *Quand l'argent manque*) and to Pillar 2 on Start here.

**Verification:** site builds in a scratch copy (91 pages); the new page has the next-step box, the old one no longer does.

## 2.10.0

**Plainer menu names, matching "Start here"** (owner, 2026-11-01: "ok" to renaming the menu sections like the 2.9.0 pillar names). English labels only; French menu labels and all URLs unchanged.
- Menu sections: Decision Foundation → **Direction & Priorities** · Personal Effectiveness → **Mindset & Wellbeing** · Organizational Processes → **Organising Your Life** · Collaboration & Leadership → **Working with Others**.
- "The 4 Pillars" menu items and the four pillar page titles: Pillar 1: Direction and Priorities · Pillar 2: Mindset and Wellbeing · Pillar 3: Organising Your Life · Pillar 4: Working with Others (were "Defining Direction & Priorities", "Enhancing the Mindset", "Organizing Your Surroundings & Processes", "Collaboration & Leadership Principles").

**Verification:** site builds in a scratch copy (89 pages); new labels in the English menu, French menu unchanged.

## 2.9.0

**"Start here" rewritten to match the situation-based home** (owner, 2026-11-01: "yes" to updating it, screenshot → "ok"). English only.
- New intro (what YeahCore is, in one plain sentence) replaces the "high-leverage journey / we don't believe in busy" text. Title "Start Here — The YeahCore Roadmap" → "Start Here".
- New section **The quickest start: pick what you need** with the six situations (`/help/*`).
- **The 4 pillars** (was "The 4 Pillars of Leverage"; home link anchor updated to `#the-4-pillars`): same cards, plainer names and text: Direction and priorities (tag "A good place to start") · Mindset and wellbeing · Organising your life · Working with others; labels "The Remedy for / The Insight" → "Helps when / The idea". Pillar 2 lists the two new guides; "Human's Physiological Needs" → "Human needs".
- Removed: the Master List section, the external JotForm self-assessment links, the "Your First Step" list and the closing slogan. New closing section **Keep it going** pointing to IntentFlow.

**Verification:** site builds in a scratch copy (89 pages); phone-width screenshot checked and sent to the owner; home "The 4 pillars" link points at the new anchor.

## 2.8.0

**"Your next step" at the end of each situation's guide** (owner, 2026-11-01: "keep improving the flow of the english version before translations and recording" → proposal → "ok", screenshot → "ok"). The situation path broke at the guide: step 1 "Read" led to a guide that simply ended.
- The six guides used as step 1 (Stress and Overwhelm, Connection and Loneliness, Independent Prioritization, Find Your Directional Purpose, Sleeping Well, Mastering Finance Basics) now end with a box: **Your next step**, the situation's "Try today" action, **Open in IntentFlow**, and **‹ Back to "<situation>"**. Plain HTML appended to each `.md` (with an HTML comment naming its `help/*.mdx` page); styles `.yv-next*` in `custom.css`.
- Reading time of the two new guides corrected from 5 to 3 min (frontmatter and the "Read" buttons on "I'm overwhelmed" and "I feel alone…"), matching what the page itself shows.
- English only (owner: improve the English flow before translations).

**Verification:** site builds in a scratch copy (89 pages); the box renders on each guide; phone-width screenshot of Stress and Overwhelm checked and sent to the owner.

## 2.7.0

**Two new guides fill the "in preparation" gaps** (owner, 2026-11-01: "what would you do next" → outlines → "write them" → "ok go for them"). English only for now.
- **Stress and Overwhelm** (`personal-effectiveness/stress-and-overwhelm.md`, 5 min): stress isn't the enemy; signs you're overloaded (body, mind, behaviour); calm it in 2 minutes (long out-breath, name the feeling, move); lighten the load (empty your head, sort into do now / plan / drop / ask for help, pick three); protect recovery (links Sleeping well, Fear management); when to get help; at the societal level.
- **Connection and Loneliness** (`personal-effectiveness/connection-and-loneliness.md`, 5 min): loneliness is a signal, not a flaw; why it matters; small steps (one message, one invitation, short chats); places where connection grows (regular shared activities); deepening what you have; when it's heavier (doctor or helpline); at the societal level.
- Both added to the Personal Effectiveness menu after Sleeping Well (French menu labels: *Stress et surcharge*, *Lien social et solitude*; French pages not yet translated).
- Situation pages: "I'm overwhelmed" and "I feel alone…" now use the new guides as step 1 Read; the "guide in preparation" notes are removed; their Related links now point to Where your time goes / Working well with others (the former step 1 articles).

**Verification:** site builds in a scratch copy (89 pages); both guide pages built; all links on the two situation pages resolve.

## 2.6.0

**Home starts from situations** (owner, 2026-11-01: "how would this site be used by people? it feels like too much information and not clear where to go despite the pillars" → mock-up → "go for it in English only for now, I will try how it feels later").
- The English home now asks **"What do you need help with right now?"** with six situations: I can't decide · I'm overwhelmed · I feel stuck or lost · I'm tired or sleep badly · Money worries me · I feel alone, or it's hard with others. Below it, **The bigger picture**: What people need, The 4 pillars, Explore everything (Start Here). The former home sections (needs cards, 4 pillars grid, practical guides grid) are replaced by these; the hero and the YeahCore → YeahSight → YeahVibe chain stay.
- Each situation has its own page (`src/content/docs/help/<slug>.mdx`, not in the menu) with one short path: **1 Read** (the single best existing article, with its reading time), **2 Try today** (one concrete action), **3 Keep it going** (open IntentFlow), plus two related links. "I'm overwhelmed" and "I feel alone…" use the closest existing articles and say that a dedicated guide (stress and emotions; relationships and loneliness) is in preparation.
- English only; the French home is unchanged (Starlight shows the English situation pages on /fr/ with its usual "not translated" notice).
- New styles in `custom.css` (`.yv-sits`, `.yv-links`, `.yv-path`, `.yv-pstep`, `.yv-btn`).

**Verification:** site builds in a scratch copy; every internal link on the home and the six pages resolves to a built page; phone-width screenshots of the home and "I can't decide" checked.

## 2.5.0

**"What People Need" gets its own menu section** (owner, 2026-11-01, sidebar screenshot: the needs pages "kind of do [cover what people need] but are a bit buried"). The three pages on what people need were three levels deep (Decision Foundation → Find Your Directional Purpose). They now form a section of their own right after Start Here, open by default: **🫀 What People Need** / *🫀 Ce dont les gens ont besoin*, with plainer titles (page titles and menu, en and fr):
- Human's Physiological Needs → **Human needs** / *Les besoins humains* (it covers all five needs, not only the body);
- Core Drivers of Feelings → **What drives our feelings** / *Ce qui guide nos émotions*;
- Generic Primary Goal Breakdown → **What people aim for** / *Ce que les gens recherchent*.
"Find Your Directional Purpose" stays under Decision Foundation as a single page (its group only held these three). Page addresses are unchanged, so no link breaks. Planned next (owner to review an outline first): short practical guides in this section for the thinly covered needs (stress and emotions, body basics, relationships, security).

**Verification:** site builds in a scratch copy; the new section appears in the English and French menus.

## 2.4.10

**Search markup removed** (Google Search Console, 2026-10-26): the schema.org `SearchAction` in `Head.astro` pointed to `/search?q={search_term_string}`, a page that does not exist, which Google reported as "Not found". Old `/applications/` article addresses are now resolved on the YeahSight side (yeahsight v2.42).

**Verification:** site builds.

---

## 2.4.9

**Version number next to the title, and the language menu as an icon only** (owner, same fix as YeahSight v2.40: "I don't see versioning and internal tag", then "you may reduce the language toggle to the icon only as well"). The version was only in the footer at the bottom of article pages, so the owner's internal mark (the teal dot from yv-internal, `Head.astro`) appeared there, out of sight. The header now shows a small `v2.4.9` next to the YeahCore title (`Header.astro`, tooltip with the version notes and date); `Head.astro`'s dot picks it up as the first version element on the page. The footer version stays. The language menu shows only its translate icon (no label, no caret) at every width; the open list still names each language. This replaces 2.4.3's narrowed 6.2rem phone menu.

**Verification:** site builds. Headless Firefox at 1280 px and 400 px: version next to the title, teal dot under it with `?internal`, language icon only, menu button still visible on phones.

## 2.4.8

**Google Analytics and the cookie banner removed; Cloudflare Web Analytics only** (owner decision, after confirming Cloudflare counts visits). The yv-consent banner and the GA4 config are gone, as is the "Cookie settings" link in the footer. The head now carries the shared snippet `_shared/internal.js` (yv-internal v5): Cloudflare's cookieless beacon for every visitor except browsers with the owner's `?internal` mark (dot under the version number), and on happybein.com / yeahdev.com it deletes leftover `_ga*` cookies and the old `yv_consent` choice (not on yeahvibe.com, where the apps still use them). No cookies are set for visitors any more.

**Verification:** built site in headless Firefox: no banner, no Google script; marked browser shows the dot. Snippet run in Node per domain: unmarked loads the right site token, marked loads none; old GA cookies removed on happybein.com and yeahdev.com, kept on yeahvibe.com.

---

## 2.4.7

**Internal mark shown as a dot under the version number** (owner request). Browsers with the owner's internal mark now get a small teal dot under the site's version number (tooltip: "Internal: your visits are not counted in the analytics") instead of the corner label; the corner label remains only on a page with no version number. Shared snippet `_shared/internal.js` is now yv-internal v4, which also carries the yeahvibe.com Cloudflare Web Analytics site token.

**Verification:** built site in headless Firefox, marked: dot under the version, no corner label. Builds clean.

---

## 2.4.6

**A visible hint for marked browsers.** Browsers carrying the owner's internal mark (`?internal`) now show a small "● internal" label in the bottom-left corner; tapping it explains the status and offers "Remove the mark" (`?internal=off`). Visitors without the mark never see it. Shared snippet `_shared/internal.js`, now yv-internal v3 (it sits under the cookie banner while that is open).

**Verification:** built site in headless Firefox: `?internal` shows the confirmation; the next visit shows the label; tapping it shows the status with the remove link; `?internal=off` confirms removal and the next visit shows no label.

---

## 2.4.5

**Cookieless visit counts with Cloudflare Web Analytics.** The shared analytics snippet (`_shared/internal.js`, now yv-internal v2) loads Cloudflare's beacon (manual JS-snippet setup, site token for happybein.com, which also covers yeahsight. and yeahcore.happybein.com; filter by Host in the dashboard) for every visitor, **except browsers carrying the owner's internal mark**, since Cloudflare Web Analytics has no filter of its own. It sets no cookies and identifies no one, so it needs no consent and counts visitors who decline Google Analytics too. Google Analytics and its consent banner are unchanged. The privacy policy at happybein.com/privacy (linked from this site) now describes it.

**Verification:** the snippet run in Node with a mocked browser on yeahsight.happybein.com: unmarked adds the beacon with the token, marked adds nothing. Site builds cleanly.

---

## 2.4.4

**Owner-traffic marker for Google Analytics.** Opening any page with `?internal` marks this browser as internal for the whole domain for a year (first-party cookie `yv_internal=1` on the registrable domain, plus a localStorage copy); `?internal=off` removes it. While marked, the GA4 config carries `traffic_type=internal` (what GA4's "Internal traffic" data filter keys on) and the user property `internal_user=true`. A small notice confirms the change and links to the same switch on the other two domains (happybein.com, yeahvibe.com, yeahdev.com). Same cookie name and meaning as the *.yeahvibe.com apps, which already set it when the owner signs in to IntentFlow or ShopTools and read it on every open. Consent is unchanged: without "Accept" nothing is sent at all. Snippet source: `_shared/internal.js`, replacing the plain `gtag('config', ...)` block (now `is:inline`, so Astro no longer bundles it as a module).

**Verification:** the snippet run in headless Firefox: `?internal` sets cookie + localStorage, config carries `traffic_type: internal` and the user property, notice shown; the next plain visit keeps the mark with no notice; `?internal=off` clears both and the config goes back to plain; the visit after stays unmarked. Site builds cleanly.

---

## 2.4.3

**Menu on the home page, and the phone top bar keeps its menu button** — same two fixes as YeahSight v2.32, after the owner reported the missing menu there and asked "also needed for yeahcore?".

- Home (EN + FR) switched from `template: splash` (Starlight's landing layout, no sidebar, so no ☰ button on phones) to `template: doc` with `tableOfContents: false`, keeping the hero.
- `src/components/overrides/Header.astro` (identical to YeahSight's): under 50rem the theme choice is hidden in the top bar (it stays at the bottom of the phone menu) and the language choice is narrowed, so the menu button is no longer pushed off narrow screens.

**Verification:** built locally; home screenshotted at 412 px (☰ visible) and 1366 px (sidebar, desktop header unchanged).

---

## 2.4.2

**Sharper link-preview image.** LinkedIn's preview of the 2.4.1 image looked blurry after LinkedIn shrank and recompressed it. Same design, now rendered at 2400×1260 as `public/og-card.png` (bottom line slightly larger and darker); `Head.astro` points og:image/twitter:image at it and declares 2400×1260. New file name so LinkedIn fetches it fresh; `og-share.png` removed.

**Verification:** built locally; og:image and its declared size on the home page and a pillar page match the new file.

---

## 2.4.1

**New link-preview image.** Shared YeahCore links used a dark `og-image.png`. To match the new happybein.com, YeahVibe and YeahSight previews made the same day, a light version in the HappyBein style replaces it: compass logo with the YeahCore wordmark, "What people need, and how to decide", the 4 pillars as chips (Direction, Mindset, Organisation, Collaboration), "Free to read · English and French · A HappyBein initiative", yeahcore.happybein.com. New file `public/og-share.png` (1200×630); `src/components/overrides/Head.astro` points og:image and twitter:image at it, under a new file name so LinkedIn and others fetch it fresh. The old `og-image.png` stays in place, unused. The owner approved the draft.

**Verification:** built locally; og:image on the home page and on a pillar page is the new file.

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
