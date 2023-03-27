import React from 'react'
import {Navbar, About, FirstGlance, HowItsDone, Pricing, Footer, Contact, Popup} from './components'
import Carousell from './components/Carousell'
import styles from './style'
import { useState } from 'react';

const App = () => {
  const[planChoosed,setPlanChoosed] = useState("");
  return (
    <div className='bg-page-gradient w-full overflow-hidden'>
      <Popup planChoosed={planChoosed} setPlanChoosed={setPlanChoosed} />
      <div className='background-image sm:bg-center bg-center	'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            < FirstGlance />
          </div>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          </div>
      </div>
      
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <HowItsDone />
          <Pricing planChoosed={planChoosed} setPlanChoosed={setPlanChoosed} />
          <Carousell />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App