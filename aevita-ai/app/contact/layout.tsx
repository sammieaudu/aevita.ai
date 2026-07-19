import { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "Contact — Talk to an AI Automation Expert",
    description:
        "Book a free AI automation assessment call or send Aevita a message. We'll map your workflows and show you where automation creates the most value for your business.",
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
