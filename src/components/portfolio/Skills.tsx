import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const skillCategories = [
  {
    title: "Core Technologies",
    skills: [
      "Vue.js", "Play Framework", "PHP", "CodeIgniter",
      "JavaScript", "TypeScript", "React", "Dart", "Flutter",
      "Python", "C++", "PostgreSQL", "MySQL", "HTML5", "CSS3", "Tailwind CSS"
    ],
  },
  {
    title: "Architecture & Tools",
    skills: [
      "Microservices", "RESTful APIs", "DICOM", "PACS", "SIMRS",
      "Docker", "Git", "GitHub", "Agile", "Scrum", "Project Management",
      "Trello", "Postman", "Linux", "IoT"
    ],
  },
];

const certifications = [
  {
    title: "Junior Web Programmer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "2024 - 2027",
    link: "https://drive.google.com/file/d/1dW7WANn77-UoPn0ijdTDql3hdbvrN1Iv/view",
  },
  {
    title: "Associate data science",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "2024 - 2027",
    link: "https://drive.google.com/file/d/1vwmGh3KVHe6LUL6GxVsQfQioYzT5BnWD/view",
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
    title: "Getting Started with Programming to Become a Software Developer",
    issuer: "Dicoding Indonesia",
    date: "2023",
    link: "https://www.dicoding.com/certificates/L4PQ83VYVZO1",
  },
  {
    title: "Learn the Basics of Project Management",
    issuer: "Dicoding Indonesia",
    date: "2023",
    link: "https://www.dicoding.com/certificates/4EXGNMMDQZRL",
  },
  {
    title: "Scrum Fundamentals Certified (SFC)",
    issuer: "SCRUMstudy",
    date: "2022",
    link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=938806",
  },
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
        <div className="space-y-8">
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
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-6">Certifications</h3>
          <ol className="group/list">
            {certifications.map((cert, index) => (
              <li
                key={index}
                className="mb-8 transition-all"
              >
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-50/50 lg:p-4 lg:rounded-xl">

                  {/* Date */}
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                    {cert.date}
                  </header>

                  {/* Content */}
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-foreground">
                      <div>
                        {cert.link ? (
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                            href={cert.link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${cert.title} (opens in a new tab)`}
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            <span>
                              {cert.title}
                              <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 ml-1 translate-y-px" />
                            </span>
                          </a>
                        ) : (
                          <span className="inline-flex items-baseline font-medium leading-tight text-foreground text-base">
                            {cert.title}
                          </span>
                        )}
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>

                </div>
              </li>
            ))}
          </ol>
        </div>

      </motion.div>
    </section>
  );
};

export default Skills;
