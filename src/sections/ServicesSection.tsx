import React from 'react';
import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    id: "01",
    title: "3D Modeling",
    description: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    id: "02",
    title: "Rendering",
    description: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  },
  {
    id: "03",
    title: "Motion Design",
    description: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  },
  {
    id: "04",
    title: "Branding",
    description: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
  },
  {
    id: "05",
    title: "Web Design",
    description: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 flex flex-col items-center">
      <h2 className="text-[#0C0C0C] font-black uppercase mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        Services
      </h2>

      <div className="w-full max-w-5xl flex flex-col">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.id} delay={i * 0.1} y={30} className="w-full border-b border-[rgba(12,12,12,0.15)] last:border-b-0 py-8 sm:py-10 md:py-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
              <span className="font-black text-[#0C0C0C] leading-none shrink-0"
                    style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                {service.id}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {service.title}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                   style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
