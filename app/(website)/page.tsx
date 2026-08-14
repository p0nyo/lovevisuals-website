import Image from "next/image";
import CapturedExperience from "@/components/captured/CapturedExperience";


// super quick prototyping, will remove section comments and separate into proper component structure later lol
export default function Landing() {
    return (
        <>
            {/* landing section */}

            <div className="z-0 relative min-h-screen w-full">
                <Image
                    src="/love-visuals-landing-image-1.webp"
                    alt="Background"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute inset-0 h-[50vh] bg-[linear-gradient(to_bottom,#678BAA,rgba(103,139,170,0))]" />
                <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10">
                    <Image
                        src="/love-visuals-landing-title.svg"
                        alt="Overlay"
                        width={700}
                        height={700}
                    />
                </div>
            </div>

            {/* captured experience — pinned section with title/bg/content transitions */}
            <CapturedExperience />

            {/* quote section */}

            <div className="bg-[#678BAA] h-[30vh] flex flex-col items-end justify-end px-8 py-4">
                <div className="flex flex-col items-end text-[#EBE8D8] italic">
                    <p className="text-9xl font-bold tracking-wide">"Do everything in love."</p>
                    <p className="text-4xl font-bold tracking-wide italic">(1 Corinthians 16:14)</p>
                </div>
            </div>

            {/* testimonial section */}

            <div className="relative flex flex-col items-center justify-center h-[70vh]">
                <Image
                    src="/love-visuals-landing-image-1.webp"
                    alt="Background"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute inset-0 bg-black/50"/>
                <div className="z-10 flex flex-col items-center text-[#EBE8D8]">
                    <p className="text-7xl font-bold tracking-wider italic">"100/10 recommended!"</p>
                    <p className="text-4xl font-bold tracking-wider italic">- Jocelyn Lee</p>
                </div>
            </div>
        </>
    );
}
