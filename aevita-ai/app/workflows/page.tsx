import { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    Mail,
    Bot,
    UserCheck,
    CheckCircle2,
    Database,
    MessageSquare,
    Megaphone,
    Users,
    ClipboardCheck,
    Building2,
    RefreshCw,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { WorkflowDiagram, type WorkflowStage } from "@/components/workflows/WorkflowDiagram";
import { site, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "Business Workflows",
    description:
        "See how Aevita turns real business processes — invoice intake, lead follow-up, support triage, employee onboarding, CRM sync, and campaign operations — into intelligent, human-controlled automated workflows.",
    alternates: {
        canonical: absoluteUrl("/workflows"),
    },
};

type Workflow = {
    id: string;
    name: string;
    department: string;
    problem: string;
    stages: WorkflowStage[];
    humanControl: string;
    outcome: string;
    solutionHref: string;
};

const workflows: Workflow[] = [
    {
        id: "invoice-intake",
        name: "Invoice intake & posting",
        department: "Finance",
        problem:
            "Invoices arrive as PDFs in shared inboxes and someone re-types every line into the ERP — slowly, and with errors that surface at month-end close.",
        stages: [
            { icon: Mail, label: "Trigger", title: "Invoice email received", detail: "Gmail / Outlook · attachment detected" },
            { icon: Bot, label: "AI extract", title: "Fields & line items extracted", detail: "Matched against the PO in the ERP" },
            { icon: UserCheck, label: "Approval", title: "Controller reviews exceptions", detail: "Only low-confidence or mismatched items" },
            { icon: Database, label: "Outcome", title: "Clean record posted to ERP", detail: "Receipt in Slack · audit log retained" },
        ],
        humanControl:
            "High-confidence invoices post automatically; anything ambiguous waits in a review queue with the source document side-by-side.",
        outcome: "Days of manual entry become minutes of exception review, with a complete chain of custody per invoice.",
        solutionHref: "/solutions#document-intelligence",
    },
    {
        id: "lead-follow-up",
        name: "Lead qualification & follow-up",
        department: "Sales & Marketing",
        problem:
            "Leads go cold waiting for a human to notice them; qualification is inconsistent and follow-up depends on who is at their desk.",
        stages: [
            { icon: Users, label: "Trigger", title: "New lead captured", detail: "Website form · HubSpot / Salesforce" },
            { icon: Bot, label: "AI qualify", title: "Scored, enriched & segmented", detail: "Firmographics and intent signals" },
            { icon: UserCheck, label: "Approval", title: "Rep approves outreach draft", detail: "On-brand template, fully editable" },
            { icon: CheckCircle2, label: "Outcome", title: "Sequenced follow-up runs", detail: "Every touch logged in the CRM" },
        ],
        humanControl:
            "Marketers approve message templates and tone rules up front; reps approve individual sends where deals are sensitive.",
        outcome: "Every lead gets a response in minutes, and sales opens each call with full context.",
        solutionHref: "/solutions#marketing-automation",
    },
    {
        id: "support-triage",
        name: "Support triage & resolution",
        department: "Customer Experience",
        problem:
            "Routine tickets queue behind complex ones, first response times stretch, and agents answer the same questions daily.",
        stages: [
            { icon: MessageSquare, label: "Trigger", title: "Ticket or chat opened", detail: "Zendesk · Intercom · email" },
            { icon: Bot, label: "AI resolve", title: "Cited answer from your docs", detail: "RAG over verified help content" },
            { icon: UserCheck, label: "Approval", title: "Agent reviews sensitive replies", detail: "Sentiment triggers human takeover" },
            { icon: CheckCircle2, label: "Outcome", title: "Resolved or escalated briefed", detail: "Resolution feeds the knowledge base" },
        ],
        humanControl:
            "You define which intents the assistant may close autonomously; everything else becomes a drafted reply an agent approves.",
        outcome: "Routine volume resolves instantly while human agents concentrate on conversations that need judgment.",
        solutionHref: "/solutions#customer-experience",
    },
    {
        id: "employee-onboarding",
        name: "Employee onboarding",
        department: "People Operations",
        problem:
            "New hires wait days for accounts and equipment because onboarding lives in a checklist nobody fully owns.",
        stages: [
            { icon: ClipboardCheck, label: "Trigger", title: "Offer accepted in ATS", detail: "Signed offer starts the workflow" },
            { icon: Bot, label: "AI orchestrate", title: "Accounts, access & docs prepared", detail: "IT, payroll, and workspace tasks fan out" },
            { icon: UserCheck, label: "Approval", title: "Manager confirms access levels", detail: "Least-privilege by default" },
            { icon: CheckCircle2, label: "Outcome", title: "Day-one ready", detail: "Status visible to HR at every step" },
        ],
        humanControl:
            "Managers approve system access and hardware; HR sees a live status board instead of chasing checklists.",
        outcome: "Onboarding shrinks from a week of coordination to an automated sequence with clear owners for the human steps.",
        solutionHref: "/solutions#workflow-automation",
    },
    {
        id: "crm-erp-sync",
        name: "CRM ↔ ERP reconciliation",
        department: "Revenue Operations",
        problem:
            "Sales and finance trust different systems; records drift apart and leadership reconciles conflicting numbers by hand.",
        stages: [
            { icon: RefreshCw, label: "Trigger", title: "Record changes in either system", detail: "Event-driven, bidirectional sync" },
            { icon: Bot, label: "AI match", title: "Records mapped & validated", detail: "AI-assisted matching for messy data" },
            { icon: UserCheck, label: "Approval", title: "Ambiguous matches reviewed", detail: "Dry-run before any bulk write" },
            { icon: Database, label: "Outcome", title: "One trusted record everywhere", detail: "Change-data log per field" },
        ],
        humanControl:
            "Admins set per-field sync rules; ambiguous record matches queue for human review instead of silently merging.",
        outcome: "One version of every customer, order, and invoice — with drift surfaced instead of discovered.",
        solutionHref: "/solutions#crm-erp",
    },
    {
        id: "campaign-ops",
        name: "Campaign production & launch",
        department: "Marketing",
        problem:
            "Campaign production is a bottleneck: briefs wait on copy, copy waits on review, and personalization gets flattened to batch-and-blast.",
        stages: [
            { icon: Megaphone, label: "Trigger", title: "Campaign brief approved", detail: "Audience pulled from live segments" },
            { icon: Bot, label: "AI generate", title: "On-brand variants per segment", detail: "Inside approved tone and claims rules" },
            { icon: UserCheck, label: "Approval", title: "Marketer approves final set", detail: "Frequency caps enforced in-pipeline" },
            { icon: Building2, label: "Outcome", title: "Launch, measure, reallocate", detail: "Every send traceable to its rule" },
        ],
        humanControl:
            "Nothing sends without a marketer's approval on the template set; suppression lists and consent state are enforced at the data layer.",
        outcome: "Campaign volume scales with data instead of headcount, without losing brand control.",
        solutionHref: "/solutions#marketing-automation",
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Aevita Business Workflows",
    itemListElement: workflows.map((workflow, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: workflow.name,
        url: absoluteUrl(`/workflows#${workflow.id}`),
    })),
};

export default function WorkflowsPage() {
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
                        Business workflows
                    </p>
                    <h1 className="font-heading text-4xl md:text-6xl font-semibold text-[rgb(var(--foreground))] mb-6">
                        Real processes, rebuilt as{" "}
                        <span className="text-gradient">intelligent systems</span>
                    </h1>
                    <p className="text-xl text-[rgb(var(--foreground-muted))] max-w-3xl mx-auto">
                        Six workflows we build again and again — each pairing AI execution
                        with explicit human checkpoints, so automation moves fast without
                        moving out of control.
                    </p>
                </div>
            </Section>

            {/* Workflow list */}
            <Section grid>
                <div className="max-w-5xl mx-auto flex flex-col gap-10">
                    {workflows.map((workflow) => (
                        <article
                            key={workflow.id}
                            id={workflow.id}
                            className="scroll-mt-24 glass-card rounded-2xl p-6 md:p-8"
                        >
                            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                                <h2 className="font-heading text-xl md:text-2xl font-semibold text-[rgb(var(--foreground))]">
                                    {workflow.name}
                                </h2>
                                <span className="px-3 py-1 rounded-full text-xs text-[rgb(var(--foreground-muted))] bg-[rgb(var(--secondary))]/60 border border-[rgb(var(--border))]/60">
                                    {workflow.department}
                                </span>
                            </div>
                            <p className="text-sm md:text-base text-[rgb(var(--foreground-muted))] mb-6 max-w-3xl">
                                {workflow.problem}
                            </p>

                            <WorkflowDiagram
                                stages={workflow.stages}
                                ariaLabel={`${workflow.name} workflow: ${workflow.stages
                                    .map((stage) => `${stage.label} — ${stage.title}`)
                                    .join("; ")}.`}
                            />

                            <div className="grid md:grid-cols-2 gap-6 mt-6 mb-6">
                                <div>
                                    <h3 className="text-xs font-medium uppercase tracking-wider text-[rgb(var(--foreground-muted))] mb-2">
                                        Human control
                                    </h3>
                                    <p className="text-sm text-[rgb(var(--foreground-muted))] leading-relaxed">
                                        {workflow.humanControl}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xs font-medium uppercase tracking-wider text-[rgb(var(--foreground-muted))] mb-2">
                                        Operational outcome
                                    </h3>
                                    <p className="text-sm text-[rgb(var(--foreground-muted))] leading-relaxed">
                                        {workflow.outcome}
                                    </p>
                                </div>
                            </div>

                            <Button asChild variant="outline" size="sm">
                                <Link href={workflow.solutionHref}>
                                    See the underlying solution
                                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                                </Link>
                            </Button>
                        </article>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section glow>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-heading text-3xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        Which process is costing you the most?
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] mb-8">
                        Bring it to a strategy call — we&apos;ll map it into a workflow like
                        the ones above and estimate the impact before you commit to anything.
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
