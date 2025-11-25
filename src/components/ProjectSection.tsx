const projects = [
    {
        id:1,
        title: "Capstone Project",
        description: "Data Analysis of a Coffee Brand for my Capstone Project graduation at TSOM, used PowerBI and R.",
        image: "/projects/capstoneProject.png",
        tags: ["PowerBI, Excel, R"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id:2,
        title: "Calculator",
        description: "Quick project using React and CSS.",
        image: "/projects/calculator.png",
        tags: ["React, CSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/JohnnyMach/calculator.git"
    },
    {
        id:3,
        title: "Portfolio",
        description: "My Portfolio page",
        image: "/projects/portfolio.png",
        tags: ["React, Tailwind"],
        demoUrl: "#",
        githubUrl: "#"
    }
]

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured
                <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects. Each project aimed to put in practice a skill I was learning.
                I'm planing to add projects related to Data engineering.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs mx-auto font-medium border rounded-full
                                    bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-l font-semibold mb-1">
                            {project.title}
                        </h3>
                        <h3 className="text-muted-foreground text-lg">
                            {project.description}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
}