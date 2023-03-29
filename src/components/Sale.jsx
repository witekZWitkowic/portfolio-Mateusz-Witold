import React from 'react'
import styles , { layout } from  '../style'
import {about} from '../constants'
import Button from './Button'
import { sale } from '../constants'

const Sale = (props) => {
  const {setPlanChoosed} = props;

  return (
    <div className={`${styles.paddingX} ${(sale.isActive) ? styles.flexCenter : "hidden"}` }>
      <div className={`${styles.boxWidth} ${styles.flexCenter}`}>
        <div className={`bg-black-gradient-2 rounded-xl text-center sm:w-[500px] w-[300px] py-10 grid place-content-center`}>
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