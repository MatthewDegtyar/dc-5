import React from 'react'
import Link from 'next/link'
import ContactCard from './ContactCard'

const ContactConverter = () => {
  return (
    <div id='contact'>
      <div className='w-full bg-black  flex bg-hero-pattern flex-row lg:min-h-[30vh] mt-2'>
          <div className='bg-black/60 rounded-[1px] flex flex-col gap-2 p-3 xl:p-6 items-center m-8 justify-center text-white w-full h-full'>
              <h3 className='text-h3 text-center'>Ready To Get Started?</h3>
              <p>Let's empower your business</p>
              <div className='w-full'>
                <ContactCard hideTags={true}/>
              </div>
          </div>
      </div>
      <div className=''></div>
    </div>
  )
}

export default ContactConverter
