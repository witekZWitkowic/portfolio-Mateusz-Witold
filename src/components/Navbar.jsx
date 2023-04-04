import React from 'react'
import { navLinks } from '../constants'
import styles from '../style';
import { WMlogo, close, menu } from '../assets';
import { useState } from 'react';
import { sale } from '../constants'



const Navbar = (props) => {

    const [openCloseNav, setOpenCloseNav] = useState(false);
    const [initNav, setInitNav] = useState(true);
    const {handleClickScroll} = props;
    const {setPlanChoosed} = props;
 
    return(
    <div className={`flex justify-between mt-5 ${styles.boxWidth}`}>
        <a className='sm:w-[5%] md:h-[5%] w-[15%] h-[15%]' href="https://www.web-masters.pl">
            <img src={WMlogo} alt="Web-Masters Logo" />
        </a>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((link, index) => (
                <li key={link.id} className={`links cursor-pointer text-[18px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-5'}`} onClick={()=>handleClickScroll(link.id)}>{link.title}</li>
            ))}
        </ul>
        <div className={`sm:hidden flex flex-1 justify-end items-center z-50`}>

            <div className={`${!openCloseNav ? 'menu_burger' : 'menu_burger open'}`}>
                <div className={`menu_burger-btn ${openCloseNav ? "fixed z-10" : "static z-10"}`} 
                onClick={() => {setOpenCloseNav((prev) => !prev);setInitNav(false)}} 
                />
            </div>
            <div className={`p-6 bg-black-gradient fixed top-0 right-0 w-[100%] h-[50%] ${(initNav) ? "hidden" : "flex"} ${openCloseNav ? "sidebar" : "sidebar-out"}`}>
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