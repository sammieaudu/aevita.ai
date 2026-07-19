"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const inputClass =
    "w-full px-4 py-2.5 rounded-lg bg-[rgb(var(--background-secondary))]/80 border border-[rgb(var(--border))]/60 text-sm text-[rgb(var(--foreground))] placeholder:text-[rgb(var(--foreground-muted))]/60 focus:outline-none focus:border-[rgb(var(--primary))]/60 focus:ring-1 focus:ring-[rgb(var(--primary))]/40 transition-colors";
const labelClass =
    "block text-sm font-medium text-[rgb(var(--foreground))] mb-1.5";

type Status = "idle" | "submitting" | "success" | "error";

export function AssessmentForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());
        const payload = { ...data, consent: data.consent === "on" };

        setStatus("submitting");
        setErrorMessage(null);
        setFieldErrors({});

        try {
            const response = await fetch("/api/assessment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const result = await response.json();

            if (!response.ok || !result.ok) {
                setFieldErrors(result.issues ?? {});
                setErrorMessage(
                    result.issues
                        ? "Please review the highlighted fields."
                        : `Something went wrong. You can also email us at ${site.emails.primary}.`
                );
                setStatus("error");
                return;
            }
            setStatus("success");
            form.reset();
        } catch {
            setErrorMessage(
                `We couldn't submit the form. Please try again or email ${site.emails.primary}.`
            );
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="glass-card rounded-2xl p-8 md:p-10 text-center" role="status">
                <CheckCircle2 className="w-10 h-10 text-[rgb(var(--accent-cyan))] mx-auto mb-4" aria-hidden="true" />
                <h3 className="font-heading text-2xl font-semibold text-[rgb(var(--foreground))] mb-3">
                    Request received — thank you
                </h3>
                <p className="text-[rgb(var(--foreground-muted))] mb-6 max-w-md mx-auto">
                    Our team will review your workflows and reach out within one
                    business day. Want to skip the wait? Book your assessment call
                    directly.
                </p>
                <Button size="lg" asChild>
                    <Link href="/book">
                        Book a time now
                        <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </Link>
                </Button>
            </div>
        );
    }

    const fieldError = (name: string) =>
        fieldErrors[name]?.[0] ? (
            <p className="text-xs text-red-400 mt-1" role="alert">
                {fieldErrors[name][0]}
            </p>
        ) : null;

    return (
        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-5" noValidate>
            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="fullName" className={labelClass}>Full name *</label>
                    <input id="fullName" name="fullName" autoComplete="name" required className={inputClass} placeholder="Jordan Smith" />
                    {fieldError("fullName")}
                </div>
                <div>
                    <label htmlFor="email" className={labelClass}>Work email *</label>
                    <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} placeholder="you@company.com" />
                    {fieldError("email")}
                </div>
                <div>
                    <label htmlFor="phone" className={labelClass}>Phone number</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                    <label htmlFor="company" className={labelClass}>Company name *</label>
                    <input id="company" name="company" autoComplete="organization" required className={inputClass} placeholder="Acme Services" />
                    {fieldError("company")}
                </div>
                <div>
                    <label htmlFor="website" className={labelClass}>Company website</label>
                    <input id="website" name="website" type="url" autoComplete="url" className={inputClass} placeholder="https://" />
                </div>
                <div>
                    <label htmlFor="industry" className={labelClass}>Industry</label>
                    <select id="industry" name="industry" className={inputClass} defaultValue="">
                        <option value="" disabled>Select an industry</option>
                        <option>Professional services</option>
                        <option>Home care & healthcare services</option>
                        <option>Real estate</option>
                        <option>Logistics & transportation</option>
                        <option>Retail & e-commerce</option>
                        <option>Financial services</option>
                        <option>Property management</option>
                        <option>Construction & field services</option>
                        <option>Recruiting & staffing</option>
                        <option>Local services</option>
                        <option>Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="companySize" className={labelClass}>Company size *</label>
                    <select id="companySize" name="companySize" required className={inputClass} defaultValue="">
                        <option value="" disabled>Number of employees</option>
                        <option value="1-10">1–10</option>
                        <option value="11-50">11–50</option>
                        <option value="51-200">51–200</option>
                        <option value="201-500">201–500</option>
                        <option value="500+">500+</option>
                    </select>
                    {fieldError("companySize")}
                </div>
                <div>
                    <label htmlFor="hoursPerWeek" className={labelClass}>Hours spent weekly on this process</label>
                    <select id="hoursPerWeek" name="hoursPerWeek" className={inputClass} defaultValue="">
                        <option value="" disabled>Estimate</option>
                        <option value="under-5">Under 5 hours</option>
                        <option value="5-15">5–15 hours</option>
                        <option value="15-40">15–40 hours</option>
                        <option value="40+">40+ hours</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="tools" className={labelClass}>Current software tools</label>
                <input id="tools" name="tools" className={inputClass} placeholder="e.g. HubSpot, QuickBooks, Google Workspace, Slack" />
            </div>

            <div>
                <label htmlFor="process" className={labelClass}>What business process do you want to improve? *</label>
                <textarea
                    id="process"
                    name="process"
                    required
                    rows={4}
                    className={inputClass}
                    placeholder="e.g. New leads come in from our website and phone, but follow-up is manual and slow…"
                />
                {fieldError("process")}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="goal" className={labelClass}>Primary business goal</label>
                    <select id="goal" name="goal" className={inputClass} defaultValue="">
                        <option value="" disabled>Select a goal</option>
                        <option>Respond to leads and customers faster</option>
                        <option>Reduce time spent on admin work</option>
                        <option>Improve customer service</option>
                        <option>Grow without adding headcount</option>
                        <option>Better visibility into operations</option>
                        <option>Reduce operating costs</option>
                        <option>Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="timeline" className={labelClass}>Target timeline</label>
                    <select id="timeline" name="timeline" className={inputClass} defaultValue="">
                        <option value="" disabled>When do you want to start?</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-3-months">1–3 months</option>
                        <option value="3-6-months">3–6 months</option>
                        <option value="exploring">Just exploring</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="budget" className={labelClass}>Approximate project budget</label>
                    <select id="budget" name="budget" className={inputClass} defaultValue="">
                        <option value="" disabled>Select a range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000–$15,000</option>
                        <option value="15k-50k">$15,000–$50,000</option>
                        <option value="50k+">$50,000+</option>
                        <option value="not-sure">Not sure yet</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="contactMethod" className={labelClass}>Preferred contact method</label>
                    <select id="contactMethod" name="contactMethod" className={inputClass} defaultValue="">
                        <option value="" disabled>How should we reach you?</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="video-call">Video call</option>
                    </select>
                </div>
            </div>

            {/* Honeypot — hidden from real visitors */}
            <div className="hidden" aria-hidden="true">
                <label htmlFor="companyFax">Company fax</label>
                <input id="companyFax" name="companyFax" tabIndex={-1} autoComplete="off" />
            </div>

            <label className="flex items-start gap-3 text-sm text-[rgb(var(--foreground-muted))]">
                <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-0.5 w-4 h-4 rounded border-[rgb(var(--border))] accent-[rgb(var(--primary))]"
                />
                <span>
                    I agree that {site.name} may contact me about my request. We never
                    share your details, and you can opt out at any time. See our{" "}
                    <Link href="/privacy" className="text-[rgb(var(--primary))] hover:underline">
                        privacy policy
                    </Link>
                    .
                </span>
            </label>
            {fieldError("consent")}

            {errorMessage && (
                <p className="text-sm text-red-400" role="alert">
                    {errorMessage}
                </p>
            )}

            <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
                {status === "submitting" ? (
                    <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" aria-hidden="true" />
                        Submitting…
                    </>
                ) : (
                    <>
                        Request my free assessment
                        <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </>
                )}
            </Button>
        </form>
    );
}
