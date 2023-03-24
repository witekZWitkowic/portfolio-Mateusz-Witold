import React from 'react'

const Button = ({name, onClick, customClass}) => {
  return (
    <div className={`flex align-middle justify-center px-6 pb-1 h-[45px] bg-blue-gradient rounded-xl mt-6 cursor-pointer ${customClass}`} onClick={onClick}>
        <button className='text-[20px] text-black font-semibold'>
            {name}
        </button>
    </div>
  )
}

export default Button