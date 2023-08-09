import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
import portfolioData from "../../public/portfolioData.json";

const Home = () => {
  const homeData = portfolioData.pages.home;
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name={homeData.meta.title} content={homeData.meta.description} />
        <meta name="keywords" content="portfolio, work, skills, projects" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center  text-light w-full min-h-screen">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-2/5 md:w-full mb-6">
              <Image
                src={profilePic}
                alt="My Profile"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                title={homeData.title}
                className="!text-7xl !text-left xl:!text-5xl lg:!text-center lg:!text-7xl md:!text-5xl sm:!3xl text-lightColor/60 pb-2 leading-5"
                style={{ lineHeight: 1.5 }}
              />
              <p className="my-6 text-base font-medium text-dark dark:text-light md:text-sm sm:text-xs"   style={{ lineHeight: 1.8 }}>
                {homeData.content}
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark hover:border-dark border-2 border-solid border-transparent dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                  passHref
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="/mailto:minhasaatish@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="Hire Me" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
};

export default Home;
