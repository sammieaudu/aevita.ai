import { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    Bot,
    Workflow,
    Sparkles,
    Library,
    Layers,
    Cable,
    Megaphone,
    FileText,
    MessageSquare,
    Route,
    type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { site, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "AI & Automation Solutions",
    description:
        "Ten production-grade AI and automation solutions from Aevita: AI agents, enterprise workflow automation, generative AI applications, RAG knowledge systems, custom AI platforms, CRM & ERP integrations, marketing automation, document intelligence, AI customer experience, and digital transformation.",
    alternates: {
        canonical: absoluteUrl("/solutions"),
    },
};

interface Solution {
    id: string;
    title: string;
    icon: LucideIcon;
    summary: string;
    problem: string;
    build: string;
    systems: string[];
    steps: { name: string; detail: string }[];
    control: string;
    security: string;
    outcome: string;
    cta: { label: string; href: string };
}

const solutions: Solution[] = [
    {
        id: "ai-agents",
        title: "AI Agents & Autonomous Systems",
        icon: Bot,
        summary:
            "Software teammates that execute multi-step work across your tools — with humans approving what matters.",
        problem:
            "High-volume operational work — triage, research, data entry, follow-ups — consumes skilled staff time, and simple scripts break the moment a task requires judgment or spans more than one system.",
        build:
            "Aevita designs and deploys goal-directed agents with defined tool access, structured memory, and explicit escalation paths. Each agent operates inside a permission boundary you set, executes multi-step tasks across your systems, and hands off to a person whenever confidence drops or a decision exceeds its mandate.",
        systems: ["Slack", "Gmail", "Salesforce", "Postgres", "Notion", "Jira"],
        steps: [
            { name: "Trigger", detail: "An event, schedule, or request starts the agent." },
            { name: "Plan", detail: "The agent decomposes the goal into concrete tool calls." },
            { name: "Act", detail: "It executes across connected systems, logging every step." },
            { name: "Verify", detail: "Results are checked against acceptance rules before completion." },
        ],
        control:
            "Approval gates on any write action you designate; confidence thresholds that route edge cases to a named owner; a full action log for review and rollback.",
        security:
            "Scoped, least-privilege credentials per agent; hard boundaries on which data stores an agent can read or write; immutable audit logs of every tool invocation.",
        outcome:
            "Routine multi-system work runs continuously without headcount growth, while your team reviews exceptions instead of executing every step by hand.",
        cta: { label: "Book an AI Strategy Call", href: "/contact" },
    },
    {
        id: "workflow-automation",
        title: "Enterprise Workflow Automation",
        icon: Workflow,
        summary:
            "End-to-end business processes rebuilt as reliable, observable pipelines instead of email chains.",
        problem:
            "Core processes — order-to-cash, employee onboarding, procurement approvals — live in inboxes and spreadsheets. Handoffs stall, status is invisible, and errors surface only after a customer or auditor notices.",
        build:
            "Aevita maps the real process, then rebuilds it as a durable workflow with typed inputs, retry logic, and state you can inspect at any moment. Steps that need judgment become explicit approval tasks; everything else runs automatically with alerts on failure.",
        systems: ["SAP", "NetSuite", "Slack", "Gmail", "DocuSign", "Postgres"],
        steps: [
            { name: "Map", detail: "Document the current process, owners, and failure points." },
            { name: "Model", detail: "Encode it as a durable workflow with clear states." },
            { name: "Connect", detail: "Wire in the source systems via authenticated integrations." },
            { name: "Operate", detail: "Run with monitoring, retries, and exception queues." },
        ],
        control:
            "Named approvers on financial or contractual steps; pause-and-resume on any stage; dashboards showing exactly where each in-flight item sits.",
        security:
            "Service accounts with least-privilege scopes per system; data kept inside your environment boundaries; step-level audit trails for compliance review.",
        outcome:
            "Cycle times drop from days to hours, handoffs stop leaking, and process status becomes a query instead of a meeting.",
        cta: { label: "See Business Workflows", href: "/workflows" },
    },
    {
        id: "generative-ai",
        title: "Generative AI Applications",
        icon: Sparkles,
        summary:
            "Purpose-built generative products — drafting, summarization, structured extraction — grounded in your data.",
        problem:
            "Teams experiment with general-purpose chat tools, but outputs are ungoverned, disconnected from company data, and impossible to standardize — so quality varies with whoever wrote the prompt.",
        build:
            "Aevita builds production generative applications with engineered prompts, evaluation suites, and guardrails: drafting assistants, report generators, structured-data extractors, and domain copilots that pull from approved sources and produce output in your formats.",
        systems: ["Slack", "Google Drive", "Notion", "Postgres", "Snowflake"],
        steps: [
            { name: "Scope", detail: "Define the task, output format, and quality bar." },
            { name: "Ground", detail: "Connect approved data sources and style guides." },
            { name: "Evaluate", detail: "Test outputs against a scored evaluation set." },
            { name: "Ship", detail: "Deploy with usage analytics and feedback loops." },
        ],
        control:
            "Human review checkpoints before generated content reaches customers; versioned prompts so changes are deliberate; feedback capture that feeds continuous evaluation.",
        security:
            "Model access routed through a gateway you control; sensitive fields masked before inference; prompt and completion logs retained for audit.",
        outcome:
            "Consistent, on-brand generative output at scale — measured against an evaluation suite rather than judged anecdotally.",
        cta: { label: "Book an AI Strategy Call", href: "/contact" },
    },
    {
        id: "rag-knowledge",
        title: "RAG & Enterprise Knowledge Systems",
        icon: Library,
        summary:
            "Retrieval-augmented systems that answer from your documents with citations — not from a model's memory.",
        problem:
            "Institutional knowledge is scattered across wikis, drives, tickets, and PDFs. Employees re-ask answered questions, and generic chatbots hallucinate because they cannot see your actual documentation.",
        build:
            "Aevita builds retrieval pipelines — ingestion, chunking, embedding, and permission-aware search — so answers are generated from your verified content and every response carries citations back to source documents.",
        systems: ["Confluence", "SharePoint", "Google Drive", "Postgres", "Snowflake", "Slack"],
        steps: [
            { name: "Ingest", detail: "Index documents with metadata and access rules intact." },
            { name: "Retrieve", detail: "Match each question to the most relevant passages." },
            { name: "Generate", detail: "Compose an answer grounded only in retrieved content." },
            { name: "Cite", detail: "Return sources so every claim can be verified." },
        ],
        control:
            "Curators approve which repositories enter the index; low-confidence answers are flagged rather than guessed; content owners see what questions their documents answer.",
        security:
            "Retrieval respects the source system's existing permissions per user; embeddings and indexes stay inside your data boundary; query logs support access audits.",
        outcome:
            "Employees and customers get cited, current answers in seconds, and subject-matter experts stop being the bottleneck for routine questions.",
        cta: { label: "Book an AI Strategy Call", href: "/contact" },
    },
    {
        id: "custom-platforms",
        title: "Custom AI Platforms",
        icon: Layers,
        summary:
            "Your own AI product surface — multi-model, multi-tenant, and owned by you rather than rented.",
        problem:
            "Off-the-shelf AI tools stop at the edges of your business model. When AI is core to your product or operations, you need infrastructure you control — model routing, tenancy, billing, and evaluation — not a stack of subscriptions.",
        build:
            "Aevita architects and builds full AI platforms: model gateways with provider failover, tenant isolation, usage metering, evaluation harnesses, and admin consoles — engineered on modern web infrastructure and handed over with documentation and training.",
        systems: ["Postgres", "Snowflake", "Redis", "Vercel", "AWS", "Stripe"],
        steps: [
            { name: "Architect", detail: "Design the platform around your tenancy and cost model." },
            { name: "Build", detail: "Implement gateway, data layer, and product surfaces." },
            { name: "Harden", detail: "Load-test, add observability, and rehearse failure modes." },
            { name: "Hand over", detail: "Transfer ownership with runbooks and team training." },
        ],
        control:
            "Admin consoles for feature flags, model selection, and spend limits; staged rollouts per tenant; kill switches on any AI capability.",
        security:
            "Tenant-level data isolation; secrets managed in your vault, never in code; per-request audit logs covering model, input class, and caller identity.",
        outcome:
            "A platform asset you own and extend — with unit economics, reliability, and roadmap under your control instead of a vendor's.",
        cta: { label: "Book an AI Strategy Call", href: "/contact" },
    },
    {
        id: "crm-erp",
        title: "CRM & ERP Integrations",
        icon: Cable,
        summary:
            "Bidirectional, validated data flow between your systems of record — no more swivel-chair operations.",
        problem:
            "Sales, finance, and operations each trust a different system. Records drift apart, teams re-key data between screens, and leadership reconciles conflicting numbers instead of acting on one.",
        build:
            "Aevita builds hardened integration layers between CRMs, ERPs, and data warehouses: field-level mappings, validation rules, conflict resolution policies, and AI-assisted matching for the records that never line up cleanly on their own.",
        systems: ["Salesforce", "HubSpot", "SAP", "NetSuite", "Postgres", "Snowflake"],
        steps: [
            { name: "Audit", detail: "Inventory objects, fields, and ownership across systems." },
            { name: "Map", detail: "Define canonical records and transformation rules." },
            { name: "Sync", detail: "Run event-driven, bidirectional synchronization." },
            { name: "Reconcile", detail: "Surface mismatches for review instead of silent drift." },
        ],
        control:
            "Dry-run modes before any bulk write; human review queues for ambiguous record matches; per-field sync rules your admins can adjust.",
        security:
            "Integration users scoped to only the objects they touch; encrypted transport between systems; change-data logs showing who or what modified every record.",
        outcome:
            "One trusted version of each customer, order, and invoice — with teams working from live data instead of exports.",
        cta: { label: "Book an AI Strategy Call", href: "/contact" },
    },
    {
        id: "marketing-automation",
        title: "AI-Powered Marketing Automation",
        icon: Megaphone,
        summary:
            "Lifecycle marketing that segments, personalizes, and follows up automatically — under brand-safe controls.",
        problem:
            "Marketing teams have more channels than hands. Leads go cold waiting for follow-up, segmentation is guesswork, and campaign production is a bottleneck that flattens personalization into batch-and-blast.",
        build:
            "Aevita connects your CRM, product data, and messaging channels into an automation layer: AI-scored segments, personalized content generation inside brand guardrails, and lifecycle journeys that adapt to behavior instead of running on fixed timers.",
        systems: ["HubSpot", "Salesforce", "Gmail", "Snowflake", "Segment", "Slack"],
        steps: [
            { name: "Unify", detail: "Consolidate lead and behavior data into one profile." },
            { name: "Segment", detail: "Score and group audiences on live signals." },
            { name: "Personalize", detail: "Generate on-brand variants per segment." },
            { name: "Optimize", detail: "Measure, test, and reallocate automatically." },
        ],
        control:
            "Marketers approve copy templates and tone rules before anything sends; frequency caps and suppression lists enforced in the pipeline; every send traceable to the rule that triggered it.",
        security:
            "Consent and opt-out state honored at the data layer; customer PII confined to approved systems; access to audience data logged and role-restricted.",
        outcome:
            "Faster follow-up, sharper segmentation, and campaign volume that scales with data — not with headcount.",
        cta: { label: "Book an AI Strategy Call", href: "/contact" },
    },
    {
        id: "document-intelligence",
        title: "Document Intelligence",
        icon: FileText,
        summary:
            "Contracts, invoices, and forms converted into structured, validated data — automatically.",
        problem:
            "Critical business data arrives trapped in PDFs, scans, and email attachments. People re-type it into systems, errors creep in, and the documents themselves become an unsearchable archive of risk.",
        build:
            "Aevita builds extraction pipelines that classify incoming documents, pull structured fields with AI, validate them against business rules, and post clean records into your systems — routing anything ambiguous to a human review queue.",
        systems: ["Gmail", "SharePoint", "DocuSign", "SAP", "NetSuite", "Postgres"],
        steps: [
            { name: "Classify", detail: "Identify document type and route accordingly." },
            { name: "Extract", detail: "Pull fields, tables, and clauses into structured form." },
            { name: "Validate", detail: "Check values against rules and reference data." },
            { name: "Post", detail: "Write verified records to downstream systems." },
        ],
        control:
            "Confidence thresholds decide what posts automatically versus what a person confirms; reviewers correct in-line and the pipeline learns from corrections; nothing enters a system of record unvalidated.",
        security:
            "Documents processed inside your storage boundary; field-level redaction for sensitive values; a complete chain of custody from source file to posted record.",
        outcome:
            "Document-heavy processes shrink from days of manual entry to minutes of review, with extraction accuracy you can measure and audit.",
        cta: { label: "Book an AI Strategy Call", href: "/contact" },
    },
    {
        id: "customer-experience",
        title: "AI Customer Experience",
        icon: MessageSquare,
        summary:
            "Support and service that resolves instantly where it can — and escalates gracefully where it should.",
        problem:
            "Customers expect immediate, accurate answers on every channel, but support teams are buried in repetitive tickets while complex cases wait in the same queue as password resets.",
        build:
            "Aevita builds AI service layers grounded in your help content and account data: assistants that resolve routine requests end-to-end, draft responses for agents on harder ones, and summarize context so escalations start informed instead of from zero.",
        systems: ["Zendesk", "Intercom", "Salesforce", "Slack", "Postgres"],
        steps: [
            { name: "Understand", detail: "Classify intent and load relevant account context." },
            { name: "Resolve", detail: "Answer from verified content or execute the fix." },
            { name: "Escalate", detail: "Hand complex cases to agents with a full summary." },
            { name: "Learn", detail: "Feed resolutions back into the knowledge base." },
        ],
        control:
            "You define which intents the AI may resolve autonomously; agents review AI drafts before sending where required; sentiment triggers force human takeover.",
        security:
            "Customer data accessed read-only unless a specific action is authorized; conversations logged for quality audit; account operations gated behind verified identity.",
        outcome:
            "Faster first response and resolution on routine volume, with human agents concentrated on the conversations that genuinely need them.",
        cta: { label: "Book an AI Strategy Call", href: "/contact" },
    },
    {
        id: "digital-transformation",
        title: "Digital Transformation",
        icon: Route,
        summary:
            "A sequenced modernization program — from process audit to running systems — not a strategy PDF.",
        problem:
            "Leadership knows the operation runs on legacy systems and manual glue, but transformation efforts stall: too broad to start, too risky to sequence, and too abstract to show value early.",
        build:
            "Aevita runs transformation as engineering: an operational audit that maps systems and manual effort, a prioritized automation roadmap scored by impact and risk, and delivery in production increments — each phase shipping working systems before the next begins.",
        systems: ["SAP", "Salesforce", "Snowflake", "Slack", "Postgres", "AWS"],
        steps: [
            { name: "Audit", detail: "Map processes, systems, and manual effort honestly." },
            { name: "Prioritize", detail: "Rank initiatives by impact, risk, and dependency." },
            { name: "Deliver", detail: "Ship automation and AI capability in phases." },
            { name: "Embed", detail: "Train teams and transfer operational ownership." },
        ],
        control:
            "Steering checkpoints between phases with go/no-go decisions; legacy processes kept running in parallel until replacements prove out; success metrics agreed before each build starts.",
        security:
            "Migration plans that define data boundaries before any data moves; least-privilege access for every new component; audit logging designed in from the first phase, not retrofitted.",
        outcome:
            "Measurable operational gains at each phase and a modern, automated core — delivered as running software rather than recommendations.",
        cta: { label: "See Business Workflows", href: "/workflows" },
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Aevita AI & Automation Solutions",
    itemListElement: solutions.map((solution, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
            "@type": "Service",
            name: solution.title,
            url: absoluteUrl(`/solutions#${solution.id}`),
            provider: {
                "@type": "Organization",
                name: site.name,
                url: absoluteUrl("/"),
            },
        },
    })),
};

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-[rgb(var(--foreground-muted))] mb-2">
                {label}
            </h3>
            <div className="text-sm leading-relaxed text-[rgb(var(--foreground-muted))]">
                {children}
            </div>
        </div>
    );
}

