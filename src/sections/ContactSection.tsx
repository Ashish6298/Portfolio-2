import React from 'react';
import FadeIn from '../components/FadeIn';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-[#0C0C0C] py-24 sm:py-32 md:py-40 px-6 md:px-10 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight mb-16 sm:mb-24"
              style={{ fontSize: 'clamp(3rem, 12vw, 140px)' }}>
            Let&apos;s Connect
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left Column - Big Email */}
          <div className="flex flex-col gap-8">
            <FadeIn delay={0.2} y={20}>
              <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold">Main Channel</span>
              <a 
                href="mailto:ashishgoswami1013@gmail.com" 
                className="text-white font-medium hover:text-[#B600A8] transition-colors duration-300 whitespace-nowrap"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 2.25rem)' }}
              >
                ashishgoswami1013@gmail.com
              </a>
            </FadeIn>

            <FadeIn delay={0.3} y={20}>
              <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold">Direct Line</span>
              <p className="text-white font-medium mt-2" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}>
                +91-8804339456
              </p>
            </FadeIn>

            <FadeIn delay={0.4} y={20}>
              <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold">Location</span>
              <p className="text-white font-medium mt-2 text-xl">
                Mangalore, India
              </p>
            </FadeIn>
          </div>

          {/* Right Column - Socials & Links */}
          <div className="flex flex-col justify-end gap-12">
            <div className="grid grid-cols-2 gap-8">
              <FadeIn delay={0.5} y={20} className="flex flex-col gap-4">
                <span className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-black">Professional</span>
                <a href="https://www.linkedin.com/in/ashish-goswami-58797a24a" target="_blank" rel="noreferrer" className="text-white hover:opacity-50 transition-opacity text-lg">LinkedIn</a>
                <a href="https://github.com/Ashish6298" target="_blank" rel="noreferrer" className="text-white hover:opacity-50 transition-opacity text-lg">GitHub</a>
              </FadeIn>

              <FadeIn delay={0.6} y={20} className="flex flex-col gap-4">
                <span className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-black">Social</span>
                <a href="https://www.instagram.com/a.s.h.i.s.h__g.o.s.w.a.m.i/" target="_blank" rel="noreferrer" className="text-white hover:opacity-50 transition-opacity text-lg">Instagram</a>
              </FadeIn>
            </div>

            <FadeIn delay={0.7} y={20} className="pt-12 border-t border-white/10">
              <p className="text-white/30 text-sm leading-relaxed max-w-sm">
                I&apos;m currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
