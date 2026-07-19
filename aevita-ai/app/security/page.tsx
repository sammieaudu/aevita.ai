import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, KeyRound, Lock, ScrollText, UserCheck, Bell, FileCheck2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { site, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "Security & Data Protection",
    description:
        "How Aevita protects your business and customer data: least-privilege access, encryption, audit trails, human approvals, monitoring, and documented error handling in every automation.",
    alternates: { canonical: absoluteUrl("/security") },
};

const practices = [
    {
        icon: KeyRound,
        title: "Least-privilege access",
        body: "Every automation runs on scoped credentials limited to the specific systems and records it needs. Role-based access controls determine who at your company can view, change, or approve each workflow.",
    },
    {
        icon: Lock,
        title: "Encryption and data boundaries",
        body: "Data is encrypted in transit and at rest. Your business data stays inside your environment boundaries, sensitive fields are masked before any AI model sees them, and we practice data minimization by default.",
    },
    {
        icon: UserCheck,
        title: "Human-in-the-loop controls",
        body: "Consequential actions wait for a named approver. Confidence thresholds route uncertain cases to people instead of letting the automation guess.",
    },
    {
        icon: ScrollText,
        title: "Audit trails",
        body: "Every automated step is logged and attributable — what ran, when, on what data, and with what result — ready for internal or compliance review.",
    },
    {
        icon: Bell,
        title: "Monitoring and alerting",
        body: "Workflows are monitored after launch. Failures trigger alerts and a defined escalation path rather than silently dropping work. Any automation can be paused instantly.",
    },
    {
        icon: FileCheck2,
        title: "Documented error handling",
        body: "Every workflow ships with documentation, defined failure behavior, backups where appropriate, and runbooks your team can follow — no black boxes.",
    },
];

export default function SecurityPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Section className="pt-32 pb-8" grid>
                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        Security &amp; data protection
                    </span>
                    <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[rgb(var(--foreground))] mb-5">
                        Built for real business operations
                    </h1>
                    <p className="text-[rgb(var(--foreground-muted))] md:text-lg">
                        Automation that touches your customers, money, and data must be
                        engineered like production software. These practices ship with
                        every {site.name} system — they are not add-ons.
                    </p>
                </div>
            </Section>

            <Section className="pt-0">
                <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 md:gap-6">
                    {practices.map((practice) => (
                        <section key={practice.title} className="glass-card rounded-2xl p-6">
                            <practice.icon className="w-5 h-5 text-[rgb(var(--accent-cyan))] mb-3" aria-hidden="true" />
                            <h2 className="font-heading text-lg font-semibold text-[rgb(var(--foreground))] mb-2">
                                {practice.title}
                            </h2>
                            <p className="text-sm text-[rgb(var(--foreground-muted))] leading-relaxed">
                                {practice.body}
                            </p>
                        </section>
                    ))}
                </div>
                <div className="max-w-4xl mx-auto text-center pt-10">
                    <p className="text-sm text-[rgb(var(--foreground-muted))] mb-6">
                        Have specific security requirements or questions? We&apos;ll walk
                        you through exactly how your data would be handled.
                    </p>
                    <Button asChild>
                        <Link href="/contact">
                            Talk to an AI automation expert
                            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                        </Link>
                    </Button>
                </div>
            </Section>
        </div>
    );
}
