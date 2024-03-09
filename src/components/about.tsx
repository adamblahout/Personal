import SectionDevider from "./section-devider";

function About() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 ">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="font-bold text-2xl">Kdo Jsem</h2>
        <p className="text-black">
          Vystudoval jsem soukromou střední školu na Proseku se specializací na
          počítačové sítě, což mi poskytlo pevné základy v oblasti informačních
          technologií. Následně jsem pokračoval ve studiu na Karlově Univerzitě,
          kde jsem se opět zaměřil na informační technologie. Během svého studia
          na obou školách jsem měl příležitost pracovat s různými webovými
          technologiemi, včetně HTML, CSS, JavaScriptu, SQL a PHP. V průběhu
          svého vysokoškolského studia jsem získal cenné praktické zkušenosti
          prací ve společnosti CommerzBank. Začínaje pozicí Student Support jsem
          úspěšně komunikoval s klienty a zajišťoval jejich požadavky. Později
          jsem měl možnost pracovat jako Junior vývojář, kde jsem se seznámil s
          dalšími moderními technologiemi, včetně Reactu, React Query / Router,
          Framer motion, Gitu, Tailwind CSS a Material UI. Mým hlavním zájmem a
          motivací je neustálé učení se a zdokonalování v oblasti vývoje
          softwaru a webových technologií. Jsem nadšený z nových výzev a
          příležitostí, které mi tato oblast nabízí, a rád bych se nadále
          vzdělával a rozvíjel své dovednosti. S vášní a odhodláním se pustím do
          dalších projektů a příležitostí, které mi přinesou možnost dalšího
          růstu a profesního rozvoje.
        </p>
        <SectionDevider />
      </div>
    </section>
  );
}

export default About;
