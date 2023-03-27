import React from 'react'

const Textarea = ({forName, labelName, placeholderName}) => {
  return (
    <div className="sm:col-span-2">
        <label for={forName} className="block mb-2 text-[20px] font-medium text-white">{labelName}</label>
        <textarea id={forName} rows="6" className="ow-sm bg-black-gradient border-[2px] border-teal-700 text-white text-sm rounded-lg valid:bg-black-gradient focus:outline-none focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"  placeholder={placeholderName}>
        </textarea>
    </div>
  )
}

export default Textarea