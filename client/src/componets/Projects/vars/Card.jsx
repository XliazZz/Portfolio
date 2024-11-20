/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import react from "../../../assets/skills/react.svg";
import redux from "../../../assets/skills/redux.svg";
import express from "../../../assets/skills/express.svg";
import mongodb from "../../../assets/skills/mongo.svg";
import postgresql from "../../../assets/skills/postgresql.svg";
import nodejs from "../../../assets/skills/node.svg";
import javascript from "../../../assets/skills/javascript.svg";
import html5 from "../../../assets/skills/html.svg";
import css3 from "../../../assets/skills/css.svg";
import bootstrap from "../../../assets/skills/bootstrap.svg";
import tailwind from "../../../assets/skills/tailwind.svg";
import jwt from "../../../assets/skills/jwt.svg";
import restapi from "../../../assets/skills/restapi.svg";
import oauth from "../../../assets/skills/oauth.svg";
import aws from "../../../assets/skills/aws-rds.svg";

const Card = ({ name, url, repository, skills, description, img, complete, description2, imgs, description2Eng, descriptionEng }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  }

  let text1 = "";
  let text2 = ""; 
  let text3 = "";
  let realDescription = '';

  if (localStorage.getItem('language') === 'es') {
    text1 = "WEB";
    text2 = "Repositorio";
    text3 = "Ver mas";
    realDescription = description;
  } else {
    text1 = "WEB";
    text2 = "Repository";
    text3 = "See more";
    realDescription = descriptionEng;
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
    <motion.article 
      className="bg-[#818CF8] h-full dark:bg-[#7C7FFF] p-3 rounded-xl shadow-custom-blue flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,  
        delay: 0.9  
      }}
    >
      <header className="card-header">
        <h2 className="font-bold text-left text-xl ml-2 text-gray-50 dark:text-white ">{name}</h2>

        <div className="content-center my-5">
          <motion.a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="transform mouse-pointer bg-[#3d41aa] text-sm p-2 mr-2 text-white font-semibold rounded hover:scale-90"
            whileHover={{ backgroundColor: "#5C61DB", transition: { duration: 0.2 } }}
          >
            {text1}
          </motion.a>
          <motion.a
            href={repository}
            target="_blank"
            rel="noreferrer"
            className="transform mouse-pointer bg-[#3d41aa] text-sm p-2 text-white font-semibold rounded hover:scale-90"
            whileHover={{ backgroundColor: "#5C61DB", transition: { duration: 0.2 } }}
          >
            {text2}
          </motion.a>
        </div>
      </header>

      <main className="card-content mt-auto flex-grow content-center">
        <img
          src={img}
          alt={`Imagen de ${name}`}
          className="rounded-sm min-h-[220px] max-h-[220px] object-cover shadow-indigo-600 shadow-md"
        />
        <p className="card-description w-full mt-2 text-white">{realDescription}</p>
        <div className="flex flex-wrap justify-center my-2 rounded-lg w-full p-3">
          {skillsImg}
        </div>
      </main>

      <div className="mt-1">
        <motion.button
          className="block w-full select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all text-white
          bg-[#3d41aa] disabled:pointer-events-none disabled:opacity-50"
          type="button"
          disabled={complete === false}
          onClick={handleModal}
          whileHover={{ backgroundColor: "#5C61DB", transition: { duration: 0.2 } }}
        >
          {text3}
        </motion.button>
      </div>

      {showModal && (
        <Modal
          name={name}
          description={description2}
          imgs={imgs}
          skills={skills}
          onClose={handleClose}
          url={url}
          repository={repository}
          descriptionEng={descriptionEng}
          description2Eng={description2Eng}
        />
      )}

    </motion.article>

  );
};

export default Card;

//probar cambio de color del div donde estan las skills