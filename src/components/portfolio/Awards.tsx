import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink, Camera } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import simurosot from "../../assets/simurosot.webp";
import kki from "../../assets/kki.webp";
import pkmkActivity from "../../assets/pkm-k.webp";

interface AwardItem {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  role: string;
  description: string;
  image?: string;
  imageCaption?: string;
  link?: string;
  highlights: string[];
  stack: string[];
}

const awards: AwardItem[] = [
  {
    title: "Finalist – Indonesian Ship Contest (KKI) 2024, Autonomous Category",
    issuer: "Pusat Prestasi Nasional (Puspresnas) - Kemendikbudristek",
    date: "2024",
    badge: "National Finalist",
    role: "Team Leader & Autonomous Control",
    description: "Led the engineering team in the national Indonesian Ship Contest (KKI) 2024. Designed and built an autonomous surface vessel capable of real-time obstacle avoidance, waypoint tracking, and remote sensor telemetry.",
    image: kki,
    imageCaption: "On-site vessel hardware wiring, micro-controller assembly, and sensor calibration during KKI 2024.",
    highlights: [
      "Coordinated team milestones across mechanical, electrical, and software sub-teams.",
      "Developed Python autonomous control algorithms for real-time sensor processing and path planning.",
      "Built telemetry web dashboard (HTML/CSS/PHP) for live status monitoring and IoT communication.",
      "Conducted extensive pool testing and field calibrations under varied water and lighting conditions."
    ],
    stack: ["Python", "Autonomous Navigation", "IoT & Telemetry", "Embedded Systems", "Sensors", "PHP"]
  },
  {
    title: "Recipient of Funding – Student Creativity Program in Entrepreneurship (PKM-K)",
    issuer: "RISTEK-DIKTI / Kemendikbudristek",
    date: "2023",
    badge: "National Grant",
    role: "Lead Mobile Developer",
    description: "Secured national research and entrepreneurship funding for Culture Mart, a mobile platform connecting traditional art and cultural MSMEs with broader consumers.",
    image: pkmkActivity,
    imageCaption: "Product exhibition booth and live mobile application demo for Culture Mart.",
    link: "https://drive.google.com/file/d/1TAa-qRbkhKNtBZyNW9WvcuKrkiAS0nNn/view?usp=drive_link",
    highlights: [
      "Built the Culture Mart mobile application using Dart and Flutter from scratch.",
      "Implemented e-commerce catalog, artisan portfolios, and cultural education content feeds.",
      "Handled app deployment and publishing on the Google Play Store.",
      "Presented the product in national entrepreneurship monitoring and exhibition sessions."
    ],
    stack: ["Flutter", "Dart", "Firebase", "REST API", "Google Play Console"]
  },
  {
    title: "3rd Place, Robot Contest (Soccer Robot Simulation Category)",
    issuer: "UPN \"Veteran\" Yogyakarta (Porsimnas Wimaya)",
    date: "2022",
    badge: "3rd Place Winner",
    role: "Simulation Algorithm Developer",
    description: "Achieved 3rd place in the Soccer Robot Simulation category at the Wimaya National Competition, developing competitive multi-agent tactics and autonomous robotic behaviors in a C++ simulation environment.",
    image: simurosot,
    imageCaption: "Awarding ceremony for 3rd Place at Wimaya National Robot Contest.",
    link: "https://drive.google.com/file/d/1PK_eio5hVK7B7xGdRr4Heu231kXeUiZH/view?usp=drive_link",
    highlights: [
      "Programmed tactical multi-agent behaviors, dynamic field positioning, and ball interception algorithms in C++.",
      "Optimized decision-making loops for minimal latency during fast-paced simulation matches.",
      "Competed against robotic teams from universities across Indonesia."
    ],
    stack: ["C++", "Robotics Simulation", "Multi-Agent Systems", "Algorithms"]
  }
];

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  return (
    <section id="awards" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" ref={ref}>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Awards & Competitions
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {awards.map((award, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 transition-all"
            >
              <div
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-50/50 dark:lg:hover:bg-slate-800/30 lg:p-6 lg:rounded-xl cursor-pointer"
                onClick={() => setSelectedAward(award)}
              >
                {/* Year & Badge */}
                <header className="z-10 mb-2 mt-1 text-xs font-mono text-muted-foreground sm:col-span-2 flex flex-col gap-1">
                  <span>{award.date}</span>
                  <span className="text-[11px] font-sans font-medium text-foreground/80">
                    {award.badge}
                  </span>
                </header>

                {/* Content */}
                <div className="z-10 sm:col-span-6 space-y-2.5">
                  <div>
                    <h3 className="font-semibold text-lg leading-snug text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1">
                      <span>{award.title}</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {award.issuer} · <span className="text-foreground/80 font-medium">Role: {award.role}</span>
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {award.description}
                  </p>

                  {/* Visual Preview */}
                  {award.image && (
                    <div className="pt-1">
                      <div className="relative overflow-hidden rounded-lg border border-border/60 bg-muted/20 shadow-sm">
                        <img
                          src={award.image}
                          alt={award.title}
                          loading="lazy"
                          className="w-full aspect-video sm:aspect-[16/9] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                      </div>
                    </div>
                  )}

                  {/* Highlights preview */}
                  {award.highlights && award.highlights.length > 0 && (
                    <ul className="space-y-1.5 text-xs text-foreground/85 pt-1">
                      {award.highlights.slice(0, 2).map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-primary font-bold select-none">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                      {award.highlights.length > 2 && (
                        <li className="text-[11px] text-primary font-medium pl-3 pt-0.5">
                          + {award.highlights.length - 2} more details & contributions
                        </li>
                      )}
                    </ul>
                  )}

                  {/* Tech stack */}
                  <ul className="mt-3 flex flex-wrap" aria-label="Skills and tools used">
                    {award.stack.map((tech) => (
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

      {/* Award Detail Modal */}
      <Dialog open={!!selectedAward} onOpenChange={(open) => !open && setSelectedAward(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto sm:rounded-2xl p-6 sm:p-8 gap-6">
          {selectedAward && (
            <>
              <DialogHeader className="text-left space-y-1.5">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-mono text-muted-foreground">
                    {selectedAward.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {selectedAward.badge}
                  </span>
                </div>
                <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
                  {selectedAward.title}
                </DialogTitle>
                <DialogDescription className="text-sm font-medium text-primary">
                  {selectedAward.issuer}
                </DialogDescription>
              </DialogHeader>

              {/* Role badge */}
              <div className="text-xs font-medium text-muted-foreground">
                Assigned Role: <span className="text-foreground font-semibold">{selectedAward.role}</span>
              </div>

              {/* Image Showcase */}
              {selectedAward.image && (
                <div className="space-y-2">
                  <div className="overflow-hidden rounded-xl border border-border/60 shadow-sm">
                    <img
                      src={selectedAward.image}
                      alt={selectedAward.title}
                      className="w-full object-cover max-h-[360px]"
                    />
                  </div>
                  {selectedAward.imageCaption && (
                    <p className="text-xs text-muted-foreground italic px-1 flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-primary shrink-0" />
                      {selectedAward.imageCaption}
                    </p>
                  )}
                </div>
              )}

              {/* Description */}
              <div className="text-sm leading-relaxed text-foreground/85 bg-muted/20 p-3.5 rounded-lg border border-border/40">
                <p>{selectedAward.description}</p>
              </div>

              {/* Activity Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Key Technical Activities & Contributions
                </h4>
                <ul className="space-y-2">
                  {selectedAward.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/90 leading-relaxed bg-muted/20 p-2.5 rounded-lg border border-border/30">
                      <span className="text-primary font-bold select-none">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certificate Link */}
              {selectedAward.link && (
                <div>
                  <a
                    href={selectedAward.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <span>View Official Certificate / SK Document</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Skills */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Technologies & Competencies
                </h4>
                <ul className="flex flex-wrap gap-1.5">
                  {selectedAward.stack.map((tech) => (
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

export default Awards;
