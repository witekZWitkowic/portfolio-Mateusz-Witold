import React from 'react'
import { pricing } from '../constants'
import styles from '../style';
import { bulletPoint } from '../assets';

const Pricing = () => {
  return (
    <section className={`flex flex-col justify-between ${styles.boxWidth} my-12`}>
      <h1 className='text-center text-white text-[50px] font-bold mb-6'>Wybierz swój plan:</h1>
      <div className='flex flex-1 justify-between'>
        {pricing.map((plan, index) => (
          <div key={index} className='bg-black-gradient w-[300px] h-[550px] rounded-xl p-6'>
            <h1 className='text-white text-[30px] font-bold text-gradient'>{plan.title}</h1>
            <h2 className='text-white text-[20px] font-semibold mb-5'>{plan.price}</h2>
            <ul className=''>
              {plan.features.map((feature, index) => (
                <li key={index} className={`even:text-zinc-200 odd:text-zinc-400 hover:text-cyan-300  links mt-2 cursor-default`}>{feature.feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing