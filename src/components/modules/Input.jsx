import React from 'react'
import { useState } from 'react';

const Input = ({type, forName, labelName, placeholderName, name, isRequired, formId}) => {

  const [input, setInput] = useState("");
  const [typeError, setTypeError] = useState(false);
  const [requiredError, setRequiredError] = useState(false);

  function validate(e){
    if(isRequired && input.length === 0)setRequiredError(true);
    if(input.length > 0){
      setRequiredError(false);
      if(type == "email")setTypeError(!(emailValidation(input)));
    }
  }

  function emailValidation(email){
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return (regex.test(email));
}

  return (
    <div className='flex flex-col mx-auto'>
        <label htmlFor={forName} className="block mb-1 text-[18px] font-medium text-white">{labelName} <span className='text-red-600'>*</span></label>
        <input type={type} id={forName} value={input} onInput={e => setInput(e.target.value)} onBlur={e=>validate(e)} name={name} className={`shadow-sm bg-black-gradient border ${(!typeError && !requiredError) ? "border-teal-300 focus:border-teal-600" : "border-red-600 focus:border-red-400"} text-white outline-none text-sm rounded-lg  block p-2.5`} placeholder={placeholderName}/>
        {(requiredError) ? <span id={`${formId}_error_empty`} className={`text-red-500 text-[14px]`}>{labelName} nie może być pusty</span> : ""}
        {(typeError) ? <span id={`${formId}_error_type`} className={`text-red-500 text-[14px]`}>Nieprawidłowy adres email</span> : ""}
    </div>
  )
}

export default Input