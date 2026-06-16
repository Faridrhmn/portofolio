import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "6+", label: "Projects Completed" },
    // { value: "10+", label: "Happy Clients" },
    { value: "7", label: "Certifications" },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Get to know me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Passionate Professional Ready for New Challenges
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
            With a strong foundation in software development, I combine technical proficiency with a practical approach to problem-solving in every project I take on. My experience ranges from developing web-based systems and healthcare applications to working on computer vision projects, enabling me to quickly adapt and deliver effective, high-quality solutions.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
            I continuously strive to expand my knowledge and keep up with evolving technologies and industry trends. I am looking to join a progressive team where I can apply my skills, contribute to impactful projects, and further develop my career—particularly within a dynamic remote working environment.
            </p>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: MapPin, text: "Yogyakarta" },
                { icon: Calendar, text: "Available Immediately" },
                { icon: Briefcase, text: "Full-time / Contract" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-card border border-border rounded-xl p-6 text-center shadow-card"
              >
                <span className="text-4xl font-bold text-gradient">{stat.value}</span>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
