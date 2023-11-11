import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mulca from "@/public/mulca.png";
import tiSolver from "@/public/tiSolver.png";
import codeRacer from "@/public/codeRacer.png";

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
  {
    name: "Testimonials",
    hash: "#testimonials",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated With Bachelor's Degree in Computer Science",
    location: "Cairo, Egypt",
    description: "I graduated after 4 years of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Giza, Egypt",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2020 - present",
  },
  {
    title: "Technology Consultant at Mulca",
    location: "Giza, Egypt",
    description:
      "Lead the development of a web application designed for co-ownership scenarios, starting from scratch, and provide technical expertise to ensure its success.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2020",
  // },
] as const;

export const projectsData = [
  {
    title: "Mulca",
    description:
      "As a solo developer, I designed and implemented mulca web application from scratch, handling both the front-end and backend.",
    tags: ["React", "Next.js", "Tailwind", "Sanity", "Prisma"],
    imageUrl: mulca,
    projectUrl: "https://mulca.io",
  },
  {
    title: "TiSolver",
    description: "A landing page and a blog for a software startup.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: tiSolver,
    projectUrl: "https://tisolver.com",
  },
  {
    title: "Code Racer",
    description: "A speed typing multiplayer open source web application.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: codeRacer,
    projectUrl: "https://code-racer-eight.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const clientReviews = [
  {
    text: "He was amazing, a great help and stayed in contact throughout, couldn't have asked for anyone better.",
    name: "Ethan Newman",
    image:
      "https://media.licdn.com/dms/image/D4E03AQEgw5yZVoUVug/profile-displayphoto-shrink_800_800/0/1680624166106?e=1700697600&v=beta&t=5SVpLmdaIsmZ5tLbtvjPoVOmW2egSgR-qUqsLjM9TRA",
    job: "Client (upwork.com)",
  },
  {
    text: "On of the best engineers i have ever worked with. He is very professional and has a great work ethic. He is very knowledgeable and has a great attitude. I would highly recommend him to anyone.",
    name: "Saleh elshafeay",
    image:
      "data:image/jpeg;base64,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",
    job: "Client (mostaql.com)",
  },
] as const;
