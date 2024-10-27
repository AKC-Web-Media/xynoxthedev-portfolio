"use client"
import Link from 'next/link';
import Image from 'next/image';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import xynoxLogo from "@/public/png/xynox-logo.png";

export default function Navbar() {
    useEffect(()=>{
        (async function () {
          const cal = await getCalApi({"namespace":"30min"});
          cal("ui", {"theme":"dark","styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
        })();
      }, [])
    return (
        <nav className="flex justify-between items-center mt-10 px-5 md:w-7/12 mx-auto">
            <div className="text-white text-lg font-bold flex flex-col">
                <Link href="/" className='flex items-center'>
                <Image
                    src={xynoxLogo}
                    alt="XynoxTheDev"
                    width={40}
                    height={40}
                >
                </Image>
                    <p>
                        XynoxTheDev    
                    </p>
                </Link>
            </div>
            <div className="text-sm flex items-center gap-1">
                <Link href="/projects" className="text-white hover:text-gray-400">
                    <Image src="/svg/projects.svg" className='sm:hidden mx-1' alt="Projects" width={20} height={20} />
                    <span className='hidden sm:block mx-2'>
                        projects
                    </span>
                </Link>
                <Link href="/blog" className="text-white hover:text-gray-400">
                    <Image src="/svg/blog.svg" className='sm:hidden mx-1' alt="Blog" width={20} height={20} />
                    <span className='hidden sm:block mx-2'>
                        blog
                    </span>
                </Link>
                <Link href="/sponsorship" className="text-white hover:text-gray-400">
                    <Image src="/svg/sponsors.svg" className='sm:hidden mx-1' alt="Sponsorship" width={20} height={20} />
                    <span className='hidden sm:block mx-2'>
                        sponsorship
                    </span>
                </Link>
                {/* <Link href="/activity" className="text-white hover:text-gray-400">
                    <Image src="/svg/activity.svg" className='sm:hidden mx-1' alt="Activity" width={20} height={20} />
                    <span className='hidden sm:block mx-2'>
                        activity
                    </span>
                </Link> */}
                <button data-cal-namespace="30min"
                    data-cal-link="xynoxthedev/30min"
                    data-cal-config='{"layout":"month_view","theme":"dark"}'
                    className="border-2 p-1 px-2 border-gray-400 rounded-xl font-bold">
                        Contact
                </button>
            </div>
        </nav>
    );
};