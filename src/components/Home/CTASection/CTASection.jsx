import React from 'react'
import Line from "./../../../assets/img/Lines.png";
import Up from "./../../../assets/img/Up.png"

export default function CTASection() {
  return (
    <div className=' h-full flex justify-center items-center  '>
        <div className=' w-4/5 px-  bg-customPurple h-80 rounded-xl flex items-center justify-center relative'>
        <a href="#Home"><img className=' z-10 absolute right-0 top-0' src={Up} /></a>
        <img src={Line} className='w-full'/>
        <div className=' absolute pl-10'>
            <h1 className='text text-white font-bold text-3xl'>
                Try me out, risk free!
            </h1>
            <p className='text2 text-gray-300 mt-7'> If you’re not happy with the design after the first draft,
            I’ll refund your deposit, no questions asked</p>
            <a href="#Contact" className=' hidden BTN-C dark:text-customPurple w-32 h-16 text-white dark:bg-white  items-center justify-center  rounded-xl '> Contact</a>

        <div className=' '>
        <a href="#Contact" className=' dark:text-customPurple w-32 h-16 text-white dark:bg-white flex items-center justify-center  rounded-xl '> Contact</a>
        </div>
        </div>
        </div>
    </div>
  )
}
