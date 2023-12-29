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

  return (
    <motion.div className="mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7 }}
      id="section4"
    >
      <h1 className="text-5xl ml-32 pt-3 text-left opacity-70 font-extrabold">
        <span className="text-indigo-300 opacity-50">{`<`}</span>
        Contacto
        <span className="text-indigo-300 opacity-50">{`>`}</span>
      </h1>

      <div className="flex">
        <div className="flex-1 p-12">
          <ContactCard />
        </div>

        <div className="flex-1 ml-14 p-12">
          <div className="mx-auto max-w-[550px]">
            <Form />
          </div>
        </div>
      </div>

      <h2 className="text-5xl pr-5 text-right opacity-70 font-extrabold">
        <span className="text-indigo-300 opacity-50">{`</`}</span>
          Contacto
        <span className="text-indigo-300 opacity-50">{`>`}</span>
      </h2>
    </motion.div>
  );
};

export default Contact;