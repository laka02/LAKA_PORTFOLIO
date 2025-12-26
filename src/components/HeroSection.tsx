import { Github, ArrowDown, Mail, Code2, Sparkles, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-glow opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 animate-fade-in">
              Lakshika
            </h1>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Viduranga
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Full Stack Developer
            </p>
            
            <p className="text-lg text-foreground font-medium mb-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              I Build Digital Experiences That Matter.
            </p>
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Creating beautiful, performant web applications with modern technologies. 
              Focused on clean code and exceptional user experiences.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Code2 className="w-4 h-4 text-primary" />
                Full Stack Dev
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-primary" />
                Open Source
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="w-4 h-4 text-primary" />
                IT Undergraduate
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button variant="hero" size="lg" asChild>
                <a href="https://github.com/laka02" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub Profile
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#projects">
                  <ArrowDown className="w-5 h-5" />
                  View Projects
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <div className="profile-ring w-full h-full rounded-full overflow-hidden">
                  <div className="w-full h-full rounded-full overflow-hidden bg-secondary flex items-center justify-center">
                    <span className="text-6xl sm:text-7xl md:text-8xl font-display font-bold text-muted-foreground">
                      LV
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div 
                className="floating-badge -top-4 right-4 sm:right-0"
                style={{ animationDelay: "0s" }}
              >
                <span className="text-primary font-semibold">React</span>
              </div>
              <div 
                className="floating-badge bottom-16 -left-4 sm:-left-8"
                style={{ animationDelay: "2s" }}
              >
                <span className="text-primary font-semibold">MongoDB</span>
              </div>
              <div 
                className="floating-badge bottom-4 right-8 sm:right-4"
                style={{ animationDelay: "4s" }}
              >
                <span className="text-primary font-semibold">Spring Boot</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Bar */}
      <div className="absolute bottom-0 left-0 right-0 py-8 border-t border-border/30">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Core Tech Stack
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["React", "Node.js", "Express", "MongoDB", "Spring Boot", "Java"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
