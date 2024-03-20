import { motion } from "framer-motion";
import ProfileImage from "/profileimage.png";
import CVczech from "/CVczech.pdf";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import SectionDevider from "./section-devider";
import { useSectionInView } from "../lib/hooks";
import { useTranslation } from "react-i18next";

function Home() {
  const { ref } = useSectionInView("Home", 1);
  const [t] = useTranslation("global");

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-32"
      id="home"
      ref={ref}
    >
      <div className=" flex flex-col items-center justify-center gap-3">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.6 }}
          >
            <img
              src={ProfileImage}
              alt="Profile Image"
              className="w-32 rounded-full border-[0.35rem] border-white object-cover shadow-xl sm:w-44"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.6,
            }}
          >
            🙌
          </motion.span>
        </div>
        <div>
          <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {
              <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
                <span className="font-bold">
                  {t("home.introduction.introPart1")}
                </span>{" "}
                <span className="font-bold">
                  {t("home.introduction.introPart2")}
                </span>{" "}
                <span className="font-bold">
                  {t("home.introduction.introPart3")}
                </span>{" "}
                <span className="italic">
                  {t("home.introduction.introPart4")}
                </span>{" "}
                <span className="text-blue-600">
                  {t("home.introduction.introPart5")}
                </span>
              </p>
            }
          </motion.h1>
        </div>
        <motion.div
          className=" flex flex-col gap-2 font-medium sm:flex-row w-full content-center justify-center px-8 sm:px-0"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="group flex items-center justify-center rounded-full  bg-gray-900 px-7 py-3  text-gray-50 outline-none transition  hover:scale-110 focus:scale-110 active:scale-105"
          >
            {t("buttons.contact")}{" "}
            <BsArrowRight className="ml-3 mt-[0.15rem] transition group-hover:translate-x-1 group-hover:scale-105 group-hover:font-bold" />
          </a>
          <a
            href={CVczech}
            download
            className="group flex items-center justify-center rounded-full border bg-gray-50 px-7 py-3  text-gray-900 outline-none transition  hover:scale-110 focus:scale-110 active:scale-105 cursor-pointer border-black/10
            dark:bg-white/10 dark:text-white/80"
          >
            {t("buttons.cv")}{" "}
            <HiDownload className="ml-3 transition group-active:translate-y-1 group-hover:font-bold" />
          </a>
          <a
            href="https://www.linkedin.com/in/adam-blahout-8118842b3/"
            target="_blank"
            className="flex items-center justify-center rounded-full border bg-gray-50 px-7 py-3 text-2xl border-black/10 text-gray-700 outline-none transition  hover:scale-110 focus:scale-110 active:scale-105 group-hover:text-gray-950 cursor-pointer
            dark:bg-white/10 dark:text-white/80"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/adamblahout"
            target="_blank"
            className="flex items-center justify-center rounded-full border border-black/10 bg-gray-50 px-7 py-3 text-2xl text-gray-700 group-hover:text-gray-950 outline-none transition  hover:scale-110 focus:scale-110 active:scale-105 cursor-pointer
            dark:bg-white/10 dark:text-white/80"
          >
            <BsGithub />
          </a>
        </motion.div>
        <SectionDevider />
      </div>
    </section>
  );
}

export default Home;
