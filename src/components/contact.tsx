import { ImMail3 } from "react-icons/im";
import SectionHeading from "./section-heading";
import { useSectionInView } from "../lib/hooks";

export default function Contact() {
  //const { ref } = useSectionInView("Contact", 0.8);
  const { ref } = useSectionInView("Contact", 0.2);

  return (
    <>
      <div className="mt-16" id="contact"></div>
      <SectionHeading>Kontakt</SectionHeading>
      <section
        className="flex flex-col items-start justify-left gap-2 text-lg"
        id="contact"
        ref={ref}
      >
        <a
          href="emailto:blahout.adam@seznam.cz"
          className="flex items-center justify-center hover:scale-110 dark:hover:text-white/80 hover:text-black/80 active:scale-105"
        >
          <ImMail3 className="mr-4" />
          blahout.adam@seznam.cz
        </a>
      </section>
    </>
  );
}
