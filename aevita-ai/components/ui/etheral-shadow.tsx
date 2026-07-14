"use client";

import React, { useRef, useId, useEffect, CSSProperties } from "react";
import { animate, useMotionValue, AnimationPlaybackControls, useInView, useReducedMotion } from "framer-motion";

interface AnimationConfig {
    preview?: boolean;
    scale: number;
    speed: number;
}

interface NoiseConfig {
    opacity: number;
    scale: number;
}

interface EtheralShadowProps {
    sizing?: "fill" | "stretch";
    color?: string;
    animation?: AnimationConfig;
    noise?: NoiseConfig;
    style?: CSSProperties;
    className?: string;
    children?: React.ReactNode;
}

function mapRange(
    value: number,
    fromLow: number,
    fromHigh: number,
    toLow: number,
    toHigh: number
): number {
    if (fromLow === fromHigh) {
        return toLow;
    }
    const percentage = (value - fromLow) / (fromHigh - fromLow);
    return toLow + percentage * (toHigh - toLow);
}

const useInstanceId = (): string => {
    const id = useId();
    const cleanId = id.replace(/:/g, "");
    return `shadowoverlay-${cleanId}`;
};

export function EtheralShadow({
    sizing = "fill",
    color = "rgba(94, 92, 230, 0.6)",
    animation = { scale: 50, speed: 30 },
    noise = { opacity: 0.3, scale: 1 },
    style,
    className,
    children,
}: EtheralShadowProps) {
    const id = useInstanceId();
    const shouldReduceMotion = useReducedMotion();
    const animationEnabled = !shouldReduceMotion && animation && animation.scale > 0;
    const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null);
    const hueRotateMotionValue = useMotionValue(180);
    const hueRotateAnimation = useRef<AnimationPlaybackControls | null>(null);

    const displacementScale = animation ? mapRange(animation.scale, 1, 100, 20, 100) : 0;
    const animationDuration = animation ? mapRange(animation.speed, 1, 100, 1000, 50) : 1;

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "0px 0px -100px 0px" }); // Optimistic margin

    useEffect(() => {
        if (feColorMatrixRef.current && animationEnabled && isInView) {
            if (hueRotateAnimation.current) {
                hueRotateAnimation.current.stop();
            }
            hueRotateMotionValue.set(0);
            hueRotateAnimation.current = animate(hueRotateMotionValue, 360, {
                duration: animationDuration / 25,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
                ease: "linear",
                delay: 0,
                onUpdate: (value: number) => {
                    if (feColorMatrixRef.current) {
                        feColorMatrixRef.current.setAttribute("values", String(value));
                    }
                },
            });

            return () => {
                if (hueRotateAnimation.current) {
                    hueRotateAnimation.current.stop();
                }
            };
        } else {
            // Stop animation when out of view
            if (hueRotateAnimation.current) {
                hueRotateAnimation.current.stop();
            }
        }
    }, [animationEnabled, animationDuration, hueRotateMotionValue, isInView]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                height: "100%",
                ...style,
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: -displacementScale,
                    filter: animationEnabled ? `url(#${id}) blur(4px)` : "none",
                }}
            >
                {animationEnabled && (
                    <svg style={{ position: "absolute" }}>
                        <defs>
                            <filter id={id} filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feTurbulence
                                    result="undulation"
                                    numOctaves={1}
                                    baseFrequency={`${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`}
                                    seed={0}
                                    type="fractalNoise"
                                />
                                <feColorMatrix
                                    ref={feColorMatrixRef}
                                    in="undulation"
                                    type="hueRotate"
                                    values="180"
                                />
                                {/* Simplified displacement map chain */}
                                <feDisplacementMap
                                    in="SourceGraphic"
                                    in2="undulation"
                                    scale={displacementScale}
                                    result="dist"
                                />
                            </filter>
                        </defs>
                    </svg>
                )}
                <div
                    style={{
                        backgroundColor: color,
                        maskImage: `url('/textures/ethereal-mask.png')`,
                        WebkitMaskImage: `url('/textures/ethereal-mask.png')`,
                        maskSize: sizing === "stretch" ? "100% 100%" : "cover",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        width: "100%",
                        height: "100%",
                    }}
                />
            </div>

            {/* Content overlay */}
            {children && (
                <div
                    style={{
                        position: "relative",
                        zIndex: 10,
                        width: "100%",
                        height: "100%",
                    }}
                >
                    {children}
                </div>
            )}

            {noise && noise.opacity > 0 && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("/textures/noise.png")`,
                        backgroundSize: noise.scale * 200,
                        backgroundRepeat: "repeat",
                        opacity: noise.opacity / 2,
                        pointerEvents: "none",
                    }}
                />
            )}
        </div>
    );
}
