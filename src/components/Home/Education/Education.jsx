import React from 'react'
import EducationItem from './EducationItem'
import EducationItem2 from './EducationItem2'
import { educationItem } from "./../../../data";
import { educationItem2 } from "./../../../data";
import { LINE2 } from "./../../../data";
import { LINE2W } from "./../../../data";
import { ball2 } from "./../../../data";

export default function Education() {
  return (
    <div id='Education'  className='mt-14 px-14 flex flex-col gap-24  w-full'>
      <div className='flex  relative justify-center items-center'>
        <h1 className='dark:text-white z-20 text-4xl sm:text-5xl md:text-6xl font-bold'>
          Education & Experience
        </h1>
      <img className=' absolute  right-0' src={ball2} alt="" />
      </div>
      <div className='flex flex-col md:flex-row gap-20 w-full Continer-Education'>
        <div className='flex gap-12'>
          <img className='flex dark:hidden' src={LINE2} alt="" />
          <img className='hidden dark:flex' src={LINE2W} alt="" />
          <EducationItem Item={educationItem} />
        </div>
        <div className='flex gap-12'>
          <img className='flex dark:hidden' src={LINE2} alt="" />
          <img className='hidden dark:flex' src={LINE2W} alt="" />
          <EducationItem2 Item2={educationItem2} />
        </div>
      </div>
    </div>
  );
}
