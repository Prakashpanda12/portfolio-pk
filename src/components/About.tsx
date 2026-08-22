import { Code2, Sparkles, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Architecture",
      description: "Writing scalable, maintainable, and type-safe code bases."
    },
    {
      icon: Zap,
      title: "Optimized Performance",
      description: "Fast loading times, smooth animations, and high responsiveness."
    },
    {
      icon: Sparkles,
      title: "Attention to Detail",
      description: "Perfect implementation of design systems and user experiences."
    }
  ];

  return (
    <section id="about" className="py-32 px-6 sm:px-8 border-t border-foreground/20">
      <div className="max-w-7xl mx-auto">
        {/* Title and Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground">
              ABOUT ME
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-2xl sm:text-3xl text-foreground font-light leading-relaxed tracking-tight">
              A software engineer passionate about bridging the gap between design and technology.
            </p>
          </div>
        </div>

        {/* Content and Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">
          {/* Square clean image frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm aspect-square bg-foreground/5 p-2 border border-foreground/20 relative group overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQFwtZqvWDcpVQ/profile-displayphoto-shrink_800_800/B56ZVHADfXGsAg-/0/1740652954743?e=1762992000&v=beta&t=8QIYz_ehIYK2uFdqe5BFhfh0ogeGG9VbZi5nYo_GoFU"
                alt="Prakash Kumar Panda"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none m-4"></div>
            </div>
          </div>

          {/* Text paragraph content */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I specialize in building modular web and mobile applications using React, React Native, and TypeScript. Over the past 2+ years, I have helped client companies launch robust software platforms, focusing heavily on clean UI/UX states, solid state management, and reliable integrations.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My portfolio includes high-concurrency booking systems, modern GPS attendance systems, video consult apps, and HR tools. I believe code quality, optimization, and micro-interactions are key to keeping users engaged and happy.
            </p>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-foreground/20 divide-y md:divide-y-0 md:divide-x divide-foreground/20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-8 hover:bg-foreground/5 transition-colors duration-300"
            >
              <div className="w-10 h-10 border border-foreground/20 flex items-center justify-center mb-6">
                <item.icon className="h-4 w-4 text-foreground" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2 text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
