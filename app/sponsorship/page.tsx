import Navbar from "@/components/navbar/page"
import Link from "next/link"
import Image from "next/image"
import sponsorImage from "@/public/png/sponsor.png"

export default function Sponsorships(){
    return <>
        <Navbar />
        <div className="flex flex-col mt-32 items-center justify-center mx-auto w-10/12 md:w-5/12">
            <p className="text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Sponsorship Program
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Natus non nulla temporibus quod! Distinctio deserunt 
                repellendus quo, eum, ex soluta porro odio adipisci illo 
                quasi eaque nam labore hic at?
            </p>
            <div className="my-5">
                <Link href="/apply" className="mx-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
                    Apply Now
                </Link>
                <Link href="/learn-more" className="mx-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
                    Learn More
                </Link>
            </div>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Natus non nulla temporibus quod! Distinctio deserunt 
                repellendus quo, eum, ex soluta porro odio adipisci illo 
                quasi eaque nam labore hic at?
            </p>
            <hr className="border-dotted border-gray-500 my-5 border-0.5 w-11/12"/>
            <Image src={sponsorImage} width={800} height={500} className="rounded-lg" alt=""/>
        </div>
    </>
}