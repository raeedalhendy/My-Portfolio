import NavItmes from "./NavItmes";
import { Navlinks } from "./../../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MoboNav from "./MoboNav";
import { useState } from "react";

export default function Nav() {
    const [darkMode, setDarkMode] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="px-4 md:px-16 fixed top-0 w-full h-16 flex bg-white opacity-95 dark:bg-Dark dark:bg-opacity-90 z-40">
            <div className="flex items-center justify-between w-full">
                <div className="hidden md:flex">
                    <NavItmes links={Navlinks} />
                </div>
                <button 
                    onClick={toggleDarkMode} 
                    className="dark:text-white text-5xl hover:text-customPurple dark:hover:text-customPurple cursor-pointer">
                    {darkMode ? <FontAwesomeIcon icon="fa-regular fa-sun" /> : <FontAwesomeIcon icon="fa-regular fa-moon" />}
                </button>
                <button 
                    onClick={toggleNav} 
                    className={`dark:text-white text-3xl text-customPurple ${isNavOpen ? 'hidden' : 'block'} md:hidden`}>
                    <FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
                </button>
                <button 
                    onClick={toggleNav} 
                    className={`dark:text-white text-2xl text-customPurple ${isNavOpen ? 'block' : 'hidden'} md:hidden`}>
                    <FontAwesomeIcon icon="fa-solid fa-x" />
                </button>
            </div>

            <div className={`fixed top-0 left-0 w-3/4 rounded-sm bg-customPurple dark:bg-Dark z-50 transition-transform duration-300 ${isNavOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
                <MoboNav links={Navlinks} />
            </div>
        </nav>
    );
}
