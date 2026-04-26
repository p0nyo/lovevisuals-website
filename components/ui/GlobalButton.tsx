import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
}

export default function GlobalButton({
    variant = "primary",
    size = "md",
    className,
    ...props
}: ButtonProps) {
    return (
        <button
        className={clsx(
            "cursor-pointer inline-flex items-center justify-center rounded-sm transition disabled:opacity-50",
            {
            "bg-[#678BAA] text-[#EBE8D8]": variant === "primary",
            "bg-white text-[#678BAA]": variant === "secondary",
            "bg-transparent hover:bg-gray-100": variant === "ghost",
            },
            {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-xl font-black": size === "md",
            "px-8 py-4 text-xl": size === "lg",
            },
            className
        )}
        {...props}
        />
    );
}