import { motion, AnimatePresence } from 'framer-motion';
import Card from './vars/Card';
import { proyects } from './vars/vars';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkIfInView = () => {
      const section = document.getElementById('section3');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsInView(true);
        } 
      }
    };

    window.addEventListener('scroll', checkIfInView);

    return () => window.removeEventListener('scroll', checkIfInView);
  }, []);

  let text1 = "";

  if (localStorage.getItem('language') === 'es') {
    text1 = "Proyectos";
  } else {
    text1 = "Projects";
  }

  return (
    <section className="ml-32 mb-24" id="section3">
      <motion.h1 
        className="text-5xl pt-3 text-left opacity-70 font-extrabold text-black dark:text-white"
      >
        <span className="text-indigo-800 dark:text-indigo-300 opacity-50">{`<`}</span>
        {text1}
        <span className="text-indigo-800 dark:text-indigo-300 opacity-50">{`>`}</span>
      </motion.h1>

      <div className="grid grid-cols-3 pt-9 p-16 gap-5">
        <AnimatePresence>
          {isInView && proyects.map((proyect, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              transition={{
                duration: 1,  
                delay: index * 0.5  
              }}
            >
              <Card
                name={proyect.name}
                url={proyect.url}
                repository={proyect.repository}
                skills={proyect.skills}
                description={proyect.description}
                img={proyect.img}
                complete={proyect.complete}
                description2={proyect.description2}
                imgs={proyect.imgs}
                descriptionEng={proyect.descriptionEng}
                description2Eng={proyect.description2Eng}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <motion.h2 className="text-5xl pr-5 text-right opacity-70 font-extrabold text-black dark:text-white">
        <span className="text-indigo-800 dark:text-indigo-300 opacity-50">{`</`}</span>
        {text1}
        <span className="text-indigo-800 dark:text-indigo-300 opacity-50">{`>`}</span>
      </motion.h2>
    </section>
  );
};

export default Projects;
