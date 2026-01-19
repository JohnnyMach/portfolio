import { BriefcaseBusiness, Code, DatabaseIcon } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
        <div className="gradient-border p-6 card-hover">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                <img className="rounded-full h-60 w-55 mx-auto" src="src\files\fotovisto-att.JPG" />
                    <h3 className="text-xl font-semibold"> Software engineer and aspiring Data Engineer</h3>
                    <p className="text-muted-foreground">
                        I'm a data-driven engineer with roots in software development, databases, and scalable systems. 
                        With experience in full-stack engineering and project management, 
                        I'm passionate about turning data into reliable, actionable insights and delivering solutions 
                        that improve technical systems and the user's experience.
                    </p>
                    

                </div>

                <div className="grid grid-cols-1 gap-6">

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <DatabaseIcon className="h-6 w-6 text-primary"/>
                            </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Data Engineer
                                    </h4>
                                        <p className="text-muted-foreground">
                                            {" "}
                                            Aspiring Data Engineer focused on building reliable pipelines 
                                            and optimized databases to support smart data-driven decisions
                                        </p>
                            </div>
                        </div>
                   
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Software Engineer
                                    </h4>
                                        <p className="text-muted-foreground">
                                            {" "}
                                            Full-stack Software Engineer improving performance, reducing errors, 
                                            and delivering scalable, user-focused technical solutions.
                                        </p>
                            </div>
                        </div>
                    
                    
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <BriefcaseBusiness className="h-6 w-6 text-primary"/>
                            </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Assistant Project Manager
                                    </h4>
                                        <p className="text-muted-foreground">
                                            {" "}
                                            Coordinated teams, improving onboarding, 
                                            and removing blockers to ensure smooth, timely project delivery.
                                        </p>
                            </div>
                        </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a href="#contact" className="cosmic-button">
                            {""}
                            Get in touch
                        </a>
                        {""}
                        <a href="src\files\JohnnyMachado_Resume.pdf" download="" 
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 
                        transition-colors duration-300">
                            {""}
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
}