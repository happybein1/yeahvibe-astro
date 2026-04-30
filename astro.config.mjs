// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    integrations: [
        starlight({
            title: 'YeahVibe',
            logo: {
                src: './src/assets/logo.svg',
                replacesTitle: true,
            },
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/happybein1/yeahvibe-astro' }],
            sidebar: [
                { label: '🧭 Start Here', slug: 'start-here' },
                { label: '🛠️ Advised Tools', slug: 'advised-tools' },
                {
                    label: 'Decision Foundation',
                    items: [
                        { label: 'Ideation & Assessment', slug: 'decision-foundation/ideation-assessment' },
                        { label: 'Independent Prioritization', slug: 'decision-foundation/independent-prioritization' },
                        { label: 'Clarity & Alignment', slug: 'decision-foundation/clarity-alignment' },
                        { label: 'Tracking and Update', slug: 'decision-foundation/tracking-and-update' },
                        {
                            label: 'Find Your Directional Purpose',
                            items: [
                                { label: 'Overview', slug: 'decision-foundation/find-your-directional-purpose' },
                                { label: 'Generic Primary Goal Breakdown', slug: 'decision-foundation/find-your-directional-purpose/generic-primary-goal-breakdown' },
                                { label: 'Core Drivers of Feelings', slug: 'decision-foundation/find-your-directional-purpose/core-drivers-of-feelings' },
                                { label: "Human's Physiological Needs", slug: 'decision-foundation/find-your-directional-purpose/humans-physiological-needs' },
                            ],
                        },
                    ],
                },
                {
                    label: 'Personal Effectiveness',
                    items: [
                        { label: 'Habits Improvement', slug: 'personal-effectiveness/habits-improvement' },
                        { label: 'Growth Mindset', slug: 'personal-effectiveness/growth-mindset' },
                        { label: 'Fear Management', slug: 'personal-effectiveness/fear-management' },
                        { label: 'Sleeping Well', slug: 'personal-effectiveness/sleeping-well' },
                    ],
                },
                {
                    label: 'Organizational Processes',
                    items: [
                        { label: 'Basic Organization Principles', slug: 'organizational-processes/basic-organization-principles' },
                        { label: 'Files & Folder Organization', slug: 'organizational-processes/files-folder-organization' },
                        { label: 'Managing Commuting Time', slug: 'organizational-processes/managing-commuting-time' },
                    ],
                },
                {
                    label: 'Collaboration & Leadership',
                    items: [
                        { label: 'Collaboration Principles', slug: 'collaboration-leadership/collaboration-principles' },
                        { label: 'Influence and Leadership', slug: 'collaboration-leadership/influence-and-leadership' },
                        { label: 'Speak Clearly and Confidently', slug: 'collaboration-leadership/speak-clearly-and-confidently' },
                        { label: 'Group Decision Making', slug: 'collaboration-leadership/group-decision-making' },
                    ],
                },
                {
                    label: 'Applications',
                    items: [
                        {
                            label: 'Environment & Energy',
                            items: [
                                { label: 'Clean & Safe Energy', slug: 'applications/environment-energy/clean-safe-energy' },
                            ],
                        },
                        {
                            label: 'Economy & Equity',
                            items: [
                                { label: 'Mastering Finance Basics', slug: 'applications/economy-equity/mastering-finance-basics' },
                            ],
                        },
                    ],
                },
            ],
        }),
    ],
});
