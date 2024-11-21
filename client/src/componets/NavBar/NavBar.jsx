import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cvEspañol from "../../utils/cvs/cv español.pdf";
import cvEnglish from "../../utils/cvs/cv english.pdf"

const NavBar = () => {

  const [theme, setTheme] = useState(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      return localTheme;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  });

  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage === null) {
      localStorage.setItem('language', 'es');
      return 'es';
    }
    return storedLanguage;
  });

  const handleLanguage = () => {
    if (language === 'es') {
      localStorage.setItem('language', 'en');
      window.location.reload();
    } else {
      localStorage.setItem('language', 'es');
      window.location.reload();
    }
  };

  let text3 = "";
  let text4 = "";

  if (language === 'es') {
    text3 = "English";
    text4 = "CV";
  } else {
    text3 = "Español";
    text4 = "CV";
  }
  
  const handleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      window.localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme])

  const downloadCV = () => {
    return language === 'es'
      ? cvEspañol
      : cvEnglish;
  };

  return (
    <motion.nav
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="pt-7 mr-3"
    >
      <div className="w-full">
        <div className="flex text-right content-end justify-end">
          <AnimatePresence mode="wait">
            {theme === 'light' ? (
              <motion.button
                className="cursor-pointer"
                key="light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                title="Modo claro"
                onClick={handleTheme}
              >
                <motion.svg 
                  className="dark:text-indigo-300 dark:hover:text-indigo-500 w-8 h-8 text-indigo-500 hover:text-indigo-300 mx-3" 
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                title="Modo oscuro"
                onClick={handleTheme}
              >
                <motion.svg 
                  className="dark:text-indigo-300 dark:hover:text-indigo-500 w-8 h-8 text-indigo-500 hover:text-indigo-300 mx-3" 
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

          <motion.button 
            className="cursor-pointer"
            onClick={handleLanguage}
            title={text3}
          >
              <motion.svg              
                className="dark:text-indigo-300 dark:hover:text-indigo-500 w-8 h-8 text-indigo-500 hover:text-indigo-300 mx-3" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1}}
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,23 C15,23 16,18 16,12 C16,6 15,1 12,1 C9,1 8,6 8,12 C8,18 9,23 12,23 Z M2,16 L22,16 M2,8 L22,8"/>
              </motion.svg>
          </motion.button>

        <motion.a 
          className="cursor-pointer"
          title={text4}
          href={downloadCV()}
          download
        >
          <motion.svg 
            className="dark:text-indigo-300 dark:hover:text-indigo-500 w-8 h-8 text-indigo-500 hover:text-indigo-300 mx-3" 
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
        </motion.a>
        
        </div>
      </div>
    </motion.nav>
  )
}

export default NavBar;