import type { Metadata } from "next";
import { getDb } from "@/lib/db";

export const metadata: Metadata = {
    title: "Leads Admin",
    robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

interface LeadRow {
    id: string;
    type: string;
    full_name: string;
    email: string;
    phone: string | null;
    company: string | null;
    industry: string | null;
    company_size: string | null;
    process: string | null;
    message: string | null;
    hours_per_week: string | null;
    goal: string | null;
    timeline: string | null;
    budget: string | null;
    contact_method: string | null;
    lead_score: number | null;
    delivered_webhook: boolean;
    created_at: string;
}

function formatDate(value: string) {
    return new Date(value).toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
    });
}

const cellClass = "px-3 py-2.5 text-sm text-[rgb(var(--foreground-muted))] align-top";
const headClass =
    "px-3 py-2 text-left text-xs font-medium uppercase tracking-wider text-[rgb(var(--foreground-muted))] whitespace-nowrap";

export default async function AdminLeadsPage() {
    const sql = getDb();
    if (!sql) {
        return (
            <div className="pt-32 pb-20 text-center text-[rgb(var(--foreground-muted))]">
                Database is not configured.
            </div>
        );
    }

    const leads = (await sql`
        SELECT id, type, full_name, email, phone, company, industry,
               company_size, process, message, hours_per_week, goal, timeline,
               budget, contact_method, lead_score, delivered_webhook, created_at
        FROM leads
        ORDER BY created_at DESC
        LIMIT 500
    `) as LeadRow[];

    const assessments = leads.filter((l) => l.type === "assessment-request");
    const contacts = leads.filter((l) => l.type === "contact-message");

    return (
        <div className="pt-28 md:pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="font-heading text-3xl font-semibold text-[rgb(var(--foreground))] mb-2">
                    Leads
                </h1>
                <p className="text-sm text-[rgb(var(--foreground-muted))] mb-8">
                    Assessment requests and contact messages, newest first.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: "Total leads", value: leads.length },
                        { label: "Assessment requests", value: assessments.length },
                        { label: "Contact messages", value: contacts.length },
                        {
                            label: "High score (6+)",
                            value: assessments.filter((l) => (l.lead_score ?? 0) >= 6).length,
                        },
                    ].map((stat) => (
                        <div key={stat.label} className="glass-card rounded-xl p-4">
                            <p className="text-2xl font-semibold text-[rgb(var(--foreground))]">
                                {stat.value}
                            </p>
                            <p className="text-xs text-[rgb(var(--foreground-muted))] mt-1">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {leads.length === 0 ? (
                    <div className="glass-card rounded-xl p-10 text-center text-[rgb(var(--foreground-muted))]">
                        No leads yet. Submissions from the assessment and contact forms
                        will appear here.
                    </div>
                ) : (
                    <div className="glass-card rounded-xl overflow-x-auto">
                        <table className="w-full min-w-[1100px] border-collapse">
                            <thead className="border-b border-[rgb(var(--border))]/60">
                                <tr>
                                    <th className={headClass}>Received</th>
                                    <th className={headClass}>Type</th>
                                    <th className={headClass}>Name</th>
                                    <th className={headClass}>Contact</th>
                                    <th className={headClass}>Company</th>
                                    <th className={headClass}>Size</th>
                                    <th className={headClass}>Score</th>
                                    <th className={headClass}>Timeline</th>
                                    <th className={headClass}>Budget</th>
                                    <th className={headClass}>Request</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leads.map((lead) => (
                                    <tr
                                        key={lead.id}
                                        className="border-b border-[rgb(var(--border))]/30 last:border-b-0"
                                    >
                                        <td className={`${cellClass} whitespace-nowrap`}>
                                            {formatDate(lead.created_at)}
                                        </td>
                                        <td className={cellClass}>
                                            <span
                                                className={`inline-block px-2 py-0.5 rounded-full text-xs whitespace-nowrap ${
                                                    lead.type === "assessment-request"
                                                        ? "bg-[rgb(var(--primary))]/15 text-[rgb(var(--primary))]"
                                                        : "bg-[rgb(var(--secondary))]/60 text-[rgb(var(--foreground-muted))]"
                                                }`}
                                            >
                                                {lead.type === "assessment-request"
                                                    ? "Assessment"
                                                    : "Contact"}
                                            </span>
                                        </td>
                                        <td className={`${cellClass} text-[rgb(var(--foreground))]`}>
                                            {lead.full_name}
                                        </td>
                                        <td className={cellClass}>
                                            <a
                                                href={`mailto:${lead.email}`}
                                                className="text-[rgb(var(--primary))] hover:underline"
                                            >
                                                {lead.email}
                                            </a>
                                            {lead.phone && (
                                                <div className="text-xs mt-0.5">{lead.phone}</div>
                                            )}
                                            {lead.contact_method && (
                                                <div className="text-xs mt-0.5">
                                                    Prefers: {lead.contact_method}
                                                </div>
                                            )}
                                        </td>
                                        <td className={cellClass}>
                                            {lead.company ?? "—"}
                                            {lead.industry && (
                                                <div className="text-xs mt-0.5">{lead.industry}</div>
                                            )}
                                        </td>
                                        <td className={`${cellClass} whitespace-nowrap`}>
                                            {lead.company_size ?? "—"}
                                        </td>
                                        <td className={cellClass}>
                                            {lead.lead_score != null ? (
                                                <span
                                                    className={
                                                        lead.lead_score >= 6
                                                            ? "font-semibold text-[rgb(var(--accent-cyan))]"
                                                            : ""
                                                    }
                                                >
                                                    {lead.lead_score}
                                                </span>
                                            ) : (
                                                "—"
                                            )}
                                        </td>
                                        <td className={`${cellClass} whitespace-nowrap`}>
                                            {lead.timeline ?? "—"}
                                        </td>
                                        <td className={`${cellClass} whitespace-nowrap`}>
                                            {lead.budget ?? "—"}
                                        </td>
                                        <td className={`${cellClass} max-w-md`}>
                                            <p className="line-clamp-3">
                                                {lead.process ?? lead.message ?? "—"}
                                            </p>
                                            {lead.hours_per_week && (
                                                <p className="text-xs mt-1">
                                                    ~{lead.hours_per_week} hrs/week
                                                    {lead.goal ? ` · Goal: ${lead.goal}` : ""}
                                                </p>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
