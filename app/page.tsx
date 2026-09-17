
import Navigationbar from "@/components/main/Navbar"
import ProjectSection from "@/components/main/ProjectSection";
import AboutMe from "@/components/main/AboutMe";
import WorkExperience from "@/components/main/WorkExperience";
import BlackHole from "@/components/main/BlackHole";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";


export default function Home() {

  return (
    <div className=" flex flex-col w-full ">
      <Navigationbar></Navigationbar>
      <Hero></Hero>
     <AboutMe></AboutMe>
      <WorkExperience></WorkExperience>
      <ProjectSection></ProjectSection>
      <Skills></Skills>
     <BlackHole></BlackHole>
    </div>
  );
}
