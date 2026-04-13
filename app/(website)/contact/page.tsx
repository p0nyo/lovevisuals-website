


export default function Contact() {
    return (
            <div className="bg-[linear-gradient(to_bottom,#678BAA,#EBE8D8)] relative min-h-screen w-full py-20 px-40 bg-gray-500 flex flex-col gap-10">
                <div className="flex items-center justify-center h-full text-9xl ">
                    Get In Touch
                </div>
                <div className="w-full flex items-center justify-start">
                    <form className="w-1/2 p-6 space-y-4 bg-black rounded-2xl shadow flex flex-col">
                        <h2 className="text-2xl font-bold text-center">Contact Us</h2>

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                            type="text"
                            placeholder="Your name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Subject</label>
                            <input
                            type="text"
                            placeholder="Subject"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea
                            rows={5}
                            placeholder="Your message..."
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
    );
}
