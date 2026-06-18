import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.png";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center px-6 lg:px-20 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-l from-black/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-12 h-px bg-primary" />
            <p className="text-primary tracking-widest uppercase text-sm font-medium">
              Portfolio 2026
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="display-font text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] font-bold mb-6 text-foreground tracking-tighter"
          >
            Bahruddin
            <br />
            <span className="text-primary italic font-light">Farid</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl text-foreground font-light mb-8 max-w-2xl"
          >
            Creative Developer building fast, scalable, and visually engaging digital experiences.
          </motion.h2>

          {/* CTA & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-4"
          >
            <a 
              href="#projects" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground overflow-hidden rounded-none font-medium uppercase tracking-widest text-sm transition-transform hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-black/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative">View Projects</span>
            </a>

            <div className="flex gap-6">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/merhmn", label: "LinkedIn" },
                { icon: Mail, href: "mailto:bfaridrahman@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Content / Abstract Visual */}
        <div className="lg:col-span-5 relative hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="relative w-full aspect-[4/5] object-cover"
          >
            <div className="absolute inset-0 bg-secondary/50 border border-black/5 overflow-hidden group rounded-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-multiply group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            
            {/* Status Badge floating */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-6 top-1/4 glass px-6 py-4 border-l-4 border-l-primary"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm uppercase tracking-wider font-medium text-foreground">Available for Work</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-6 lg:left-20 flex items-center gap-4 text-muted-foreground"
      >
        <div className="w-px h-12 bg-border relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <span className="text-xs uppercase tracking-[0.2em] -rotate-90 origin-left translate-y-8 absolute -left-2">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
