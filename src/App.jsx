import React from 'react'
import {Navbar, About, FirstGlance, HowItsDone, Pricing, Footer, Contact, Popup, Sale} from './components'
import Carousell from './components/Carousell'
import styles from './style'
import { useState } from 'react';
import ReactGA from 'react-ga';


const App = () => {

  const TRACKING_ID = "G-C2R75NVN3S"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  
  const[planChoosed,setPlanChoosed] = useState("");

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    <div className='bg-page-gradient w-full overflow-hidden'>
      <Popup planChoosed={planChoosed} setPlanChoosed={setPlanChoosed} />
      <div className='background-image sm:bg-center bg-center	'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar handleClickScroll={handleClickScroll} />
          </div>
        </div>

        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <FirstGlance setPlanChoosed={setPlanChoosed} />
          </div>
        </div>
      </div>
      <Sale setPlanChoosed={setPlanChoosed} />

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About handleClickScroll={handleClickScroll} />
          </div>
      </div>
      
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <HowItsDone />
          <div id="pricing">
          <Pricing planChoosed={planChoosed} setPlanChoosed={setPlanChoosed} />
          <Carousell planChoosed={planChoosed} setPlanChoosed={setPlanChoosed}/>
          </div>
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App