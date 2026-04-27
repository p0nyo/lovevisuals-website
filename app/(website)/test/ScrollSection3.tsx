"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";

export default function ScrollWordSwap3() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const withDisplay = useTransform(scrollYProgress, (v) => v >= 0.30 ? "none" : "flex");


  const withOpacity = useTransform(scrollYProgress, [0, 0.30], [1, 0], { ease: easeInOut });
  const withY       = useTransform(scrollYProgress, [0, 0.30], [0, -16], { ease: easeInOut });

  const ofOpacity   = useTransform(scrollYProgress, [0.15, 0.40, 0.80], [0, 1, 0], { ease: easeInOut });
  const ofY         = useTransform(scrollYProgress, [0.15, 0.40, 0.80], [16, 0, -16], { ease: easeInOut });

  const byOpacity   = useTransform(scrollYProgress, [0.70, 1], [0, 1], { ease: easeInOut });
  const byY         = useTransform(scrollYProgress, [0.70, 1], [16, 0], { ease: easeInOut });
  return (
    <div ref={ref} className="h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center bg-black overflow-hidden">
        <h1 className="text-6xl md:text-8xl font-bold text-white flex items-center gap-1">
          captured&nbsp;
          <span className="relative inline-block w-[340px] h-[1.2em]">
            {[
              { style: { opacity: withOpacity, y: withY, display: withDisplay }, text: "with love," },
              { style: { opacity: ofOpacity,   y: ofY   }, text: "of \u00A0love,"   },
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
    </div>
  );
}

