import react from "../../../assets/skills/react.svg";
import redux from "../../../assets/skills/redux.svg";
import express from "../../../assets/skills/express.svg";
import mongodb from "../../../assets/skills/mongo.svg";
import postgresql from "../../../assets/skills/postgresql.svg";
import nodejs from "../../../assets/skills/node.svg";
import javascript from "../../../assets/skills/javascript.svg";
import html5 from "../../../assets/skills/html.svg";
import css3 from "../../../assets/skills/css.svg";
import git from "../../../assets/skills/git.svg";
import github from "../../../assets/skills/github.svg";
import bootstrap from "../../../assets/skills/bootstrap.svg";
import tailwind from "../../../assets/skills/tailwind.svg";
import jwt from "../../../assets/skills/jwt.svg";
import restapi from "../../../assets/skills/restapi.svg";
import oauth from "../../../assets/skills/oauth.svg";
import aws from "../../../assets/skills/aws-rds.svg";
import { motion } from "framer-motion";

const Skills = ({ hasScrolled }) => {
  const skills = {
    JavaScript: javascript,
    NodeJS: nodejs,
    React: react,
    Express: express,
    "REST API": restapi,
    MongoDB: mongodb,
    PostgreSQL: postgresql,
    Redux: redux,
    JWT: jwt,
    OAuth: oauth,
    Tailwind: tailwind,
    Git: git,
    GitHub: github,
    Bootstrap: bootstrap,
    HTML5: html5,
    CSS3: css3,
    "Amazon RDS": aws
  };

  return (
    <div className="flex justify-center text-center content-center w-3/5">
      <ul className="flex flex-wrap justify-center text-gray-900 dark:text-white">
        {Object.keys(skills).map((skill, i) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={!hasScrolled ? { opacity: 0 } : {}}
            transition={{ duration: 0.3, delay: i / 10, repeat: Infinity, repeatDelay: 10 }}
            animate={hasScrolled ? { rotate: 360, repeatCount: Infinity, duration: 10, opacity: 1 } : {}}
            key={i}
            className="flex mb-8 cursor-default bg-zinc-600 rounded-xl me-2 p-2 md:me-6 items-center justify-center relative group"
          >
            <img src={skills[skill]} alt={skill} className="w-10 h-10" />
            
            <span className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black text-white p-1 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2">
              {skill}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
