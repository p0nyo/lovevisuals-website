import Image from "next/image";

interface CardImageProps {
    src: string;
    alt: string;
    className?: string;
}

export default function CardImage({ src, alt, className }: CardImageProps) {
    return (
        <div className={`relative overflow-hidden rounded-lg ${className}`}>
            <Image
                src={src}
                fill
                className="object-cover"
                alt={alt}
            />
        </div>
    );
}