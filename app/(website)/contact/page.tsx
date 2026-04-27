import GlobalButton from "@/components/ui/GlobalButton";


export default function Contact() {
    const fields = [
        { label: "Name*", type: "text", placeholder: "Your name" },
        { label: "Email*", type: "email", placeholder: "you@example.com" },
        { label: "Instagram Handle*", type: "text", placeholder: "@example" },
        { label: "What Type of Photoshoot*", type: "text", placeholder: "Dropdown" },
        { label: "Shoot Details*", type: "text", placeholder: "Date/time" },
        { label: " ", type: "text", placeholder: "Budget" },
        { label: "", type: "text", placeholder: "Location" },
        { label: "How Did You Hear About Me?*", type: "text", placeholder: "Dropdown" },
        { label: "Message*", type: "textarea", placeholder: "Your message..." },
    ];
    return (
            <div className="bg-white relative min-h-screen flex">
                <div className="z-0 absolute inset-0 bg-[radial-gradient(rgba(103,139,170,0.85)_0%,rgba(103,139,170,1))]" />
                <div className="z-10 w-full py-20 px-40 flex flex-col gap-10">
                    <div className="flex items-center justify-center h-full whitespace-nowrap text-9xl italic font-bold tracking-tight leading-38 bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent">
                        get in touch!
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <form className="w-1/2 p-6 space-y-4 flex flex-col">
                            {fields.map(({ label, type, placeholder }) => (
                                <div key={label}>
                                    <label className="text-md font-extrabold">{label}</label>
                                    {type === "textarea" ? (
                                    <textarea
                                        rows={5}
                                        placeholder={placeholder}
                                        className="w-full px-4 py-2 bg-white/90 text-black placeholder:text-gray-400 placeholder:italic rounded-sm focus:outline-none"
                                    />
                                    ) : (
                                    <input
                                        type={type}
                                        placeholder={placeholder}
                                        className="w-full px-4 py-2 rounded-sm bg-white/90 text-black placeholder:text-gray-400 placeholder:italic focus:outline-none"
                                    />
                                    )}
                                </div>
                            ))}

                        </form>
                        <GlobalButton type="submit" variant="secondary" size="md" className="hover:opacity-60 transition-opacity duration-300">
                            send message!
                        </GlobalButton>
                    </div>
                </div>
            </div>
    );
}
