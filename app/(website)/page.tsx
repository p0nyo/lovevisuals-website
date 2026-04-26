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
        
            <div className="relative bg-white flex flex-col">
                <div className="z-0 absolute inset-0 bg-[radial-gradient(rgba(103,139,170,0.8)_0%,rgba(103,139,170,1))]" />
                <div className="z-10 flex flex-col items-center justify-center min-h-screen gap-4">
                    <div className="flex items-center justify-center h-full whitespace-nowrap text-9xl italic font-bold tracking-tight leading-38 bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent">
                        captured with love,
                    </div>
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
                <div className="flex items-center justify-center h-full whitespace-nowrap text-9xl italic font-bold tracking-tight leading-38 bg-linear-to-b from-[#678BAA] to-[#678BAA]/50 bg-clip-text text-transparent">
                    of &nbsp;love,
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <CardImage
                        key={index}
                        src="/img.jpg"
                        alt={`Image ${index + 1}`}
                        className="w-40 h-60 md:w-120 md:h-80"
                        />
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
                    <div className="flex items-center justify-center h-full whitespace-nowrap text-9xl italic font-bold tracking-tight leading-38 bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent">
                        by love.
                    </div>
                    <CardImage src="/img.jpg" alt="" className="h-[50vh] w-[100vh] object-cover" />
                    <div className="text-2xl font-bold tracking-wider">
                        Hi! I'm Melody and this is my photography page! Learn more about me by clicking the button below!
                    </div>
                    <GlobalButton variant="secondary" size="md" className="hover:opacity-60 transition-opacity duration-300">
                        <Link href="/about">
                            about me :)
                        </Link>
                    </GlobalButton>
                </div>
            </div>


            {/* quote section */}

            <div className="bg-[#EBE8D8] h-[50vh] flex flex-col items-end justify-end px-8 py-4">
                <div className="flex flex-col items-end text-[#678BAA] italic">
                    <p className="text-9xl font-bold tracking-wide">"Do everything in love."</p>
                    <p className="text-4xl font-bold tracking-wide italic">(1 Corinthians 16:14)</p>
                </div>
            </div>

            {/* testimonial section */}

            <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
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
