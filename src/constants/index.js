import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  selenium,
  mysql,
  php,
  python,
  java
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },
  
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "python",
    icon: python,
  },{
    name: "java",
    icon: java,
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CookBookie",
    description:
    "Web-based recipe sharing platform provides users with a convenient and efficient solution for all their recipe needs. Users can easily search for recipes, publish their own, and manage profile details, including changing passwords, updating personal information, and uploading a profile picture. The platform also allows users to edit and delete their published recipes, as well as view previously shared recipes. With these features, CookBookie is designed to foster a community of cooking enthusiasts who can share and explore delicious recipes."  , 
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/MalshaK99/CookBookie_backend",
    source_code_link1: "https://github.com/MalshaK99/CookBookie_frontend",

  },
  {
    name: "Vestario",
    description:
      "Vestario is an innovative web application designed to enhance the online shopping experience for clothing enthusiasts. With a user-friendly interface, Vestario allows customers to browse a diverse selection of clothing items, view detailed product information, and easily add their favorite products to their cart. The platform offers convenient filtering options to help users find the perfect pieces based on their preferences. Whether shopping for everyday wear or special occasions, Vestario aims to provide a seamless and enjoyable shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
     
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/MalshaK99/vestario",
  },
  {
    name: "GearWise",
    description:
   "Automotive CRM System is a powerful web application developed to streamline operations at vehicle service centers. This system automates key processes such as customer management, appointment scheduling, service tracking, and invoicing, enabling service providers to enhance efficiency and improve customer satisfaction. Users can easily manage customer details, view service history, and send reminders for upcoming appointments or maintenance needs. With its intuitive interface and robust functionality, the Automotive CRM System provides service center operators with the tools they need to optimize their workflows and deliver exceptional service to their clients.",    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/MalshaK99/GearWise-back_end",
  },
];

export { services, technologies, experiences, testimonials, projects };
