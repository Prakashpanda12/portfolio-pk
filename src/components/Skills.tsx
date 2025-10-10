import { useState, useEffect, useRef } from "react";
import { Code2, Smartphone, Palette, Database, Wrench } from "lucide-react";

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      category: "Languages",
      icon: Code2,
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 }
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      category: "Frontend",
      icon: Smartphone,
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 85 },
        { name: "Remix.js", level: 80 },
        { name: "React Native", level: 90 }
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      category: "Styling",
      icon: Palette,
      skills: [
        { name: "Tailwind CSS", level: 95 },
        { name: "Bootstrap", level: 85 },
        { name: "Material UI", level: 80 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "State Management",
      icon: Database,
      skills: [
        { name: "Redux", level: 90 },
        { name: "React Query", level: 85 },
        { name: "Context API", level: 95 }
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      category: "Tools & Services",
      icon: Wrench,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Axios", level: 95 },
        { name: "OAuth", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "ZegoCloud", level: 80 }
      ],
      color: "from-orange-500 to-amber-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleSkills((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(".skill-category");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20 relative overflow-hidden">
      {/* Floating background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-medium"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-fast"></div>

      <div className="container mx-auto relative z-10" ref={sectionRef}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text animate-fade-in">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4 animate-scale-in"></div>
        <p className="text-center text-muted-foreground mb-16 animate-fade-in">
          Crafting digital experiences with modern technologies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const isVisible = visibleSkills.includes(categoryIndex);
            const animationDelay = categoryIndex * 150;

            return (
              <div
                key={categoryIndex}
                data-index={categoryIndex}
                className="skill-category"
              >
                <div
                  className={`skill-card group ${
                    isVisible ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{ 
                    animationDelay: `${animationDelay}ms`,
                    animationFillMode: "forwards"
                  }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center transform transition-transform group-hover:rotate-12 group-hover:scale-110`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold gradient-text">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group/skill"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-foreground font-medium group-hover/skill:text-primary transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground font-mono">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="skill-progress-bar">
                          <div
                            className={`skill-progress-fill ${
                              isVisible ? "animate-progress-fill" : ""
                            }`}
                            style={{
                              animationDelay: `${animationDelay + skillIndex * 100}ms`,
                              width: isVisible ? `${skill.level}%` : "0%"
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-10 rounded-bl-full transition-opacity group-hover:opacity-20`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative floating icons */}
        <div className="hidden lg:block">
          <div className="absolute top-40 right-20 w-16 h-16 opacity-10 animate-orbit">
            <Code2 className="w-full h-full text-primary" />
          </div>
          <div className="absolute bottom-40 left-20 w-12 h-12 opacity-10 animate-float-slow">
            <Smartphone className="w-full h-full text-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
