import { Code2, Smartphone, Palette, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      icon: Code2,
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 }
      ]
    },
    {
      category: "Frontend",
      icon: Smartphone,
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 85 },
        { name: "Remix.js", level: 80 },
        { name: "React Native", level: 90 }
      ]
    },
    {
      category: "Styling",
      icon: Palette,
      skills: [
        { name: "Tailwind CSS", level: 95 },
        { name: "Bootstrap", level: 85 },
        { name: "Material UI", level: 80 }
      ]
    },
    {
      category: "State Management",
      icon: Database,
      skills: [
        { name: "Redux", level: 90 },
        { name: "React Query", level: 85 },
        { name: "Context API", level: 95 }
      ]
    },
    {
      category: "Tools & Services",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "REST APIs", level: 95 },
        { name: "ZegoCloud", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 sm:px-8 border-t border-foreground/20 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto">
        {/* Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground">
              SKILLS & EXPERTISE
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-foreground/70 max-w-xl">
              A comprehensive toolkit cultivated to deliver responsive web apps, high-fidelity interfaces, and optimized performance benchmarks.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="border border-foreground/20 p-8 hover:border-foreground transition-colors duration-300 bg-background"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 border border-foreground/20 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-foreground" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, sIndex) => (
                    <div key={sIndex} className="space-y-2">
                      <div className="flex justify-between text-xs uppercase tracking-widest font-semibold text-foreground/80">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      {/* Clean flat progress line */}
                      <div className="h-[2px] bg-foreground/10 w-full relative">
                        <div
                          className="h-full bg-foreground absolute left-0 top-0 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
