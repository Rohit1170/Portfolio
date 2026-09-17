import { FaReact } from "react-icons/fa";
import {  TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaCloudflare } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiRecoil } from "react-icons/si";
import { AiFillFire } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiPrisma } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { RiNpmjsFill } from "react-icons/ri";
import { SiTurborepo } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { ReactNode } from "react";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { FaAws } from "react-icons/fa";

export interface Generictype{
    id:number,
    children:ReactNode,
    name:string
}

export const Programming:Generictype[]=[{
  id:1,
  children:<IoLogoJavascript className="text-3xl  font-normal text-yellow-400 bg-black"></IoLogoJavascript>,
  name:'JavaScript'
 },
 
 {
  id:2,
  children:<TbBrandCpp className="text-3xl  font-normal bg-blue-700 text-white"></TbBrandCpp>,
  name:'C++'
 },
 {
  id:12,
  children:<SiTypescript className="text-3xl  font-normal text-blue-500 bg-black"></SiTypescript>,
  name:'TypeScript'
 },
]

export const Tools:Generictype[]=[{
  id:3,
  children:<FaGithub  className="text-3xl  font-normal text-black"></FaGithub>,
  name:"Github"
},{id:4,
  children:<SiSocketdotio  className="text-3xl  font-normal text-black "></SiSocketdotio>,
  name:"Socket.io"
},
{
  id:5,
  children:<TbBrandVscode  className="text-3xl  font-normal text-cyan-400"></TbBrandVscode>,
  name:"VsCode"
},]

export  const Database:Generictype[]=[{
    id:6,
    children:<SiMongodb  className="text-3xl  font-normal text-green-800"></SiMongodb>,
    name:"Mongodb"
  },{
    id: 7,
    children:<GrMysql  className="text-3xl  font-normal text-blue-600/70"></GrMysql>,
    name:"MySql"
  },]
  
  export const Frontend:Generictype[]=[{
    id:8,
    children:<FaReact className="text-3xl  font-normal text-cyan-500"></FaReact>,
    name:"React.js"
  },{
    id:9,
    children:<SiTailwindcss className="text-3xl  font-normal text-cyan-500 "></SiTailwindcss>,
    name:"Tailwind"
  },{
    id:13,
    children:<TbBrandNextjs className="text-3xl  font-normal text-black"></TbBrandNextjs>,
    name:"Next.js"
  },]

  export const Backend:Generictype[]=[{
    id:10,
    children:<FaNode className="text-3xl  font-normal text-green-600"></FaNode>,
    name:"Node.js"
  },{
    id:11,
    children:<SiExpress className="text-3xl  font-normal text-black"></SiExpress>,
    name:"Express.js"
  },{
    id:14,
    children:<SiDotnet className="text-3xl  font-normal text-purple-700"></SiDotnet>,
    name:".NET"
  },]

  export const Cloud:Generictype[]=[{
    id:15,
    children:<FaAws className="text-3xl  font-normal text-orange-500"></FaAws>,
    name:"AWS"
  },{
    id:16,
    children:<SiMicrosoftazure className="text-3xl  font-normal text-blue-600"></SiMicrosoftazure>,
    name:"Azure"
  },]