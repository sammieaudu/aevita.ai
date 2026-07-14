import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    ArrowRight,
    Building2,
    Check,
    Shield,
    Clock,
    Users,
    Headphones,
} from "lucide-react";

export const metadata: Metadata = {
    title: "For Enterprise",
    description:
        "Transform at scale with minimal disruption. Enterprise-grade AI systems with security, governance, and human control built in.",
};

const benefits = [
    {
        icon: Shield,
        title: "Compliance & Security",
        description: "SOC 2, HIPAA, GDPR compliance built into every solution.",
    },
    {
        icon: Clock,
        title: "SLA Guarantees",
        description: "99.99% uptime with guaranteed response times.",
    },
    {
        icon: Users,
        title: "Dedicated Team",
        description: "Named account managers and DevOps engineers.",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Round-the-clock monitoring and incident response.",
    },
];

const features = [
    "Complex system integration",
    "Legacy modernization",
    "Multi-region deployments",
    "Custom SLAs",
    "On-premise or hybrid cloud",
    "Executive reporting and reviews",
    "Change management support",
    "Disaster recovery planning",
];

export default function EnterprisePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Section className="pt-32 pb-20" glow>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(var(--secondary))]/50 border border-[rgb(var(--border))] text-sm mb-6">
                        <Building2 className="w-4 h-4 text-[rgb(var(--primary))]" />
                        <span className="text-[rgb(var(--foreground-muted))]">
                            Enterprise-grade
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-semibold text-[rgb(var(--foreground))] mb-6">
                        Transform at <span className="text-gradient">scale</span>
                    </h1>
                    <p className="text-xl text-[rgb(var(--foreground-muted))]">
                        Fortune 500 experience on every project. Minimal disruption, maximum impact.
                    </p>
                </div>
            </Section>

            <Section grid>
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit.title}
                                className="p-6 rounded-xl bg-[rgb(var(--background-secondary))] border border-[rgb(var(--border))]/50 hover:border-[rgb(var(--primary))]/30 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[rgb(var(--primary))]/10 flex items-center justify-center mb-4">
                                    <benefit.icon className="w-5 h-5 text-[rgb(var(--primary))]" />
                                </div>
                                <h3 className="font-semibold text-[rgb(var(--foreground))] mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-[rgb(var(--foreground-muted))]">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-semibold text-[rgb(var(--foreground))] text-center mb-8">
                        Enterprise Capabilities
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {features.map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-[rgb(var(--primary))]" />
                                <span className="text-[rgb(var(--foreground-muted))]">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section glow>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-[rgb(var(--foreground))] mb-6">
                        Ready to discuss your needs?
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] mb-8">
                        Talk to our enterprise team about your transformation goals.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">
                            Contact Sales
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </Section>
        </div>
    );
}
