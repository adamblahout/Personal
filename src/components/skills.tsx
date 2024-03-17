import SectionHeading from "./section-heading";
import { skillsData } from "../lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import SectionDevider from "./section-devider";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.8);
  const [t] = useTranslation("global");
  return (
    <section
      className="max-w-[53rem] scroll-mt-28 text-center  flex flex-col items-center mt-8 sm:mt-0"
      ref={ref}
      id="skills"
    >
      <SectionHeading>{t("heading.myskills")}</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skills, index) => (
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            transition={{ delay: index * 0.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-black/10 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white"
            key={index}
          >
            {skills}
          </motion.li>
        ))}
      </ul>{" "}
      <SectionDevider />
    </section>
  );
}
