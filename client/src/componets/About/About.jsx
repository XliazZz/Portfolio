import { motion } from "framer-motion"
import Skills from "./vars/Skills"
import Text from "./vars/Text"
import SocialMedia from "./SocialMedia"

const About = ({ hasScrolled }) => {
  const img = 'https://res.cloudinary.com/do5ubt5g0/image/upload/v1705000572/Captura_desde_2024-01-11_16-15-54_nyzzpe.png';

  let text1 = "";
  let text2 = "";
  let text3 = "";

  if (localStorage.getItem('language') === 'es') {
    text1 = "Desarrollador web full-stack";
    text2 = "Redes sociales";
    text3 = "Yo";
  } else {
    text1 = "Full-stack web developer";
    text2 = "My social media accounts";
    text3 = "Me";
  }

  return (
    <div className=" ml-32 mb-24">
      <motion.h1
        className="text-5xl pt-3 text-left opacity-70 font-extrabold text-black dark:text-white"
      >
        <span className="text-indigo-800 dark:text-indigo-300 opacity-50">{`<`}</span>
        {text3}
        <span className="text-indigo-800 dark:text-indigo-300 opacity-50">{`>`}</span>
      </motion.h1>

      <div className="ml-10">
        <div className=" relative flex items-center justify-center overflow-hidden z-50 ">
          <div className="relative mx-auto h-full px-2  pb-20  md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row ">
              <div className=" relative ">
                <div className="lg:max-w-7xl lg:pr-2 relative z-40">
                  <h2 className="mb-3 font-bold max-w-lg text-5xl leading-snug tracking-tight text-g1 sm:text-6xl sm:leading-snug text-black dark:text-white">
                    Elias Martinez
                    <span className="my-1 inline-block font-light px-4 text-3xl -translate-y-10 animate__animated animate__flash">{text1}</span>
                  </h2>
                  <Text hasScrolled={ hasScrolled }/>
                </div>
              </div>
              <div className="relative hidden lg:ml-20 lg:block lg:w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-1 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                </svg>
                <div className="abg-orange-400 h-80 w-80  overflow-hidden rounded-[2rem] rounded-br-none rounded-tl-none">
                  <img src={img}/>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>

      <div className="flex flex-col items-center text-black dark:text-white">
        <h2 className="font-bold text-4xl mt-10 mb-5 ">Skills</h2>
        <Skills hasScrolled={hasScrolled}/>
      </div>

      <div className="mt-10 text-black dark:text-white">
        <h2 className="font-light text-4xl mt-5 mb-5 italic">{text2}</h2>
        <SocialMedia />
      </div>

      <motion.h2
        className="text-5xl pr-5 pt-3 text-right opacity-70 font-bold text-black dark:text-white"
      >
        <span className="text-indigo-800 dark:text-indigo-300 opacity-50">{`</`}</span>
        {text3}
        <span className="text-indigo-800 dark:text-indigo-300 opacity-50">{`>`}</span>
      </motion.h2>
    </div>
  )
}

export default About; 