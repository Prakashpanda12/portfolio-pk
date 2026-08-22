import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prakashpanda951@gmail.com",
      href: "mailto:prakashpanda951@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7377474183",
      href: "tel:+917377474183"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhubaneswar, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 sm:px-8 border-t border-foreground/20 bg-foreground/[0.01]">
      <div className="max-w-7xl mx-auto">
        {/* Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground">
              GET IN TOUCH
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-foreground/70 max-w-xl">
              Have a project in mind, want to discuss software systems, or need professional freelance frontend work?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Info (Left) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-display font-bold text-foreground">
              Let's build something remarkable.
            </h3>
            
            <div className="border border-foreground/20 divide-y divide-foreground/20 bg-background">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-6 p-6 hover:bg-foreground/5 transition-colors"
                >
                  <div className="w-10 h-10 border border-foreground/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-foreground/40 mb-1">{item.label}</p>
                    <p className="font-semibold text-foreground break-all">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7 border border-foreground/20 p-8 sm:p-10 bg-background">
            <form className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs uppercase tracking-widest font-bold text-foreground/60">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="rounded-none border-foreground/20 focus-visible:ring-foreground focus-visible:ring-offset-0 placeholder:text-foreground/30 text-foreground bg-transparent"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs uppercase tracking-widest font-bold text-foreground/60">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-none border-foreground/20 focus-visible:ring-foreground focus-visible:ring-offset-0 placeholder:text-foreground/30 text-foreground bg-transparent"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs uppercase tracking-widest font-bold text-foreground/60">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Describe your project goals..."
                  className="rounded-none border-foreground/20 focus-visible:ring-foreground focus-visible:ring-offset-0 min-h-[150px] placeholder:text-foreground/30 text-foreground bg-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full hover-fill-inv bg-foreground text-background text-xs uppercase tracking-widest font-bold border border-foreground py-4 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
