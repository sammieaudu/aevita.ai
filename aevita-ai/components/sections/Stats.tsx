"use client";

import { motion, useMotionValue, useTransform, animate, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Section } from "@/components/ui/section";

interface StatProps {
    value: number;
    prefix?: string;
    suffix: string;
    label: string;
    duration?: number;
}

function AnimatedStat({ value, prefix = "", suffix, label, duration = 2 }: StatProps) {
    const shouldReduceMotion = useReducedMotion();
    const count = useMotionValue(shouldReduceMotion ? value : 0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (shouldReduceMotion) {
            count.set(value);
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animate(count, value, { duration });
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [count, value, duration, shouldReduceMotion]);

    return (
        <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--primary))]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
            <div className="relative text-center p-8 rounded-3xl bg-[rgb(var(--background-secondary))]/30 border border-[rgb(var(--border))]/50 backdrop-blur-md overflow-hidden hover:border-[rgb(var(--primary))]/30 transition-all duration-300 group-hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[rgb(var(--primary))]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-4xl md:text-5xl font-bold text-[rgb(var(--foreground))] mb-3 tracking-tighter flex items-center justify-center gap-1">
                        {prefix && (
                            <span className="text-[rgb(var(--primary))] text-3xl md:text-4xl">{prefix}</span>
                        )}
                        <motion.span ref={ref} className="bg-clip-text text-transparent bg-gradient-to-b from-[rgb(var(--foreground))] to-[rgb(var(--foreground))]/70">
                            {rounded}
                        </motion.span>
                        <span className="text-[rgb(var(--primary))] text-3xl md:text-4xl">{suffix}</span>
                    </div>
                    <div className="text-sm font-medium text-[rgb(var(--foreground-muted))] uppercase tracking-widest">
                        {label}
                    </div>
                </div>
            </div>
        </div>
    );
}

const outcomes = [
    { value: 40, prefix: "−", suffix: "%", label: "Manual work" },
    { value: 4, suffix: "x", label: "Faster cycle times" },
    { value: 99, suffix: ".9%", label: "Automation uptime" },
    { value: 100, suffix: "%", label: "Auditable actions" },
];

export function Stats() {
    return (
        <Section glow className="relative overflow-hidden" id="outcomes">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[rgb(var(--primary))]/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-[rgb(var(--primary))] text-sm font-medium uppercase tracking-wider mb-4 block">
                        Business outcomes
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[rgb(var(--foreground))]">
                        The targets we <span className="text-gradient">engineer toward</span>
                    </h2>
                    <p className="text-[rgb(var(--foreground-muted))] mt-4 max-w-2xl mx-auto">
                        Every engagement starts by agreeing on measurable goals like these —
                        then building until the numbers hold in production.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {outcomes.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <AnimatedStat
                                value={stat.value}
                                prefix={stat.prefix}
                                suffix={stat.suffix}
                                label={stat.label}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
