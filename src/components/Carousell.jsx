import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import Button from './Button';
import { pricing } from '../constants';
import Pricing from './Pricing';
import styles from  '../style';
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";

const Carousell = () => {
   
    const [flipped, setFlipped] = useState(false);
    const [pricingPlan, setPricingPlan] = useState(3);
    const {title, img, desc, price, discount, features} = pricing[pricingPlan];

  return (
    
    <div id="default-carousel" className="md:hidden flex relative w-full" data-carousel="slide">
        <section className={`flex flex-col justify-between ${styles.boxWidth} my-12`}>
            <h1 className='text-center text-white text-[50px] font-bold mb-6'>Wybierz swój plan:</h1>
            <div className='flex flex-1 justify-center'>
                <ReactCardFlip key={desc} isFlipped={flipped} flipDirection="horizontal">
                    <div className='flex flex-col justify-between place-items-center bg-black-gradient w-[300px] h-[550px] rounded-xl p-6 text-center py-[3rem]'>
                    <img src={img} className='w-[100px] h-[100px]'/>
                    <h1 className='text-white text-[35px] h-[50px] font-bold text-gradient'>{title}</h1>
                    <p className='text-zinc-200 text-[18px] h-[50px] mb-5'>{desc}</p>
                    {(discount == 0) ? 
                        <h2 className='text-white text-[25px] h-[25px] font-semibold mb-5'>{price} zł</h2> 
                        : 
                        <h2 className='text-white text-[25px] h-[25px] font-semibold mb-5'><span className='text-cyan-500 line-through '><span className='text-zinc-500'>{price}</span></span> {price * (1-(discount/100))} zł</h2>
                    }
                    <Button name="Zobacz szczegóły" onClick={() => setFlipped(current => !current)}/>
                    </div>
                    <div className='bg-black-gradient w-[300px] h-[550px] rounded-xl p-6'>
                    <h1 className='text-white text-[30px] font-bold text-gradient'>{title}</h1>
                    {(discount == 0) ? 
                        <h2 className='text-white text-[25px] h-[25px] font-semibold mb-5'>{price}</h2> 
                        : 
                        <h2 className='text-white text-[25px] h-[25px] font-semibold mb-5'><span className='text-cyan-500 line-through '><span className='text-zinc-500'>{price}</span></span> {price * (1-(discount/100))} zł</h2>
                    }
                    <ul className='list-disc pl-6'>
                        {features.map((x, index) => (
                        <li key={index} className={`even:text-zinc-100 odd:text-zinc-300 hover:text-cyan-300 mt-2 cursor-default`}>{x.feature}</li>
                        ))}
                    </ul>
                    <div className='absolute inset-x-10 bottom-12'>
                        <Button name="Wybierz" onClick={() => handleClick(index)}/>
                    </div>
                    </div>
                    
                </ReactCardFlip>
                <div className='absolute'>
                    <VscChevronLeft />
                </div>
                <div className='absolute'>
                    <VscChevronRight />
                </div>
            </div>
        </section>
    </div>

  )
}

export default Carousell