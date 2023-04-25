import React from 'react';
import {Button} from '../index';
import { sale } from '../../constants'
import ReactGA from 'react-ga4';
import { IoCloseCircleOutline } from "react-icons/io5";

const SpecialOfferPopup = (props) => {

  

  const {specialOfferPopup, setSpecialOfferPopup, setPlanChoosed} = props;

  if(specialOfferPopup){
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }else{
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }
  
  function handleClick (e) {
    if(e.target.id === "outerSalePopup" || e.target.id === "crossSalePopup" ){
      document.getElementsByTagName("body")[0].style.overflow = "auto";
      setSpecialOfferPopup(false);
    }
  }

  function analytics(){
    ReactGA.event({
      category:"Sale", 
      action: "Sale check"
    });
  }

  return (
    <div id="outerSalePopup" onClick={handleClick} className={`fixed inset-0 z-[100] w-full h-full bg-black bg-opacity-70 backdrop-blur-sm ${(specialOfferPopup === false) ? "hidden" : "block"} flex items-center justify-center`}>
        <div onClick={handleClick} className='z-11 bg-black-gradient w-[700px] sm:h-[700px] rounded-xl p-10 text-center px-18 relative'>
            <IoCloseCircleOutline title='Close' id="crossSalePopup"  onClick={handleClick} color='#00d8ff' className='w-[30px] h-[30px] absolute right-5 xxs:top-10 cursor-pointer' />
            <h3 className='text-gradient font-bold text-[32px] py-3'>{sale.title}</h3>
            <p className='text-white font-semibold'>{sale.desc}</p>
            <ul className='list-disc pl-6 py-2 text-left mx-10'>
              {sale.features.map((feature, index) => (
                <li key={index} className={`even:text-zinc-100 odd:text-zinc-300 hover:text-cyan-300 mt-2 cursor-default`}>{feature.feature}</li>
                ))}
            </ul>
            <h4 className='text-white text-[32px] h-[25px] my-3 font-semibold mb-5'>{sale.price} zł</h4>
            <div className='w-[200px] m-auto'>
              <Button name="WYBIERZ" onClick={() => {setPlanChoosed(`${sale.title} PLAN`);analytics();setSpecialOfferPopup(false)}} />
            </div>
        </div>
    </div>
  )
}

export default SpecialOfferPopup