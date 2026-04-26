import CardImage from "@/components/ui/CardImage"


export default function About() {
    return (
            <div className="bg-white relative min-h-screen w-full flex">
                <div className="z-0 absolute inset-0 bg-[radial-gradient(rgba(103,139,170,0.8)_0%,rgba(103,139,170,1))]" />

                <div className="z-10 flex flex-col items-center justify-center gap-8 px-100">
                    <div className="flex flex-row w-full items-center justify-center">
                        <div className="flex items-center justify-center h-full whitespace-nowrap text-9xl italic font-bold tracking-tight leading-normal bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent">
                            by Melody.
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-80 md:h-76" />
                        <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-80 md:h-76" />
                        <CardImage src="/img.jpg" alt="" className="w-40 h-60 md:w-80 md:h-76" />
                    </div>
                    <div className="text-xl italic tracking-tight">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    </div>
                    <div className="flex flex-row gap-10 text-3xl italic tracking-tight font-bold">
                        <div> 
                            @_love.visuals_
                        </div>
                        <div>
                            lovevisualsphotos@gmail.com
                        </div>
                    </div>
                </div>
            </div>
    );
}
