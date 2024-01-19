import React from 'react'
import ContactCard from './ContactCard'

const ContactElement = ({hideTags}) => {
  return (
    <div className='bg-black px-[5vw] mt-0'>
      <ContactCard hideTags={hideTags}/>
    </div>
  )
}

export default ContactElement
