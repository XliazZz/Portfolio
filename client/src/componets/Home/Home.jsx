import { motion } from 'framer-motion';
import { paragraph1, arrowStart, paragraph2 } from './vars';
import Sphere from './Sphere/Sphere';
import ArrowSvg from './ArrowSvg';
import NavBar from '../NavBar/NavBar';

const Home = () => {
  return (
    <div className=' mb-44'>
      <NavBar/>
      <section className="flex ml-10 justify-center items-center">
        <div className="ml-10">
          <motion.h2
            className="text-2xl ml-5 text-left"
            initial={{ x: -1000, y: 0 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-indigo-800 dark:text-indigo-300 opacity-50">{arrowStart}</span>
            {paragraph1()}
          </motion.h2>

          <motion.h1
            className="text-5xl pt-5 font-bold"
            initial={{ x: -1000, y: 0 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1 }}
          >
            {paragraph2()}
          </motion.h1>
        </div>

        <div className="mx-20 ml-72 my-10">
          <Sphere />
        </div>
      </section>

      <div className='mt-14'>
        <ArrowSvg />
      </div>

    </div>
  );
};

export default Home;
