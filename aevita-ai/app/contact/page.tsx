"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
    Send,
    Mail,
    MapPin,
    CheckCircle,
    Calendar,
    MessageSquare,
    Sparkles,
} from "lucide-react";
import { LocationMap } from "@/components/ui/expand-map";
import { FaqsSection } from "@/components/ui/faqs-section";
import { CalInline } from "@/components/CalInline";
import { site } from "@/lib/site";

const solutionOptions = [
    { value: "", label: "Select a solution area" },
    { value: "ai-agents", label: "AI Agents & Autonomous Systems" },
    { value: "workflow-automation", label: "Enterprise Workflow Automation" },
    { value: "generative-ai", label: "Generative AI Applications" },
    { value: "rag-knowledge", label: "RAG & Knowledge Systems" },
    { value: "crm-erp", label: "CRM & ERP Integrations" },
    { value: "marketing-automation", label: "AI-Powered Marketing Automation" },
    { value: "document-intelligence", label: "Document Intelligence" },
    { value: "customer-experience", label: "AI Customer Experience" },
    { value: "custom-platforms", label: "Custom AI Platforms" },
    { value: "digital-transformation", label: "Digital Transformation" },
    { value: "other", label: "Something else" },
];

const inputClasses =
    "w-full px-4 py-3 rounded-lg bg-[rgb(var(--background))] border border-[rgb(var(--border))]/50 text-[rgb(var(--foreground))] placeholder:text-[rgb(var(--foreground-muted))] focus:outline-none focus:border-[rgb(var(--primary))] focus:ring-2 focus:ring-[rgb(var(--primary))]/20 transition-all";

