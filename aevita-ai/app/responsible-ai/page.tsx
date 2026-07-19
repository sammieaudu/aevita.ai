import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { site, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "Responsible AI Policy",
    description:
        "How Aevita designs AI automation responsibly: human oversight, transparency, data minimization, accountability, and safe failure behavior in every workflow we build.",
    alternates: { canonical: absoluteUrl("/responsible-ai") },
};

const principles = [
    {
        title: "Humans stay in control",
        body: "AI assists employees and customers without removing necessary human review. Consequential actions — payments, contracts, hiring decisions, customer commitments — always include an approval step owned by a named person at your company.",
    },
    {
        title: "Automation is transparent",
        body: "Your team always knows what each automation does, which systems it touches, and where its boundaries are. We document every workflow in plain language and hand that documentation to you.",
    },
    {
        title: "Data is minimized",
        body: "Workflows access only the data they need to do their job. Sensitive fields are masked or excluded before any AI model sees them, and we never use your business data to train models.",
    },
    {
        title: "Failures are safe",
        body: "Every automation is designed to fail safely: low-confidence results route to people, errors trigger alerts instead of silent bad outcomes, and any workflow can be paused instantly.",
    },
    {
        title: "Accountability is built in",
        body: "Every automated step is logged and attributable. If a question ever arises about what an automation did and why, the audit trail answers it.",
    },
    {
        title: "People come first",
        body: "We design automation to remove repetitive work from your team's day — not to remove your team. Judgment calls, relationships, and accountability stay with people.",
    },
];

export default function ResponsibleAiPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Section className="pt-32 pb-8" grid>
                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        Responsible AI
                    </span>
                    <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[rgb(var(--foreground))] mb-5">
                        Our Responsible AI Policy
                    </h1>
                    <p className="text-[rgb(var(--foreground-muted))] md:text-lg">
                        AI that acts on a real business must be governable, explainable,
                        and accountable. These principles apply to every workflow{" "}
                        {site.name} designs, builds, and operates.
                    </p>
                </div>
            </Section>

            <Section className="pt-0">
                <div className="max-w-3xl mx-auto space-y-6">
                    {principles.map((principle) => (
                        <section key={principle.title} className="glass-card rounded-2xl p-6 md:p-8">
                            <h2 className="font-heading text-xl font-semibold text-[rgb(var(--foreground))] mb-2">
                                {principle.title}
                            </h2>
                            <p className="text-sm md:text-base text-[rgb(var(--foreground-muted))] leading-relaxed">
                                {principle.body}
                            </p>
                        </section>
                    ))}
                    <p className="text-sm text-[rgb(var(--foreground-muted))] pt-2">
                        Questions about this policy? Contact us at{" "}
                        <a href={`mailto:${site.emails.primary}`} className="text-[rgb(var(--primary))] hover:underline">
                            {site.emails.primary}
                        </a>
                        .
                    </p>
                </div>
            </Section>
        </div>
    );
}
