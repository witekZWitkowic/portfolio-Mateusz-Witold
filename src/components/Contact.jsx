import React, { useRef } from 'react';
import Button from './Button'
import Textarea from './Textarea'
import Input from './Input'
import emailjs from '@emailjs/browser';
import ReactGA from 'react-ga4';
import Alert from './Alert';


const Contact = (props) => {

  const contactForm = useRef();
  const formId = "contactUs";
  const alert = "none";
  const {setAlertError, setAlertSent} = props;

  const sendEmail = (e) => {
    e.preventDefault();

    let emptyForm = true;

    let counter = 0;
    for(let i = 0; i<e.target.length-1;i++){
      if(e.target[i].value.length>0) counter++;
    }
    if(counter == (e.target.length-1))emptyForm = false;

    const errors = document.querySelector(`[id^="${formId}_error"]`);

    if(errors || emptyForm){
      setAlertError(true);
    }else{
      setAlertSent(true);
      ReactGA.event({
        category:"Email", 
        action: "Contact form email"
      });

      emailjs.sendForm('service_contactForm_WM', 'template_wm', contactForm.current, 'LbjIHyDLBTMjgCzYg');
    }
    //document.getElementById('contactForm').reset();
  };

  
  return (
    <section id="contact" className="">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-[700px]">
        <h2 className="mb-4 text-[48px] font-bold text-center text-white">Kontakt</h2>
        <p className="mb-8 lg:mb-10 text-center text-dimWhite font-light text-[15px]">
          Masz jakieś pytania? Z chęcią na nie odpowiemy!
        </p>
        <form ref={contactForm} id="contactForm" onSubmit={sendEmail} className="space-y-4">
            <Input type="email" forName="email" placeholderName="Napisz swój adres email." labelName="Adres e-mail" name="email" isRequired={true} formId={formId}/>
            <Input type="text" forName="text" placeholderName="Napisz temat wiadomości." labelName="Temat" name="subject" isRequired={true} formId={formId}/>
            <div className='flex flex-col mx-auto'>
                <label htmlFor="tel" className="block mb-1 text-[18px] font-medium text-white">Numer telefonu (opcjonalnie)</label>
                <input type="text" id="tel" name="tel" className="shadow-sm bg-black-gradient border border-teal-300 text-white outline-none text-sm rounded-lg focus:border-teal-600 block p-2.5 " placeholder="Wprowadź numer telefonu" />
            </div>
            <Textarea forName="message" labelName="Treść wiadomości" placeholderName="Napisz treść swojej wiadomości." name="message" isRequired={true} formId={formId}/>
            <div className='w-[150px] mx-auto'>
              <Button name="Wyślij!"/>
            </div>
        </form>
      </div>
    </section>
  )
}

export default Contact