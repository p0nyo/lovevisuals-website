import Image from "next/image";
import CardImage from "@/components/ui/CardImage";
import Link from "next/link";
import GlobalButton from "@/components/ui/GlobalButton";


// super quick prototyping, will separate into components and add proper structure later lol
export default function Landing() {
    return (
        <>
            <div className="z-0 relative h-screen w-full">
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
            
            <div className="z-10 bg-[linear-gradient(to_bottom,#678BAA,#EBE8D8)] flex flex-col items-center justify-center min-h-screen">
                <div className="flex items-center gap-4">
                    <CardImage src="/img.jpg" alt="" className="w-50 h-60 md:w-75 md:h-138" />
                    <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-75 md:h-174" />
                    <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-75 md:h-138" />
                    <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-75 md:h-174" />
                    <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-75 md:h-138" />
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-[#678BAA] text-4xl font-bold text-center mt-8 tracking-wider">
                        Every moment has a story. Let's capture yours in a way you'll cherish forever.
                    </h1>
                    <Link href="/contact">
                        <GlobalButton variant="primary" size="md" className="mt-6 hover:opacity-60 transition-opacity duration-300">
                            start your chapter...
                        </GlobalButton>
                    </Link>
                </div>
            </div>

            <div className="bg-[#EBE8D8] min-h-screen flex flex-col items-center justify-center p-4">
                <div className="grid grid-cols-3 gap-8">
                    <CardImage src="/img.jpg" alt="Image 1" className="w-40 h-60 md:w-126 md:h-88" />
                    <CardImage src="/img.jpg" alt="Image 1" className="w-40 h-60 md:w-126 md:h-88" />
                    <CardImage src="/img.jpg" alt="Image 1" className="w-40 h-60 md:w-126 md:h-88" />
                    <CardImage src="/img.jpg" alt="Image 1" className="w-40 h-60 md:w-126 md:h-88" />
                    <CardImage src="/img.jpg" alt="Image 1" className="w-40 h-60 md:w-126 md:h-88" />
                    <CardImage src="/img.jpg" alt="Image 1" className="w-40 h-60 md:w-126 md:h-88" />
                    <CardImage src="/img.jpg" alt="Image 1" className="w-40 h-60 md:w-126 md:h-88" />
                    <CardImage src="/img.jpg" alt="Image 1" className="w-40 h-60 md:w-126 md:h-88" />
                    <CardImage src="/img.jpg" alt="Image 1" className="w-40 h-60 md:w-126 md:h-88" />
                </div>
                <Link href="/portfolio">
                    <GlobalButton variant="primary" size="md" className="mt-6 hover:opacity-60 transition-opacity duration-300">
                        view my gallery &lt;3
                    </GlobalButton>
                </Link>
            </div>

            <div className="bg-[linear-gradient(to_bottom,#EBE8D8,#678BAA)] h-[50vh] flex flex-col items-end justify-end px-8 py-4">
                <div className="flex flex-col items-end">
                    <p className="text-9xl font-bold tracking-wider">"Do everything in love."</p>
                    <p className="text-4xl font-bold tracking-wider italic">(1 Corinthians 16:14)</p>
                </div>
            </div>

            <div className="bg-gray-300 min-h-screen flex flex-col items-center justify-center p-4">
                <div className="flex flex-col items-center text-black">
                    <p className="text-7xl font-bold tracking-wider italic">"100/10 recommended!"</p>
                    <p className="text-4xl font-bold tracking-wider italic">- Jocelyn Lee</p>
                </div>
            </div>
        </>
    );
}
