import React from 'react'
import {logoP} from "./../../../data"
import {BackProfile} from  "../../../data"



export default function HeroItems2 () {
    return (
    <div className='   '>
            <div className=' relative flex  items-center justify-center'>
                <img className= ' h-full   absolute   ' src={logoP} />
                <img src={BackProfile}  />
            </div>
    </div>
    )
}
