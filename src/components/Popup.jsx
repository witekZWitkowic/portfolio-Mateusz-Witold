import React from 'react'
import { useState } from 'react';
import Textarea from './Textarea'
import Input from './Input'
import Button from './Button'
import { cross } from '../assets';

const Popup = (props) => {
    const {planChoosed, setPlanChoosed} = props;
  
  function handleClick (e) {
    if(e.target.id === "outerPopup" || e.target.id === "crossPopup" )setPlanChoosed("");
  }

  return (
    <div id="outerPopup" onClick={handleClick} className={`fixed inset-0 z-10 w-full h-full bg-black bg-opacity-70 backdrop-blur-sm ${(planChoosed === "") ? "hidden" : "block"} flex items-center justify-center`}>
        <div onClick={handleClick} className='z-11 bg-black-gradient w-[700px] sm:h-[700px] rounded-xl p-10 text-center px-18 relative'>
            <img src={cross} id="crossPopup" onClick={handleClick} className='w-[25px] h-[25px] absolute right-5 top-5 cursor-pointer'/>
            <h1 className='text-white text-[32px] my-5'>Wybrany plan: <span className='text-white text-[30px] font-bold text-gradient'>{planChoosed}</span></h1>
            <h2 className='text-white sm:text-[20px] text-[16px] mb-7'>Potrzebujemy jeszcze kilka informacji, <br/> abyśmy mogli się z tobą skontaktować</h2>
            <form action="#" className="space-y-4">
                <input type="hidden" name="plan" value={planChoosed} />
                <Input type="email" forName="email" placeholderName="Napisz swój email." labelName="E-mail"/>
                <Input type="tel" forName="tel" placeholderName="Wprowadź swój numer telefonu" labelName="Numer telefonu"/>
                <Textarea forName="message" labelName="Dodatkowe informacje" placeholderName="Masz dla nas dodatkowe pytania, bądź informację? Dodaj je tutaj"/>
                <div className='w-[150px] mx-auto'>
                  <Button name="Wyślij!"/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Popup