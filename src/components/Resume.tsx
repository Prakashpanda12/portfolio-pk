import { Briefcase, GraduationCap, Award, Download } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2020 - Present",
      description: "Developed modern web and mobile applications using React, React Native, and TypeScript for various clients worldwide.",
      achievements: [
        "Built 15+ production-ready applications",
        "Specialized in React Native mobile development",
        "Integrated complex features like video calling, payment gateways, and real-time tracking"
      ]
    },
    {
      title: "React Native Developer",
      company: "Healthcare Project",
      period: "2023",
      description: "Led development of a comprehensive healthcare application with video consultations and multi-user management.",
      achievements: [
        "Implemented ZegoCloud video calling integration",
        "Built Redux state management architecture",
        "Integrated Firebase Cloud Messaging for notifications"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Biju Patnaik University of Technology",
      period: "2016 - 2020",
      description: "Focused on software engineering, data structures, and web technologies"
    }
  ];

  const certifications = [
    "React Native Certification",
    "Advanced JavaScript & TypeScript",
    "Redux State Management",
    "Firebase & Cloud Services"
  ];

  return (
    <section id="resume" className="py-32 px-6 sm:px-8 border-t border-foreground/20">
      <div className="max-w-7xl mx-auto">
        {/* Title and Download Button */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground">
              CURRICULUM VITAE
            </h2>
          </div>
          <div className="lg:col-span-8 flex justify-start lg:justify-end">
            <a
              href="#"
              className="hover-fill text-xs uppercase tracking-widest font-semibold border border-foreground px-6 py-4 flex items-center gap-2 transition-colors bg-background"
            >
              <Download className="h-4 w-4" /> Download Resume PDF
            </a>
          </div>
        </div>

        {/* Resume Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column - Experience */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h3 className="text-xl font-display font-bold text-foreground/40 mb-8 tracking-widest uppercase">
                Work Experience
              </h3>

              <div className="space-y-12 border-l border-foreground/20 pl-6 sm:pl-8 ml-2">
                {experience.map((exp, index) => (
                  <div key={index} className="relative group">
                    {/* Tiny square timeline node */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 bg-foreground border border-background"></div>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-xl font-display font-bold text-foreground">
                          {exp.title}
                        </h4>
                        <span className="text-xs uppercase tracking-widest font-semibold text-foreground/60">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm font-semibold uppercase text-foreground/80 tracking-wider">
                        {exp.company}
                      </p>
                      <p className="text-foreground/75 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                      
                      <ul className="space-y-2 pt-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-xs text-foreground/60 flex items-start gap-2">
                            <span className="text-foreground">—</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education inside same column */}
            <div className="pt-8">
              <h3 className="text-xl font-display font-bold text-foreground/40 mb-8 tracking-widest uppercase">
                Education
              </h3>

              <div className="space-y-12 border-l border-foreground/20 pl-6 sm:pl-8 ml-2">
                {education.map((edu, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 bg-foreground border border-background"></div>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-xl font-display font-bold text-foreground">
                          {edu.degree}
                        </h4>
                        <span className="text-xs uppercase tracking-widest font-semibold text-foreground/60">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm font-semibold uppercase text-foreground/80 tracking-wider">
                        {edu.institution}
                      </p>
                      <p className="text-foreground/75 leading-relaxed text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Certifications */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-xl font-display font-bold text-foreground/40 mb-8 tracking-widest uppercase">
              Certifications
            </h3>

            <div className="border border-foreground/20 divide-y divide-foreground/20">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 hover:bg-foreground/5 transition-colors duration-300 flex items-center gap-3 text-sm text-foreground/80 font-medium"
                >
                  <div className="w-1.5 h-1.5 bg-foreground"></div>
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
