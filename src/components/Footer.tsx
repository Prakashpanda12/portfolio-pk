import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 sm:px-8 border-t border-foreground/20 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Brand & Copyright */}
        <div className="text-xs uppercase tracking-widest font-bold text-foreground/50 text-center md:text-left">
          <span>© {currentYear} P.K. PANDA. ALL RIGHTS RESERVED.</span>
        </div>

        {/* Right Side: Social Media Links */}
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/Prakashpanda12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest font-bold text-foreground/75 hover:text-foreground transition-colors flex items-center gap-2"
          >
            <Github className="h-4 w-4" /> Github
          </a>
          <a
            href="https://linkedin.com/in/prakashkumarpanda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest font-bold text-foreground/75 hover:text-foreground transition-colors flex items-center gap-2"
          >
            <Linkedin className="h-4 w-4" /> Linkedin
          </a>
          <a
            href="mailto:prakashpanda951@gmail.com"
            className="text-xs uppercase tracking-widest font-bold text-foreground/75 hover:text-foreground transition-colors flex items-center gap-2"
          >
            <Mail className="h-4 w-4" /> Mail
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
