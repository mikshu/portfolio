import Image from "next/image";
import Link from "next/link";

const FeaturedProject = ({ type, title, summary, tech, img, link }) => {
  return (
    <article className="rounded-2xl bg-white/80 dark:bg-dark/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {img ? (
        link ? (
          <Link href={link} target="_blank" className="block w-full overflow-hidden">
            <Image
              src={img}
              alt={title}
              className="w-full h-48 object-cover object-top transition-transform duration-200 hover:scale-[1.02] md:h-40"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Link>
        ) : (
          <div className="block w-full overflow-hidden">
            <Image
              src={img}
              alt={title}
              className="w-full h-48 object-cover object-top md:h-40"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )
      ) : null}
      <div className="p-6 md:p-4">
        <span className="text-sm font-medium text-primary dark:text-primaryDark">
          {type}
        </span>
        <h3 className="mt-1 text-xl font-semibold text-lightColor dark:text-darkColor">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted dark:text-darkColor/80">
          {summary}
        </p>
        <p className="mt-3 text-xs font-medium text-muted/80 dark:text-darkColor/50">
          {tech}
        </p>
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="mt-4 inline-flex items-center rounded-lg bg-dark px-4 py-2 text-sm font-semibold text-darkColor transition-colors hover:bg-primary dark:bg-darkColor dark:text-dark hover:dark:bg-primary"
          >
            View Project
          </Link>
        ) : null}
      </div>
    </article>
  );
};

export default FeaturedProject;
