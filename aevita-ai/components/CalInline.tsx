"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

type CalFn = (...args: unknown[]) => void;
type CalWindow = Window & { Cal?: CalFn & { ns?: Record<string, CalFn> } };

/**
 * Inline Cal.com scheduler. Relies on CalLoader (mounted in the root layout)
 * having initialized the embed script and namespace.
 */
export function CalInline() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const w = window as CalWindow;
        const element = containerRef.current;
        if (!element) return;

        let cancelled = false;
        const mount = () => {
            if (cancelled) return;
            const ns = w.Cal?.ns?.[site.scheduling.calNamespace];
            if (typeof ns !== "function") {
                setTimeout(mount, 200);
                return;
            }
            // Never let an embed failure take down the page — the visible
            // fallback link below covers that case.
            try {
                ns("inline", {
                    elementOrSelector: element,
                    calLink: site.scheduling.calLink,
                    config: { layout: "month_view", theme: "dark" },
                });
            } catch (error) {
                console.error("Cal.com inline embed failed", error);
            }
        };
        mount();

        return () => {
            cancelled = true;
            element.replaceChildren();
        };
    }, []);

    return (
        <div>
            <div
                ref={containerRef}
                className="min-h-[620px] w-full rounded-2xl overflow-hidden"
            />
            <p className="text-center text-sm text-[rgb(var(--foreground-muted))] mt-4">
                Calendar not loading?{" "}
                <a
                    href={`https://cal.com/${site.scheduling.calLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(var(--primary))] hover:underline"
                >
                    Open the booking page directly
                </a>
                {" "}or email{" "}
                <a
                    href={`mailto:${site.emails.primary}`}
                    className="text-[rgb(var(--primary))] hover:underline"
                >
                    {site.emails.primary}
                </a>
                .
            </p>
        </div>
    );
}
