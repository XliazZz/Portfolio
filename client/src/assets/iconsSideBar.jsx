import { motion } from "framer-motion"

let text1 = "";
let text2 = "";
let text3 = "";
let text4 = "";

const storedLanguage = localStorage.getItem('language');

if (storedLanguage === null || storedLanguage === 'es') {
  text1 = "Inicio";
  text2 = "Yo";
  text3 = "Proyectos";
  text4 = "Contacto";
} else {
  text1 = "Home";
  text2 = "Me";
  text3 = "Projects";
  text4 = "Contact";
}

const iconsDinamic = (active) => {  
  const icons = [
    {
      name: text1,
      sectionId: "section1",
      icon: 
        <motion.svg 
          className={`w-6 h-6 text-white`}  
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/motion.svg" 
          fill={`${active === 'section1' ? '#312e81' : '#fff'}`} 
          viewBox="0 0 20 20"
        >
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </motion.svg>
    },
    {
      name: text2,
      sectionId: "section2",
      icon: 
        <motion.svg 
          className={`w-6 h-6 text-white ${active === 'section2' ? 'text-indigo-900' : 'text-white'}`} 
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          fill={`${active === 'section2' ? '#312e81' : '#fff'}`} 
          viewBox="0 0 14 18"
        >
          <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
        </motion.svg>,
    },
    {
      name: text3,
      sectionId: "section3",
      icon: 
        <motion.svg 
          className={`w-6 h-6 text-white ${active === 'section3' ? 'text-indigo-900' : 'text-white'}`} 
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/motion.svg" 
          fill={`${active === 'section3' ? '#312e81' : '#fff'}`} 
          viewBox="0 0 16 22"
        >
          <path d="M15.458 4a3 3 0 1 0-4.478 2.6A2.6 2.6 0 0 1 8.4 9H6.6a4.57 4.57 0 0 0-2.6.814v-3a3 3 0 1 0-2 0v8.368a3 3 0 1 0 2 0V13.6A2.607 2.607 0 0 1 6.6 11h1.8a4.6 4.6 0 0 0 4.548-4.049A3 3 0 0 0 15.458 4Z"/>
        </motion.svg>,
    },
    {
      name: text4,
      sectionId: "section4",
      icon: 
        <motion.svg 
          className={`w-6 h-6 text-white ${active === 'section4' ? 'text-indigo-900' : 'text-white'}`} 
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/motion.svg" 
          fill={`${active === 'section4' ? '#312e81' : '#fff'}`} 
          viewBox="0 0 24 24"
        >
          <path d="M20 3H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L12.414 16H20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM7.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
        </motion.svg>
    }
  ];

  return icons
}

export default iconsDinamic;