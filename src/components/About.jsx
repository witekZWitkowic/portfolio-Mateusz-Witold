import React from 'react'
import styles , { layout } from  '../style'
import {about} from '../constants'
import Button from './Button'

const About = (props) => {

  const {handleClickScroll} = props;

  return (
      <div className={`flex-1 flex sm:flex-row flex-col items-center w-full py-[100px]`}>
        <div className={`flex-1 flex flex-col justify-center`}>
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
          <h2 className='text-white sm:text-[58px] text-[48px] font-semibold sm:mb-3 mb-12 text-center'>
                Ty prowadź swój biznes, <br className='sm:block hidden'/> {" "}
                My zajmiemy się stroną.
          </h2>
          <p className='md:flex hidden text-dimWhite max-w-[470px] sm:mb-0 mb-5 text-center mx-auto'>
            Korzystając z Twoich wytycznych i naszego doświadczenia przygotujemy dla Ciebie nowoczesną stronę, będącą najlepszą wizytówką Twojego biznesu.
          </p>
          <div className='mx-auto'>
            <Button name="Wybierz plan dla siebie!" onClick={()=>handleClickScroll("pricing")}/>
          </div>
          
        </div>
      </div>
  )
}

export default About