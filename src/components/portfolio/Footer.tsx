import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="pb-16 text-sm text-muted-foreground">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-md leading-relaxed"
      >
        {/* Loosely designed in <span className="font-medium text-foreground">Figma</span> and coded in <span className="font-medium text-foreground">Visual Studio Code</span> by yours truly. Built with <span className="font-medium text-foreground">React</span> and <span className="font-medium text-foreground">Tailwind CSS</span>, deployed via <span className="font-medium text-foreground">Vite</span>. */}
      </motion.p>
    </footer>
  );
};

export default Footer;
