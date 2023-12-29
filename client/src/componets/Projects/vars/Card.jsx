/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../../Modal/Modal";

const Card = ({ name, url, repository, skills, description, img, complete, description2, imgs }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  }

  return (
    <motion.article 
      className="bg-gray-950 p-3 shadow-lg rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{
        duration: 1,  
        delay: 0.9  
      }}
    > 

      <header className="card-header">
        <h2 className="font-semibold text-left text-xl ml-2 text-gray-900 dark:text-white ">{name}</h2>

        <div className="content-center my-5">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="transform mouse-pointer bg-gray-800 text-sm p-2 mr-2 text-white  font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90"
            disabled={complete === false}
          >
            Vivo
          </a>
          <a
            href={repository}
            target="_blank"
            rel="noreferrer"
            className="transform mouse-pointer bg-gray-800 text-sm p-2 text-white font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90 "
          >
            Repositorio
          </a>
        </div>
        
      </header>

      <main className="card-content mt-7">
        <img
          src={img}
          alt={`Imagen de ${name}`}
          className="rounded-lg"
        />

        <p className="card-description m-5">{description}</p>

        <div className="flex flex-wrap ">
          {skills && skills.map((skill, index) => (
            <motion.span 
              key={index} 
              className="text-sm mr-2 mb-3 bg-gray-800  rounded-md p-1 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <div className="p-3 align-bottom pt-0">
          <button
            className="block w-full select-none rounded-lg mt-5 py-3 px-6 text-center align-middle font-sans bg-gray-900 text-xs font-bold uppercase transition-all hover:bg-gray-800 hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50"
            type="button"
            disabled={complete === false}
            onClick={handleModal}
          >
            Ver mas
          </button>
        </div>
      </main>
      {showModal && (
        <Modal
          name={name}
          description={description2}
          imgs={imgs}
          skills={skills}
          onClose={handleClose}
          url={url}
          repository={repository}
        />
      )}
    </motion.article>
  );
};

export default Card;
