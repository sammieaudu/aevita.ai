import type { LucideIcon } from "lucide-react";

export type WorkflowStage = {
    icon: LucideIcon;
    label: string;
    title: string;
    detail: string;
};

/**
 * Server-rendered workflow diagram: stage cards joined by animated
 * connectors (CSS-only, reduced-motion aware via global utilities).
 * Stacks vertically on mobile, flows horizontally from md upward.
 */
export function WorkflowDiagram({
    stages,
    ariaLabel,
}: {
    stages: WorkflowStage[];
    ariaLabel: string;
}) {
    return (
        <div role="img" aria-label={ariaLabel} className="flex flex-col md:flex-row md:items-stretch gap-1 md:gap-0">
            {stages.map((stage, index) => (
                <div key={`${stage.label}-${index}`} className="contents">
                    {index > 0 && (
                        <div
                            aria-hidden="true"
                            className="flex items-center justify-center shrink-0 rotate-90 md:rotate-0 h-6 w-8 md:h-auto md:w-8 mx-auto md:mx-0"
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
                                <path
                                    d="M21 1.5 L26 5 L21 8.5"
                                    stroke="rgb(var(--accent-blue))"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    opacity="0.7"
                                    fill="none"
                                />
                            </svg>
                        </div>
                    )}
                    <div className="flex-1 min-w-0 rounded-xl bg-[rgb(var(--background-elevated))]/60 border border-[rgb(var(--border))]/60 p-4 text-left">
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[rgb(var(--accent-blue))]/25 bg-[rgb(var(--accent-blue))]/10 text-[rgb(var(--accent-blue))] text-[10px] font-medium uppercase tracking-wide mb-2">
                            <stage.icon className="w-3 h-3" aria-hidden="true" />
                            {stage.label}
                        </div>
                        <p className="text-sm font-medium text-[rgb(var(--foreground))] leading-snug">{stage.title}</p>
                        <p className="text-xs text-[rgb(var(--foreground-muted))] mt-1">{stage.detail}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
