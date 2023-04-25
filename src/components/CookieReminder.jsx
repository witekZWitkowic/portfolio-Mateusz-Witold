import {React, useState} from 'react'
import {FaCookie, FaCookieBite} from 'react-icons/fa'



const CookieReminder = () => {
    const [cookieChange, setCookieChange] = useState(false);
    const [hideCookie, setHideCookie] = useState(true);

    setTimeout(() => {setCookieChange(true)}, 5000)

    return (
    <div className={`md:w-[60%] w-full md:left-[20%] left-0 md:rounded-t-3xl flex items-center justify-between showCookies h-[200px] z-[999999] bottom-0 fixed bg-black-gradient  ${hideCookie ? "visible" : "hideCookies"}`}>
        <div className='flex items-center justify-between '>
        {cookieChange ? <FaCookieBite className="text-teal-600 md:ml-20 ml-5 sm:text-[100px] text-[70px]"/> 
        : 
        <FaCookie className="text-teal-600 sm:ml-20 ml-5 sm:text-[100px] text-[70px]"/>
        }
        </div>
        <div className='md:mr-20 mr-5 flex flex-col items-center justify-between'>
            <h2 className='text-white text-center font-semibold sm:text-[24px] text-[16px]'>Ta strona używa plików cookies!</h2>
            <p className='text-dimWhite font-extralight text-center sm:text-[12px] text-[7px] sm:w-[540px] w-[220px] mt-1'>
                Ta strona wykorzystuje pliki cookie. Używamy informacji zapisanych za pomocą plików
                cookies w celu zapewnienia maksymalnej wygody w korzystaniu z naszego serwisu. Mogą
                też korzystać z nich współpracujące z nami firmy badawcze oraz reklamowe. Jeżeli
                wyrażasz zgodę na zapisywanie informacji zawartej w cookies kliknij na przycisk zatwierdź
                Zgadzam się w prawym dolnym rogu tej informacji. Jeśli nie wyrażasz zgody, ustawienia
                dotyczące plików cookies możesz zmienić w swojej przeglądarce
            </p>
            <button onClick={() => setHideCookie(false)} 
                    className={`mx-auto sm:w-[120px] w-[100px] sm:h-[30px] h-[20px] sm:text-[18px] text-[12px] rounded-2xl bg-teal-500 text-white font-semibold mt-2`}>
                Rozumiem!
            </button>
        </div>
        

    </div>
  )
}

export default CookieReminder