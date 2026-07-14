import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    ArrowRight,
    Target,
    Lightbulb,
    Shield,
    Users,
    Zap,
    Eye,
} from "lucide-react";
import { site, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "About Aevita — AI Engineering & Intelligent Automation",
    description:
        "Aevita designs and builds AI agents, autonomous workflows, RAG systems, and enterprise integrations that turn disconnected operations into intelligent, scalable systems.",
    alternates: {
        canonical: absoluteUrl("/about"),
    },
};

const values = [
    {
        icon: Target,
        title: "Outcomes, not demos",
        description:
            "Every system we ship is tied to a measurable operational result agreed before we build.",
    },
    {
        icon: Shield,
        title: "Human control by design",
        description:
            "Approval gates, confidence thresholds, and audit logs are part of every AI system we deliver.",
    },
    {
        icon: Lightbulb,
        title: "Engineering over hype",
        description:
            "We choose the simplest architecture that solves the problem — and we can explain every choice.",
    },
    {
        icon: Zap,
        title: "Ship in increments",
        description:
            "Working software early and often. Each phase proves value before the next begins.",
    },
    {
        icon: Users,
        title: "Partnership",
        description:
            "We work as an extension of your team and hand over systems your people can own.",
    },
    {
        icon: Eye,
        title: "Transparency",
        description:
            "Clear scopes, honest trade-offs, and full visibility into what the automation is doing.",
    },
];

const approach = [
    {
        step: "01",
        title: "Map the operation",
        description:
            "We start with your real processes — the handoffs, the spreadsheets, the manual glue — and identify where intelligence and automation pay off fastest.",
    },
    {
        step: "02",
        title: "Design the system",
        description:
            "Architecture, model selection, integration points, and the human approval stages that keep people in control of consequential decisions.",
    },
    {
        step: "03",
        title: "Build and evaluate",
        description:
            "Production engineering with evaluation suites, guardrails, and observability — so quality is measured, not assumed.",
    },
    {
        step: "04",
        title: "Operate and hand over",
        description:
            "We run the system with you, tune it against live data, and transfer ownership with runbooks and training.",
    },
];

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <Section className="pt-24 md:pt-32 pb-20 relative" glow>
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        About {site.name}
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-semibold text-[rgb(var(--foreground))] mb-6 leading-tight">
                        The engineering partner for{" "}
                        <span className="text-gradient">intelligent operations</span>
                    </h1>
                    <p className="text-xl text-[rgb(var(--foreground-muted))] max-w-2xl mx-auto">
                        {site.displayName} designs and builds AI agents, autonomous
                        workflows, generative AI applications, and enterprise integrations
                        that help organizations operate faster, reduce manual work, and
                        scale efficiently.
                    </p>
                </div>
            </Section>

            {/* Story */}
            <Section grid>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-semibold text-[rgb(var(--foreground))] mb-6">
                                Why {site.name} exists
                            </h2>
                            <div className="space-y-4 text-[rgb(var(--foreground-muted))]">
                                <p>
                                    Most organizations don&apos;t have an AI problem — they have
                                    an operations problem. Work lives in disconnected systems,
                                    skilled people spend their days moving data between screens,
                                    and every process depends on someone remembering to do the
                                    next step.
                                </p>
                                <p>
                                    {site.name} was founded on the belief that this layer of
                                    manual glue can be engineered away — with AI agents that act
                                    inside clear boundaries, workflows that never drop a handoff,
                                    and integrations that make systems of record agree with each
                                    other.
                                </p>
                                <p>
                                    We deliver working production systems, not strategy decks.
                                    Every engagement ends with software your team runs, measures,
                                    and owns.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: "10", label: "Solution disciplines" },
                                { value: "4", label: "Delivery phases" },
                                { value: "100%", label: "Human-controlled AI" },
                                { value: "24h", label: "Response time" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="p-6 rounded-xl bg-[rgb(var(--background-secondary))] border border-[rgb(var(--border))]/50 text-center"
                                >
                                    <div className="text-3xl font-bold text-[rgb(var(--foreground))]">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-[rgb(var(--foreground-muted))]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Values */}
            <Section>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-[rgb(var(--foreground))] mb-4">
                            Why {site.name}
                        </h2>
                        <p className="text-[rgb(var(--foreground-muted))]">
                            The principles that guide every system we build.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="p-6 rounded-xl bg-[rgb(var(--background-secondary))] border border-[rgb(var(--border))]/50 hover:border-[rgb(var(--primary))]/30 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[rgb(var(--primary))]/10 flex items-center justify-center mb-4">
                                    <value.icon className="w-5 h-5 text-[rgb(var(--primary))]" aria-hidden="true" />
                                </div>
                                <h3 className="font-semibold text-[rgb(var(--foreground))] mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-[rgb(var(--foreground-muted))]">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Approach */}
            <Section grid>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-[rgb(var(--foreground))] mb-4">
                            {site.name}&apos;s approach
                        </h2>
                        <p className="text-[rgb(var(--foreground-muted))]">
                            How an engagement moves from a mapped process to a running system.
                        </p>
                    </div>
                    <ol className="grid sm:grid-cols-2 gap-6">
                        {approach.map((item) => (
                            <li
                                key={item.step}
                                className="p-6 rounded-xl bg-[rgb(var(--background-secondary))] border border-[rgb(var(--border))]/50"
                            >
                                <p className="text-xs font-mono text-[rgb(var(--primary))] mb-2">
                                    {item.step}
                                </p>
                                <h3 className="font-semibold text-[rgb(var(--foreground))] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-[rgb(var(--foreground-muted))]">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </Section>

            {/* CTA */}
            <Section glow>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-[rgb(var(--foreground))] mb-6">
                        Ready to work together?
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] mb-8">
                        Let&apos;s map the first system worth building for your operation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href={site.cta.primary.href}>
                                {site.cta.primary.label}
                                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/careers">Join {site.name}</Link>
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
