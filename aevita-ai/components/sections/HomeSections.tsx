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
    Inbox,
    ClipboardX,
    EyeOff,
    TimerOff,
    Gauge,
    ShieldCheck,
    FlaskConical,
    Network,
    Server,
    LineChart,
    Lock,
    KeyRound,
    ScrollText,
    UserCheck,
    Building2,
    Stethoscope,
    Landmark,
    ShoppingBag,
    Factory,
    Truck,
    GraduationCap,
    Home,
    Briefcase,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { jobs } from "@/lib/careers";

/* ------------------------------------------------------------------ */
/* 3. Business problems Aevita solves                                  */
/* ------------------------------------------------------------------ */

const problems = [
    {
        icon: Inbox,
        title: "Work trapped in inboxes",
        description:
            "Core processes run on email threads and spreadsheets. Handoffs stall, status is invisible, and nobody owns the next step.",
    },
    {
        icon: ClipboardX,
        title: "Manual re-keying between systems",
        description:
            "Skilled people copy data between CRM, ERP, and documents all day — slow, expensive, and a constant source of errors.",
    },
    {
        icon: EyeOff,
        title: "Knowledge nobody can find",
        description:
            "Answers live in wikis, drives, and veterans' heads. Teams re-ask solved questions and decisions wait on the one person who knows.",
    },
    {
        icon: TimerOff,
        title: "Customers waiting on humans",
        description:
            "Routine requests queue behind complex ones. Response times stretch while agents burn out on repetitive tickets.",
    },
];

