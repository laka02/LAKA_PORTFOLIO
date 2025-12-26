import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
    username: "@johndoe",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    username: "John Doe",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/1234567890",
    username: "+1 234 567 890",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">Get In Touch</p>
          <h2 className="section-title">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            I'm currently open to new opportunities and collaborations. Whether you have a 
            project in mind or just want to connect, feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email Card */}
          <div className="glass glass-hover rounded-2xl p-8 text-center group">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xl mb-2">Email Me</h3>
            <p className="text-muted-foreground text-sm mb-6">
              I'll respond within 24 hours
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:hello@johndoe.dev">
                Send a Message
              </a>
            </Button>
          </div>

          {/* Social Links Card */}
          <div className="glass glass-hover rounded-2xl p-8 text-center group">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xl mb-2">Connect</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Find me on social platforms
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group/link"
                >
                  <link.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground group-hover/link:text-foreground transition-colors">
                    {link.username}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
