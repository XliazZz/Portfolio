import { motion } from 'framer-motion';
import { paragraph1, arrowStart, paragraph2 } from './vars';
import ArrowSvg from './ArrowSvg';

const Home = () => {
  return (
    <div className='relative h-screen flex flex-col justify-between pb-44'>
      <header className="flex flex-col items-center justify-center h-full">
        <div>
          <motion.h2
            className="text-2xl ml-5 text-left cursor-default mb-4"
            initial={{ x: -1000, y: 0 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-indigo-800 dark:text-indigo-300 opacity-50">{arrowStart}</span>
            {paragraph1()}
          </motion.h2>

          <motion.h1
            className="text-7xl font-bold cursor-default mt-2"
            initial={{ x: -1000, y: 0 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1 }}
          >
            {paragraph2()}
          </motion.h1>
        </div>
      </header>
      <div className='fixed bottom-0 mb-8'>
        <ArrowSvg />
      </div>
    </div>
  );
};

export default Home;
