//  icons
import { FiGithub, FiMail, FiMapPin, FiLinkedin } from "react-icons/fi";

// projects images
import ecommerce from "./assets/img/projects/ecommerce.png";
import netflixClone from "./assets/img/projects/netflixClone.PNG";
import weatherApp from "./assets/img/projects/weatherApp.PNG";

// skills images
import html5 from "./assets/img/skills/html5.png";
import css3 from "./assets/img/skills/css3.png";
import tailwind from "./assets/img/skills/tailwind.png";
import js from "./assets/img/skills/js.png";
import jquery from "./assets/img/skills/jquery.png";
import reactjs from "./assets/img/skills/reactjs.png";
import redux from "./assets/img/skills/redux.png";
/*Server */
import nodejs from "./assets/img/skills/nodejs.png";
import mongodb from "./assets/img/skills/mongodb.png";
import mongoose from "./assets/img/skills/mongoose.png";
import phpmyadmin from "./assets/img/skills/phpmyadmin.png";
import mysql from "./assets/img/skills/mysql.png";
import jwt from "./assets/img/skills/jwt.png";
/*Mobile */
import flutter from "./assets/img/skills/flutter.png";
import dart from "./assets/img/skills/dart.png";
import cocos from "./assets/img/skills/cocos.png";
/*Other */
import github from "./assets/img/skills/github.png";
import git from "./assets/img/skills/git.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "skills",
    href: "skills",
  },
  {
    name: "contact",
    href: "contact",
    offset: 0,
  },
];

// social
export const socials = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/david-bobritsky/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/dvdbobr/",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: ecommerce,
    name: "E-Commerce Clothing Store",
    description:
      "ecommerce clothing store made with MERN stack also used Redux and JWT",
    href: "https://mern-ecommerce-db.netlify.app/",
    github: "https://github.com/dvdbobr/mern-ecommerce-frontend",
  },
  {
    id: "2",
    image: netflixClone,
    name: "Netflix Clone",
    description: "netflix clone made with TMDB API and React",
    href: "https://netflix-bootcamp-db.netlify.app/",
    github: "https://github.com/dvdbobr/Netflix",
  },
  {
    id: "3",
    image: weatherApp,
    name: "Weather App",
    description: "forecast site made with accuweather API React and Redux",
    href: "https://david-bobritsky-weather-app.herokuapp.com/",
    github: "https://github.com/dvdbobr/Weather-Api",
  },
];

// skill
export const skills = [
  {
    image: html5,
    name: "HTML",
  },
  {
    image: css3,
    name: "CSS",
  },
  {
    image: tailwind,
    name: "Tailwind",
  },
  {
    image: js,
    name: "JavaScript",
  },
  {
    image: jquery,
    name: "Jquery",
  },
  {
    image: reactjs,
    name: "ReactJS",
  },
  {
    image: redux,
    name: "Redux",
  },
  {
    image: nodejs,
    name: "Nodejs",
  },
  {
    image: mongodb,
    name: "MongoDB",
  },
  {
    image: mongoose,
    name: "Mongoose",
  },
  {
    image: phpmyadmin,
    name: "phpMyAdmin",
  },
  {
    image: mysql,
    name: "MySQL",
  },
  {
    image: jwt,
    name: "JWT",
  },
  {
    image: flutter,
    name: "Flutter",
  },
  {
    image: dart,
    name: "Dart",
  },
  {
    image: cocos,
    name: "COCOS",
  },
  {
    image: github,
    name: "github",
  },
  {
    image: git,
    name: "git",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at dvdbobr@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Bucharest, Romania",
    description: "Israel, Netanya",
  },
];
