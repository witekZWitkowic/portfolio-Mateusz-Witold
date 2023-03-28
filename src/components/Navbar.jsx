import React from 'react'
import { navLinks } from '../constants'
import styles from '../style';
import { WMlogo, close, menu } from '../assets';
import { useState } from 'react';



const Navbar = (props) => {

    const [openCloseNav, setOpenCloseNav] = useState(false);
    const {handleClickScroll} = props;
 
    return(
    <div className={`flex justify-between ${styles.boxWidth}`}>
        <img src={WMlogo} className='sm:w-[5%] sm:h-[5%] w-[15%] h-[15%] m-5' />
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((link, index) => (
                <li key={link.id} className={`links cursor-pointer text-[18px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-5'}`} onClick={()=>handleClickScroll(link.id)}>{link.title}</li>
            ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center m-5 z-50'>
            <img src={!openCloseNav ? menu : close} 
            onClick={() => setOpenCloseNav((prev) => !prev)} 
            className={`${openCloseNav ? "fixed z-10" : "static z-10"}`} />
            <div className={`p-6 bg-black-gradient fixed top-0 right-0 w-[100%] h-[50%] ${openCloseNav ? "sidebar" : "sidebar-out"}`}>
                <ul className='list-none flex-col justify-end items-center flex-1 mt-10'>
                    {navLinks.map((link, index)=>(
                    <li key={link.id} className={`font-poppins text-[30px] text-white font-normal cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`} onClick={()=>{handleClickScroll(link.id);setOpenCloseNav((prev) => !prev)}}>
                        {link.title}
                    </li>
                    ))}
                </ul>
            </div>
      </div>
    </div>
  )
}

export default Navbar;