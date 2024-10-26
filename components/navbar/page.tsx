import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center mt-10 px-5 md:w-7/12 mx-auto">
            <div className="text-white text-lg font-bold">
                <Link href="/">XynoxTheDev</Link>
            </div>
            <div className="text-sm flex items-center">
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
                        sposorphip
                    </span>
                </Link>
                {/* <Link href="/activity" className="text-white hover:text-gray-400">
                    <Image src="/svg/activity.svg" className='sm:hidden mx-1' alt="Activity" width={20} height={20} />
                    <span className='hidden sm:block mx-2'>
                        activity
                    </span>
                </Link> */}
            </div>
        </nav>
    );
};