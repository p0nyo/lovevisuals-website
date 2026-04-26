"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

const navLinks = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "portfolio", href: "/portfolio" },
    { name: "contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="absolute top-0 left-0 w-full px-14 py-6 z-50">
            <div className="flex items-center justify-between">
                <div className="flex space-x-8">
                    <Image
                        src="/logo-no-bg.svg"
                        alt="Overlay"
                        width={53}
                        height={55}
                    />

                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={clsx(
                                        "text-2xl font-extrabold italic transition-colors",
                                        isActive
                                            ? "text-white font-black"
                                            : "text-white/70 hover:text-white",
                                    )}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-row space-x-4">
                    <a
                    href="https://instagram.com/_lovevisuals_"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <FaInstagram className="w-10 h-10" />
                    </a>
                    <a
                    href="mailto:your email@example.com"
                    >
                        <FaEnvelope className="w-10 h-10" />
                    </a>
                </div>
            </div>
        </nav>
    );
}
