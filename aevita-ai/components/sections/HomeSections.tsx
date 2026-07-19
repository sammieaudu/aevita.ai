import Link from "next/link";
import {
    ArrowRight,
    Bot,
    Workflow,
    Sparkles,
    Library,
    Cable,
    Megaphone,
    FileText,
    MessageSquare,
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
        icon: TimerOff,
        title: "Leads go cold before anyone follows up",
        description:
            "New inquiries sit in an inbox for hours or days. By the time someone responds, the prospect has already called a competitor.",
    },
    {
        icon: ClipboardX,
        title: "The same data gets typed in twice",
        description:
            "Your team re-enters the same customer information into the CRM, invoices, spreadsheets, and email — slow, expensive, and error-prone.",
    },
    {
        icon: Inbox,
        title: "Customers wait too long for answers",
        description:
            "Routine questions queue behind complex ones. Response times stretch, reviews suffer, and staff burn out on repetitive requests.",
    },
    {
        icon: EyeOff,
        title: "Growth means hiring for repetitive work",
        description:
            "Important tasks depend on manual reminders, managers lack visibility into daily operations, and scaling means adding headcount for admin.",
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
                        Your team is losing hours to work AI can handle
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] md:text-lg">
                        {site.name} turns these disconnected manual processes into
                        intelligent, measurable workflows.
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
    {
        icon: Megaphone,
        title: "Sales Automation",
        description:
            "Lead capture and qualification, personalized email and SMS follow-up, CRM updates, proposal generation, and dormant-lead re-engagement.",
        href: "/solutions#marketing-automation",
    },
    {
        icon: MessageSquare,
        title: "Customer-Service Automation",
        description:
            "AI assistants for common questions, ticket classification and routing, appointment reminders, feedback collection, and escalation to your team.",
        href: "/solutions#customer-experience",
    },
    {
        icon: Sparkles,
        title: "Marketing Automation",
        description:
            "Content workflows, email campaigns, lead nurturing, review requests, customer segmentation, and campaign performance summaries.",
        href: "/solutions#generative-ai",
    },
    {
        icon: Workflow,
        title: "Operations Automation",
        description:
            "Data entry and synchronization, report generation, document processing, internal approvals, invoice reminders, and daily operational summaries.",
        href: "/solutions#workflow-automation",
    },
    {
        icon: FileText,
        title: "Hiring & HR Automation",
        description:
            "Candidate screening, interview scheduling, application summaries, new-hire onboarding, document collection, and internal HR assistants.",
        href: "/solutions#document-intelligence",
    },
    {
        icon: Bot,
        title: "Executive AI Assistants",
        description:
            "Daily business briefings, meeting preparation, action-item tracking, KPI monitoring, document summarization, and decision-support reports.",
        href: "/solutions#ai-agents",
    },
];

export function SolutionsGrid() {
    return (
        <Section id="solutions">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        What we automate
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        What can {site.name} automate for your business?
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] md:text-lg">
                        Six areas of your business where AI-powered workflows reliably
                        save time — automated where it&apos;s safe, human-approved where
                        it matters.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                            <span className="mt-auto inline-flex items-center gap-1 text-xs text-[rgb(var(--primary))]">
                                Explore this solution
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
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
            "We identify repetitive tasks, delays, lost opportunities, and operational bottlenecks in your day-to-day workflows.",
    },
    {
        step: "02",
        title: "Prioritize",
        description:
            "We rank automation opportunities by business value, complexity, risk, and potential return on investment.",
    },
    {
        step: "03",
        title: "Build",
        description:
            "We create and integrate the AI workflow with your current tools and processes — no rip-and-replace.",
    },
    {
        step: "04",
        title: "Launch",
        description:
            "We test the automation, train your team, document the system, and deploy it safely.",
    },
    {
        step: "05",
        title: "Monitor & improve",
        description:
            "We monitor performance, resolve issues, measure results, and expand the automations that work.",
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
                        From manual workflow to managed AI automation
                    </h2>
                </div>
                <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {processSteps.map((item, index) => (
                        <li key={item.step} className="relative glass-card p-5">
                            <p className="text-xs font-mono text-[rgb(var(--primary))] mb-3">
                                Step {item.step}
                            </p>
                            <h3 className="font-semibold text-sm text-[rgb(var(--foreground))] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-xs text-[rgb(var(--foreground-muted))] leading-relaxed">
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
                <div className="text-center pt-8">
                    <Button variant="secondary" size="lg" asChild>
                        <Link href="/how-it-works">
                            Get your AI automation roadmap
                            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                        </Link>
                    </Button>
                </div>
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
                        Example automation scenarios
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        What this looks like in practice
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] md:text-lg">
                        Illustrative scenarios showing how {site.name} workflows
                        typically run — actual results depend on your processes and
                        systems.
                    </p>
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
        title: "AI Opportunity Assessment",
        duration: "Best for getting started",
        description:
            "Workflow discovery, automation opportunity analysis, prioritized recommendations, risk and data considerations, and a 30-, 60-, and 90-day roadmap.",
        deliverable: "A prioritized automation roadmap",
        ctaLabel: "Request an assessment",
        ctaHref: "/assessment",
    },
    {
        title: "AI Automation Sprint",
        duration: "One high-value workflow",
        description:
            "Workflow design, AI configuration, integration with your business systems, testing, deployment, team training, documentation, and an initial support period.",
        deliverable: "A running automation you own",
        ctaLabel: "Start an automation sprint",
        ctaHref: "/contact",
        highlighted: true,
    },
    {
        title: "Managed AI Automation",
        duration: "Ongoing partnership",
        description:
            "Monthly automation capacity, workflow monitoring, incident response, performance reviews, continuous improvement, and new automation development.",
        deliverable: "Monitored, improving automations",
        ctaLabel: "Discuss managed automation",
        ctaHref: "/contact",
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
                    <p className="text-[rgb(var(--foreground-muted))] md:text-lg">
                        Three simple ways to work with {site.name}. Pricing is scoped to
                        your workflows — request a proposal for specifics.
                    </p>
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
                            <p className="mt-auto text-xs text-[rgb(var(--foreground))] border-t border-[rgb(var(--border))]/40 pt-3 mb-4">
                                Deliverable: {engagement.deliverable}
                            </p>
                            <Button
                                variant={engagement.highlighted ? "default" : "outline"}
                                size="sm"
                                asChild
                            >
                                <Link href={engagement.ctaHref}>
                                    {engagement.ctaLabel}
                                    <ArrowRight className="ml-2 w-3.5 h-3.5" aria-hidden="true" />
                                </Link>
                            </Button>
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
                <div className="text-center pt-8">
                    <Link
                        href="/security"
                        className="text-sm text-[rgb(var(--primary))] hover:underline underline-offset-4 inline-flex items-center gap-1"
                    >
                        Read our security &amp; data protection practices
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
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
