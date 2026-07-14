import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoVariant = "full" | "icon";
type LogoTheme = "light" | "dark";

interface LogoProps {
    /** "full" renders mark + Aevita.ai wordmark, "icon" renders the mark only. */
    variant?: LogoVariant;
    /** Surface the logo sits on: "dark" → light wordmark, "light" → dark wordmark. */
    theme?: LogoTheme;
    /** Mark size in px (the wordmark scales with it). */
    width?: number;
    height?: number;
    className?: string;
}

/**
 * Aevita mark — an "A" built from two converging workflow strokes joined by
 * a connector, crowned by a decision node. Inline SVG so it stays crisp and
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
                <linearGradient id={id} x1="10" y1="54" x2="54" y2="10" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#22D3EE" />
                    <stop offset="0.45" stopColor="#2F6BFF" />
                    <stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
            </defs>
            <path d="M12 53 L29.5 16" stroke={`url(#${id})`} strokeWidth="6" strokeLinecap="round" />
            <path d="M34.5 16 L52 53" stroke={`url(#${id})`} strokeWidth="6" strokeLinecap="round" />
            <path d="M23 40 H41" stroke={`url(#${id})`} strokeWidth="5" strokeLinecap="round" />
            <circle cx="32" cy="9" r="4.5" fill="#22D3EE" />
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
        <span className={cn("inline-flex items-center gap-2 shrink-0", className)}>
            <Mark size={size} id={gradientId} />
            <span
                className={cn(
                    "font-bold tracking-tight leading-none",
                    theme === "dark" ? "text-white" : "text-[#0B1020]"
                )}
                style={{
                    fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
                    fontSize: Math.round(size * 0.62),
                }}
            >
                {site.displayName}
            </span>
        </span>
    );
}
