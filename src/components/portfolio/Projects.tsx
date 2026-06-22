import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import mockupAksaralibrasi from '../../assets/mockup-aksaralibrasi.webp';

const projects = [
  {
    title: "Web-Based PACS System",
    description: "A short description of the project goes here. Explain what the project does and the technologies used.",
    image: "https://placehold.co/600x400/png",
    stack: ["Play Framework", "React", "Scala"]
  },
  {
    title: "Javanese Script Image Detection System",
    description: "A Python (Flask)-based web application for Javanese script recognition that uses the Freeman Chain Code (FCC) feature extraction method and the Support Vector Machine (SVM) machine learning algorithm.",
    image: mockupAksaralibrasi,
    link: "https://bachelor-thesis.faridrhmn.my.id/",
    stack: ["Python", "Flask", "SVM", "FCC", "HTML/CSS", "JavaScript", " Bootstrap"]
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" ref={ref}>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 transition-all"
            >
              <div className="group relative flex flex-col gap-4 pb-4 transition-all lg:hover:!opacity-100 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-50/50 lg:p-6 lg:rounded-xl">

                {/* Image */}
                <div className="z-10 w-full">
                  <img
                    alt={project.title}
                    src={project.image}
                    loading="lazy"
                    className="w-full aspect-video rounded-lg border border-border/50 object-cover shadow-sm transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </div>

                {/* Content */}
                <div className="z-10 w-full mt-2">
                  <h3>
                    {project.link ? (
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {project.title}
                          <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 ml-1 translate-y-px" />
                        </span>
                      </a>
                    ) : (
                      <div className="inline-flex items-baseline font-medium leading-tight text-foreground text-base">
                        <span>{project.title}</span>
                      </div>
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                    {project.stack.map((tech) => (
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
        </ul>
      </div>
    </section>
  );
};

export default Projects;
