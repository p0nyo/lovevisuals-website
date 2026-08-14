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

export default function TestPage() {
    const pageRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: pageRef, offset: ["start start", "end end"] });

    // Tail phrase slices (strict handoff, ~10% fade per transition, ~35% hold per section)
    const tailA = useTransform(scrollYProgress, [0, 0.40, 0.50, 1], [1, 1, 0, 0]);
    const tailAY = useTransform(scrollYProgress, [0, 0.40, 0.50, 1], ["0px", "0px", "-20px", "-20px"]);
    const tailAVis = useTransform(tailA, (v) => (v > 0.01 ? "visible" : "hidden"));

    const tailB = useTransform(scrollYProgress, [0, 0.50, 0.60, 0.90, 1, 1], [0, 0, 1, 1, 0, 0]);
    const tailBY = useTransform(scrollYProgress, [0, 0.50, 0.60, 0.90, 1, 1], ["20px", "20px", "0px", "0px", "-20px", "-20px"]);
    const tailBVis = useTransform(tailB, (v) => (v > 0.01 ? "visible" : "hidden"));

    const tailC = useTransform(scrollYProgress, [0, 0.90, 1, 1], [0, 0, 1, 1]);
    const tailCY = useTransform(scrollYProgress, [0, 0.90, 1, 1], ["20px", "0px", "0px", "0px"]);
    const tailCVis = useTransform(tailC, (v) => (v > 0.01 ? "visible" : "hidden"));

    // Captured color layers (blue ↔ white, synced with Section B bg window 0.60→0.90)
    const capturedBlue = useTransform(
        scrollYProgress,
        [0, 0.40, 0.50, 0.90, 1, 1],
        [1, 1, 0, 0, 1, 1]
    );
    const capturedBlueVis = useTransform(capturedBlue, (v) => (v > 0.01 ? "visible" : "hidden"));
    const capturedWhite = useTransform(
        scrollYProgress,
        [0, 0.40, 0.50, 0.90, 1, 1],
        [0, 0, 1, 1, 0, 0]
    );
    const capturedWhiteVis = useTransform(capturedWhite, (v) => (v > 0.01 ? "visible" : "hidden"));

    // Background slices (~35% hold per section)
    const bgA = useTransform(scrollYProgress, [0, 0.40, 0.50, 1], [1, 1, 0, 0]);
    const bgBBase = useTransform(scrollYProgress, [0, 0.40, 0.50, 0.90, 1, 1], [0, 0, 1, 1, 0, 0]);
    const bgBRadial = useTransform(scrollYProgress, [0, 0.45, 0.55, 0.90, 1, 1], [0, 0, 1, 1, 0, 0]);
    const bgC = useTransform(scrollYProgress, [0, 0.90, 1, 1], [0, 0, 1, 1]);

    // Content slices — A visible from start, slides up + fades out at handoff. B/C fade in at handoffs.
    const contentA = useTransform(scrollYProgress, [0, 0.45, 0.50, 1], [1, 1, 0, 0]);
    const contentAY = useTransform(scrollYProgress, [0, 0.45, 0.50, 1], ["0px", "0px", "-40px", "-40px"]);

    const contentB = useTransform(scrollYProgress, [0, 0.50, 0.55, 0.95, 1, 1], [0, 0, 1, 1, 0, 0]);
    const contentBY = useTransform(scrollYProgress, [0, 0.50, 0.55, 0.95, 1, 1], ["40px", "40px", "0px", "0px", "-40px", "-40px"]);

    const contentC = useTransform(scrollYProgress, [0, 0.95, 1, 1], [0, 0, 1, 1]);
    const contentCY = useTransform(scrollYProgress, [0, 0.95, 1, 1], ["40px", "0px", "0px", "0px"]);

    return (
        <div ref={pageRef} className="relative min-h-[300vh]">
            {/* Fixed background layers */}
            <div className="fixed inset-0 z-0 pointer-events-none">
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
            <div className="fixed top-0 left-0 right-0 z-20 pt-20 flex justify-center pointer-events-none">
                <div className="flex items-center justify-center whitespace-nowrap text-8xl italic font-bold tracking-tight leading-38">
                    <span className="relative inline-grid whitespace-nowrap" style={{ gridTemplateColumns: "1fr", gridTemplateRows: "1fr" }}>
                        <motion.span
                            style={{ opacity: capturedBlue, gridArea: "1 / 1", visibility: capturedBlueVis }}
                            className="inline-block whitespace-nowrap bg-linear-to-b from-[#678BAA] to-[#678BAA]/50 bg-clip-text text-transparent"
                        >
                            captured&nbsp;
                        </motion.span>
                        <motion.span
                            style={{ opacity: capturedWhite, gridArea: "1 / 1", visibility: capturedWhiteVis }}
                            className="inline-block whitespace-nowrap bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent"
                        >
                            captured&nbsp;
                        </motion.span>
                    </span>
                    <span className="relative inline-grid whitespace-nowrap" style={{ gridTemplateColumns: "1fr", gridTemplateRows: "1fr" }}>
                        <motion.span
                            style={{ opacity: tailA, y: tailAY, gridArea: "1 / 1", visibility: tailAVis }}
                            className="inline-block whitespace-nowrap bg-linear-to-b from-[#678BAA] to-[#678BAA]/50 bg-clip-text text-transparent"
                        >
                            with love,
                        </motion.span>
                        <motion.span
                            style={{ opacity: tailB, y: tailBY, gridArea: "1 / 1", visibility: tailBVis }}
                            className="inline-block whitespace-nowrap bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent"
                        >
                            of love,
                        </motion.span>
                        <motion.span
                            style={{ opacity: tailC, y: tailCY, gridArea: "1 / 1", visibility: tailCVis }}
                            className="inline-block whitespace-nowrap bg-linear-to-b from-[#678BAA] to-[#678BAA]/50 bg-clip-text text-transparent"
                        >
                            by love.
                        </motion.span>
                    </span>
                </div>
            </div>

            {/* Fixed content blocks — all centered, scroll-driven slide-in/lock/slide-out */}
            <div className="fixed inset-0 z-10 pointer-events-none flex items-center justify-center">
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
    );
}
