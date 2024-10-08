import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import CTASection from "./CTASection/CTASection";
import CreativeWorks from "./CreativeWorks/CreativeWorks";
import {LINE} from "./../../data"
import {lineW} from "./../../data"
import "../Home/Home.css"
import Contact from "./Contact/Contact";
export default function Home() {
  
  return (
    
    <div id="Home" className="CONTAINER flex flex-col gap-10 pt-28 w-fu ">
        
        <Hero /> 
        <img src={LINE} className="w-full h-6 flex dark:hidden"/>
        <img src={lineW} className="w-full h-6 hidden dark:flex"/>
        <AboutMe/>
        <Education/>
        <CTASection/>
        <CreativeWorks />
        <Contact/>
    </div>
  )
}
