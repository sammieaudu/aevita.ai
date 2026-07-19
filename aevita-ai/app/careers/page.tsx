import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe2, Cpu, Users, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { jobs } from "@/lib/careers";
import { site, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "Careers — Join Aevita",
    description:
        "Join Aevita and build AI systems that create real business impact: AI agents, autonomous workflows, enterprise automations, and generative AI applications for organizations around the world.",
    alternates: {
        canonical: absoluteUrl("/careers"),
    },
};

const perks = [
    {
        icon: Globe2,
        title: "Remote-first, async-friendly",
        description: "Work from anywhere with a team that writes things down and respects focus time.",
    },
    {
        icon: Cpu,
        title: "Frontier work, real stakes",
        description: "Ship agents, RAG systems, and automations that businesses actually run on.",
    },
    {
        icon: Users,
        title: "Small team, big ownership",
        description: "You own systems end to end — architecture, delivery, and the client relationship.",
    },
    {
        icon: TrendingUp,
        title: "Grow with the field",
        description: "Dedicated time for evals, research, and learning as the AI landscape moves.",
    },
];

export default function CareersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <Section className="pt-32 pb-12" glow>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm font-medium uppercase tracking-widest text-[rgb(var(--primary))] mb-4">
                        Build the future of intelligent business
                    </p>
                    <h1 className="font-heading text-4xl md:text-6xl font-semibold text-[rgb(var(--foreground))] mb-6">
                        Join {site.name} and build AI systems that create{" "}
                        <span className="text-gradient">real business impact</span>.
                    </h1>
                    <p className="text-xl text-[rgb(var(--foreground-muted))] max-w-3xl mx-auto">
                        We are building AI agents, autonomous workflows, enterprise
                        automations, and generative AI applications for organizations
                        around the world.
                    </p>
                </div>
            </Section>

            {/* Open positions */}
            <Section grid id="open-roles">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[rgb(var(--foreground))] text-center mb-10">
                        Open positions
                    </h2>
                    <ul className="flex flex-col gap-4">
                        {jobs.map((job) => (
                            <li key={job.slug}>
                                <Link
                                    href={`/careers/${job.slug}`}
                                    className="group glass-card rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4 hover:no-underline"
                                >
                                    <div className="flex-1">
                                        <h3 className="font-heading text-lg md:text-xl font-semibold text-[rgb(var(--foreground))] mb-1.5">
                                            {job.title}
                                        </h3>
                                        <p className="text-sm text-[rgb(var(--foreground-muted))] mb-2 max-w-2xl">
                                            {job.summary}
                                        </p>
                                        <p className="text-xs text-[rgb(var(--foreground-muted))]">
                                            {job.department} · {job.location} · {job.employmentType}
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--primary))] shrink-0">
                                        View role & apply
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <p className="text-center text-sm text-[rgb(var(--foreground-muted))] mt-8">
                        Don&apos;t see your role? Introduce yourself at{" "}
                        <a className="text-[rgb(var(--primary))] hover:underline" href={`mailto:${site.emails.careers}`}>
                            {site.emails.careers}
                        </a>
                        .
                    </p>
                </div>
            </Section>

            {/* Why Aevita */}
            <Section>
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[rgb(var(--foreground))] text-center mb-10">
                        Why work at {site.name}
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {perks.map((perk) => (
                            <div
                                key={perk.title}
                                className="p-5 rounded-xl bg-[rgb(var(--background-secondary))]/60 border border-[rgb(var(--border))]/50"
                            >
                                <perk.icon className="w-5 h-5 text-[rgb(var(--primary))] mb-3" aria-hidden="true" />
                                <h3 className="font-medium text-sm text-[rgb(var(--foreground))] mb-1.5">
                                    {perk.title}
                                </h3>
                                <p className="text-sm text-[rgb(var(--foreground-muted))] leading-relaxed">
                                    {perk.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section glow>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-heading text-3xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        Ready to build with us?
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] mb-8">
                        Pick a role above, or tell us how you&apos;d make {site.name} better.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="#open-roles">
                            See open roles
                            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                        </Link>
                    </Button>
                </div>
            </Section>
        </div>
    );
}
