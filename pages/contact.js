import ContactCard from '../components/ContactCard'
import RootLayout from '../styles/RootLayout'
import React from 'react'

const Page = () => {
  return (
    <RootLayout canon_url={`/contact`} meta_description="Redefine your web presence" imageUrl='/img/bg1.webp' hideContact={true} pageTitle='Contact'>
        <div className='w-full h-[25vh] bg-black p-8 flex bg-hero-pattern  flex-col mt-0'>
            <div className='bg-black/60 rounded-[1px] flex flex-col gap-2 p-6 items-center  justify-center text-white w-full h-full'>
                <h1 className='text-title'>Ready To Empower Your Business?</h1>
                <h2 className='text-h2'>Let's Get Started</h2>
            </div>

        </div>
        <div className='bg-black' >
                <ContactCard hideTags={true}/>
            </div>

    </RootLayout>
  )
}

export default Page
