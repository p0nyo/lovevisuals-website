import Image from "next/image";

export default function Landing() {
  return (
    <>
      <div className="relative h-screen w-full">
        <Image
          src="/love-visuals-landing-image-1.webp"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="h-full min-h-screen">
        <h1 className="text-4xl font-bold text-center mt-8">
          Welcome to Love Visuals
        </h1>
        <p className="text-center mt-4 text-lg">
          Discover the beauty of love through our stunning visuals.
        </p>
      </div>
    </>
  );
}
