import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import {Button} from '../index';
import { pricing } from '../../constants';
import styles from  '../../style';
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";
import { IoCreate,IoDocumentText,IoBriefcase,IoDiamond, IoCloseCircleOutline } from "react-icons/io5";

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

    const icons = [
        <IoCreate size="100" color='#00d8ff'/>,
        <IoDocumentText size="100" color='#00d8ff'/>,
        <IoBriefcase size="100" color='#00d8ff'/>,
        <IoDiamond size="100" color='#00d8ff'/>
    ];

  return (
    
    <section id="default-carousel" className="md:hidden flex relative w-full" data-carousel="slide">
        <div className={`flex flex-col justify-between ${styles.boxWidth} my-12`}>
            <h2 className='text-center text-white text-[50px] font-bold mb-6'>Wybierz swój plan:</h2>
            <div className='flex flex-1 justify-center'>
                <ReactCardFlip key={desc} isFlipped={flipped} flipDirection="horizontal">
                    <div className='flex flex-col justify-between place-items-center bg-black-gradient w-[300px] h-[550px] rounded-xl p-6 text-center py-[3rem]'>
                    {icons[pricingPlan]}
                    <h3 className='text-white text-[35px] h-[50px] font-bold text-gradient'>{title}</h3>
                    <p className='text-zinc-200 text-[18px] h-[50px] mb-5'>{desc}</p>
                    {(discount == 0) ? 
                        <h4 className='text-white text-[25px] h-[25px] font-semibold mb-5'>{pricingPlan === 0 ? price : price + " zł"}</h4> 
                        : 
                        <h4 className='text-white text-[25px] h-[25px] font-semibold mb-5'><span className='text-cyan-500 line-through '><span className='text-zinc-500'>{price}</span></span> {price * (1-(discount/100))} zł</h4>
                    }
                    <Button name="Zobacz szczegóły" onClick={() => setFlipped(current => !current)}/>
                    </div>
                    <div className='bg-black-gradient w-[300px] h-[550px] rounded-xl p-6'>
                    <IoCloseCircleOutline title='Close' onClick={() => setFlipped(current => !current)} color='#00d8ff' className='w-[30px] h-[30px] absolute right-3 top-3 cursor-pointer' />
                    <h3 className='text-white text-[30px] font-bold text-gradient'>{title}</h3>
                    {(discount == 0) ? 
                        <h4 className='text-white text-[25px] h-[25px] font-semibold mb-5'>{pricingPlan === 0 ? price : price + " zł"}</h4> 
                        : 
                        <h4 className='text-white text-[25px] h-[25px] font-semibold mb-5'><span className='text-cyan-500 line-through '><span className='text-zinc-500'>{price}</span></span> {price * (1-(discount/100))} zł</h4>
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
        </div>
    </section>

  )
}

export default Carousell