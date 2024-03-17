import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";
import { experiencesDataEng } from "../lib/data";

import React from "react";
import { useSectionInView } from "../lib/hooks";
import { useTheme } from "../context/theme-controller-context";
import { useTranslation } from "react-i18next";

export default function Experience() {
  //react-vertical-timeline-component + needed to instal (npm i --save-dev @types/react-vertical-timeline-component)
  const { ref } = useSectionInView("Experience", 0.8);
  const { theme } = useTheme();
  const [t] = useTranslation("global");

  const localStorageLanguage = window.localStorage.getItem("language");
  const selectedExperiencesData =
    localStorageLanguage === "cz" ? experiencesData : experiencesDataEng;

  return (
    <section id="experience" ref={ref} className="max-w-[60rem] mt-12 sm:mt-0">
      <SectionHeading>{t("heading.experience")}</SectionHeading>
      <VerticalTimeline lineColor="">
        {selectedExperiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "#3a3f4c",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              dateClassName="p:50"
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "#3a3f4c",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="font-normal !mt-0 text-gray-700 dark:text-white/80">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
