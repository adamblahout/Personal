import SectionHeading from "./section-heading";

export default function Contact() {
  //const { ref } = useSectionInView("Contact", 0.8);

  return (
    <section
      className="flex flex-col items-center justify-center mt-28"
      id="contact"
    >
      <SectionHeading>Kontakt</SectionHeading>
      <a href="emailto:blahout.adam@seznam.cz">blahout.adam@seznam.cz</a>
      <a href="tel:+420739297448">+420 739 297 448</a>
    </section>
  );
}
