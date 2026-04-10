"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 w-full px-14 py-6 z-50">
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
                                        "text-xl font-bold italic transition-colors",
                                        isActive
                                            ? "text-white font-semibold"
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
                    <div>instagram</div>
                    <div>email</div>
                </div>
            </div>
        </nav>
    );
}
