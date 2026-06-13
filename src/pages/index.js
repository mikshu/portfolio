import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import { LinkArrow, GithubIcon, LinkedInIcon } from "@/components/icons";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import FeaturedProject from "@/components/FeaturedProject";
import portfolioData from "../../public/portfolioData.json";

// Project images removed per request (projects will display without images)

const Home = () => {
  const { personal, projects } = portfolioData;

  return (
    <>
      <Head>
        <title>{personal.name} | {personal.role}</title>
        <meta
          name="description"
          content={`${personal.role} specializing in React, TypeScript, Node.js, Python, and AI/LLM applications.`}
        />
      </Head>
      <main className="flex w-full flex-col text-lightColor dark:text-darkColor">
        {/* Hero */}
        <Layout className="pt-8 min-h-[85vh] flex items-center">
          <section id="home" className="w-full">
            <div className="flex items-center justify-between w-full lg:flex-col lg:gap-8">
              <div className="w-2/5 md:w-full">
                <Image
                  src={profilePic}
                  alt={personal.name}
                  className="w-full max-w-sm h-auto rounded-2xl mx-auto lg:max-w-xs"
                  priority
                  sizes="(max-width: 768px) 80vw, 400px"
                />
              </div>
              <div className="w-1/2 flex flex-col lg:w-full lg:text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-primary dark:text-primaryDark mb-2">
                  {personal.role}
                </p>
                <h1 className="text-5xl font-bold text-lightColor dark:text-darkColor xl:text-4xl md:text-3xl">
                  {personal.name}
                </h1>
                <p className="my-6 text-lg leading-relaxed text-muted dark:text-darkColor/80 md:text-base">
                  {personal.tagline}
                </p>
                <div className="flex items-center gap-4 lg:justify-center flex-wrap">
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="inline-flex items-center rounded-lg bg-dark px-5 py-2.5 text-base font-semibold text-darkColor transition-colors hover:bg-primary dark:bg-darkColor dark:text-dark hover:dark:bg-primary md:text-sm"
                    download
                  >
                    Resume <LinkArrow className="w-5 ml-2" />
                  </Link>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-dark/10 px-4 py-2 text-sm font-medium transition-colors hover:border-primary dark:border-darkColor/20"
                  >
                    <GithubIcon className="w-5 h-5" /> GitHub
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-dark/10 px-4 py-2 text-sm font-medium transition-colors hover:border-primary dark:border-darkColor/20"
                  >
                    <LinkedInIcon className="w-5 h-5" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Layout>

        <Layout className="pt-0">
          <Experience />

          {/* Projects */}
          <section id="projects" className="py-20 md:py-12">
            <h2 className="font-bold text-4xl mb-12 w-full text-center md:text-3xl md:mb-8">
              Featured Projects
            </h2>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
              {projects.map((project) => (
                <FeaturedProject key={project.title} {...project} />
              ))}
            </div>
          </section>

          <Skills />

          {/* Contact */}
          <section id="contact" className="py-20 md:py-12">
            <div className="rounded-2xl bg-white/80 dark:bg-dark/60 backdrop-blur-sm shadow-sm p-10 text-center md:p-6">
              <h2 className="font-bold text-4xl mb-4 md:text-3xl text-lightColor dark:text-darkColor">
                Get In Touch
              </h2>
              <p className="mb-6 text-muted dark:text-darkColor/80 max-w-lg mx-auto">
                Open to senior full-stack and AI engineering roles. Let&apos;s connect.
              </p>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center rounded-lg bg-dark px-6 py-3 text-base font-semibold text-darkColor transition-colors hover:bg-primary dark:bg-darkColor dark:text-dark hover:dark:bg-primary"
              >
                {personal.email}
              </a>
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
};

export default Home;
