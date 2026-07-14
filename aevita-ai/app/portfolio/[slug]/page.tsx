
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Section className="pt-32 pb-16 bg-[rgb(var(--background-secondary))]/30 border-b border-[rgb(var(--border))]/50">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center text-sm text-[rgb(var(--foreground-muted))] hover:text-[rgb(var(--primary))] mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Portfolio
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-2 block">
                                {project.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[rgb(var(--foreground))]">
                                {project.title}
                            </h1>
                            <p className="text-xl text-[rgb(var(--foreground-muted))] max-w-2xl">
                                {project.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))] text-sm font-medium border border-[rgb(var(--primary))]/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Content & Metrics */}
            <Section>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8">
                        {/* Placeholder for Project Image/Gallery */}
                        <div className="aspect-video bg-[rgb(var(--background-secondary))] rounded-2xl border border-[rgb(var(--border))]/50 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-grid opacity-20" />
                            <span className="text-[rgb(var(--foreground-muted))] font-medium">Project Visual / Screenshot</span>
                        </div>

                        <div className="prose dark:prose-invert max-w-none">
                            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                            <p className="text-[rgb(var(--foreground-muted))] mb-6 leading-relaxed">
                                {project.challenge || "Detailed challenge description coming soon."}
                            </p>

                            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                            <p className="text-[rgb(var(--foreground-muted))] mb-6 leading-relaxed">
                                {project.solution || "Detailed solution description coming soon."}
                            </p>

                            <h2 className="text-2xl font-bold mb-4">Key Outcomes</h2>
                            <ul className="space-y-3 list-none pl-0">
                                {project.outcomes && project.outcomes.map((outcome: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[rgb(var(--primary))] mt-0.5 shrink-0" />
                                        <span>{outcome}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Key Metrics Card */}
                        <div className="p-6 rounded-2xl bg-[rgb(var(--card))] border border-[rgb(var(--border))]/50 sticky top-24">
                            <h3 className="text-lg font-semibold mb-6">Impact at a Glance</h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="text-sm text-[rgb(var(--foreground-muted))] mb-1">Primary Metric</div>
                                    <div className="text-2xl font-bold text-[rgb(var(--primary))]">{project.metrics}</div>
                                </div>
                                <div className="h-px bg-[rgb(var(--border))]/50" />
                                <div>
                                    <div className="text-sm text-[rgb(var(--foreground-muted))] mb-1">Timeline</div>
                                    <div className="text-lg font-medium">3 Months</div>
                                </div>
                                <div className="h-px bg-[rgb(var(--border))]/50" />
                                <div>
                                    <div className="text-sm text-[rgb(var(--foreground-muted))] mb-1">Client Industry</div>
                                    <div className="text-lg font-medium">{project.category}</div>
                                </div>

                                <Button className="w-full mt-4" asChild>
                                    <Link href="/contact">
                                        Start Similar Project
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Next Project (Optional: Logic to find next project) */}
            <Section glow className="mt-auto border-t border-[rgb(var(--border))]/30">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">View More Projects</h2>
                    <Button variant="outline" asChild>
                        <Link href="/portfolio">Back to Portfolio</Link>
                    </Button>
                </div>
            </Section>
        </div>
    );
}
