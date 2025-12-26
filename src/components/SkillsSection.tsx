import { useState } from "react";

const categories = [
  { id: "all", name: "All" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "tools", name: "Tools & DevOps" },
  { id: "database", name: "Databases" },
];

const skills = [
  { name: "React", category: "frontend", level: "Expert" },
  { name: "TypeScript", category: "frontend", level: "Expert" },
  { name: "Next.js", category: "frontend", level: "Proficient" },
  { name: "Tailwind CSS", category: "frontend", level: "Expert" },
  { name: "Vue.js", category: "frontend", level: "Intermediate" },
  { name: "Node.js", category: "backend", level: "Expert" },
  { name: "Express", category: "backend", level: "Proficient" },
  { name: "Python", category: "backend", level: "Proficient" },
  { name: "GraphQL", category: "backend", level: "Intermediate" },
  { name: "REST APIs", category: "backend", level: "Expert" },
  { name: "Docker", category: "tools", level: "Proficient" },
  { name: "Git", category: "tools", level: "Expert" },
  { name: "AWS", category: "tools", level: "Intermediate" },
  { name: "CI/CD", category: "tools", level: "Proficient" },
  { name: "PostgreSQL", category: "database", level: "Proficient" },
  { name: "MongoDB", category: "database", level: "Proficient" },
  { name: "Redis", category: "database", level: "Intermediate" },
  { name: "Prisma", category: "database", level: "Proficient" },
];

const levelColors: Record<string, string> = {
  Expert: "text-primary",
  Proficient: "text-emerald-400",
  Intermediate: "text-amber-400",
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">Technical Skills</p>
          <h2 className="section-title">
            Technologies I <span className="text-gradient">Work With</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A comprehensive toolkit for building end-to-end web applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass glass-hover rounded-xl p-5 group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-xs font-medium mb-1 ${levelColors[skill.level]}`}>
                    {skill.level}
                  </p>
                  <h3 className="font-display font-semibold text-lg">{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
