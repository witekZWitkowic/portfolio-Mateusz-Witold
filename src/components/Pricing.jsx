import React from 'react'
import { pricing } from '../constants'
import styles from '../style';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import Button from './Button';
import { cross } from '../assets';
import ReactGA from 'react-ga4';

const Pricing = (props) => {

  const {setPlanChoosed} = props;

  const initial = [];
  for(let i = 0; i<pricing.length; i++) initial[i] = false;

  const [flipped, setFlipped] = useState(initial);
  
  function handleClick (index) {
    const nextTable = flipped.map((c, i) => {
      if (i === index) {
        return !c;
      } else {
        return c;
      }
    });
    setFlipped(nextTable);
  }

  function analytics(index){
    ReactGA.event({
      category:"Pricing", 
      action: pricing[index].title
    });
  }

  return (
    <section className={`md:flex hidden flex-col justify-between ${styles.boxWidth} my-12`}>
      <h1 className='text-center text-white sm:text-[50px] text-[44px] font-bold mb-6'>Wybierz swój plan:</h1>
      <div className='flex flex-1 justify-between'>
        {pricing.map((plan, index) => (
          <ReactCardFlip key={index+"A"} isFlipped={flipped[index]} flipDirection="horizontal">
            <div className='flex flex-col justify-between place-items-center bg-black-gradient w-[300px] h-[550px] rounded-xl p-6 text-center py-[3rem]'>
              <img src={plan.img} className='w-[100px] h-[100px]'/>
              <h2 className='text-white text-[35px] h-[50px] font-bold text-gradient'>{plan.title}</h2>
              <p className='text-zinc-200 text-[18px] h-[50px] mb-5'>{plan.desc}</p>
              {(plan.discount == 0) ? 
                <h3 className='text-white text-[25px] h-[25px] font-semibold mb-5'>{plan.price} {(index != 0) ? "zł" : ""}</h3> 
                : 
                <h3 className='text-white text-[25px] h-[25px] font-semibold mb-5'><span className='text-cyan-500 line-through '><span className='text-zinc-500'>{plan.price}</span></span> {plan.price * (1-(plan.discount/100))} zł</h3>
              }
              <Button name="Zobacz szczegóły" onClick={() => {handleClick(index);analytics(index)}}/>
            </div>
            <div className='bg-black-gradient w-[300px] h-[550px] rounded-xl p-6'>
              <img src={cross} onClick={() => handleClick(index)} className='w-[25px] h-[25px] absolute right-3 top-3 cursor-pointer'/>
              <h2 className='text-white text-[30px] font-bold text-gradient'>{plan.title}</h2>
              {(plan.discount == 0) ? 
                <h3 className='text-white text-[25px] h-[25px] font-semibold mb-5'>{plan.price} {(index != 0) ? "zł" : ""}</h3> 
                : 
                <h3 className='text-white text-[25px] h-[25px] font-semibold mb-5'><span className='text-cyan-500 line-through '><span className='text-zinc-500'>{plan.price}</span></span> {plan.price * (1-(plan.discount/100))} zł</h3>
              }
              <ul className='list-disc pl-6'>
                {plan.features.map((feature, index) => (
                  <li key={index} className={`even:text-zinc-100 odd:text-zinc-300 hover:text-cyan-300 mt-2 cursor-default`}>{feature.feature}</li>
                ))}
              </ul>
              <div className='absolute inset-x-10 bottom-12'>
                <Button name="Wybierz" onClick={() => setPlanChoosed(plan.title)}/>
              </div>
            </div>
          </ReactCardFlip>
        ))}
      </div>
    </section>
  )
}

export default Pricing