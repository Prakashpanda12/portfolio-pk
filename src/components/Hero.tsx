import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto text-center animate-fade-in">
        <div className="mb-6">
          <h2 className="text-lg md:text-xl text-muted-foreground mb-2">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 gradient-text">
            Prakash Kumar Panda
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            Frontend Developer
          </p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          2+ years of experience in React.js, React Native, and TypeScript. 
          Building responsive web and mobile applications with focus on user experience.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button size="lg" className="animated-gradient hover:scale-105 transition-transform" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
          </Button>
          <Button variant="outline" size="lg" className="hover:scale-105 transition-transform" asChild>
            <a href="#projects">
              View Projects
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="https://github.com/prakashpanda951"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/prakashkumarpanda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:prakashpanda951@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <a href="#about" className="inline-block animate-bounce">
          <ArrowDown className="h-8 w-8 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
