import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RxCaretRight } from 'react-icons/rx'

const DMElement = () => {
  return (
<div className='mt-2 gap-2 xl:flex-row-reverse flex flex-col '>
            <div className='xl:w-[30vw] bg-hero-pattern2 bg-center bg-cover p-4 xl:p-8 bg-no-repeat bg-orange-500  rounded-l-[1px]'>
                <div className='bg-black/60 rounded-[1px] flex flex-col gap-2 p-3 xl:p-6 items-center xl:items-start justify-center text-white w-full h-full'>
                    <h3 className='text-h3 text-center xl:text-start'>E-Commerce</h3>
                    <p className='text-center xl:text-start'>Create & optimize your online store.</p>
                    <Link href='/services/e-commerce'alt='' className='py-2 px-8 bg-none rounded-[1px] border-2 outline-white group hover:bg-white mt-8'>
                      <p className='text-white group-hover:text-black underline-animation'>Learn More</p>
                    </Link>
                </div>
                
            </div>

            <div className='xl:w-[70vw]  bg-black justify-between lg:flex flex-col p-4 xl:p-16 rounded-r-[1px]' alt='large scren holder'>
                
                <div className='bg-black/0 flex flex-col gap-2 px-6 text-center text-white w-full h-full'>
                    <h3 className='text-h3'>Digital Marketing</h3>
                    <p>Uncover new markets. Reach new clients.</p>
                </div>

                <div className=' w-full flex items-center shown lg:hidden self-center flex-col mt-8 gap-4' alt='mobile'>
                    <Link href='/services/seo' className='bg-white p-4 w-full px-[10vw] text-center font-semibold text-[18px] rounded-[1px] text-black'>
                        <p>SEO</p>
                    </Link>
                    <Link href='/services/google-ads' className='bg-white p-4 w-full px-[10vw] text-center font-semibold text-[18px] rounded-[1px] text-black'>
                        <p>Google Ads</p>
                    </Link>
                    <Link href='/services/social-media' className='bg-white p-4  w-full px-[10vw] text-center font-semibold text-[18px] rounded-[1px] text-black'>
                        <p>Social Media</p>
                    </Link>
                </div>

                <div className='mt-4 gap-4 ' alt='desktop'>
                    <div className='  bg-black lg:flex flex-row gap-2 justify-center items-center p-8 rounded-[1px]'>

                    <div className="h-fit w-fit group text-black overflow-hidden hidden lg:shown lg:flex" alt='item'>               
                        <div className="relative transition-all duration-300 overflow-hidden">
                            <div className='flex flex-col items-start'>
                                <div className="bg-white filter-none w-72 h-72 object-center lg:hover:opacity-0 lg:transition-all lg:duration-75 object-cover" src='/img/car33.webp'></div>
                                <div className='text-start text-black items-center justify-between flex flex-row gap-2 absolute bottom-4 p-4 text-3xl lg:transition-all lg:duration-300 lg:group-hover:-translate-y-48 font-bold bg-transparent'>
                                    <h4>SEO</h4>
                                    <RxCaretRight color='black' className='lg:group-hover:rotate-90 transition-all duration-300' size={45}/>
                                </div>
                                <ul className='text-sub flex flex-col font-normal absolute bottom-4 text-white group-hover:text-black p-4 opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-y-20 transition-all duration-50'>
                                    <p className='underline-animation-white' href=''alt=''>Define your market</p>
                                    <p className='underline-animation-white' href=''alt=''>Uncover new services</p>
                                    <p className='underline-animation-white' href=''alt=''>Convert more leads</p>
                                    <p className='underline-animation-white' href=''alt=''>Reach new clients</p>

                                </ul>

                            </div>

                            <Link href='/services/seo' alt='' className="absolute text-end transition-all duration-900 h-full w-full flex-col -bottom-0 flex justify-end items-center lg:group-hover:bottom-0 opacity-0 lg:group-hover:opacity-100">
                                <p className='font-medium underline-animation2 mb-4'>Learn More</p>
                            </Link>
                        </div>
                    </div>

                    <div className="h-fit w-fit group text-black overflow-hidden hidden lg:shown lg:flex" alt='item'>               
                        <div className="relative transition-all duration-300 overflow-hidden">
                            <div className='flex flex-col items-start'>
                                <div className="bg-white filter-none w-72 h-72 object-center lg:hover:opacity-0 lg:transition-all lg:duration-75 object-cover" src='/img/car33.webp'></div>
                                <div className='text-start text-black items-center justify-between flex flex-row gap-2 absolute bottom-4 p-4 text-3xl lg:transition-all lg:duration-300 lg:group-hover:-translate-y-48 font-bold bg-transparent'>
                                    <h4 className='text-nowrap'>Google Ads</h4>
                                    <RxCaretRight color='black' className='lg:group-hover:rotate-90 transition-all duration-300' size={45}/>
                                </div>
                                <ul className='text-sub flex flex-col font-normal absolute bottom-4 text-white group-hover:text-black p-4 opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-y-20 transition-all duration-50'>
                                    <p className='underline-animation-white' href=''alt=''>Define your market</p>
                                    <p className='underline-animation-white' href=''alt=''>Uncover new services</p>
                                    <p className='underline-animation-white' href=''alt=''>Convert more leads</p>
                                    <p className='underline-animation-white' href=''alt=''>Reach new clients</p>

                                </ul>

                            </div>

                            <Link href='/services/google-ads' alt='' className="absolute text-end transition-all duration-900 h-full w-full flex-col -bottom-0 flex justify-end items-center lg:group-hover:bottom-0 opacity-0 lg:group-hover:opacity-100">
                                <p className='font-medium underline-animation2 mb-4'>Learn More</p>
                            </Link>
                        </div>
                    </div>

                    <div className="h-fit w-fit group text-black overflow-hidden hidden lg:shown lg:flex" alt='item'>               
                        <div className="relative transition-all duration-300 overflow-hidden">
                            <div className='flex flex-col items-start'>
                                <div className="bg-white filter-none w-72 h-72 object-center lg:hover:opacity-0 lg:transition-all lg:duration-75 object-cover" src='/img/car33.webp'></div>
                                <div className='text-start text-black items-center justify-between flex flex-row gap-2 absolute bottom-4 p-4 text-3xl lg:transition-all lg:duration-300 lg:group-hover:-translate-y-48 font-bold bg-transparent'>
                                    <h4 className='text-nowrap'>Social Media</h4>
                                    <RxCaretRight color='black' className='lg:group-hover:rotate-90 transition-all duration-300' size={45}/>
                                </div>
                                <ul className='text-sub flex flex-col font-normal absolute bottom-4 text-white group-hover:text-black p-4 opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-y-20 transition-all duration-50'>
                                    <p className='underline-animation-white' href=''alt=''>Define your market</p>
                                    <p className='underline-animation-white' href=''alt=''>Uncover new services</p>
                                    <p className='underline-animation-white' href=''alt=''>Convert more leads</p>
                                    <p className='underline-animation-white' href=''alt=''>Reach new clients</p>

                                </ul>

                            </div>

                            <Link href='/services/social-media' alt='' className="absolute text-end transition-all duration-900 h-full w-full flex-col -bottom-0 flex justify-end items-center lg:group-hover:bottom-0 opacity-0 lg:group-hover:opacity-100">
                                <p className='font-medium underline-animation2 mb-4'>Learn More</p>
                            </Link>
                        </div>
                    </div>

                    </div>
                    
                </div>
                
            </div>
        </div>
  )
}

export default DMElement
