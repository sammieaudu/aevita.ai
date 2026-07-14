"use client";

import { cn } from '@/lib/utils';
import React, { useMemo } from 'react';

type FeatureType = {
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description: string;
};

type FeatureCardProps = React.ComponentProps<'div'> & {
    feature: FeatureType;
    patternIndex?: number;
};

// Pre-defined patterns to avoid hydration mismatch from Math.random()
const PREDEFINED_PATTERNS: number[][][] = [
    [[9, 6], [9, 5], [8, 6], [8, 6], [7, 1]],
    [[9, 5], [7, 2], [8, 4], [10, 5], [8, 3]],
    [[10, 6], [10, 5], [9, 5], [9, 4], [10, 1]],
    [[9, 5], [7, 2], [9, 2], [8, 6], [10, 5]],
    [[9, 4], [8, 3], [9, 1], [10, 1], [9, 3]],
    [[8, 3], [10, 5], [9, 5], [7, 4], [8, 1]],
    [[7, 3], [8, 4], [10, 3], [9, 2], [8, 5]],
    [[10, 4], [7, 5], [9, 6], [8, 1], [10, 2]],
];

export function FeatureCard({ feature, className, patternIndex = 0, ...props }: FeatureCardProps) {
    // Use deterministic pattern based on index
    const pattern = useMemo(() => {
        return PREDEFINED_PATTERNS[patternIndex % PREDEFINED_PATTERNS.length];
    }, [patternIndex]);

    return (
        <div className={cn('relative overflow-hidden p-6', className)} {...props}>
            <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                <div className="from-[rgb(var(--foreground))]/5 to-[rgb(var(--foreground))]/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
                    <GridPattern
                        width={20}
                        height={20}
                        x="-12"
                        y="4"
                        squares={pattern}
                        className="fill-[rgb(var(--foreground))]/5 stroke-[rgb(var(--foreground))]/25 absolute inset-0 h-full w-full mix-blend-overlay"
                    />
                </div>
            </div>
            <feature.icon className="text-[rgb(var(--primary))] size-6" strokeWidth={1.5} aria-hidden />
            <h3 className="mt-8 text-base font-medium text-[rgb(var(--foreground))]">{feature.title}</h3>
            <p className="text-[rgb(var(--foreground-muted))] relative z-20 mt-2 text-sm">{feature.description}</p>
        </div>
    );
}

function GridPattern({
    width,
    height,
    x,
    y,
    squares,
    ...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
    const patternId = React.useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([sx, sy], index) => (
                        <rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={sx * width} y={sy * height} />
                    ))}
                </svg>
            )}
        </svg>
    );
}
