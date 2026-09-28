import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const skillCategories = [
  {
    title: "Backend & Healthcare Protocols",
    skills: [
      "Scala 3", "Play Framework", "DICOM 3.0", "HL7", "dcm4che",
      "CodeIgniter", "PHP", "Python", "C++", "RESTful APIs"
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      "Vue.js", "React", "TypeScript", "Next.js", "JavaScript (ES6+)",
      "Flutter", "Dart", "Tailwind CSS", "Bootstrap", "HTML5/CSS3"
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL", "MySQL", "SQLite", "Firebase"
    ],
  },
  {
    title: "AI & Modern Developer Tooling",
    skills: [
      "Agentic AI Workflows (Antigravity)", "Open-Source LLMs (DeepSeek, Hermes)",
      "Tool Calling & Function Calling", "Prompt Engineering", "Local LLM Inference"
    ],
  },
  {
    title: "DevOps, Systems & Methods",
    skills: [
      "Docker", "Linux", "Nginx", "Systemd", "Git", "GitHub",
      "IoT / Telemetry", "Postman", "Scrum", "Agile Methodologies"
    ],
  },
];

const certifications = [
  {
    title: "Junior Web Programmer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "2024 — 2027",
    link: "https://drive.google.com/file/d/1dW7WANn77-UoPn0ijdTDql3hdbvrN1Iv/view",
  },
  {
    title: "Associate Data Science",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "2024 — 2027",
    link: "https://drive.google.com/file/d/1vwmGh3KVHe6LUL6GxVsQfQioYzT5BnWD/view",
  },
  {
    title: "Scrum Fundamentals Certified (SFC)",
    issuer: "SCRUMstudy",
    date: "2022",
    link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=938806",
  },
  {
    title: "Learn the Basics of JavaScript Programming",
    issuer: "Dicoding Indonesia",
    date: "2023",
    link: "https://www.dicoding.com/certificates/JMZV1WO6RXN9",
  },
  {
    title: "Learn the Basics of Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    date: "2023",
    link: "https://www.dicoding.com/certificates/2VX366K7QXYQ",
  },
  {
    title: "Learn the Basics of Project Management",
    issuer: "Dicoding Indonesia",
    date: "2023",
    link: "https://www.dicoding.com/certificates/4EXGNMMDQZRL",
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" ref={ref}>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Skills & Certifications
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="space-y-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-1.5" aria-label={`${category.title} skills`}>
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-block rounded-md bg-muted/60 px-3 py-1 text-xs font-mono text-foreground/85 border border-border/40 hover:border-primary/40 hover:text-primary transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
            Certifications & Credentials
          </h3>
          <ul className="space-y-3">
            {certifications.map((cert, index) => (
              <li key={index}>
                <div className="group flex items-baseline justify-between gap-4 p-3 rounded-lg border border-border/40 bg-muted/20 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <div className="space-y-0.5">
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        <span>{cert.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-foreground">
                        {cert.title}
                      </span>
                    )}
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground shrink-0">
                    {cert.date}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
