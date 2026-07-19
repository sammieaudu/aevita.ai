import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AssessmentForm } from "@/components/assessment/AssessmentForm";
import { site, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "Book Your Free AI Automation Assessment",
    description:
        "Request a free AI automation assessment for your small or medium-sized business. We map your workflows, identify automation opportunities, and deliver a prioritized roadmap — no pressure, no jargon.",
    alternates: { canonical: absoluteUrl("/assessment") },
};

const included = [
    "A workflow discovery session with an automation expert",
    "Analysis of your repetitive tasks, delays, and bottlenecks",
    "Prioritized recommendations ranked by value, effort, and risk",
    "Suggested AI technology and integration approach",
    "Data protection and risk considerations for your business",
    "A practical 30-, 60-, and 90-day roadmap",
];

export default function AssessmentPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Section className="pt-32 pb-8" grid>
                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        Free AI automation assessment
                    </span>
                    <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[rgb(var(--foreground))] mb-5">
                        Find out what AI can do for your business
                    </h1>
                    <p className="text-[rgb(var(--foreground-muted))] md:text-lg">
                        Tell us about your workflows and we&apos;ll show you exactly
                        where automation creates the most value — whether or not you
                        work with {site.name}. No pressure. No AI jargon.
                    </p>
                </div>
            </Section>

            <Section className="pt-0">
                <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.6fr] gap-8 items-start">
                    <aside className="glass-card rounded-2xl p-6 md:p-8 lg:sticky lg:top-28">
                        <h2 className="font-heading text-lg font-semibold text-[rgb(var(--foreground))] mb-4">
                            What&apos;s included
                        </h2>
                        <ul className="space-y-3">
                            {included.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-[rgb(var(--foreground-muted))]">
                                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[rgb(var(--accent-cyan))]" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 pt-5 border-t border-[rgb(var(--border))]/40 text-xs text-[rgb(var(--foreground-muted))]">
                            After you submit, we&apos;ll confirm by email, review your
                            workflows, and invite qualified businesses to schedule a
                            discovery call.
                        </p>
                    </aside>
                    <AssessmentForm />
                </div>
            </Section>
        </div>
    );
}
