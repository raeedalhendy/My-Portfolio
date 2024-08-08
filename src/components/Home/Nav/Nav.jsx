import "./Nav.css";
import {logos} from "./../../../data"
import NavItmes from "./NavItmes"
import { Navlinks } from "./../../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MoboNav from "./MoboNav";
import { useState } from "react";




const OpenNav = ()=>{
    const open = document.querySelector(".nav-mobo-open")
    const close = document.querySelector(".nav-mobo-close")
    const mobonav = document.querySelector(".Nav-Mobo")
if (open.style.display = "flex") {
    open.style.display = "none"
    mobonav.style.display = "flex "
}
if (close.style.display = "none") {
    close.style.display = "flex"
}
}
const CloseNav = ()=>{
    const mobonav = document.querySelector(".Nav-Mobo")
    const open = document.querySelector(".nav-mobo-open")
    const close = document.querySelector(".nav-mobo-close")
    if (close.style.display = "flex") {
        close.style.display = "none"
        mobonav.style.display= "none"
    }
    if (open.style.display = "none") {
        open.style.display = "flex"
    }

}

export default function Nav() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    return (
    <nav className="contaier-nav px-16  fixed  top-0 w-full  bg-white opacity-95  dark:bg-Dark dark:bg-opacity-90 z-50 ">
        <div className="flex items-center justify-between ">
            <img className="logo  h-28 rounded-full " src={logos} />

            <NavItmes links ={Navlinks}/>
            <h1 onClick={toggleDarkMode} className=" dark:text-white moon text-5xl">
                {darkMode ? <FontAwesomeIcon icon="fa-regular fa-sun" /> : <FontAwesomeIcon icon="fa-regular fa-moon" />}
            </h1>
            <h1 onClick={OpenNav} className="dark:text-white nav-mobo-open hidden text-3xl"><FontAwesomeIcon icon="fa-solid fa-bars" /></h1>
            <h1 onClick={CloseNav} className="dark:text-white nav-mobo-close hidden text-3xl"><FontAwesomeIcon icon="fa-solid fa-x" /></h1>
        </div>
        <MoboNav links ={Navlinks}/>
    </nav>
    )
}
