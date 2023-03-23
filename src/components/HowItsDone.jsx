import React from 'react'
import styles from '../style';
import { howItsDone } from '../constants';

const HowItsDone = () => {
  return (
    <section className={`flex flex-col justify-between ${styles.boxWidth}`}>
        <h1 className='text-white text-[68px] font-semibold text-center'>Jak działamy?</h1>
        <div className='flex flex-1 flex-col py-10'>
            {howItsDone.map((singlePart, index) => (
                <div className='flex sm:flex-row flex-col sm:even:flex-row-reverse flex-1 py-10'>
                    <div className={`flex-1 flex flex-col sm:items-start items-center justify-center md:my-0 my-10`}>
                        <h2 className='text-white text-[48px] font-semibold sm:mb-0 mb-10 text-center'>
                            {singlePart.title}
                        </h2>
                        <p className='text-dimWhite max-w-[480px] sm:block hidden'>{singlePart.description}</p>
                    </div>
                    <div className={`flex-1 flex flex-col items-center justify-center md:my-0 my-10`}>
                        <img src={singlePart.img} className='w-[300px] h-[300px]'/>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default HowItsDone