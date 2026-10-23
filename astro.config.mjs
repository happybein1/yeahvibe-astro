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
                { label: '🧭 Start Here', translations: { fr: '🧭 Commencer ici' }, slug: 'start-here' },
                { label: '🛠️ Advised Tools', translations: { fr: '🛠️ Outils conseillés' }, slug: 'advised-tools' },
                {
                    label: 'The 4 Pillars',
                    translations: { fr: 'Les 4 Piliers' },
                    collapsed: false,
                    items: [
                        { label: 'Pillar 1: Direction', translations: { fr: 'Pilier 1 : Direction' }, slug: 'pillars/direction' },
                        { label: 'Pillar 2: Mindset', translations: { fr: "Pilier 2 : État d'esprit" }, slug: 'pillars/mindset' },
                        { label: 'Pillar 3: Organization', translations: { fr: 'Pilier 3 : Organisation' }, slug: 'pillars/organization' },
                        { label: 'Pillar 4: Collaboration', translations: { fr: 'Pilier 4 : Collaboration' }, slug: 'pillars/collaboration' },
                    ],
                },
                {
                    label: 'Decision Foundation',
                    translations: { fr: 'Fondation de la décision' },
                    collapsed: false,
                    items: [
                        { label: 'Ideation & Assessment', translations: { fr: 'Idéation et évaluation' }, slug: 'decision-foundation/ideation-assessment' },
                        { label: 'Independent Prioritization', translations: { fr: 'Priorisation indépendante' }, slug: 'decision-foundation/independent-prioritization' },
                        { label: 'Clarity & Alignment', translations: { fr: 'Clarté et alignement' }, slug: 'decision-foundation/clarity-alignment' },
                        { label: 'Tracking and Update', translations: { fr: 'Suivi et mise à jour' }, slug: 'decision-foundation/tracking-and-update' },
                        {
                            label: 'Find Your Directional Purpose',
                            translations: { fr: 'Trouver votre objectif directionnel' },
                            collapsed: false,
                            items: [
                                { label: 'Overview', translations: { fr: "Vue d'ensemble" }, slug: 'decision-foundation/find-your-directional-purpose' },
                                { label: 'Generic Primary Goal Breakdown', translations: { fr: 'Décomposition des objectifs primaires' }, slug: 'decision-foundation/find-your-directional-purpose/generic-primary-goal-breakdown' },
                                { label: 'Core Drivers of Feelings', translations: { fr: 'Moteurs des émotions' }, slug: 'decision-foundation/find-your-directional-purpose/core-drivers-of-feelings' },
                                { label: "Human's Physiological Needs", translations: { fr: 'Besoins physiologiques humains' }, slug: 'decision-foundation/find-your-directional-purpose/humans-physiological-needs' },
                            ],
                        },
                    ],
                },
                {
                    label: 'Personal Effectiveness',
                    translations: { fr: 'Efficacité personnelle' },
                    collapsed: false,
                    items: [
                        { label: 'Habits Improvement', translations: { fr: 'Amélioration des habitudes' }, slug: 'personal-effectiveness/habits-improvement' },
                        { label: 'Growth Mindset', translations: { fr: "État d'esprit de croissance" }, slug: 'personal-effectiveness/growth-mindset' },
                        { label: 'Fear Management', translations: { fr: 'Gestion de la peur' }, slug: 'personal-effectiveness/fear-management' },
                        { label: 'Sleeping Well', translations: { fr: 'Bien dormir' }, slug: 'personal-effectiveness/sleeping-well' },
                        { label: 'Mastering Finance Basics', translations: { fr: 'Maîtriser les bases de la finance' }, slug: 'personal-effectiveness/mastering-finance-basics' },
                        { label: 'Time Spent Identification', translations: { fr: 'Identification du temps passé' }, slug: 'personal-effectiveness/time-spent-identification' },
                        {
                            label: 'Inspiration',
                            translations: { fr: 'Inspiration' },
                            collapsed: false,
                            items: [
                                { label: 'Daily Activities', translations: { fr: 'Activités quotidiennes' }, slug: 'personal-effectiveness/inspiration/daily-activities' },
                                { label: 'Long-Term Goals', translations: { fr: 'Objectifs à long terme' }, slug: 'personal-effectiveness/inspiration/long-term-goals' },
                            ],
                        },
                    ],
                },
                {
                    label: 'Organizational Processes',
                    translations: { fr: 'Processus organisationnels' },
                    collapsed: false,
                    items: [
                        { label: 'Basic Organization Principles', translations: { fr: "Principes d'organisation de base" }, slug: 'organizational-processes/basic-organization-principles' },
                        { label: 'Files & Folder Organization', translations: { fr: 'Organisation des fichiers et dossiers' }, slug: 'organizational-processes/files-folder-organization' },
                        { label: 'Managing Commuting Time', translations: { fr: 'Gérer le temps de trajet' }, slug: 'organizational-processes/managing-commuting-time' },
                    ],
                },
                {
                    label: 'Collaboration & Leadership',
                    translations: { fr: 'Collaboration et leadership' },
                    collapsed: false,
                    items: [
                        { label: 'Collaboration Principles', translations: { fr: 'Principes de collaboration' }, slug: 'collaboration-leadership/collaboration-principles' },
                        { label: 'Influence and Leadership', translations: { fr: 'Influence et leadership' }, slug: 'collaboration-leadership/influence-and-leadership' },
                        { label: 'Speak Clearly and Confidently', translations: { fr: 'Parler clairement et avec confiance' }, slug: 'collaboration-leadership/speak-clearly-and-confidently' },
                        { label: 'Group Decision Making', translations: { fr: 'Prise de décision en groupe' }, slug: 'collaboration-leadership/group-decision-making' },
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
                        { label: 'User Flow', translations: { fr: 'Parcours utilisateur' }, slug: 'about/user-flow' },
                        { label: 'Supporters & Partners', translations: { fr: 'Supporters et partenaires' }, slug: 'about/supporters-partners' },
                    ],
                },
            ],
        }),
    ],
});
