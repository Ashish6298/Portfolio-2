import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

const PROJECTS = [
  {
    id: "01",
    title: "Nextlevel Studio",
    category: "Client",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    }
  },
  {
    id: "02",
    title: "Aura Brand Identity",
    category: "Personal",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    }
  },
  {
    id: "03",
    title: "Solaris Digital",
    category: "Client",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
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
              <h3 className="text-[#D7E2EA] font-bold uppercase text-lg sm:text-2xl md:text-3xl lg:text-4xl">
                {project.title}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
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
