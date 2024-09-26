import Link from "next/link";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} text-lightColor dark:text-darkColor relative group`}
      passHref
    >
      {title}
      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5
        group-hover:translate-x-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className, toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-lightColor dark:text-darkColor my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block  bg-light absolute left-0 -bottom-0.5
        group-hover:translate-x-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark `}
      >
        &nbsp;
      </span>
    </button>
  );
};

function NavBar() {
  const [mode, setMode] = useThemeSwitcher();

  const handleToggle = () => {
    setMode(mode === "dark" ? "light" : "dark");
    setOpen((pre) => false);
  };
  const [iseOpen, setOpen] = useState(false);

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-lightColor relative z-10 lg:px-16 md:px-12 sm:px-8 ">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={() => setOpen((pre) => !pre)}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            iseOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            iseOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
            iseOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      {/* desktop navbar */}

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-2" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Project" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap mt-2">
          {/* <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://example.com"
            whileHover={{ scale: 1, y: -2 }}
            className="w-6 mr-3 sm:mx-1"
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a> */}
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mikshu?tab=repositories"
            whileHover={{ scale: 1, y: -2 }}
            className="w-6 mx-3 sm:mx-1 !text-lightColor dark:text-lightColor"
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon mode={mode} isDesktop />
          </motion.a>
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/aatish-rana-4870b6134/"
            whileHover={{ scale: 1, y: -2 }}
            className="w-6 ml-3 sm:mx-1"
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={handleToggle}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light"
                ? "bg-light text-lightColor"
                : "bg-dark text-lightColor"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-lightColor" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>
      {/* mobile navbar */}
      {iseOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[65vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-lightColor/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={() => setOpen((pre) => !pre)}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={() => setOpen((pre) => !pre)}
            />
            <CustomMobileLink
              href="/projects"
              title="Project"
              className=""
              toggle={() => setOpen((pre) => !pre)}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={() => setOpen((pre) => !pre)}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              href="https://example.com"
              whileHover={{ scale: 1, y: -2 }}
              className="w-6 mx-3"
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mikshu?tab=repositories"
              whileHover={{ scale: 1, y: -2 }}
              className="w-6 mx-3"
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon mode={mode} />
            </motion.a>
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/aatish-rana-4870b6134/"
              whileHover={{ scale: 1, y: -2 }}
              className="w-6 ml-3"
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>

            <button
              onClick={handleToggle}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light"
                  ? "bg-dark text-lightColor"
                  : "bg-light text-lightColor"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-lightColor" />
              ) : (
                <MoonIcon className="fill-lightColor" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default NavBar;
