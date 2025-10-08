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
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground text-center mb-6">
            I'm a passionate software developer and freelancer with expertise in building 
            modern web applications. I love turning complex problems into simple, beautiful, 
            and intuitive solutions.
          </p>
          <p className="text-lg text-muted-foreground text-center">
            With years of experience in full-stack development, I specialize in creating 
            responsive, user-friendly applications that make a difference.
          </p>
        </div>

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
