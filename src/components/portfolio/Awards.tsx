import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import simurosot from "../../assets/simurosot.webp";
import kki from "../../assets/kki.webp";

const awards = [
  {
    title: "Finalist – Indonesian Ship Contest (KKI) 2024, Autonomous Category",
    issuer: "Pusat Prestasi Nasional (Puspresnas)",
    date: "2024",
    description: "Led a team as Team Leader and finalist in the Indonesian Ship Contest (KKI) 2024, developing an autonomous vessel system using Python for autonomous control, IoT technologies for communication and monitoring, and basic web technologies (HTML, CSS, and PHP) for the user interface.",
    image: kki
  },
  {
    title: "Recipient of Funding from the Student Creativity Program in Entrepreneurship (PKMK)",
    issuer: "RISTEK-DIKTI",
    date: "2023",
    description: "Responsible for developing the Culture Mart mobile application using Dart and Flutter, implementing core features to support arts and cultural MSMEs, integrating educational content, and managing the deployment and publication process on the Google Play Store.",
    // image: kki
    link: "https://drive.google.com/file/d/1TAa-qRbkhKNtBZyNW9WvcuKrkiAS0nNn/view?usp=drive_link"
  },
  {
    title: "3rd Place, Robot Contest (Soccer Robot Simulation Category)",
    issuer: "UPN Veteran Yogyakarta",
    date: "2022",
    description: "Achieved 3rd place in the Soccer Robot Simulation category at the Wimaya National Sports Competition by developing and implementing robot soccer strategies in a C++ simulation environment.",
    image: simurosot,
    link: "https://drive.google.com/file/d/1PK_eio5hVK7B7xGdRr4Heu231kXeUiZH/view?usp=drive_link"
  }
];

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="awards" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" ref={ref}>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Awards
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {awards.map((award, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {} as any}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 transition-all"
            >
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-50/50 lg:p-4 lg:rounded-xl">

                {/* Date */}
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  {award.date}
                </header>

                {/* Content */}
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    {award.link ? (
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                        href={award.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${award.title} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {award.title} · <span className="inline-block font-normal text-muted-foreground">{award.issuer}</span>
                          <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 ml-1 translate-y-px" />
                        </span>
                      </a>
                    ) : (
                      <div className="inline-flex items-baseline font-medium leading-tight text-foreground text-base">
                        <span>{award.title} · <span className="inline-block font-normal text-muted-foreground">{award.issuer}</span></span>
                      </div>
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {award.description}
                  </p>
                  {award.image && (
                    <img
                      src={award.image}
                      alt={award.title}
                      loading="lazy"
                      className="mt-4 w-full sm:w-2/3 lg:w-3/4 rounded-lg border border-border/50 object-cover shadow-sm transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                  )}
                </div>

              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Awards;
