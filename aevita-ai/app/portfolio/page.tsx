"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { usePagination } from "@/components/hooks/use-pagination";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationEllipsis,
    PaginationPrevious,
    PaginationNext,
} from "@/components/ui/pagination";

const categories = ["All", "Automation", "Cloud", "Web"];
const ITEMS_PER_PAGE = 6;

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

    // Reset page when category changes
    if (currentPage > totalPages && totalPages > 0) {
        setCurrentPage(1);
    }

    const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
        currentPage,
        totalPages,
        paginationItemsToDisplay: 5,
    });

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <Section className="pt-32 pb-20" glow>
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        Portfolio
                    </span>
                    <h1 className="text-4xl md:text-6xl font-semibold text-[rgb(var(--foreground))] mb-6">
                        Our work speaks for itself
                    </h1>
                    <p className="text-xl text-[rgb(var(--foreground-muted))]">
                        Explore projects that have helped businesses transform and grow.
                    </p>
                </div>
            </Section>

            {/* Filter */}
            <Section className="py-8 border-b border-[rgb(var(--border))]/30">
                <div className="flex justify-center gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === cat
                                ? "bg-[rgb(var(--primary))] text-white"
                                : "bg-[rgb(var(--secondary))] text-[rgb(var(--foreground-muted))] hover:text-[rgb(var(--foreground))]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </Section>

            {/* Projects Grid */}
            <Section grid>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {currentItems.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/portfolio/${project.slug}`}
                                className="group p-6 rounded-xl bg-[rgb(var(--background-secondary))] border border-[rgb(var(--border))]/50 hover:border-[rgb(var(--primary))]/50 transition-all block h-full"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <span className="text-xs font-medium text-[rgb(var(--primary))] uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    <ArrowUpRight className="w-4 h-4 text-[rgb(var(--foreground-muted))] group-hover:text-[rgb(var(--primary))] transition-colors" />
                                </div>
                                <h3 className="text-lg font-semibold text-[rgb(var(--foreground))] mb-2 group-hover:text-[rgb(var(--primary))] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-[rgb(var(--foreground-muted))] mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="text-sm font-medium text-[rgb(var(--primary))] mb-4">
                                    {project.metrics}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-1 rounded bg-[rgb(var(--secondary))] text-[rgb(var(--foreground-muted))]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center">
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious
                                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                            aria-disabled={currentPage === 1}
                                            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                        />
                                    </PaginationItem>

                                    {showLeftEllipsis && (
                                        <>
                                            <PaginationItem>
                                                <PaginationLink onClick={() => setCurrentPage(1)}>1</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                        </>
                                    )}

                                    {pages.map((page) => (
                                        <PaginationItem key={page}>
                                            <PaginationLink
                                                onClick={() => setCurrentPage(page)}
                                                isActive={currentPage === page}
                                            >
                                                {page}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}

                                    {showRightEllipsis && (
                                        <>
                                            <PaginationItem>
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink onClick={() => setCurrentPage(totalPages)}>
                                                    {totalPages}
                                                </PaginationLink>
                                            </PaginationItem>
                                        </>
                                    )}

                                    <PaginationItem>
                                        <PaginationNext
                                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                            aria-disabled={currentPage === totalPages}
                                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    )}
                </div>
            </Section>

            {/* CTA */}
            <Section glow>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-[rgb(var(--foreground))] mb-6">
                        Ready to start your project?
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] mb-8">
                        Let&apos;s create something amazing together.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">
                            Start a Project
                            <ExternalLink className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </Section>
        </div>
    );
}
