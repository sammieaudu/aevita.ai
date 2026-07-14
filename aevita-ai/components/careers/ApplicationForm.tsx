"use client";

import { useState } from "react";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jobs } from "@/lib/careers";
import { site } from "@/lib/site";

const inputClasses =
    "w-full px-4 py-3 rounded-lg bg-[rgb(var(--background))] border border-[rgb(var(--border))]/50 text-[rgb(var(--foreground))] placeholder:text-[rgb(var(--foreground-muted))] focus:outline-none focus:border-[rgb(var(--primary))] focus:ring-2 focus:ring-[rgb(var(--primary))]/20 transition-all";

type FieldErrors = Partial<Record<string, string>>;

export function ApplicationForm({ defaultRole }: { defaultRole: string }) {
    const [form, setForm] = useState({
        role: defaultRole,
        name: "",
        email: "",
        location: "",
        linkedin: "",
        resumeUrl: "",
        motivation: "",
        consent: false,
    });
    const [errors, setErrors] = useState<FieldErrors>({});
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [delivered, setDelivered] = useState(true);

    const update = (field: keyof typeof form, value: string | boolean) => {
        setForm((previous) => ({ ...previous, [field]: value }));
        setErrors((previous) => ({ ...previous, [field]: undefined }));
    };

    const validate = (): FieldErrors => {
        const next: FieldErrors = {};
        if (form.name.trim().length < 2) next.name = "Please enter your full name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
            next.email = "Please enter a valid email address.";
        if (form.linkedin.trim() && !/^https?:\/\//.test(form.linkedin.trim()))
            next.linkedin = "Please enter a full URL (starting with https://).";
        if (form.resumeUrl.trim() && !/^https?:\/\//.test(form.resumeUrl.trim()))
            next.resumeUrl = "Please enter a full URL (starting with https://).";
        if (form.motivation.trim().length < 40)
            next.motivation = "Tell us a bit more — at least a few sentences.";
        if (!form.consent) next.consent = "Consent is required so we can process your application.";
        return next;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.values(validationErrors).some(Boolean)) {
            setErrors(validationErrors);
            return;
        }

        setStatus("submitting");
        try {
            const response = await fetch("/api/careers/apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    linkedin: form.linkedin.trim(),
                    resumeUrl: form.resumeUrl.trim(),
                }),
            });
            const data = await response.json().catch(() => null);
            if (!response.ok || !data?.ok) {
                if (data?.issues) {
                    const serverErrors: FieldErrors = {};
                    for (const [field, messages] of Object.entries(data.issues as Record<string, string[]>)) {
                        serverErrors[field] = messages?.[0];
                    }
                    setErrors(serverErrors);
                }
                setStatus("error");
                return;
            }
            setDelivered(Boolean(data.delivered));
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="text-center py-12" role="status">
                <CheckCircle className="w-16 h-16 text-[rgb(var(--primary))] mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-[rgb(var(--foreground))] mb-2">
                    Application received — thank you!
                </h3>
                <p className="text-[rgb(var(--foreground-muted))] max-w-md mx-auto">
                    The {site.name} hiring team will review your application and get back
                    to you by email.
                    {!delivered && (
                        <>
                            {" "}To make sure nothing is missed during our transition, you can
                            also send your resume directly to{" "}
                            <a className="text-[rgb(var(--primary))] hover:underline" href={`mailto:${site.emails.careers}`}>
                                {site.emails.careers}
                            </a>
                            .
                        </>
                    )}
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
                <label htmlFor="application-role" className="block text-sm font-medium text-[rgb(var(--foreground))] mb-2">
                    Role *
                </label>
                <select
                    id="application-role"
                    value={form.role}
                    onChange={(event) => update("role", event.target.value)}
                    className={inputClasses}
                >
                    {jobs.map((job) => (
                        <option key={job.slug} value={job.slug}>
                            {job.title} — {job.location}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="application-name" className="block text-sm font-medium text-[rgb(var(--foreground))] mb-2">
                        Full name *
                    </label>
                    <input
                        id="application-name"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={(event) => update("name", event.target.value)}
                        className={inputClasses}
                        placeholder="Your name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "application-name-error" : undefined}
                    />
                    {errors.name && (
                        <p id="application-name-error" className="mt-1.5 text-xs text-[rgb(var(--destructive))]">
                            {errors.name}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="application-email" className="block text-sm font-medium text-[rgb(var(--foreground))] mb-2">
                        Email *
                    </label>
                    <input
                        id="application-email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={(event) => update("email", event.target.value)}
                        className={inputClasses}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "application-email-error" : undefined}
                    />
                    {errors.email && (
                        <p id="application-email-error" className="mt-1.5 text-xs text-[rgb(var(--destructive))]">
                            {errors.email}
                        </p>
                    )}
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="application-location" className="block text-sm font-medium text-[rgb(var(--foreground))] mb-2">
                        Location / time zone
                    </label>
                    <input
                        id="application-location"
                        type="text"
                        autoComplete="country-name"
                        value={form.location}
                        onChange={(event) => update("location", event.target.value)}
                        className={inputClasses}
                        placeholder="e.g. Lisbon, UTC+1"
                    />
                </div>
                <div>
                    <label htmlFor="application-linkedin" className="block text-sm font-medium text-[rgb(var(--foreground))] mb-2">
                        LinkedIn or portfolio
                    </label>
                    <input
                        id="application-linkedin"
                        type="url"
                        inputMode="url"
                        value={form.linkedin}
                        onChange={(event) => update("linkedin", event.target.value)}
                        className={inputClasses}
                        placeholder="https://linkedin.com/in/…"
                        aria-invalid={Boolean(errors.linkedin)}
                        aria-describedby={errors.linkedin ? "application-linkedin-error" : undefined}
                    />
                    {errors.linkedin && (
                        <p id="application-linkedin-error" className="mt-1.5 text-xs text-[rgb(var(--destructive))]">
                            {errors.linkedin}
                        </p>
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="application-resume" className="block text-sm font-medium text-[rgb(var(--foreground))] mb-2">
                    Resume link
                </label>
                <input
                    id="application-resume"
                    type="url"
                    inputMode="url"
                    value={form.resumeUrl}
                    onChange={(event) => update("resumeUrl", event.target.value)}
                    className={inputClasses}
                    placeholder="A private Google Drive, Dropbox, or personal-site link"
                    aria-invalid={Boolean(errors.resumeUrl)}
                    aria-describedby={errors.resumeUrl ? "application-resume-error" : "application-resume-hint"}
                />
                {errors.resumeUrl ? (
                    <p id="application-resume-error" className="mt-1.5 text-xs text-[rgb(var(--destructive))]">
                        {errors.resumeUrl}
                    </p>
                ) : (
                    <p id="application-resume-hint" className="mt-1.5 text-xs text-[rgb(var(--foreground-muted))]">
                        Prefer email? Send your resume to{" "}
                        <a className="text-[rgb(var(--primary))] hover:underline" href={`mailto:${site.emails.careers}`}>
                            {site.emails.careers}
                        </a>{" "}
                        instead. Links are shared only with the hiring team.
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="application-motivation" className="block text-sm font-medium text-[rgb(var(--foreground))] mb-2">
                    Tell us why you want to join {site.name}. *
                </label>
                <textarea
                    id="application-motivation"
                    required
                    rows={5}
                    value={form.motivation}
                    onChange={(event) => update("motivation", event.target.value)}
                    className={`${inputClasses} resize-none`}
                    placeholder="What draws you to this work, and what would you want to build here?"
                    aria-invalid={Boolean(errors.motivation)}
                    aria-describedby={errors.motivation ? "application-motivation-error" : undefined}
                />
                {errors.motivation && (
                    <p id="application-motivation-error" className="mt-1.5 text-xs text-[rgb(var(--destructive))]">
                        {errors.motivation}
                    </p>
                )}
            </div>

            <div>
                <label className="flex items-start gap-3 text-sm text-[rgb(var(--foreground-muted))]">
                    <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(event) => update("consent", event.target.checked)}
                        className="mt-0.5 h-4 w-4 rounded border-[rgb(var(--border))] accent-[rgb(var(--primary))]"
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby={errors.consent ? "application-consent-error" : undefined}
                    />
                    <span>
                        I consent to {site.legalName.replace(/\.$/, "")} storing and
                        processing the information I&apos;ve provided for the purpose of
                        evaluating my application, in line with the{" "}
                        <a href="/privacy" className="text-[rgb(var(--primary))] hover:underline">
                            privacy policy
                        </a>
                        . *
                    </span>
                </label>
                {errors.consent && (
                    <p id="application-consent-error" className="mt-1.5 text-xs text-[rgb(var(--destructive))]">
                        {errors.consent}
                    </p>
                )}
            </div>

            {status === "error" && (
                <p role="alert" className="text-sm text-[rgb(var(--destructive))]">
                    Something went wrong submitting your application. Please try again,
                    or email us directly at{" "}
                    <a className="underline" href={`mailto:${site.emails.careers}`}>
                        {site.emails.careers}
                    </a>
                    .
                </p>
            )}

            <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
                {status === "submitting" ? (
                    <>
                        Submitting…
                        <Loader2 className="ml-2 w-4 h-4 animate-spin" aria-hidden="true" />
                    </>
                ) : (
                    <>
                        Submit application
                        <Send className="ml-2 w-4 h-4" aria-hidden="true" />
                    </>
                )}
            </Button>
        </form>
    );
}
