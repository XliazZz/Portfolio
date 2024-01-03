import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Carousel from '../Carousel/Carousel';

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
    text1 = "Enlaces";
    text2 = "Ver web";
    text3 = "Ver repo";
    text4 = "Tecnologias utilizadas";
  } else {
    sentences = description2Eng.split('.  ');
    text1 = "Links";
    text2 = "See web";
    text3 = "See repo";
    text4 = "Technologies used";
  }


  return (
    <div className="fixed inset-0 w-full h-full z-20 bg-black bg-opacity-80 duration-300 overflow-y-auto">

      <div className="relative sm:w-3/4 md:w-1/2 lg:w-4/5 mx-2 sm:mx-auto my-10 opacity-100">

        <div className="relative bg-gray-300 dark:bg-gray-800 shadow-lg rounded-md text-white z-20"  style={{ overflowY: 'auto', maxHeight: '90vh' }}>

          <header className="flex items-center justify-center p-2">
            <h2 className="font-extrabold text-indigo-500 dark:text-indigo-300 mt-4 text-4xl">{name}</h2>
            <motion.button 
              className="focus:outline-none p-1 fixed top-11 right-36 rounded-full hover:bg-gray-100 bg-gray-200 m-2 text-red-700" 
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
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

          <main className="p-10 pb-5 pt-0 text-center">
            {sentences.map((sentence, index) => (
              <p className='text-indigo-950 dark:text-indigo-200' key={index}>{sentence}.</p>
            ))}
          </main>

          <article className='my-5 mt-10'>
            <h2 className="font-light mb-5 text-3xl dark:text-white text-black">{text1}</h2>
            <div className="flex justify-center mb-4 flex-wrap ">
              <motion.a 
                href={url} target='_blank' rel='noreferrer'
                className="transform mouse-pointer bg-indigo-900 hover:bg-indigo-950 dark:bg-indigo-400 text-base p-2 text-white dark:text-black font-semibold rounded-md "
                whileHover={{ scale: 1.1, backgroundColor: '#717ff8' }}
                whileTap={{ scale: 0.9 }}
              >
                {text2}
              </motion.a>

                <p className='mx-3'></p>

              <motion.a 
                href={repository} target='_blank' rel='noreferrer'
                className="transform mouse-pointer bg-indigo-900 hover:bg-indigo-950 dark:bg-indigo-400 text-base p-2 text-white dark:text-black font-semibold rounded-md "
                whileHover={{ scale: 1.1, backgroundColor: '#717ff8' }}
                whileTap={{ scale: 0.9 }}
              >
                {text3}
              </motion.a>
            </div>
          </article>


          <h2 className="font-light my-16 mb-5 text-3xl dark:text-white text-black">{text4}</h2>
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