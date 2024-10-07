import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="py-10 mx-auto w-7/12">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link href="/">XynoxTheDev</Link>
                </div>
                <div className={`w-full lg:flex lg:items-center lg:w-auto`}>
                    <div className="text-sm lg:flex-grow">
                        <Link href="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
                            projects
                        </Link>
                        <Link href="/blog" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
                            blog
                        </Link>
                        <Link href="/sponsorship" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
                            sposorphip
                        </Link>
                        <Link href="/activity" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
                            activity
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};