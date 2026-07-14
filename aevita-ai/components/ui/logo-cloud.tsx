import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
    logos?: Logo[];
};

// Default technology logos
const defaultLogos: Logo[] = [
    { src: "https://svgl.app/library/nextjs_icon_dark.svg", alt: "Next.js" },
    { src: "https://svgl.app/library/react.svg", alt: "React" },
    { src: "https://svgl.app/library/typescript.svg", alt: "TypeScript" },
    { src: "https://svgl.app/library/tailwindcss.svg", alt: "Tailwind CSS" },
    { src: "https://svgl.app/library/aws.svg", alt: "AWS" },
    { src: "https://svgl.app/library/google-cloud.svg", alt: "Google Cloud" },
    { src: "https://svgl.app/library/docker.svg", alt: "Docker" },
    { src: "https://svgl.app/library/kubernetes.svg", alt: "Kubernetes" },
];

export function LogoCloud({ className, logos = defaultLogos, ...props }: LogoCloudProps) {
    return (
        <div
            className={cn(
                "relative grid grid-cols-2 border-x border-[rgb(var(--border))]/50 md:grid-cols-4",
                className
            )}
            {...props}
        >
            <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-[rgb(var(--border))]/50" />

            {logos.map((logo, index) => (
                <LogoCard
                    key={logo.alt}
                    className={cn(
                        "border-b border-[rgb(var(--border))]/50",
                        index % 4 !== 3 && "md:border-r",
                        index % 2 !== 1 && "border-r md:border-r-0",
                        (index === 0 || index === 2 || index === 5 || index === 7) && "bg-[rgb(var(--background-secondary))]"
                    )}
                    logo={logo}
                >
                    {(index === 0 || index === 2) && (
                        <PlusIcon
                            className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-[rgb(var(--foreground-muted))]"
                            strokeWidth={1}
                        />
                    )}
                </LogoCard>
            ))}

            <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-[rgb(var(--border))]/50" />
        </div>
    );
}

type LogoCardProps = React.ComponentProps<"div"> & {
    logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-center bg-[rgb(var(--background))] px-4 py-8 md:p-8",
                className
            )}
            {...props}
        >
            <img
                alt={logo.alt}
                className="pointer-events-none h-8 md:h-10 select-none opacity-70 hover:opacity-100 transition-opacity"
                height={logo.height || 40}
                src={logo.src}
                width={logo.width || "auto"}
            />
            {children}
        </div>
    );
}
