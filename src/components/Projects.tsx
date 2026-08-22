import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Patient Healthcare App",
      description: "Healthcare platform with video consultations, multi-user profiles, and doctor availability tracking using ZegoCloud and Firebase Cloud Messaging.",
      tech: ["React Native", "Redux", "Firebase", "ZegoCloud"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      github: "https://github.com/Prakashpanda12",
      demo: "#"
    },
    {
      title: "Photographer Booking Platform",
      description: "Booking platform with calendar scheduling, review system, payment gateway integration with Stripe and Google Maps API.",
      tech: ["React Native", "Next.js", "Redux", "Stripe", "Google Maps"],
      image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
      github: "https://github.com/Prakashpanda12",
      demo: "#"
    },
    {
      title: "Staffezy HRMS System",
      description: "Complete HR management system with GPS attendance, project and leave management, and role-based access control.",
      tech: ["Remix.js", "TypeScript", "React Query", "Redux"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      github: "https://github.com/Prakashpanda12",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 sm:px-8 border-t border-foreground/20">
      <div className="max-w-7xl mx-auto">
        {/* Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground">
              SELECTED WORK
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-foreground/70 max-w-xl">
              A curated collection of client applications and digital systems showcasing frontend expertise and performance.
            </p>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 border-t border-foreground/20 group"
            >
              {/* Info Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40 block">
                  Project 0{index + 1}
                </span>
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-foreground group-hover:opacity-80 transition-opacity">
                  {project.title}
                </h3>
                <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs uppercase tracking-widest font-semibold border border-foreground/20 px-3 py-1.5 bg-foreground/5 text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:underline"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>

              {/* Image Frame Column */}
              <div className="lg:col-span-5">
                <div className="w-full aspect-[16/10] bg-foreground/5 border border-foreground/20 p-2 relative overflow-hidden group-hover:border-foreground transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-750 ease-out"
                  />
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
