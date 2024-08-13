import React from 'react'
import call from "./../../../assets/img/call.svg"
import email from "./../../../assets/img/email.svg"
import address from "./../../../assets/img/address.svg"
import "./Contact.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4d15d5ac-4a54-4a6a-ab10-a6ce0a51c460")
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => {
            res.json()
            toast.success('Message has been sent')
        });
        
        if (res.success) {
          console.log("Success", res);
        }
      }
  return (
      <div id='Contact' className='px-16 mt-6'>
        <ToastContainer/>
        <h1 className='text-customPurple text-md font-medium'>Contact</h1>
            <div className='flex '>
                <h1 className='text text-black font-bold text-4xl dark:text-white'>
                    Let’s Discuss Your <span className='text-customPurple'>Projects</span>
                </h1>
            </div>
            <div className='Container-Contact w-full flex  justify-between'>
                    <div className='cotainer-con flex flex-col gap-6 mt-14'>
                        <div className='Contact flex gap-5'>
                            <img src={call} alt="" />
                            <div>
                                <h1 className='text-gray-400 dark:text-white'>Call Me</h1>
                                <h1 className='text2 mt-4 text-xl dark:text-white'>+963988141718</h1>
                            </div>
                        </div>
                        <div className='Contact flex gap-5'>
                            <img src={email} alt="" />
                            <div className='contact'>
                                <h1 className='dark:text-white text-gray-400'>Email Me</h1>
                                <h1 className='text2 mt-5 dark:text-white'>raeed.alhendy4@gmail.com</h1>
                            </div>
                        </div>
                        <div className='Contact flex gap-5'>
                            <img src={address} alt="" />
                            <div >
                                <h1 className='dark:text-white text-gray-400'>Address</h1>
                                <h1 className='text2 mt-4 text-xl dark:text-white'>Damascus,Syria</h1>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className='input flex flex-col gap-6 w-2/4' >
                        <div className='flex  gap-5'>
                            <input className='h-14' type="text" placeholder='Full Name'name='name' required />
                            <input className='h-14' type="email" placeholder='Your Email' name='email' />
                        </div>
                        <div className='flex flex-col gap-6'>
                            <input className='h-14' type="text" placeholder='Phone Number' name='number'/>
                            <input className='h-44' type="text"  placeholder='Message' name='message'/>
                        </div>
                        <button className='h-14 px-4 bg-customPurple w-44 rounded-xl text-white'>Send Message</button>
                    </form>
            </div>
    </div>
  )
}
