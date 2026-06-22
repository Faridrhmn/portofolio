import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePic from "../../assets/profile-photo.png";

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("#about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => ({
        id: link.href,
        element: document.querySelector(link.href),
      }));

      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      if (isAtBottom) {
        setActiveSection(navLinks[navLinks.length - 1].href);
        return;
      }

      const currentSection = sections.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <img
            src={profilePic}
            alt="Bahruddin Farid"
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl object-cover border-4 border-muted/50 shadow-lg shrink-0"
          />
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              <a href="/">Bahruddin Farid</a>
            </h1>
            <h2 className="mt-2 text-lg font-medium tracking-tight text-foreground sm:text-xl">
              Software Developer
            </h2>
          </div>
        </div>

        <p className="mt-6 max-w-xs leading-normal text-muted-foreground">
          I build scalable, modern web applications with a focus on elegant code and user experience.
        </p>

        {/* Desktop Navigation */}
        <nav className="nav hidden lg:block mt-10">
          <ul className="mt-8 w-max">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`group flex items-center py-3 ${activeSection === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <span
                    className={`nav-indicator ${activeSection === link.href ? "nav-indicator-active" : ""
                      }`}
                  />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 flex flex-wrap items-center gap-6"
      >
        <ul className="flex items-center gap-5">
          <li>
            <a href="https://github.com/faridrhmn" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noreferrer">
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/merhmn" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noreferrer">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="mailto:bfaridrahman@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="w-6 h-6" />
            </a>
          </li>
        </ul>

        <div className="h-6 w-px bg-border hidden sm:block"></div>

        <Button variant="outline" size="sm" className="gap-2 group hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full px-5" asChild>
          <a href="/CV_Bahruddin_Farid.pdf" download="CV_Bahruddin_Farid.pdf">
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Download CV
          </a>
        </Button>
      </motion.div>
    </header>
  );
};

export default Header;
