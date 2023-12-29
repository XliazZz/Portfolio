import { useEffect } from "react";
import styles from "./Sphere.module.css"; 
import TagCloud from "TagCloud";
import { motion } from "framer-motion";

const Sphere = () => {

  useEffect(() => {
    return () => {
      const container = `.${styles.tagcloud}`;  
      const texts = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "NodeJS",
        "GIT",
        "TailwindCSS",
        "Bootstrap",
        "MongoDB",
        "Express",
        "Redux",
        "PostgreSQL",
        "Python",
        "Django",
      ];

      const options = {
        radius: 250,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <motion.div 
      className={`${styles.textSphere}`}
      initial={{ x: 0, y: -1000 }}
      animate={{ x: 0, y: 0 }}
      transition={{ duration: 1 }}
    >  
      <span className={styles.tagcloud}></span>  
    </motion.div>
  );
};

export default Sphere;