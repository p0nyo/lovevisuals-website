import Image from "next/image";

interface CardImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export default function CardImage({ src, alt, width, height }: CardImageProps) {
    return (
        <div
            style={{ width: `${width}px`, height: `${height}px`, overflow: "hidden" }}
            className="rounded-lg"
        >
            <Image
            src={src}
            width={width}
            height={height}
            className="object-cover w-full h-full"
            alt={alt}
            />
        </div>
    );
}