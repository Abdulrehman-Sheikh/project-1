import React, { useState } from 'react'
import logo from "../Logo.png";

const Header = () => {
    let Links = [
        {name:"Home",link:"/" },
        {name:"Aout US",link:"/" },
        {name:"How it works",link:"/" },
        {name:"Services",link:"/" },
        {name:"Contact",link:"/" },
    ]
    let [open,setOpen]=useState(false);
  return (
    <div className='bg container mx-auto p-6 w-full top-0 left-0'>
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
            {/* logo */}
           <div className="cursor-pointer flex item-center">
             <img src={logo} alt="" />
           </div>
           <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-10 cursor-pointer'>
           <ion-icon name={open ? 'close':'menu'}></ion-icon>
           </div>
           <ul className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
            {
                Links.map((link)=>(
                 <li key={link.name} className='md:ml-8 text-ml md:my-0 my-7'>
                    <a href={link.link} className='text-black md:hidden hover:text-darkBlue duration-500'>{link.name}</a>
                 </li>
                ))
            }
           </ul>
        </div>
      
    </div>
  )
}

export default Header;
