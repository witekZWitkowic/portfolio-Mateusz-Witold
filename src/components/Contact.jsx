import React from 'react'
import Button from './Button'
import Textarea from './Textarea'
import Input from './Input'
import styles from '../style'


const Contact = () => {
  return (
    <section class="">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-[700px]">
        <h2 class="mb-4 text-[48px] font-bold text-center text-gray-900 dark:text-white">Kontakt</h2>
        <p class="mb-8 lg:mb-10 text-center text-dimWhite font-light text-[15px]">
          Masz jakieś pytania? Z chęcią na nie odpowiemy!
        </p>
        <form action="#" class="space-y-4">
            <Input type="email" forName="email" placeholderName="Napisz swój email." labelName="E-mail"/>
            <Input type="text" forName="text" placeholderName="Napisz temat wiadomości." labelName="Temat"/>
            <Textarea forName="message" labelName="Treść wiadomości" placeholderName="Napisz treść swojej wiadomości."/>
            <div className='w-[150px] mx-auto'>
              <Button name="Wyślij!"/>
            </div>
        </form>
      </div>
    </section>
  )
}

export default Contact