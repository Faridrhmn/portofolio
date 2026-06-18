import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
            About
          </h2>
        </div>

        <div className="text-muted-foreground leading-relaxed space-y-4">
          <p>
            Back in 2022, I decided to dive deeply into the world of programming during my time as a Laboratory Assistant. Fast-forward to today, and I've had the privilege of building software for a <span className="font-medium text-foreground">healthcare technology company</span>, a <span className="font-medium text-foreground">start-up</span>, and mentoring students in university courses.
          </p>
          <p>
            My main focus these days is building scalable, robust products and leading projects from architecture design to deployment. I most recently built a complete PACS (Picture Archiving and Communication System) from scratch, handling complex API development and DICOM image integrations.
          </p>
          <p>
            When I'm not at the computer, I'm usually exploring new tech trends, contributing to community discussions, or enjoying a good cup of coffee.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
