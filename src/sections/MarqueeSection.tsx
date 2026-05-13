import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ProjectCardData {
  num: string;
  title: string;
  source: "resume" | "github";
  desc: string;
  tags: string[];
  bg: string;
  tagColor: string;
  tagBg: string;
}

const ROW1_PROJECTS: ProjectCardData[] = [
  {
    num: "01",
    title: "FileForge",
    source: "resume",
    desc: "File conversion suite for PDF, DOCX, PPTX and video with AI summarization via Gemini API.",
    tags: ["Node.js", "Gemini API", "FFmpeg", "PDFKit"],
    bg: "#161622",
    tagColor: "#AFA9EC",
    tagBg: "rgba(127,119,221,0.18)"
  },
  {
    num: "02",
    title: "CareLink",
    source: "resume",
    desc: "AI-driven hospital kiosk with symptom assessment, chatbot diagnosis, and lab test booking.",
    tags: ["React.js", "Node.js", "MongoDB"],
    bg: "#0f1f18",
    tagColor: "#5DCAA5",
    tagBg: "rgba(29,158,117,0.18)"
  },
  {
    num: "03",
    title: "Medisynth",
    source: "resume",
    desc: "AI virtual patient simulator for medical education using computer vision and ML models.",
    tags: ["FastAPI", "OpenCV", "React.js", "Sklearn"],
    bg: "#1a0f1a",
    tagColor: "#ED93B1",
    tagBg: "rgba(212,83,126,0.18)"
  },
  {
    num: "04",
    title: "Visitor Management System",
    source: "resume",
    desc: "QR badge generation, JWT auth, real-time email alerts and analytics dashboards.",
    tags: ["MERN", "Cloudinary", "JWT"],
    bg: "#1e1208",
    tagColor: "#FAC775",
    tagBg: "rgba(239,159,39,0.18)"
  },
  {
    num: "05",
    title: "Tunify",
    source: "resume",
    desc: "Android music streaming app with YouTube audio backend, playlists, and real-time search.",
    tags: ["Flutter", "Dart", "ytdl-core", "Node.js"],
    bg: "#0d1a1f",
    tagColor: "#85B7EB",
    tagBg: "rgba(55,138,221,0.18)"
  },
  {
    num: "06",
    title: "DocLens",
    source: "github",
    desc: "AI document analyzer that extracts and summarizes text from PDFs and images using OCR and Gemini.",
    tags: ["Gemini AI", "Tesseract.js", "Node.js"],
    bg: "#1a1010",
    tagColor: "#F0997B",
    tagBg: "rgba(216,90,48,0.18)"
  },
  {
    num: "07",
    title: "RESONIX",
    source: "github",
    desc: "Personal ad-free Flutter music player with smart recommendations and offline support.",
    tags: ["Flutter", "Dart", "Firebase"],
    bg: "#1a1618",
    tagColor: "#AFA9EC",
    tagBg: "rgba(127,119,221,0.18)"
  }
];

