import { motion } from "framer-motion"
import Skills from "./vars/Skills"
import Text from "./vars/Text"
import SocialMedia from "./SocialMedia"

const About = ({ hasScrolled }) => {
  const img = 'https://media.licdn.com/dms/image/D4D03AQEQSHpyB0B6XA/profile-displayphoto-shrink_800_800/0/1701752410452?e=1708560000&v=beta&t=7whMrcJZD7QgL7fxDthIOwskdYkpAMPm2li9WF9iOyo'

  return (
    <div className=" ml-32 mb-24">
      <motion.h1
        className="text-5xl pt-3 text-left opacity-70 font-extrabold"
      >
        <span className="text-indigo-300 opacity-50">{`<`}</span>
        {`Yo`}
        <span className="text-indigo-300 opacity-50">{`>`}</span>
      </motion.h1>

      <section className="ml-10">
        <div className=" relative flex items-center justify-center overflow-hidden z-50 ">
          <div className="relative mx-auto h-full px-2  pb-20  md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row ">
              <div className=" relative ">
                <div className="lg:max-w-7xl lg:pr-2 relative z-40">
                  <h2 className="mb-3 font-bold max-w-lg text-5xl leading-snug tracking-tight text-g1 sm:text-6xl sm:leading-snug">
                    Elias Martinez
                    <span className="my-1 inline-block font-light px-4 text-3xl -translate-y-10 animate__animated animate__flash">Desarrollador web full-stack</span>
                  </h2>
                  <Text hasScrolled={ hasScrolled }/>
                </div>
              </div>
              <div className="relative hidden lg:ml-20 lg:block lg:w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-1 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                </svg>
                <div className="abg-orange-400 h-80 w-80  overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                  <img src={img}/>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h2 className="font-bold text-4xl mt-10 mb-5">Skills</h2>
        <Skills hasScrolled={hasScrolled}/>
      </section>

      <section className="mt-10">
        <h2 className="font-light text-4xl mt-5 mb-5">Redes sociales</h2>
        <SocialMedia />
      </section>

      <motion.h2
        className="text-5xl pr-5 pt-3 text-right opacity-70 font-bold"
      >
        <span className="text-indigo-300 opacity-50">{`</`}</span>
        {`Yo`}
        <span className="text-indigo-300 opacity-50">{`>`}</span>
      </motion.h2>
    </div>
  )
}

export default About; 