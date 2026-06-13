import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import portfolioData from "../../public/portfolioData.json";

const navLinks = [
  { href: "#home", title: "Home" },
  { href: "#experience", title: "Experience" },
  { href: "#projects", title: "Projects" },
  { href: "#skills", title: "Skills" },
  { href: "#contact", title: "Contact" },
];

const NavLink = ({ href, title, className, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`${className} text-lightColor dark:text-darkColor hover:text-primary dark:hover:text-primaryDark transition-colors`}
  >
    {title}
  </a>
);

function NavBar() {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setOpen] = useState(false);
  const { personal } = portfolioData;

  const handleToggle = () => {
    setMode(mode === "dark" ? "light" : "dark");
    setOpen(false);
  };

  const closeMenu = () => setOpen(false);

  return (
    <header className="w-full px-24 py-6 font-medium flex items-center justify-between sticky top-0 z-50 bg-light/90 dark:bg-dark/90 backdrop-blur-sm border-b border-dark/5 dark:border-darkColor/5 lg:px-12 md:px-6">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className={`bg-dark dark:bg-darkColor block h-0.5 w-6 rounded-sm transition-all ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`} />
        <span className={`bg-dark dark:bg-darkColor block h-0.5 w-6 rounded-sm my-0.5 transition-all ${isOpen ? "opacity-0" : "opacity-100"}`} />
        <span className={`bg-dark dark:bg-darkColor block h-0.5 w-6 rounded-sm transition-all ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`} />
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center gap-6 md:gap-4">
          {navLinks.map(({ href, title }) => (
            <NavLink key={href} href={href} title={title} className="text-sm" />
          ))}
        </nav>
        <nav className="flex items-center gap-3">
          <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon mode={mode} isDesktop className="w-5 h-5" />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <button
            onClick={handleToggle}
            className="flex items-center justify-center rounded-full p-1.5 border border-dark/10 dark:border-darkColor/20"
            aria-label="Toggle theme"
          >
            {mode === "dark" ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="min-w-[70vw] flex flex-col gap-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-dark/95 dark:bg-light/95 rounded-xl backdrop-blur-md py-12 px-8 lg:flex">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map(({ href, title }) => (
              <NavLink key={href} href={href} title={title} className="text-lg" onClick={closeMenu} />
            ))}
          </nav>
          <nav className="flex items-center justify-center gap-4">
            <a href={personal.github} target="_blank" rel="noreferrer"><GithubIcon mode={mode} /></a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <button onClick={handleToggle} className="rounded-full p-1.5 border border-darkColor/20">
              {mode === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>
        </div>
      )}

      <div className="absolute left-1/2 top-3 -translate-x-1/2 lg:hidden">
        <Link href="/"><Logo /></Link>
      </div>
    </header>
  );
}

export default NavBar;
