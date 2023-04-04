import React from 'react'
import { portfolio } from '../constants'

const Portfolio = () => {
  return (
    <>
    <div id="portfolio" className={`my-24 ${(portfolio.length === 0) ? "hidden" : ""}`}>
      <h2 className='text-white text-center font-bold text-[48px]'>Nasze realizacje</h2>
      <div className='flex flex-wrap place-content-between gap-y-[50px] mt-10'>
      {portfolio.map((p, index) => (
        <div className='w-[602px]'>
          <h3 className='text-white font-semibold text-center mb-2'>{p.title}</h3>
          <img src={p.img} alt={p.title} className='border-2 border-[#34333b] cursor-pointer hover:-translate-y-1' />
          <ul className='text-white text-[12px] mt-2 flex gap-x-5 gap-y-2 justify-center flex-wrap'>
          {p.features.map((feature, index) => (
            <li className='bg-black-gradient-2 rounded-xl py-1 px-4'>{feature}</li>
          ))}
          </ul>
        </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default Portfolio