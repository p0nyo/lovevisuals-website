"use client";
import { useRef } from "react";
import { motion, useTransform, easeInOut, useMotionValue, useAnimationFrame } from "framer-motion";

export default function ScrollWordSwap2() {
  const scrollYProgress = useMotionValue(0);

  // auto-drive from 0 → 1 over 3 seconds
  const startTime = useRef<number | null>(null);
  const DURATION = 3000; // ms

  useAnimationFrame((t) => {
    if (startTime.current === null) startTime.current = t;
    const elapsed = t - startTime.current;
    const progress = Math.min(elapsed / DURATION, 1);
    scrollYProgress.set(progress);
  });

  const withOpacity = useTransform(scrollYProgress, [0, 0.20], [1, 0], { ease: easeInOut });
  const withY       = useTransform(scrollYProgress, [0, 0.20], [0, -16], { ease: easeInOut });

  const ofOpacity   = useTransform(scrollYProgress, [0.20, 0.40, 0.70], [0, 1, 0], { ease: easeInOut });
  const ofY         = useTransform(scrollYProgress, [0.20, 0.40, 0.70], [16, 0, -16], { ease: easeInOut });

  const byOpacity   = useTransform(scrollYProgress, [0.70, 1], [0, 1], { ease: easeInOut });
  const byY         = useTransform(scrollYProgress, [0.70, 1], [16, 0], { ease: easeInOut });

  return (
    <div className="h-screen flex items-center justify-center bg-black overflow-hidden">
      <h1 className="text-6xl md:text-8xl font-bold text-white flex items-center gap-1">
        captured&nbsp;
        <span className="relative inline-block w-[340px] h-[1.2em]">
          {[
            { style: { opacity: withOpacity, y: withY }, text: "with love," },
            { style: { opacity: ofOpacity,   y: ofY   }, text: "of love,"   },
            { style: { opacity: byOpacity,   y: byY   }, text: "by love."   },
          ].map(({ style, text }) => (
            <motion.span
              key={text}
              style={style}
              className="absolute inset-0 flex items-center pointer-events-none whitespace-nowrap"
            >
              {text}
            </motion.span>
          ))}
        </span>
      </h1>
    </div>
  );
}