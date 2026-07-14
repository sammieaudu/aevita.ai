import { Section } from "@/components/ui/section";
import { LogoCloud } from "@/components/ui/logo-cloud";

/**
 * Integration ecosystem — the systems Aevita connects (text chips, no
 * third-party logo assets) plus the engineering stack we build on.
 */

const integrationGroups: { category: string; systems: string[] }[] = [
    { category: "CRM & Sales", systems: ["Salesforce", "HubSpot", "Pipedrive"] },
    { category: "ERP & Finance", systems: ["SAP", "NetSuite", "QuickBooks", "Stripe"] },
    { category: "Messaging", systems: ["Slack", "Microsoft Teams", "Gmail", "Outlook"] },
    { category: "Documents & Knowledge", systems: ["SharePoint", "Google Drive", "Notion", "Confluence", "DocuSign"] },
    { category: "Data & AI", systems: ["Postgres", "Snowflake", "Redis", "OpenAI", "Anthropic"] },
    { category: "Support & Ops", systems: ["Zendesk", "Intercom", "Jira", "n8n"] },
];

export function IntegrationEcosystem() {
    return (
        <Section id="integrations" className="py-14 md:py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="font-heading text-lg md:text-xl font-medium text-[rgb(var(--foreground-muted))] tracking-tight">
                        One intelligent layer across the systems{" "}
                        <span className="font-semibold text-[rgb(var(--primary))]">
                            your business already runs on
                        </span>
                    </h2>
                </div>

                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
                    {integrationGroups.map((group) => (
                        <li
                            key={group.category}
                            className="rounded-xl bg-[rgb(var(--background-secondary))]/60 border border-[rgb(var(--border))]/50 p-4"
                        >
                            <p className="text-[11px] font-medium uppercase tracking-wider text-[rgb(var(--foreground-muted))] mb-2.5">
                                {group.category}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {group.systems.map((system) => (
                                    <span
                                        key={system}
                                        className="px-2.5 py-1 rounded-full text-xs text-[rgb(var(--foreground))] bg-[rgb(var(--secondary))]/70 border border-[rgb(var(--border))]/60"
                                    >
                                        {system}
                                    </span>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>

                <p className="mb-6 text-center text-sm text-[rgb(var(--foreground-muted))]">
                    Engineered on a modern, battle-tested stack
                </p>
                <LogoCloud />
            </div>
        </Section>
    );
}
