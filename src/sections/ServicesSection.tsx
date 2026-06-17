import React from 'react';
import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    id: "01",
    title: "Full-stack web development",
    description: "End-to-end web applications built with React, Node.js, Express, and MongoDB — from clean responsive UIs to secure REST APIs, auth systems, and database design."
  },
  {
    id: "02",
    title: "Mobile app development",
    description: "Cross-platform Android and iOS apps using Flutter and Dart, with real-time features, playlist management, audio streaming, and seamless backend integration."
  },
  {
    id: "03",
    title: "AI feature integration",
    description: "Adding intelligence to your product — chatbots, symptom assessors, document summarizers, and recommendation engines powered by Gemini API, FastAPI, and ML models."
  },
  {
    id: "04",
    title: "REST API & backend development",
    description: "Robust, well-structured backends with JWT authentication, role-based access, third-party integrations like Twilio and Cloudinary, and QR code or notification systems."
  },
  {
    id: "05",
    title: "Dashboards & data visualization",
    description: "Admin panels and analytics dashboards with live charts, advanced filters, CSV and PDF export, and real-time business insights built using Material-UI and charting libraries."
  },
  {
    id: "06",
    title: "UI/UX design & prototyping",
    description: "User-centered interface design and interactive prototypes in Figma before development begins — ensuring a polished, accessible experience across every screen size."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 flex flex-col items-center">
      <h2 className="text-[#0C0C0C] font-black uppercase mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        SKILLS
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
