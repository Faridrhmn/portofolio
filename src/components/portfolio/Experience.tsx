import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "PT. Farma Global Teknologi",
    period: "Nov 2024 — Present",
    stack: ["Vue.js", "API", "DICOM"],
    description: "Developed and optimized healthcare systems including SIMRS and PACS. Engineered a document management system (E-Doc) to streamline digital documentation and built a PACS system from scratch.",
    link: "#"
  },
  {
    title: "Web Developer Intern",
    company: "PT. Seigan Teknologi",
    period: "Jan 2024 — Mar 2024",
    stack: ["CodeIgniter", "PHP", "MySQL"],
    description: "Built and maintained web applications using CodeIgniter. Implemented and improved system features based on project requirements while collaborating in an agile team.",
    link: "#"
  },
  {
    title: "Laboratory Assistant",
    company: "UPN Veteran Yogyakarta",
    period: "Aug 2022 — Jul 2024",
    stack: ["OOP", "Databases", "Networks"],
    description: "Mentored students in programming courses including Algorithms, OOP, Databases, and Computer Networks. Provided technical guidance and problem-solving support.",
    link: "#"
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" ref={ref}>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 transition-all hover:opacity-100 group-hover/list:opacity-50"
            >
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-50/50 lg:p-4 lg:rounded-xl">
                
                {/* Period */}
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  {exp.period}
                </header>

                {/* Content */}
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${exp.title} at ${exp.company}`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {exp.title} · <span className="inline-block">{exp.company}</span>
                          <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 ml-1 translate-y-px" />
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {exp.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                    {exp.stack.map(tech => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
