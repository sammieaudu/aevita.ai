import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    grid?: boolean;
    glow?: boolean;
}

export function Section({
    children,
    className,
    id,
    grid = false,
    glow = false,
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "relative py-12 md:py-16 lg:py-20 overflow-hidden",
                className
            )}
        >
            {/* Consistent background gradient like homepage */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(94, 92, 230, 0.12) 0%, transparent 50%)',
                }}
            />

            {/* Optional grid background */}
            {grid && (
                <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
            )}

            {/* Optional glow effect */}
            {glow && (
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[500px] h-[300px] md:h-[350px] rounded-full pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse, rgba(94, 92, 230, 0.1) 0%, transparent 60%)",
                        filter: "blur(50px)",
                    }}
                />
            )}

            <div className="container px-3 md:px-4 mx-auto relative z-10">{children}</div>
        </section>
    );
}
