import React, { useState, useEffect } from 'react';

function Alert({name, background}) {

    const [showElement, setShowElement] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(()=>{
        setTimeout(function() {setFadeOut(true)}, 5000);
        setTimeout(function() {setShowElement(false)}, 6000);
        },
       [])

  return (
    <>
        {(showElement) ? 
            <div className={`fixed w-[100%] md:w-[20%] bottom-0 z-[51] bg-black-gradient flex flex-col align-middle ${(fadeOut) ? "fade-out" : ""}`}>
                <div className="progress">
                    <div className={`progress-value ${background}`}></div>
                </div>
                <span className='text-white p-2 text-center text-md'>{name}</span>
            </div>   
        :"" 
        }
        
    </>
  )
}

export default Alert