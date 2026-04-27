"use client";
import { usePathname } from "next/navigation";
import { ReactLenis } from "lenis/react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <ReactLenis key={pathname} root>
      {children}
    </ReactLenis>
  );
}