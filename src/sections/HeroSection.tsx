import React from 'react';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="h-screen w-full flex flex-col relative overflow-x-clip px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
      {/* Navbar Removed */}

      {/* Hero Heading */}
      <div className="flex-1 flex items-start justify-center overflow-hidden mt-16 sm:mt-14 md:mt-12">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center
                         text-[9.5vw] sm:text-[10.5vw] md:text-[11.5vw] lg:text-[13vw]">
            Hi, i&apos;m ashish
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn 
        delay={0.6} 
        y={30} 
        className="absolute left-1/2 -translate-x-1/2 z-10 
                   top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0
                   w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
            alt="Jack Portrait" 
            className="w-full h-auto object-contain"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end w-full">
        <div className="flex-1"></div>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
