import type { Metadata } from "next";
import { Alegreya } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ReactLenis } from 'lenis/react';

const alegreya = Alegreya({
    variable: "--font-alegreya",
    subsets: ["latin"],
    style: ["normal", "italic"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Love Visuals Photography",
    description: "Captured with love, of love, by love.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${alegreya.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col font-alegreya">
                <ReactLenis root>
                    <Navbar />
                    {children}
                    <Footer />
                </ReactLenis>
            </body>
        </html>
    );
}
