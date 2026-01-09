import Image from "next/image";
import  {FiExternalLink, FiGithub} from "react-icons/fi";

const projects = [
      {
        id: 1,
        title: "1,2 Job",
        description:
            "Job Board - Plateforme de publication d’offres d’emploi avec gestion des utilisateurs et authentification.",
        image: "/projects/project2.png",
        tags: ["JavaScript", "React", "Node.js", "Express", "MySQL"],
        demoUrl: "https://1-2-job.vercel.app/",
        githubUrl: "https://github.com/wd-95/1-2-job",
    },
       {
        id: 2,
        title: "Arena Survival", 
        description:
            "Un jeu 2d d’action en arène où le joueur affronte des vagues d’ennemis toujours plus puissants.",
        image: "/projects/project3.png",
        tags: ["Java", "libGDX"],
        demoUrl: "https://github.com/wd-95/",
        githubUrl: "https://github.com/wd-95/",
    },
       
    {
        id: 3,
        title: "Hangman Game",
        description: "Jeu du pendu sur terminal en Python.",
        image: "/projects/project1.png",
        tags: ["Python"],
        demoUrl: "https://github.com/wd-95/",
        githubUrl: "https://github.com/wd-95/",
    },


];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-8 md:px-0 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center dark:text-white">
                    {" "}
                    Mes <span className="dark:text-dark text-light"> Projets </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Voici quelques projets sur lesquels j’ai travaillé récemment. 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            className="dark:bg-gray-800/30  rounded-lg overflow-hidden shadow-xl card-hover group flex flex-col h-full "
                        >
                            <div className="h-48 overflow-hidden relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className=" w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-1 ">
                             <div className="flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4 ">
                                    {project.tags.map((tag,i) => (
                                        <span key={`${project.id}-tag-${i}`} className="px-2 py-1 text-xs font-medium border rounded-full dark:text-white dark:bg-gray-800/90 dark:border-gray-200/10 border-gray-200">
                                            {tag}
                                        </span>
                                    ))}
                               </div>

                                <h3 className="text-xl font-semibold mb-1 dark:text-white"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                              </div>
                                <div className="flex justify-between items-center pt-4">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-light transition-colors duration-300"
                                        >
                                            <FiExternalLink size={20} />

                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-light transition-colors duration-300"
                                        >
                                             <FiGithub size={20} />

                                        </a>
                                    </div>
                                </div>
                            </div>
                         </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
