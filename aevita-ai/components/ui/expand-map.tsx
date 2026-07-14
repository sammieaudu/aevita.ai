"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";

interface LocationMapProps {
    location?: string;
    coordinates?: string;
    address?: string;
    className?: string;
}

export function LocationMap({
    location = "Mansfield, TX",
    coordinates = "32.5632° N, 97.1417° W",
    address = "2805 Felding Court, Mansfield, TX 76063",
    className,
}: LocationMapProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-50, 50], [8, -8]);
    const rotateY = useTransform(mouseX, [-50, 50], [-8, 8]);

    const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
    const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    };

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <motion.div
            ref={containerRef}
            className={`relative cursor-pointer select-none ${className}`}
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <motion.div
                className="relative overflow-hidden rounded-2xl bg-[rgb(var(--background-secondary))] border border-[rgb(var(--border))]/50"
                style={{
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                    transformStyle: "preserve-3d",
                }}
                animate={{
                    width: isExpanded ? 360 : 280,
                    height: isExpanded ? 320 : 160,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))]/10 via-transparent to-[rgb(var(--primary))]/5" />

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            className="absolute inset-0 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <div className="absolute inset-0 bg-[rgb(var(--background))]" />

                            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                {/* Main roads */}
                                <motion.line x1="0%" y1="35%" x2="100%" y2="35%" stroke="rgb(var(--foreground))" strokeOpacity="0.15" strokeWidth="4"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.2 }} />
                                <motion.line x1="0%" y1="65%" x2="100%" y2="65%" stroke="rgb(var(--foreground))" strokeOpacity="0.15" strokeWidth="4"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3 }} />
                                <motion.line x1="30%" y1="0%" x2="30%" y2="100%" stroke="rgb(var(--foreground))" strokeOpacity="0.1" strokeWidth="3"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.4 }} />
                                <motion.line x1="70%" y1="0%" x2="70%" y2="100%" stroke="rgb(var(--foreground))" strokeOpacity="0.1" strokeWidth="3"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.5 }} />
                            </svg>

                            {/* Location pin */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                initial={{ scale: 0, y: -20 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.3 }}
                            >
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg"
                                    style={{ filter: "drop-shadow(0 0 10px rgba(94, 92, 230, 0.5))" }}>
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="rgb(var(--primary))" />
                                    <circle cx="12" cy="9" r="2.5" fill="white" />
                                </svg>
                            </motion.div>

                            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--background))] via-transparent to-transparent opacity-60" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Grid pattern - collapsed */}
                <motion.div className="absolute inset-0 opacity-[0.03]" animate={{ opacity: isExpanded ? 0 : 0.03 }} transition={{ duration: 0.3 }}>
                    <svg width="100%" height="100%" className="absolute inset-0">
                        <defs>
                            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgb(var(--foreground))" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-5">
                    <div className="flex items-start justify-between">
                        <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" className="text-[rgb(var(--primary))]"
                            animate={{ filter: isHovered ? "drop-shadow(0 0 8px rgba(94, 92, 230, 0.6))" : "drop-shadow(0 0 4px rgba(94, 92, 230, 0.3))" }}
                            style={{ opacity: isExpanded ? 0 : 1 }}>
                            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                            <line x1="9" x2="9" y1="3" y2="18" />
                            <line x1="15" x2="15" y1="6" y2="21" />
                        </motion.svg>

                        <motion.div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-[rgb(var(--foreground))]/5 backdrop-blur-sm"
                            animate={{ scale: isHovered ? 1.05 : 1 }}>
                            <div className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--primary))]" />
                            <span className="text-[10px] font-medium text-[rgb(var(--foreground-muted))] tracking-wide uppercase">Office</span>
                        </motion.div>
                    </div>

                    <div className="space-y-1">
                        <motion.h3 className="text-[rgb(var(--foreground))] font-medium text-sm tracking-tight"
                            animate={{ x: isHovered ? 4 : 0 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                            {location}
                        </motion.h3>

                        <AnimatePresence>
                            {isExpanded && (
                                <>
                                    <motion.p className="text-[rgb(var(--foreground-muted))] text-xs"
                                        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                                        {address}
                                    </motion.p>
                                    <motion.p className="text-[rgb(var(--foreground-muted))] text-xs font-mono"
                                        initial={{ opacity: 0, y: -10, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }}
                                        exit={{ opacity: 0, y: -10, height: 0 }} transition={{ duration: 0.25, delay: 0.1 }}>
                                        {coordinates}
                                    </motion.p>
                                </>
                            )}
                        </AnimatePresence>

                        <motion.div className="h-px bg-gradient-to-r from-[rgb(var(--primary))]/50 via-[rgb(var(--primary))]/30 to-transparent"
                            initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: isHovered || isExpanded ? 1 : 0.3 }} transition={{ duration: 0.4, ease: "easeOut" }} />
                    </div>
                </div>
            </motion.div>

            <motion.p className="absolute -bottom-6 left-1/2 text-[10px] text-[rgb(var(--foreground-muted))] whitespace-nowrap"
                style={{ x: "-50%" }} initial={{ opacity: 0 }} animate={{ opacity: isHovered && !isExpanded ? 1 : 0, y: isHovered ? 0 : 4 }} transition={{ duration: 0.2 }}>
                Click to expand
            </motion.p>
        </motion.div>
    );
}
