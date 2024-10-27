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
                <p className="my-2">
                    Indian freelance fullstack developer and open-source contributor.
                </p>
                <p className="my-2">
                    Driven by innovation while prioritizing practicality and user experience.
                </p>
                <p className="my-2">
                    Primarily working with Java, Python, JavaScript, and Node.js, with a focus on cloud platforms and efficient database management.
                </p>
                <p className="my-2">
                    Available for consulting and freelance projects. Let's connect if you're interested in working together or just want to chat! ✌️
                </p>
                <hr className="bg-slate-500 border-0 h-0.5" />
                <div className="flex flex-row justify-between items-center my-3 p-6">
                    <Link
                        href={"https://www.linkedin.com/in/arindamhazra/"}
                        className="flex items-center gap-2"
                        target="_blank"
                        >
                        <Image 
                            src={linkedin}
                            alt="LinkedIn"
                            width={25}
                            height={25}
                        />
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
                    </Link>
                    <Link
                        href={"https://www.instagram.com/xynoxthedev/"}
                        className="flex items-center gap-2"
                        target="_blank"
                        >
                        <Image 
                            src={instagram}
                            alt="Instagram"
                            width={25}
                            height={25}
                        />
                    </Link>
                    {/* <Link
                        href={"https://github.com/xynoxthedev"}
                        className="flex items-center gap-2"
                        target="_blank"
                        >
                        <Image 
                            src={buymeacoffee}
                            alt="Buy me a Coffee"
                            width={25}
                            height={25}
                        />
                    </Link> */}
                    <Link
                        href={"https://x.com/Arindamz03"}
                        className="flex items-center gap-2"
                        target="_blank"
                        >
                        <Image 
                            src={x}
                            alt="X"
                            width={25}
                            height={25}
                        />
                    </Link>
                    <Link
                        href={"https://steamcommunity.com/id/xynoxthedev/"}
                        className="flex items-center gap-2"
                        target="_blank"
                    >
                        <Image 
                            src={steam}
                            alt="Steam"
                            width={25}
                            height={25}
                        />
                    </Link>
                    <Link
                        href={"https://anilist.co/user/Xynox/"}
                        className="flex items-center gap-2"
                        target="_blank"
                        >
                        <Image 
                            src={anilist}
                            alt="AniList"
                            width={25}
                            height={25}
                            className="invert"
                        />
                    </Link>
                    <Link
                        href={"https://open.spotify.com/user/zrei8evwinfjy9d27fjon68hh"}
                        className="flex items-center gap-2"
                        target="_blank"
                    >
                        <Image 
                            src={spotify}
                            alt="Spotify"
                            width={25}
                            height={25}
                        />
                    </Link>
                    <Link
                        href={"connect@xynoxthedev.xyz"}
                        className="flex items-center gap-2"
                        target="_blank"
                        >
                        <Image 
                            src={email}
                            alt="email"
                            width={25}
                            height={25}
                        />
                    </Link>
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