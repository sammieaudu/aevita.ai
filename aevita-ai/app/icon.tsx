import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#05070D",
                    borderRadius: 14,
                }}
            >
                <div
                    style={{
                        width: 44,
                        height: 44,
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
