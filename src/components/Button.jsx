import React from 'react'

const Button = ({name, onClick}) => {
  return (
    <div className='flex items-center p-2 h-[45px] bg-blue-gradient rounded-xl mt-6 cursor-pointer' onClick={onClick}>
        <button className='text-[20px] text-black font-semibold'>
            {name}
        </button>
    </div>
  )
}

export default Button