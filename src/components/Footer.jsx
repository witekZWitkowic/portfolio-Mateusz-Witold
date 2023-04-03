import React from 'react'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'

const Footer = () => {
  return (
    <section className='w-full flex flex-col pt-10'>
      <div className='w-[90%] h-[1px] bg-zinc-800 m-auto'/>
      <div className='flex justify-between my-7'>
        <div>
          <h4 className='text-gradient'>&#174; Web-Masters.pl </h4>
        </div>
        <div className='flex'>
          <BsInstagram size="25" className='mr-4 text-teal-400'/>
          <BsLinkedin size="25"  className='mr-4 text-teal-400'/>
          <GrFacebook size="25" className='text-teal-400'/>
        </div>
      </div>
    </section>
  )
}

export default Footer