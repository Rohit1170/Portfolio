
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
    title: "Stock-web",
    description: ` StockWeb is a responsive platform crafted with HTML, CSS, and JavaScript, offering real-time stock and cryptocurrency analysis. I implemented margin calculation for stocks and cryptocurrencies, integrating APIs for live updates. This project showcases my expertise in web development and commitment to delivering accurate financial insights to users.`,
        href:"https://stock-web.onrender.com",
        projecttitle:"Stock-web",
        bgurl:"/stock.png",
        Techstack:["Html", "CSS", "Javascript", "Bootstrap"]
  },
  
  {
    id:2,
    title: "Portfolio",
    description: `Directed the creation of a dynamic portfolio website leveraging Next.js, TypeScript, Tailwind CSS, Framer Motion, Acerternity UI, and EmailJS. This endeavor amalgamates leading-edge technologies to present a visually striking and engaging user interface. Highlights encompass fluid navigation, polished animations, and a responsive contact form, empowered by EmailJS.`,
href:"#",
projecttitle:"Portfolio",
bgurl:"/Portfolio.png",
Techstack:["Nextjs","TypeScript","Tailwind","Framer Motion","Acerternity UI","Emailjs"]

  },
 
  {
    id:3,
    title: "Go-Chat",
    description: `The Go Chat, built with Node.js, Socket.IO, and HTML/CSS/JavaScript, enables secure and efficient communication among users. Developed to run locally on a machine, it facilitates simultaneous interactions between multiple users. This project underscores my proficiency in real-time application development and user-centric design.`,
href:"https://go-chat-6b8b.onrender.com",
projecttitle:"Go-Chat",
bgurl:"/chat.png",
Techstack:["Mongodb", "Express", "Node","Socket.io", "JavaScript"]

  },
];

