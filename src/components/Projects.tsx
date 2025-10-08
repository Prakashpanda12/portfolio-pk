import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates and team features.",
      tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio with animations and dark mode support.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="flex-1 animated-gradient"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
