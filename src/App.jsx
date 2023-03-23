import React from 'react'
import {Navbar, About, FirstGlance, HowItsDone, Pricing, Footer} from './components'
import styles from './style'

const App = () => {
  return (
    <div className='bg-page-gradient w-full overflow-hidden'>
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
          <Pricing />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App