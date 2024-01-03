import { motion } from "framer-motion";
import React from "react";

let language = localStorage.getItem('language') || 'es';

let text1 = "";
let text2 = "";

let space = ' ';

let arrowStart = '<';
let arrowEnd = '/>';

let text3 = "";
let text4 = "";
let text5 = "";
let text6 = "";
let text7 = "";
let text8 = "";

if (language === 'es') {
  text1 = "Hola,";
  text2 = "bienvenidx!";
  text3 = "Puedo";
  text4 = "ayudarte";
  text5 = "a";
  text6 = "construir";
  text7 = "tu";
  text8 = "sueño";
} else {
  text1 = "Hello,";
  text2 = "welcome!";
  text3 = "I can";
  text4 = `help you`;
  text5 = "to";
  text6 = "build";
  text7 = "your";
  text8 = "dream";
}

const paragraph1 = () => {
  return (
    <>
      {text1.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="inline-block dark:text-white text-black"
        >
          {letter}
        </motion.span>
      ))}
      <span>{space}</span>
      {text2.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="inline-block dark:text-white text-black"

        >
          {letter}
        </motion.span>
      ))}
    </>
  );
};

const paragraph2 = () => {
  return (
    <>
      {text3.split(' ').map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          {wordIndex > 0 && <span>{space}</span>}
          {word.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 0 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="inline-block dark:text-white text-black"

            >
              {letter}
            </motion.span>
          ))}
        </React.Fragment>
      ))}
      <span>{space}</span>
      {text4.split(' ').map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          {wordIndex > 0 && <span>{space}</span>}
          {word.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 0 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="inline-block dark:text-white text-black"

            >
              {letter}
            </motion.span>
          ))}
        </React.Fragment>
      ))}
      <span>{space}</span>
      {text5.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="inline-block dark:text-white text-black"

        >
          {letter}
        </motion.span>
      ))}
      <span>{space}</span>
      <br />
      {text6.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="inline-block dark:text-white text-black"

        >
          {letter}
        </motion.span>
      ))}
      <span>{space}</span>
      {text7.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="inline-block dark:text-white text-black"

        >
          {letter}
        </motion.span>
      ))}
      <span>{space}</span>
      {text8.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="inline-block dark:text-white text-black"

        >
          {letter}
        </motion.span>
      ))}
      <motion.span
        className="text-indigo-800 dark:text-indigo-300 opacity-50text-indigo-300 opacity-50 font-bold text-6xl"
        initial={{ x: -1000, y: -45 }}
        animate={{ x: 160, y: -45 }}  
        transition={{ duration: 1, delay: 3 }}  
      >
        {arrowEnd}
      </motion.span>
    </>
  )
}


export { text1, text2, space, paragraph1, arrowStart, arrowEnd, paragraph2 };