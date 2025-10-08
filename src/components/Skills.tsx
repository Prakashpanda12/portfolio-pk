const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-card p-6 rounded-lg animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-background/50 px-4 py-2 rounded-md hover:bg-primary/10 transition-colors"
                  >
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
