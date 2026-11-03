// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://yeahcore.happybein.com',
    integrations: [
        sitemap({
            i18n: {
                defaultLocale: 'en',
                locales: {
                    en: 'en',
                    fr: 'fr',
                },
            },
        }),
        starlight({
            title: { en: 'YeahCore', fr: 'YeahCore' },
            logo: { src: './src/assets/logo.svg', replacesTitle: true },
            favicon: '/favicon.svg',
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/happybein1/yeahvibe-astro' },
                { icon: 'discord', label: 'Discord', href: 'https://discord.com/invite/62xRJHCbRW' },
            ],
            customCss: ['./src/styles/custom.css'],
            components: {
                Head: './src/components/overrides/Head.astro',
                Header: './src/components/overrides/Header.astro',
                MobileMenuFooter: './src/components/overrides/MobileMenuFooter.astro',
                MarkdownContent: './src/components/overrides/MarkdownContent.astro',
                Footer: './src/components/overrides/Footer.astro',
            },
            defaultLocale: 'root',
            locales: {
                root: { label: 'English', lang: 'en' },
                fr: { label: 'Français', lang: 'fr' },
            },
            sidebar: [
                { label: '🏠 Welcome', translations: { fr: '🏠 Bienvenue' }, slug: 'welcome' },
                { label: '📚 All guides', translations: { fr: '📚 Tous les guides' }, slug: 'start-here' },
                // 2.5.0 (owner, 2026-11-01: "these three kind of do but are a bit buried"): the pages on what
                // people need get their own section near the top (were three levels deep under Decision
                // Foundation → Find Your Directional Purpose). Page addresses unchanged.
                {
                    label: '🫀 What People Need',
                    translations: { fr: '🫀 Ce dont chacun a besoin' },
                    collapsed: false,
                    items: [
                        { label: 'Human needs', translations: { fr: 'Les besoins humains' }, slug: 'decision-foundation/find-your-directional-purpose/humans-physiological-needs' },
                    ],
                },
                { label: '🛠️ Advised Tools', translations: { fr: '🛠️ Outils conseillés' }, slug: 'advised-tools' },
                {
                    label: 'The 4 Pillars',
                    translations: { fr: 'Les 4 piliers' },
                    collapsed: false,
                    items: [
                        { label: 'Pillar 1: Direction & Priorities', translations: { fr: 'Pilier 1 : Direction et priorités' }, slug: 'pillars/direction' },
                        { label: 'Pillar 2: Mindset & Wellbeing', translations: { fr: "Pilier 2 : État d'esprit et bien-être" }, slug: 'pillars/mindset' },
                        { label: 'Pillar 3: Organising Your Life', translations: { fr: 'Pilier 3 : Organiser sa vie' }, slug: 'pillars/organization' },
                        { label: 'Pillar 4: Working with Others', translations: { fr: 'Pilier 4 : Travailler avec les autres' }, slug: 'pillars/collaboration' },
                    ],
                },
                {
                    label: 'Direction & Priorities',
                    translations: { fr: 'Direction et priorités' },
                    collapsed: false,
                    items: [
                        { label: 'Ideation & Assessment', translations: { fr: 'Trouver des idées et les évaluer' }, slug: 'decision-foundation/ideation-assessment' },
                        { label: 'Independent Prioritization', translations: { fr: 'Impact ou effort' }, slug: 'decision-foundation/independent-prioritization' },
                        { label: 'Clarity & Alignment', translations: { fr: 'Clarté et alignement' }, slug: 'decision-foundation/clarity-alignment' },
                        { label: 'Tracking and Update', translations: { fr: 'Suivre et ajuster' }, slug: 'decision-foundation/tracking-and-update' },
                        { label: 'Find Your Direction', translations: { fr: 'Trouver votre direction' }, slug: 'decision-foundation/find-your-directional-purpose' },
                    ],
                },
                {
                    label: 'Mindset & Wellbeing',
                    translations: { fr: "État d'esprit et bien-être" },
                    collapsed: false,
                    items: [
                        { label: 'Habits Improvement', translations: { fr: 'Améliorer ses habitudes' }, slug: 'personal-effectiveness/habits-improvement' },
                        { label: 'Growth Mindset', translations: { fr: "L'état d'esprit de croissance" }, slug: 'personal-effectiveness/growth-mindset' },
                        { label: 'Fear Management', translations: { fr: 'Gérer la peur' }, slug: 'personal-effectiveness/fear-management' },
                        { label: 'Why We Feel What We Feel', translations: { fr: 'Pourquoi nous ressentons ce que nous ressentons' }, slug: 'personal-effectiveness/why-we-feel-what-we-feel' },
                        { label: 'Sleeping Well', translations: { fr: 'Bien dormir' }, slug: 'personal-effectiveness/sleeping-well' },
                        { label: 'Stress and Overwhelm', translations: { fr: 'Stress et surcharge' }, slug: 'personal-effectiveness/stress-and-overwhelm' },
                        { label: 'Connection and Loneliness', translations: { fr: 'Lien et solitude' }, slug: 'personal-effectiveness/connection-and-loneliness' },
                        { label: 'When Money Is Tight', translations: { fr: 'Quand l\'argent manque' }, slug: 'personal-effectiveness/when-money-is-tight' },
                        { label: 'Mastering Finance Basics', translations: { fr: "Les bases de l'argent" }, slug: 'personal-effectiveness/mastering-finance-basics' },
                        { label: 'Time Spent Identification', translations: { fr: 'Où passe votre temps' }, slug: 'personal-effectiveness/time-spent-identification' },
                        {
                            label: 'Inspiration',
                            translations: { fr: 'Inspiration' },
                            collapsed: false,
                            items: [
                                { label: 'Daily Activities', translations: { fr: 'Activités du quotidien' }, slug: 'personal-effectiveness/inspiration/daily-activities' },
                                { label: 'Long-Term Goals', translations: { fr: 'Objectifs à long terme' }, slug: 'personal-effectiveness/inspiration/long-term-goals' },
                            ],
                        },
                    ],
                },
                {
                    label: 'Organising Your Life',
                    translations: { fr: 'Organiser sa vie' },
                    collapsed: false,
                    items: [
                        { label: 'Basic Organization Principles', translations: { fr: "Les bases de l'organisation" }, slug: 'organizational-processes/basic-organization-principles' },
                        { label: 'Files & Folder Organization', translations: { fr: 'Organiser fichiers et dossiers' }, slug: 'organizational-processes/files-folder-organization' },
                        { label: 'Managing Commuting Time', translations: { fr: 'Bien utiliser ses trajets' }, slug: 'organizational-processes/managing-commuting-time' },
                    ],
                },
                {
                    label: 'Working with Others',
                    translations: { fr: 'Travailler avec les autres' },
                    collapsed: false,
                    items: [
                        { label: 'Collaboration Principles', translations: { fr: 'Bien travailler avec les autres' }, slug: 'collaboration-leadership/collaboration-principles' },
                        { label: 'Influence and Leadership', translations: { fr: 'Influence et leadership' }, slug: 'collaboration-leadership/influence-and-leadership' },
                        { label: 'Speak Clearly and Confidently', translations: { fr: "S'exprimer clairement et avec assurance" }, slug: 'collaboration-leadership/speak-clearly-and-confidently' },
                        { label: 'When a Discussion Turns into a Fight', translations: { fr: 'Quand une discussion tourne à la dispute' }, slug: 'collaboration-leadership/when-a-discussion-turns-into-a-fight' },
                        { label: 'How Your Organisation Makes Money', translations: { fr: "Comment votre organisation gagne de l'argent" }, slug: 'collaboration-leadership/how-your-organisation-makes-money' },
                        { label: 'Group Decision Making', translations: { fr: 'Décider en groupe' }, slug: 'collaboration-leadership/group-decision-making' },
                    ],
                },
                {
                    label: 'Related',
                    translations: { fr: 'Voir aussi' },
                    collapsed: false,
                    items: [
                        { label: 'YeahSight ↗', link: 'https://yeahsight.happybein.com/', attrs: { target: '_blank' } },
                        { label: 'YeahVibe tools ↗', translations: { fr: 'Outils YeahVibe ↗' }, link: 'https://yeahvibe.com/', attrs: { target: '_blank' } },
                        { label: 'HappyBein ↗', link: 'https://happybein.com/', attrs: { target: '_blank' } },
                    ],
                },
                {
                    label: 'About',
                    translations: { fr: 'À propos' },
                    collapsed: false,
                    items: [
                        { label: 'About YeahCore', translations: { fr: 'À propos de YeahCore' }, slug: 'about/about-yeahcore' },
                        { label: 'How It Works', translations: { fr: 'Comment ça marche' }, slug: 'about/how-it-works' },
                        { label: 'User Flow', translations: { fr: 'Parcours types' }, slug: 'about/user-flow' },
                        { label: 'Supporters & Partners', translations: { fr: 'Soutiens et partenaires' }, slug: 'about/supporters-partners' },
                    ],
                },
            ],
        }),
    ],
});
