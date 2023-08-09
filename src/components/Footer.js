import React from "react";
import Layout from "./Layout";
import Link from "next/link";

import { motion } from 'framer-motion';

const Heart = () => {
  const heartVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360, 540, 720, 900, 1080],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <span className="text-dark dark:text-primaryDark text-2xl  px-1">
      <motion.div
        className="heart-animation"
        variants={heartVariants}
        animate="animate"
      >
        &#9825;
      </motion.div>
    </span>
  );
};


function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg text-lightColor dark:text-darkColor sm:text-base ">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:pt-2">
          Build With
          <Heart />
          by&nbsp;
          <Link href="/" target="_blank" className="underline underline-offset-2 text-dark dark:text-primaryDark">
            Aatish
          </Link>
        </div>
        <Link href="/" target="_blank" className="underline underline-offset-2">
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
}

export default Footer;
