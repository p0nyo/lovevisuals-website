import type { Metadata } from "next";
import { Alegreya } from "next/font/google";
import "@/app/globals.css";

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Love Visuals Photography",
  description: "Do it with love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${alegreya.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
