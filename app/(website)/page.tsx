import Image from "next/image";
import CardImage from "@/components/ui/CardImage";
import Link from "next/link";
import GlobalButton from "@/components/ui/GlobalButton";


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
            
            {/* captured with love section */}
        
            <div className="relative bg-[#EBE8D8] flex flex-col py-20">
                
                <div className="z-10 flex flex-col items-center justify-center gap-8">
                    <div className="flex items-center justify-center h-full whitespace-nowrap text-8xl italic font-bold leading-38 bg-linear-to-b from-[#678BAA] to-[#678BAA]/50 bg-clip-text text-transparent">
                        captured with love,
                    </div>
                    <div className="flex items-center gap-4">
                        <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-70 md:h-90" />
                        <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-70 md:h-120" />
                        <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-70 md:h-90" />
                        <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-70 md:h-120" />
                        <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-70 md:h-90" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6">
                        <h1 className="text-2xl font-bold italic text-center tracking-tight bg-linear-to-b from-[#678BAA] to-[#678BAA]/50 bg-clip-text text-transparent">
                            Every moment has a story. Let's capture yours in a way you'll cherish forever.
                        </h1>
                        <Link href="/contact">
                            <GlobalButton variant="primary" size="md" className="hover:opacity-60 transition-opacity duration-300">
                                start your chapter...
                            </GlobalButton>
                        </Link>
                    </div>
                </div>
            </div>

            {/* captured of love section */}

            <div className="relative bg-white flex flex-col py-20">
                <div className="z-0 absolute inset-0 bg-[radial-gradient(rgba(103,139,170,0.8)_0%,rgba(103,139,170,1))]" />
                <div className="z-10 flex flex-col items-center justify-center gap-10">
                    <div className="flex items-center justify-center h-full whitespace-nowrap text-8xl italic font-bold tracking-tight leading-38 bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent">
                        captured of &nbsp;love,
                    </div>
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
                </div>
            </div>

            {/* captured by love section */}

            <div className="relative bg-[#EBE8D8] flex flex-col py-20">
                <div className="z-10 flex flex-col items-center justify-center gap-10">
                    <div className="flex items-center justify-center h-full whitespace-nowrap text-8xl italic font-bold tracking-tight leading-38 bg-linear-to-b from-[#678BAA] to-[#678BAA]/50 bg-clip-text text-transparent">
                        captured by love.
                    </div>
                    <CardImage src="/img.jpg" alt="" className="h-[50vh] w-[100vh] object-cover" />
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h1 className="text-2xl font-bold italic text-center tracking-tight bg-linear-to-b from-[#678BAA] to-[#678BAA]/50 bg-clip-text text-transparent">
                            Hi! I'm Melody and this is my photography page! Learn more about me by clicking the button below!
                        </h1>
                        <GlobalButton variant="primary" size="md" className="hover:opacity-60 transition-opacity duration-300">
                            <Link href="/about">
                                about me :)
                            </Link>
                        </GlobalButton>
                    </div>
                </div>
            </div>


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
