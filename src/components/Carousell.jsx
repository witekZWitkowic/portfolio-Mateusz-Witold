import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import Button from './Button';
import { cross } from '../assets';
import { pricing } from '../constants';
import styles from  '../style';
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";

const Carousell = (props) => {
   
    const [flipped, setFlipped] = useState(false);
    const [pricingPlan, setPricingPlan] = useState(0);
    const {title, img, desc, price, discount, features} = pricing[pricingPlan];
    const {planChoosed, setPlanChoosed} = props;

  function choosePlan(plan){
    setPlanChoosed(plan);
  }

    const checkPlan = (index) => {
        if(index > pricing.length - 1){
            return 0;
        }
        if(index < 0){
            return pricing.length - 1
        }
        return index;
    }

    const prevPlan = () => {
        setPricingPlan((pricingPlan) => {
            let newPricingPlan = pricingPlan + 1;
            return checkPlan(newPricingPlan);
        });
    }

    const nextPlan = () => {
        setPricingPlan((pricingPlan) => {
            let newPricingPlan = pricingPlan - 1;
            return checkPlan(newPricingPlan);
        });
    }

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
                        <h2 className='text-white text-[25px] h-[25px] font-semibold mb-5'>{pricingPlan === 0 ? price : price + " zł"}</h2> 
                        : 
                        <h2 className='text-white text-[25px] h-[25px] font-semibold mb-5'><span className='text-cyan-500 line-through '><span className='text-zinc-500'>{price}</span></span> {price * (1-(discount/100))} zł</h2>
                    }
                    <Button name="Zobacz szczegóły" onClick={() => setFlipped(current => !current)}/>
                    </div>
                    <div className='bg-black-gradient w-[300px] h-[550px] rounded-xl p-6'>
                    <img src={cross} onClick={() => setFlipped(current => !current)} className='w-[25px] h-[25px] absolute right-3 top-3 cursor-pointer'/>
                    <h1 className='text-white text-[30px] font-bold text-gradient'>{title}</h1>
                    {(discount == 0) ? 
                        <h2 className='text-white text-[25px] h-[25px] font-semibold mb-5'>{pricingPlan === 0 ? price : price + " zł"}</h2> 
                        : 
                        <h2 className='text-white text-[25px] h-[25px] font-semibold mb-5'><span className='text-cyan-500 line-through '><span className='text-zinc-500'>{price}</span></span> {price * (1-(discount/100))} zł</h2>
                    }
                    <ul className='list-disc pl-6'>
                        {features.map((x, index) => (
                        <li key={index} className={`even:text-zinc-100 odd:text-zinc-300 hover:text-cyan-300 mt-2 cursor-default`}>{x.feature}</li>
                        ))}
                    </ul>
                    <div className='absolute inset-x-10 bottom-12'>
                        <Button name="Wybierz" onClick={() => choosePlan(title)}/>
                    </div>
                    </div>
                    
                </ReactCardFlip>
                <button onClick={nextPlan} className='w-[30px] h-[30px] bg-gray-500/[.4] rounded-full absolute top-[60%] right-[87%]'>
                    <VscChevronLeft size={30}/>
                </button>
                <button onClick={prevPlan} className='w-[30px] h-[30px] bg-gray-500/[.4] rounded-full absolute top-[60%] left-[87%]'>
                    <VscChevronRight size={30}/>
                </button>
            </div>
        </section>
    </div>

  )
}

export default Carousell