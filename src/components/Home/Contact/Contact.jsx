import React from 'react'
import call from "./../../../assets/img/call.svg"
import email from "./../../../assets/img/email.svg"
import address from "./../../../assets/img/address.svg"
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
            res.json();
            toast.success('Message has been sent');
        });

        if (res.success) {
          console.log("Success", res);
        }
    }
  return (
      <div id='Contact' className='px-4 sm:px-16 mt-6'>
        <ToastContainer/>
        <h1 className='text-customPurple text-md font-medium'>Contact</h1>
        <div className='flex flex-col md:flex-row gap-8'>
            <div className='flex flex-col gap-6 mt-14 w-full md:w-1/2'>
                <div className='flex gap-5'>
                    <img src={call} alt="Call" />
                    <div>
                        <h1 className='text-gray-400 dark:text-white'>Call Me</h1>
                        <h1 className='mt-4 text-xl dark:text-white'>+963988141718</h1>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <img src={email} alt="Email" />
                    <div>
                        <h1 className='text-gray-400 dark:text-white'>Email Me</h1>
                        <h1 className='mt-5 dark:text-white'>\</h1>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <img src={address} alt="Address" />
                    <div>
                        <h1 className='text-gray-400 dark:text-white'>Address</h1>
                        <h1 className='mt-4 text-xl dark:text-white'>Damascus, Syria</h1>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='flex flex-col gap-6 w-full md:w-1/2 mt-10 md:mt-0'>
                <div className='flex flex-col sm:flex-row gap-5'>
                    <input 
                        className='h-14 w-full p-2 border border-gray-300 rounded' 
                        type="text" 
                        placeholder='Full Name'
                        name='name' 
                        required 
                    />
                    <input 
                        className='h-14 w-full p-2 border border-gray-300 rounded' 
                        type="email" 
                        placeholder='Your Email' 
                        name='email' 
                    />
                </div>
                <div className='flex flex-col gap-6'>
                    <input 
                        className='h-14 p-2 border border-gray-300 rounded' 
                        type="text" 
                        placeholder='Phone Number' 
                        name='number'
                    />
                    <textarea 
                        className='h-44 p-2 border border-gray-300 rounded' 
                        placeholder='Message' 
                        name='message'
                    ></textarea>
                </div>
                <button className='h-14 px-4 bg-customPurple w-full sm:w-44 rounded-xl text-white flex items-center justify-center gap-2'>
                    Send Message
                    <span className="hidden sm:inline">
                    </span>
                </button>
            </form>
        </div>
      </div>
  )
}
