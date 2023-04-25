import React from 'react'
import { pricing } from '../constants'
import styles from '../style';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import Button from './Button';
import ReactGA from 'react-ga4';
import { IoCreate,IoDocumentText,IoBriefcase,IoDiamond,IoCloseCircleOutline } from "react-icons/io5";

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

  const icons = [
    <IoCreate size="100" color='#00d8ff'/>,
    <IoDocumentText size="100" color='#00d8ff'/>,
    <IoBriefcase size="100" color='#00d8ff'/>,
    <IoDiamond size="100" color='#00d8ff'/>
  ];

  return (
    <section className={`md:flex hidden flex-col justify-between ${styles.boxWidth} my-12`}>
      <h2 className='text-center text-white sm:text-[50px] text-[44px] font-bold mb-6'>Wybierz swój plan:</h2>
      <div className='flex flex-1 justify-between'>
        {pricing.map((plan, index) => (
          <ReactCardFlip key={index+"A"} isFlipped={flipped[index]} flipDirection="horizontal">
            <div className='flex flex-col justify-between place-items-center bg-black-gradient w-[300px] h-[550px] rounded-xl p-6 text-center py-[3rem]'>
              {plan.icon}
              {icons[index]}
              <h3 className='text-white text-[35px] h-[50px] font-bold text-gradient'>{plan.title}</h3>
              <p className='text-zinc-200 text-[18px] h-[50px] mb-5'>{plan.desc}</p>
              {(plan.discount == 0) ? 
                <h4 className='text-white text-[25px] h-[25px] font-semibold mb-5'>{plan.price} {(index != 0) ? "zł" : ""}</h4> 
                : 
                <h4 className='text-white text-[25px] h-[25px] font-semibold mb-5'><span className='text-cyan-500 line-through '><span className='text-zinc-500'>{plan.price}</span></span>{plan.price * (1-(plan.discount/100))} zł</h4>
              }
              <Button name="Zobacz szczegóły" onClick={() => {handleClick(index);analytics(index)}}/>
            </div>
            <div className='bg-black-gradient w-[300px] h-[550px] rounded-xl p-6'>
              <IoCloseCircleOutline title='Close' onClick={() => handleClick(index)} color='#00d8ff' className='w-[30px] h-[30px] absolute right-3 top-3 cursor-pointer' />
              <h3 className='text-white text-[30px] font-bold text-gradient'>{plan.title}</h3>
              {(plan.discount == 0) ? 
                <h4 className='text-white text-[25px] h-[25px] font-semibold mb-5'>{plan.price} {(index != 0) ? "zł" : ""}</h4> 
                : 
                <h4 className='text-white text-[25px] h-[25px] font-semibold mb-5'><span className='text-cyan-500 line-through '><span className='text-zinc-500'>{plan.price}</span></span> {plan.price * (1-(plan.discount/100))} zł</h4>
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