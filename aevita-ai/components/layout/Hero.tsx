"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EtheralShadow } from "@/components/ui/etheral-shadow";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { site } from "@/lib/site";

export function Hero() {
    const shouldReduceMotion = useReducedMotion();
    const entrance = (delay: number) =>
        shouldReduceMotion
            ? {}
            : {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay },
              };

    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-20 md:pt-24 pb-12 overflow-hidden">
            {/* Ethereal Shadow animated background — the preserved Getbeta.ai atmosphere */}
            <div className="absolute inset-0 z-0">
                <EtheralShadow
                    color="rgba(94, 92, 230, 0.6)"
                    animation={{ scale: 80, speed: 60 }}
                    noise={{ opacity: 0.4, scale: 1.2 }}
                    sizing="fill"
                    className="absolute inset-0"
                />

                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(var(--background))]/30 to-[rgb(var(--background))]" />

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-grid opacity-15" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-3 md:px-4 z-10 flex flex-col items-center text-center">
                {/* Eyebrow */}
                <motion.div
                    {...entrance(0)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgb(var(--secondary))]/50 border border-[rgb(var(--border))] text-[10px] md:text-xs font-medium text-[rgb(var(--foreground-muted))] mb-5 md:mb-6 backdrop-blur-sm"
                >
                    <Sparkles className="w-3 h-3 text-[rgb(var(--primary))]" aria-hidden="true" />
                    {site.tagline}
                </motion.div>

                {/* Headline */}
                <motion.h1
                    {...entrance(0.05)}
                    className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[rgb(var(--foreground))] max-w-4xl mb-4 md:mb-5 leading-[1.12]"
                >
                    Put <span className="text-gradient">AI to work</span> in your
                    business — every day.
                </motion.h1>

                {/* Supporting copy */}
                <motion.p
                    {...entrance(0.1)}
                    className="text-base md:text-lg text-[rgb(var(--foreground-muted))] max-w-xl md:max-w-2xl mb-6 md:mb-8 leading-relaxed px-2"
                >
                    {site.displayName} designs and implements secure AI-powered
                    workflows that help small and medium-sized businesses automate
                    repetitive work, follow up with customers, improve operations, and
                    grow more efficiently.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    {...entrance(0.15)}
                    className="flex flex-col sm:flex-row items-center gap-3"
                >
                    <Button size="lg" className="text-sm h-10 px-7 md:text-base md:h-11 md:px-9 font-medium" asChild>
                        <Link href={site.cta.primary.href}>
                            {site.cta.primary.label}
                            <ArrowRight className="ml-2 w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="text-sm h-10 px-7 md:text-base md:h-11 md:px-9 font-medium"
                        asChild
                    >
                        <Link href={site.cta.secondary.href}>{site.cta.secondary.label}</Link>
                    </Button>
                </motion.div>

                {/* Trust microcopy */}
                <motion.p
                    {...entrance(0.2)}
                    className="mt-4 text-xs md:text-sm text-[rgb(var(--foreground-muted))]"
                >
                    No pressure. No AI jargon. Leave with practical automation
                    opportunities for your business.
                </motion.p>

                {/* Workflow visualization */}
                <motion.div
                    {...(shouldReduceMotion
                        ? {}
                        : {
                              initial: { opacity: 0, y: 28 },
                              animate: { opacity: 1, y: 0 },
                              transition: { duration: 0.6, delay: 0.3 },
                          })}
                    className="mt-10 md:mt-14 w-full flex justify-center"
                >
                    <HeroVisual />
                </motion.div>
            </div>
        </section>
    );
}
