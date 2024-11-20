import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          <motion.a 
            href="https://www.linkedin.com/in/elias-martinez-040980246/" target="_blank" rel="noreferrer" 
            className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Linkedin"
          >
            <motion.p 
              className="i-streamline-linkedin text-[#2563eb] w-10 h-10"
              whileHover={{ color: "#427dfd", transition: { duration: 0.2 } }}
            />
          </motion.a >

          <motion.a  
            href="https://github.com/XliazZz" target="_blank" rel="noreferrer"  
            className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="GitHub"
          >
            <motion.p 
              className="i-teenyicons-github-outline w-10 h-10 text-[#374151]"
              whileHover={{ color: "#636e80", transition: { duration: 0.2 } }}
            />
          </motion.a >

          <motion.a 
            href="https://www.instagram.com/xliazzzx/" target="_blank" rel="noreferrer"  
            className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Instagram"
          >
            <motion.p 
              className="i-akar-icons-instagram-fill w-10 h-10 text-[#c086ff]"
              whileHover={{ color: "#ab88d0", transition: { duration: 0.2 } }}
              />
          </motion.a>

            <motion.a 
            href="https://wa.me/1148884304" target="_blank" rel="noreferrer"  
            className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Whatsapp"
          >
            <motion.p 
              className="i-akar-icons-whatsapp-fill w-10 h-10 text-[#4AB045]"
              whileHover={{ color: "#428d3e", transition: { duration: 0.2 } }}
              />
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia;