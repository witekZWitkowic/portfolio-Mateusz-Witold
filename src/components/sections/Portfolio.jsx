import React from 'react'
import { portfolio } from '../../constants'

const Portfolio = () => {
  return (
    <>
    <section id="portfolio" className={`my-24 ${(portfolio.length === 0) ? "hidden" : ""}`}>
      <h2 className='text-white text-center font-bold text-[48px]'>Nasze realizacje</h2>
      <div className='flex flex-wrap place-content-between gap-y-[50px] mt-10'>
      {portfolio.map((p, index) => (
        <div key={"portfolio"+index} className='w-[604px]'>
          <div className='portfolio-container  cursor-pointer'>
            <a href={p.link} target='_blank' rel='nofollow'>
              <img src={p.img} alt={p.title} className='border-2 border-[#34333b] portfolio-image' />
              <div className='text-white portfolio-desc'>
                <h3 className='text-[28px] font-semibold'>{p.title}</h3>
                <p className='my-2'>{p.desc}</p>
                <ul className='text-white text-[12px] mt-4 flex gap-x-5 gap-y-2 justify-center flex-wrap'>
                  {p.features.map((feature, index) => (
                    <li className='bg-black-gradient-2 rounded-xl py-1 px-4'>{feature}</li>
                  ))}
                </ul>
              </div>
            </a>
          </div>
        </div>
      ))}
      </div>
    </section>
    </>
  )
}

export default Portfolio