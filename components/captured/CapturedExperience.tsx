"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import CardImage from "@/components/ui/CardImage";
import GlobalButton from "@/components/ui/GlobalButton";

const SUBTITLE_BLUE =
    "bg-linear-to-b from-[#678BAA] to-[#678BAA]/50 bg-clip-text text-transparent";

function SectionAContent() {
    return (
        <>
            <div className="flex items-center gap-4">
                <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-70 md:h-90" />
                <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-70 md:h-120" />
                <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-70 md:h-90" />
                <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-70 md:h-120" />
                <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-70 md:h-90" />
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
                <h1 className={`text-2xl font-bold italic text-center tracking-tight ${SUBTITLE_BLUE}`}>
                    Every moment has a story. Let&apos;s capture yours in a way you&apos;ll cherish forever.
                </h1>
                <Link href="/contact">
                    <GlobalButton variant="primary" size="md" className="hover:opacity-60 transition-opacity duration-300">
                        start your chapter...
                    </GlobalButton>
                </Link>
            </div>
        </>
    );
}

function SectionBContent() {
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <CardImage
                        key={index}
                        src="/img.jpg"
                        alt={`Image ${index + 1}`}
                        className="w-40 h-60 md:w-100 md:h-60"
                    />
                ))}
            </div>
            <Link href="/portfolio">
                <GlobalButton variant="secondary" size="md" className="hover:opacity-60 transition-opacity duration-300">
                    view my gallery &lt;3
                </GlobalButton>
            </Link>
        </>
    );
}

function SectionCContent() {
    return (
        <>
            <CardImage src="/img.jpg" alt="" className="h-[50vh] w-[100vh] object-cover" />
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className={`text-2xl font-bold italic text-center tracking-tight ${SUBTITLE_BLUE}`}>
                    Hi! I&apos;m Melody and this is my photography page! Learn more about me by clicking the button below!
                </h1>
                <GlobalButton variant="primary" size="md" className="hover:opacity-60 transition-opacity duration-300">
                    <Link href="/about">
                        about me :)
                    </Link>
                </GlobalButton>
            </div>
        </>
    );
}

function phraseOpacity(
    progress: MotionValue<number>,
    inStart: number,
    fullAt: number,
    fadeAt: number,
    endAt: number
): MotionValue<number> {
    return useTransform(
        progress,
        [0, inStart, fullAt, fadeAt, endAt, 1],
        [0, 0, 1, 1, 0, 0]
    );
}

