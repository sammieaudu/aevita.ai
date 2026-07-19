"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { site } from "@/lib/site";
import { MobileNav } from "./MobileNav";

const navItems = [
    {
        name: "Solutions",
        href: "/solutions",
        dropdown: [
            { name: "AI Agents & Autonomous Systems", href: "/solutions#ai-agents" },
            { name: "Enterprise Workflow Automation", href: "/solutions#workflow-automation" },
            { name: "Generative AI Applications", href: "/solutions#generative-ai" },
            { name: "RAG & Knowledge Systems", href: "/solutions#rag-knowledge" },
            { name: "Custom AI Platforms", href: "/solutions#custom-platforms" },
            { name: "CRM & ERP Integrations", href: "/solutions#crm-erp" },
            { name: "All Solutions", href: "/solutions" },
        ],
    },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Workflows", href: "/workflows" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-[rgb(var(--background))]/85 backdrop-blur-xl border-b border-[rgb(var(--border))]/50 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.6)]"
                : "bg-transparent border-b border-transparent"
                }`}
        >
            {!isScrolled && (
                <div className="bg-[rgb(var(--primary))]/10 border-b border-[rgb(var(--primary))]/20 backdrop-blur-sm">
                    <Link
                        href="/assessment"
                        className="container mx-auto px-3 md:px-4 h-8 flex items-center justify-center gap-2 text-[11px] md:text-xs text-[rgb(var(--foreground))]"
                    >
                        <span className="truncate">
                            Free AI automation assessment for qualified small and
                            medium-sized businesses
                        </span>
                        <span className="shrink-0 font-medium text-[rgb(var(--primary))] underline underline-offset-2">
                            Apply now
                        </span>
                    </Link>
                </div>
            )}
            <div className="container mx-auto px-3 md:px-4 h-14 md:h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center z-[60] rounded-lg"
                    aria-label={`${site.displayName} — home`}
                >
                    <Logo variant="full" theme="dark" width={30} />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-4 xl:gap-6" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative group h-16 flex items-center"
                            onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className="flex items-center gap-1 text-xs xl:text-sm font-medium text-[rgb(var(--foreground-muted))] hover:text-[rgb(var(--foreground))] transition-colors py-2"
                                onFocus={() => item.dropdown && setActiveDropdown(item.name)}
                            >
                                {item.name}
                                {item.dropdown && (
                                    <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4 transition-transform group-hover:rotate-180" aria-hidden="true" />
                                )}
                            </Link>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {item.dropdown && activeDropdown === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-14 left-0 w-64 xl:w-72 bg-[rgb(var(--background-secondary))]/95 backdrop-blur-xl border border-[rgb(var(--border))]/50 rounded-xl shadow-2xl p-1.5"
                                    >
                                        <div className="flex flex-col gap-0.5">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="flex items-center justify-between px-3 py-2 text-xs xl:text-sm text-[rgb(var(--foreground-muted))] hover:text-[rgb(var(--foreground))] hover:bg-[rgb(var(--primary))]/10 rounded-md transition-all"
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:flex items-center gap-3">
                    <Button size="sm" className="text-xs xl:text-sm h-8 xl:h-9 px-3 xl:px-4" asChild>
                        <Link href={site.cta.primary.href}>{site.cta.primary.label}</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden z-[60] p-1.5 text-[rgb(var(--foreground))] rounded-lg"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-expanded={mobileMenuOpen}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
                </button>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <MobileNav
                            items={navItems}
                            isOpen={mobileMenuOpen}
                            onClose={() => setMobileMenuOpen(false)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
