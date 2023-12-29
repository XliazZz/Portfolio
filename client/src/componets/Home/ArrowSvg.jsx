import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ArrowSvg = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return isVisible ? (
    <motion.svg 
      className="w-6 h-6 hover:text-indigo-500 text-indigo-300" 
      aria-hidden="true" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 10 12"
      initial={{ x: 700, y: 10 }}
      animate={{ x: 700, y: 20 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
    >
      <path 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="m1 7 4 4 4-4M1 1l4 4 4-4"
      />
    </motion.svg>
  ) : null;
}

export default ArrowSvg;