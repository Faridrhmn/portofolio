import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

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
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:py-24">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          <a href="/">Bahruddin Farid</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
          Software Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
          I build scalable, modern web applications with a focus on elegant code and user experience.
        </p>

        {/* Desktop Navigation */}
        <nav className="nav hidden lg:block mt-16">
          <ul className="mt-8 w-max">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`group flex items-center py-3 ${
                    activeSection === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className={`nav-indicator ${
                      activeSection === link.href ? "nav-indicator-active" : ""
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

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 flex items-center gap-5"
      >
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
      </motion.ul>
    </header>
  );
};

export default Header;
