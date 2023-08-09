import React from "react";
import { CircularText } from "./icons";
import Link from "next/link";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

function HireMe() {
  const [mode, setMode]= useThemeSwitcher()
  return (
    <div className="fixed left-4 bottom-4 flex items-center overflow-hidden justify-center md:right-2 md:left-auto md:top-[-9px] md:bottom-auto md:absolute">
      <div className="w-46 h-auto flex items-center justify-center relative md:w-28">
        <CircularText className="fill-dark animate-spin-slow dark:fill-light" mode={mode}/>
        <Link
          href="mailto:minhasaatish@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-1/2 bg-dark text-light  w-20  h-20 shadow-md border-solid border-dark rounded-full font-semibold transition-colors duration-300 hover:bg-light hover:text-dark hover:border-dark border-2 border-transparent dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-[2.5rem] md:h-[2.5rem] md:text-[8px] md:hidden sm:right-0"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default HireMe;
