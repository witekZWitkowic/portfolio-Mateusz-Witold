import React from 'react'
import styles , { layout } from  '../style'
import {about} from '../constants'
import Button from './Button'

const Sale = (props) => {

  const {handleClickScroll} = props;

  return (
      <div className={`flex items-center justify-center bg-black-gradient-2 rounded-xl p-10 w-[50%] text-center`}>
        <h2 className='text-gradient font-bold text-[32px]'>SPRING SALE</h2>
      </div>
  )
}

export default Sale