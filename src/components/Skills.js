import React from "react";
import portfolioData from "../../public/portfolioData.json";

function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 md:py-12">
      <h2 className="font-bold text-4xl mb-12 w-full text-center text-lightColor dark:text-darkColor md:text-3xl md:mb-8">
        Skills
      </h2>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-1 lg:gap-4">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-2xl bg-white/80 dark:bg-dark/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow p-6 md:p-4"
          >
            <h3 className="mb-4 text-lg font-semibold text-primary dark:text-primaryDark">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-dark/5 px-3 py-1.5 text-sm font-medium text-lightColor dark:bg-darkColor/10 dark:text-darkColor"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
