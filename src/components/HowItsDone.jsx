import React from 'react'
import styles from '../style';
import { howItsDone } from '../constants';
import { arrow1, arrow2, arrow3 } from '../assets';

const HowItsDone = () => {
  return (
    <section className={`flex flex-col justify-between ${styles.boxWidth}`}>
        <h1 className='text-white text-[68px] font-semibold text-center'>Jak działamy?</h1>
        <div className='flex flex-1 flex-col py-10 relative'>
            {howItsDone.map((singlePart, index) => (
                <div className='flex even:flex-row-reverse flex-1 py-10'>
                    <div className={`flex-1 flex flex-col sm:items-start items-center justify-center md:my-0 my-10`}>
                        <h2 className='text-white text-[48px] font-semibold sm:mb-0 mb-10 text-center'>
                            {singlePart.title}
                        </h2>
                        <p className='text-dimWhite max-w-[480px]'>{singlePart.description}</p>
                    </div>
                    <div className={`flex-1 flex flex-col items-center justify-center md:my-0 my-10`}>
                        <img src={singlePart.img} className='w-[300px] h-[300px]'/>
                    </div>
                </div>
            ))}
            <img src={arrow1} className='w-[340px] h-[340px] absolute top-[220px] left-[470px]' />
            <img src={arrow2} className='w-[540px] h-[540px] absolute top-[560px] left-[350px]' />
            <img src={arrow3} className='w-[540px] h-[540px] absolute top-[900px] left-[370px]' />
        </div>
    </section>
  )
}

export default HowItsDone