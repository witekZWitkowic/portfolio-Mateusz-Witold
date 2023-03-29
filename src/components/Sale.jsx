import React from 'react'
import styles , { layout } from  '../style'
import {about} from '../constants'
import Button from './Button'
import { sale } from '../constants'

const Sale = (props) => {
  const {setPlanChoosed} = props;

  return (
      <div className={`bg-black-gradient-2 rounded-xl p-10 text-center w-[500px] m-auto`}>
        <h2 className='text-gradient font-bold text-[32px]'>{sale.title}</h2>
        <h3 className='text-white font-semibold'>{sale.desc}:</h3>
        <ul className='list-disc pl-6 text-left mx-20'>
                {sale.features.map((feature, index) => (
                  <li key={index} className={`even:text-zinc-100 odd:text-zinc-300 hover:text-cyan-300 mt-2 cursor-default`}>{feature.feature}</li>
                ))}
              </ul>
        <div className='w-[200px] m-auto'>
          <Button name="WYBIERZ" onClick={() => setPlanChoosed("SPRING SALE PLAN")} />
        </div>
      </div>
  )
}

export default Sale