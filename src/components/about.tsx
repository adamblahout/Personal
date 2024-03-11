import { motion } from "framer-motion";
import SectionDevider from "./section-devider";
import Sectionheading from "./section-heading";
import { useSectionInView } from "../lib/hooks";

function About() {
  const { ref } = useSectionInView("About", 0.7);

  return (
    <section
      className="mb-28 max-w-[45rem] text-center sm:mb-40 leading-7 px-8 scroll-m-28"
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
          <Sectionheading>Kdo jsem</Sectionheading>
          <div className="text-xl">
            <p>
              Vystudoval jsem soukromou střední školu na Proseku se specializací
              na počítačové sítě, což mi poskytlo pevné základy v oblasti
              informačních technologií. Následně jsem pokračoval ve studiu na
              Karlově Univerzitě, kde jsem se opět zaměřil na informační
              technologie. Během svého studia na obou školách jsem měl
              příležitost pracovat s různými webovými technologiemi, včetně
              HTML, CSS, JavaScriptu, SQL a PHP.
            </p>
            <p className=" my-3">
              V průběhu svého vysokoškolského studia jsem získal cenné praktické
              zkušenosti prací ve společnosti CommerzBank. Začínaje pozicí
              Student Support jsem úspěšně komunikoval s klienty a zajišťoval
              jejich požadavky. Později jsem měl možnost pracovat jako Junior
              vývojář, kde jsem se seznámil s dalšími moderními technologiemi,
              včetně Reactu, React Query / Router, Framer motion, Gitu, Tailwind
              CSS a Material UI.
            </p>{" "}
            <p className="">
              {" "}
              Mým hlavním zájmem a motivací je neustálé učení se a zdokonalování
              v oblasti vývoje softwaru a webových technologií. Jsem nadšený z
              nových výzev a příležitostí, které mi tato oblast nabízí, a rád
              bych se nadále vzdělával a rozvíjel své dovednosti. S vášní a
              odhodláním se pustím do dalších projektů a příležitostí, které mi
              přinesou možnost dalšího růstu a profesního rozvoje.
            </p>
          </div>
        </motion.span>
        <SectionDevider />
      </div>
    </section>
  );
}

export default About;
