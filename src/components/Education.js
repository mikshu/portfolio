import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LitIcon from "./LitIcon";
import portfolioData from "../../public/portfolioData.json";


const Details = ({ type, time, place, info }) => {
  const ref = useRef();
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mt-0 w-[60%] flex flex-col items-center justify-between  md:w-[80%]  text-lightColor/90"
    >
      <LitIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-2xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/90 dark:text-light/90 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

function Education() {
  const ref = useRef();
  const educationDetails = portfolioData.pages.educations;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 md:my-28 sm:my-20">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-6  text-dark/80 dark:text-lightColor">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[36px] top-0 mt-16 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] sm:left-[30px] xs:left-[30px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-64 md:ml-32 xs:mx-16">
          <Details
            type="Bachelor Of Engineering In Computer Science"
            time={educationDetails.graduation.time}
            place={educationDetails.graduation.place}
            info={educationDetails.graduation.info}
          />
          <Details
            type="Polytechnic In Computer Science"
            time={educationDetails.college.time}
            place={educationDetails.college.place}
            info={educationDetails.college.info}
          />
          <Details
            type="10+2"
            time={educationDetails.school.time}
            place={educationDetails.school.place}
            info={educationDetails.school.info}
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
