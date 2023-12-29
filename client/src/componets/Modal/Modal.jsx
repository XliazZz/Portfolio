import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Carousel from '../Carousel/Carousel';

const Modal = ({ name, description, onClose, imgs, skills, url, repository }) => {
  const sentences = description.split('.  ');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);


  return (
    <div className="fixed inset-0 w-full h-full z-20 bg-black bg-opacity-80 duration-300 overflow-y-auto">

      <div className="relative sm:w-3/4 md:w-1/2 lg:w-4/5 mx-2 sm:mx-auto my-10 opacity-100">

        <div className="relative bg-gray-800 shadow-lg rounded-md text-white z-20"  style={{ overflowY: 'auto', maxHeight: '90vh' }}>

          <header className="flex items-center justify-center p-2">
            <h2 className="font-extrabold text-indigo-300 mt-4 text-4xl">{name}</h2>
            <button className="focus:outline-none p-2 fixed top-11 right-36 " onClick={onClose}>
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </button>
          </header>

          <div className="p-10 pb-5 pt-5">
            <Carousel imgs={imgs}/>
          </div>

          <main className="p-10 pb-5 pt-0 text-center">
            {sentences.map((sentence, index) => (
              <p className='text-indigo-100' key={index}>{sentence}.</p>
            ))}
          </main>

          <article className='my-5 mt-10'>
            <h2 className="font-light mb-5 text-3xl">Enlaces</h2>
            <div className="flex justify-center mb-4 flex-wrap ">
              <motion.a 
                href={url} target='_blank' rel='noreferrer'
                className="transform mouse-pointer bg-indigo-400 text-base p-2 text-black font-semibold rounded-md "
                whileHover={{ scale: 1.1, backgroundColor: '#717ff8' }}
                whileTap={{ scale: 0.9 }}
              >
                Ver web
              </motion.a>

                <p className='mx-3'></p>

              <motion.a 
                href={repository} target='_blank' rel='noreferrer'
                className="transform mouse-pointer bg-indigo-400 text-vase p-2 text-black font-semibold rounded-md "
                whileHover={{ scale: 1.1, backgroundColor: '#717ff8' }}
                whileTap={{ scale: 0.9 }}
              >
                Ver repo
              </motion.a>
            </div>
          </article>


          <h2 className="font-light my-16 mb-5 text-3xl">Tecnologias utilizadas</h2>
          <div className="flex justify-center mb-4 flex-wrap ">
            {skills && skills.map((skill, index) => (
              <motion.span 
                key={index} 
                className="text-xl mr-2 mb-3 bg-gray-950 text-white rounded-md p-1 cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Modal;