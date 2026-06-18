import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const certifications = [
  {
    title: "Professional Certification Name",
    issuer: "Issuing Organization",
    date: "2023",
  },
  {
    title: "Technical Certification Name",
    issuer: "Certifying Body",
    date: "2022",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="certifications" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" ref={ref}>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Certifications
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {certifications.map((cert, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 transition-all hover:opacity-100 group-hover/list:opacity-50"
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
                      <span className="inline-flex items-baseline font-medium leading-tight text-foreground text-base">
                        {cert.title}
                      </span>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>

              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Certifications;
