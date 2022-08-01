//  icons
import {
    FiGithub,
    FiMail,
    FiMapPin,
    FiLinkedin,
  } from "react-icons/fi";
  
  // projects images
  import ecommerce from "./assets/img/projects/ecommerce.png";
  import netflixClone from "./assets/img/projects/netflixClone.PNG";
  import weatherApp from "./assets/img/projects/weatherApp.PNG";
  
  // skills images
  import SkillImg1 from "./assets/img/skills/html52.png";
  import SkillImg2 from "./assets/img/skills/css3.png";
  import SkillImg3 from "./assets/img/skills/tailwind.png";
  import SkillImg4 from "./assets/img/skills/js.png";
  import SkillImg5 from "./assets/img/skills/jquery.png";
  import SkillImg6 from "./assets/img/skills/reactjs2.png";
  import SkillImg7 from "./assets/img/skills/redux.png";
  /*Server */
  import SkillImg8 from "./assets/img/skills/nodejs.png";
  import SkillImg9 from "./assets/img/skills/mongodb.png";
  import SkillImg10 from "./assets/img/skills/mongoose.png";
  import SkillImg11 from "./assets/img/skills/phpmyadmin.png";
  import SkillImg12 from "./assets/img/skills/mysql.png";
  import SkillImg13 from "./assets/img/skills/jwt.png";
  /*Mobile */
  import SkillImg14 from "./assets/img/skills/flutter.png";
  import SkillImg15 from "./assets/img/skills/dart.png";
  import SkillImg16 from "./assets/img/skills/cocos.png";
  /*Other */
  import SkillImg17 from "./assets/img/skills/github.png";
  import SkillImg18 from "./assets/img/skills/git.png";
  
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
      name: 'skills',
      href: 'skills',
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
      category: "UI/UX design",
      href:"https://mern-ecommerce-db.herokuapp.com/",
      github:"https://github.com/dvdbobr/mern-Ecommerce",
    },
    {
      id: "2",
      image: netflixClone,
      name: "Netflix Clone",
      category: "web development",
      href:"https://netflix-bootcamp-db.netlify.app/",
      github:"https://github.com/dvdbobr/Netflix",
    },
    {
      id: "3",
      image: weatherApp,
      name: "Weather App",
      category: "UI/UX design",
      href:"https://david-bobritsky-weather-app.herokuapp.com/",
      github:"https://github.com/dvdbobr/Weather-Api",
    },
  ];
  
  // skill
  export const skills = [
    {
      image: SkillImg1,
      name: "HTML",
    },
    {
      image: SkillImg2,
      name: "CSS",
    },
    {
      image: SkillImg3,
      name: "Tailwind",
    },
    {
      image: SkillImg4,
      name: "JavaScript",
    },
    {
      image: SkillImg5,
      name: "Jquery",
    },
    {
      image: SkillImg6,
      name: "ReactJS",
    },
    {
      image: SkillImg7,
      name:"Redux"
    },
    {
      image: SkillImg8,
      name:"Nodejs"
    },
    {
      image: SkillImg9,
      name: "MongoDB"
    },
    {
      image: SkillImg10,
      name: "Mongoose"
    },
    {
      image: SkillImg11,
      name: "phpMyAdmin"
    },
    {
      image: SkillImg12,
      name: "MySQL"
    },
    {
      image: SkillImg13,
      name: "JWT"
    },
    {
      image: SkillImg14,
      name: "Flutter"
    },
    {
      image: SkillImg15,
      name: "Dart"
    },
    {
      image: SkillImg16,
      name: "COCOS"
    },
    {
      image: SkillImg17,
      name: "github"
    },
    {
      image: SkillImg18,
      name: "git"
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
  