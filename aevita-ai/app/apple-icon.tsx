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
                <div
                    style={{
                        width: 120,
                        height: 120,
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle at 32% 28%, #A99BFF 0%, #7B6CF6 55%, #5B4BD8 100%)",
                    }}
                />
            </div>
        ),
        { ...size }
    );
}
