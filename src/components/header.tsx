import { motion } from "framer-motion";
import { links } from "../lib/data";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="relative z-50">
      <motion.div
        className="borded fixed left-1/2 top-0 h-16 w-full -translate-x-1/2 rounded-none border-white border-opacity-40 
        bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-sm sm:top-6 sm:h-12 sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 gap-4 py-2 sm:top-9 sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 font-medium text-[0.9] text-gray-500 sm:w-[intial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="flex h-3/4 items-center justify-center"
              key={link.name}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="flex w-full items-center justify-center px-3 transition hover:text-gray-950"
                to={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
