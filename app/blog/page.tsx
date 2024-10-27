import Navbar from "@/components/navbar/page"

export default function Blogs(){
    return <>
        <Navbar />
        <div className="flex flex-col mt-10 items-center justify-center w-10/12 mx-auto">
            <h1 className="text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Blogs
            </h1>
            <p className="text-center text-xl mt-4 text-neutral-400">
                I will be writing blogs on various topics. Stay tuned!
            </p>
        </div>
    </>
}