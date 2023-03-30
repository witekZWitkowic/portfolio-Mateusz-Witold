import React from 'react'
import { navLinks } from '../constants'
import styles from '../style';
import { WMlogo, close, menu } from '../assets';
import { useState } from 'react';
import { sale } from '../constants'


const Navbar = (props) => {

    const [openCloseNav, setOpenCloseNav] = useState(false);
    const {handleClickScroll} = props;
    const {setPlanChoosed} = props;
 
    return(
    <div className={`flex justify-between ${styles.boxWidth}`}>
        <a className='sm:w-[5%] sm:h-[5%] w-[15%] h-[15%] m-5' href="https://www.web-masters.pl">
            <img src={WMlogo}  />
        </a>
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
                    <li key={link.id} className={`font-poppins text-[30px] text-white font-normal cursor-pointer`} onClick={()=>{handleClickScroll(link.id);setOpenCloseNav((prev) => !prev)}}>
                        {link.title}
                    </li>
                    ))}
                    {(sale.isActive) ? 
                    <li key={sale.title} className={`font-poppins text-[30px] text-white font-normal cursor-pointer mt-5`} onClick={()=>{setPlanChoosed(sale.title);setOpenCloseNav((prev) => !prev)}}>
                        <span className='text-gradient font-semibold'>{sale.title}</span>
                    </li> 
                    : ""}
                    
                </ul>
            </div>
      </div>
    </div>
  )
}

export default Navbar;