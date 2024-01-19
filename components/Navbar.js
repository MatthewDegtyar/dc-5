import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link.js';
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

import MenuComponent from './MenuComponent.js';
import { menuNav } from '../constants/index.js';
import { RxCaretDown } from "react-icons/rx";

function Navbar () {
  const [menuShown, setMenuShown] = useState(false);

  const [dropShown, setDropShown] = useState(false)
  const [featuredShown, setFeaturedShown] = useState(false)
  const [blurBackground, setBlurBackground] = useState(false);

  const blurClass = blurBackground ? 'blur-background' : '';

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
      if (window.scrollY > 500) {
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
      <ul className='cursor-pointer underline-animation-white flex flex-row gap-2 items-center' onClick={() => handleDrop()}>Services<RxCaretDown size={30} className={`${dropShown ? 'rotate-180' : ''} transition-all duration-300`} /></ul>
      <ul className='cursor-pointer underline-animation-white flex flex-row gap-2 items-center' onClick={() => handleFeatured()}>Featured Projects<RxCaretDown size={30} className={`${featuredShown ? 'rotate-180' : ''} transition-all duration-300`} /></ul>
      <ul onClick={()=>handleCloseAll()} className='underline-animation-white'><Link href='/contact'>Contact</Link></ul>

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

  <div onClick={() => handleCloseAll()} className={`${dropShown | featuredShown ? 'hidden lg:shown lg:flex' : 'hidden'} w-[100vw] h-[130vw] absolute left-0 mt-[125px] top-0 backdrop-blur-[7px]`}></div>

  <div className={`w-[100vw] text-white mt-[125px]  xl:flex-col px-[7.5vw]  outline-white overflow-y-scroll bg-black absolute left-0 top-0 h-[500px] ${dropShown ? 'lg:shown lg:flex hidden' : 'hidden'}`}>
    <div className='mt-8 mb-16' alt='spacer'>
      <div >
        <div className='flex w-full flex-col gap-6'>
                  <div className='w-full' alt='holder by car brand'>
                  <p className='text-sub font-semibold mb-3 text-start'>Web Development</p>
                      <div className='grid grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 w-full' >
                          <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                  <div className="relative hover:scale-125 transition-all duration-300 overflow-hidden">
                                      <div className='flex flex-col items-center'>
                                          <Image alt='img' width={520} height={375} className="w-full group-hover:grayscale filter-none h-[230px] object-center hover:opacity-0 transition-all duration-75 object-cover" src='/img/1.png'/>
                                          <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 group-hover:scale-75 group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>SEO</ul>
                                      </div>
                                  <Link onClick={()=>handleCloseAll()} href='/packages/c8-corvette-2020-plus' alt='' className="absolute bg-black/50  text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100">
                                      <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See All SEO Packages</p>
                                  </Link>
                              </div>
                          </div>
                          <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                  <div className="relative hover:scale-125 transition-all duration-300 overflow-hidden">
                                      <div className='flex flex-col items-center'>
                                          <Image alt='img' width={520} height={375} className="w-full group-hover:grayscale filter-none h-[230px] object-center hover:opacity-0 transition-all duration-75 object-cover" src='/img/1.png'/>
                                          <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 group-hover:scale-75 group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>SEO</ul>
                                      </div>
                                  <Link onClick={()=>handleCloseAll()} href='/packages/c8-corvette-2020-plus' alt='' className="absolute bg-black/50  text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100">
                                      <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See All SEO Packages</p>
                                  </Link>
                              </div>
                          </div>
                          <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                  <div className="relative hover:scale-125 transition-all duration-300 overflow-hidden">
                                      <div className='flex flex-col items-center'>
                                          <Image alt='img' width={520} height={375} className="w-full group-hover:grayscale filter-none h-[230px] object-center hover:opacity-0 transition-all duration-75 object-cover" src='/img/1.png'/>
                                          <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 group-hover:scale-75 group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>SEO</ul>
                                      </div>
                                  <Link onClick={()=>handleCloseAll()} href='/packages/c8-corvette-2020-plus' alt='' className="absolute bg-black/50  text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100">
                                      <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See All SEO Packages</p>
                                  </Link>
                              </div>
                          </div>
                          <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                  <div className="relative hover:scale-125 transition-all duration-300 overflow-hidden">
                                      <div className='flex flex-col items-center'>
                                          <Image alt='img' width={520} height={375} className="w-full group-hover:grayscale filter-none h-[230px] object-center hover:opacity-0 transition-all duration-75 object-cover" src='/img/1.png'/>
                                          <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 group-hover:scale-75 group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>SEO</ul>
                                      </div>
                                  <Link onClick={()=>handleCloseAll()} href='/packages/c8-corvette-2020-plus' alt='' className="absolute bg-black/50  text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100">
                                      <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See All SEO Packages</p>
                                  </Link>
                              </div>
                          </div>
                         
                      </div>

                  </div>
                  <div className='w-full' alt='holder by car brand'>
                  <p className='text-sub font-semibold mb-3 text-start'>Marketing</p>
                      <div className='grid grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 w-full' >
                          <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                  <div className="relative hover:scale-125 transition-all duration-300 overflow-hidden">
                                      <div className='flex flex-col items-center'>
                                          <Image alt='img' width={520} height={375} className="w-full group-hover:grayscale filter-none h-[230px] object-center hover:opacity-0 transition-all duration-75 object-cover" src='/img/1.png'/>
                                          <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 group-hover:scale-75 group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>SEO</ul>
                                      </div>
                                  <Link onClick={()=>handleCloseAll()} href='/packages/c8-corvette-2020-plus' alt='' className="absolute bg-black/50  text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100">
                                      <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See All SEO Packages</p>
                                  </Link>
                              </div>
                          </div>
                          <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                  <div className="relative hover:scale-125 transition-all duration-300 overflow-hidden">
                                      <div className='flex flex-col items-center'>
                                          <Image alt='img' width={520} height={375} className="w-full group-hover:grayscale filter-none h-[230px] object-center hover:opacity-0 transition-all duration-75 object-cover" src='/img/1.png'/>
                                          <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 group-hover:scale-75 group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>SEO</ul>
                                      </div>
                                  <Link onClick={()=>handleCloseAll()} href='/packages/c8-corvette-2020-plus' alt='' className="absolute bg-black/50  text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100">
                                      <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See All SEO Packages</p>
                                  </Link>
                              </div>
                          </div>
                          <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                  <div className="relative hover:scale-125 transition-all duration-300 overflow-hidden">
                                      <div className='flex flex-col items-center'>
                                          <Image alt='img' width={520} height={375} className="w-full group-hover:grayscale filter-none h-[230px] object-center hover:opacity-0 transition-all duration-75 object-cover" src='/img/1.png'/>
                                          <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 group-hover:scale-75 group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>SEO</ul>
                                      </div>
                                  <Link onClick={()=>handleCloseAll()} href='/packages/c8-corvette-2020-plus' alt='' className="absolute bg-black/50  text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100">
                                      <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See All SEO Packages</p>
                                  </Link>
                              </div>
                          </div>
                          <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                  <div className="relative hover:scale-125 transition-all duration-300 overflow-hidden">
                                      <div className='flex flex-col items-center'>
                                          <Image alt='img' width={520} height={375} className="w-full group-hover:grayscale filter-none h-[230px] object-center hover:opacity-0 transition-all duration-75 object-cover" src='/img/1.png'/>
                                          <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 group-hover:scale-75 group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>SEO</ul>
                                      </div>
                                  <Link onClick={()=>handleCloseAll()} href='/packages/c8-corvette-2020-plus' alt='' className="absolute bg-black/50  text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100">
                                      <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See All SEO Packages</p>
                                  </Link>
                              </div>
                          </div>
                         
                      </div>

                  </div>
                  <div className='w-full' alt='holder by car brand'>
                  <p className='text-sub font-semibold mb-3 text-start'>Professional Services</p>
                      <div className='grid grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 w-full' >
                          <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                  <div className="relative hover:scale-125 transition-all duration-300 overflow-hidden">
                                      <div className='flex flex-col items-center'>
                                          <Image alt='img' width={520} height={375} className="w-full group-hover:grayscale filter-none h-[230px] object-center hover:opacity-0 transition-all duration-75 object-cover" src='/img/1.png'/>
                                          <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 group-hover:scale-75 group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>SEO</ul>
                                      </div>
                                  <Link onClick={()=>handleCloseAll()} href='/packages/c8-corvette-2020-plus' alt='' className="absolute bg-black/50  text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100">
                                      <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See All SEO Packages</p>
                                  </Link>
                              </div>
                          </div>
                          <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                  <div className="relative hover:scale-125 transition-all duration-300 overflow-hidden">
                                      <div className='flex flex-col items-center'>
                                          <Image alt='img' width={520} height={375} className="w-full group-hover:grayscale filter-none h-[230px] object-center hover:opacity-0 transition-all duration-75 object-cover" src='/img/1.png'/>
                                          <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 group-hover:scale-75 group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>SEO</ul>
                                      </div>
                                  <Link onClick={()=>handleCloseAll()} href='/packages/c8-corvette-2020-plus' alt='' className="absolute bg-black/50  text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100">
                                      <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See All SEO Packages</p>
                                  </Link>
                              </div>
                          </div>
                          <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                  <div className="relative hover:scale-125 transition-all duration-300 overflow-hidden">
                                      <div className='flex flex-col items-center'>
                                          <Image alt='img' width={520} height={375} className="w-full group-hover:grayscale filter-none h-[230px] object-center hover:opacity-0 transition-all duration-75 object-cover" src='/img/1.png'/>
                                          <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 group-hover:scale-75 group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>SEO</ul>
                                      </div>
                                  <Link onClick={()=>handleCloseAll()} href='/packages/c8-corvette-2020-plus' alt='' className="absolute bg-black/50  text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100">
                                      <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See All SEO Packages</p>
                                  </Link>
                              </div>
                          </div>
                          <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                  <div className="relative hover:scale-125 transition-all duration-300 overflow-hidden">
                                      <div className='flex flex-col items-center'>
                                          <Image alt='img' width={520} height={375} className="w-full group-hover:grayscale filter-none h-[230px] object-center hover:opacity-0 transition-all duration-75 object-cover" src='/img/1.png'/>
                                          <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 group-hover:scale-75 group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>SEO</ul>
                                      </div>
                                  <Link onClick={()=>handleCloseAll()} href='/packages/c8-corvette-2020-plus' alt='' className="absolute bg-black/50  text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100">
                                      <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See All SEO Packages</p>
                                  </Link>
                              </div>
                          </div>
                         
                      </div>

                  </div>
              </div>
        </div>  

    </div>
  </div>

  <div className={`w-[100vw] shadow-2xl text-white mt-[125px] xl:flex-col px-[7.5vw] hidden  overflow-y-scroll bg-black absolute left-0 top-0 h-[500px] ${featuredShown ? 'lg:shown lg:flex' : 'hidden'}`}>
    <div className='mt-8 mb-16' alt='spacer'>
      
    <div className='grid lg:grid-cols-4  grid-cols-2 w-full gap-4 lg:gap-8'>

    <div className='flex text-sub flex-col items-center' alt='item'>
        <div className='overflow-hidden '>
        <div className='mb-2'>
                <ul className='text-center top-0'>Build 1</ul>
            </div>
            <Link onClick={()=>handleCloseAll()} href='/featured/'>
                <Image
                    className='hover:sm:scale-125 hover:scale-150 transition-transform duration-300'
                    src='/img/20.png'
                    width={300}
                    height={720}
                    alt='car'
                />
            </Link>
        </div>
        <div className='self-center hidden lg:shown lg:flex'>
            <p className='text-center mt-3 font-medium  underline-animation-white'><Link href='/featured/'>Learn More</Link></p>
        </div>
    </div>

        <div className='flex text-sub flex-col items-center' alt='item'>
            <div className='overflow-hidden '>
            <div className='mb-2'>
                    <ul className=' text-center top-0'>Build 2</ul>
                </div>
                <Link onClick={()=>handleCloseAll()} href='/featured/'>
                    <Image
                        className='hover:sm:scale-125 hover:scale-150  transition-transform duration-300'
                        src='/img/20.png'
                        width={300}
                        height={720}
                        alt='car'
                    />
                </Link>
            </div>
            <div className='self-center hidden lg:shown lg:flex'>
                <p className='text-center mt-3 font-medium  underline-animation-white'><Link href='/featured/'>Learn More</Link></p>
            </div>
      </div>
      <div className='flex text-sub flex-col items-center' alt='item'>
          <div className='overflow-hidden '>
          <div className='mb-2'>
                  <ul className='text-center top-0'>Build 3</ul>
              </div>
              <Link onClick={()=>handleCloseAll()} href='/featured/'>
                  <Image
                      className='hover:sm:scale-125 hover:scale-150  transition-transform duration-300'
                      src='/img/20.png'
                      width={300}
                      height={720}
                      alt='car'
                  />
              </Link>
          </div>
          <div className='self-center hidden lg:shown lg:flex'>
              <p className='text-center mt-3 font-medium underline-animation-white'><Link href='/featured/'>Learn More</Link></p>
          </div>
      </div>
      <div className='flex text-sub flex-col items-center' alt='item'>
          <div className='overflow-hidden '>
          <div className='mb-2'>
                  <ul className='text-center top-0'>Build 4</ul>
              </div>
              <Link onClick={()=>handleCloseAll()} href='/featured/'>
                  <Image
                      className='hover:sm:scale-125 hover:scale-150  transition-transform duration-300'
                      src='/img/20.png'
                      width={300}
                      height={720}
                      alt='car'
                  />
              </Link>
          </div>
          <div className='self-center hidden lg:shown lg:flex'>
              <p className='text-center mt-3 font-medium underline-animation-white'><Link href='/featured/'>Learn More</Link></p>
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