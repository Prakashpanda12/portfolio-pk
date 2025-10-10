import { Code2, Sparkles, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code is my passion"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising on quality"
    },
    {
      icon: Sparkles,
      title: "Creative Solutions",
      description: "Innovative approaches to solve complex problems"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"></div>

        {/* Photo and Description Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
                
                {/* Avatar container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float-slow">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary p-1 avatar-glow">
                    <div className="w-full h-full rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                        alt="Prakash Kumar Panda"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating orbs */}
                <div className="floating-orb w-20 h-20 bg-primary -top-10 -left-10 animate-float-medium"></div>
                <div className="floating-orb w-16 h-16 bg-secondary -bottom-8 -right-8 animate-float-fast"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div className="animate-fade-in">
                <p className="text-lg text-muted-foreground mb-4">
                  I'm a passionate software developer and freelancer specializing in modern web and mobile applications. 
                  With extensive experience in <span className="text-primary font-medium">React.js</span>, <span className="text-primary font-medium">React Native</span>, 
                  and <span className="text-primary font-medium">TypeScript</span>, I create intuitive and scalable solutions.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  I've successfully delivered projects ranging from healthcare platforms with video consultations 
                  to booking systems with payment integration and comprehensive HRMS solutions. My approach combines 
                  technical excellence with creative problem-solving to build applications that users love.
                </p>
                <p className="text-lg text-muted-foreground">
                  When I'm not coding, I'm exploring new technologies, contributing to open-source projects, 
                  and continuously learning to stay at the forefront of web development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-lg hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
