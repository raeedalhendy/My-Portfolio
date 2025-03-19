import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MoboNav({ links }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (index) => {
        setSelectedIndex(index);
    };
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };
    return (
        <ul className="Nav-Mobo dark:bg-Dark bg-customPurple pt-10 pb-10 w-full opacity-100 rounded-2xl flex flex-col items-center gap-12">
            {links.map((el, index) => (
                <li
                    key={index}
                    className={`text-white flex items-center justify-center rounded-2xl hover:text-customPurple hover:animate-bounce hover:w-40 hover:h-8 hover:bg-white cursor-pointer ${selectedIndex === index ? 'text-white' : 'text-black'}`}
                    onClick={() => handleClick(index)}
                >
                    <a href={el.path}>{el.title}</a>
                </li>
                
            ))}
            <button onClick={toggleDarkMode} className="text-white text-5xl">
                {darkMode ? <FontAwesomeIcon icon="fa-regular fa-sun" /> : <FontAwesomeIcon icon="fa-regular fa-moon" />}
            </button>
        </ul>
    );
}
