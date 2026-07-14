"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

type CalFn = {
    (...args: unknown[]): void;
    loaded?: boolean;
    ns?: Record<string, unknown>;
    q?: unknown[][];
};

type CalWindow = Window & { Cal?: CalFn };

export default function CalLoader() {
    useEffect(() => {
        const w = window as CalWindow;
        const scriptSrc = "https://app.cal.com/embed/embed.js";

        if (!w.Cal) {
            const cal: CalFn = (...args: unknown[]) => {
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q ?? [];
                    const script = document.createElement("script");
                    script.src = scriptSrc;
                    document.head.appendChild(script);
                    cal.loaded = true;
                }
                if (args[0] === "init" && typeof args[1] === "string") {
                    cal.ns![args[1]] = args[2];
                    return;
                }
                cal.q!.push(args);
            };
            w.Cal = cal;
        }

        w.Cal("init", site.scheduling.calNamespace, { origin: "https://cal.com" });
    }, []);

    return null;
}
