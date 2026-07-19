import { neon } from "@neondatabase/serverless";

/**
 * Neon Postgres client (HTTP driver — suited to serverless route handlers).
 * Returns null when no database is configured so form routes can degrade
 * gracefully to webhook/email delivery.
 */
export function getDb() {
    const url = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
    if (!url) return null;
    return neon(url);
}

export interface LeadRecord {
    type: "assessment-request" | "contact-message";
    fullName: string;
    email: string;
    phone?: string;
    company?: string;
    website?: string;
    industry?: string;
    companySize?: string;
    tools?: string;
    process?: string;
    hoursPerWeek?: string;
    goal?: string;
    timeline?: string;
    budget?: string;
    contactMethod?: string;
    leadScore?: number;
    message?: string;
    solution?: string;
    deliveredWebhook?: boolean;
}

/** Insert a lead; returns true on success, false when unconfigured or failed. */
export async function insertLead(lead: LeadRecord): Promise<boolean> {
    const sql = getDb();
    if (!sql) return false;
    try {
        await sql`
            INSERT INTO leads (
                type, full_name, email, phone, company, website, industry,
                company_size, tools, process, hours_per_week, goal, timeline,
                budget, contact_method, lead_score, message, solution,
                delivered_webhook
            ) VALUES (
                ${lead.type}, ${lead.fullName}, ${lead.email}, ${lead.phone ?? null},
                ${lead.company ?? null}, ${lead.website ?? null}, ${lead.industry ?? null},
                ${lead.companySize ?? null}, ${lead.tools ?? null}, ${lead.process ?? null},
                ${lead.hoursPerWeek ?? null}, ${lead.goal ?? null}, ${lead.timeline ?? null},
                ${lead.budget ?? null}, ${lead.contactMethod ?? null}, ${lead.leadScore ?? null},
                ${lead.message ?? null}, ${lead.solution ?? null},
                ${lead.deliveredWebhook ?? false}
            )
        `;
        return true;
    } catch (error) {
        console.error("Lead insert failed", error);
        return false;
    }
}
