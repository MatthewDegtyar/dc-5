import React from 'react'
import ContactCard from './ContactCard'

const ContactElement = ({hideTags}) => {
  return (
    <div className='bg-black mt-0' id='contact'>
      <ContactCard hideTags={hideTags}/>
    </div>
  )
}

export default ContactElement
