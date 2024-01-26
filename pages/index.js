import RootLayout from '../styles/RootLayout'
import React, { useEffect, useRef } from 'react'

const EmbedVideo = (props) => {
    const videoRef = useRef(null);
  
    useEffect(() => {
      const video = videoRef.current;
  
      const playVideoOnLoad = () => {
        if (video) {
          video.play().catch((error) => {
            // Autoplay was prevented, handle the error if needed
            console.error('Autoplay prevented:', error);
          });
        }
      };
  
      playVideoOnLoad();
  
      return () => {
        // Clean up any event listeners or resources if needed
      };
    }, []);
  
    return (
      <video
        ref={videoRef}
        className={props.className}
        playsInline
        loop
        muted
      >
  
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };

const Home = () => {
  return (
    <RootLayout meta_description='Professional website design' canon_url='/' imageUrl='/img/DClogo1024.webp' pageTitle='Home'>
        <div className='flex flex-col lg:flex-row bg-black'>

            <div className='lg:w-[50vw] h-[50vh] md:h-auto lg:h-[50vh] overflow-hidden rounded-[1px] flex flex-col'>
                <div className='lg:w-[50vw]  lg:h-[40vh]'>
                <EmbedVideo src='/video/hero.mp4' className="lg:h-[50vh] md:h-auto w-full h-[50vh] z-0 object-cover w-fit" />
                </div>
            </div>
            <div className='text-black lg:w-[50vw] lg:h-[50vh] bg- flex flex-col lg:items-center items-start lg:justify-center place-items-center'>
                <div className='flex text-start items-start lg:items-center flex-col p-4 md:p-8 rounded-[1px] gap-2'>
                    <h1 className='text-title text-white uppercase self-start text-nowrap'>We Create Value</h1>
                    <h2 className='text-white mt-4 lg:mt-8 lg:w-96 '>We’re a creative digital agency creating meaningful digital presence and empowering businesses.</h2>
                </div>
            </div>
        </div>
    </RootLayout>
  )
}

export default Home
