import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.displayName} — ${site.tagline}`;

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    backgroundColor: "#05070D",
                    backgroundImage:
                        "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(47,107,255,0.28) 0%, rgba(124,58,237,0.10) 45%, rgba(5,7,13,1) 75%)",
                    color: "#F8FAFC",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <svg width="72" height="72" viewBox="0 0 64 64" fill="none">
                        <path d="M12 53 L29.5 16" stroke="#2F6BFF" strokeWidth="6" strokeLinecap="round" />
                        <path d="M34.5 16 L52 53" stroke="#7C3AED" strokeWidth="6" strokeLinecap="round" />
                        <path d="M23 40 H41" stroke="#2F6BFF" strokeWidth="5" strokeLinecap="round" />
                        <circle cx="32" cy="9" r="4.5" fill="#22D3EE" />
                    </svg>
                    <div style={{ fontSize: 52, fontWeight: 700, letterSpacing: -1 }}>
                        {site.displayName}
                    </div>
                </div>
                <div
                    style={{
                        marginTop: 48,
                        fontSize: 64,
                        fontWeight: 700,
                        letterSpacing: -2,
                        lineHeight: 1.1,
                        maxWidth: 980,
                    }}
                >
                    Build the intelligent systems that move your business forward.
                </div>
                <div
                    style={{
                        marginTop: 32,
                        fontSize: 30,
                        color: "#94A3B8",
                        maxWidth: 900,
                        lineHeight: 1.4,
                    }}
                >
                    {`AI agents, autonomous workflows, RAG systems, and enterprise integrations — engineered by ${site.name}.`}
                </div>
            </div>
        ),
        { ...size }
    );
}
