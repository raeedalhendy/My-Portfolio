import React from 'react';
import { Link } from 'react-router-dom';
import go from './../../../assets/img/go2.svg';

export default function ({ items }) {
  return (
    <div className=' mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
      {items.map((el) => (
        <div key={el.id} className=' bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative'>
          <Link to={el.demoProject} >
          <img  className='w-full h-48 object-cover' src={el.projectimg} alt={el.projectname} />
          </Link>
          <div className='p-4'>
            <h1 className='font-semibold text-xl mb-2'>{el.projectname}</h1>
            <div className='bg-gradient-to-r from-customPurple to-violet-500 text-white rounded-2xl p-2 text-center'>
              <h2 className='text-sm'>{el.technologies}</h2>
              <h1 className='text-xl'>{el.technologiesused}</h1>
            </div>
          </div>
          <div className='flex justify-between items-center p-4'>
            <h1 className='font-semibold text-lg dark:text-black'>{el.title}</h1>
            <Link to={`/project-details/${el.id}`}>
              <img src={go} alt="Go to details" className='w-6 h-6' />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
