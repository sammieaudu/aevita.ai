import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    ArrowRight,
    Rocket,
    Check,
    Zap,
    DollarSign,
    Users,
    Clock,
} from "lucide-react";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "For Startups",
    description:
        "Enterprise-grade AI engineering and automation at startup-friendly scope. Move fast without breaking things.",
    alternates: { canonical: absoluteUrl("/solutions/startups") },
};

const benefits = [
    {
        icon: Zap,
        title: "Quick MVP Development",
        description: "Go from idea to launch in weeks, not months.",
    },
    {
        icon: DollarSign,
        title: "Pay-as-you-grow",
        description: "Flexible pricing that scales with your business.",
    },
    {
        icon: Users,
        title: "Startup-focused Support",
        description: "We understand the challenges of early-stage companies.",
    },
    {
        icon: Clock,
        title: "Rapid Iteration",
        description: "Deploy updates multiple times per day with CI/CD.",
    },
];

const features = [
    "Scalable cloud infrastructure from day one",
    "Modern tech stack (Next.js, React, Node.js)",
    "Automated testing and deployment pipelines",
    "24/7 monitoring and alerting",
    "Security best practices built-in",
    "Technical consulting and architecture reviews",
];

export default function StartupsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Section className="pt-32 pb-20" glow>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(var(--secondary))]/50 border border-[rgb(var(--border))] text-sm mb-6">
                        <Rocket className="w-4 h-4 text-[rgb(var(--primary))]" />
                        <span className="text-[rgb(var(--foreground-muted))]">
                            Built for speed
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-semibold text-[rgb(var(--foreground))] mb-6">
                        Move fast without <span className="text-gradient">breaking things</span>
                    </h1>
                    <p className="text-xl text-[rgb(var(--foreground-muted))]">
                        Enterprise-grade technology at startup-friendly prices.
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
                        What&apos;s Included
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
                        Ready to launch?
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] mb-8">
                        Let&apos;s discuss your startup and find the right solution.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">
                            Schedule a Call
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </Section>
        </div>
    );
}
