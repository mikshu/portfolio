import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LitIcon from "./LitIcon";
import portfolioData from "../../public/portfolioData.json";


const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef();
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mt-0 w-[60%] flex flex-col items-center justify-between md:w-[80%]">
      <LitIcon reference={ref} />
      <motion.div initial={{y: 50}} whileHover={{y:0}} transition={{duration : 0.5, type: 'spring'}}>
        <h3 className="capitalize font-bold text-2xl sm:text-2xl xs:text-lg text-lightColor/60 ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noreferrer"
            className="capitalize text-lightColor"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/90 dark:text-light/90 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm text-lightColor">{work}</p>
      </motion.div>
    </li>
  );
};

function Experience() {
  const ref = useRef();
  const experienceDetails = portfolioData.pages.experience;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 md:my-28 sm:my-16">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-6  text-dark/80 dark:text-lightColor">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[36px] top-0 mt-16 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] sm:left-[30px] xs:left-[30px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-64 md:ml-32 xs:mx-16">
          <Details
            position={experienceDetails.fresher.position}
            company={experienceDetails.fresher.company}
            companyLink={experienceDetails.fresher.companyLink}
            time={experienceDetails.fresher.time}
            address={experienceDetails.fresher.address}
            work={experienceDetails.fresher.work}
          />
          <Details
           position={experienceDetails.developer.position}
           company={experienceDetails.developer.company}
           companyLink={experienceDetails.developer.companyLink}
           time={experienceDetails.developer.time}
           address={experienceDetails.developer.address}
           work={experienceDetails.developer.work}
          />
          <Details
           position={experienceDetails.seniorDev.position}
           company={experienceDetails.seniorDev.company}
           companyLink={experienceDetails.seniorDev.companyLink}
           time={experienceDetails.seniorDev.time}
           address={experienceDetails.seniorDev.address}
           work={experienceDetails.seniorDev.work}
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
