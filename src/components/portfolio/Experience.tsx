import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const experiences = [
  {
    title: "Software Developer",
    company: "PT. Farma Global Teknologi",
    period: "Nov 2024 — Present",
    stack: ["Vue.js", "Play Framework", "CodeIgniter", "Docker", "Git", "PostgreSQL", "RESTful API", "Agile Methodologies", "DICOM", "Microservices"],
    description: "Developed and optimized healthcare systems including SIMRS and PACS. Engineered a document management system (E-Doc) to streamline digital documentation and built a PACS system from scratch.",
    link: "#",
    details: [
      "Developed and maintained a web-based Hospital Information System (SIMRS) using CodeIgniter.",
      "Designed and developed a web-based PACS system from scratch using Play Framework.",
      "Defined system architecture, developed APIs, and managed medical imaging workflows within the PACS system."
    ]
  },
  {
    title: "Web Developer Intern",
    company: "PT. Seigan Teknologi",
    period: "Jan 2024 — Mar 2024",
    stack: ["CodeIgniter", "PHP", "MySQL"],
    description: "Built and maintained web applications using CodeIgniter. Implemented and improved system features based on project requirements while collaborating in an agile team.",
    link: "#",
    details: [
      "Developed scalable web applications utilizing the CodeIgniter framework, PHP, and MySQL.",
      "Implemented new system features and optimized existing ones based on project requirements.",
      "Collaborated effectively in an agile team environment to troubleshoot and deploy updates."
    ]
  },
  {
    title: "Laboratory Assistant",
    company: "UPN Veteran Yogyakarta",
    period: "Aug 2022 — Jul 2024",
    stack: ["OOP", "Databases", "Networks", "Problem Solving", "Mentoring", "Technical Support", "Team Collaboration"],
    description: "Mentored students in programming courses including Algorithms, OOP, Databases, and Computer Networks. Provided technical guidance and problem-solving support.",
    link: "#",
    details: [
      "Mentored and guided students in practical sessions for Algorithms, OOP, Databases, and Computer Networks.",
      "Assisted in developing and evaluating laboratory modules, assignments, and practical exams.",
      "Provided one-on-one technical troubleshooting and conceptual problem-solving support to students."
    ]
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedExp, setSelectedExp] = useState<typeof experiences[0] | null>(null);

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
              className="mb-12 transition-all"
            >
              <div
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-50/50 lg:p-4 lg:rounded-xl cursor-pointer"
                onClick={() => setSelectedExp(exp)}
              >

                {/* Period */}
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  {exp.period}
                </header>

                {/* Content */}
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <div
                        className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                        aria-label={`${exp.title} at ${exp.company}`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {exp.title} · <span className="inline-block">{exp.company}</span>
                          <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 ml-1 translate-y-px" />
                        </span>
                      </div>
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

      <Dialog open={!!selectedExp} onOpenChange={(open) => !open && setSelectedExp(null)}>
        <DialogContent className="max-w-2xl sm:rounded-2xl p-8 gap-6">
          {selectedExp && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
                  {selectedExp.title}
                </DialogTitle>
                <DialogDescription className="text-lg font-medium text-primary mt-1">
                  {selectedExp.company}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-2">
                <p className="text-sm text-muted-foreground mb-6 font-semibold uppercase tracking-wider">
                  {selectedExp.period}
                </p>
                <div className="prose prose-slate dark:prose-invert text-base leading-relaxed text-foreground/80 mb-8">
                  <p>{selectedExp.description}</p>
                  {selectedExp.details && selectedExp.details.length > 0 && (
                    <ul className="mt-5 list-outside list-disc pl-5 space-y-2 marker:text-primary/70 text-sm text-foreground/90">
                      {selectedExp.details.map((detail, idx) => (
                        <li key={idx} className="pl-1 leading-relaxed">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
                    Technologies & Skills
                  </h4>
                  <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                    {selectedExp.stack.map(tech => (
                      <li key={tech}>
                        <div className="flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Experience;
