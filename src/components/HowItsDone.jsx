import React from 'react'
import styles from '../style';
import { howItsDone } from '../constants';

const HowItsDone = () => {
  return (
    <section id="about" className={`flex flex-col justify-between ${styles.boxWidth} mt-16`}>
        <h2 className='text-white sm:text-[68px] text-[44px] font-semibold text-center'>Jak działamy?</h2>
        <div className='flex flex-1 flex-col relative'>
            {howItsDone.map((singlePart, index) => (
                <div key={singlePart.title + Math.ceil(Math.random() * 20)} className='flex sm:flex-row flex-col sm:even:flex-row-reverse flex-1 py-10'>
                    <div className={`flex-1 flex flex-col sm:items-start items-center justify-center md:my-0 my-4`}>
                        <h4 className='text-white sm:text-[48px] text-[28px] font-semibold sm:mb-0 mb-10 text-center'>
                            {singlePart.title}
                        </h4>
                        <p className='text-dimWhite max-w-[480px] sm:block hidden'>{singlePart.description}</p>
                    </div>
                    <div className={`flex-1 flex flex-col items-center justify-center sm:my-0 my-[-50px]`}>
                        <img src={singlePart.img} className='w-[300px] h-[300px] z-[2]'/>
                    </div>
                </div>
            ))}

            <div className={`md:bg-[url('./assets/arrows/Arrow1.png')] bg-none bg-no-repeat bg-cover bg-center w-[340px] h-[340px] absolute top-[220px] left-[470px] z-[1]`} />
            <div className={`md:bg-[url('./assets/arrows/Arrow2.png')] bg-none bg-no-repeat bg-cover bg-center w-[540px] h-[540px] absolute top-[540px] left-[350px] z-[3]`} />
            <div className={`md:bg-[url('./assets/arrows/Arrow3.png')] bg-none bg-no-repeat bg-cover bg-center w-[540px] h-[540px] absolute top-[880px] left-[310px] z-[3]`} />

            {/* <img src={arrow1} className='w-[340px] h-[340px] absolute top-[220px] left-[470px] sm:block hidden' />
            <img src={arrow2} className='w-[540px] h-[540px] absolute top-[560px] left-[350px] sm:block hidden' />
            <img src={arrow3} className='w-[540px] h-[540px] absolute top-[900px] left-[370px] sm:block hidden' /> */}
        </div>
    </section>
  )
}

export default HowItsDone