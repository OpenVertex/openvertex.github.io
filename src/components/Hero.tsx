import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlitchText from './GlitchText';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "We Build The Future of Open Source.";
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      {/* Glitch Effect Title */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <GlitchText 
          text="OPEN VERTEX" 
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-vertex-primary drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]"
        />
      </motion.div>

      {/* Typing Effect Subtitle */}
      <div className="h-12 sm:h-16 mb-8 flex items-center justify-center">
        <span className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-mono">
          {'>'} {text}
          <span className="animate-cursor-blink ml-1 inline-block w-3 h-6 bg-vertex-primary align-middle"></span>
        </span>
      </div>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-6"
      >
        <Link 
          to="/projects"
          className="group relative px-8 py-3 bg-vertex-primary/10 border border-vertex-primary text-vertex-primary hover:bg-vertex-primary hover:text-vertex-bg transition-all duration-300 rounded-sm font-bold tracking-wide flex items-center gap-2 overflow-hidden"
        >
          <span className="relative z-10">EXPLORE PROJECTS</span>
          <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-vertex-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out -z-0"></div>
        </Link>
        
        <Link 
          to="/about"
          className="px-8 py-3 bg-transparent border border-vertex-secondary text-gray-400 hover:text-white hover:border-white transition-all duration-300 rounded-sm font-bold tracking-wide"
        >
          ABOUT US
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
