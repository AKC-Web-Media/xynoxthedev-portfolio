import Navbar from "@/components/navbar/page"

const projects = [
    {
        title: "Project 1",
        description: "This is project 1",
        image: "https://via.placeholder.com/150",
        github_repo: "xynoxthedev/xynoxthedev",
        github_Link: "https://github.com/xynoxthedev/xynoxthedev",
        stars: 0,
        stargazers: 0,
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
        <div className="flex ">
            {projects.map((project, index) => {
                return (   
                    <div key={index} className="flex flex-row items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-bold text-lg">{project.title}</p>
                            <p className="font-bold text-sm">{project.description}</p>
                            <div className="flex items-center justify-center space-x-5">
                                <a href={project.github_Link} className="flex items-center space-x-2">
                                    <img src="https://via.placeholder.com/30" alt="GitHub" className="w-5 h-5" />
                                    <p className="font-bold">GitHub</p>
                                </a>
                                <p className="font-bold">{project.stars} Stars</p>
                            </div>
                        </div>
                        <img src={project.image} alt="Project 1" className="w-48 h-48 rounded-full" />
                    </div>
                ) 
            })}
        </div>
    </>
}