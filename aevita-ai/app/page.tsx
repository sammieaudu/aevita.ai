import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { Hero } from "@/components/layout/Hero";
import { IntegrationEcosystem } from "@/components/sections/IntegrationEcosystem";
import {
    Problems,
    AutomationOverview,
    SolutionsGrid,
    Process,
    Capabilities,
    IndustriesTeaser,
    UseCases,
    EngagementModels,
    SecurityGovernance,
    CareersTeaser,
} from "@/components/sections/HomeSections";
import { WorkflowShowcase } from "@/components/sections/WorkflowShowcase";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import { Section } from "@/components/ui/section";
import { FaqsSection } from "@/components/ui/faqs-section";

export const metadata: Metadata = {
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

const homeFaqs = [
    {
        id: "faq-1",
        title: "What is AI automation?",
        content:
            "AI automation combines artificial intelligence with your existing business tools so routine work — answering common questions, following up with leads, entering data, generating documents — happens automatically, with people reviewing and approving the steps that matter.",
    },
    {
        id: "faq-2",
        title: "Is AI automation only for large companies?",
        content:
            "No. Aevita focuses on small and medium-sized businesses. Most of our workflows are built on the tools you already use — your CRM, email, calendar, and accounting software — and are scoped to deliver value from the first automation, not after a year-long program.",
    },
    {
        id: "faq-3",
        title: "How do I know which processes to automate?",
        content:
            "That is what the free AI automation assessment is for. We map your day-to-day workflows, find the repetitive tasks and delays, and rank the opportunities by business value, complexity, and risk — so you start with the work that creates the most value.",
    },
    {
        id: "faq-4",
        title: "Can Aevita integrate with our existing software?",
        content:
            "Yes. We integrate with tools such as Microsoft 365, Google Workspace, Salesforce, HubSpot, Zoho, QuickBooks, Slack, Teams, WhatsApp, Shopify, Calendly, Mailchimp, GoHighLevel, Zapier, Make, n8n, and custom systems. You do not need to replace what already works.",
    },
    {
        id: "faq-5",
        title: "How long does implementation take?",
        content:
            "An assessment typically takes one to two weeks. A first automation sprint usually ships a working workflow in a few weeks, depending on the systems involved. We deliver in small increments so you see value early.",
    },
    {
        id: "faq-6",
        title: "How do you protect our business and customer data?",
        content:
            "Every workflow is built with least-privilege access, encryption, audit logging, data minimization, and human approval gates on sensitive actions. Your data stays within your environment boundaries, and we document exactly what each automation can access.",
    },
    {
        id: "faq-7",
        title: "Will AI replace our employees?",
        content:
            "Our goal is to remove repetitive work from your team's day, not to remove your team. AI handles the routine steps; your people keep the judgment calls, approvals, and customer relationships — with better visibility than before.",
    },
    {
        id: "faq-8",
        title: "What happens when an automation fails?",
        content:
            "Failures are expected and planned for. Every Aevita workflow includes error handling, monitoring, alerting, and a human escalation path. If something breaks, it fails safely, notifies the right person, and can be paused instantly.",
    },
    {
        id: "faq-9",
        title: "What is included in the free assessment?",
        content:
            "A workflow discovery session, an automation opportunity analysis, and prioritized recommendations with estimated effort and risk considerations. You leave with practical next steps whether or not you work with us.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.title,
        acceptedAnswer: { "@type": "Answer", text: faq.content },
    })),
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <IntegrationEcosystem />
      <AutomationOverview />
      <Problems />
      <SolutionsGrid />
      <WorkflowShowcase />
      <Process />
      <Capabilities />
      <IndustriesTeaser />
      <Stats />
      <UseCases />
      <EngagementModels />
      <SecurityGovernance />
      <Section id="faq" grid>
        <FaqsSection
          description="Straight answers to the questions business owners ask us most. If yours isn't here, reach out."
          questions={homeFaqs}
        />
      </Section>
      <CareersTeaser />
      <CTA />
    </div>
  );
}
