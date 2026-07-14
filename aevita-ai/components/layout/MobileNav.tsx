"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

interface SubPage {
    name: string;
    href: string;
}

interface DropdownItem {
    name: string;
    href: string;
    subpages?: SubPage[];
}

interface NavItem {
    name: string;
    href: string;
    isDropdownOnly?: boolean;
    dropdown?: DropdownItem[];
}

interface MobileNavProps {
    items: NavItem[];
    isOpen: boolean;
    onClose: () => void;
}

export function MobileNav({ items, onClose }: MobileNavProps) {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);
    const [expandedSubItem, setExpandedSubItem] = useState<string | null>(null);

    const toggleExpand = (name: string) => {
        setExpandedItem(expandedItem === name ? null : name);
        setExpandedSubItem(null);
    };

    const toggleSubExpand = (name: string) => {
        setExpandedSubItem(expandedSubItem === name ? null : name);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 z-50 bg-[rgb(var(--background))] pt-14 px-4 h-[100dvh] overflow-y-auto lg:hidden"
        >
            <div className="flex flex-col gap-3 py-4">
                {items.map((item) => (
                    <div
                        key={item.name}
                        className="border-b border-[rgb(var(--border))]/30 pb-3 last:border-0"
                    >
                        <div
                            className="flex items-center justify-between cursor-pointer py-1"
                            onClick={() => {
                                if (item.dropdown) {
                                    toggleExpand(item.name);
                                } else {
                                    onClose();
                                }
                            }}
                        >
                            {item.isDropdownOnly ? (
                                <span className="text-base font-medium text-[rgb(var(--foreground))] hover:text-[rgb(var(--primary))] transition-colors">
                                    {item.name}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-base font-medium text-[rgb(var(--foreground))] hover:text-[rgb(var(--primary))] transition-colors"
                                    onClick={(e) => {
                                        if (item.dropdown) e.preventDefault();
                                        else onClose();
                                    }}
                                >
                                    {item.name}
                                </Link>
                            )}
                            {item.dropdown && (
                                <ChevronDown
                                    className={`w-4 h-4 text-[rgb(var(--foreground-muted))] transition-transform ${expandedItem === item.name ? "rotate-180" : ""
                                        }`}
                                />
                            )}
                        </div>

                        {/* First level dropdown */}
                        <AnimatePresence>
                            {item.dropdown && expandedItem === item.name && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="mt-2 pl-3 flex flex-col gap-1 border-l border-[rgb(var(--border))]/40">
                                        {item.dropdown.map((subItem) => (
                                            <div key={subItem.name}>
                                                <div
                                                    className="flex items-center justify-between py-1.5"
                                                    onClick={(e) => {
                                                        if (subItem.subpages) {
                                                            e.stopPropagation();
                                                            toggleSubExpand(subItem.name);
                                                        }
                                                    }}
                                                >
                                                    {subItem.subpages ? (
                                                        <span className="text-sm text-[rgb(var(--foreground-muted))] hover:text-[rgb(var(--foreground))] transition-colors cursor-pointer">
                                                            {subItem.name}
                                                        </span>
                                                    ) : (
                                                        <Link
                                                            href={subItem.href}
                                                            className="text-sm text-[rgb(var(--foreground-muted))] hover:text-[rgb(var(--foreground))] transition-colors"
                                                            onClick={onClose}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    )}
                                                    {subItem.subpages && (
                                                        <ChevronRight
                                                            className={`w-3 h-3 text-[rgb(var(--foreground-muted))] transition-transform cursor-pointer ${expandedSubItem === subItem.name ? "rotate-90" : ""
                                                                }`}
                                                        />
                                                    )}
                                                </div>

                                                {/* Second level dropdown (sub-subpages) */}
                                                <AnimatePresence>
                                                    {subItem.subpages && expandedSubItem === subItem.name && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pl-3 flex flex-col gap-1 border-l border-[rgb(var(--primary))]/30 ml-1">
                                                                {/* Main service link */}
                                                                <Link
                                                                    href={subItem.href}
                                                                    className="text-xs text-[rgb(var(--primary))] hover:text-[rgb(var(--foreground))] transition-colors py-1"
                                                                    onClick={onClose}
                                                                >
                                                                    Overview
                                                                </Link>
                                                                {subItem.subpages.map((page) => (
                                                                    <Link
                                                                        key={page.name}
                                                                        href={page.href}
                                                                        className="text-xs text-[rgb(var(--foreground-muted))] hover:text-[rgb(var(--foreground))] transition-colors py-1"
                                                                        onClick={onClose}
                                                                    >
                                                                        {page.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}

                <div className="mt-4 flex flex-col gap-3">
                    <Button asChild className="w-full text-sm h-10" onClick={onClose}>
                        <Link href={site.cta.primary.href}>{site.cta.primary.label}</Link>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
