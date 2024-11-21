import Form from "../Form/Form";
import ContactCard from "../ContactCard/ContactCard";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

const Contact = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkIfInView = () => {
      const section = document.getElementById('section4');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsInView(true);
        } 
      }
    };

    window.addEventListener('scroll', checkIfInView);

    return () => window.removeEventListener('scroll', checkIfInView);
  }, [])

  let text1 = "";

  if (localStorage.getItem('language') === 'es') {
    text1 = "Contacto";
    
  } else {
    text1 = "Contact";
  }

  return (
    <motion.div className="pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7 }}
      id="section4"
    >
      <h1 className="text-5xl ml-32 pt-3 text-left opacity-70 font-extrabold text-black dark:text-white">
        <span className="text-indigo-800 dark:text-indigo-300 opacity-50">{`<`}</span>
        {text1}
        <span className="text-indigo-800 dark:text-indigo-300 opacity-50">{`>`}</span>
      </h1>

      <div className="flex">
        <div className="flex-1 p-12">
          <ContactCard />
        </div>

        <div className="flex-1 ml-24 p-12">
          <div className="mx-auto">
            <Form />
          </div>
        </div>
      </div>

      <h2 className="text-5xl pr-5 text-right opacity-70 font-extrabold text-black dark:text-white">
        <span className="text-indigo-800 dark:text-indigo-300 opacity-50">{`</`}</span>
          {text1}
        <span className="text-indigo-800 dark:text-indigo-300 opacity-50">{`>`}</span>
      </h2>
    </motion.div>
  );
};

export default Contact;