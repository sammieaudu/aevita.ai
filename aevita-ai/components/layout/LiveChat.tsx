"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";
import Link from "next/link";
import { docsCategories } from "@/lib/data";
import { site } from "@/lib/site";

export function LiveChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Array<{
        id: number;
        type: "bot" | "user";
        text: string;
        time: Date;
        links?: Array<{ title: string; category: string; slug: string }>;
    }>>([
        {
            id: 1,
            type: "bot",
            text: "Hi! 👋 I'm the Aevita AI assistant. Ask me anything about our solutions or documentation, or type 'human' to speak with a representative.",
            time: new Date(),
        },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const findDocsBuffer = (query: string) => {
        const results = [];
        const lowerQuery = query.toLowerCase();

        for (const cat of docsCategories) {
            for (const article of cat.articles) {
                if (article.title.toLowerCase().includes(lowerQuery) || cat.title.toLowerCase().includes(lowerQuery)) {
                    results.push({ ...article, category: cat.title });
                }
            }
        }
        return results.slice(0, 3);
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = {
            id: messages.length + 1,
            type: "user" as const,
            text: input,
            time: new Date(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        const lowerInput = input.toLowerCase();

        setTimeout(() => {
            setIsTyping(false);
            let botResponseText = "";
            let botResponseLinks: Array<{ title: string; category: string; slug: string }> | undefined = undefined;

            if (lowerInput.includes("human") || lowerInput.includes("support") || lowerInput.includes("email")) {
                botResponseText = `I've forwarded your request to our team at ${site.emails.primary}. Someone will be in touch shortly.`;
            } else {
                const results = findDocsBuffer(lowerInput);
                if (results.length > 0) {
                    botResponseText = "I found some documentation that might help:";
                    botResponseLinks = results;
                } else {
                    botResponseText = "I couldn't find exact documentation for that. I've logged your query for our team. You can also browse our full documentation or ask to speak to a human.";
                }
            }

            const botResponse = {
                id: messages.length + 2,
                type: "bot" as const,
                text: botResponseText,
                links: botResponseLinks,
                time: new Date(),
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 1500);
    };

    return (
        <>
            {/* Chat Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[rgb(var(--primary))] text-white shadow-lg shadow-[rgb(var(--primary))]/30 flex items-center justify-center hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageCircle className="w-6 h-6" />
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-50 w-[360px] h-[500px] bg-[rgb(var(--background-secondary))] border border-[rgb(var(--border))]/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 bg-[rgb(var(--primary))] text-white flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                <Bot className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Aevita Support AI</h3>
                                <p className="text-xs text-white/80">Always here to help</p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${msg.type === "user"
                                            ? "bg-[rgb(var(--primary))] text-white rounded-br-sm"
                                            : "bg-[rgb(var(--card))] border border-[rgb(var(--border))]/50 text-[rgb(var(--foreground))] rounded-bl-sm"
                                            }`}
                                    >
                                        <p>{msg.text}</p>
                                        {msg.links && (
                                            <div className="mt-3 flex flex-col gap-2">
                                                {msg.links.map((link, i) => (
                                                    <Link
                                                        key={i}
                                                        href={`/docs`}
                                                        className="block p-2 rounded bg-[rgb(var(--background-secondary))] hover:bg-[rgb(var(--primary))]/10 border border-[rgb(var(--border))]/50 md:text-xs transition-colors"
                                                    >
                                                        <div className="font-medium text-[rgb(var(--primary))]">{link.title}</div>
                                                        <div className="text-[10px] text-[rgb(var(--foreground-muted))]">{link.category}</div>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-[rgb(var(--card))] border border-[rgb(var(--border))]/50 text-[rgb(var(--foreground-muted))] px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm">
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--background))]">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Ask for help..."
                                    className="flex-1 px-4 py-2.5 rounded-full bg-[rgb(var(--background-secondary))] border border-[rgb(var(--border))]/50 text-[rgb(var(--foreground))] placeholder:text-[rgb(var(--foreground-muted))] text-sm focus:outline-none focus:border-[rgb(var(--primary))] focus:ring-1 focus:ring-[rgb(var(--primary))]"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    className="w-10 h-10 rounded-full bg-[rgb(var(--primary))] text-white flex items-center justify-center hover:bg-[rgb(var(--primary-hover))] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
