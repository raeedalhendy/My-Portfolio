import React from 'react'
import { Link } from 'react-router-dom'
import go from './../../../assets/img/go.svg' 
import Projects from './Projects'
import { projectItem } from "./../../../data";


export default function CreativeWorks() {
  return (
    <div id='Projects' className='px-10 w-full mt-5'>
        <h1 className='text-customPurple text-md font-medium'>Projects</h1>
        <div className='flex justify-between flex-wrap'>
            <div className='flex '>
                <h1 className='text text-black font-bold text-4xl dark:text-white'>
                    My Creative Works Latest <span className='text-customPurple'>Projects</span>
                </h1>
                
            </div>
            <div className='  bg-customPurple flex items-center justify-center w-40 h-12 rounded-xl '>
                <Link to="https://github.com/raeedalhendy" className=' flex items-center justify-center text-white gap-3'>View Github
                <img className='w-6 h-6' src={go} alt="" /> </Link>
            </div>
        </div>
        <div>
            <Projects items = {projectItem}/>
        </div>
    </div>
  )
}
