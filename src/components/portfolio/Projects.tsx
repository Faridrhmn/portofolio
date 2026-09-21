import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink, ShieldCheck, Camera, Instagram } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import mockupAksaralibrasi from '../../assets/mockup-aksaralibrasi.webp';
import mockupWebBidan from '../../assets/mockup-web-bidan.webp';
import mockupWebBouquet from '../../assets/mockup-web-bouquet.webp';
import pacsFieldTesting from '../../assets/pacs.webp';

interface InstagramPost {
  url: string;
  label: string;
  type: "photo" | "reel";
}

interface ProjectItem {
  title: string;
  categoryTag: string;
  statusLabel: string;
  isFieldDoc?: boolean;
  description: string;
  image: string;
  imageCaption: string;
  confidentialNotice?: string;
  highlights: string[];
  stack: string[];
  link?: string;
  instagramPosts?: InstagramPost[];
}

const projects: ProjectItem[] = [
  {
    title: "Web-Based PACS System",
    categoryTag: "Healthcare & DICOM Middleware",
    statusLabel: "Hospital Deployment",
    isFieldDoc: true,
    description: "Architected and engineered an on-premise PACS & HIS integration middleware to automate medical imaging pipelines between hospital clinical systems and radiology modalities.",
    image: pacsFieldTesting,
    imageCaption: "On-site hospital integration testing & DICOM modality connectivity (CT, CR, DX, USG) in radiology department.",
    confidentialNotice: "Application UI screenshots are restricted due to hospital NDA and patient data privacy regulations. Visuals showcase on-site equipment integration, server deployment, and modality verification.",
    highlights: [
      "Engineered core DICOM protocol services: Modality Worklist (MWL C-FIND), Image Storage (C-STORE), and Connectivity Verification (C-ECHO) using dcm4che.",
      "Integrated Siemens-standard modalities (CT, CR, DX, USG) and HL7 messaging architecture for automated study synchronization.",
      "Built high-throughput medical image archiving and electronic report management services using Scala 3 and Play Framework.",
      "Configured robust on-premise hospital server deployment and multi-vendor communication protocols."
    ],
    stack: ["Scala 3", "Play Framework", "React", "dcm4che", "DICOM 3.0", "HL7", "PostgreSQL", "Docker", "Linux"],
    instagramPosts: [
      {
        url: "https://www.instagram.com/p/DX_gSy9DECI/",
        label: "PACS Go-Live Announcement at RSU Dinda Tangerang — farmagitech.id",
        type: "photo"
      },
      {
        url: "https://www.instagram.com/p/DYeUdIFkikT/",
        label: "PACS Implementation Meeting Highlight — RSU Dinda, 7 Mei 2026",
        type: "photo"
      },
      {
        url: "https://www.instagram.com/reel/DYotP2ERJdz/",
        label: "Can PACS Radiology Reduce Hospital Operational Costs? — Farmagitech Reel",
        type: "reel"
      },
      {
        url: "https://www.instagram.com/reel/DZwzorhRxlh/",
        label: "PACS & SIMRS Integration Deep Dive — Farmagitech Reel",
        type: "reel"
      },
    ],
  },
  {
    title: "Poskesdes Digital Medical Record System",
    categoryTag: "Clinical Health Records",
    statusLabel: "Live Production",
    description: "A digital medical record system for Poskesdes healthcare clinics that automates patient registration, maternal care (ANC), family planning (KB), elderly health monitoring, and administrative reporting.",
    image: mockupWebBidan,
    imageCaption: "Production UI: Patient records management, maternal/elderly health analytics, and clinical consultation records.",
    link: "https://poskesdes-porto.faridrhmn.my.id/",
    highlights: [
      "Digitized routine clinic workflows for Antenatal Care (ANC), Family Planning (KB), and Elderly health monitoring.",
      "Implemented role-based access control, monthly health statistics generation, and historical consultation tracking.",
      "Configured self-hosted server environment using Nginx reverse proxy, automated SSL certs, and systemd service management."
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PHP", "MySQL", "Nginx", "Systemd"]
  },
  {
    title: "Dzakirah Bouquet E-Commerce & Order System",
    categoryTag: "Custom E-Commerce Platform",
    statusLabel: "Live Production",
    description: "A responsive e-commerce web application built for a custom bouquet craft business, featuring dynamic add-on price calculation, greeting card customizer, and automated WhatsApp order payloads.",
    image: mockupWebBouquet,
    imageCaption: "Storefront interface with dynamic product customizer and instant WhatsApp order payload generation.",
    link: "https://bouquet.faridrhmn.my.id/",
    highlights: [
      "Engineered dynamic product customizer calculating real-time pricing for custom wraps, flowers, and add-on accessories.",
      "Built interactive greeting card message editor with live preview before checkout.",
      "Automated order payload generation directly transferring configured items to WhatsApp for immediate fulfillment."
    ],
    stack: ["HTML5", "CSS3", "JavaScript (ES6)", "Bootstrap", "jQuery", "Nginx", "Systemd", "Certbot"]
  },
  {
    title: "Javanese Script Image Detection System",
    categoryTag: "Machine Learning & Research",
    statusLabel: "Thesis Research",
    description: "A machine learning web application for handwritten Javanese script recognition utilizing Freeman Chain Code (FCC) feature extraction and Support Vector Machine (SVM) classification.",
    image: mockupAksaralibrasi,
    imageCaption: "Interactive recognition canvas for real-time handwritten Javanese character drawing and classification.",
    link: "https://bachelor-thesis.faridrhmn.my.id/",
    highlights: [
      "Extracted 8-directional contour features from handwritten character strokes using Freeman Chain Code (FCC).",
      "Trained and evaluated Support Vector Machine (SVM) models on custom handwritten datasets.",
      "Built an interactive web demo in Python (Flask) with an HTML5 canvas for real-time handwriting recognition."
    ],
    stack: ["Python", "Flask", "SVM", "FCC", "HTML/CSS", "JavaScript", "Bootstrap"]
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" ref={ref}>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 transition-all"
            >
              <div
                className="group relative flex flex-col gap-4 pb-4 transition-all lg:hover:!opacity-100 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-50/50 dark:lg:hover:bg-slate-800/30 lg:p-6 lg:rounded-xl cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-mono text-muted-foreground">
                    {project.categoryTag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-foreground/80">
                    <span className={`w-1.5 h-1.5 rounded-full ${project.isFieldDoc ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                    {project.statusLabel}
                  </span>
                </div>

                {/* Media Showcase */}
                {project.image && (
                  <div className="relative z-10 w-full overflow-hidden rounded-lg border border-border/60 bg-muted/20 shadow-sm">
                    <img
                      alt={project.title}
                      src={project.image}
                      loading="lazy"
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                    {project.isFieldDoc && (
                      <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-md bg-background/90 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur-sm border border-border/50 shadow-sm">
                        <Camera className="w-3 h-3 text-amber-500" />
                        <span>Field Documentation</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="z-10 w-full">
                  <h3 className="font-semibold text-lg leading-snug text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5 text-xs text-foreground/85">
                      {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-primary font-bold select-none">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                      {project.highlights.length > 2 && (
                        <li className="text-[11px] text-primary font-medium pt-0.5 pl-3">
                          + {project.highlights.length - 2} more technical implementations
                        </li>
                      )}
                    </ul>
                  )}

                  {/* Tech Stack */}
                  <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                    {project.stack.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <span className="inline-flex items-center rounded-md bg-muted/60 px-2.5 py-1 text-xs font-mono text-foreground/80 border border-border/40">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto sm:rounded-2xl p-6 sm:p-8 gap-6">
          {selectedProject && (
            <>
              <DialogHeader className="text-left space-y-1.5">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-mono text-muted-foreground">
                    {selectedProject.categoryTag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-foreground/80">
                    <span className={`w-1.5 h-1.5 rounded-full ${selectedProject.isFieldDoc ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                    {selectedProject.statusLabel}
                  </span>
                </div>
                <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              {/* Media Preview */}
              {selectedProject.image && (
                <div className="space-y-2">
                  <div className="overflow-hidden rounded-xl border border-border/60 shadow-sm">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full object-cover max-h-[340px]"
                    />
                  </div>
                  {selectedProject.imageCaption && (
                    <p className="text-xs text-muted-foreground italic px-1">
                      {selectedProject.imageCaption}
                    </p>
                  )}
                </div>
              )}

              {/* Confidentiality Notice */}
              {selectedProject.confidentialNotice && (
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-muted/40 border border-border/50 text-xs text-muted-foreground leading-relaxed">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p>{selectedProject.confidentialNotice}</p>
                </div>
              )}

              {/* Key Implementation Points */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Key Technical Implementations
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/90 leading-relaxed bg-muted/20 p-2.5 rounded-lg border border-border/30">
                      <span className="text-primary font-bold select-none">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instagram Social Proof */}
              {selectedProject.instagramPosts && selectedProject.instagramPosts.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-3.5 h-3.5 text-pink-500" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Instagram Coverage
                    </h4>
                    <span className="text-[10px] text-muted-foreground font-normal normal-case tracking-normal">
                      — verified public documentation
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {selectedProject.instagramPosts.map((post, idx) => (
                      <li key={idx}>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group/ig flex items-center gap-2.5 p-2.5 rounded-lg border border-border/40 bg-muted/20 hover:bg-pink-500/5 hover:border-pink-500/30 transition-all"
                        >
                          <span className={`shrink-0 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                            post.type === 'reel'
                              ? 'bg-purple-500/10 text-purple-500 border border-purple-500/20'
                              : 'bg-pink-500/10 text-pink-500 border border-pink-500/20'
                          }`}>
                            {post.type === 'reel' ? '▶ Reel' : '◉ Post'}
                          </span>
                          <span className="flex-1 text-xs text-foreground/80 leading-snug group-hover/ig:text-foreground transition-colors">
                            {post.label}
                          </span>
                          <ExternalLink className="w-3 h-3 shrink-0 text-muted-foreground/50 group-hover/ig:text-pink-500 transition-colors" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Live Link Button */}
              {selectedProject.link && (
                <div>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <span>Open Live Application</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Tech Stack Matrix */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Technologies
                </h4>
                <ul className="flex flex-wrap gap-1.5">
                  {selectedProject.stack.map((tech) => (
                    <li key={tech}>
                      <span className="inline-block rounded-md bg-muted/60 px-2.5 py-1 text-xs font-mono text-foreground/80 border border-border/40">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
