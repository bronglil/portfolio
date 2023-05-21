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
  threejs,
  uConnect,
  invyce,
  envoy,
  gilgitappFE,
  invyceFE,
  envoyFE,
  infinitywebFE,
  hackathonFE,
  landaFE,
  github,
  Twitter,
  Linkedin,
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
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const workFlow = [
  {
    name: "Github",
    icon: github,
    link: "https://github.com/bronglil",
  },
  {
    name: "Linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/lilbrong/",
  },
  {
    name: "Twitter",
    icon: Twitter,
    link: "https://twitter.com/bronglil",
  },
];

const experiences = [
  {
    title: "Javascript Developer",
    company_name: "uConnect Technologies",
    icon: uConnect,
    iconBg: "#E6DEDD",
    date: "March 2018 - Dec 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Invyce",
    icon: invyce,
    iconBg: "#383E56",
    date: "Jan 2022 - Nov 2022",
    points: [
      "Building and sustaining web apps with React.js and associated technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I collaborated closely with designers to optimize the user experience and utilized the latest front-end development technologies and best practices to consistently deliver high-quality products. ",
      "I also debugged and troubleshot web applications and websites to maintain their functionality, while ensuring that documentation was kept up-to-date.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Envoy/Blink",
    icon: envoy,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "my primary responsibility is to design, develop, and implement web-based applications using the language. This involves a wide range of tasks, starting with understanding the requirements of the client and comprehending their needs.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "I also collaborate with other developers and stakeholders in the project to ensure that the final product meets all the necessary standards and requirements.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "We extend our heartfelt congratulations to the brilliant team who emerged victorious at the GB-Tech Hackathon 1! Your exceptional skills, innovative thinking, and relentless determination have propelled you to the top spot among fierce competitors",
    name: "",
    designation: "",
    company: "",
    image: hackathonFE,
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Gilgit App",
    description:
      "It is the ultimate online marketplace for local buying and selling! Explore a vast array of items, ranging from cars and mobile phones to laptops, electronics, plots, and residences. With Gilgit App, the possibilities are endless, all at your fingertips. Experience a seamless trading platform like never before.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react native",
        color: "green-text-gradient",
      },
      {
        name: "react query",
        color: "blue-text-gradient",
      },
      {
        name: "Redux/Redux thunk",
        color: "pink-text-gradient",
      },
    ],
    image: gilgitappFE,
    source_code_link: "http://gilgit.app/",
  },
  {
    name: "Invyce",
    description:
      "Invyce as an accounting software, it has now transformed into an advanced accounting and smart invoicing software. With active feedback from customers, all the features & integrations within Invyce are optimized to deliver the best possible experience for business managers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react query",
        color: "green-text-gradient",
      },
      {
        name: "styled component/antd",
        color: "pink-text-gradient",
      },
      {
        name: "ai",
        color: "blue-text-gradient",
      },
    ],
    image: invyceFE,
    source_code_link: "https://enterprise.invyce.com/",
  },
  {
    name: "Envoy/BlinkMobility",
    description:
      "En­voy is a community-based electric car sharing service and platform, providing electric vehicles as an exclusive amenity to apartments, hotels, and workplaces. Envoy electric vehicles are conveniently located on property with dedicated parking spaces and EV charging stations and can be reserved through the Envoy car sharing app. Mo­bil­i­ty as an Ameni­ty™ where you live, work or stay.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: envoyFE,
    source_code_link: "https://www.envoythere.com/mobility-app",
  },
  {
    name: "Infinity web market",
    description:
      "Welcome to Infinity Web Market, the revolutionary online marketplace designed exclusively for local transactions! With Infinity Web Market, you can seamlessly buy and sell a diverse range of items right in your community. From cars, mobile phones, and laptops to electronics, plots, and residences, our platform offers an extensive selection to cater to your needs",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "blue-text-gradient",
      },
    ],
    image: infinitywebFE,
    source_code_link: "https://infinityweb.app/",
  },
  {
    name: "Landa",
    description:
      "Real estate investing for everyone. Our platform welcomes both seasoned investors and newcomers alike, providing accessibility and resources to navigate the world of real estate. We believe in empowering individuals to build wealth and financial stability through property ownership. Join us on our mission to make real estate investing inclusive and attainable for all.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "Content-full",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "blue-text-gradient",
      },
    ],
    image: landaFE,
    source_code_link: "https://landa.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  workFlow,
};
