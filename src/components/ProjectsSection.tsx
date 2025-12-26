import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    featured: true,
    image: null,
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, drag-and-drop interfaces, and team workspaces.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    featured: false,
    image: null,
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered application that generates marketing content, blog posts, and social media captions using GPT.",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    featured: false,
    image: null,
    github: "https://github.com",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "Interactive dashboard for monitoring business metrics with customizable widgets and data visualization.",
    tags: ["React", "D3.js", "WebSocket", "Redis"],
    featured: false,
    image: null,
    github: "https://github.com",
    live: "https://example.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-glow opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">Projects</p>
          <h2 className="section-title">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A selection of projects showcasing end-to-end development skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass glass-hover rounded-2xl overflow-hidden group ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-secondary/50 flex items-center justify-center relative overflow-hidden">
                <span className="text-4xl font-display font-bold text-muted-foreground/30">
                  {project.title.split(" ").map(w => w[0]).join("")}
                </span>
                {project.featured && (
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
