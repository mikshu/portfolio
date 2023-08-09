import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import portfolioData from "../../public/portfolioData.json";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light/75 lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-light xs:dark:text-lightColor xs:font-bold"
      whileHover={{ scale: 1.06 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

function Skills() {
  const skillsData = portfolioData.pages.skillsData;

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    // Add event listener for window resize
    window.addEventListener("resize", handleWindowResize);
    // Call the handler once to set initial view
    handleWindowResize();
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const reducedSkillsData = skillsData.map((skill) => ({
    ...skill,
    x: isMobileView ? `calc(${skill.x} - 16vw)` : `calc(${skill.x} - 6vw)`,
    y: isMobileView ? `calc(${skill.y} - 2vw)` : `calc(${skill.y} - -6vw)`,
  }));

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 mb-24 w-full text-center md:text-6xl md:mt-32 md:mb-6 xl:mb-6 sm:mb-6 xs:mb-4 text-dark/75 dark:text-lightColor">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight
       dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
       lg:bg-circularLightLg lg:dark:bg-circularDarkLg
       md:bg-circularLightLg md:dark:bg-circularDarkLg
       sm:bg-circularLightLg sm:dark:bg-circularDarkLg
       "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-light text-lightColor/90 p-8 shadow-dark cursor-pointer dark:text-lightColor dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.06 }}
        >
          Web
        </motion.div>
        <div>
          {reducedSkillsData.map((skill, index) => (
            <Skill key={index} name={skill.name} x={skill.x} y={skill.y} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
