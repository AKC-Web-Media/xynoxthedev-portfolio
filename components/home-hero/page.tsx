import profile from "@/public/profile.webp";
import Image from "next/image";
import Link from "next/link";
import github from "@/public/svg/github.svg";
import x from "@/public/svg/x.svg";
import linkedin from "@/public/svg/linkedin.svg";
import email from "@/public/svg/email.svg";
import instagram from "@/public/svg/instagram.svg";
import anilist from "@/public/svg/anilist.svg";
import steam from "@/public/svg/steam.svg";
import spotify from "@/public/svg/spotify.svg";
import buymeacoffee from "@/public/svg/buymeacoffee.svg";
import OrbitingCircles from "@/components/ui/orbiting-circles";

export default function HomeHero() {
  return (
    <>
        <div className="flex px-5 md:w-8/12 mt-24 items-center mx-auto">
            <div className="w-full">
                <h1 className="text-center md:text-left font-black text-5xl">
                    Arindam Hazra
                </h1>
                <p className="my-3 text-center md:text-left">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="mb-3 text-center md:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officia sed, minus quae aperiam eveniet repellendus vitae, quidem, quas quos. Quisquam, quidem. Quisquam, quidem.
                </p>

                <p className="mb-3 text-center md:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officia sed, minus quae aperiam eveniet repellendus vitae, 
                </p>

                <p className="mb-3 text-center md:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officia sed, minus quae aperiam eveniet repellendus vitae, quidem.
                </p>

                <hr className="" />
                <div className="flex flex-col justify-between my-3 p-6">
                    <div className="flex justify-between my-2">
                        <Link
                            href={""}
                            className="flex items-center gap-2"
                            target="_blank"
                            >
                            <Image 
                                src={linkedin}
                                alt="LinkedIn"
                                width={25}
                                height={25}
                                />
                            <p className="font-bold">
                                LinkedIn
                            </p>
                        </Link>
                        <Link
                            href={"https://github.com/xynoxthedev"}
                            className="flex items-center gap-2"
                            target="_blank"
                            >
                            <Image 
                                src={github}
                                alt="GitHub"
                                width={25}
                                height={25}
                                />
                            <p className="font-bold">
                                GitHub
                            </p>
                        </Link>
                        <Link
                            href={""}
                            className="flex items-center gap-2"
                            target="_blank"
                            >
                            <Image 
                                src={email}
                                alt="X"
                                width={25}
                                height={25}
                                />
                            <p className="font-bold">
                                Email
                            </p>
                        </Link>
                    </div>
                    <div className="flex justify-between my-2">
                    <Link
                            href={""}
                            className="flex items-center gap-2"
                            target="_blank"
                            >
                            <Image 
                                src={instagram}
                                alt="LinkedIn"
                                width={25}
                                height={25}
                                />
                            <p className="font-bold">
                                Instagram
                            </p>
                        </Link>
                        <Link
                            href={"https://github.com/xynoxthedev"}
                            className="flex items-center gap-2"
                            target="_blank"
                            >
                            <Image 
                                src={buymeacoffee}
                                alt="GitHub"
                                width={25}
                                height={25}
                                />
                            <p className="font-bold">
                                buy me a coffee
                            </p>
                        </Link>
                        <Link
                            href={""}
                            className="flex items-center gap-2"
                            target="_blank"
                            >
                            <Image 
                                src={x}
                                alt="X"
                                width={25}
                                height={25}
                                />
                            <p className="font-bold">
                                X
                            </p>
                        </Link>
                    </div>
                    <div className="flex justify-between my-2">
                    <Link
                            href={""}
                            className="flex items-center gap-2"
                            target="_blank"
                            >
                            <Image 
                                src={anilist}
                                alt="LinkedIn"
                                width={25}
                                height={25}
                                className="invert"
                                />
                            <p className="font-bold">
                                Anilist
                            </p>
                        </Link>
                        <Link
                            href={""}
                            className="flex items-center gap-2"
                            target="_blank"
                        >
                            <Image 
                                src={steam}
                                alt="GitHub"
                                width={25}
                                height={25}
                            />
                            <p className="font-bold">
                                Steam
                            </p>
                        </Link>
                        <Link
                            href={""}
                            className="flex items-center gap-2"
                            target="_blank"
                        >
                            <Image 
                                src={spotify}
                                alt="X"
                                width={25}
                                height={25}
                            />
                            <p className="font-bold">
                                Spotify
                            </p>
                        </Link>
                    </div>
                </div>
                
            </div>
            <div className="w-full justify-center hidden md:flex relative">
                <Image className="z-20 pointer-events-none" src={profile} alt="Arindam Hazra" width={450} />
                <OrbitingCircles
                    className="size-[30px] border-none bg-transparent"
                    duration={20}
                    delay={20}
                    radius={80}
                >
                    <Image 
                        src={instagram}
                        alt="LinkedIn"
                        width={25}
                        height={25}
                    />
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[30px] border-none bg-transparent"
                    duration={20}
                    delay={10}
                    radius={90}
                >
                    <Image 
                        src={linkedin}
                        alt="LinkedIn"
                        width={25}
                        height={25}
                    />
                </OrbitingCircles>
            
                {/* Outer Circles (reverse) */}
                <OrbitingCircles
                    className="size-[50px] border-none bg-transparent"
                    radius={100}
                    duration={20}
                    reverse
                >
                    <Image 
                        src={github}
                        alt="LinkedIn"
                        width={25}
                        height={25}
                    />
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[50px] border-none bg-transparent"
                    radius={110}
                    duration={20}
                    delay={20}
                    reverse
                >
                    <Image 
                        src={x}
                        alt="LinkedIn"
                        width={25}
                        height={25}
                    />
                </OrbitingCircles>
            </div>
        </div>
    </>
  );
}