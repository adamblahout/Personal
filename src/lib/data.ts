import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import bcappImg from "/bcapp.png";
import sdtwebImg from "/sdtweb.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Developer",
    location: "Commerzbank AG",
    description:
      "I focused on managing internal websites. Here, I encountered technologies such as SharePoint, HTML, CSS, JavaScript, and React",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Student Support",
    location: "Commerzbank AG",
    description:
      "Student Support, where I learned to communicate effectively with clients in both Czech and English language",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Univerzita Karlova",
    location: "Nové Město",
    description:
      "Odstátnicoval jsem v roce 2024, kde jsem se zaměřil na React v rámci bakalářské práce společně se 3 populárními CSS knihovnami Tailwind, Material UI a Bootstrap",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Střední Škola Výpočetní Techniky",
    location: "Praha 9-Prosek",
    description:
      "Odmaturoval jsem na této škole se zaměřením na správu počítačových sítí",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Bakalářská Práce",
    description:
      "Bakalářská práce zabývající se Reactem společně s CSS knihovnami Tailwind, Material UI a Bootstrap",
    tags: [
      "React",
      "React Router & Query",
      "Tailwind",
      "Material UI",
      "Bootstrap",
    ],
    imageUrl: bcappImg,
    githubUrl: "https://github.com/adamblahout/bachelor-react-css-libraries",
    websiteUrl: "https://blahout-bachelor-wocors.vercel.app/",
  },
  {
    title: "Prototyp Webu SDT",
    description:
      "Prototyp webu pro servis dopraní techniky. Zprovozněné jenom některé funkcionality",
    tags: ["React", "React Router & Query", "TypeScript", "Tailwind"],
    imageUrl: sdtwebImg,
    githubUrl: "https://github.com/adamblahout/sdt/tree/main/my-project",
    websiteUrl: "https://sdt-seven.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "SQL",
  "PHP",
  "React",
  "React Query",
  "React Router",
  "Git",
  "Tailwind",
  "Material UI",
  "Bootstrap",
  "Framer Motion",
  "Photoshop",
  "Premiere",
  "DaVinci Resolve",
] as const;
