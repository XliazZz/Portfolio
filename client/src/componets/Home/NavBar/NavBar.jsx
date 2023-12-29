import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [theme, setTheme] = useState('light');

  const iconVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.nav
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="pt-2 mr-3"
    >
      <div className="w-full">
        <div className="flex text-right content-end justify-end">
          <AnimatePresence wait>
            {theme === 'light' ? (
              <motion.button
                className="cursor-pointer"
                key="light"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={iconVariants}
              >
                <motion.svg 
                  className="w-8 h-8 text-indigo-300 hover:text-indigo-500 mx-3" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"
                  />
                </motion.svg>
              </motion.button>
            ) : (
              <motion.button
                className="cursor-pointer"
                key="dark"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={iconVariants}
              >
                <motion.svg 
                  className="w-8 h-8 text-indigo-300 hover:text-indigo-500 mx-3" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 18 20"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"/>
                </motion.svg>
              </motion.button>
            )}
          </AnimatePresence>

          <button className="cursor-pointer">
            <motion.svg 
                className="w-8 h-8 text-indigo-300 hover:text-indigo-500 mx-3" 
                aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 21 20"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1}}
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </motion.svg>
          </button>

        <button className="cursor-pointer">
          <motion.svg 
            className="w-8 h-8 text-indigo-300 hover:text-indigo-500 mx-3" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 16 20"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
          </motion.svg>
        </button>
        
        </div>
      </div>
    </motion.nav>
  )
}

export default NavBar;