import CardImage from "@/components/home/CardImage"



export default function About() {
    return (
            <div className="relative min-h-screen w-full flex flex-col items-center justify-center gap-8 bg-gray-500">
                <div className="flex flex-row w-full items-center justify-start gap-4 px-60">
                    <div className="w-full">
                        <CardImage src="/img.jpg" alt="" width={500} height={430} />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center justify-center h-full whitespace-nowrap text-9xl">
                            henlo! meow here!
                        </div>
                        <div className="text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <CardImage src="/img.jpg" alt="" width={400} height={300} />
                    <CardImage src="/img.jpg" alt="" width={400} height={300} />
                    <CardImage src="/img.jpg" alt="" width={400} height={300} />
                    <CardImage src="/img.jpg" alt="" width={400} height={300} />
                </div>
            </div>
    );
}
