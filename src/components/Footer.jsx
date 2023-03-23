import React from 'react'
import { linkedin,facebook,instagram } from '../assets'
const Footer = () => {
  return (
    <section className='w-full flex flex-col pt-10'>
      <div className='w-[90%] h-[1px] bg-zinc-800 m-auto'/>
      <div className='flex justify-between my-7'>
        <div>
          <h2 className='text-gradient'>&#174; Web-Masters.pl </h2>
        </div>
        <div className='flex'>
          <img src={instagram} className='mr-4'/>
          <img src={linkedin} className='mr-4'/>
          <img src={facebook}/>
        </div>
      </div>
    </section>
  )
}

export default Footer