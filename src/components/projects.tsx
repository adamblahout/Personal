import SectionHeading from "./section-heading";
import { projectsData } from "../lib/data";
import React from "react";
import Project from "./project";
import { useSectionInView } from "../lib/hooks";
import SectionDevider from "./section-devider";

function Projects() {
  const { ref } = useSectionInView("Projects", 0.8);

  return (
    <section
      className="-mt-20 sm:-mt-44 transition scroll-m-28"
      id="projects"
      ref={ref}
    >
      <SectionHeading>Projekty</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <SectionDevider />
      </div>
    </section>
  );
}

export default Projects;
