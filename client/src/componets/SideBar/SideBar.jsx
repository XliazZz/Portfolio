import { motion } from "framer-motion";
import iconsDinamic from "../../assets/iconsSideBar";
import styled from "./SideBar.module.css";
import { div1, ul, divIconP, li } from "./vars";

const SideBar = ({ scrollToSection, activeSection  }) => {
  return (
    <motion.div
      className={`${div1} ${styled.div1} z-50`}
      initial={{ x: -1000, y: -200 }}
      animate={{ x: -10 }}
      transition={{ duration: 1 }}
    >
      <ul className={ul}>
        {iconsDinamic(activeSection).map((icon, index) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection(icon.sectionId)}
            key={index}
            className={li}
          >
            <div className={`${divIconP} cursor-pointer`} >
              <span>{icon.icon}</span>
              <p className="text-sm mt-2">{icon.name}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SideBar;