import RootLayout from '@/styles/RootLayout'
import React, { useEffect, useRef } from 'react'
import FeaturedElement from '@/components/FeaturedElement';
import DMElement from '@/components/DMElement';

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
    <RootLayout pageTitle='Home'>
        <div className='flex flex-row bg-black'>

            <div className='w-[50vw] h-[80vh] overflow-hidden rounded-[1px] flex flex-col'>
                <div className='w-[50vw] bg--800 h-[40vh]'>
                <EmbedVideo src='/video/hero.mp4' className="h-[80vh] z-0 object-cover w-fit" />

                </div>
                <div className='w-[50vw] bg--800 h-[40vh]'>

                </div>
            </div>
            <div className='text-black w-[50vw] h-[80vh] bg- flex flex-col itmes-center  justify-center place-items-center'>
                <div className='w-96 flex flex-col p-8 bg-black/50 rounded-[1px] gap-2'>
                    <h1 className='text-title text-white'>Make An Impact</h1>
                    <h2 className='text-white'>We’re a creative digital agency strengthening causes, growing businesses, and empowering organizations online.</h2>
                </div>
            </div>
        </div>
    </RootLayout>
  )
}

export default Home
