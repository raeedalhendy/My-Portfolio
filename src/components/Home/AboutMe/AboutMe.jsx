import React from 'react'
import bgAbout from "./../../../assets/img/Aboutme.png"
import bgAbout2 from "./../../../assets/img/Aboutme2.png"
import "./AboutMe.css";



export default function AboutMe() {
    const skills = [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.Js', level: 85 },
        { name: 'Restful api', level: 85 },
        { name: 'Tailwind', level: 90 },

    ];
    return (
    <div id='AboutMe' className='aboutme text-center	  flex  items-center  px-20 w-full   dark:from-[#1E293B] dark:via-[#334155] dark:to-[#0F172A]'>
        <div className=' relative flex '>
            <img className='bg2 w-full dark:hidden' src={bgAbout} alt="" />
            <img className='bg1 w-full  hidden dark:flex' src={bgAbout2} alt="" />
        </div>
        <div className="  dark:text-white text ">
            <h2 className="nav-text text-6xl font-bold mb-4">About Me</h2>
            <p className="  mb-6 text-xl text-gray-500 dark:text-gray-300 ">"Interested in the field of Programming, especially Web Development, I always strive to move forward and gain new experiences."</p>
            <div>
                {skills.map((skill) => (
                <div key={skill.name} className="mb-4 text-xl">
                    <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className="bg-customPurple h-2.5 rounded-full "
                        style={{ width: `${skill.level}%` }}
                    ></div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
    )
}
