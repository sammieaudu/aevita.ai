/**
 * Aevita.ai — open roles.
 *
 * Static job data consumed by /careers, /careers/[slug], the application
 * form, and the careers API route. Keep slugs stable — they are used in
 * URLs and application payloads.
 */

export type Job = {
    slug: string;
    title: string;
    department: "Engineering";
    location: string;
    employmentType: string;
    datePosted: string;
    summary: string;
    aboutRole: string;
    responsibilities: string[];
    requirements: string[];
    niceToHave: string[];
};

export const jobs: Job[] = [
    {
        slug: "senior-ai-engineer",
        title: "Senior AI Engineer",
        department: "Engineering",
        location: "Remote — Global",
        employmentType: "Full-time",
        datePosted: "2026-07-01",
        summary:
            "Design and ship production LLM systems — AI agents, RAG pipelines, and generative applications — for enterprise clients, owning quality from architecture through evals and guardrails.",
        aboutRole:
            "As a Senior AI Engineer at Aevita, you will lead the design and delivery of AI systems that clients run their businesses on. You will architect agentic workflows and retrieval pipelines, choose the right models and orchestration patterns for each problem, and build the evaluation and guardrail layers that make those systems safe to put in front of customers. You will work directly with client stakeholders, translate ambiguous business processes into reliable AI-powered software, and set the technical bar for the engineers around you.",
        responsibilities: [
            "Architect and build AI agents and LLM applications end to end, from prompt and tool design through deployment and monitoring.",
            "Design retrieval-augmented generation (RAG) systems: chunking and embedding strategies, hybrid search, re-ranking, and citation-grounded answers over client knowledge bases.",
            "Build evaluation harnesses — golden datasets, LLM-as-judge scoring, and regression suites — so model and prompt changes ship with measurable confidence.",
            "Implement guardrails for production systems: input validation, output schema enforcement, PII handling, and fallback behavior when models fail.",
            "Integrate AI systems with client CRMs, ERPs, and internal APIs so agents can take real actions, not just generate text.",
            "Lead technical discovery with client teams, scope engagements realistically, and communicate trade-offs to non-technical stakeholders.",
            "Mentor other engineers through design reviews, pairing, and clear written technical decisions.",
        ],
        requirements: [
            "5+ years of professional software engineering experience, including 2+ years building LLM-based products or features that reached production.",
            "Strong TypeScript or Python skills and fluency with modern LLM APIs, function/tool calling, and structured outputs.",
            "Hands-on experience designing RAG systems, including vector stores, embedding models, and retrieval quality tuning.",
            "Experience writing evals and using them to drive model, prompt, or architecture decisions.",
            "Solid grounding in API design, data modeling, and integrating third-party systems (CRM, ERP, or similar).",
            "Clear written and spoken English and comfort working directly with clients in a remote, async-first team.",
        ],
        niceToHave: [
            "Experience with orchestration frameworks such as Temporal, LangGraph, or durable workflow engines.",
            "Experience fine-tuning or distilling models, or operating open-weight models in production.",
            "Background in a consultancy or agency environment with multiple concurrent client engagements.",
            "Contributions to open-source AI tooling or public technical writing.",
        ],
    },
    {
        slug: "automation-engineer",
        title: "Automation Engineer",
        department: "Engineering",
        location: "Remote — Global",
        employmentType: "Full-time",
        datePosted: "2026-07-01",
        summary:
            "Build the autonomous workflows and enterprise integrations that connect our clients' tools — CRMs, ERPs, and internal systems — into reliable, observable automation platforms.",
        aboutRole:
            "As an Automation Engineer at Aevita, you will turn manual, error-prone business processes into dependable automated workflows. You will design orchestrations in tools like n8n, Make, and Temporal-style workflow engines, wire them into client CRMs, ERPs, and data platforms, and add the AI steps — classification, extraction, drafting — that make those workflows genuinely intelligent. Reliability is the core of this role: you will own idempotency, retries, alerting, and the operational runbooks that keep client automations running long after launch.",
        responsibilities: [
            "Design, build, and maintain automated workflows in n8n, Make, and code-first orchestration engines, selecting the right tool for each client's constraints.",
            "Integrate CRMs, ERPs, billing systems, and internal APIs via REST, webhooks, and native connectors, handling authentication, rate limits, and pagination correctly.",
            "Embed LLM steps into workflows — document extraction, lead qualification, ticket triage, content drafting — with validation on every model output.",
            "Engineer for reliability: idempotent steps, dead-letter handling, retries with backoff, and monitoring/alerting so failures are caught before clients notice.",
            "Document workflows and hand over runbooks so client teams can understand, operate, and extend what we build.",
            "Run discovery sessions to map existing business processes and identify the highest-leverage automation opportunities.",
        ],
        requirements: [
            "3+ years building integrations or automations professionally, with at least one orchestration platform (n8n, Make, Zapier, Temporal, or similar) used in production.",
            "Comfortable writing JavaScript/TypeScript or Python for custom workflow steps, data transformation, and API glue code.",
            "Practical experience integrating at least one major CRM or ERP (e.g., Salesforce, HubSpot, NetSuite, SAP, or Dynamics).",
            "Strong understanding of webhooks, OAuth, queues, and error-handling patterns for long-running processes.",
            "A reliability mindset: you test edge cases, plan for partial failure, and instrument what you ship.",
            "Clear written communication and comfort working with client stakeholders in a remote, async-first team.",
        ],
        niceToHave: [
            "Experience adding LLM-powered steps to automations, including prompt design and output validation.",
            "Familiarity with event-driven architectures, message queues, or durable execution engines.",
            "Experience with data pipelines or ETL tooling feeding analytics or AI systems.",
            "Prior consulting or client-facing delivery experience.",
        ],
    },
];

export function getJob(slug: string): Job | undefined {
    return jobs.find((job) => job.slug === slug);
}
