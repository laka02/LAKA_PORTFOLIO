import { GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";

const education = {
  degree: "BSc. Computer Science",
  institution: "University of Technology",
  period: "2019 - 2023",
  description:
    "Specializing in Software Engineering and Web Development. Building a strong foundation in algorithms, data structures, and modern development practices.",
  highlights: ["Web Development", "Software Engineering", "Database Systems", "Cloud Computing"],
};

const certifications = [
  { name: "AWS Certified Developer", number: 1 },
  { name: "React Advanced Patterns", number: 2 },
  { name: "Node.js Mastery", number: 3 },
  { name: "TypeScript Expert", number: 4 },
];

const experience = [
  {
    title: "Full Stack Developer",
    company: "Tech Startup",
    period: "2023 - Present",
    description:
      "Building and maintaining web applications using React, Node.js, and PostgreSQL. Leading frontend architecture decisions.",
  },
  {
    title: "Frontend Developer Intern",
    company: "Digital Agency",
    period: "2022 - 2023",
    description:
      "Developed responsive user interfaces and implemented design systems. Collaborated with designers on UI/UX improvements.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">
            Education & Experience
          </p>
          <h2 className="section-title">
            My <span className="text-gradient">Journey</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Education */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl">Education</h3>
              </div>

              <div className="border-l-2 border-primary/30 pl-6 ml-2">
                <div className="relative">
                  <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary" />
                  <p className="text-xs text-primary font-medium mb-1">{education.period}</p>
                  <h4 className="font-display font-semibold text-lg">{education.degree}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{education.institution}</p>
                  <p className="text-muted-foreground text-sm mb-4">{education.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {education.highlights.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl">Certifications</h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/30 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                      {cert.number}
                    </span>
                    <span className="text-sm">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl">Experience</h3>
            </div>

            <div className="border-l-2 border-primary/30 pl-6 ml-2 space-y-8">
              {experience.map((exp, index) => (
                <div key={exp.title} className="relative">
                  <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary" />
                  <p className="text-xs text-primary font-medium mb-1">{exp.period}</p>
                  <h4 className="font-display font-semibold text-lg">{exp.title}</h4>
                  <p className="text-muted-foreground text-sm mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
