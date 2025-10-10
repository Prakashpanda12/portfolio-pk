import { Briefcase, GraduationCap, Award, Download } from "lucide-react";
import { Button } from "./ui/button";

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
      institution: "University/College Name",
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
    <section id="resume" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Resume
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Download Button */}
          <div className="flex justify-center mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume PDF
            </Button>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold gradient-text">Experience</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

              {experience.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative pl-16 pb-12 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                  
                  <div className="glass-card p-6 rounded-lg hover:scale-[1.02] transition-transform">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold gradient-text">Education</h3>
            </div>

            {education.map((edu, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-lg animate-fade-in hover:scale-[1.02] transition-transform"
                style={{ animationDelay: `${(experience.length + index) * 0.2}s` }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold gradient-text">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="glass-card p-4 rounded-lg flex items-center gap-3 animate-fade-in hover:scale-105 transition-transform"
                  style={{ animationDelay: `${(experience.length + education.length + index) * 0.1}s` }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-foreground">{cert}</span>
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
