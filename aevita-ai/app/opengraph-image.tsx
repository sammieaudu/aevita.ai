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
                    <div
                        style={{
                            width: 64,
                            height: 64,
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle at 32% 28%, #A99BFF 0%, #7B6CF6 55%, #5B4BD8 100%)",
                        }}
                    />
                    <div style={{ display: "flex", fontSize: 52, fontWeight: 600, letterSpacing: -1 }}>
                        <span style={{ color: "#F8FAFC" }}>aevita</span>
                        <span style={{ color: "#8B7CF8" }}>.ai</span>
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
                    Put AI to work in your business — every day.
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
                    {`Secure AI-powered workflows for small and medium-sized businesses — designed, built, and managed by ${site.name}.`}
                </div>
            </div>
        ),
        { ...size }
    );
}
