import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-kanit">
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-8 text-white text-[10px] sm:text-sm font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em]">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>
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
