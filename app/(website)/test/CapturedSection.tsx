"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";

export default function ScrollWordSwap() {
  const ref = useRef<HTMLDivElement>(null);

  const [word, setWord] = useState<"withlove" | "oflove" | "bylove">("withlove");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (v < 0.33) setWord("withlove");
      else if (v < 0.66) setWord("oflove");
      else setWord("bylove");
    });
  }, [scrollYProgress]);

  return (
    <div ref={ref} className="h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center bg-black overflow-hidden">

        <h1 className="text-6xl md:text-8xl font-bold text-white">
          captured&nbsp;

          <span className="inline-block w-65 text-center relative">

            <AnimatePresence mode="wait">

              {word === "withlove" && (
                <motion.span
                  key="withlove"
                  initial={{ y: 40, opacity: 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="whitespace-nowrap"
                >
                  with love,
                </motion.span>
              )}

              {word === "oflove" && (
                <motion.span
                  key="oflove"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.1, ease: "easeInOut" }}
                  className="whitespace-nowrap"
                >
                  of &nbsp;love,
                </motion.span>
              )}

              {word === "bylove" && (
                <motion.span
                  key="bylove"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="whitespace-nowrap"
                >
                  by love.
                </motion.span>
              )}

            </AnimatePresence>

          </span>

        </h1>

      </div>
    </div>
  );
}