export function Problems() {
    return (
        <Section id="problems" grid>
            <div className="max-w-5xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        The problems we solve
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        Operations break where systems don&apos;t connect
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] md:text-lg">
                        Most organizations don&apos;t need more software — they need the
                        software they have to work together, intelligently.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    {problems.map((problem) => (
                        <div key={problem.title} className="glass-card p-6">
                            <div className="w-10 h-10 rounded-lg bg-[rgb(var(--primary))]/10 flex items-center justify-center mb-4">
                                <problem.icon className="w-5 h-5 text-[rgb(var(--primary))]" aria-hidden="true" />
                            </div>
                            <h3 className="font-semibold text-[rgb(var(--foreground))] mb-2">
                                {problem.title}
                            </h3>
                            <p className="text-sm text-[rgb(var(--foreground-muted))] leading-relaxed">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

/* ------------------------------------------------------------------ */
/* 4. Core AI and automation solutions                                 */
/* ------------------------------------------------------------------ */

const solutionCards = [
    { icon: Bot, title: "AI Agents & Autonomous Systems", description: "Software teammates that execute multi-step work across your tools, with humans approving what matters.", href: "/solutions#ai-agents" },
    { icon: Workflow, title: "Enterprise Workflow Automation", description: "End-to-end processes rebuilt as reliable, observable pipelines instead of email chains.", href: "/solutions#workflow-automation" },
    { icon: Sparkles, title: "Generative AI Applications", description: "Drafting, summarization, and extraction products grounded in your data and formats.", href: "/solutions#generative-ai" },
    { icon: Library, title: "RAG & Knowledge Systems", description: "Cited answers from your documents — not from a model's memory.", href: "/solutions#rag-knowledge" },
    { icon: Layers, title: "Custom AI Platforms", description: "Your own multi-model, multi-tenant AI infrastructure — owned, not rented.", href: "/solutions#custom-platforms" },
    { icon: Cable, title: "CRM & ERP Integrations", description: "Bidirectional, validated data flow between your systems of record.", href: "/solutions#crm-erp" },
    { icon: Megaphone, title: "AI-Powered Marketing Automation", description: "Segmentation, personalization, and follow-up that run themselves — inside brand guardrails.", href: "/solutions#marketing-automation" },
    { icon: FileText, title: "Document Intelligence", description: "Contracts, invoices, and forms converted into structured, validated data.", href: "/solutions#document-intelligence" },
    { icon: MessageSquare, title: "AI Customer Experience", description: "Instant resolution where it's safe, graceful escalation where it isn't.", href: "/solutions#customer-experience" },
    { icon: Route, title: "Digital Transformation", description: "A sequenced modernization program delivered as running systems, not slides.", href: "/solutions#digital-transformation" },
];

export function SolutionsGrid() {
    return (
        <Section id="solutions">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        Core solutions
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        What {site.name} designs and builds
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] md:text-lg">
                        Ten engineering disciplines, one goal: an operation that runs
                        itself where it can, and asks a human where it should.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {solutionCards.map((solution) => (
                        <Link
                            key={solution.title}
                            href={solution.href}
                            className="group glass-card p-5 flex flex-col rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[rgb(var(--ring))]"
                        >
                            <div className="w-9 h-9 rounded-lg bg-[rgb(var(--primary))]/10 flex items-center justify-center mb-3">
                                <solution.icon className="w-[18px] h-[18px] text-[rgb(var(--primary))]" aria-hidden="true" />
                            </div>
                            <h3 className="font-medium text-sm text-[rgb(var(--foreground))] mb-1.5 leading-snug">
                                {solution.title}
                            </h3>
                            <p className="text-xs text-[rgb(var(--foreground-muted))] leading-relaxed mb-3">
                                {solution.description}
                            </p>
                            <span className="mt-auto inline-flex items-center gap-1 text-xs text-[rgb(var(--primary))] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                                Explore
                                <ArrowRight className="w-3 h-3" aria-hidden="true" />
                            </span>
                        </Link>
                    ))}
                </div>
                <div className="text-center pt-8">
                    <Button variant="secondary" size="lg" asChild>
                        <Link href="/solutions">
                            {site.cta.secondary.label}
                            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Section>
    );
}

/* ------------------------------------------------------------------ */
/* 6. Aevita delivery process                                          */
/* ------------------------------------------------------------------ */

const processSteps = [
    {
        step: "01",
        title: "Discover",
        description:
            "A working session maps your highest-friction processes, the systems involved, and where AI pays off first.",
    },
    {
        step: "02",
        title: "Design",
        description:
            "Architecture, integration points, and the human approval stages — agreed before a line of code ships.",
    },
    {
        step: "03",
        title: "Build & evaluate",
        description:
            "Production engineering with evaluation suites, guardrails, and observability from day one.",
    },
    {
        step: "04",
        title: "Launch & operate",
        description:
            "We run the system with you, tune it on live data, then hand over runbooks and ownership.",
    },
];

export function Process() {
    return (
        <Section id="process" grid>
            <div className="max-w-5xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        How {site.name} works
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        From mapped process to running system
                    </h2>
                </div>
                <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {processSteps.map((item, index) => (
                        <li key={item.step} className="relative glass-card p-6">
                            <p className="text-xs font-mono text-[rgb(var(--primary))] mb-3">
                                Phase {item.step}
                            </p>
                            <h3 className="font-semibold text-[rgb(var(--foreground))] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-[rgb(var(--foreground-muted))] leading-relaxed">
                                {item.description}
                            </p>
                            {index < processSteps.length - 1 && (
                                <span
                                    aria-hidden="true"
                                    className="hidden lg:block absolute top-1/2 -right-3 w-3 border-t border-dashed border-[rgb(var(--accent-blue))]/40"
                                />
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </Section>
    );
}

/* ------------------------------------------------------------------ */
/* 7. AI engineering capabilities                                      */
/* ------------------------------------------------------------------ */

const capabilities = [
    { icon: Network, title: "Agent & orchestration design", description: "Tool-calling agents, durable workflows, and multi-step orchestration with explicit state." },
    { icon: FlaskConical, title: "Evaluation & guardrails", description: "Golden datasets, LLM-as-judge scoring, output validation, and fallback behavior." },
    { icon: Library, title: "Retrieval engineering", description: "Chunking, embeddings, hybrid search, re-ranking, and permission-aware retrieval." },
    { icon: Server, title: "Platform & infrastructure", description: "Model gateways, tenancy, usage metering, and cloud-native deployment." },
    { icon: Cable, title: "Systems integration", description: "CRMs, ERPs, data warehouses, and internal APIs — authenticated, rate-limited, reconciled." },
    { icon: LineChart, title: "Observability & operations", description: "Tracing, cost tracking, alerting, and runbooks for every automated system." },
];

export function Capabilities() {
    return (
        <Section id="capabilities">
            <div className="max-w-5xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        Engineering capabilities
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        The discipline behind the intelligence
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {capabilities.map((capability) => (
                        <div
                            key={capability.title}
                            className="p-5 rounded-xl bg-[rgb(var(--background-secondary))]/60 border border-[rgb(var(--border))]/50 hover:border-[rgb(var(--primary))]/30 transition-colors"
                        >
                            <capability.icon className="w-5 h-5 text-[rgb(var(--primary))] mb-3" aria-hidden="true" />
                            <h3 className="font-medium text-sm text-[rgb(var(--foreground))] mb-1.5">
                                {capability.title}
                            </h3>
                            <p className="text-xs text-[rgb(var(--foreground-muted))] leading-relaxed">
                                {capability.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

/* ------------------------------------------------------------------ */
/* 8. Industries served                                                */
/* ------------------------------------------------------------------ */

const industries = [
    { icon: Landmark, name: "Financial services" },
    { icon: Stethoscope, name: "Healthcare" },
    { icon: ShoppingBag, name: "Retail & e-commerce" },
    { icon: Factory, name: "Manufacturing" },
    { icon: Truck, name: "Logistics" },
    { icon: Briefcase, name: "Professional services" },
    { icon: Home, name: "Real estate" },
    { icon: GraduationCap, name: "Education" },
    { icon: Building2, name: "SaaS & technology" },
];

export function IndustriesTeaser() {
    return (
        <Section id="industries" grid>
            <div className="max-w-5xl mx-auto text-center">
                <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                    Industries
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[rgb(var(--foreground))] mb-4">
                    Built for operations-heavy industries
                </h2>
                <p className="text-[rgb(var(--foreground-muted))] md:text-lg max-w-2xl mx-auto mb-10">
                    Wherever work moves between systems, documents, and people,
                    there is a workflow worth automating.
                </p>
                <ul className="flex flex-wrap justify-center gap-2.5 mb-10">
                    {industries.map((industry) => (
                        <li
                            key={industry.name}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(var(--secondary))]/60 border border-[rgb(var(--border))]/60 text-sm text-[rgb(var(--foreground))]"
                        >
                            <industry.icon className="w-4 h-4 text-[rgb(var(--primary))]" aria-hidden="true" />
                            {industry.name}
                        </li>
                    ))}
                </ul>
                <Button variant="outline" asChild>
                    <Link href="/industries">
                        See how we serve each industry
                        <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </Link>
                </Button>
            </div>
        </Section>
    );
}

/* ------------------------------------------------------------------ */
/* 10. Selected use cases                                              */
/* ------------------------------------------------------------------ */

const homeUseCases = [
    {
        title: "Document intake to ERP",
        scenario:
            "Invoices and contracts arrive by email, an AI pipeline classifies and extracts fields, validates against purchase orders, and posts clean records — with a controller approving only the exceptions.",
        systems: "Gmail · NetSuite · Slack",
        href: "/solutions#document-intelligence",
    },
    {
        title: "Lead follow-up that never sleeps",
        scenario:
            "New leads are scored and enriched, an agent drafts personalized outreach inside approved templates, and sales sees a full activity trail in the CRM before the first call.",
        systems: "HubSpot · Salesforce · Gmail",
        href: "/solutions#marketing-automation",
    },
    {
        title: "Support that answers with citations",
        scenario:
            "A RAG assistant resolves routine tickets from your verified help content, drafts responses for agents on complex ones, and escalates with full context — never from a model's imagination.",
        systems: "Zendesk · Confluence · Slack",
        href: "/solutions#customer-experience",
    },
];

export function UseCases() {
    return (
        <Section id="use-cases">
            <div className="max-w-5xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        Selected use cases
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        What this looks like in practice
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    {homeUseCases.map((useCase) => (
                        <Link
                            key={useCase.title}
                            href={useCase.href}
                            className="group glass-card p-6 flex flex-col rounded-2xl"
                        >
                            <h3 className="font-semibold text-[rgb(var(--foreground))] mb-3">
                                {useCase.title}
                            </h3>
                            <p className="text-sm text-[rgb(var(--foreground-muted))] leading-relaxed mb-4">
                                {useCase.scenario}
                            </p>
                            <p className="mt-auto text-xs font-mono text-[rgb(var(--foreground-muted))]">
                                {useCase.systems}
                            </p>
                            <span className="inline-flex items-center gap-1 text-xs text-[rgb(var(--primary))] mt-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                                See the solution
                                <ArrowRight className="w-3 h-3" aria-hidden="true" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    );
}

/* ------------------------------------------------------------------ */
/* 11. Engagement models                                               */
/* ------------------------------------------------------------------ */

const engagements = [
    {
        title: "AI Strategy Sprint",
        duration: "1–2 weeks",
        description:
            "An operational audit that maps your processes and systems, then delivers a prioritized automation roadmap scored by impact and risk.",
        deliverable: "Roadmap + first-build proposal",
    },
    {
        title: "Build & Launch",
        duration: "4–12 weeks",
        description:
            "A dedicated engineering team designs, builds, evaluates, and ships a production AI system — agents, workflows, RAG, or integrations.",
        deliverable: "A running system you own",
        highlighted: true,
    },
    {
        title: "Managed AI Operations",
        duration: "Ongoing",
        description:
            "We operate, monitor, and continuously improve your automations — model updates, evaluation runs, and new capabilities each quarter.",
        deliverable: "SLA-backed operations",
    },
];

export function EngagementModels() {
    return (
        <Section id="engagement" grid>
            <div className="max-w-5xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        Engagement models
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        Start small, scale what works
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    {engagements.map((engagement) => (
                        <div
                            key={engagement.title}
                            className={`relative p-6 rounded-2xl border flex flex-col ${
                                engagement.highlighted
                                    ? "border-[rgb(var(--primary))]/60 bg-[rgb(var(--primary))]/5 shadow-glow-sm"
                                    : "border-[rgb(var(--border))]/50 bg-[rgb(var(--background-secondary))]/60"
                            }`}
                        >
                            {engagement.highlighted && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gradient-brand text-white text-xs font-medium rounded-full">
                                    Most common
                                </span>
                            )}
                            <p className="text-xs font-mono text-[rgb(var(--primary))] mb-2">
                                {engagement.duration}
                            </p>
                            <h3 className="font-semibold text-lg text-[rgb(var(--foreground))] mb-3">
                                {engagement.title}
                            </h3>
                            <p className="text-sm text-[rgb(var(--foreground-muted))] leading-relaxed mb-4">
                                {engagement.description}
                            </p>
                            <p className="mt-auto text-xs text-[rgb(var(--foreground))] border-t border-[rgb(var(--border))]/40 pt-3">
                                Deliverable: {engagement.deliverable}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

/* ------------------------------------------------------------------ */
/* 12. Security and governance                                         */
/* ------------------------------------------------------------------ */

const securityPoints = [
    {
        icon: KeyRound,
        title: "Least-privilege access",
        description: "Every agent and integration runs on scoped credentials limited to the systems and objects it needs.",
    },
    {
        icon: UserCheck,
        title: "Human approval gates",
        description: "Consequential actions — payments, contracts, customer messages — wait for a named approver.",
    },
    {
        icon: ScrollText,
        title: "Complete audit trails",
        description: "Every automated step is logged and attributable, ready for compliance review.",
    },
    {
        icon: Lock,
        title: "Your data boundary",
        description: "Data stays inside your environment; sensitive fields are masked before any model sees them.",
    },
    {
        icon: Gauge,
        title: "Confidence thresholds",
        description: "Low-confidence results route to people instead of guessing — accuracy is measured, not assumed.",
    },
    {
        icon: ShieldCheck,
        title: "Kill switches & rollback",
        description: "Any automation can be paused instantly, and state is inspectable at every step.",
    },
];

export function SecurityGovernance() {
    return (
        <Section id="security">
            <div className="max-w-5xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        Security &amp; governance
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        Autonomy inside boundaries you control
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] md:text-lg">
                        AI that acts on your business must be governable. These controls
                        ship with every {site.name} system — they are not add-ons.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {securityPoints.map((point) => (
                        <div
                            key={point.title}
                            className="p-5 rounded-xl bg-[rgb(var(--background-secondary))]/60 border border-[rgb(var(--border))]/50"
                        >
                            <point.icon className="w-5 h-5 text-[rgb(var(--accent-cyan))] mb-3" aria-hidden="true" />
                            <h3 className="font-medium text-sm text-[rgb(var(--foreground))] mb-1.5">
                                {point.title}
                            </h3>
                            <p className="text-xs text-[rgb(var(--foreground-muted))] leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

/* ------------------------------------------------------------------ */
/* 13. Careers teaser                                                  */
/* ------------------------------------------------------------------ */

export function CareersTeaser() {
    return (
        <Section id="careers" grid>
            <div className="max-w-4xl mx-auto glass-card p-8 md:p-10 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-3 block">
                            Join {site.name}
                        </span>
                        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[rgb(var(--foreground))] mb-3">
                            Build AI systems that create real business impact
                        </h2>
                        <p className="text-sm md:text-base text-[rgb(var(--foreground-muted))] mb-6">
                            We are building AI agents, autonomous workflows, enterprise
                            automations, and generative AI applications for organizations
                            around the world — and we&apos;re hiring.
                        </p>
                        <Button asChild>
                            <Link href="/careers">
                                View open roles
                                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                            </Link>
                        </Button>
                    </div>
                    <ul className="space-y-3">
                        {jobs.map((job) => (
                            <li key={job.slug}>
                                <Link
                                    href={`/careers/${job.slug}`}
                                    className="group flex items-center justify-between p-4 rounded-xl bg-[rgb(var(--background-elevated))]/60 border border-[rgb(var(--border))]/50 hover:border-[rgb(var(--primary))]/40 transition-colors"
                                >
                                    <span>
                                        <span className="block font-medium text-sm text-[rgb(var(--foreground))]">
                                            {job.title}
                                        </span>
                                        <span className="block text-xs text-[rgb(var(--foreground-muted))] mt-0.5">
                                            {job.location} · {job.employmentType}
                                        </span>
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-[rgb(var(--foreground-muted))] group-hover:text-[rgb(var(--primary))] group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}
