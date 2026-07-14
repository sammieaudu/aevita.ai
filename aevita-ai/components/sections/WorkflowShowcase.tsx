"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Bot, UserCheck, CheckCircle2, Database, MessageSquare, FileSearch, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

type Stage = {
    icon: LucideIcon;
    label: string;
    title: string;
    detail: string;
};

type ShowcaseWorkflow = {
    id: string;
    name: string;
    outcome: string;
    stages: Stage[];
};

const workflows: ShowcaseWorkflow[] = [
    {
        id: "lead-routing",
        name: "Lead qualification & routing",
        outcome: "Every lead followed up in minutes, with sales seeing full context in the CRM.",
        stages: [
            { icon: Mail, label: "Trigger", title: "New lead submits form", detail: "Website · HubSpot capture" },
            { icon: Bot, label: "AI agent", title: "Score, enrich & segment", detail: "Firmographics + intent signals" },
            { icon: UserCheck, label: "Human approval", title: "Rep approves outreach draft", detail: "On-brand template, editable" },
            { icon: CheckCircle2, label: "Outcome", title: "Sequenced follow-up sent", detail: "Activity logged in Salesforce" },
        ],
    },
    {
        id: "document-intake",
        name: "Document intake & posting",
        outcome: "Days of manual entry become minutes of exception review.",
        stages: [
            { icon: FileSearch, label: "Trigger", title: "Contract or invoice arrives", detail: "Email · SharePoint · DocuSign" },
            { icon: Bot, label: "AI agent", title: "Classify, extract & validate", detail: "Checked against reference data" },
            { icon: UserCheck, label: "Human approval", title: "Reviewer confirms low-confidence fields", detail: "Corrections feed back into the pipeline" },
            { icon: Database, label: "Outcome", title: "Clean record posted to ERP", detail: "Chain of custody preserved" },
        ],
    },
    {
        id: "support-triage",
        name: "Support triage & resolution",
        outcome: "Routine volume resolves instantly; agents start hard cases fully briefed.",
        stages: [
            { icon: MessageSquare, label: "Trigger", title: "Ticket or chat opened", detail: "Zendesk · Intercom · email" },
            { icon: Bot, label: "AI agent", title: "Answer from verified knowledge", detail: "Citations back to source docs" },
            { icon: UserCheck, label: "Human approval", title: "Agent reviews sensitive replies", detail: "Sentiment triggers human takeover" },
            { icon: CheckCircle2, label: "Outcome", title: "Resolved or escalated with summary", detail: "Resolution feeds the knowledge base" },
        ],
    },
];

function StageConnector() {
    return (
        <div aria-hidden="true" className="flex items-center justify-center shrink-0 rotate-90 md:rotate-0 h-6 w-8 md:h-auto md:w-8 mx-auto md:mx-0">
            <svg width="28" height="10" viewBox="0 0 28 10" fill="none" className="overflow-visible">
                <path d="M1 5 H22" stroke="rgb(var(--accent-violet))" strokeWidth="1.5" strokeLinecap="round" className="animate-flow-dash" opacity="0.7" />
                <path d="M21 1.5 L26 5 L21 8.5" stroke="rgb(var(--accent-violet))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" fill="none" />
            </svg>
        </div>
    );
}

export function WorkflowShowcase() {
    const [activeId, setActiveId] = useState(workflows[0].id);
    const active = workflows.find((workflow) => workflow.id === activeId) ?? workflows[0];

    return (
        <Section id="workflows" grid>
            <div className="max-w-5xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        Business workflows
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        Watch a process become a system
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] md:text-lg">
                        Every {site.name} workflow pairs AI execution with explicit human
                        checkpoints. Pick a process to see how it runs.
                    </p>
                </div>

                {/* Tabs */}
                <div role="tablist" aria-label="Example workflows" className="flex flex-wrap justify-center gap-2 mb-8">
                    {workflows.map((workflow) => (
                        <button
                            key={workflow.id}
                            role="tab"
                            id={`workflow-tab-${workflow.id}`}
                            aria-selected={workflow.id === activeId}
                            aria-controls={`workflow-panel-${workflow.id}`}
                            onClick={() => setActiveId(workflow.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                                workflow.id === activeId
                                    ? "bg-gradient-brand text-white border-transparent"
                                    : "text-[rgb(var(--foreground-muted))] border-[rgb(var(--border))]/60 hover:text-[rgb(var(--foreground))] hover:border-[rgb(var(--primary))]/40"
                            }`}
                        >
                            {workflow.name}
                        </button>
                    ))}
                </div>

                {/* Active workflow */}
                <div
                    role="tabpanel"
                    id={`workflow-panel-${active.id}`}
                    aria-labelledby={`workflow-tab-${active.id}`}
                    className="glass-card p-4 md:p-6 rounded-2xl"
                >
                    <div className="flex flex-col md:flex-row md:items-stretch gap-1 md:gap-0">
                        {active.stages.map((stage, index) => (
                            <div key={stage.label} className="contents">
                                {index > 0 && <StageConnector />}
                                <div className="flex-1 min-w-0 rounded-xl bg-[rgb(var(--background-elevated))]/60 border border-[rgb(var(--border))]/60 p-4 text-left">
                                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[rgb(var(--accent-violet))]/25 bg-[rgb(var(--accent-violet))]/10 text-[rgb(var(--accent-violet))] text-[10px] font-medium uppercase tracking-wide mb-2">
                                        <stage.icon className="w-3 h-3" aria-hidden="true" />
                                        {stage.label}
                                    </div>
                                    <p className="text-sm font-medium text-[rgb(var(--foreground))] leading-snug">
                                        {stage.title}
                                    </p>
                                    <p className="text-xs text-[rgb(var(--foreground-muted))] mt-1">
                                        {stage.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 pt-4 border-t border-[rgb(var(--border))]/40 text-sm text-[rgb(var(--foreground-muted))] text-center">
                        <span className="text-[rgb(var(--foreground))] font-medium">Result:</span>{" "}
                        {active.outcome}
                    </p>
                </div>

                <div className="text-center pt-8">
                    <Button variant="secondary" asChild>
                        <Link href="/workflows">
                            {site.cta.tertiary.label}
                            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Section>
    );
}
