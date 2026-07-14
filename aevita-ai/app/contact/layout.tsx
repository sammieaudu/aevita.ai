import { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "Contact — Book an AI Strategy Call",
    description:
        "Book an AI strategy call with Aevita to discuss AI agents, workflow automation, RAG systems, generative AI applications, and enterprise integrations.",
    alternates: {
        canonical: absoluteUrl("/contact"),
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
