"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export function CTA() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <Section className="relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(ellipse, rgba(47, 107, 255, 0.16) 0%, rgba(124, 58, 237, 0.10) 45%, transparent 65%)",
                        filter: "blur(80px)",
                    }}
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : {
                                  scale: [1, 1.1, 1],
                                  opacity: [0.5, 0.7, 0.5],
                              }
                    }
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(var(--secondary))]/50 border border-[rgb(var(--border))] text-sm">
                        <Sparkles className="w-4 h-4 text-[rgb(var(--primary))]" aria-hidden="true" />
                        <span className="text-[rgb(var(--foreground-muted))]">
                            Free 30-minute strategy session
                        </span>
                    </div>

                    <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[rgb(var(--foreground))]">
                        Ready to make your operation{" "}
                        <span className="text-gradient">intelligent</span>?
                    </h2>

                    <p className="text-lg text-[rgb(var(--foreground-muted))] max-w-xl mx-auto">
                        Bring your highest-friction process. We&apos;ll map the systems
                        involved and propose the first automation worth building.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button size="lg" asChild>
                            <Link
                                href={site.cta.primary.href}
                                data-cal-link={site.scheduling.calLink}
                                data-cal-config='{"layout":"month_view"}'
                            >
                                {site.cta.primary.label}
                                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href={site.cta.secondary.href}>
                                {site.cta.secondary.label}
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
