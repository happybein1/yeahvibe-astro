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
                    es: 'es',
                    nl: 'nl',
                },
            },
        }),
        starlight({
            title: { en: 'YeahCore', fr: 'YeahCore', es: 'YeahCore', nl: 'YeahCore' },
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
                // 2.28.0 (owner, 2026-11-04: "go spanish and dutch articles"): Spanish and Dutch, pages only (no audio yet).
                es: { label: 'Español', lang: 'es' },
                nl: { label: 'Nederlands', lang: 'nl' },
            },
            sidebar: [
                { label: '🏠 Welcome', translations: { fr: '🏠 Bienvenue', es: '🏠 Bienvenida', nl: '🏠 Welkom' }, slug: 'welcome' },
                { label: '📚 All guides', translations: { fr: '📚 Tous les guides', es: '📚 Todas las guías', nl: '📚 Alle gidsen' }, slug: 'start-here' },
                // 2.5.0 (owner, 2026-11-01: "these three kind of do but are a bit buried"): the pages on what
                // people need get their own section near the top (were three levels deep under Decision
                // Foundation → Find Your Directional Purpose). Page addresses unchanged.
                {
                    label: '🫀 What People Need',
                    translations: { fr: '🫀 Ce dont chacun a besoin', es: '🫀 Lo que toda persona necesita', nl: '🫀 Wat ieder mens nodig heeft' },
                    collapsed: false,
                    items: [
                        { label: 'Human needs', translations: { fr: 'Les besoins humains', es: 'Las necesidades humanas', nl: 'Menselijke behoeften' }, slug: 'decision-foundation/find-your-directional-purpose/humans-physiological-needs' },
                    ],
                },
                { label: '🛠️ Advised Tools', translations: { fr: '🛠️ Outils conseillés', es: '🛠️ Herramientas recomendadas', nl: '🛠️ Aanbevolen tools' }, slug: 'advised-tools' },
                {
                    label: 'The 4 Pillars',
                    translations: { fr: 'Les 4 piliers', es: 'Los 4 pilares', nl: 'De 4 pijlers' },
                    collapsed: false,
                    items: [
                        { label: 'Pillar 1: Direction & Priorities', translations: { fr: 'Pilier 1 : Direction et priorités', es: 'Pilar 1: Dirección y prioridades', nl: 'Pijler 1: Richting en prioriteiten' }, slug: 'pillars/direction' },
                        { label: 'Pillar 2: Mindset & Wellbeing', translations: { fr: "Pilier 2 : État d'esprit et bien-être", es: 'Pilar 2: Mentalidad y bienestar', nl: 'Pijler 2: Mindset en welzijn' }, slug: 'pillars/mindset' },
                        { label: 'Pillar 3: Organising Your Life', translations: { fr: 'Pilier 3 : Organiser sa vie', es: 'Pilar 3: Organizar tu vida', nl: 'Pijler 3: Je leven organiseren' }, slug: 'pillars/organization' },
                        { label: 'Pillar 4: Working with Others', translations: { fr: 'Pilier 4 : Travailler avec les autres', es: 'Pilar 4: Trabajar con otros', nl: 'Pijler 4: Samenwerken met anderen' }, slug: 'pillars/collaboration' },
                    ],
                },
                // 2.25.0 (owner, 2026-11-03): the guides as one story, in 6 chapters (same order as All guides).
                // 2.26.0 (owner: "ok go for it"): the 15 core guides; the other guides go deeper (class yv-extra, lighter).
                {
                    label: '1. Where am I now?',
                    translations: { fr: '1. Où en suis-je ?', es: '1. ¿Dónde estoy ahora?', nl: '1. Waar sta ik nu?' },
                    collapsed: false,
                    items: [
                        { label: 'Check In With How You Feel', translations: { fr: 'Faire le point sur ce que vous ressentez', es: 'Haz balance de cómo te sientes', nl: 'Sta stil bij hoe je je voelt' }, slug: 'personal-effectiveness/check-in-with-how-you-feel' },
                        { label: 'Why We Feel What We Feel', translations: { fr: 'Pourquoi nous ressentons ce que nous ressentons', es: 'Por qué sentimos lo que sentimos', nl: 'Waarom we voelen wat we voelen' }, slug: 'personal-effectiveness/why-we-feel-what-we-feel' },
                        { label: 'Human needs', translations: { fr: 'Les besoins humains', es: 'Las necesidades humanas', nl: 'Menselijke behoeften' }, slug: 'decision-foundation/find-your-directional-purpose/humans-physiological-needs', attrs: { class: 'yv-extra' } },
                    ],
                },
                {
                    label: '2. Where do I want to go?',
                    translations: { fr: '2. Où ai-je envie d\'aller ?', es: '2. ¿Adónde quiero ir?', nl: '2. Waar wil ik naartoe?' },
                    collapsed: false,
                    items: [
                        { label: 'Find Your Direction', translations: { fr: 'Trouver votre direction', es: 'Encuentra tu dirección', nl: 'Vind je richting' }, slug: 'decision-foundation/find-your-directional-purpose' },
                        { label: 'Long-Term Goals', translations: { fr: 'Objectifs à long terme', es: 'Objetivos a largo plazo', nl: 'Doelen op lange termijn' }, slug: 'personal-effectiveness/inspiration/long-term-goals', attrs: { class: 'yv-extra' } },
                    ],
                },
                {
                    label: '3. How do I get there?',
                    translations: { fr: '3. Comment y arriver ?', es: '3. ¿Cómo llego?', nl: '3. Hoe kom ik daar?' },
                    collapsed: false,
                    items: [
                        { label: 'Ideation & Assessment', translations: { fr: 'Trouver des idées et les évaluer', es: 'Encontrar ideas y evaluarlas', nl: 'Ideeën vinden en beoordelen' }, slug: 'decision-foundation/ideation-assessment' },
                        { label: 'Independent Prioritization', translations: { fr: 'Impact ou effort', es: 'Impacto o esfuerzo', nl: 'Impact of moeite' }, slug: 'decision-foundation/independent-prioritization' },
                        { label: 'Clarity & Alignment', translations: { fr: 'Clarté et alignement', es: 'Claridad y alineación', nl: 'Helderheid en afstemming' }, slug: 'decision-foundation/clarity-alignment', attrs: { class: 'yv-extra' } },
                        { label: 'Getting Started', translations: { fr: "Passer à l'action", es: 'Pasar a la acción', nl: 'Aan de slag' }, slug: 'decision-foundation/getting-started' },
                        { label: 'Tracking and Update', translations: { fr: 'Suivre et ajuster', es: 'Seguir y ajustar', nl: 'Volgen en bijsturen' }, slug: 'decision-foundation/tracking-and-update', attrs: { class: 'yv-extra' } },
                    ],
                },
                {
                    label: '4. How do I keep the energy?',
                    translations: { fr: '4. Comment garder l\'énergie ?', es: '4. ¿Cómo mantengo la energía?', nl: '4. Hoe houd ik de energie vast?' },
                    collapsed: false,
                    items: [
                        { label: 'Sleeping Well', translations: { fr: 'Bien dormir', es: 'Dormir bien', nl: 'Goed slapen' }, slug: 'personal-effectiveness/sleeping-well' },
                        { label: 'Moving and Eating Well', translations: { fr: 'Bouger et bien manger', es: 'Moverse y comer bien', nl: 'Bewegen en goed eten' }, slug: 'personal-effectiveness/moving-and-eating-well' },
                        { label: 'Managing Your Weight, Kindly', translations: { fr: 'Gérer son poids avec bienveillance', es: 'Cuidar tu peso con amabilidad', nl: 'Vriendelijk omgaan met je gewicht' }, slug: 'personal-effectiveness/managing-your-weight-kindly', attrs: { class: 'yv-extra' } },
                        { label: 'Stress and Overwhelm', translations: { fr: 'Stress et surcharge', es: 'Estrés y sobrecarga', nl: 'Stress en overbelasting' }, slug: 'personal-effectiveness/stress-and-overwhelm' },
                        { label: 'Fear Management', translations: { fr: 'Gérer la peur', es: 'Gestionar el miedo', nl: 'Omgaan met angst' }, slug: 'personal-effectiveness/fear-management', attrs: { class: 'yv-extra' } },
                        { label: 'Growth Mindset', translations: { fr: "L'état d'esprit de croissance", es: 'La mentalidad de crecimiento', nl: 'De groeimindset' }, slug: 'personal-effectiveness/growth-mindset', attrs: { class: 'yv-extra' } },
                        { label: 'Habits Improvement', translations: { fr: 'Améliorer ses habitudes', es: 'Mejorar tus hábitos', nl: 'Betere gewoonten' }, slug: 'personal-effectiveness/habits-improvement' },
                        { label: 'Daily Activities', translations: { fr: 'Activités du quotidien', es: 'Actividades diarias', nl: 'Dagelijkse activiteiten' }, slug: 'personal-effectiveness/inspiration/daily-activities', attrs: { class: 'yv-extra' } },
                    ],
                },
                {
                    label: '5. How do I make room for it?',
                    translations: { fr: '5. Comment faire de la place ?', es: '5. ¿Cómo hago sitio?', nl: '5. Hoe maak ik er ruimte voor?' },
                    collapsed: false,
                    items: [
                        { label: 'Time Spent Identification', translations: { fr: 'Où passe votre temps', es: 'En qué se va tu tiempo', nl: 'Waar je tijd naartoe gaat' }, slug: 'personal-effectiveness/time-spent-identification' },
                        { label: 'Saying No', translations: { fr: 'Savoir dire non', es: 'Saber decir que no', nl: 'Nee leren zeggen' }, slug: 'organizational-processes/saying-no' },
                        { label: 'Basic Organization Principles', translations: { fr: "Les bases de l'organisation", es: 'Las bases de la organización', nl: 'De basis van organiseren' }, slug: 'organizational-processes/basic-organization-principles', attrs: { class: 'yv-extra' } },
                        { label: 'Files & Folder Organization', translations: { fr: 'Organiser fichiers et dossiers', es: 'Organizar archivos y carpetas', nl: 'Bestanden en mappen ordenen' }, slug: 'organizational-processes/files-folder-organization', attrs: { class: 'yv-extra' } },
                        { label: 'Managing Commuting Time', translations: { fr: 'Bien utiliser ses trajets', es: 'Aprovechar tus trayectos', nl: 'Haal meer uit je reistijd' }, slug: 'organizational-processes/managing-commuting-time', attrs: { class: 'yv-extra' } },
                        { label: 'Mastering Finance Basics', translations: { fr: "Les bases de l'argent", es: 'Lo básico del dinero', nl: 'De basis van geld' }, slug: 'personal-effectiveness/mastering-finance-basics' },
                        { label: 'When Money Is Tight', translations: { fr: 'Quand l\'argent manque', es: 'Cuando el dinero no alcanza', nl: 'Als het geld krap is' }, slug: 'personal-effectiveness/when-money-is-tight', attrs: { class: 'yv-extra' } },
                    ],
                },
                {
                    label: '6. How do I do it with others?',
                    translations: { fr: '6. Comment avancer avec les autres ?', es: '6. ¿Cómo lo hago con otros?', nl: '6. Hoe doe ik het samen met anderen?' },
                    collapsed: false,
                    items: [
                        { label: 'Connection and Loneliness', translations: { fr: 'Lien et solitude', es: 'Conexión y soledad', nl: 'Verbinding en eenzaamheid' }, slug: 'personal-effectiveness/connection-and-loneliness' },
                        { label: 'Close Relationships', translations: { fr: 'Les relations proches', es: 'Las relaciones cercanas', nl: 'Hechte relaties' }, slug: 'personal-effectiveness/close-relationships' },
                        { label: 'Collaboration Principles', translations: { fr: 'Bien travailler avec les autres', es: 'Trabajar bien con otros', nl: 'Goed samenwerken' }, slug: 'collaboration-leadership/collaboration-principles', attrs: { class: 'yv-extra' } },
                        { label: 'Speak Clearly and Confidently', translations: { fr: "S'exprimer clairement et avec assurance", es: 'Hablar con claridad y seguridad', nl: 'Helder en zelfverzekerd spreken' }, slug: 'collaboration-leadership/speak-clearly-and-confidently', attrs: { class: 'yv-extra' } },
                        { label: 'When a Discussion Turns into a Fight', translations: { fr: 'Quand une discussion tourne à la dispute', es: 'Cuando una conversación se convierte en pelea', nl: 'Als een gesprek uitloopt op ruzie' }, slug: 'collaboration-leadership/when-a-discussion-turns-into-a-fight', attrs: { class: 'yv-extra' } },
                        { label: 'Group Decision Making', translations: { fr: 'Décider en groupe', es: 'Decidir en grupo', nl: 'Samen beslissen' }, slug: 'collaboration-leadership/group-decision-making', attrs: { class: 'yv-extra' } },
                        { label: 'How Your Organisation Makes Money', translations: { fr: "Comment votre organisation gagne de l'argent", es: 'Cómo gana dinero tu organización', nl: 'Hoe je organisatie geld verdient' }, slug: 'collaboration-leadership/how-your-organisation-makes-money', attrs: { class: 'yv-extra' } },
                        { label: 'Influence and Leadership', translations: { fr: 'Influence et leadership', es: 'Influencia y liderazgo', nl: 'Invloed en leiderschap' }, slug: 'collaboration-leadership/influence-and-leadership', attrs: { class: 'yv-extra' } },
                        { label: 'Building a Network by Helping Others', translations: { fr: 'Se faire un réseau en aidant les autres', es: 'Crear una red ayudando a los demás', nl: 'Een netwerk opbouwen door anderen te helpen' }, slug: 'collaboration-leadership/building-a-network-by-helping-others', attrs: { class: 'yv-extra' } },
                    ],
                },
                {
                    label: 'Related',
                    translations: { fr: 'Voir aussi', es: 'Ver también', nl: 'Zie ook' },
                    collapsed: false,
                    items: [
                        { label: 'YeahSight ↗', link: 'https://yeahsight.happybein.com/', attrs: { target: '_blank' } },
                        { label: 'YeahVibe tools ↗', translations: { fr: 'Outils YeahVibe ↗', es: 'Herramientas YeahVibe ↗', nl: 'YeahVibe-tools ↗' }, link: 'https://yeahvibe.com/', attrs: { target: '_blank' } },
                        { label: 'HappyBein ↗', link: 'https://happybein.com/', attrs: { target: '_blank' } },
                    ],
                },
                {
                    label: 'About',
                    translations: { fr: 'À propos', es: 'Acerca de YeahCore', nl: 'Over YeahCore' },
                    collapsed: false,
                    items: [
                        { label: 'About YeahCore', translations: { fr: 'À propos de YeahCore', es: 'Sobre YeahCore', nl: 'Over YeahCore' }, slug: 'about/about-yeahcore' },
                        { label: 'How It Works', translations: { fr: 'Comment ça marche', es: 'Cómo funciona', nl: 'Hoe het werkt' }, slug: 'about/how-it-works' },
                        { label: 'User Flow', translations: { fr: 'Parcours types', es: 'Recorridos de uso', nl: 'Typische routes' }, slug: 'about/user-flow' },
                        { label: 'Supporters & Partners', translations: { fr: 'Soutiens et partenaires', es: 'Apoyos y colaboradores', nl: 'Steunpilaren en partners' }, slug: 'about/supporters-partners' },
                    ],
                },
            ],
        }),
    ],
});
