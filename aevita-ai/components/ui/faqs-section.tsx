import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

interface FaqItem {
    id: string;
    title: string;
    content: string;
}

interface FaqsSectionProps {
    title?: string;
    description?: string;
    questions?: FaqItem[];
    className?: string;
}

const defaultQuestions: FaqItem[] = [
    {
        id: 'item-1',
        title: 'What does Aevita do?',
        content: 'Aevita designs and builds AI agents, autonomous business workflows, RAG systems, generative AI applications, and enterprise integrations. We deliver working production systems — not strategy decks — that reduce manual work and help organizations scale.',
    },
    {
        id: 'item-2',
        title: 'How long does a typical engagement take?',
        content: 'Most engagements start with a short strategy sprint of one to two weeks. A first production automation or AI agent usually ships in four to eight weeks; larger platforms and enterprise integration programs are delivered in phased increments so value lands early.',
    },
    {
        id: 'item-3',
        title: 'Do you work with startups or only enterprises?',
        content: 'Both. Aevita\'s systems are engineered to enterprise standards — security boundaries, audit logs, human approval gates — but scoped to fit growth-stage budgets when needed.',
    },
    {
        id: 'item-4',
        title: 'How do humans stay in control of the AI systems you build?',
        content: 'Every Aevita system ships with explicit human control: approval gates on sensitive actions, confidence thresholds that route edge cases to a named owner, and full audit logs of every automated step. AI acts inside boundaries you define.',
    },
    {
        id: 'item-5',
        title: 'How do you handle security and data privacy?',
        content: 'We build with least-privilege credentials, keep your data inside your environment boundaries, respect existing system permissions in retrieval pipelines, and design audit logging in from day one. Security review is part of every delivery, not an afterthought.',
    },
    {
        id: 'item-6',
        title: 'How do I get started with Aevita?',
        content: 'Book an AI strategy call or send us a message. We\'ll map your highest-friction process, identify the systems involved, and propose the first automation worth building.',
    },
];

export function FaqsSection({
    title = "Frequently Asked Questions",
    description = "Here are some common questions about our services. If you don't find the answer you're looking for, feel free to reach out.",
    questions = defaultQuestions,
    className,
}: FaqsSectionProps) {
    return (
        <div className={`mx-auto w-full max-w-3xl space-y-7 px-4 ${className}`}>
            <div className="space-y-2">
                <h2 className="text-3xl font-bold text-[rgb(var(--foreground))] md:text-4xl">{title}</h2>
                <p className="text-[rgb(var(--foreground-muted))] max-w-2xl">
                    {description}
                </p>
            </div>
            <Accordion
                type="single"
                collapsible
                className="bg-[rgb(var(--background-secondary))] w-full -space-y-px rounded-lg"
                defaultValue="item-1"
            >
                {questions.map((item) => (
                    <AccordionItem
                        value={item.id}
                        key={item.id}
                        className="relative border border-[rgb(var(--border))]/50 first:rounded-t-lg last:rounded-b-lg"
                    >
                        <AccordionTrigger className="px-4 py-4 text-base leading-6 hover:no-underline text-[rgb(var(--foreground))]">
                            {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-[rgb(var(--foreground-muted))] pb-4 px-4">
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <p className="text-[rgb(var(--foreground-muted))]">
                Can&apos;t find what you&apos;re looking for? Contact our{' '}
                <Link href="/contact" className="text-[rgb(var(--primary))] hover:underline">
                    support team
                </Link>
            </p>
        </div>
    );
}
