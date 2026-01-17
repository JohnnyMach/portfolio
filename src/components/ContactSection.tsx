import { cn } from "@/lib/Utils"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";


export const ContactSection = () => { 

    const [isSubmitting, setIsSubmitting] = useState(false);

    // reference the form
    const formRef = useRef<HTMLFormElement | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_dt7jizs";
    const templateId = "template_9bo5zkl";
    const publicKey = "k-w1z40z8Zl2ILU0I";

    try {
        await emailjs.sendForm(
            serviceId,
            templateId,
            formRef.current!,
            publicKey
        );

        toast.success("Message sent successfully! I’ll get back to you soon.");

        // Reset the form properly
        formRef.current?.reset();

    } catch (err) {
        console.error("EmailJS error:", err);
        toast.error("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
};


    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-2xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or just want to say hi? Feel free to reach out!
            </p>
            <div className="grid gridcols-1 md:grid-cols-2 gap-12 flex justify-center">
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold mb-6">
                        Contact Information
                    </h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="justify-center">
                                <h4 className="font-medium">Email </h4>
                                <a href="mailto:johnnymachado490@gmail.com" 
                                className="text-muted-foreground hover:text-primary transiction-colors">
                                    johnnymachado490@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="justify-center">
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+14377762607" 
                                className="text-muted-foreground hover:text-primary transiction-colors">
                                    +1 (437) 776-2607
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Location </h4>
                                <a className="text-muted-foreground hover:text-primary transiction-colors">
                                    Toronto, ON
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/johnnymachado" target="_blank" rel="noopener noreferrer" className="[&>svg]:h-5 [&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 448 512">
                                    <path
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/jrmachdo/" target="_blank" rel="noopener noreferrer" className="[&>svg]:h-5 [&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 448 512">
                                    <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send me a message!</h3>
                    <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm mb-2 font-medium"> 
                                Your Name
                            </label>
                            <input 
                            type="text" 
                            id="name" 
                            name="user_name" 
                            required 
                            className="w-full px-4 py-3 rounded-mb border border-input bg-background 
                            focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Johnny Machado..."/>
                        </div>
                  
                    
                        <div>
                            <label htmlFor="email" 
                            className="block text-sm mb-2 font-medium"> 
                                Your Email
                            </label>
                            <input 
                            type="email" 
                            id="email" 
                            name="user_email" 
                            required 
                            className="w-full px-4 py-3 rounded-mb border border-input bg-background 
                            focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="johnsmith@mail.com"/>
                        </div>
                    
                    
                        <div>
                            <label htmlFor="message" 
                            className="block text-sm mb-2 font-medium"> 
                                Your Message
                            </label>
                            <textarea 
                            id="message" 
                            name="message" 
                            required 
                            className="w-full px-4 py-3 rounded-mb border border-input bg-background 
                            focus:outline-hidden focus:ring-2 focus:ring-primary resize-none h-32"
                            placeholder="Hello, I'd like to chat about..."/>
                        </div>

                        <button type="submit"
                        disabled={isSubmitting}
                        className={cn("cosmic-button w-full flex items-center justify-center gap-2",    
                        )}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}