import React from 'react';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-kanit">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer / Contact placeholder if needed */}
      <footer className="bg-[#0C0C0C] py-20 flex flex-col items-center justify-center border-t border-[rgba(215,226,234,0.1)]">
        <p className="text-[#D7E2EA] opacity-40 text-sm uppercase tracking-widest">
          &copy; {new Date().getFullYear()} ashish portfolio
        </p>
      </footer>
    </main>
  );
}

export default App;
