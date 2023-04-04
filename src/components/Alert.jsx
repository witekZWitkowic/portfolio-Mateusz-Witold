import React, { useState, useEffect } from 'react';

function Alert({name, background, setAlertError, setAlertSent}) {

    const [showElement, setShowElement] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(()=>{
        setTimeout(function() {setFadeOut(true)}, 5000);
        setTimeout(function() {setShowElement(false); setAlertSent(false); setAlertError(false)}, 6000);
        },
       [])

  return (
    <>
        {(showElement) ? 
            <div className={`fixed w-[100%] bottom-0 z-[101] bg-black-gradient flex flex-col align-middle ${(fadeOut) ? "fade-out" : ""}`}>
                <div className={`${(showElement) ? "progress" : ""}`}>
                    <div className={`${(showElement) ? "progress-value" : ""} ${background}`}></div>
                </div>
                <span className='text-white p-2 md:p-4 text-center md:text-xl text-md'>{name}</span>
            </div>   
        :"" 
        }
        
    </>
  )
}

export default Alert