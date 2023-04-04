import React, { useRef } from 'react';
import Textarea from './Textarea'
import Input from './Input'
import Button from './Button'
import { cross } from '../assets';
import ReactGA from 'react-ga4';
import emailjs from '@emailjs/browser';
import TelInput from './TelInput';

const Popup = (props) => {
  const {planChoosed, setPlanChoosed, setAlertSent, setAlertError} = props;

  const formId = "popup";
  
  function handleClick (e) {
    if(e.target.id === "outerPopup" || e.target.id === "crossPopup" ){
      document.getElementsByTagName("body")[0].style.overflow = "auto";
      setPlanChoosed("");
    }
  }

  const popupForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let isEmpty = false;
    for(let i = 0; i<e.target.length-1;i++){
      if(e.target[i].name!="tel" && e.target[i].value.length==0)isEmpty=true;
    }

    const errors = document.querySelector(`[id^="${formId}_error"]`);
    if(errors || isEmpty){
      setAlertError(true);
    }else{
      setAlertSent(true);
      ReactGA.event({
        category:"Email", 
        action: "Popup form email"
      });

      emailjs.sendForm('service_contactForm_WM', 'template_wm', popupForm.current, 'LbjIHyDLBTMjgCzYg');
      document.getElementsByTagName("body")[0].style.overflow = "auto";
      setPlanChoosed("");
    }
    //document.getElementById('contactForm').reset();
  };

  if(planChoosed)document.getElementsByTagName("body")[0].style.overflow = "hidden";

  return (
    <div id="outerPopup" onClick={handleClick} className={`fixed inset-0 z-[100] w-full h-full bg-black bg-opacity-70 backdrop-blur-sm ${(planChoosed === "") ? "hidden" : "block"} flex items-center justify-center`}>
        <div onClick={handleClick} className='z-11 bg-black-gradient w-[700px] sm:h-[700px] rounded-xl p-10 text-center px-18 relative'>
            <img src={cross} alt="Cross" id="crossPopup" onClick={handleClick} className='w-[25px] h-[25px] absolute right-5 xxs:top-10 cursor-pointer'/>
            <h3 className='text-white text-[32px] my-5'>Wybrany plan: <span className='text-white text-[30px] font-bold text-gradient'>{planChoosed}</span></h3>
            <h2 className='text-white sm:text-[20px] text-[16px] mb-7'>Potrzebujemy jeszcze kilka informacji, <br/> abyśmy mogli się z tobą skontaktować</h2>
            <form ref={popupForm} id="popupForm" onSubmit={sendEmail} className="space-y-4">
                <input type="hidden" name="subject" value={planChoosed} />
                <Input type="email" forName="email" placeholderName="Podaj swój adres email." labelName="Adres e-mail" name="email" isRequired={true} formId={formId}/>
                <TelInput forName="tel" labelName="Numer telefonu (opcjonalnie)" placeholderName="Podaj numer telefonu" name="tel" isRequired={false} formId={formId}/>
                <Textarea forName="message" labelName="Dodatkowe informacje" placeholderName="Masz dla nas dodatkowe pytania, bądź informację? Dodaj je tutaj" isRequired={true} formId={formId}/>
                <div className='w-[150px] mx-auto' name="message">
                  <Button name="Wyślij!"/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Popup