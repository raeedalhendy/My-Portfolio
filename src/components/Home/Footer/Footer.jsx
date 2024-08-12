import React from 'react'
import facebook from './../../../assets/img/facebook.svg'
import instagram from './../../../assets/img/instagram.svg'
import linkedin from './../../../assets/img/linkedin.svg'
import "./Footer.css"

export default function () {
  return (
    <div className='mt-7 px-16 pt-4 pb-4 Container-Footer'>
        <div className='flex flex-wrap gap-4 justify-between items-center'>
            <div><h1 className='font-medium dark:text-white'>@ 2024. All Rights Reserved</h1></div>
            <div><h1 className='font-medium dark:text-white'>Develpoment by Raeed Alhendy</h1></div>
            <div className='flex gap-5 '>
                <a href="https://www.facebook.com/raeed.alhendy?mibextid=ZbWKwL"><img className='h-11' src={facebook} alt="" /></a>
                <a href="https://www.instagram.com/raeed.alhendy?igsh=ZjdzZzBiNndscTdj"><img className='h-11' src={instagram} alt="" /></a>
                <a href="https://www.linkedin.com/in/raeed-alhendy-b92112308/"><img className='h-11' src={linkedin} alt="" /></a>
            </div>
        </div>
    </div>
  )
}