export default function SolutionsPage() {
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
                        Aevita Solutions
                    </p>
                    <h1 className="font-heading text-4xl md:text-6xl font-semibold text-[rgb(var(--foreground))] mb-6">
                        Every solution is a{" "}
                        <span className="text-gradient">working system</span>, not a slide
                        deck.
                    </h1>
                    <p className="text-xl text-[rgb(var(--foreground-muted))] max-w-3xl mx-auto">
                        Ten ways we apply AI engineering and intelligent automation to real
                        operations — each delivered as production software with human
                        control, security boundaries, and a measurable outcome.
                    </p>
                </div>
            </Section>

            {/* Quick nav */}
            <nav
                aria-label="Solutions on this page"
                className="border-y border-[rgb(var(--border))]/50 bg-[rgb(var(--background))]/80 backdrop-blur-sm lg:sticky lg:top-16 z-30"
            >
                <div className="container px-3 md:px-4 mx-auto py-3">
                    <ul className="flex flex-wrap justify-center gap-x-1 gap-y-1">
                        {solutions.map((solution) => (
                            <li key={solution.id}>
                                <a
                                    href={`#${solution.id}`}
                                    className="inline-block px-3 py-1.5 rounded-full text-xs text-[rgb(var(--foreground-muted))] hover:text-[rgb(var(--foreground))] hover:bg-[rgb(var(--secondary))] transition-colors"
                                >
                                    {solution.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Solution sections */}
            <Section grid>
                <div className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-14">
                    {solutions.map((solution, index) => (
                        <article
                            key={solution.id}
                            id={solution.id}
                            className="scroll-mt-24 glass-card rounded-2xl border border-[rgb(var(--border))]/50 p-6 md:p-10"
                        >
                            {/* Header */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="shrink-0 w-11 h-11 rounded-xl bg-[rgb(var(--primary))]/10 border border-[rgb(var(--primary))]/20 flex items-center justify-center">
                                    <solution.icon
                                        className="w-5 h-5 text-[rgb(var(--primary))]"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-[rgb(var(--foreground-muted))] mb-1">
                                        {String(index + 1).padStart(2, "0")} / 10
                                    </p>
                                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[rgb(var(--foreground))]">
                                        {solution.title}
                                    </h2>
                                </div>
                            </div>

                            <p className="text-base md:text-lg text-[rgb(var(--foreground-muted))] mb-8">
                                {solution.summary}
                            </p>

                            {/* Problem / Build */}
                            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
                                <InfoBlock label="The business problem">
                                    {solution.problem}
                                </InfoBlock>
                                <InfoBlock label="What Aevita builds">
                                    {solution.build}
                                </InfoBlock>
                            </div>

                            {/* Systems chips */}
                            <div className="mb-8">
                                <h3 className="text-xs font-medium uppercase tracking-wider text-[rgb(var(--foreground-muted))] mb-3">
                                    Systems involved
                                </h3>
                                <ul className="flex flex-wrap gap-2">
                                    {solution.systems.map((system) => (
                                        <li
                                            key={system}
                                            className="px-3 py-1 rounded-full text-xs text-[rgb(var(--foreground))] bg-[rgb(var(--secondary))]/60 border border-[rgb(var(--border))]/60"
                                        >
                                            {system}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* How it works */}
                            <div className="mb-8">
                                <h3 className="text-xs font-medium uppercase tracking-wider text-[rgb(var(--foreground-muted))] mb-3">
                                    How it works
                                </h3>
                                <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                    {solution.steps.map((step, stepIndex) => (
                                        <li
                                            key={step.name}
                                            className="rounded-xl bg-[rgb(var(--background-secondary))] border border-[rgb(var(--border))]/50 p-4"
                                        >
                                            <p className="text-xs font-mono text-[rgb(var(--primary))] mb-1">
                                                Step {stepIndex + 1}
                                            </p>
                                            <p className="text-sm font-medium text-[rgb(var(--foreground))] mb-1">
                                                {step.name}
                                            </p>
                                            <p className="text-xs leading-relaxed text-[rgb(var(--foreground-muted))]">
                                                {step.detail}
                                            </p>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* Control / Security / Outcome */}
                            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
                                <InfoBlock label="Human control & approvals">
                                    {solution.control}
                                </InfoBlock>
                                <InfoBlock label="Security considerations">
                                    {solution.security}
                                </InfoBlock>
                                <InfoBlock label="Expected operational outcome">
                                    {solution.outcome}
                                </InfoBlock>
                            </div>

                            {/* CTA */}
                            <div className="pt-2">
                                <Button asChild variant="outline">
                                    <Link href={solution.cta.href}>
                                        {solution.cta.label}
                                        <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                                    </Link>
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </Section>

            {/* Closing CTA */}
            <Section glow>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-heading text-3xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        Not sure where to start?
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] mb-8">
                        Most engagements begin with a short working session: we map your
                        highest-friction process, identify the systems involved, and
                        propose the first automation worth building.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href={site.cta.primary.href}>
                                {site.cta.primary.label}
                                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href={site.cta.tertiary.href}>{site.cta.tertiary.label}</Link>
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
