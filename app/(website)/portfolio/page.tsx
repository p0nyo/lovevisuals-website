import CardImage from "@/components/home/CardImage";



export default function Portfolio() {
    return (
            <div className="bg-[linear-gradient(to_bottom,#678BAA,#EBE8D8)] relative min-h-screen w-full flex flex-row items-center justify-center gap-8 bg-gray-500">
                <div className="relative">
                    <CardImage src="/img.jpg" alt="" width={600} height={800} />
                    <div>
                        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-8xl">
                            images
                        </h1>
                    </div>
                </div>
                <div className="relative">
                    <CardImage src="/img.jpg" alt="" width={600} height={800} />
                    <div>
                        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-8xl">
                            videos
                        </h1>
                    </div>
                </div>
            </div>
    );
}
