import React from 'react'
import {Navbar, About, FirstGlance, HowItsDone, Pricing, Footer, Contact, Popup, Sale, Portfolio, CookieReminder, Alert, SpecialOfferPopup} from './components'
import Carousell from './components/Carousell'
import styles from './style'
import { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';


const App = () => {

  ReactGA.initialize("G-0R0SY0R690");
  
  const[planChoosed,setPlanChoosed] = useState("");
  const[specialOfferPopup,setSpecialOfferPopup] = useState(false);
  const[alertSent,setAlertSent] = useState(false);
  const[alertError,setAlertError] = useState(false);

  const handleClickScroll = (id) => {
    ReactGA.event({
      category:"Menu", 
      action: id, 
    });
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    <div className='bg-page-gradient w-full overflow-hidden'>
      <Popup planChoosed={planChoosed} setPlanChoosed={setPlanChoosed} setAlertSent={setAlertSent} setAlertError={setAlertError}/>
      {(alertSent) ? <Alert name="Wiadomość wysłana!" background="bg-blue-gradient" setAlertSent={setAlertSent} setAlertError={setAlertError}/> : ""}
      {(alertError) ? <Alert name="Błąd! Sprawdź formularz ponownie" background="bg-red-600" setAlertSent={setAlertSent} setAlertError={setAlertError}/> : ""}
      {/* <Alert name="Wiadomość wysłana!" background="bg-blue-gradient"/> */}
      <div className='background-image sm:bg-center bg-center	'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar handleClickScroll={handleClickScroll} setSpecialOfferPopup={setSpecialOfferPopup} />
          </div>
        </div>

        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <FirstGlance setPlanChoosed={setPlanChoosed} />
          </div>
        </div>
      </div>

      <Sale setPlanChoosed={setPlanChoosed} />
      <SpecialOfferPopup specialOfferPopup={specialOfferPopup} setSpecialOfferPopup={setSpecialOfferPopup} setPlanChoosed={setPlanChoosed} />


      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About handleClickScroll={handleClickScroll} />
          </div>
      </div>
      
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <HowItsDone />
          <div id="pricing" className='mt-6'>
            <Pricing planChoosed={planChoosed} setPlanChoosed={setPlanChoosed} />
            <Carousell planChoosed={planChoosed} setPlanChoosed={setPlanChoosed}/>
          </div>
          <Portfolio />
          <Contact setAlertSent={setAlertSent} setAlertError={setAlertError}/>
          <Footer />
          
        </div>
      </div>
      <CookieReminder />
    </div>
  )
}

export default App