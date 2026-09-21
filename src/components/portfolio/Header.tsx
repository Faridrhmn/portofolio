import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePic from "../../assets/profile-photo.webp";

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Awards", href: "#awards" },
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
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          <img
            src={profilePic}
            alt="Bahruddin Farid"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-border shadow-sm shrink-0"
          />
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              <a href="/">Bahruddin Farid</a>
            </h1>
            <h2 className="mt-1 text-base sm:text-lg font-medium text-primary">
              Software Developer
            </h2>
            <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 text-muted-foreground/80" />
              <span>Yogyakarta, Indonesia</span>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Software developer focused on backend architectures, healthcare systems integration (DICOM / HL7 / PACS), and robust web applications.
        </p>

        {/* Desktop Navigation */}
        <nav className="nav hidden lg:block mt-10">
          <ul className="mt-8 w-max">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`group flex items-center py-2.5 transition-colors ${
                    activeSection === link.href ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className={`nav-indicator ${
                      activeSection === link.href ? "nav-indicator-active" : ""
                    }`}
                  />
                  <span className="text-xs uppercase tracking-widest">
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
        className="mt-8 flex flex-wrap items-center gap-5"
      >
        <ul className="flex items-center gap-4">
          <li>
            <a 
              href="https://github.com/faridrhmn" 
              className="text-muted-foreground hover:text-foreground transition-colors p-1" 
              target="_blank" 
              rel="noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a 
              href="https://linkedin.com/in/merhmn" 
              className="text-muted-foreground hover:text-foreground transition-colors p-1" 
              target="_blank" 
              rel="noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a 
              href="mailto:bfaridrahman@gmail.com" 
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </li>
        </ul>

        <div className="h-5 w-px bg-border hidden sm:block"></div>

        <Button variant="outline" size="sm" className="gap-2 group hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-lg px-4 text-xs font-medium" asChild>
          <a href="/CV_Bahruddin_Farid.pdf" download="CV_Bahruddin_Farid.pdf">
            <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            Download CV
          </a>
        </Button>
      </motion.div>
    </header>
  );
};

export default Header;
