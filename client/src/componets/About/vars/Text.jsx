import { motion } from "framer-motion";

const Text = ({ hasScrolled }) => {
  const text1 = "Soy de Argentina, Buenos Aires. Tengo 21 años y empece a programar a principios de 2023 y desde entonces no pare. Me encanta aprender y mejorar mis habilidades.".split('');

  const text2 = "Desarrolle proyectos con React, Redux, Express, MongoDB, PostgreSQL, NodeJS, JavaScript, Bootstrap, entre otros.".split('');

  const text3 = "Estudio en la Universidad de Buenos Aires, en la carrera de Ciencias de la Computacion. Tambien realice cursos en Argentina Programa, UBA, Udemy".split('');

  const text4 = "Me gusta trabajar en equipo, soy muy responsable, me gusta aprender de los demas y ayudar.".split('');

  return (
    <div>
      {text1.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={hasScrolled ? { opacity: 1 } : {}}
          transition={{
            duration: 0.05,  
            delay: i / 20  
          }}
          className="text-base mb-5 text-indigo-300"
        >
          {letter}
        </motion.span>
      ))}

      <div className="mt-5">
        {text2.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={hasScrolled ? { opacity: 1 } : {}}
              transition={{
                duration: 0.15,  
                delay: (i / 20) + text1.length / 20  
              }}
              className="text-base mb-10 text-indigo-300"
            >
              {letter}
            </motion.span>
          ))}
      </div>

      <div className="mt-5">
        {text3.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={hasScrolled ? { opacity: 1 } : {}}
            transition={{
              duration: 0.15,  
              delay: (i / 20) + (text1.length + text2.length) / 20  
            }}
            className="text-base mb-10 text-indigo-300"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <div className="mt-5">
        {text4.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={hasScrolled ? { opacity: 1 } : {}}
            transition={{
              duration: 0.15,  
              delay: (i / 20) + (text1.length + text2.length + text3.length) / 20  
            }}
            className="text-base text-indigo-300"
          >
            {letter}
          </motion.span>
        ))}
      </div>

    </div>
  );
};

export default Text;
