import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Core Technologies",
    skills: ["JavaScript", "TypeScript", "React", "Vue.js", "Node.js", "PHP", "CodeIgniter", "MySQL", "PostgreSQL", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Architecture & Tools",
    skills: ["RESTful APIs", "DICOM", "PACS", "SIMRS", "Git", "GitHub", "Postman", "Vite", "Figma", "Docker", "Linux"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" ref={ref}>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Skills
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-4">{category.title}</h3>
            <ul className="flex flex-wrap gap-2" aria-label={`${category.title} skills`}>
              {category.skills.map((skill) => (
                <li key={skill}>
                  <div className="flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium leading-5 text-primary">
                    {skill}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
