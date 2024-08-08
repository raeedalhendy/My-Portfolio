import React from 'react'
import { Link } from 'react-router-dom'

export default function EducationItem({Item2}) {
return (
    <div className='w-2/4'>
        {Item2.map((el)=>(
                <div className='flex flex-col gap-5'>
                    <div>
                        <h1 className='text font-medium text-3xl text-black dark:text-white'>{el.experience}</h1>
                    </div>
                    <div>
                        <Link className='text font-medium text-2xl  text-customPurple' to="https://vica.website/">{el.Vica}</Link>
                    </div>
                    <div className='flex'>
                        <h1 className='text2 font-normal text-gray-400 '>{el.TitleE}</h1>
                    </div>
                </div>
            ))}
    </div>
  )
}