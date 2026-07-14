import { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    Landmark,
    Stethoscope,
    ShoppingBag,
    Factory,
    Truck,
    Briefcase,
    Home,
    GraduationCap,
    Building2,
    type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { site, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "Industries",
    description:
        "Aevita builds AI agents, intelligent automation, and enterprise integrations for financial services, healthcare, retail, manufacturing, logistics, professional services, real estate, education, and SaaS companies.",
    alternates: {
        canonical: absoluteUrl("/industries"),
    },
};

type Industry = {
    id: string;
    icon: LucideIcon;
    name: string;
    pressure: string;
    build: string;
    examples: string[];
};

const industries: Industry[] = [
    {
        id: "financial-services",
        icon: Landmark,
        name: "Financial Services",
        pressure:
            "Document-heavy processes, strict audit requirements, and customers who expect instant answers.",
        build:
            "Document intelligence for onboarding and underwriting, RAG assistants over policy libraries, and reconciliation workflows with complete audit trails.",
        examples: ["KYC document processing", "Policy Q&A with citations", "Ledger reconciliation"],
    },
    {
        id: "healthcare",
        icon: Stethoscope,
        name: "Healthcare",
        pressure:
            "Administrative burden pulls clinical staff away from patients while compliance narrows what software may touch.",
        build:
            "Intake and referral automation, claims document extraction, and knowledge systems that respect access controls — engineered around your compliance boundary.",
        examples: ["Referral intake triage", "Claims data extraction", "Protocol knowledge base"],
    },
    {
        id: "retail-ecommerce",
        icon: ShoppingBag,
        name: "Retail & E-commerce",
        pressure:
            "Margins live and die on operational speed: orders, inventory, support volume, and marketing all scale faster than teams.",
        build:
            "Order and inventory sync across channels, AI support that resolves routine tickets, and lifecycle marketing that personalizes inside brand guardrails.",
        examples: ["Order-to-fulfillment sync", "Support deflection", "Lifecycle campaigns"],
    },
    {
        id: "manufacturing",
        icon: Factory,
        name: "Manufacturing",
        pressure:
            "ERPs, suppliers, and the shop floor speak different languages, and paperwork moves slower than parts.",
        build:
            "Supplier document automation, ERP integrations that keep purchasing and production aligned, and workflows that surface exceptions before they stop a line.",
        examples: ["PO & invoice matching", "Supplier onboarding", "Quality-doc extraction"],
    },
    {
        id: "logistics",
        icon: Truck,
        name: "Logistics",
        pressure:
            "Shipments generate a storm of documents and status updates that customers expect to see in real time.",
        build:
            "Freight document intelligence, shipment-event workflows across carrier APIs, and customer-facing status assistants grounded in live data.",
        examples: ["BOL & customs extraction", "Exception alerting", "Shipment status assistant"],
    },
    {
        id: "professional-services",
        icon: Briefcase,
        name: "Professional Services",
        pressure:
            "Billable experts spend hours on intake, research, and document assembly that clients won't pay for.",
        build:
            "Engagement intake automation, RAG over precedent and internal knowledge, and drafting assistants that produce first versions in your house style.",
        examples: ["Client intake & conflicts", "Precedent search", "Draft generation"],
    },
    {
        id: "real-estate",
        icon: Home,
        name: "Real Estate",
        pressure:
            "Deals stall in document review and follow-up gaps while portfolios generate more data than anyone reads.",
        build:
            "Lease and contract extraction, lead nurture workflows for brokerages, and portfolio reporting that assembles itself from source systems.",
        examples: ["Lease abstraction", "Lead nurture", "Portfolio reporting"],
    },
    {
        id: "education",
        icon: GraduationCap,
        name: "Education",
        pressure:
            "Admissions, student services, and administration run on repetitive inquiries and manual document handling.",
        build:
            "Admissions document workflows, cited knowledge assistants for students and staff, and integrations that keep SIS, LMS, and CRM data consistent.",
        examples: ["Admissions processing", "Student services assistant", "SIS/CRM sync"],
    },
    {
        id: "saas-technology",
        icon: Building2,
        name: "SaaS & Technology",
        pressure:
            "Product-led growth produces volumes of signups, tickets, and usage data that manual ops can't keep pace with.",
        build:
            "AI customer experience layers, revenue-ops automation between product data and CRM, and custom AI platforms when intelligence is the product.",
        examples: ["Onboarding automation", "Usage-based lead scoring", "Embedded AI features"],
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industries served by Aevita",
    itemListElement: industries.map((industry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: industry.name,
        url: absoluteUrl(`/industries#${industry.id}`),
    })),
};

export default function IndustriesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero */}
            <Section className="pt-32 pb-12" glow>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm font-medium uppercase tracking-widest text-[rgb(var(--primary))] mb-4">
                        Industries
                    </p>
                    <h1 className="font-heading text-4xl md:text-6xl font-semibold text-[rgb(var(--foreground))] mb-6">
                        Where operations are heavy,{" "}
                        <span className="text-gradient">intelligence pays off</span>
                    </h1>
                    <p className="text-xl text-[rgb(var(--foreground-muted))] max-w-3xl mx-auto">
                        {site.name} builds for industries where work moves between systems,
                        documents, and people — and where every manual handoff has a cost.
                    </p>
                </div>
            </Section>

            {/* Industry cards */}
            <Section grid>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {industries.map((industry) => (
                        <article
                            key={industry.id}
                            id={industry.id}
                            className="scroll-mt-24 glass-card rounded-2xl p-6 flex flex-col"
                        >
                            <div className="w-10 h-10 rounded-lg bg-[rgb(var(--primary))]/10 flex items-center justify-center mb-4">
                                <industry.icon className="w-5 h-5 text-[rgb(var(--primary))]" aria-hidden="true" />
                            </div>
                            <h2 className="font-heading text-lg font-semibold text-[rgb(var(--foreground))] mb-3">
                                {industry.name}
                            </h2>
                            <p className="text-sm text-[rgb(var(--foreground-muted))] leading-relaxed mb-3">
                                {industry.pressure}
                            </p>
                            <p className="text-sm text-[rgb(var(--foreground-muted))] leading-relaxed mb-4">
                                <span className="text-[rgb(var(--foreground))] font-medium">
                                    What {site.name} builds:
                                </span>{" "}
                                {industry.build}
                            </p>
                            <ul className="mt-auto flex flex-wrap gap-1.5">
                                {industry.examples.map((example) => (
                                    <li
                                        key={example}
                                        className="px-2.5 py-1 rounded-full text-[11px] text-[rgb(var(--foreground-muted))] bg-[rgb(var(--secondary))]/60 border border-[rgb(var(--border))]/50"
                                    >
                                        {example}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section glow>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-heading text-3xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        Don&apos;t see your industry?
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] mb-8">
                        The patterns transfer. If your operation runs on documents,
                        handoffs, and disconnected systems, we can map the first
                        automation worth building.
                    </p>
                    <Button size="lg" asChild>
                        <Link href={site.cta.primary.href}>
                            {site.cta.primary.label}
                            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                        </Link>
                    </Button>
                </div>
            </Section>
        </div>
    );
}
