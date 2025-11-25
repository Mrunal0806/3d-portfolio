import { meta, shopify, starbucks, tesla } from "../assets_3d_portfolio/assets/images";
import {
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    react,
    redux,
    tailwindcss,
} from "../assets_3d_portfolio/assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Mrunal0806',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mrunal-kapse-328b1326a/',
    }
];

export const projects = [
  {
    iconUrl: meta,
    theme: "btn-back-red",
    name: "Legal Chatbot",
    description:
      "Developed a legal chatbot that provides information on various legal topics, including contract law, intellectual property, and more. The chatbot uses natural language processing to understand user queries and provide accurate responses.",
    link: "https://github.com/Mrunal0806/Legalbot",
  },
  {
    iconUrl: redux,
    theme: "btn-back-green",
    name: "CryptoCurrency App",
    description:
      "Created a cryptocurrency tracking application that provides real-time data on various cryptocurrencies, including price changes and market .",
    link: "https://github.com/Mrunal0806/CryptoCurrency_App",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Wandelust",
    description:
      "Developed a real-estate application that allows users to search for properties, view details, and contact agents. The application uses a modern UI and provides a seamless user experience.",
    link: "https://github.com/Mrunal0806/Wanderlust",
  },
  {
    iconUrl: estate,
    theme: "btn-back-blue",
    name: "Stock Market Analysis",
    description: "Developed an interactive stock market prediction web app using Streamlit, Plotly, and yFinance API. Built a multi-ticker dashboard with candlestick charts, trading volume overlays, and forecast visualizations.",
    link: "https://github.com/Mrunal0806/Stock_market_Analysis",
  },
  {
    iconUrl: estate,
    theme: "btn-back-yellow",
    name: "Sign Language Detection",
    description:
      "InBuilt a real-time application using MediaPipe and OpenCV to recognize hand gestures by tracking 21 key and more landmarks. Designed for accessibility, enabling smooth and interactive communication support for non-hearing users",
    link: "",
  },
];

