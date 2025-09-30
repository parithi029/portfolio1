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
    title: "Graphic Designer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Logo Designer",
    icon: backend,
  },
  {
    title: "Image Editor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    link:"https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS 3",
    icon: css,
    link:"https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: javascript,
    link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Illustrator",
    icon: typescript,
    link:"https://www.adobe.com/products/illustrator.html",
  },
  {
    name: "React JS",
    icon: reactjs,
    link:"https://react.dev/",
  },
  {
    name: "AfterEffects",
    icon: redux,
    link:"https://www.adobe.com/products/aftereffects.html",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    link:"https://tailwindcss.com/",
  },
  {
    name: "Git",
    icon: git,
    link:"https://git-scm.com/",
  },
  {
    name: "Photoshop",
    icon: mongodb,
    link:"https://www.adobe.com/products/photoshop.html",
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Graphics Designer",
    company_name: "Bharathi Studio (Family Business)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2018 - present",
    points: [
      "Played a key role in the daily operations of a design business, taking ownership of client projects from concept to completion.",
      "Responsible for creating a range of professional designs, including logos, identity cards, flyers, and brochures, to meet client needs.",
      "Gained extensive, practical experience in a design and print environment, with responsibility for creating a variety of digital and print materials.",
      "Managed client communication and project timelines, ensuring timely and high-quality delivery.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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


const projects = [
  {
    name: "Flyers",
    description:
      "A collection of dynamic flyer, poster, and banner designs for events, businesses, and workshops, focusing on high-impact layouts, clear typography, and strong calls-to-action.",
    tags: [
      {
        name: "illustrator",
        color: "blue-text-gradient",
      },
      {
        name: "photoshop",
        color: "green-text-gradient",
      },
      {
        name: "graphicdesign",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://parithi029.github.io/flyers/",
  },
  {
    name: "Logos",
    description:
      "A portfolio of modern logo designs, ranging from minimalist and corporate to organic and conceptual, built to define and strengthen a brand's visual identity across all platforms.",
    tags: [
      {
        name: "illustrator",
        color: "blue-text-gradient",
      },
      {
        name: "branding",
        color: "green-text-gradient",
      },
      {
        name: "logodesign",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://parithi029.github.io/logos/",
  },
  {
    name: "Image Editing",
    description:
      "A service focused on breathing new life into old, damaged photographs using photoshop and AI tools (fooocus) (restoration) and enhancing digital portraits by smoothing skin and refining details (retouching).",
    tags: [
      {
        name: "photoshop",
        color: "blue-text-gradient",
      },
      {
        name: "fooocus",
        color: "green-text-gradient",
      },
      {
        name: "AI tools",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://parithi029.github.io/image/",
  },
];

export { services, technologies, experiences, projects };