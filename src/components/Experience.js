import portfolioData from "../../public/portfolioData.json";

function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-12">
      <h2 className="font-bold text-4xl mb-12 w-full text-center text-lightColor dark:text-darkColor md:text-3xl md:mb-8">
        Experience
      </h2>
      <div className="flex flex-col gap-6">
        {experience.map((job) => (
          <article
            key={job.company}
            className="rounded-2xl bg-white/80 dark:bg-dark/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow p-6 md:p-4"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="text-xl font-semibold text-lightColor dark:text-darkColor">
                {job.position}
                {" · "}
                <a
                  href={job.companyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline dark:text-primaryDark"
                >
                  {job.company}
                </a>
              </h3>
              <span className="text-sm font-medium text-muted dark:text-darkColor/60">
                {job.time}
              </span>
            </div>
            <p className="text-base leading-relaxed text-muted dark:text-darkColor/80 md:text-sm">
              {job.work}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