const ROW2_PROJECTS: ProjectCardData[] = [
  {
    num: "08",
    title: "Talkio",
    source: "github",
    desc: "Real-time Flutter chat app with messaging features, Firebase backend, and a clean UI.",
    tags: ["Flutter", "Dart", "Firebase"],
    bg: "#0f1f18",
    tagColor: "#5DCAA5",
    tagBg: "rgba(29,158,117,0.18)"
  },
  {
    num: "09",
    title: "REELMATE",
    source: "github",
    desc: "Fast downloader for Instagram Reels, YouTube Videos, and Shorts with a seamless interface.",
    tags: ["Flutter", "Dart", "REST API"],
    bg: "#1a1010",
    tagColor: "#F0997B",
    tagBg: "rgba(216,90,48,0.18)"
  },
  {
    num: "10",
    title: "INSPECTO",
    source: "github",
    desc: "Flutter-based inspection app with AI-powered healthcare solutions and interactive workflows.",
    tags: ["Flutter", "Dart", "Firebase"],
    bg: "#141a10",
    tagColor: "#C0DD97",
    tagBg: "rgba(99,153,34,0.18)"
  },
  {
    num: "11",
    title: "VS Code Error Sounds",
    source: "github",
    desc: "TypeScript VS Code extension that plays custom sound effects on editor errors.",
    tags: ["TypeScript", "VS Code API"],
    bg: "#1a1618",
    tagColor: "#85B7EB",
    tagBg: "rgba(55,138,221,0.18)"
  },
  {
    num: "12",
    title: "Tetherfi — Flutter App",
    source: "resume",
    desc: "Hybrid app with Twilio messaging and calling, REST API authentication, and Figma-designed UI.",
    tags: ["Flutter", "Twilio", "Figma"],
    bg: "#161622",
    tagColor: "#AFA9EC",
    tagBg: "rgba(127,119,221,0.18)"
  },
  {
    num: "13",
    title: "Full-stack web apps",
    source: "resume",
    desc: "End-to-end MERN applications with auth, dashboards, REST APIs, and responsive production-ready UI.",
    tags: ["React.js", "Express", "MongoDB"],
    bg: "#1e1208",
    tagColor: "#FAC775",
    tagBg: "rgba(239,159,39,0.18)"
  },
  {
    num: "14",
    title: "API & backend systems",
    source: "resume",
    desc: "Secure REST APIs with JWT, QR generation, role-based access, and third-party service integrations.",
    tags: ["Node.js", "Express", "JWT"],
    bg: "#0d1a1f",
    tagColor: "#85B7EB",
    tagBg: "rgba(55,138,221,0.18)"
  }
];

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(currentOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triple = (arr: ProjectCardData[]) => [...arr, ...arr, ...arr];

  return (
    <section 
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 - Moves RIGHT */}
        <div 
          className="flex gap-3 whitespace-nowrap will-change-transform"
          style={{ transform: `translateX(${offset - 200}px)` }}
        >
          {triple(ROW1_PROJECTS).map((project, i) => (
            <ProjectCard key={i} data={project} />
          ))}
        </div>

        {/* Row 2 - Moves LEFT */}
        <div 
          className="flex gap-3 whitespace-nowrap will-change-transform"
          style={{ transform: `translateX(${-(offset - 200)}px)` }}
        >
          {triple(ROW2_PROJECTS).map((project, i) => (
            <ProjectCard key={i} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ data: ProjectCardData }> = ({ data }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="py-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <motion.div 
        style={{ 
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          backgroundColor: `${data.bg}aa`, // Semi-transparent for glass effect
        }}
        whileHover={{ scale: 1.05 }}
        className="w-[320px] h-[200px] rounded-[24px] p-[24px] shrink-0 whitespace-normal flex flex-col justify-between relative overflow-hidden group border border-white/10 backdrop-blur-md"
      >
        {/* Animated Glow Gradient */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{ 
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${data.tagColor}, transparent 40%)`
          }}
        />

        <div className="flex items-center justify-end" style={{ transform: "translateZ(30px)" }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: data.tagColor, boxShadow: `0 0 10px ${data.tagColor}` }} />
        </div>

        {/* Title */}
        <h3 
          className="text-[18px] font-bold text-white leading-tight group-hover:text-white transition-colors"
          style={{ transform: "translateZ(50px)" }}
        >
          {data.title}
        </h3>

        {/* Description */}
        <p 
          className="text-[13px] leading-[1.6] text-white/50 line-clamp-2"
          style={{ transform: "translateZ(40px)" }}
        >
          {data.desc}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-2" style={{ transform: "translateZ(60px)" }}>
          {data.tags.slice(0, 3).map((tag, idx) => (
            <span 
              key={idx}
              className="text-[10px] rounded-full px-3 py-1 font-semibold border border-white/5"
              style={{ 
                backgroundColor: data.tagBg,
                color: data.tagColor
              }}
            >
              {tag}
            </span>
          ))}
          {data.tags.length > 3 && (
            <span className="text-[10px] text-white/30 self-center font-medium">+{data.tags.length - 3}</span>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MarqueeSection;
