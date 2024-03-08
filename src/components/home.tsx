import { motion } from "framer-motion";
import ProfileImage from "/profileimage.png";
import CVczech from "/CVczech.pdf";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiDownload } from "react-icons/hi";

function Home() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 ">
      <div className=" flex flex-col items-center justify-center gap-3">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.3 }}
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
              delay: 0.1,
              duration: 0.7,
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
            <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
              <span className="font-bold">Ahoj, jmenuji se Adam.</span> Jsem{" "}
              <span className="font-bold">front-end developer</span> s{" "}
              <span className="font-bold">1 rokem</span> zkušeností. Mojí
              zálibou je vývoj{" "}
              <span className="italic">webových stránek a aplikací</span>.
              Zaměřuji se především na{" "}
              <span className="text-blue-600">React</span>.
            </p>
          </motion.h1>
        </div>
        <motion.div
          className=" flex flex-col gap-2 font-medium sm:flex-row w-full content-center justify-center px-8 sm:px-0"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            to="#contact"
            className="group flex items-center justify-center rounded-full border bg-gray-900 px-7 py-3  text-gray-50 outline-none transition  hover:scale-110 focus:scale-110 active:scale-105"
          >
            Contact me here{" "}
            <BsArrowRight className="ml-3 mt-[0.15rem] transition group-hover:translate-x-1 group-hover:scale-105 group-hover:font-bold" />
          </Link>
          <a
            href={CVczech}
            download
            className="group flex items-center justify-center rounded-full border bg-gray-50 px-7 py-3  text-gray-900 outline-none transition  hover:scale-110 focus:scale-110 active:scale-105 cursor-pointer border-black/10"
          >
            Životopis{" "}
            <HiDownload className="ml-3 transition group-active:translate-y-1 group-hover:font-bold" />
          </a>
          <a
            href="https://www.linkedin.com/in/adam-blahout-8118842b3/"
            target="_blank"
            className="flex items-center justify-center rounded-full border bg-gray-50 px-7 py-3 text-2xl border-black/10 text-gray-700 outline-none transition  hover:scale-110 focus:scale-110 active:scale-105 group-hover:text-gray-950 cursor-pointer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/adamblahout"
            target="_blank"
            className="flex items-center justify-center rounded-full border border-black/10 bg-gray-50 px-7 py-3 text-2xl text-gray-700 group-hover:text-gray-950 outline-none transition  hover:scale-110 focus:scale-110 active:scale-105 cursor-pointer"
          >
            <BsGithub />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;