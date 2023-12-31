import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import dishdynamo from "@/public/dishdynamo.png"
import sales from "@/public/sales.png"
import createrecipe from "@/public/createrecipe.png"
import ecommerceStore from "@/public/ecommerce-store.png"
import ecomstore from "@/public/ecomstore.png"


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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Business Administration Management | University Of Hawaii at Manoa",
    location: "Honolulu, HI",
    description:
      "Relevant Coursework: Discrete Mathmatics in Computer Science, Introduction to Computer Science, Information Systems for Global Business Environment, Statistical Analysis for Business Descisions, Kappa Sigma Fraternity",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Management Trainee | Enterprise Holdings",
    location: "Honolulu, HI",
    description:
      "Generated over $5 Million per year in revenue helping manage branch operations in West Oahu. Analyzed business reports and resolving 200+ customer issues a month by providing best service prior to and after",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2020",
  },
  {
    title: "English Instructor",
    location: "Tokyo, JP",
    description:
      "Applied innovative teaching strategies to help students of all ages improve their English speaking skill. Utilized EdTech which analyzed students' pronunciation and provided instant feedback",
    icon: React.createElement(FaReact),
    date: "2020 - 2022",
  },
  {
    title: "Graduated Bootcamp | Hack Reactor",
    location: "San Francisco, CA",
    description:
      "Passion for coding lead me to level up my skills as a software developer with technologies such as Javascript and Python",
    icon: React.createElement(LuGraduationCap),
    date: "2023",

  }
] as const;

export const projectsData = [
  {
    title: "DishDynamo",
    description:
      "I worked as a full stack webdevloper to create a webapplication that allows user to search and create recipes based on ingredients on hand",
    tags: ["React", "MongoDB", "ChakraUI", "FastAPI", "Javascript", "JWTdown"],
    imageUrl: createrecipe,
    projectUrl: "https://team-scrumtious.gitlab.io/dish-dynamo",
  },
  {
    title: "CarCar",
    description:
      "Worked as a fullstack developer to creating sales microservice for car dealership internal application to manage inventory, sales, and service",
    tags: ["Django", "SQLite", "Microservices", "React", "RestfulAPI", "Docker"],
    imageUrl: sales,
    projectUrl: "https://gitlab.com/charlene.xu92/project-beta",
  },
  {
    title: "E-Commerce Dashboard & CMS",
    description:
      "Fully functional E-Commerce web application with Content Management System and Dashboard",
    tags: ["NextJS", "SQLite", "App Router", "React", "Tailwind", "Prisma", "MySQL"],
    imageUrl: ecommerceStore,
    projectUrl: "https://ecommerce-admin-nine-black.vercel.app/",
  },
  {
    title: "E-Commerce Store",
    description:
      "E-Commerce Store Front used in conjunction with E-Commerce Dashboard & CMS",
    tags: ["NextJS", "SQLite", "App Router", "React", "Tailwind", "Prisma", "MySQL"],
    imageUrl: ecomstore,
    projectUrl: "https://ecommerce-store-three-omega.vercel.app/",
  }
] as const;

export const skillsData = [
  "HTML5",
  "CSS",
  "Javascript",
  "TypeScript",
  "React",
  "NextJS",
  "NodeJS",
  "Git",
  "Tailwind",
  "Django4",
  "PostGreSQL",
  "MongoDB",
  "FastAPI",
  "Python",
  "FramerMotion",
  "Docker",
] as const;
