import React from 'react'
import Link from 'next/link'

const ContactConverter = () => {
  return (
    <div className='w-full bg-black p-8 flex bg-hero-pattern flex-row h-[30vh] mt-2'>
        <div className='bg-black/60 rounded-[1px] flex flex-col gap-2 p-6 items-center  justify-center text-white w-full h-full'>
            <h3 className='text-h3'>Ready To Get Started?</h3>
            <p>Let's empower your business</p>
            <Link href='/contact'alt='' className='py-2 px-8 bg-none rounded-[1px] border-2 outline-white group hover:bg-white mt-8'>
                <p className='text-white group-hover:text-black underline-animation'>Contact</p>
            </Link>
        </div>
    </div>
  )
}

export default ContactConverter
