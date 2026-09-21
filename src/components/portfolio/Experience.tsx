import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  link?: string;
  details: string[];
  stack: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Developer",
    company: "PT. Farma Global Teknologi",
    period: "2024 — Present",
    type: "Full-Time",
    description: "Developing enterprise healthcare software. Built an on-premise PACS middleware from scratch, maintained Hospital Information System (SIMRS) modules, and engineered digital document management services.",
    link: "#",
    details: [
      "Designed and developed a complete PACS middleware using Scala 3, Play Framework, and dcm4che for DICOM 3.0 image archiving and modality orchestration.",
      "Maintained and added features to the core web-based Hospital Information System (SIMRS) using CodeIgniter and MySQL.",
      "Built APIs and HL7 integration layers for medical data synchronization between electronic health records and radiology devices.",
      "Managed server deployments, database indexing, and application migration across on-premise hospital environments."
    ],
    stack: ["Scala 3", "Play Framework", "Vue.js", "CodeIgniter", "PostgreSQL", "MySQL", "DICOM", "HL7", "Docker", "Linux"]
  },
  {
    title: "Web Developer Intern",
    company: "PT. Seigan Teknologi",
    period: "2024",
    type: "Internship",
    description: "Built and optimized web applications using CodeIgniter and PHP. Implemented new client features and handled maintenance in an agile development sprint cycle.",
    link: "#",
    details: [
      "Developed scalable web application features using CodeIgniter, PHP, and MySQL.",
      "Refactored database queries to improve page load speed and system responsiveness.",
      "Collaborated in sprint planning, code troubleshooting, and staging environment testing."
    ],
    stack: ["CodeIgniter", "PHP", "MySQL", "JavaScript", "Bootstrap", "Git"]
  },
  {
    title: "Laboratory Assistant",
    company: "UPN \"Veteran\" Yogyakarta",
    period: "2022 — 2024",
    type: "Academic",
    description: "Guided undergraduate students in core computing laboratories, conducting weekly practical sessions, grading assignments, and providing technical troubleshooting.",
    link: "https://drive.google.com/file/d/16uEtYoA7eO38_ZncEPwuAb8JoqbonCGu/view?usp=drive_link",
    details: [
      "Instructed lab sessions for Object-Oriented Programming, Database Systems, Computer Networks, and Algorithms.",
      "Developed practical exercise modules and evaluated student project submissions.",
      "Assisted students with low-level debugging, SQL queries, and network protocol configuration."
    ],
    stack: ["OOP", "Databases", "Computer Networks", "Algorithms", "Java", "C++", "SQL"]
  },
  {
    title: "Project Management Member",
    company: "ITC UPN \"Veteran\" Yogyakarta",
    period: "2022 — 2023",
    type: "Organization",
    description: "Managed project roadmaps and team deliverables using Scrum methodology for student software engineering initiatives.",
    link: "https://drive.google.com/file/d/1bcQ2VpogM8PHvAUYU5RlKDHFrykjkla1/view?usp=drive_link",
    details: [
      "Broke down user requirements into actionable sprint backlogs and user stories.",
      "Facilitated task tracking using Trello and sprint review sessions.",
      "Coordinated between design and development teams to ensure milestones were met on schedule."
    ],
    stack: ["Scrum", "Agile", "User Stories", "Trello", "Requirements Analysis"]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" ref={ref}>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Experience
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 transition-all"
            >
              <div
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-50/50 dark:lg:hover:bg-slate-800/30 lg:p-6 lg:rounded-xl cursor-pointer"
                onClick={() => setSelectedExp(exp)}
              >
                {/* Period & Meta */}
                <header className="z-10 mb-2 mt-1 text-xs font-mono text-muted-foreground sm:col-span-2 flex flex-col gap-1">
                  <span>{exp.period}</span>
                  <span className="text-[11px] font-sans font-medium text-foreground/70">
                    {exp.type}
                  </span>
                </header>

                {/* Content */}
                <div className="z-10 sm:col-span-6 space-y-2.5">
                  <div>
                    <h3 className="font-semibold text-lg leading-snug text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1">
                      <span>{exp.title}</span>
                      <span className="text-muted-foreground font-normal">·</span>
                      <span className="text-foreground/90 font-medium">{exp.company}</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  {/* Highlights Bullet list */}
                  {exp.details && exp.details.length > 0 && (
                    <ul className="space-y-1.5 text-xs text-foreground/85 pt-1">
                      {exp.details.slice(0, 2).map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-primary font-bold select-none">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                      {exp.details.length > 2 && (
                        <li className="text-[11px] text-primary font-medium pl-3 pt-0.5">
                          + {exp.details.length - 2} more responsibilities & implementations
                        </li>
                      )}
                    </ul>
                  )}

                  {/* Tech Stack */}
                  <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                    {exp.stack.map(tech => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <span className="inline-flex items-center rounded-md bg-muted/60 px-2.5 py-1 text-xs font-mono text-foreground/80 border border-border/40">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Experience Detail Modal */}
      <Dialog open={!!selectedExp} onOpenChange={(open) => !open && setSelectedExp(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto sm:rounded-2xl p-6 sm:p-8 gap-6">
          {selectedExp && (
            <>
              <DialogHeader className="text-left space-y-1.5">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-mono text-muted-foreground">
                    {selectedExp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {selectedExp.type}
                  </span>
                </div>
                <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
                  {selectedExp.title}
                </DialogTitle>
                <DialogDescription className="text-base font-medium text-primary">
                  {selectedExp.company}
                </DialogDescription>
              </DialogHeader>

              {/* Description */}
              <div className="text-sm leading-relaxed text-foreground/85 bg-muted/20 p-3.5 rounded-lg border border-border/40">
                <p>{selectedExp.description}</p>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Key Responsibilities & Deliverables
                </h4>
                <ul className="space-y-2">
                  {selectedExp.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/90 leading-relaxed bg-muted/20 p-2.5 rounded-lg border border-border/30">
                      <span className="text-primary font-bold select-none">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Document Link */}
              {selectedExp.link && selectedExp.link !== "#" && (
                <div>
                  <a
                    href={selectedExp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <span>View Reference / Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Skills & Tools Leveraged
                </h4>
                <ul className="flex flex-wrap gap-1.5">
                  {selectedExp.stack.map(tech => (
                    <li key={tech}>
                      <span className="inline-block rounded-md bg-muted/60 px-2.5 py-1 text-xs font-mono text-foreground/80 border border-border/40">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Experience;
