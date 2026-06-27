import Header from "@/components/portfolio/Header";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Contact from "@/components/portfolio/Contact";
import Projects from "@/components/portfolio/Projects";
import Awards from "@/components/portfolio/Awards";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary relative font-sans antialiased">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main className="pt-24 lg:w-[52%] lg:py-24">
            <About />
            <div className="h-[2px] w-full bg-border/80 my-12 lg:my-20" />
            <Experience />
            <div className="h-[2px] w-full bg-border/80 my-12 lg:my-20" />
            <Projects />
            <div className="h-[2px] w-full bg-border/80 my-12 lg:my-20" />
            <Awards />
            <div className="h-[2px] w-full bg-border/80 my-12 lg:my-20" />
            <Skills />
            <div className="h-[2px] w-full bg-border/80 my-12 lg:my-20" />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
