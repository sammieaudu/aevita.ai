import { Section } from "@/components/ui/section";

/**
 * Integration ecosystem — the systems Aevita connects (text chips, no
 * third-party logo assets).
 */

const integrationGroups: { category: string; systems: string[] }[] = [
    { category: "CRM & Sales", systems: ["Salesforce", "HubSpot", "Zoho", "GoHighLevel", "Pipedrive"] },
    { category: "Finance & Commerce", systems: ["QuickBooks", "Stripe", "Shopify", "NetSuite"] },
    { category: "Messaging", systems: ["Slack", "Microsoft Teams", "WhatsApp", "Gmail", "Outlook"] },
    { category: "Documents & Scheduling", systems: ["Microsoft 365", "Google Workspace", "Notion", "Calendly", "DocuSign"] },
    { category: "Marketing", systems: ["Mailchimp", "Meta Ads", "Google Ads", "Klaviyo"] },
    { category: "Support & Automation", systems: ["Zendesk", "Intercom", "Zapier", "Make", "n8n"] },
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

                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
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

                <p className="text-center text-sm text-[rgb(var(--foreground-muted))]">
                    Don&apos;t see your tools? We also integrate with ERPs, internal
                    databases, and custom applications.
                </p>
            </div>
        </Section>
    );
}
