import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { Hero } from "@/components/layout/Hero";
import { IntegrationEcosystem } from "@/components/sections/IntegrationEcosystem";
import {
    Problems,
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

export const metadata: Metadata = {
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <IntegrationEcosystem />
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
      <CareersTeaser />
      <CTA />
    </div>
  );
}
