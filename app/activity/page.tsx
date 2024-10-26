import Navbar from "@/components/navbar/page"

export default function Sponsorships(){
    return <>
        <Navbar />
        <div className="flex flex-col mt-32 items-center justify-center mx-auto w-10/12">
            <h1 className="text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                GitHub Activity
            </h1>
            <p>
                My GitHub activity is a reflection of my passion for software development.
            </p>
            <div className="flex flex-col">
                <p>
                    I am an active contributor to open source projects. I have contributed to projects like:
                </p>
            </div>
            <div className="flex flex-col">
                <div className="h-">

                </div>
            </div>
        </div>
    </>
}