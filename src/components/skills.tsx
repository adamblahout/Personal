import SectionHeading from "./section-heading";
import { skillsData } from "../lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.8);
  return (
    <section
      className="mb-28 max-w-[53rem] scoll-mt-28 text-center sm:mb-40"
      ref={ref}
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skills, index) => (
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white border border-black/10 rounded-xl px-5 py-3"
            key={index}
          >
            {skills}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
