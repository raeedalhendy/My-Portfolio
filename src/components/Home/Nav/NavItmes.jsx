import React, { useState } from "react";

const NavItems = ({ links }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <ul className="ul-nav flex justify-center items-center w-full gap-10 ">
        {links.map((el, index) => (
            <li
            key={index}
            className={` dark:text-white font-semibold cursor-pointer  flex items-center justify-center h-8 w-24 rounded-2xl hover:text-white hover:bg-[#583FBC] ${
                selectedIndex === index ? 'bg-[#583FBC] text-white dark:bg-[#583FBC] ' : 'text-black'
            }`}
            onClick={() => handleClick(index)}>
            <a href={el.path}>{el.title}</a>
            </li>
        ))}
        </ul>
    );
    };

export default NavItems;