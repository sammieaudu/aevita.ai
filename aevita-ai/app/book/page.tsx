import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { CalInline } from "@/components/CalInline";
import { site, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "Book a Call",
    description:
        "Pick a time that works for you. Book a free AI automation call with Aevita to discuss your workflows, bottlenecks, and where automation creates the most value.",
    alternates: { canonical: absoluteUrl("/book") },
};

export default function BookPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Section className="pt-32 pb-6" grid>
                <div className="max-w-2xl mx-auto text-center">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        Book a call
                    </span>
                    <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[rgb(var(--foreground))] mb-5">
                        Pick a time that works for you
                    </h1>
                    <p className="text-[rgb(var(--foreground-muted))] md:text-lg">
                        A free, no-pressure conversation about your workflows and where
                        AI automation can create the most value for your business. Bring
                        your questions — {site.name} brings practical answers.
                    </p>
                </div>
            </Section>
            <Section className="pt-0">
                <div className="max-w-5xl mx-auto">
                    <CalInline />
                </div>
            </Section>
        </div>
    );
}
