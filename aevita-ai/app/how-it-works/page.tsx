import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, ListOrdered, Wrench, Rocket, Activity } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { site, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "How It Works — From Manual Workflow to Managed AI Automation",
    description:
        "Aevita's five-step process for small and medium-sized businesses: discover bottlenecks, prioritize by ROI, build and integrate the AI workflow, launch safely, then monitor and improve.",
    alternates: { canonical: absoluteUrl("/how-it-works") },
};

const steps = [
    {
        icon: Search,
        step: "Step 1",
        title: "Discover",
        summary:
            "We identify repetitive tasks, delays, lost opportunities, and operational bottlenecks.",
        details: [
            "A working session with the people who actually run the process",
            "A map of your current tools, data, and handoffs",
            "The hours, costs, and missed opportunities tied to each bottleneck",
        ],
    },
    {
        icon: ListOrdered,
        step: "Step 2",
        title: "Prioritize",
        summary:
            "We rank automation opportunities by business value, complexity, risk, and potential return on investment.",
        details: [
            "A prioritized list of automation candidates",
            "Effort and risk estimates for each",
            "A 30-, 60-, and 90-day roadmap you can act on",
        ],
    },
    {
        icon: Wrench,
        step: "Step 3",
        title: "Build",
        summary:
            "We create and integrate the AI workflow with your current tools and processes.",
        details: [
            "Integration with your CRM, email, calendar, and business systems",
            "Human approval points designed in from the start",
            "Security controls, logging, and error handling as standard",
        ],
    },
    {
        icon: Rocket,
        step: "Step 4",
        title: "Launch",
        summary:
            "We test the automation, train your team, document the system, and deploy it safely.",
        details: [
            "Testing against real scenarios before anything goes live",
            "Training for the people who will use and supervise the workflow",
            "Documentation your team owns — no black boxes",
        ],
    },
    {
        icon: Activity,
        step: "Step 5",
        title: "Monitor & Improve",
        summary:
            "We monitor performance, resolve issues, measure results, and expand successful automations.",
        details: [
            "Monitoring and alerts on every workflow",
            "Incident response when something needs attention",
            "Regular reviews to measure results and find the next opportunity",
        ],
    },
];

export default function HowItWorksPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Section className="pt-32 pb-12" grid>
                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        How it works
                    </span>
                    <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[rgb(var(--foreground))] mb-5">
                        From manual workflow to managed AI automation
                    </h1>
                    <p className="text-[rgb(var(--foreground-muted))] md:text-lg">
                        You don&apos;t need to know which AI tools you need — that&apos;s
                        our job. {site.name} follows a five-step process that starts
                        with your business, not with the technology.
                    </p>
                </div>
            </Section>

            <Section className="pt-0">
                <ol className="max-w-3xl mx-auto space-y-6">
                    {steps.map((item) => (
                        <li key={item.title} className="glass-card p-6 md:p-8 rounded-2xl">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 shrink-0 rounded-xl bg-[rgb(var(--primary))]/10 flex items-center justify-center">
                                    <item.icon className="w-5 h-5 text-[rgb(var(--primary))]" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-[rgb(var(--primary))] mb-1">
                                        {item.step}
                                    </p>
                                    <h2 className="font-heading text-xl md:text-2xl font-semibold text-[rgb(var(--foreground))] mb-2">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm md:text-base text-[rgb(var(--foreground-muted))] mb-4">
                                        {item.summary}
                                    </p>
                                    <ul className="space-y-2">
                                        {item.details.map((detail) => (
                                            <li
                                                key={detail}
                                                className="flex items-start gap-2 text-sm text-[rgb(var(--foreground-muted))]"
                                            >
                                                <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[rgb(var(--accent-cyan))]" aria-hidden="true" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </Section>

            <Section grid>
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        Get your AI automation roadmap
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] mb-8">
                        The process starts with a free assessment. We&apos;ll map your
                        workflows and show you exactly where automation pays off first
                        — no pressure, no jargon.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/assessment">
                                {site.cta.primary.label}
                                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/solutions">{site.cta.secondary.label}</Link>
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
