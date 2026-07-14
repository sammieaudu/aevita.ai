import { Mail, Bot, UserCheck, CheckCircle2 } from "lucide-react";

/**
 * Hero workflow visualization — a live-feeling automation run:
 * trigger → AI agent → human approval → outcome, with the connected
 * systems underneath. Built from HTML + tiny SVG connectors so text
 * stays readable at every viewport; animation is pure CSS and honors
 * prefers-reduced-motion via the global utility classes.
 */

const stages = [
    {
        icon: Mail,
        label: "Trigger",
        title: "Invoice email received",
        detail: "Gmail · attachment detected",
        tone: "cyan" as const,
    },
    {
        icon: Bot,
        label: "AI agent",
        title: "Extract, match & validate",
        detail: "Fields checked against PO in ERP",
        tone: "blue" as const,
    },
    {
        icon: UserCheck,
        label: "Human approval",
        title: "Controller reviews exceptions",
        detail: "Only when confidence is low",
        tone: "violet" as const,
    },
    {
        icon: CheckCircle2,
        label: "Outcome",
        title: "Posted to ERP · receipt in Slack",
        detail: "Full audit log retained",
        tone: "blue" as const,
    },
];

const toneClasses = {
    cyan: "text-[rgb(var(--accent-cyan))] bg-[rgb(var(--accent-cyan))]/10 border-[rgb(var(--accent-cyan))]/25",
    blue: "text-[rgb(var(--accent-blue))] bg-[rgb(var(--accent-blue))]/10 border-[rgb(var(--accent-blue))]/25",
    violet: "text-[rgb(var(--accent-violet))] bg-[rgb(var(--accent-violet))]/10 border-[rgb(var(--accent-violet))]/25",
};

const systems = ["Gmail", "NetSuite", "Salesforce", "Slack", "Postgres", "SharePoint"];

function Connector() {
    return (
        <div
            aria-hidden="true"
            className="flex items-center justify-center shrink-0 rotate-90 lg:rotate-0 h-6 w-8 lg:h-auto lg:w-7 mx-auto lg:mx-0"
        >
            <svg width="28" height="10" viewBox="0 0 28 10" fill="none" className="overflow-visible">
                <path
                    d="M1 5 H22"
                    stroke="rgb(var(--accent-blue))"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="animate-flow-dash"
                    opacity="0.7"
                />
                <path d="M21 1.5 L26 5 L21 8.5" stroke="rgb(var(--accent-blue))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" fill="none" />
            </svg>
        </div>
    );
}

export function HeroVisual() {
    return (
        <div
            className="w-full max-w-4xl glass-card p-4 md:p-6"
            role="img"
            aria-label="Example Aevita workflow: an invoice email triggers an AI agent that extracts and validates data, a human approves exceptions, and the validated record is posted to the ERP with a receipt in Slack."
        >
            {/* Status header */}
            <div className="flex items-center justify-between mb-4">
                <p className="text-[11px] md:text-xs font-medium uppercase tracking-wider text-[rgb(var(--foreground-muted))]">
                    Business workflow · Invoice intake
                </p>
                <p className="flex items-center gap-1.5 text-[11px] md:text-xs text-[rgb(var(--foreground-muted))]">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                        <span className="animate-glow absolute inline-flex h-full w-full rounded-full bg-[rgb(var(--accent-cyan))] opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgb(var(--accent-cyan))]" />
                    </span>
                    Running
                </p>
            </div>

            {/* Stages */}
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-1 lg:gap-0">
                {stages.map((stage, index) => (
                    <div key={stage.label} className="contents">
                        {index > 0 && <Connector />}
                        <div className="flex-1 min-w-0 rounded-xl bg-[rgb(var(--background-elevated))]/60 border border-[rgb(var(--border))]/60 p-3 md:p-4 text-left">
                            <div
                                className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-medium uppercase tracking-wide mb-2 ${toneClasses[stage.tone]}`}
                            >
                                <stage.icon className="w-3 h-3" aria-hidden="true" />
                                {stage.label}
                            </div>
                            <p className="text-xs md:text-sm font-medium text-[rgb(var(--foreground))] leading-snug">
                                {stage.title}
                            </p>
                            <p className="text-[11px] md:text-xs text-[rgb(var(--foreground-muted))] mt-1">
                                {stage.detail}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Connected systems */}
            <div className="mt-4 pt-4 border-t border-[rgb(var(--border))]/40 flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
                <span className="text-[10px] md:text-[11px] uppercase tracking-wider text-[rgb(var(--foreground-muted))] mr-1">
                    Connected systems
                </span>
                {systems.map((system) => (
                    <span
                        key={system}
                        className="px-2 py-0.5 rounded-full text-[10px] md:text-[11px] text-[rgb(var(--foreground-muted))] bg-[rgb(var(--secondary))]/60 border border-[rgb(var(--border))]/50"
                    >
                        {system}
                    </span>
                ))}
            </div>
        </div>
    );
}
