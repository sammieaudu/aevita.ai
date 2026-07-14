import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(160deg, #080B14 0%, #05070D 100%)",
                }}
            >
                <svg width="132" height="132" viewBox="0 0 64 64" fill="none">
                    <path d="M12 53 L29.5 16" stroke="#2F6BFF" strokeWidth="6" strokeLinecap="round" />
                    <path d="M34.5 16 L52 53" stroke="#7C3AED" strokeWidth="6" strokeLinecap="round" />
                    <path d="M23 40 H41" stroke="#2F6BFF" strokeWidth="5" strokeLinecap="round" />
                    <circle cx="32" cy="9" r="4.5" fill="#22D3EE" />
                </svg>
            </div>
        ),
        { ...size }
    );
}
