import React from 'react';
import { Link } from 'react-router-dom';
import "./CreativeWorks.css";
import go from './../../../assets/img/go2.svg';

export default function ({items}) {
  return (
    <div className='Container-projects mt-14 flex flex-wrap  justify-evenly gap-8'>
      {items.map((el) => (
        <div key={el.id} className='con-project w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 '>
          <div className='flex flex-col bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative'>
            <Link to={el.demoProject} className=' h-80  right-0 left-0 absolute  opacity-0 '>{el.demoProject}</Link>
            <img className='w-full h-48 object-cover' src={el.projectimg} alt={el.projectname} />
            <div className='p-4'>
              <h1 className='font-semibold text-xl mb-2 '>{el.projectname}</h1>
              <div className='bg-gradient-to-r from-customPurple to-violet-500 text-white rounded-2xl p-2 text-center dark:text-white'>
                <h2 className='text-sm dark:text-white'>{el.technologies}</h2>
                <h1 className='text-xl dark:text-white'>{el.technologiesused}</h1>
              </div>
            </div>
          </div>
          <div className='flex justify-between pt-5'>
            <h1 className='font-semibold text-2xl dark:text-white'>{el.title}</h1>
            <Link  to={`/project-details/${el.id}`}>
              <img src={go} alt="Go to details" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}