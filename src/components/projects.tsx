import SectionHeading from "./section-heading";
import { projectsData } from "../lib/data";
import React from "react";
import Project from "./project";

function Projects() {
  return (
    <section className="-mt-20 sm:-mt-44 transition scroll-m-28" id="projects">
      <SectionHeading>Projekty</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
