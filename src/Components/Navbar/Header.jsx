import React, { useState } from 'react'
import Button from '../Button/Button'

function Header() {

  const [open,setOpen] = useState(false);  
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-600'>
                <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                <ion-icon name="logo-ionic"></ion-icon>
                </span>
                Panchang
            </div>

            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>


               <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                <li key='Home' className='md:ml-8 text-xl md:my-0 my-7'>
                    <a href="/" className='text-gray-800 hover:text-gray-400 duration-500'>Home</a>
                </li>    
                
                <li key='About' className='md:ml-8 text-xl md:my-0 my-7'>
                    <a href="/about"  className='text-gray-800 hover:text-gray-400 duration-500'>About Us</a>
                </li>    

                
                <li key='Contact' className='md:ml-8 text-xl md:my-0 my-7'>
                    <a href="/contact"  className='text-gray-800 hover:text-gray-400 duration-500'>Contact</a>
                </li>

                  
            </ul>    

            

            
        </div>
    </div>
  )
}

export default Header
