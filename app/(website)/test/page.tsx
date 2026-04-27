import Image from "next/image";
import CardImage from "@/components/ui/CardImage";
import Link from "next/link";
import GlobalButton from "@/components/ui/GlobalButton";
import ScrollWordSwap from "./CapturedSection";
import ScrollWordSwap2 from "./ScrollStorySection";
import ScrollWordSwap3 from "./ScrollSection3";
import ScrollSection4 from "./ScrollSection4";


// super quick prototyping, will remove section comments and separate into proper component structure later lol 
export default function Landing() {
    return (
        <>
            {/* <ScrollWordSwap /> */}
            {/* <ScrollWordSwap2 /> */}
            <ScrollWordSwap3 />
            {/* <ScrollSection4 /> */}
        </>
    );
}
