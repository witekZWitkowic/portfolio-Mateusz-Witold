import React from 'react'

const Input = ({type, forName, labelName, placeholderName, name}) => {
  return (
    <div className='flex flex-col mx-auto'>
        <label htmlFor={forName} className="block mb-1 text-[18px] font-medium text-white">{labelName} <span className='text-red-600'>*</span></label>
        <input type={type} id={forName} name={name} className="shadow-sm bg-black-gradient border border-teal-300 text-white outline-none text-sm rounded-lg focus:border-teal-600 block p-2.5 " placeholder={placeholderName} required />
    </div>
  )
}

export default Input