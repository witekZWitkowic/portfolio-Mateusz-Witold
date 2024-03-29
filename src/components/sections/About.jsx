import React from 'react'
import {about} from '../../constants'
import {Button} from '../index';
import ReactGA from 'react-ga4';
import {FaPencilRuler,FaChartLine,FaHandHoldingHeart } from 'react-icons/fa'

const About = (props) => {

  const {handleClickScroll} = props;

  function analytics(){
    ReactGA.event({
      category:"About us price check", 
      action: "About us price check"
    });
  }

  const icons = [
    <FaPencilRuler color='#00d8ff' className='w-[58px] h-[58px] mr-8'/>,
    <FaChartLine color='#00d8ff' className='w-[58px] h-[58px] mr-8'/>,
    <FaHandHoldingHeart color='#00d8ff' className='w-[58px] h-[58px] mr-8'/>
  ];

  return (
      <section id="about" className={`flex-1 flex sm:flex-row flex-col items-center w-full`}>
        <div className={`flex-1 flex flex-col justify-center`}>
          {about.map((about, index) => (
            <div key={index} className='mb-10 flex items-center'>
              {icons[index]}
              <div>  
                <h3 className='text-white text-[20px] font-bold'>{about.title}</h3>
                <p className='text-dimWhite sm:text-[18px] text-[12px] max-w-[470px]'>{about.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`flex-1 flex flex-col sm:items-start items-center justify-center md:my-0 my-10`}>
          <h2 className='text-white md:text-[58px] text-[44px] font-semibold mb-3 text-center'>
                Ty prowadź swój biznes, <br className='sm:block hidden'/> {" "}
                My zajmiemy się stroną.
          </h2>
          <p className='md:flex hidden text-dimWhite max-w-[470px] sm:mb-0 mb-5 text-center mx-auto'>
            Korzystając z Twoich wytycznych i naszego doświadczenia przygotujemy dla Ciebie nowoczesną stronę, będącą najlepszą wizytówką Twojego biznesu.
          </p>
          <div className='mx-auto'>
            <Button name="Wybierz plan dla siebie!" onClick={()=>{handleClickScroll("pricing");analytics()}}/>
          </div>
          
        </div>
      </section>
  )
}

export default About