import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import portfolioData from "../../public/portfolioData.json";

function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="w-full border-t border-solid border-dark/10 dark:border-darkColor/10">
      <Layout className="py-6 flex items-center justify-between lg:flex-col lg:gap-3 lg:py-4">
        <span className="text-sm text-muted dark:text-darkColor/60">
          {new Date().getFullYear()} &copy; {personal.name}
        </span>
        <a
          href={`mailto:${personal.email}`}
          className="text-sm font-medium text-primary hover:underline dark:text-primaryDark"
        >
          {personal.email}
        </a>
        <Link href="#home" className="text-sm text-muted hover:text-primary dark:text-darkColor/60">
          Back to top
        </Link>
      </Layout>
    </footer>
  );
}

export default Footer;
