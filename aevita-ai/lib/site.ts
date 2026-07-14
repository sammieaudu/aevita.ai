/**
 * Aevita.ai — central site configuration.
 *
 * Every customer-facing brand value (name, domain, emails, navigation,
 * social profiles, metadata defaults, scheduling) lives here. Do not
 * hardcode brand values elsewhere in the project.
 */

export const site = {
    name: "Aevita",
    displayName: "Aevita.ai",
    legalName: "Aevita AI, Inc.",
    domain: "https://aevita.ai",
    tagline: "AI Engineering & Intelligent Automation",
    description:
        "Aevita.ai designs AI agents, autonomous workflows, generative AI applications, and enterprise integrations that turn disconnected operations into intelligent, scalable systems.",
    foundedYear: 2023,

    emails: {
        primary: "hello@aevita.ai",
        careers: "careers@aevita.ai",
        sales: "growth@aevita.ai",
        support: "support@aevita.ai",
    },

    contact: {
        office: "Mansfield, TX, USA",
        address: "2805 Felding Court, Mansfield, TX 76063",
        coordinates: "32.5632° N, 97.1417° W",
    },

    /**
     * Cal.com scheduling handle. The previous account handle is kept as the
     * fallback purely so live booking keeps working during the domain
     * migration — replace NEXT_PUBLIC_CAL_LINK with the Aevita Cal.com handle
     * once it is created.
     */
    scheduling: {
        calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? "getbeta-ai/30min",
        calNamespace: "30min",
    },

    social: {
        twitter: "https://x.com/aevita_ai",
        linkedin: "https://www.linkedin.com/company/aevita-ai",
        github: "https://github.com/aevita-ai",
        instagram: "https://www.instagram.com/aevita.ai/",
        tiktok: "https://www.tiktok.com/@aevita.ai",
    },

    brandAssets: {
        markSvg: "/brand/aevita-mark.svg",
        markMonoSvg: "/brand/aevita-mark-mono.svg",
        ogImage: "/opengraph-image",
    },

    cta: {
        primary: { label: "Book an AI Strategy Call", href: "/contact" },
        secondary: { label: "Explore Aevita Solutions", href: "/solutions" },
        tertiary: { label: "See Business Workflows", href: "/workflows" },
    },

    navigation: [
        { name: "Solutions", href: "/solutions" },
        { name: "Workflows", href: "/workflows" },
        { name: "Industries", href: "/industries" },
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
    ],

    footerNavigation: {
        Solutions: [
            { name: "AI Agents & Autonomous Systems", href: "/solutions#ai-agents" },
            { name: "Enterprise Workflow Automation", href: "/solutions#workflow-automation" },
            { name: "Generative AI Applications", href: "/solutions#generative-ai" },
            { name: "RAG & Knowledge Systems", href: "/solutions#rag-knowledge" },
            { name: "Custom AI Platforms", href: "/solutions#custom-platforms" },
            { name: "CRM & ERP Integrations", href: "/solutions#crm-erp" },
        ],
        Company: [
            { name: "About Aevita", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Industries", href: "/industries" },
            { name: "Contact", href: "/contact" },
        ],
        Resources: [
            { name: "Business Workflows", href: "/workflows" },
            { name: "Case Studies", href: "/portfolio" },
            { name: "Documentation", href: "/docs" },
            { name: "Pricing", href: "/pricing" },
        ],
        Legal: [
            { name: "Terms of Service", href: "/terms" },
            { name: "Privacy Policy", href: "/privacy" },
        ],
    },

    defaultMetadata: {
        title: "Aevita.ai — AI Engineering & Intelligent Automation",
        titleTemplate: "%s | Aevita.ai",
        description:
            "Aevita designs and builds AI agents, autonomous business workflows, RAG systems, generative AI applications, and enterprise automations that help organizations operate faster and scale efficiently.",
        keywords: [
            "AI engineering",
            "AI agents",
            "business automation",
            "enterprise integrations",
            "generative AI",
            "RAG systems",
            "AI-powered marketing",
            "custom AI platforms",
        ],
    },
} as const;

export type Site = typeof site;

/** Absolute URL helper for canonical links and structured data. */
export function absoluteUrl(path = "/"): string {
    return new URL(path, site.domain).toString();
}
