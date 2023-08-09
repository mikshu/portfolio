import React from "react";
import { motion, useScroll } from "framer-motion";

function LitIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-dark mt-16 dark:stroke-light">
      <svg className="-rotate-90  md:w-[60px] md:h-[60px] xs:w-[60px] xs:h-[60px]" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75px"
          cy="50"
          r="20"
          className="stroke-primaryDark stroke-1 fill-none"
        />
        <motion.circle
          cx="75px"
          cy="50"
          r="20"
          className="stroke-[4px] fill-primary dark:fill-dark"
          style={{ pathLength: scrollYProgress}}
        />
        <circle
          cx="75px"
          cy="50"
          r="10"
          className="stroke-dark stroke-1 animate-pulse fill-primaryDark"
        />
      </svg>
    </figure>
  );
}

export default LitIcon;
