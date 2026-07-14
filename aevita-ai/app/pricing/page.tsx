import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Transparent engagement pricing for AI engineering, intelligent automation, and enterprise integration work.",
};

const plans = [
    {
        name: "Starter",
        price: "$99",
        period: "/month",
        description: "Perfect for small businesses getting started.",
        features: [
            "Basic workflow automation",
            "1 cloud environment",
            "Email support",
            "Monthly reports",
            "Up to 3 integrations",
        ],
        cta: "Get Started",
        highlighted: false,
    },
    {
        name: "Professional",
        price: "$299",
        period: "/month",
        description: "For growing businesses that need more power.",
        features: [
            "Advanced RPA workflows",
            "Multi-cloud setup",
            "24/7 priority support",
            "CI/CD pipeline setup",
            "Unlimited integrations",
            "Weekly analytics",
            "Dedicated manager",
        ],
        cta: "Start Free Trial",
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Tailored solutions for large-scale operations.",
        features: [
            "Custom automation",
            "Full cloud architecture",
            "On-call 24/7 support",
            "Dedicated DevOps team",
            "SLA guarantees",
            "On-premise options",
            "Executive reporting",
        ],
        cta: "Contact Sales",
        highlighted: false,
    },
];

export default function PricingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <Section className="pt-32 pb-20" glow>
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        Pricing
                    </span>
                    <h1 className="text-4xl md:text-6xl font-semibold text-[rgb(var(--foreground))] mb-6">
                        Simple, transparent pricing
                    </h1>
                    <p className="text-xl text-[rgb(var(--foreground-muted))]">
                        Choose a plan that fits your needs. Scale as you grow.
                    </p>
                </div>
            </Section>

            {/* Pricing Cards */}
            <Section>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative p-8 rounded-2xl border ${plan.highlighted
                                        ? "border-[rgb(var(--primary))] bg-[rgb(var(--primary))]/5"
                                        : "border-[rgb(var(--border))]/50 bg-[rgb(var(--background-secondary))]"
                                    } transition-all hover:border-[rgb(var(--primary))]/50`}
                            >
                                {plan.highlighted && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[rgb(var(--primary))] text-white text-sm font-medium rounded-full">
                                        Most Popular
                                    </div>
                                )}
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-[rgb(var(--foreground))] mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm text-[rgb(var(--foreground-muted))]">
                                        {plan.description}
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-[rgb(var(--foreground))]">
                                        {plan.price}
                                    </span>
                                    <span className="text-[rgb(var(--foreground-muted))]">
                                        {plan.period}
                                    </span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-3 text-sm"
                                        >
                                            <Check className="w-4 h-4 text-[rgb(var(--primary))] flex-shrink-0 mt-0.5" />
                                            <span className="text-[rgb(var(--foreground-muted))]">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    asChild
                                    className="w-full"
                                    variant={plan.highlighted ? "default" : "secondary"}
                                >
                                    <Link href="/contact">
                                        {plan.cta}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* FAQ Teaser */}
            <Section glow>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        Have questions?
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] mb-8">
                        Contact us for personalized assistance.
                    </p>
                    <Button variant="secondary" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </Section>
        </div>
    );
}
