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

        <div className="text-sm leading-relaxed text-muted-foreground space-y-4">
          <p>
            I graduated in <span className="font-medium text-foreground">Informatics</span> from <span className="font-medium text-foreground">UPN "Veteran" Yogyakarta</span>. My technical journey began with teaching computer science fundamentals as a Laboratory Assistant, covering Object-Oriented Programming, Database Systems, and Computer Networks.
          </p>
          <p>
            Currently, I work as a <span className="font-medium text-foreground">Software Developer</span> at <span className="font-medium text-foreground">PT. Farma Global Teknologi</span>, where I build healthcare systems. My core work involves engineering backend services, Hospital Information Systems (SIMRS), and building an on-premise PACS (Picture Archiving and Communication System) middleware from the ground up to integrate radiology modalities with DICOM 3.0 and HL7 protocols.
          </p>
          <p>
            Beyond work, I have a background in autonomous robotics competitions (Finalist at Kontes Kapal Indonesia 2024) and machine learning research for character recognition. I care about clean architecture, system interoperability, and practical software engineering.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
