import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Building2, ExternalLink } from "lucide-react";
import experienceField from "@/assets/experience-field-1.png";
import experienceOffice from "@/assets/experience-office-1.png";

const experiences = [
  {
    title: "Software Developer (Full-time)",
    company: "PT. Farma Global Teknologi (Farmagitech)",
    location: "Sleman, Yogyakarta, Indonesia",
    period: "November 2024 – Present",
    description: [
      "Developed and optimized healthcare systems including SIMRS and PACS for efficient data and workflow management",
      "Engineered a document management system (E-Doc) using Vue.js to streamline digital documentation",
      "Built a PACS system from scratch, covering architecture design, API development, and DICOM image handling",
      "Improved system performance and reliability through continuous maintenance and troubleshooting",
      "Worked collaboratively in a team environment to deliver scalable and production-ready solutions",
    ],
    image: experienceField,
    type: "office",
  },
  {
    title: "Web Developer Intern",
    company: "PT. Seigan Teknologi Berdikari",
    location: "Sleman, Yogyakarta, Indonesia",
    period: "January 2024 – March 2024",
    description: [
      "Built and maintained web applications using CodeIgniter",
      "Implemented and improved system features based on project requirements",
      "Worked collaboratively in a team to deliver client-oriented solutions",
      "Enhanced understanding of software development lifecycle in a software house environment",
    ],
    image: experienceOffice,
    type: "office",
  },
  {
    title: "Laboratory Assistant (Part-time)",
    company: "UPN Veteran Yogyakarta",
    location: "Yogyakarta, Indonesia",
    period: "August 2022 – July 2024",
    description: [
      "Mentored students in programming courses including Algorithms, OOP, Databases, and Computer Networks",
      "Provided technical guidance and problem-solving support during lab sessions",
      "Assisted in evaluating and debugging student code and assignments",
      "Coordinated Object-Oriented Programming lab activities to ensure effective learning delivery",
    ],
    image: experienceField,
    type: "office",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-card/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">My Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:ml-auto"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 -translate-y-2 glow-primary" />

              <div
                className={`ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-card border border-border rounded-xl overflow-hidden shadow-card"
                >
                  {/* Experience Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={`${exp.title} at ${exp.company}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <span className="absolute bottom-4 left-4 text-sm bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">
                      {exp.type === "field" ? "Field Work" : "Office Work"}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    
                    <div className={`flex flex-wrap gap-4 mb-4 text-muted-foreground text-sm ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}>
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
