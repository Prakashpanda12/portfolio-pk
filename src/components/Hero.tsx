import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-between pt-32 px-6 sm:px-8 relative overflow-hidden">
      {/* Editorial Grid layout */}
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main big headline */}
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground/60 block">
              Based in India / Available Worldwide
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold leading-[0.9] text-foreground">
              PRAKASH
              <br />
              KUMAR PANDA
            </h1>
          </div>

          {/* Subtext and links on the right side */}
          <div className="lg:col-span-4 lg:pt-16 space-y-8">
            <p className="text-lg text-foreground/80 leading-relaxed max-w-md">
              A frontend developer with over 2 years of experience crafting high-performance, visually stunning web and mobile applications using React, TypeScript, and React Native.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="hover-fill text-xs uppercase tracking-widest font-semibold border border-foreground px-6 py-4 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="hover-fill-inv bg-foreground text-background text-xs uppercase tracking-widest font-semibold border border-foreground px-6 py-4 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee row / Ticker at bottom of hero */}
      <div className="w-full border-t border-b border-foreground/20 py-6 overflow-hidden bg-foreground/5 select-none my-12">
        <div className="marquee-content whitespace-nowrap text-xs sm:text-sm font-display font-bold tracking-[0.2em] uppercase">
          <span>
            REACT.JS • TYPESCRIPT • REACT NATIVE • REDUX • NEXT.JS • TAILWIND CSS • SHADCN/UI • FULLSTACK INTEGRATIONS • MOBILE DEV •
          </span>
          <span>
            REACT.JS • TYPESCRIPT • REACT NATIVE • REDUX • NEXT.JS • TAILWIND CSS • SHADCN/UI • FULLSTACK INTEGRATIONS • MOBILE DEV •
          </span>
        </div>
      </div>

      {/* Scroll indicator & Socials */}
      <div className="max-w-7xl mx-auto w-full pb-8 flex items-center justify-between">
        <div className="flex gap-6">
          <a
            href="https://github.com/Prakashpanda12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors hover:scale-110 transform"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/prakashkumarpanda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors hover:scale-110 transform"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:prakashpanda951@gmail.com"
            className="text-foreground/60 hover:text-foreground transition-colors hover:scale-110 transform"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <a href="#about" className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-foreground/60 hover:text-foreground transition-colors">
          Scroll Down <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
