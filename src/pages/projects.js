import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon, LinkIcon } from "@/components/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import kfc from "../../public/images/projects/kfc.png";
import phd from "../../public/images/projects/pizzahut.png";
import foodClub from "../../public/images/projects/foodclub.jpg";
import usMedPic from "../../public/images/projects/us-med.png";
import portfolioData from "../../public/portfolioData.json";

import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full relative rounded-br-2xl flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-primaryDark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
     rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        passHref
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt="image"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
          passHref
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm text-dark">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-lightColor/70 dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex item-center">
          <Link href={github} className="w-10" target="_blank" passHref>
            <LinkIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            passHref
            className="ml-4 rounded-lg bg-dark text-primary p-2 px-6 text-lg font-semibold dark:bg-light dark:text-primaryDark sm:px-4 sm:text-base "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

// const Project = ({ title, type, img, link, github }) => {
//   return (
//     <article className="w-full relative  rounded-br-2xl flex flex-col items-center justify-center rounded-2xl border border-solid
//      border-dark bg-light p-6 dark:bg-lightColor dark:border-light xs:p-4">
//       <div className="absolute top-0-right-3 -z-10 w-[101%] h-[103%]  rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />
//       <Link
//         href={link}
//         target="_blank"
//         passHref
//         className="w-full cursor-pointer overflow-hidden rounded-lg"
//       >
//         <FramerImage
//           src={img}
//           alt="image"
//           target="_blank"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.2 }}
//         />
//       </Link>
//       <div className="w-full flex flex-col items-start justify-between mt-4">
//         <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
//           {type}
//         </span>
//         <Link
//           href={link}
//           target="_blank"
//           className="hover:underline underline-offset-2"
//           passHref
//         >
//           <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl text-lightColor/70">{title}</h2>
//         </Link>

//         <div className="w-full mt-2 flex item-center justify-between">
//           <Link
//             href={link}
//             target="_blank"
//             passHref
//             className="ml-4 text-lg font-semibold underline md:text-base"
//           >
//             Visit
//           </Link>
//           <Link href={github} className="w-8 md:w-6" target="_blank" passHref>
//             <GithubIcon />
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// };

const projects = () => {
  const projectData = portfolioData.pages.projects;
  const {
    meta: { title, description, keywords },
    innow8,
    digimantra,
    appinventiv,
  } = projectData;
  const { type, title: heading, link: LinkUrl, description: decp } = innow8;
  const {
    type: dTyoe,
    title: dHeading,
    link: dLinkUrl,
    description: descp,
  } = digimantra;
  const {
    type: aType,
    title: aHeading,
    link: aLinkUrl,
    description: info,
  } = appinventiv;

  return (
    <>
      <Head>
        <title>Aatish | Projects Page</title>
        <meta name={title} content={description} />
        <meta name={title} content={keywords} />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            title="Imagination exceeds expertise."
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Kentucky Fried Chicken"
                summary="
                Developed KFC PWA for Gulf countries (UAE, KSA, Kuwait, Egypt) with focus on user-friendly interfaces, real-time order tracking, and secure payment integration, delivering an exceptional user experience. Collaborated with cross-functional teams to meet regional requirements and enhance my skills in scalable web development"
                type="KFC"
                link="https://uae.kfc.me/en/home"
                img={kfc}
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="PizzaHut"
                summary="Led the development of Pizza Hut's PWA for Gulf countries (UAE, KSA, Kuwait, Egypt), ensuring seamless user interactions, efficient order processing, and integrated loyalty programs. Collaborated with teams to create a high-performing PWA that met Pizza Hut's brand standards and provided a delightful dining experience for customers across the region"
                type="PHD"
                link="https://phuaeuatpwa.americanarest.com/en/home"
                img={phd}
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="US Med Premium"
                summary="As the Senior Project Lead, I developed an e-commerce platform for purchasing medicine, health equipment, and animal health products. Utilizing technologies like Next.js 14, Tailwind CSS, TypeScript, Radix UI, and Stripe, I created a responsive, secure, and user-friendly website. Key features include an extensive product catalog, user accounts for order tracking, and a seamless checkout process."
                type="MED"
                link="https://stg-usmed-next.appskeeper.in/"
                img={usMedPic}
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="FoodClub App"
                summary="I contributed to the Food Club React Native app's development, a game-changer in Chandigarh's food scene. This app streamlined ordering from multiple restaurants on a single platform, offering unprecedented convenience. I also designed an admin portfolio, empowering restaurant owners to manage menus and orders seamlessly. This project honed my React Native skills and showcased tech's power in boosting local businesses and user experiences."
                type="Featured Project"
                link="https://play.google.com/store/apps/details?id=com.onvo.foodclub&pli=1"
                img={foodClub}
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
