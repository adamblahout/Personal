import { motion } from "framer-motion";
import { links } from "../lib/data";
//import { useState } from "react";
import clsx from "clsx";
import { useActiveSectionContext } from "../context/active-section-context";

export default function Header() {
  //const [activeNavLink, setActiveNavLink] = useState("Home");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-50">
      <motion.div
        className="borded fixed left-1/2 top-0 h-16 w-full -translate-x-1/2 rounded-none border-white border-opacity-40 
        bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-sm sm:top-6 sm:h-12 sm:w-[36rem] sm:rounded-full
        dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-40"
        initial={{ y: -200, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.6 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 gap-4 py-2 sm:top-9 sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 font-medium text-[0.9] text-gray-500 sm:w-[intial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center"
              key={link.hash}
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a
                className={clsx(
                  "flex w-full items-center justify-center px-3 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-100",
                  {
                    " text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 -mt-[0.35rem] p-4 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
