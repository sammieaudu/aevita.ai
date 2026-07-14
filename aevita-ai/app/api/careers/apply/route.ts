import { NextResponse } from "next/server";
import { z } from "zod";
import { jobs } from "@/lib/careers";
import { site } from "@/lib/site";

const applicationSchema = z.object({
    role: z.string().refine((slug) => jobs.some((job) => job.slug === slug), {
        message: "Unknown role",
    }),
    name: z.string().trim().min(2, "Please enter your full name").max(200),
    email: z.string().trim().email("Please enter a valid email address").max(320),
    location: z.string().trim().max(200).optional().or(z.literal("")),
    linkedin: z.string().trim().url("Please enter a valid URL").max(500).optional().or(z.literal("")),
    resumeUrl: z.string().trim().url("Please enter a valid link to your resume").max(500).optional().or(z.literal("")),
    motivation: z
        .string()
        .trim()
        .min(40, "Tell us a bit more — at least a few sentences.")
        .max(5000),
    consent: z.literal(true, {
        message: "Consent is required to process your application",
    }),
});

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
    }

    const parsed = applicationSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { ok: false, error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
            { status: 422 }
        );
    }

    const job = jobs.find((candidate) => candidate.slug === parsed.data.role);
    const payload = {
        source: site.domain,
        type: "career-application",
        submittedAt: new Date().toISOString(),
        role: { slug: job?.slug, title: job?.title },
        applicant: {
            name: parsed.data.name,
            email: parsed.data.email,
            location: parsed.data.location || null,
            linkedin: parsed.data.linkedin || null,
            resumeUrl: parsed.data.resumeUrl || null,
        },
        motivation: parsed.data.motivation,
    };

    // Forward to the hiring webhook when configured; the applicant still gets
    // a success response with an email fallback if delivery is impossible.
    const webhookUrl = process.env.CAREERS_WEBHOOK_URL;
    let delivered = false;
    if (webhookUrl) {
        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
                signal: AbortSignal.timeout(8000),
            });
            delivered = response.ok;
            if (!response.ok) {
                console.error(`Careers webhook responded ${response.status}`);
            }
        } catch (error) {
            console.error("Careers webhook delivery failed", error);
        }
    }

    return NextResponse.json({
        ok: true,
        delivered,
        fallbackEmail: site.emails.careers,
    });
}
