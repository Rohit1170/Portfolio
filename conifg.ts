
export const NEXT_PUBLIC_SERVICE_ID="service_iobuoih";
export const  NEXT_PUBLIC_TEMPLATE_ID="template_7s6ocno";
export const NEXT_PUBLIC_PUBLIC_KEY="H0uSpMacNAFhSdszk"

interface ProjectDetailstype {
  id:number;
  title: string;
  description: string;
  href:string;
  projecttitle:string;
  bgurl:string,
  Techstack:string[]
}

export const ProjectDetails: ProjectDetailstype[] = [
  {
    id:1,
    title: "SIPA Nutrition",
    description: `A full-stack D2C e-commerce platform I solo-designed and built end-to-end — product catalog, checkout flow, and admin/order management — integrated with Razorpay for secure payment processing. Owned the complete lifecycle from architecture to production maintenance. Grew to 1,600+ organic users and 1,900+ sessions via Instagram, Facebook, and Google.`,
        href:"https://sipanutrition.com",
        projecttitle:"SIPA Nutrition",
        bgurl:"/sipa.svg",
        Techstack:["Nextjs", "TypeScript", "Node", "Tailwind", "Mongodb", "Razorpay"]
  },
  {
    id:2,
    title: "Stock-web",
    description: ` StockWeb is a responsive platform crafted with HTML, CSS, and JavaScript, offering real-time stock and cryptocurrency analysis. I implemented margin calculation for stocks and cryptocurrencies, integrating APIs for live updates. This project showcases my expertise in web development and commitment to delivering accurate financial insights to users.`,
        href:"https://stock-web.onrender.com",
        projecttitle:"Stock-web",
        bgurl:"/stock.png",
        Techstack:["Html", "CSS", "Javascript", "Bootstrap"]
  },
  
  {
    id:3,
    title: "Portfolio",
    description: `Directed the creation of a dynamic portfolio website leveraging Next.js, TypeScript, Tailwind CSS, Framer Motion, Acerternity UI, and EmailJS. This endeavor amalgamates leading-edge technologies to present a visually striking and engaging user interface. Highlights encompass fluid navigation, polished animations, and a responsive contact form, empowered by EmailJS.`,
href:"#",
projecttitle:"Portfolio",
bgurl:"/Portfolio.png",
Techstack:["Nextjs","TypeScript","Tailwind","Framer Motion","Acerternity UI","Emailjs"]

  },
 
  {
    id:4,
    title: "Go-Chat",
    description: `The Go Chat, built with Node.js, Socket.IO, and HTML/CSS/JavaScript, enables secure and efficient communication among users. Developed to run locally on a machine, it facilitates simultaneous interactions between multiple users. This project underscores my proficiency in real-time application development and user-centric design.`,
href:"https://go-chat-6b8b.onrender.com",
projecttitle:"Go-Chat",
bgurl:"/chat.png",
Techstack:["Mongodb", "Express", "Node","Socket.io", "JavaScript"]

  },
];

interface WorkExperienceType {
  id: number;
  company: string;
  role: string;
  duration: string;
  location?: string;
  points: string[];
}

export const WorkExperienceDetails: WorkExperienceType[] = [
  {
    id: 1,
    company: "Wipro",
    role: "Project Engineer",
    duration: "Dec 2024 – Present",
    points: [
      "Built and maintained 30+ automation scripts (ITK/Java) for enterprise workflow systems, cutting manual process time and improving delivery cycles",
      "Designed and executed 100+ automated/manual test cases for a client-facing enterprise system, driving faster release validation",
      "Drove requirement analysis and Agile ceremonies across sprint cycles",
    ],
  },
  {
    id: 2,
    company: "Skepsi",
    role: "Software Developer",
    duration: "Sept 2024 – Nov 2024",
    location: "Remote",
    points: [
      "Developed and maintained a scalable enterprise web app in .NET/C# for multi-entity booking management",
      "Integrated RESTful APIs for secure cross-service communication",
      "Automated QA workflows with Selenium, cutting testing effort by 80%",
    ],
  },
  {
    id: 3,
    company: "Siemens",
    role: "Undergraduate Trainee",
    duration: "July 2023 – Dec 2023",
    points: [
      "Automated item/workflow creation via ITK scripts, cutting task time from hours to 2–5 minutes",
      "Led a 5-member team project improving collaboration and reporting",
    ],
  },
];

