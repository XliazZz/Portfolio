import { motion } from "framer-motion";

const text1 = "Hola,";
const text2 = "bienvenidx!";

const space = ' ';

const arrowStart = '<';
const arrowEnd = '/>';

const text3 = "Puedo";
const text4 = "ayudarte";
const text5 = "a";
const text6 = "construir";
const text7 = "tu";
const text8 = "sueño";

const paragraph1 = () => {
  return (
    <>
      {text1.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="inline-block"
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
          className="inline-block"
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
      {text3.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
      <span>{space}</span>
      {text4.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
      <span>{space}</span>
      {text5.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="inline-block"
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
          className="inline-block"
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
          className="inline-block"
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
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
      <motion.span
        className="text-indigo-300 opacity-50 font-bold text-6xl"
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