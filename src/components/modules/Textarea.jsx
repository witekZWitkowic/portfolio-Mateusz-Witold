import React from 'react'
import { useState } from 'react';

const Textarea = ({forName, labelName, placeholderName, name, isRequired, formId}) => {

  const [input, setInput] = useState("");
  const [requiredError, setRequiredError] = useState(false);

  function validate(e){
    if(isRequired && input.length === 0)setRequiredError(true);
    if(input.length > 0){
      setRequiredError(false);
    }
  }

  return (
    <div className="sm:col-span-2">
        <label htmlFor={forName} className="block mb-2 text-[20px] font-medium text-white">{labelName} <span className='text-red-600'>*</span></label>
        <textarea id={forName} name={name} value={input} onInput={e => setInput(e.target.value)} onBlur={e=>validate(e)} rows="6" className={`ow-sm bg-black-gradient  border-[2px] text-white text-sm rounded-lg ${(!requiredError) ? "border-teal-700 focus:border-teal-500" : "border-red-600 focus:border-red-400"} valid:bg-black-gradient focus:outline-none focus:ring-teal-500 block w-full p-2.5`}  placeholder={placeholderName}>
        </textarea>
        {(requiredError) ? <span id={`${formId}_error_empty`} className={`text-red-500 text-[14px]`}>To pole nie może być puste</span> : ""}
    </div>
  )
}

export default Textarea