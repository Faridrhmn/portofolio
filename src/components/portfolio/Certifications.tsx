import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Professional Certification Name",
    issuer: "Issuing Organization",
    date: "2023",
    credentialId: "ABC123XYZ",
    description: "Comprehensive certification covering advanced concepts and best practices in the field.",
  },
  {
    title: "Technical Certification Name",
    issuer: "Certifying Body",
    date: "2022",
    credentialId: "DEF456UVW",
    description: "Industry-recognized certification validating technical skills and expertise.",
  },
  {
    title: "Specialized Training Certificate",
    issuer: "Training Institute",
    date: "2021",
    credentialId: "GHI789RST",
    description: "Specialized training program focusing on specific industry applications.",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 bg-card/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Credentials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-gradient-card border border-border rounded-xl p-6 shadow-card group"
            >
              {/* Award Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {cert.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>

                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Verify
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
