import SectionHeading from "./section-heading";
import { projectsData } from "../lib/data";
import { projectsDataEn } from "../lib/data";
import React from "react";
import Project from "./project";
import { useSectionInView } from "../lib/hooks";
import SectionDevider from "./section-devider";
import { useTranslation } from "react-i18next";

function Projects() {
  const { ref } = useSectionInView("Projects", 0.8);
  const [t] = useTranslation("global");
  const ChooseLanData = () => {
    const localStorageLanguage = window.localStorage.getItem("language");

    if (localStorageLanguage === "cz") {
      return projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ));
    } else {
      return projectsDataEn.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ));
    }
  };

  return (
    <section
      className="-mt-20 sm:-mt-44 transition scroll-m-28"
      id="projects"
      ref={ref}
    >
      <SectionHeading>{t("heading.projects")}</SectionHeading>
      <div>{ChooseLanData()}</div>
      <div className="flex items-center justify-center">
        <SectionDevider />
      </div>
    </section>
  );
}

export default Projects;
