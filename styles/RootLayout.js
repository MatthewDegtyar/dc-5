import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactConverter from '../components/ContactConverter'
import FeaturedElement from '../components/FeaturedElement'
import DMElement from '../components/DMElement'

const RootLayout = ({pageTitle, canon_url, imageUrl, meta_description,children, hideContact, hideFeatured, hideDME}) => {
  return (
    <div lang="en">
        <Head>
            <title>{`${pageTitle} - Degtyar Consulting`}</title>
            <meta name="description" content={meta_description} />
            {/**
            <meta name="content_origin"  content={Date()}/>
 */}

            <link rel="icon" href="/svg/logo.svg" />
            <link rel='canonical' href={`https://www.degtyarconsulting.com/${canon_url}`} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`https://www.degtyarconsulting.com/${canon_url}`} />
            <meta property="og:description" content="Degtyar Consulting" />
            <meta
                property="og:image"
                content={imageUrl | '/img/DClogo1024.png'}
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
