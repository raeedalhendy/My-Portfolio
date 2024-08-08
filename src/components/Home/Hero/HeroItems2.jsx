import React from 'react'
import "./Hero.css";
import {logoP} from "./../../../data"
import {BackProfile} from  "../../../data"



export default function HeroItems2 () {
    return (
    <div className=' w-2/4 '>
            <div className='Conteiner-ball relative flex items-center justify-center'>
                <img className= ' profile  absolute   ' src={logoP} alt="" />
                <img className = "Ball"src={BackProfile} alt="" />
            </div>
    </div>
    )
}
