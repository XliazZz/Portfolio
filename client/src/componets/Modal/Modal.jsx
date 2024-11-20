import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Carousel from '../Carousel/Carousel';
import react from '../../assets/skills/react.svg';
import redux from '../../assets/skills/redux.svg';
import express from '../../assets/skills/express.svg';
import mongodb from '../../assets/skills/mongo.svg';
import postgresql from '../../assets/skills/postgresql.svg';
import nodejs from '../../assets/skills/node.svg';
import javascript from '../../assets/skills/javascript.svg';
import html5 from '../../assets/skills/html.svg';
import css3 from '../../assets/skills/css.svg';
import bootstrap from '../../assets/skills/bootstrap.svg';
import tailwind from '../../assets/skills/tailwind.svg';
import jwt from '../../assets/skills/jwt.svg';
import restapi from '../../assets/skills/restapi.svg';
import oauth from '../../assets/skills/oauth.svg';
import aws from '../../assets/skills/aws-rds.svg';

const Modal = ({ name, description, onClose, imgs, skills, url, repository, description2Eng }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  let sentences = [];
  let text1 = "";
  let text2 = "";
  let text3 = "";
  let text4 = "";

  if (localStorage.getItem('language') === 'es') {
    sentences = description.split('.  ');
    text1 = "Mira mi trabajo";
    text2 = "Ver web";
    text3 = "Ver repo";
    text4 = "Tecnologias utilizadas";
  } else {
    sentences = description2Eng.split('.  ');
    text1 = "Review my work";
    text2 = "See web";
    text3 = "See repo";
    text4 = "Technologies used";
  }

  const skillsList = [
    { name: "React", img: react },
    { name: "Redux", img: redux },
    { name: "Express", img: express },
    { name: "MongoDB", img: mongodb },
    { name: "PostgreSQL", img: postgresql },
    { name: "Node", img: nodejs },
    { name: "Javascript", img: javascript },
    { name: "HTML", img: html5 },
    { name: "CSS", img: css3 },
    { name: "Bootstrap", img: bootstrap },
    { name: "Tailwind", img: tailwind },
    { name: "JWT", img: jwt },
    { name: "REST API", img: restapi },
    { name: "OAuth", img: oauth },
    { name: "AWS RDS", img: aws },
  ]

  const skillsImg = skillsList
    .filter(skill => skills.includes(skill.name))
    .map((skill) => (
      <motion.img
        key={skill.name}
        src={skill.img}
        alt={skill.name}
        className="h-10 w-10 rounded-full m-1 bg-indigo-900 p-1"
        title={skill.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2
        }}
      />
    ));

  return (
    <div className="fixed inset-0 w-full h-full bg-black bg-opacity-90 duration-300 overflow-y-auto z-50">

      <div className="relative sm:w-3/4 md:w-1/2 lg:w-4/5 mx-2 sm:mx-auto my-10 opacity-100">

        <div className="relative shadow-lg rounded-md z-20
        text-white bg-gray-300
        dark:bg-[#7C7FFF]"  
          style={{ overflowY: 'auto', maxHeight: '90vh' }}
        >

          <header className="flex items-center justify-center p-2">
            <h2 className="font-extrabold italic mt-4 text-4xl
              text-indigo-500 
              dark:text-indigo-950 "
            >{name}</h2>

            <motion.button 
              className="focus:outline-none p-1 fixed top-11 right-[174px] rounded-full m-2
              text-red-700 bg-gray-200
              dark:bg-indigo-950 dark:text-indigo-300" 
              onClick={onClose}
              whileHover={{ scale: 1.1, color: "#ff0000", transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </motion.button>
          </header>

          <div className="p-14 pb-5 pt-5">
            <Carousel imgs={imgs}/>
          </div>

          <div className='flex h-full my-auto text-center items-center origin-center object-center justify-center content-center'>
            <section className="mx-5 text-center w-[55%] py-2">
              {sentences.map((sentence, index) => (
                <p className='text-indigo-950 dark:text-indigo-950 font-semibold' key={index}>{sentence}.</p>
              ))}
            </section>

            <section className='w-[30%] h-full my-auto text-center items-center origin-center object-center justify-center content-center'>
              <article className='my-5'>
                <h2 className="font-light mb-2 text-3xl dark:text-white text-black">{text1}</h2>
                <div className="flex justify-center mb-4 flex-wrap ">
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="transform mouse-pointer bg-[#3d41aa] text-sm p-2 mr-2 text-white font-semibold rounded hover:scale-105"
                  whileHover={{ backgroundColor: "#5C61DB", transition: { duration: 0.2 } }}
                >
                  {text2}
                </motion.a>
                <motion.a
                  href={repository}
                  target="_blank"
                  rel="noreferrer"
                  className="transform mouse-pointer bg-[#3d41aa] text-sm p-2 text-white font-semibold rounded hover:scale-105"
                  whileHover={{ backgroundColor: "#5C61DB", transition: { duration: 0.2 } }}
                >
                  {text3}
                </motion.a>
                </div>
              </article>


              <h2 className="font-light my-3 text-3xl dark:text-white text-black">{text4}</h2>
              <div className="flex justify-center flex-wrap pb-12">
                {skillsImg}
              </div>
            </section>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Modal;