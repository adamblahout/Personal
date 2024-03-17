import { motion } from "framer-motion";
import SectionDevider from "./section-devider";
import Sectionheading from "./section-heading";
import { useSectionInView } from "../lib/hooks";
import { useTranslation } from "react-i18next";

function About() {
  const { ref } = useSectionInView("About", 0.6);
  const [t] = useTranslation("global");

  return (
    <section
      className="mb-28 max-w-[45rem] text-center sm:mb-40 leading-7 px-8 scroll-m-28 flex items-center justify-center"
      id="about"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center ">
        <motion.span
          className="text-black flex flex-col"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {" "}
          <Sectionheading>{t("heading.whoami")}</Sectionheading>
          <div className="text-xl dark:text-gray-50">
            <p>{t("about.whoami.section1")}</p>
            <p className=" my-3">{t("about.whoami.section2")}</p>{" "}
            <p className=""> {t("about.whoami.section3")}</p>
          </div>
        </motion.span>
        <SectionDevider />
      </div>
    </section>
  );
}

export default About;
