import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  starbucks,
  selenium,
  mysql,
  php,
  python,
  java,
  cookbookie,
  vestario,
  gearwise,
  expense,
} from "../assets";

export const navLinks = [
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "work",
    title: "Experience",
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
    name: "selenium",
    icon: selenium,
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
  },
];

const experiences = [
  {
    title: "Design Lead",
    company_name: "Women in FOSS Community UWU",
    icon: starbucks,
    iconBg: "#134e4a",
    date: "2023 - Present",
    points: [
      "Appointed as Design Lead of Women in FOSS Community of Uva Wellassa University and successfully conducted several projects, enhancing community engagement and promoting open source contributions.",
      "Gained collaborative skills by working closely with cross-functional teams, fostering effective teamwork and communication.",
    ],
  },
  {
    title: "Assistant Director in Membership",
    company_name: "LEO Club of UWU",
    iconBg: "#134e4a",
    date: "2023 - 2024",
    points: [
      "Participated in community-related projects, contributing to meaningful social initiatives and outreach efforts.",
      "Recognized with the Best Member Growth Award for October 2023, demonstrating effective member management and engagement strategies.",
    ],
  },
   {
     title: "Volunteer",
     company_name: "IEEE UWU",
    
     iconBg: "#383E56",
     date: " 2022 -  2023",
     points: [
      " Volunteered as a Secretary Team Member for the Shecodress Hackathon organized by WIE UWU",
       "Served as a Finance Team Member for Impetus 2024 organized by IEEE UWU"
     ],
   },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
      {
        name: "Selenium",
        color: "blue-text-gradient"
      }
    ],
    image: cookbookie,
    source_code_link: "https://github.com/MalshaK99/CookBookie_backend",
    //youtube_link: "https://github.com/MalshaK99/CookBookie_frontend",

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
        name: "mysql",
        color: "green-text-gradient",
      },
     
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: vestario,
    source_code_link: "https://github.com/MalshaK99/vestario",
      //youtube_link: "https://youtu.be/61jWsZpppaU", 

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
    image: gearwise,
    source_code_link: "https://github.com/MalshaK99/GearWise-back_end",
   youtube_link: "https://youtu.be/ovFegqVDX9w?si=MQXzz1T9rVH96l0S"
  },
  {
    name: "Expense Manager",
    description:
    "The Expense Manager is an intuitive web application designed to help users effectively track and manage their personal finances. With a simple and user-friendly interface, users can easily input and categorize their expenses, set monthly budgets, and monitor their spending habits. The application features comprehensive visual reports and charts that provide insights into financial trends over time, enabling users to make informed decisions about their spending. Whether you're looking to save money, plan for future expenses, or simply gain better control over your finances, the Expense Manager is your go-to tool for maintaining financial health.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: expense,
    source_code_link: "https://github.com/MalshaK99/Expense-Manager",
    youtube_link: "https://www.youtube.com/watch?v=zAy1fCp6AZA&feature=youtu.be"

  },

];

export { services, technologies, experiences, testimonials, projects };
