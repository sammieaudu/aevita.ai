import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
    {
        variants: {
            variant: {
                default:
                    "bg-[rgb(var(--primary))] text-white hover:bg-[rgb(var(--primary-hover))] shadow-[0_0_20px_rgba(94,92,230,0.3)] hover:shadow-[0_0_30px_rgba(94,92,230,0.5)]",
                secondary:
                    "bg-[rgb(var(--secondary))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--border))] border border-[rgb(var(--border))]",
                outline:
                    "border border-[rgb(var(--border))] bg-transparent text-[rgb(var(--foreground))] hover:bg-[rgb(var(--secondary))] hover:border-[rgb(var(--primary))]",
                ghost:
                    "text-[rgb(var(--foreground-muted))] hover:text-[rgb(var(--foreground))] hover:bg-[rgb(var(--secondary))]",
                link:
                    "text-[rgb(var(--primary))] underline-offset-4 hover:underline",
                glow:
                    "bg-gradient-to-r from-[rgb(var(--gradient-purple))] via-[rgb(var(--gradient-violet))] to-[rgb(var(--gradient-purple))] text-white shadow-[0_0_30px_rgba(94,92,230,0.5)] hover:shadow-[0_0_40px_rgba(94,92,230,0.7)] animate-shimmer bg-[length:200%_100%]",
                destructive:
                    "bg-[rgb(var(--destructive))] text-white hover:bg-[rgb(var(--destructive))]/90",
            },
            size: {
                default: "h-10 px-5 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-12 rounded-lg px-8 text-base",
                icon: "h-10 w-10 rounded-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
