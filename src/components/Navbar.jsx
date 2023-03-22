import React from 'react'
import { navLinks } from '../constants'
import styles from '../style';
import { WMlogo, close, menu } from '../assets';
import { useState } from 'react';



const Navbar = () => {
    const [openCloseNav, setOpenCloseNav] = useState(false);
 
    return(
    <div className={`flex justify-between ${styles.boxWidth}`}>
        <img src={WMlogo} className='sm:w-[5%] sm:h-[5%] w-[15%] h-[15%] m-5' />
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((link, index) => (
                <li id={link.id} key={link.id} className={`links cursor-pointer text-[18px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-5'}`}>{link.title}</li>
            ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center m-5'>
            <img src={!openCloseNav ? menu : close} 
            onClick={() => setOpenCloseNav((prev) => !prev)}
            />
            <div className={`${openCloseNav ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className='list-none flex-col justify-end items-center flex-1'>
                    {navLinks.map((link, index)=>(
                    <li key={link.id} className={`font-poppins text-[16px] text-white font-normal cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                        <a href={`#${link.id}`}>
                        {link.title}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
      </div>
    </div>
  )
}

export default Navbar;