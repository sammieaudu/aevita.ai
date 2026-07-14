import { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "Case Studies",
    description:
        "Explore how Aevita has helped businesses transform with AI agents, intelligent automation, and enterprise integrations.",
    alternates: {
        canonical: absoluteUrl("/portfolio"),
    },
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
