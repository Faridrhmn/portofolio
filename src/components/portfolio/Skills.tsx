import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Technical Skills",
    skills: [
      { name: "Skill One", level: 90 },
      { name: "Skill Two", level: 85 },
      { name: "Skill Three", level: 80 },
      { name: "Skill Four", level: 75 },
    ],
  },
  {
    title: "Software & Tools",
    skills: [
      { name: "Tool One", level: 95 },
      { name: "Tool Two", level: 85 },
      { name: "Tool Three", level: 80 },
      { name: "Tool Four", level: 70 },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Leadership", level: 90 },
      { name: "Communication", level: 95 },
      { name: "Problem Solving", level: 85 },
      { name: "Team Collaboration", level: 90 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">What I Bring</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-gradient-card border border-border rounded-xl p-6 shadow-card"
            >
              <h3 className="text-xl font-semibold mb-6 text-gradient">{category.title}</h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h4 className="text-lg font-medium mb-6">Other Skills</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["Skill A", "Skill B", "Skill C", "Skill D", "Skill E", "Skill F", "Skill G", "Skill H"].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-secondary border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
