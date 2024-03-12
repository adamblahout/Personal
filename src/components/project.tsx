import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectsData } from "../lib/data";
import { BsGithub } from "react-icons/bs";

type ProjectsProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  websiteUrl,
}: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 flex flex-wrap max-w-[60rem] px-8"
    >
      <section
        className="relative bg-gray-100 max-w-[42rem] border-black/5 border overflow-hidden sm:pr-8 sm:h-[20rem] hover:bg-gray-200 transition rounded-md 
      dark:bg-white/15 dark:hover:bg-white/20 dark:text-white"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full  even:pl-8 sm:group-even:ml-[20rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
            <li></li>
          </ul>
          <a
            href={githubUrl}
            target="_blank"
            className="w-14 z-50 ml-auto sm:absolute top-[0.5rem]  left-[30.5rem] sm:top-64 sm:left-[19rem] sm:group-even:left-[initial] sm:group-even:right-4 flex items-center
            rounded-full border border-black/10 bg-gray-50 p-4 
            text-lg sm:text-xl text-gray-700 group-hover:text-gray-950 outline-none 
            transition  hover:scale-110 focus:scale-110 active:scale-105 cursor-pointer sm:ml-auto"
          >
            <BsGithub />
          </a>
        </div>

        <a href={websiteUrl} target="_blank">
          <img
            src={imageUrl}
            alt={title}
            className="absolute top-8 -right-40 w-[28rem] rounded-t-lg shadow-2xl hidden sm:block 
        group-even:right-[initial] 
        group-even:-left-40 
        group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2 

        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2 

        transition 
        group-hover:scale-[1.05]
        "
          />
        </a>
      </section>
    </motion.div>
  );
}
