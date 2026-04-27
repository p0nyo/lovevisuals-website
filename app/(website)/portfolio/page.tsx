"use client";
import { useState } from "react";
import CardImage from "@/components/ui/CardImage";

type Tab = "images" | "videos";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>("images");

  return (
    <div className="bg-[#678BAA] relative min-h-screen w-full flex flex-col items-center">
      
      <div className="fixed top-30 z-20 flex flex-col items-center justify-center gap-6">
        <div className="flex flex-row gap-20">
          {(["images", "videos"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap cursor-pointer text-9xl italic font-bold tracking-tight leading-38 bg-linear-to-b bg-clip-text text-transparent transition-all duration-300 ${
                activeTab === tab
                  ? "from-white to-white/40"
                  : "from-white/40 to-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center gap-10 text-3xl italic font-bold tracking-tight leading-10 bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent">
          {["all", "portraits", "graduation", "weddings", "events"].map((cat) => (
            <div key={cat}>{cat}</div>
          ))}
        </div>
      </div>

      <div className="pt-90 pb-20 relative">
        <div className="fixed top-0 left-0 right-0 h-110 z-10 pointer-events-none bg-[linear-gradient(to_bottom,#678BAA_40%,transparent_100%)]" />
        
        {activeTab === "images" && (
          <div className="grid grid-cols-3 gap-8">
            {Array.from({ length: 23 }).map((_, index) => (
              <CardImage key={index} src="/img.jpg" alt="" className="w-40 h-60 md:w-100 md:h-100" />
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div className="flex flex-col gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <CardImage key={index} src="/img.jpg" alt="" className="w-40 h-60 md:w-400 md:h-200" />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}