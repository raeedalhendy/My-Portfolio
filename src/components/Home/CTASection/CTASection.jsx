import React from 'react'
import "./CtASection.css"
import Line from "./../../../assets/img/Lines.png";
import Up from "./../../../assets/img/Up.png"

export default function CTASection() {
  return (
    <div className='Con-CTA h-full flex justify-center items-center  relative'>
        <a href="#Home" className='dark:hidden '><img className='UP absolute right-2 top-0' src={Up} alt="Home" /></a>
        <div className='CTA w-4/5 px-  bg-customPurple h-80 rounded-xl flex items-center justify-center gap-16 relative'>
        <img src={Line} className='w-screen h-full'/>
        <div className='cta absolute pl-10'>
            <h1 className='text text-white font-bold text-3xl'>
                Try me out, risk free!
            </h1>
            <p className='text2 text-gray-300 mt-7'> If you’re not happy with the design after the first draft,
            I’ll refund your deposit, no questions asked</p>
            <a href="#Contact" className=' hidden BTN-C dark:text-customPurple w-32 h-16 text-white dark:bg-white  items-center justify-center  rounded-xl '> Contact</a>

        </div>
        <div className='absolute top-1/4 right-0 pr-8'>
        <a href="#Contact" className='BTN-C2 dark:text-customPurple w-32 h-16 text-white dark:bg-white flex items-center justify-center  rounded-xl '> Contact</a>
        </div>
        </div>
    </div>
  )
}
