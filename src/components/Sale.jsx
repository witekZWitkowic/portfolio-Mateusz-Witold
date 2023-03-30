import React from 'react'
import Button from './Button'
import { sale } from '../constants'
import { useState } from 'react';
import { cross } from '../assets'

const Sale = (props) => {
  const {setPlanChoosed} = props;
  const [openCloseSale, setOpenCloseSale] = useState(false);
  const [initSale, setInitSale] = useState(true);

  return (
    <div className={`${(sale.isActive) ? "flex" : "hidden"}`}>
      <div className={`${openCloseSale ? "fade-out" : "fade-in"} sm:flex hidden`}>
      <div className={`blink bg-black-gradient-2 rounded-xl text-center w-[400px] h-[200px] grid place-content-center fixed top-[40%] z-[9] left-[-22rem] cursor-pointer`} onClick={()=>{setOpenCloseSale(true);setInitSale(false)}}>
        <h2 className='text-gradient font-bold text-[24px] -rotate-90 relative right-[-175px]'>{sale.title}</h2>
      </div>
      </div>
      <div className={`fixed  top-1/4 left-[-26rem] z-[9] ${initSale ? "hidden" : "grid"}`}>
        <div className={`bg-black-gradient-2 rounded-xl text-center w-[400px] py-10 place-content-center ${openCloseSale ? "sale-in" : "sale-out"}`}>
          <img src={cross} onClick={()=>setOpenCloseSale(false)} className='w-[25px] h-[25px] absolute right-3 top-3 cursor-pointer'/>
          <h2 className='text-gradient font-bold text-[32px] py-3'>{sale.title}</h2>
          <h3 className='text-white font-semibold'>{sale.desc}</h3>
          <ul className='list-disc pl-6 py-2 text-left mx-20'>
            {sale.features.map((feature, index) => (
              <li key={index} className={`even:text-zinc-100 odd:text-zinc-300 hover:text-cyan-300 mt-2 cursor-default`}>{feature.feature}</li>
              ))}
          </ul>
          <h4 className='text-white text-[32px] h-[25px] my-3 font-semibold mb-5'>{sale.price} zł</h4>
          <div className='w-[200px] m-auto'>
            <Button name="WYBIERZ" onClick={() => setPlanChoosed(`${sale.title} PLAN`)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sale