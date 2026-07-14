import { NextResponse } from "next/server";
import { z } from "zod";
import { site } from "@/lib/site";

const contactSchema = z.object({
    name: z.string().trim().min(2, "Please enter your name").max(200),
    email: z.string().trim().email("Please enter a valid email address").max(320),
    company: z.string().trim().max(200).optional().or(z.literal("")),
    solution: z.string().trim().max(100).optional().or(z.literal("")),
    message: z.string().trim().min(10, "Please tell us a little more").max(5000),
});

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { ok: false, error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
            { status: 422 }
        );
    }

    const payload = {
        source: site.domain,
        type: "contact-message",
        submittedAt: new Date().toISOString(),
        ...parsed.data,
    };

    // Forward to the configured inbox webhook; fail gracefully so the
    // visitor always gets a response with an email fallback.
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
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
                console.error(`Contact webhook responded ${response.status}`);
            }
        } catch (error) {
            console.error("Contact webhook delivery failed", error);
        }
    }

    return NextResponse.json({
        ok: true,
        delivered,
        fallbackEmail: site.emails.primary,
    });
}
