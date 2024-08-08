import React from 'react'

export default function EducationItem({Item}) {
  return (
    <div className='w-2/4'>
        {Item.map((el)=>(
                <div className='flex flex-col gap-8'>
                    <div>
                        <h1 className='text font-medium text-3xl text-black dark:text-white'>{el.education}</h1>
                    </div>
                    <div>
                        <h1 className='text2 font-normal text-gray-400 '>{el.Title}</h1>
                    </div>
                </div>
            ))}
    </div>
  )
}
