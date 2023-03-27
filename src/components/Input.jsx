import React from 'react'

const Input = ({type, forName, labelName, placeholderName}) => {
  return (
    <div className='flex flex-col mx-auto'>
        <label for={forName} class="block mb-1 text-[18px] font-medium text-white">{labelName}</label>
        <input type={type} id={forName} class="shadow-sm bg-black-gradient border border-teal-300 text-white outline-none text-sm rounded-lg focus:border-teal-600 block p-2.5 " placeholder={placeholderName} required />
    </div>
  )
}

export default Input