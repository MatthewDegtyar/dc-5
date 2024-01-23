import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link.js';

import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { FaPhoneAlt, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";

import MenuComponent from './MenuComponent.js';
import { menuNav } from '../constants/index.js';

function Navbar () {
  const [menuShown, setMenuShown] = useState(false);

  const [dropShown, setDropShown] = useState(false)
  const [featuredShown, setFeaturedShown] = useState(false)
  const [blurBackground, setBlurBackground] = useState(false);

  const blurClass = blurBackground ? 'blur-background' : '';

  useEffect(() => {
    // Toggle overflow property on the body based on showMenu
    document.body.style.overflow = menuShown ? 'hidden' : 'auto';

    // Clean up the style when the component is unmounted
    return () => {
        document.body.style.overflow = 'auto';
    };
}, [menuShown]);

  const handleFeatured = () => {
    setDropShown(false)
    setFeaturedShown(!featuredShown)
    setBlurBackground(!blurBackground)
  }

  const handleDrop = () => {
    setFeaturedShown(false)
    setDropShown(!dropShown)
    setBlurBackground(!blurBackground)
  }

  const handleCloseAll = () => {
    setFeaturedShown(false)

    setDropShown(false)
    setBlurBackground(false)
  }
  const handleMenu = () => {
    setDropShown(false)
    setFeaturedShown(false)
    setBlurBackground(false)
    setMenuShown(!menuShown);

  };
  useEffect(() => {
    console.log("menuShown value:", menuShown);
  }, [menuShown]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleCloseAll();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`flex z-50 top-0 ${menuShown ? 'fixed' : 'absolute '} bg-black flex-row w-[100vw] justify-between items-center px-[5vw] h-[125px]`}>
    <Link href='/'>
      <div>
        <div className='border-3 p-1 w-[200px] text-white font-bold outline-white'>
            <p className='mt-8 ml-1'>Degtyar Consulting</p>
        </div>
      </div>
    </Link>
    <div className='lg:shown ml-12 hidden text-sub items-center text-white gap-8 lg:flex flex-row'>
      <ul onClick={()=>handleCloseAll()} className='underline-animation-white'><Link href='/' >Home</Link></ul>
      <div className='cursor-pointer  flex flex-row gap-2 items-center' onClick={() => handleDrop()}><ul className='underline-animation-white'>Services</ul><RxCaretDown size={30} className={`${dropShown ? 'rotate-180' : ''} transition-all duration-300`} /></div>
      <div className='cursor-pointer flex flex-row gap-2 items-center' onClick={() => handleFeatured()}><ul className='underline-animation-white'>Featured Projects</ul><RxCaretDown size={30} className={`${featuredShown ? 'rotate-180' : ''} transition-all duration-300`} /></div>
      <ul onClick={()=>handleCloseAll()} className='underline-animation-white'><Link href='/contact'>Contact</Link></ul>

    </div>
    <div className='lg:shown ml-12 hidden text-sub items-center text-white gap-4 lg:flex flex-row'>
        <Link target='_blank' className='hover:opacity-70 transition-all duration-300' href='https://github.com/MatthewDegtyar/'alt='github'>
            <FaGithub color="white" size={23} />
        </Link>
        <Link target='_blank' className='hover:opacity-70 transition-all duration-300' href='https://www.linkedin.com/in/matthew-degtyar-a217261b3/'alt='linkedin'>
            <FaLinkedinIn color="white" size={23} />
        </Link>
        <Link target='_blank' className='hover:opacity-70 transition-all duration-300' href='https://www.facebook.com/profile.php?id=100084100467577'alt='facebook'>
            <FaFacebookF color="white" size={23} />
        </Link>
        {/**
        <Link target='_blank' className='hover:opacity-70 transition-all duration-300' href=''alt=''>
            <FaInstagram color="white" size={23} />
        </Link>
        <Link target='_blank' className='hover:opacity-70 transition-all duration-300' href=''alt=''>
            <FaXTwitter color="white" size={23} />
        </Link>
         */}
    </div>
   

    <div onClick={handleMenu} className='resize-none lg:hidden shown flex h-[45px] sm:absolute right-[5vw] w-[45px]'>
        <IoMdClose className={menuShown ? '' : 'hidden'} color='white' size={45}/>
        <FiMenu className={menuShown ? 'hidden' : 'shown'} color='white' size={45}/>
    </div>

    <div className={`bg-black fixed h-[110vh] w-[100vw] top-0  text-white overflow-y-scroll right-0 mt-[125px] ${menuShown ? 'flex flex-col xl:hidden' : 'hidden'}`} alt='mobile menu'>
      <div className='flex flex-col top-0 px-[2.5vw]'>
        <MenuComponent data={menuNav}/>
      </div>
    </div>

  <div onClick={() => handleCloseAll()} className={`${dropShown | featuredShown ? 'hidden lg:shown lg:flex' : 'hidden'} w-[100vw] h-[130vw] absolute left-0 mt-[125px] top-0 backdrop-blur-[7px] transition-all duration-300`} alt='blur'></div>

  <div className={`w-[100vw] text-white mt-[125px]  xl:flex-col px-[7.5vw]  outline-white overflow-y-scroll bg-black absolute left-0 top-0 h-[400px] ${dropShown ? 'lg:shown lg:flex hidden' : 'hidden'}`}>
    <div className='mt-8 mb-16' alt='spacer'>
        <div className='h-[1px] w-full bg-white text-black'>.</div>
      <div className=' flex flex-row justify-between'>
<div className='flex flex-row gap-24'>
        <div className='flex flex-col mt-8'>
            <p className='text-[20px] font-semibold text-start'>Web Development</p>
            <div className='mt-5 flex flex-col gap-4'>
                <Link onClick={() => handleCloseAll()} href='/services/static-sites' alt='static site' className='underline-animation-white2 w-fit'>Static Sites</Link>
                <Link onClick={() => handleCloseAll()} href='/services/wordpress-cms' alt='static site' className='underline-animation-white2 w-fit'>WordPress CMS</Link>
                <Link onClick={() => handleCloseAll()} href='/services/e-commerce' alt='static site' className='underline-animation-white2 w-fit'>Shopify IMS (E-Commerce)</Link>
                <Link onClick={() => handleCloseAll()} href='/services/white-label' alt='static site' className='underline-animation-white2 w-fit'>White Label</Link>
            </div>
        </div>

        <div className='flex flex-col mt-8'>
            <p className='text-[20px] font-semibold text-start'>Digital Marketing</p>
            <div className='mt-5 flex flex-col gap-4'>
                <Link onClick={() => handleCloseAll()} href='/services/seo' alt='static site' className='underline-animation-white2 w-fit'>Search Engine Optimization</Link>
                <Link onClick={() => handleCloseAll()} href='/services/social-media' alt='static site' className='underline-animation-white2 w-fit'>Social Media Management & Strategy</Link>
                <Link onClick={() => handleCloseAll()} href='/services/google-ads' alt='static site' className='underline-animation-white2 w-fit'>Google Ads</Link>
                {/**
                <Link onClick={() => handleCloseAll()} href='/services/static-site' alt='static site' className='underline-animation-white2 w-fit'>Meta (Facebook) Ads</Link>
                <Link onClick={() => handleCloseAll()} href='/services/static-site' alt='static site' className='underline-animation-white2 w-fit'>Instagram Ads</Link>
                <Link onClick={() => handleCloseAll()} href='/services/static-site' alt='static site' className='underline-animation-white2 w-fit'>TikTok Ads</Link>
                 */}
            </div>
        </div>
{/**
        <div className='flex flex-col mt-8'>
            <p className='text-[20px] font-semibold text-start'>Relationship Management</p>
            <div className='mt-5 flex flex-col gap-4'>
                <Link onClick={() => handleCloseAll()} href='/services/static-site' alt='static site' className='underline-animation-white2 w-fit'>Review Management & Sourcing</Link>
                <Link onClick={() => handleCloseAll()} href='/services/static-site' alt='static site' className='underline-animation-white2 w-fit'>Lead Nurturing</Link>
                <Link onClick={() => handleCloseAll()} href='/services/static-site' alt='static site' className='underline-animation-white2 w-fit'>Customer/Client Retention Strategy</Link>
                <Link onClick={() => handleCloseAll()} href='/services/static-site' alt='static site' className='underline-animation-white2 w-fit'>Email Strategy</Link>
            </div>
        </div>
 */}
 </div>
        <div className='bg-[#121317] h-fit flex flex-row'>
            <div className='ml-8 mr-8'>
                <p className='text-[20px] mt-8 font-semibold text-start'>Beautiful Design</p>
                <p className='text-[18px] mt-4 font-light max-w-44'>Discover how to build a better site</p>
                <Link href='/services/wordpress-cms' className='flex flex-row gap-3 items-center mt-6 group mb-4' alt='learn more holder'>
                    <p className='underline-animation-white2'>Learn More</p>
                    <RxCaretRight className='group-hover:scale-125 transition-all duration-300' color='white' size={34} />
                </Link>
            </div>
            <Image
                src='/img/1.png'
                height={200}
                width={200}
                alt='img'
            />

        </div>

        </div >  

    </div>
  </div>

  <div className={`w-[100vw] shadow-2xl text-white mt-[125px] xl:flex-col px-[7.5vw] hidden  overflow-y-scroll bg-black absolute left-0 top-0 h-[500px] ${featuredShown ? 'lg:shown lg:flex' : 'hidden'}`}>
  <div className='mt-8 mb-16' alt='spacer'>
        <div className='h-[1px] w-full bg-white text-black mb-8'>.</div>
      
    <div className='grid lg:grid-cols-4  grid-cols-2 w-full gap-4 lg:gap-8'>

    <div className='flex text-sub flex-col items-center' alt='item'>
        <div className='overflow-hidden '>
        <div className='mb-2'>
                <ul className='text-center text-[20px] font-semibold top-0'>Gromm Racing</ul>
            </div>
            <div>
                <Image
                    className='hover:sm:scale-125 w-[220px] h-[300px] rounded-[1px] object-cover hover:scale-150 transition-transform duration-300'
                    src='/img/promo1.jpeg'
                    width={300}
                    height={720}
                    alt='car'
                />
            </div>
        </div>
        <div className='self-center hidden lg:shown lg:flex'>
            <p className='text-center mt-3 font-medium  underline-animation-white'><Link target='_blank' href='https://www.grommracing.com/'>Visit Site</Link></p>
        </div>
    </div>

        <div className='flex text-sub flex-col items-center' alt='item'>
            <div className='overflow-hidden '>
            <div className='mb-2'>
                    <ul className=' text-center text-[20px] font-semibold top-0'>Oviedo Machine Works</ul>
                </div>
                <div>
                    <Image
                        className='hover:sm:scale-125 hover:scale-150 w-[220px] h-[300px] rounded-[1px] object-cover transition-transform duration-300'
                        src='/img/promo2.jpeg'
                        width={300}
                        height={720}
                        alt='car'
                    />
                </div>
            </div>
            <div className='self-center hidden lg:shown lg:flex'>
                <p className='text-center mt-3 font-medium  underline-animation-white'><Link target='_blank' href='https://www.machineworksoviedo.com/'>Visit Site</Link></p>
            </div>
      </div>
      <div className='flex text-sub flex-col items-center' alt='item'>
          <div className='overflow-hidden '>
          <div className='mb-2'>
                  <ul className='text-center text-[20px] font-semibold top-0'>HCA Books (demo)</ul>
              </div>
              <div>
                  <Image
                      className='hover:sm:scale-125 hover:scale-150 w-[220px] h-[300px] object-cover transition-transform duration-300'
                      src='/img/clean.png'
                      width={300}
                      height={720}
                      alt='car'
                  />
              </div>
          </div>
          <div className='self-center hidden lg:shown lg:flex'>
              <p className='text-center mt-3 font-medium underline-animation-white'><Link target='_blank' href='https://main.d32t6ny9gzrv97.amplifyapp.com/'>Visit Site</Link></p>
          </div>
      </div>
      <div className='flex text-sub flex-col items-center' alt='item'>
          <div className='overflow-hidden '>
          <div className='mb-2'>
                  <ul className='text-center text-[20px] font-semibold top-0'>Racing Motosports (demo)</ul>
              </div>
              <div>
                  <Image
                      className='hover:sm:scale-125 hover:scale-150 w-[220px] h-[300px] rounded-[1px] object-cover transition-transform duration-300'
                      src='/img/20.png'
                      width={300}
                      height={720}
                      alt='car'
                  />
              </div>
          </div>
          <div className='self-center hidden lg:shown lg:flex'>
              <p className='text-center mt-3 font-regular underline-animation-white'><Link target='_blank' href='https://main.d3t439efu6gdup.amplifyapp.com/'>Visit Site</Link></p>
          </div>
      </div>

      </div>
      <div className='h-4'></div>

    </div>
  </div>

  </nav>
  );
};

export default Navbar;