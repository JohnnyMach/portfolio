import { NavBar } from "@/components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from '@/components/StarBackground';
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectSection } from "@/components/ProjectSection";
import { ContactSection } from "@/components/ContactSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme Toggle*/}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* NavBar */}
        <NavBar />
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
        </main>

        {/* Footer */}
        </div>;
}