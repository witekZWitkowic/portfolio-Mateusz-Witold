import React from 'react'
import styles , { layout } from  '../style'
import {about} from '../constants'
import Button from './Button'

const About = () => {
  return (
      <div className={`flex-1 flex sm:flex-row flex-col sm:items-baseline items-center w-full py-[100px]`}>
        <div className={`flex-1 flex flex-col justify-center md:my-0 my-10`}>
          {about.map((about, index) => (
            <div key={index} className='mb-10 flex items-center'>
              <img src={about.img} className='w-[58px] h-[58px] mr-5'/>
              <div>  
                <h2 className='text-white text-[20px] font-bold'>{about.title}</h2>
                <p className='text-dimWhite max-w-[470px]'>{about.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`flex-1 flex flex-col sm:items-start items-center justify-center md:my-0 my-10`}>
          <h2 className='text-white sm:text-[58px] text-[48px] font-semibold sm:mb-0 mb-10 text-center'>
                Ty prowadź swój biznes, <br className='sm:block hidden'/> {" "}
                My zajmiemy się stroną.
          </h2>
          <p className='text-dimWhite max-w-[470px] sm:mb-0 mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In id dolores dignissimos soluta minima alias earum quia totam. Iure odit possimus quisquam quae! Laboriosam, dolore?
          </p>
          <Button name="Zaprojektuj swoją stronę!"/>
        </div>
      </div>
  )
}

export default About