export default function CapturedExperience() {
    const experienceRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: experienceRef,
        offset: ["start start", "end end"],
    });

    // First 25% of scroll (slide-up-cover phase) clamps to 0; remaining 75% maps to 0→1.
    // const progress = useTransform(scrollYProgress, (v) => Math.max(0, (v - 0.25) / 0.75));

    const progress = scrollYProgress;

    // Tail phrase slices — Section A synced with contentA: hold 0→0.10, slide up 0.10→0.25, fade 0.25→0.30.
    const tailA = useTransform(progress, [0, 0.10, 0.25, 0.30, 1], [1, 1, 1, 0, 0]);
    const tailAY = useTransform(progress, [0, 0.10, 0.25, 0.30, 1], ["0px", "0px", "-20px", "-20px", "-20px"]);

    const tailB = useTransform(progress, [0, 0.30, 0.40, 0.65, 1], [0, 0, 1, 0, 0]);
    const tailBY = useTransform(progress, [0, 0.15, 0.25, 0.50, 1], ["20px", "20px", "0px", "0px", "-20px"]);

    const tailC = useTransform(progress, [0, 0.60, 0.80, 1, 1, 1], [0, 0, 1, 1, 1, 1]);
    const tailCY = useTransform(progress, [0, 0.70, 0.80, 1], ["20px", "20px", "0px", "0px"]);

    // Captured color layers (blue ↔ white, synced with content fade window 0.25 → 0.30)
    const capturedBlue = useTransform(
        progress,
        [0, 0.30, 0.55, 0.70, 1],
        [1, 1, 0, 1, 1]
    );
    const capturedWhite = useTransform(
        progress,
        [0, 0.25, 0.30, 0.55, 0.70, 1],
        [0, 0, 1, 1, 0, 0]
    );

    // Background slices (synced with content fade window 0.25 → 0.30)
    const bgA = useTransform(progress, [0, 0.30, 0.35, 1], [1, 1, 0, 0]);
    const bgBBase = useTransform(progress, [0, 0.25, 0.30, 0.55, 0.70, 1], [0, 0, 1, 1, 0, 0]);
    const bgBRadial = useTransform(progress, [0, 0.28, 0.33, 0.55, 0.70, 1], [0, 0, 1, 1, 0, 0]);
    const bgC = useTransform(progress, [0, 0.50, 0.70, 1], [0, 0, 1, 1]);

    // Content slices — Section A: hold 0→0.15, scroll up 0.15→0.25, fade out 0.25→0.30.
    // Fade timing matches when content is leaving the frame, not when it's still pinned.
    const contentA = useTransform(progress, [0, 0.10, 0.25, 0.30, 1], [1, 1, 1, 0, 0]);
    const contentAY = useTransform(progress, [0, 0.10, 0.25, 0.30, 1], ["0px", "0px", "-20px", "-20px", "-20px"]);

    const contentB = useTransform(progress, [0, 0.30, 0.40, 0.65, 1], [0, 0, 1, 0, 0]);
    const contentBY = useTransform(progress, [0, 0.15, 0.25, 0.50, 1], ["20px", "20px", "0px", "0px", "-20px"]);

    const contentC = useTransform(progress, [0, 0.60, 0.80, 1, 1, 1], [0, 0, 1, 1, 1, 1]);
    const contentCY = useTransform(progress, [0, 0.70, 0.80, 1], ["20px", "20px", "0px", "0px"]);

    return (
        <section ref={experienceRef} className="relative h-[400vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Fixed background layers */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <motion.div
                        style={{ opacity: bgA }}
                        className="absolute inset-0 bg-[#EBE8D8]"
                    />
                    <motion.div
                        style={{ opacity: bgBBase }}
                        className="absolute inset-0 bg-white"
                    />
                    <motion.div
                        style={{ opacity: bgBRadial }}
                        className="absolute inset-0 bg-[radial-gradient(rgba(103,139,170,0.8)_0%,rgba(103,139,170,1))]"
                    />
                    <motion.div
                        style={{ opacity: bgC }}
                        className="absolute inset-0 bg-[#EBE8D8]"
                    />
                </div>

                {/* Fixed title */}
                <div className="absolute top-0 left-0 right-0 z-20 pt-20 flex justify-center pointer-events-none">
                    <div className="flex items-center justify-center whitespace-nowrap text-8xl italic font-bold tracking-tight leading-38">
                        <span className="relative inline-grid whitespace-nowrap" style={{ gridTemplateColumns: "1fr", gridTemplateRows: "1fr" }}>
                            <motion.span
                                style={{ opacity: capturedBlue, gridArea: "1 / 1" }}
                                className="inline-block whitespace-nowrap bg-linear-to-b from-[#678BAA] to-[#678BAA]/50 bg-clip-text text-transparent"
                            >
                                Captured&nbsp;
                            </motion.span>
                            <motion.span
                                style={{ opacity: capturedWhite, gridArea: "1 / 1" }}
                                className="inline-block whitespace-nowrap bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent"
                            >
                                Captured&nbsp;
                            </motion.span>
                        </span>
                        <span className="relative inline-grid whitespace-nowrap" style={{ gridTemplateColumns: "1fr", gridTemplateRows: "1fr" }}>
                            <motion.span
                                style={{ opacity: tailA, y: tailAY, gridArea: "1 / 1" }}
                                className="inline-block whitespace-nowrap bg-linear-to-b from-[#678BAA] to-[#678BAA]/50 bg-clip-text text-transparent"
                            >
                                with love,
                            </motion.span>
                            <motion.span
                                style={{ opacity: tailB, y: tailBY, gridArea: "1 / 1" }}
                                className="inline-block whitespace-nowrap bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent"
                            >
                                of love,
                            </motion.span>
                            <motion.span
                                style={{ opacity: tailC, y: tailCY, gridArea: "1 / 1" }}
                                className="inline-block whitespace-nowrap bg-linear-to-b from-[#678BAA] to-[#678BAA]/50 bg-clip-text text-transparent"
                            >
                                by love.
                            </motion.span>
                        </span>
                    </div>
                </div>

                {/* Fixed content blocks */}
                <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
                    <motion.section
                        style={{ opacity: contentA, y: contentAY }}
                        className="flex flex-col items-center justify-center gap-8"
                    >
                        <SectionAContent />
                    </motion.section>

                    <motion.section
                        style={{ opacity: contentB, y: contentBY }}
                        className="absolute flex flex-col items-center justify-center gap-10"
                    >
                        <SectionBContent />
                    </motion.section>

                    <motion.section
                        style={{ opacity: contentC, y: contentCY }}
                        className="absolute flex flex-col items-center justify-center gap-8"
                    >
                        <SectionCContent />
                    </motion.section>
                </div>
            </div>
        </section>
    );
}
