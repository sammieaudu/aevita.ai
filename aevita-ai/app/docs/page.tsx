
import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Search, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { docsCategories } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "Documentation",
    description:
        "Guides, tutorials, and reference material for working with Aevita's AI agents, automation workflows, and enterprise integrations.",
    alternates: { canonical: absoluteUrl("/docs") },
};

export default function DocumentationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Search Section */}
            <Section className="pt-32 pb-16 bg-[rgb(var(--background-secondary))]/30 border-b border-[rgb(var(--border))]/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Documentation
                    </h1>
                    <p className="text-lg text-[rgb(var(--foreground-muted))] mb-8 max-w-2xl mx-auto">
                        Search our knowledge base for answers, tutorials, and API reference.
                    </p>
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-11 pr-4 py-4 rounded-xl border border-input bg-background shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-base"
                            placeholder="Search documentation..."
                        />
                    </div>
                </div>
            </Section>

            {/* Categories Grid */}
            <Section>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {docsCategories.map((category) => (
                            <div
                                key={category.title}
                                className="group p-6 rounded-2xl border border-[rgb(var(--border))]/50 hover:border-[rgb(var(--primary))]/30 hover:bg-[rgb(var(--background-secondary))]/50 transition-all cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-lg bg-[rgb(var(--primary))]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <category.icon className="w-6 h-6 text-[rgb(var(--primary))]" />
                                </div>
                                <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {category.description}
                                </p>
                                <ul className="space-y-2">
                                    {category.articles.map((article) => (
                                        <li key={article.slug} className="flex items-center text-sm text-[rgb(var(--primary))] hover:underline">
                                            <FileText className="w-3 h-3 mr-2" />
                                            {article.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section glow className="mt-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
                    <p className="text-muted-foreground mb-8">
                        Can&apos;t find what you&apos;re looking for? Our support team is here to help.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/contact">Contact Support</Link>
                    </Button>
                </div>
            </Section>
        </div>
    );
}
