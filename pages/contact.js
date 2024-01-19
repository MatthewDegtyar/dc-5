import ContactCard from '@/components/ContactCard'
import RootLayout from '@/styles/RootLayout'
import React from 'react'

const Page = () => {
  return (
    <RootLayout hideContact={true} pageTitle='Contact'>
        <div className='w-full bg-black p-8 flex bg-hero-pattern  flex-col mt-0'>
            <div className='bg-black/60 rounded-[1px] flex flex-col gap-2 p-6 items-center  justify-center text-white w-full h-full'>
                <h1 className='text-title'>Ready To Empower Your Business?</h1>
                <h2 className='text-h2'>Let's Get Started</h2>
            </div>
            <div className='bg-black/60' >
                <ContactCard hideTags={true}/>
            </div>
        </div>

    </RootLayout>
  )
}

export default Page
