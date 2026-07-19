import { cn } from "@/lib/utils";

type LogoVariant = "full" | "icon";
type LogoTheme = "light" | "dark";

interface LogoProps {
    /** "full" renders mark + aevita.ai wordmark, "icon" renders the mark only. */
    variant?: LogoVariant;
    /** Surface the logo sits on: "dark" → light wordmark, "light" → dark wordmark. */
    theme?: LogoTheme;
    /** Mark size in px (the wordmark scales with it). */
    width?: number;
    height?: number;
    className?: string;
}

/**
 * Aevita mark — a violet orb: light where it catches the light at the upper
 * left, deepening toward the lower right. Inline SVG so it stays crisp and
 * needs no network request.
 */
function Mark({ size, id }: { size: number; id: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
        >
            <defs>
                <radialGradient id={id} cx="0.32" cy="0.28" r="0.85">
                    <stop offset="0" stopColor="#A99BFF" />
                    <stop offset="0.55" stopColor="#7B6CF6" />
                    <stop offset="1" stopColor="#5B4BD8" />
                </radialGradient>
            </defs>
            <circle cx="32" cy="32" r="30" fill={`url(#${id})`} />
        </svg>
    );
}

export function Logo({
    variant = "full",
    theme = "dark",
    width = 32,
    height,
    className,
}: LogoProps) {
    const size = height ?? width;
    // Unique gradient id per placement so multiple logos on a page don't clash.
    const gradientId = `aevita-g-${variant}-${theme}-${size}`;

    if (variant === "icon") {
        return (
            <span className={cn("inline-flex shrink-0", className)}>
                <Mark size={size} id={gradientId} />
            </span>
        );
    }

    return (
        <span className={cn("inline-flex items-center gap-2.5 shrink-0", className)}>
            <Mark size={size} id={gradientId} />
            {/* Inherits Inter from the body font stack. */}
            <span
                className="font-medium tracking-tight leading-none"
                style={{ fontSize: Math.round(size * 0.78) }}
            >
                <span className={theme === "dark" ? "text-white" : "text-[#0B1020]"}>
                    aevita
                </span>
                <span className="text-[#8B7CF8]">.ai</span>
            </span>
        </span>
    );
}
