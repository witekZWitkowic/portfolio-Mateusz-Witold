import styles from '../style'
import Button from './Button'

const FirstGlance = (props) => {
  const {setPlanChoosed} = props;

  return (
    <section className={`flex flex-1 md:flex-row flex-col ${styles.paddingY} sm:h-[650px] h-screen`} >
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <h1 className='text-white sm:text-[78px] text-[58px] font-semibold'>
                Pomożemy Ci być <br className='sm:block hidden'/> {" "}
                <span className='text-gradient font-bold'>widocznym</span> <br className='sm:block hidden'/> {" "}
                w sieci.
            </h1>
            
        </div>
        <div className={`flex-1 flex flex-col items-center justify-center md:my-0 my-10`}>
          <p className='md:flex sm:hidden sm:text-[23px] text-[25px] sm:m-0 m-5 sm:max-w-[450px] max-w-[380px] text-center text-dimWhite'>
            Przekujemy Twoje pomysły w nowoczesną i dobrze wypozycjonowaną w Google stronę internetową.
          </p>
          <Button name="Darmowa wycena" onClick={() => setPlanChoosed("Darmowa wycena")} />
        </div>
    </section>
  )
}

export default FirstGlance