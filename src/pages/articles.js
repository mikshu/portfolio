import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article4 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article6 from "../../public/images/articles/What is higher order component in React.jpg";

import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef(null);

  const handleMouse = (e) => {
    ref.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);
  };

  const handleMouseLeave = (e) => {
    ref.current.style.display = "none";
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={link}
      target="_blank"
      passHref
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouse}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x, y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={ref}
        src={img}
        alt=""
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <>
      <motion.li
        className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:border-light dark:bg-primaryDark dark:text-light sm:flex-col
      "
        initial={{ y: 200 }}
        whileInView={{ y: 0, transition: { duration: 0.5, ease: "backInOut" } }}
        viewport={{ once: true }}
      >
        <MovingImg title={title} img={img} link={link} />
        <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs: text-sm">
          {date}
        </span>
      </motion.li>
    </>
  );
};

const FeaturedArticles = ({ img, title, time, summary, link }) => {
  return (
    <>
      <li className="col-span-1 relative w-full p-4 border-dark bg-light shadow-2xl  dark:bg-primaryDark dark:border-light">
        <div className="absolute top-3-right-0 -z-10 w-[100%] h-[100%] rounded-[2rem] bg-dark rounded-br-2xl" />

        <Link
          href={link}
          target="_blank"
          passHref
          className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
            src={img}
            alt="image"
            target="_blank"
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </Link>
        <Link href={link} target="_blank" passHref>
          <h2 className="capitalize font-bold text-2xl my-2 mt-4 hover:underline xs:text-lg">
            {title}
          </h2>
        </Link>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold dark:text-primaryDark">
          {time}
        </span>
      </li>
    </>
  );
};

function articles() {
  return (
    <>
      <Head>
        <title>Aatish | Articles Page</title>
        <meta name="description" content="I am a full-stack web developer. Explore my portfolio and discover my work." />
        <meta name="keywords" content="portfolio, work, skills, projects" />
      </Head>
      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col item-center justify-center overflow-hidden text-dark dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            title="JavaScript Web Development Journeys"
            className="mb-16  lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticles
              title="Build A Custom Pagination Component In ReactJs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
           Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="https://www.digitalocean.com/community/tutorials/how-to-build-custom-pagination-with-react"
              img={article1}
            />
            <FeaturedArticles
              title="Build a Quick and Easy Loading Screen With React Hooks"
              summary="Learn how to implement a loading screen for your portfolio page using React Hooks to manage the loading state while content is being fetched or rendered."
              time="9 min read"
              link="https://medium.com/front-end-weekly/react-loading-screen-tactics-improving-user-experience-9452f183c00b"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Efficient React Form Validation: Top Learning Resource"
              img={article3}
              date="July 26, 2023"
              link="https://www.telerik.com/kendo-react-ui/components/form/validation/"
            />
            <Article
              title="Building a Todo App in React: Expert Learning Resource"
              img={article4}
              date="July 26, 2023"
              link="https://medium.com/codex/building-a-to-do-list-app-using-react-hooks-and-styled-component-7e413a16b91e"
            />
            <Article
              title="Mastering Smooth Scrolling in React: Top Learning Resource"
              img={article5}
              date="July 26, 2023"
              link="https://www.npmjs.com/package/react-scroll"
            />
            <Article
              title="Advanced React Higher-Order Components (HOCs): Expert Learning Resource"
              img={article6}
              date="July 26, 2023"
              link="https://legacy.reactjs.org/docs/higher-order-components.html"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}

export default articles;
