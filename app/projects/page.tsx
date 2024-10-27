import Navbar from "@/components/navbar/page"
import Link from 'next/link'

interface FrameworkCard {
    name: string
    description: string
    repo: string
    link: string
  }
  
  const frameworks: FrameworkCard[] = [
    {
        name: 'A468',
        description: 'A468 is a program that uses a webcam to detect objects and manipulate them in real-time.',
        repo: '@xynoxthedev/a468',
        link: "https://github.com/xynoxthedev/a468"
    },
    {
        name: 'Dude Perfect Discord Bot',
        description: 'Multi-purpose Discord Bot — Moderation, Management, Utilities, Fun and more ',
        repo: '@Dude-Perfect-Discord-Bot/Dude-Perfect',
        link: ""
    },
    {
        name: 'Pizza Brand Website',
        description: 'A website for a pizza brand that allows users to order pizza online.',
        repo: "",
        link: ""
    },
  ]

export default function Projects(){
    return <>
        <Navbar />
        <div className="flex flex-col mt-10 items-center justify-center">
            <p className="text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Projects
            </p>
            <p className="font-bold">
                Here are some of the projects I have worked on.
            </p>
        </div>
        <div className="p-8">
      <div className="flex flex-wrap justify-center max-w-4xl mx-auto">
        {frameworks.map((framework) => (
          <div key={framework.name} className="bg-gray-800 rounded-xl p-6 m-2 w-full md:w-[calc(50%-1rem)] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-white">{framework.name}</h2>
              </div>
              <p className="text-gray-400 text-sm mb-4">{framework.description}</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-blue-400">
                <Link
                    href={framework.link}
                    passHref
                    className="flex items-center"
                    target="_blank"
                >
                    <span>{framework.repo}</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
}