export default function ContactPage() {
    const shouldReduceMotion = useReducedMotion();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        solution: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [delivered, setDelivered] = useState(true);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json().catch(() => null);
            if (!response.ok || !data?.ok) {
                setStatus("error");
                return;
            }
            setDelivered(Boolean(data.delivered));
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section with booking */}
            <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[rgb(var(--background))]" />
                    <motion.div
                        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full"
                        style={{
                            background:
                                "radial-gradient(ellipse, rgba(47, 107, 255, 0.16) 0%, rgba(124, 58, 237, 0.10) 50%, transparent 70%)",
                            filter: "blur(80px)",
                        }}
                        animate={
                            shouldReduceMotion
                                ? undefined
                                : { scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }
                        }
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <motion.div
                            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(var(--secondary))]/50 border border-[rgb(var(--border))] text-sm mb-6"
                        >
                            <Calendar className="w-4 h-4 text-[rgb(var(--primary))]" aria-hidden="true" />
                            <span className="text-[rgb(var(--foreground-muted))]">
                                Free AI automation assessment call
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-heading text-4xl md:text-6xl font-semibold text-[rgb(var(--foreground))] mb-6 leading-tight"
                        >
                            Talk to an{" "}
                            <span className="text-gradient">AI automation expert</span>
                        </motion.h1>

                        <motion.p
                            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-[rgb(var(--foreground-muted))] max-w-2xl mx-auto mb-8"
                        >
                            Bring your highest-friction process. We&apos;ll map the
                            systems involved, identify where automation pays off first,
                            and leave you with practical next steps — no pressure, no
                            jargon.
                        </motion.p>
                    </div>

                    {/* Live booking calendar */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="max-w-4xl mx-auto"
                    >
                        <CalInline />
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <Section className="border-t border-[rgb(var(--border))]/30">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Form */}
                        <div className="lg:col-span-3">
                            <motion.div
                                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-[rgb(var(--background-secondary))] border border-[rgb(var(--border))]/50"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <MessageSquare className="w-6 h-6 text-[rgb(var(--primary))]" aria-hidden="true" />
                                    <h2 className="text-2xl font-semibold text-[rgb(var(--foreground))]">
                                        Send a Message
                                    </h2>
                                </div>

                                {status === "success" ? (
                                    <motion.div
                                        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                        role="status"
                                    >
                                        <CheckCircle className="w-16 h-16 text-[rgb(var(--primary))] mx-auto mb-4" aria-hidden="true" />
                                        <h3 className="text-xl font-semibold text-[rgb(var(--foreground))] mb-2">
                                            Message sent!
                                        </h3>
                                        <p className="text-[rgb(var(--foreground-muted))]">
                                            We&apos;ll get back to you within 24 hours.
                                            {!delivered && (
                                                <>
                                                    {" "}You can also reach us directly at{" "}
                                                    <a className="text-[rgb(var(--primary))] hover:underline" href={`mailto:${site.emails.primary}`}>
                                                        {site.emails.primary}
                                                    </a>
                                                    .
                                                </>
                                            )}
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label htmlFor="contact-name" className="block text-sm font-medium text-[rgb(var(--foreground))] mb-2">
                                                    Name *
                                                </label>
                                                <input
                                                    id="contact-name"
                                                    type="text"
                                                    autoComplete="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, name: e.target.value })
                                                    }
                                                    className={inputClasses}
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="contact-email" className="block text-sm font-medium text-[rgb(var(--foreground))] mb-2">
                                                    Email *
                                                </label>
                                                <input
                                                    id="contact-email"
                                                    type="email"
                                                    autoComplete="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, email: e.target.value })
                                                    }
                                                    className={inputClasses}
                                                    placeholder="you@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label htmlFor="contact-company" className="block text-sm font-medium text-[rgb(var(--foreground))] mb-2">
                                                    Company
                                                </label>
                                                <input
                                                    id="contact-company"
                                                    type="text"
                                                    autoComplete="organization"
                                                    value={formData.company}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, company: e.target.value })
                                                    }
                                                    className={inputClasses}
                                                    placeholder="Your company"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="contact-solution" className="block text-sm font-medium text-[rgb(var(--foreground))] mb-2">
                                                    What are you exploring?
                                                </label>
                                                <select
                                                    id="contact-solution"
                                                    value={formData.solution}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, solution: e.target.value })
                                                    }
                                                    className={inputClasses}
                                                >
                                                    {solutionOptions.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="contact-message" className="block text-sm font-medium text-[rgb(var(--foreground))] mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="contact-message"
                                                required
                                                rows={4}
                                                minLength={10}
                                                value={formData.message}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, message: e.target.value })
                                                }
                                                className={`${inputClasses} resize-none`}
                                                placeholder="Tell us about the process or system you want to improve…"
                                            />
                                        </div>

                                        {status === "error" && (
                                            <p role="alert" className="text-sm text-[rgb(var(--destructive))]">
                                                Something went wrong sending your message. Please try
                                                again, or email us at{" "}
                                                <a className="underline" href={`mailto:${site.emails.primary}`}>
                                                    {site.emails.primary}
                                                </a>
                                                .
                                            </p>
                                        )}

                                        <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
                                            {status === "submitting" ? "Sending…" : "Send Message"}
                                            <Send className="ml-2 w-4 h-4" aria-hidden="true" />
                                        </Button>
                                    </form>
                                )}
                            </motion.div>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <motion.div
                                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-semibold text-[rgb(var(--foreground))] mb-6">
                                    Get in touch
                                </h2>
                                <p className="text-[rgb(var(--foreground-muted))] mb-8">
                                    Questions about AI agents, automation, or an ongoing
                                    engagement — we&apos;re here.
                                </p>
                            </motion.div>

                            <div className="space-y-4">
                                {[
                                    {
                                        icon: Mail,
                                        label: "Email",
                                        value: site.emails.primary,
                                        href: `mailto:${site.emails.primary}`,
                                    },
                                    {
                                        icon: MapPin,
                                        label: "Office",
                                        value: site.contact.office,
                                    },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-[rgb(var(--background-secondary))] border border-[rgb(var(--border))]/50"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-[rgb(var(--primary))]/10 flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-[rgb(var(--primary))]" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-[rgb(var(--foreground-muted))]">
                                                {item.label}
                                            </div>
                                            {item.href ? (
                                                <a href={item.href} className="text-[rgb(var(--foreground))] font-medium hover:text-[rgb(var(--primary))] transition-colors">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <div className="text-[rgb(var(--foreground))] font-medium">
                                                    {item.value}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Location Map */}
                            <motion.div
                                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="pt-4"
                            >
                                <LocationMap
                                    location={site.contact.office}
                                    address={site.contact.address}
                                    coordinates={site.contact.coordinates}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* FAQ Section */}
            <Section>
                <FaqsSection className="py-8" />
            </Section>

            {/* Secondary CTA */}
            <Section glow>
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(var(--secondary))]/50 border border-[rgb(var(--border))] text-sm">
                            <Sparkles className="w-4 h-4 text-[rgb(var(--primary))]" aria-hidden="true" />
                            <span className="text-[rgb(var(--foreground-muted))]">
                                Still have questions?
                            </span>
                        </div>
                        <h2 className="text-3xl font-semibold text-[rgb(var(--foreground))]">
                            Ready to make your operation intelligent?
                        </h2>
                        <p className="text-[rgb(var(--foreground-muted))]">
                            Book a call or send us a message. We respond within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button
                                size="lg"
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            >
                                <Calendar className="mr-2 w-4 h-4" aria-hidden="true" />
                                {site.cta.primary.label}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
}
