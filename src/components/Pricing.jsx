import React from 'react'
import { pricing } from '../constants'
import styles from '../style';
import { bulletPoint } from '../assets';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import Button from './Button';
import { diamond } from '../assets';




const Pricing = () => {

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

  return (
    <section className={`flex flex-col justify-between ${styles.boxWidth} my-12`}>
      <h1 className='text-center text-white text-[50px] font-bold mb-6'>Wybierz swój plan:</h1>
      <div className='flex flex-1 justify-between'>
        {pricing.map((plan, index) => (
          <ReactCardFlip isFlipped={flipped[index]} flipDirection="horizontal">
            <div key={index+"A"} className='bg-black-gradient w-[300px] h-[550px] rounded-xl p-6'>
              <h1 className='text-white text-[30px] font-bold text-gradient'>{plan.title}</h1>
              <h2 className='text-white text-[20px] font-semibold mb-5'>{plan.price}</h2>
              <ul className=''>
                {plan.features.map((feature, index) => (
                  <li key={index} className={`even:text-zinc-200 odd:text-zinc-400 hover:text-cyan-300  links mt-2 cursor-default`}>{feature.feature}</li>
                ))}
              </ul>
              <Button name="Powrót" onClick={() => handleClick(index)}/>
            </div>
            <div key={index+"B"} className='flex flex-col justify-between place-items-center bg-black-gradient w-[300px] h-[550px] rounded-xl p-6 text-center py-[3rem]'>
              <img src={diamond} className='w-[100px] h-[100px]'/>
              <h1 className='text-white text-[35px] font-bold text-gradient'>{plan.title}</h1>
              <p className='text-zinc-200 text-[18px] mb-5'>{plan.desc}</p>
              <h2 className='text-white text-[20px] font-semibold mb-5'>{plan.price}</h2>
              <Button name="Zobacz szczegóły" onClick={() => handleClick(index)}/>
            </div>
          </ReactCardFlip>
        ))}
      </div>
    </section>
  )
}

export default Pricing