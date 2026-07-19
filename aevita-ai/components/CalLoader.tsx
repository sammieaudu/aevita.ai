"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

type QueueFn = {
    (...args: unknown[]): void;
    q?: unknown[][];
};

type CalFn = QueueFn & {
    loaded?: boolean;
    ns?: Record<string, QueueFn>;
};

type CalWindow = Window & { Cal?: CalFn };

/**
 * Loads the Cal.com embed script using Cal's official queue contract:
 * before embed.js arrives, `Cal` and every `Cal.ns[namespace]` are callable
 * queue functions that buffer calls for the script to replay. Namespaced
 * calls MUST be queued on a function — storing a plain object breaks
 * consumers like the inline embed.
 */
export default function CalLoader() {
    useEffect(() => {
        const w = window as CalWindow;
        const scriptSrc = "https://app.cal.com/embed/embed.js";

        if (!w.Cal) {
            const push = (fn: QueueFn, args: unknown[]) => {
                fn.q = fn.q ?? [];
                fn.q.push(args);
            };

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
                    const namespace = args[1];
                    if (!cal.ns![namespace]) {
                        const api: QueueFn = (...apiArgs: unknown[]) => {
                            push(api, apiArgs);
                        };
                        api.q = [];
                        cal.ns![namespace] = api;
                    }
                    push(cal.ns![namespace], args);
                    push(cal, ["initNamespace", namespace]);
                    return;
                }
                push(cal, args);
            };
            w.Cal = cal;
        }

        w.Cal("init", site.scheduling.calNamespace, { origin: "https://cal.com" });
    }, []);

    return null;
}
