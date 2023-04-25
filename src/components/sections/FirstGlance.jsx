import styles from '../../style'
import {Button} from '../index';
import ReactGA from 'react-ga4';

const FirstGlance = (props) => {
  const {setPlanChoosed} = props;

  function analytics(){
    ReactGA.event({
      category:"Darmowa wycena", 
      action: "Darmowa wycena"
    });
  }

  return (
    <section id="hero">
      <div className={`flex flex-1 md:flex-row flex-col ${styles.paddingY} h-[650px]`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <h1 className='text-white sm:text-[78px] xs:text-[58px] text-[48px] font-semibold'>
                Pomożemy Ci być <br className='sm:block hidden'/> {" "}
                <span className='text-gradient font-bold'>widocznym</span> <br className='sm:block hidden'/> {" "}
                w sieci.
            </h1>
            
        </div>
        <div className={`flex-1 flex flex-col items-center sm:justify-center justify-start sm:mt-0 mt-10`}>
          <p className='md:flex sm:hidden sm:text-[23px] text-[20px] sm:max-w-[450px] max-w-[300px] text-center text-dimWhite'>
            Przekujemy Twoje pomysły w nowoczesną i dobrze wypozycjonowaną w Google stronę internetową.
          </p>
          <Button name="Darmowa wycena" onClick={() => {setPlanChoosed("Darmowa wycena");analytics()}} />
        </div>
      </div>
    </section>
  )
}

export default FirstGlance