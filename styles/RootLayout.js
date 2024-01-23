import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactConverter from '@/components/ContactConverter'
import FeaturedElement from '@/components/FeaturedElement'
import DMElement from '@/components/DMElement'
import Badges from '@/components/Badges'

const RootLayout = ({pageTitle, imageUrl, children, hideContact, hideFeatured, hideDME, hideBadges}) => {
  return (
    <div >
        <Head>
            <title>{`${pageTitle} - Degtyar Consulting`}</title>
            <meta name="description" content="Digital Consultants" />
            <link rel="icon" href="/img/DClogo1024.png" />
            <link rel='canonical' href='https://www.degtyarconsulting.com/' />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.degtyarconsulting.com/" />
            <meta property="og:description" content="Degtyar Consulting" />
            <meta
                property="og:image"
                content={imageUrl}
            />
            <meta name="og:title" content={`Degtyar Consulting - ${pageTitle}`} />
            <meta name="twitter:card" content="summary_large_image" />  
        </Head>
        <Navbar/>
        <div className='mt-[125px] bg-white cursor-default'>
          {children}
        
        {!hideFeatured &&
          <FeaturedElement/>
        }
        {!hideDME &&
          <DMElement/>
        }

        {!hideContact &&
          <ContactConverter/>
        }
                <Footer/>

        </div>
    </div>
  )
}

export default RootLayout
