import { NextResponse } from "next/server";
import { z } from "zod";
import { site } from "@/lib/site";

const assessmentSchema = z.object({
    fullName: z.string().trim().min(2, "Please enter your name").max(200),
    email: z.string().trim().email("Please enter a valid work email").max(320),
    phone: z.string().trim().max(50).optional().or(z.literal("")),
    company: z.string().trim().min(1, "Please enter your company name").max(200),
    website: z.string().trim().max(300).optional().or(z.literal("")),
    industry: z.string().trim().max(100).optional().or(z.literal("")),
    companySize: z.string().trim().min(1, "Please select your company size").max(50),
    tools: z.string().trim().max(1000).optional().or(z.literal("")),
    process: z
        .string()
        .trim()
        .min(10, "Please describe the process you want to improve")
        .max(5000),
    hoursPerWeek: z.string().trim().max(50).optional().or(z.literal("")),
    goal: z.string().trim().max(200).optional().or(z.literal("")),
    timeline: z.string().trim().max(50).optional().or(z.literal("")),
    budget: z.string().trim().max(50).optional().or(z.literal("")),
    contactMethod: z.string().trim().max(50).optional().or(z.literal("")),
    consent: z.literal(true, { message: "Please confirm we may contact you" }),
    // Honeypot: real visitors never fill this hidden field.
    companyFax: z.string().max(0).optional().or(z.literal("")),
});

const sizeScore: Record<string, number> = {
    "1-10": 1,
    "11-50": 2,
    "51-200": 3,
    "201-500": 3,
    "500+": 2,
};
const budgetScore: Record<string, number> = {
    "under-5k": 1,
    "5k-15k": 2,
    "15k-50k": 3,
    "50k+": 3,
    "not-sure": 1,
};
const timelineScore: Record<string, number> = {
    asap: 3,
    "1-3-months": 2,
    "3-6-months": 1,
    exploring: 0,
};

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
    }

    const parsed = assessmentSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { ok: false, error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
            { status: 422 }
        );
    }

    // Honeypot triggered — pretend success, deliver nothing.
    if (parsed.data.companyFax) {
        return NextResponse.json({ ok: true, delivered: true });
    }

    const { companyFax: _honeypot, ...lead } = parsed.data;
    const leadScore =
        (sizeScore[lead.companySize] ?? 1) +
        (budgetScore[lead.budget ?? ""] ?? 0) +
        (timelineScore[lead.timeline ?? ""] ?? 0);

    const payload = {
        source: site.domain,
        type: "assessment-request",
        submittedAt: new Date().toISOString(),
        leadScore,
        ...lead,
    };

    const webhookUrl =
        process.env.ASSESSMENT_WEBHOOK_URL ?? process.env.CONTACT_WEBHOOK_URL;
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
                console.error(`Assessment webhook responded ${response.status}`);
            }
        } catch (error) {
            console.error("Assessment webhook delivery failed", error);
        }
    }

    return NextResponse.json({
        ok: true,
        delivered,
        fallbackEmail: site.emails.primary,
    });
}
