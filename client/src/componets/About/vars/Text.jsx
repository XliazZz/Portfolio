import { motion } from "framer-motion";

const Text = ({ hasScrolled }) => {
  let text1 = "";
  let text2 = "";
  let text3 = "";
  let text4 = "";

  if (localStorage.getItem('language') === 'es') {
    text1 = 'Soy de Argentina, Buenos Aires. Tengo 21 años y empece a programar a principios de 2023 y desde entonces no pare. Me encanta aprender y mejorar mis habilidades.';

    text2 = "Desarrolle proyectos con React, Redux, Express, MongoDB, PostgreSQL, NodeJS, JavaScript, Bootstrap, entre otros.";

    text3 = "Estudio en la Universidad de Buenos Aires, en la carrera de Ciencias de la Computacion. Tambien realice cursos en Argentina Programa, UBA, Udemy";

    text4 = "Me gusta trabajar en equipo, soy muy responsable, me gusta aprender de los demas y ayudar.";
  } else {
    text1 = 'I am from Argentina, Buenos Aires. I am 21 years old and I started programming at the beginning of 2023 and since then I have not stopped. I love learning and improving my skills.';

    text2 = "I developed projects with React, Redux, Express, MongoDB, PostgreSQL, NodeJS, JavaScript, Bootstrap, among others.";

    text3 = "I study at the University of Buenos Aires, in the Computer Science career. I also took courses at Argentina Programa, UBA, Udemy";

    text4 = "I like to work in a team, I am very responsible, I like to learn from others and help.";
  }

  return (
    <div>
      {text1.split('').map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={hasScrolled ? { opacity: 1 } : {}}
          transition={{
            duration: 0.05,  
            delay: i / 20  
          }}
          className="text-base mb-5 text-indigo-700 dark:text-indigo-300"
        >
          {letter}
        </motion.span>
      ))}

      <div className="mt-5">
        {text2.split('').map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={hasScrolled ? { opacity: 1 } : {}}
              transition={{
                duration: 0.15,  
                delay: (i / 20) + text1.length / 20  
              }}
              className="text-base mb-5 text-indigo-700 dark:text-indigo-300"
            >
              {letter}
            </motion.span>
          ))}
      </div>

      <div className="mt-5">
        {text3.split('').map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={hasScrolled ? { opacity: 1 } : {}}
            transition={{
              duration: 0.15,  
              delay: (i / 20) + (text1.length + text2.length) / 20  
            }}
            className="text-base mb-5 text-indigo-700 dark:text-indigo-300"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <div className="mt-5">
        {text4.split('').map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={hasScrolled ? { opacity: 1 } : {}}
            transition={{
              duration: 0.15,  
              delay: (i / 20) + (text1.length + text2.length + text3.length) / 20  
            }}
            className="text-base text-indigo-700 dark:text-indigo-300"
          >
            {letter}
          </motion.span>
        ))}
      </div>

    </div>
  );
};

export default Text;
