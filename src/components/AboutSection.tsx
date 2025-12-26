import { Lightbulb, Target, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Creative Problem Solver",
    description: "Deep expertise in modern web technologies and best practices",
  },
  {
    icon: Target,
    title: "Detail Oriented",
    description: "Turning complex requirements into elegant solutions",
  },
  {
    icon: Rocket,
    title: "Performance Focused",
    description: "Building fast, scalable applications that delight users",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Strong communicator bridging technical and business domains",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">About Me</p>
          <h2 className="section-title">
            Building Digital Experiences<br />
            <span className="text-gradient">That Make a Difference</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground mb-6">
            I'm an IT Undergraduate at Sri Lanka Institute of Information Technology (SLIIT), 
            specializing in Information Technology. I'm passionate about building web applications 
            that solve real-world problems with a strong foundation in both frontend and backend technologies.
          </p>
          <p className="text-muted-foreground mb-6">
            Proficient in the MERN stack (MongoDB, Express, React, Node.js) and Spring Boot, 
            I focus on writing clean, maintainable code and building systems that scale. 
            I believe in the power of modern web technologies to transform ideas into impactful 
            digital products.
          </p>
          <p className="text-muted-foreground">
            When I'm not coding, you'll find me exploring new technologies, contributing to 
            open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="glass glass-hover rounded-xl p-6 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
