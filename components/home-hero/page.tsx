import profile from "@/public/profile.webp";
import Image from "next/image";
import Link from "next/link";
import github from "@/public/svg/github.svg";
import x from "@/public/svg/x.svg";
import linkedin from "@/public/svg/linkedin.svg";

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
                <div className="flex justify-between my-3 p-6">
                    <Link
                        href={""}
                        className="flex items-center space-x-2"
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
                        className="flex items-center space-x-2"
                    >
                        <Image 
                            src={x}
                            alt="X"
                            width={25}
                            height={25}
                        />
                        <p className="font-bold">
                            Twitter
                        </p>
                    </Link>
                    <Link
                        href={""}
                        className="flex items-center space-x-2"
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
                </div>
                
            </div>
            <div className="w-full justify-center hidden md:flex">
                <Image src={profile} alt="Arindam Hazra" width={500} />
            </div>
        </div>
    </>
  );
}