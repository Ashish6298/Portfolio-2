import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';


const PROJECTS = [
  {
    id: "01",
    title: "INSPECTO",
    category: "Flutter + Node",
    description: "Premium API testing and debugging toolkit with request builder, response viewer, collections, and environments.",
    images: {
      col1_1: "/projects/inspecto_builder.png",
      col1_2: "/projects/inspecto_response.png",
      col2: "/projects/inspecto_cyber.png"
    }
  },
  {
    id: "02",
    title: "FileForge",
    category: "AI + Files",
    description: "File conversion suite for PDF, DOCX, PPTX & video; AI summarization via Gemini API.",
    images: {
      col1_1: "/projects/fileforge.png",
      col1_2: "/projects/fileforge.png",
      col2: "/projects/fileforge.png"
    }
  },
  {
    id: "03",
    title: "CareLink",
    category: "Healthcare",
    description: "AI-driven hospital kiosk with symptom assessment, chatbot diagnosis & lab booking.",
    images: {
      col1_1: "/projects/carelink.png",
      col1_2: "/projects/carelink.png",
      col2: "/projects/carelink.png"
    }
  },
  {
    id: "04",
    title: "Medisynth",
    category: "Med-Ed AI",
    description: "Virtual patient simulator for medical training, built with FastAPI, React & OpenCV.",
    images: {
      col1_1: "/projects/medisynth.png",
      col1_2: "/projects/medisynth.png",
      col2: "/projects/medisynth.png"
    }
  },
  {
    id: "05",
    title: "Tunify",
    category: "Flutter App",
    description: "Android music streaming app with playlists, real-time search & YouTube audio backend.",
    images: {
      col1_1: "/projects/tunify.png",
      col1_2: "/projects/tunify.png",
      col2: "/projects/tunify.png"
    }
  },
  {
    id: "06",
    title: "DocLens",
    category: "AI + OCR",
    description: "AI-powered document analyzer that extracts, summarizes, and explains content from PDFs and images using OCR and LLMs.",
    images: {
      col1_1: "/projects/doclens.png",
      col1_2: "/projects/doclens.png",
      col2: "/projects/doclens.png"
    }
  },
  {
    id: "07",
    title: "RESONIX",
    category: "Flutter",
    description: "Personal ad-free music player with high-fidelity audio streaming, smart playlists, and a sleek modern interface.",
    images: {
      col1_1: "/projects/resonix.png",
      col1_2: "/projects/resonix.png",
      col2: "/projects/resonix.png"
    }
  },
  {
    id: "08",
    title: "IRIS AI",
    category: "Python + AI",
    description: "An intelligent virtual assistant designed for workflow automation, voice commands, and personalized productivity enhancements.",
    images: {
      col1_1: "/projects/irisai.png",
      col1_2: "/projects/irisai.png",
      col2: "/projects/irisai.png"
    }
  }
];

const ProjectsSection: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" ref={container} className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 relative">
      <div className="flex flex-col items-center mb-16 sm:mb-20 md:mb-28">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Project
          </h2>
        </FadeIn>
      </div>

      <div className="flex flex-col gap-20 sm:gap-32 md:gap-40">
        {PROJECTS.map((project, index) => {
          return (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              progress={scrollYProgress}
              totalCards={PROJECTS.length}
            />
          );
        })}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, progress, totalCards }: any) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });

  // Target scale logic: 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh] sticky top-24 md:top-32 flex items-center justify-center">
      <motion.div 
        style={{ 
          scale,
          top: `calc(10% + ${index * 28}px)`,
        }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col overflow-hidden shadow-2xl"
      >
        {/* Top Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-10">
          <div className="flex items-center gap-4 md:gap-8">
            <span className="font-black leading-none text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(2rem, 8vw, 100px)' }}>
              {project.id}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] opacity-60 uppercase tracking-widest text-[10px] sm:text-xs">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-bold uppercase text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-2">
                {project.title}
              </h3>
              <p className="text-[#D7E2EA] opacity-40 text-xs sm:text-sm max-w-[300px] leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row - Image Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-[40%_60%] gap-4 sm:gap-6 md:gap-8 min-h-0">
          {/* Left Column */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 h-full">
            <div className="rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden flex-none"
                 style={{ height: 'clamp(130px, 16vw, 230px)' }}>
              <img src={project.images.col1_1} alt={`${project.title} 1`} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden flex-1"
                 style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}>
              <img src={project.images.col1_2} alt={`${project.title} 2`} className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Right Column */}
          <div className="rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden h-full">
            <img src={project.images.col2} alt={`${project.title} 3`} className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
