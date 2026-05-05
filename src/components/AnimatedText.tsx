import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "", style = {} }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const characters = text.split('');
  const totalLength = characters.length;

  return (
    <p ref={containerRef} className={`relative ${className}`} style={style}>
      {characters.map((char, index) => {
        const start = index / totalLength;
        const end = (index + 1) / totalLength;
        return <Character key={index} char={char} progress={scrollYProgress} range={[start, end]} />;
      })}
    </p>
  );
};

const Character = ({ char, progress, range }: { char: string; progress: any; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span 
        style={{ opacity }}
        className="absolute left-0 top-0"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

export default AnimatedText;
