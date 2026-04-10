import Image from "next/image";
import CardImage from "@/components/home/CardImage";
import Link from "next/link";


// super quick prototyping, will separate into components and add proper structure later lol
export default function Landing() {
    return (
        <>
            <div className="relative h-screen w-full">
                <Image
                    src="/love-visuals-landing-image-1.webp"
                    alt="Background"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10">
                    <Image
                        src="/love-visuals-landing-title.svg"
                        alt="Overlay"
                        width={700}
                        height={700}
                    />
                </div>
            </div>
            <div className="bg-gray-500 flex flex-col items-center justify-center min-h-screen">
                <div className="flex items-center gap-4">
                    <CardImage src="/img.jpg" alt="" width={300} height={550} />
                    <CardImage src="/img.jpg" alt="" width={300} height={700} />
                    <CardImage src="/img.jpg" alt="" width={300} height={550} />
                    <CardImage src="/img.jpg" alt="" width={300} height={700} />
                    <CardImage src="/img.jpg" alt="" width={300} height={550} />
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-center mt-8 tracking-wider">
                        Every moment has a story. Let's capture yours in a way you'll cherish forever.
                    </h1>
                    <Link href="/contact">
                        <button className="mt-6 px-6 py-3 bg-white text-black rounded-sm text-lg">
                            start your chapter...
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-300 min-h-screen flex flex-col items-center justify-center p-4">
                <div className="grid grid-cols-3 gap-8">
                    <CardImage src="/img.jpg" alt="Image 1" width={500} height={350} />
                    <CardImage src="/img.jpg" alt="Image 1" width={500} height={350} />
                    <CardImage src="/img.jpg" alt="Image 1" width={500} height={350} />
                    <CardImage src="/img.jpg" alt="Image 1" width={500} height={350} />
                    <CardImage src="/img.jpg" alt="Image 1" width={500} height={350} />
                    <CardImage src="/img.jpg" alt="Image 1" width={500} height={350} />
                    <CardImage src="/img.jpg" alt="Image 1" width={500} height={350} />
                    <CardImage src="/img.jpg" alt="Image 1" width={500} height={350} />
                    <CardImage src="/img.jpg" alt="Image 1" width={500} height={350} />
                </div>
                <Link href="/portfolio">
                    <button className="mt-6 px-6 py-3 bg-white text-black rounded-sm text-lg" >
                        view my gallery
                    </button>
                </Link>
            </div>

            <div className="bg-gray-500 h-[50vh] flex flex-col items-end justify-end px-8 py-4">
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
