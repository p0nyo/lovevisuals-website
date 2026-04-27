"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";
import CardImage from "@/components/ui/CardImage";
import GlobalButton from "@/components/ui/GlobalButton";

export default function ScrollSection4() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const withDisplay = useTransform(scrollYProgress, (v) => v >= 0.30 ? "none" : "flex");
  const withOpacity = useTransform(scrollYProgress, [0, 0.30], [1, 0], { ease: easeInOut });
  const withY       = useTransform(scrollYProgress, [0, 0.30], [0, -16], { ease: easeInOut });

  const ofOpacity   = useTransform(scrollYProgress, [0.15, 0.40, 0.65], [0, 1, 0], { ease: easeInOut });
  const ofY         = useTransform(scrollYProgress, [0.15, 0.40, 0.65], [16, 0, -16], { ease: easeInOut });

  const byOpacity   = useTransform(scrollYProgress, [0.55, 0.75], [0, 1], { ease: easeInOut });
  const byY         = useTransform(scrollYProgress, [0.55, 0.75], [16, 0], { ease: easeInOut });

  return (
    <div ref={pageRef}>

      {/* sticky animated title — overlays the whole page */}
      <div className="sticky top-8 z-50 flex justify-center pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold italic tracking-tight text-white drop-shadow-lg flex items-center whitespace-nowrap">
          captured{" "}
          <span className="relative inline-block w-[320px] h-[1.2em] overflow-hidden">
            <motion.span style={{ opacity: withOpacity, y: withY, display: withDisplay }}
              className="absolute inset-0 items-center whitespace-nowrap">
              with love,
            </motion.span>
            <motion.span style={{ opacity: ofOpacity, y: ofY }}
              className="absolute inset-0 flex items-center whitespace-nowrap">
              of love,
            </motion.span>
            <motion.span style={{ opacity: byOpacity, y: byY }}
              className="absolute inset-0 flex items-center whitespace-nowrap">
              by love.
            </motion.span>
          </span>
        </h1>
      </div>

      {/* landing section */}
      <div className="z-0 relative min-h-screen w-full">
        <Image src="/love-visuals-landing-image-1.webp" alt="Background" fill style={{ objectFit: "cover" }} priority />
        <div className="absolute inset-0 h-[50vh] bg-[linear-gradient(to_bottom,#678BAA,rgba(103,139,170,0))]" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10">
          <Image src="/love-visuals-landing-title.svg" alt="Overlay" width={700} height={700} />
        </div>
      </div>

      {/* captured with love section */}
      <div className="relative bg-white flex flex-col">
        <div className="z-0 absolute inset-0 bg-[radial-gradient(rgba(103,139,170,0.8)_0%,rgba(103,139,170,1))]" />
        <div className="z-10 flex flex-col items-center justify-center min-h-screen gap-4">
          <div className="flex items-center gap-4">
            <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-70 md:h-90" />
            <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-70 md:h-120" />
            <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-70 md:h-90" />
            <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-70 md:h-120" />
            <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-70 md:h-90" />
          </div>
          <h1 className="text-white text-2xl font-bold text-center tracking-wider">
            Every moment has a story. Let's capture yours in a way you'll cherish forever.
          </h1>
          <Link href="/contact">
            <GlobalButton variant="secondary" size="md" className="hover:opacity-60 transition-opacity duration-300">
              start your chapter...
            </GlobalButton>
          </Link>
        </div>
      </div>

      {/* captured of love section */}
      <div className="bg-[#EBE8D8] min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <CardImage key={index} src="/img.jpg" alt={`Image ${index + 1}`} className="w-40 h-60 md:w-100 md:h-60" />
          ))}
        </div>
        <Link href="/portfolio">
          <GlobalButton variant="primary" size="md" className="hover:opacity-60 transition-opacity duration-300">
            view my gallery &lt;3
          </GlobalButton>
        </Link>
      </div>

      {/* captured by love section */}
      <div className="relative bg-white flex flex-col">
        <div className="z-0 absolute inset-0 bg-[radial-gradient(rgba(103,139,170,0.85)_0%,rgba(103,139,170,1))]" />
        <div className="z-10 flex flex-col items-center justify-center gap-4 min-h-screen">
          <CardImage src="/img.jpg" alt="" className="h-[50vh] w-[100vh] object-cover" />
          <div className="text-2xl font-bold tracking-wider">
            Hi! I'm Melody and this is my photography page! Learn more about me by clicking the button below!
          </div>
          <GlobalButton variant="secondary" size="md" className="hover:opacity-60 transition-opacity duration-300">
            <Link href="/about">about me :)</Link>
          </GlobalButton>
        </div>
      </div>

      {/* quote section */}
      <div className="bg-[#EBE8D8] h-[30vh] flex flex-col items-end justify-end px-8 py-4">
        <div className="flex flex-col items-end text-[#678BAA] italic">
          <p className="text-9xl font-bold tracking-wide">"Do everything in love."</p>
          <p className="text-4xl font-bold tracking-wide italic">(1 Corinthians 16:14)</p>
        </div>
      </div>

      {/* testimonial section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
        <Image src="/love-visuals-landing-image-1.webp" alt="Background" fill style={{ objectFit: "cover" }} priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="z-10 flex flex-col items-center text-[#EBE8D8]">
          <p className="text-7xl font-bold tracking-wider italic">"100/10 recommended!"</p>
          <p className="text-4xl font-bold tracking-wider italic">- Jocelyn Lee</p>
        </div>
      </div>

    </div>
  );
}