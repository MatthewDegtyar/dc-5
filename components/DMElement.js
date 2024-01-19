import React from 'react'
import { RxCaretRight } from 'react-icons/rx';
import Link from 'next/link';

const DMElement = () => {
  return (
<div className='mt-2 h-[40vh] gap-0 flex flex-row '>
            <div className='w-[70vw] bg-black flex flex-row gap-2 justify-center items-center p-8 rounded-[1px]'>

                <div className="h-fit w-fit group text-black overflow-hidden " alt='item'>               
                    <div className="relative transition-all duration-300 overflow-hidden">
                        <div className='flex flex-col items-start'>
                            <div className="bg-white filter-none w-72 h-72 object-center xl:hover:opacity-0 xl:transition-all xl:duration-75 object-cover" src='/img/car33.webp'></div>
                            <div className='text-start text-black items-center justify-between flex flex-row gap-2 absolute bottom-4 p-4 text-3xl xl:transition-all xl:duration-300 xl:group-hover:-translate-y-48 font-bold bg-transparent'>
                                <h4>SEO</h4>
                                <RxCaretRight color='black' className='xl:group-hover:rotate-90 transition-all duration-300' size={45}/>
                            </div>
                            <ul className='text-sub flex flex-col font-normal absolute bottom-4 text-white group-hover:text-black p-4 opacity-0 xl:group-hover:opacity-100 xl:group-hover:-translate-y-20 transition-all duration-50'>
                                <Link className='underline-animation-white' href=''alt=''>Define Your Market</Link>
                                <Link className='underline-animation-white' href=''alt=''>Uncover New Services</Link>
                                <Link className='underline-animation-white' href=''alt=''>Convert More Leads</Link>
                                <Link className='underline-animation-white' href=''alt=''>Reach New Clients</Link>

                            </ul>

                        </div>

                        <Link href='/about#policies' alt='' className="absolute text-end transition-all duration-900 h-full w-full flex-col  bg- -bottom-0 flex justify-end items-center xl:group-hover:bottom-0 opacity-0 xl:group-hover:opacity-100">
                            <p className='font-medium underline-animation2 mb-4'>Learn More</p>
                        </Link>
                    </div>
                </div>
                
                <div className="h-fit w-fit group text-black overflow-hidden " alt='item'>               
                    <div className="relative transition-all duration-300 overflow-hidden">
                        <div className='flex flex-col items-start'>
                            <div className="bg-white filter-none w-72 h-72 object-center xl:hover:opacity-0 xl:transition-all xl:duration-75 object-cover" src='/img/car33.webp'></div>
                            <div className='text-start text-black items-center justify-between flex flex-row gap-2 absolute bottom-4 p-4 text-3xl xl:transition-all xl:duration-300 xl:group-hover:-translate-y-48 font-bold bg-transparent'>
                                <h4>Google Ads</h4>
                                <RxCaretRight color='black' className='xl:group-hover:rotate-90 transition-all duration-300' size={45}/>
                            </div>
                            <ul className='text-sub flex flex-col font-normal absolute bottom-4 text-white group-hover:text-black p-4 opacity-0 xl:group-hover:opacity-100 xl:group-hover:-translate-y-20 transition-all duration-50'>
                                <Link className='underline-animation-white' href=''alt=''>Define Your Market</Link>
                                <Link className='underline-animation-white' href=''alt=''>Uncover New Services</Link>
                                <Link className='underline-animation-white' href=''alt=''>Convert More Leads</Link>
                                <Link className='underline-animation-white' href=''alt=''>Reach New Clients</Link>

                            </ul>

                        </div>

                        <Link href='/about#policies' alt='' className="absolute text-end transition-all duration-900 h-full w-full flex-col  bg- -bottom-0 flex justify-end items-center xl:group-hover:bottom-0 opacity-0 xl:group-hover:opacity-100">
                            <p className='font-medium underline-animation2 mb-4'>Learn More</p>
                        </Link>
                    </div>
                </div>

                <div className="h-fit w-fit group text-black overflow-hidden " alt='item'>               
                    <div className="relative transition-all duration-300 overflow-hidden">
                        <div className='flex flex-col items-start'>
                            <div className="bg-white filter-none w-72 h-72 object-center xl:hover:opacity-0 xl:transition-all xl:duration-75 object-cover" src='/img/car33.webp'></div>
                            <div className='text-start text-black items-center justify-between flex flex-row gap-2 absolute bottom-4 p-4 text-3xl xl:transition-all xl:duration-300 xl:group-hover:-translate-y-48 font-bold bg-transparent'>
                                <h4>CRM</h4>
                                <RxCaretRight color='black' className='xl:group-hover:rotate-90 transition-all duration-300' size={45}/>
                            </div>
                            <ul className='text-sub flex flex-col font-normal absolute bottom-4 text-white group-hover:text-black p-4 opacity-0 xl:group-hover:opacity-100 xl:group-hover:-translate-y-20 transition-all duration-50'>
                                <Link className='underline-animation-white' href=''alt=''>Define Your Market</Link>
                                <Link className='underline-animation-white' href=''alt=''>Uncover New Services</Link>
                                <Link className='underline-animation-white' href=''alt=''>Convert More Leads</Link>
                                <Link className='underline-animation-white' href=''alt=''>Reach New Clients</Link>

                            </ul>

                        </div>

                        <Link href='/about#policies' alt='' className="absolute text-end transition-all duration-900 h-full w-full flex-col  bg- -bottom-0 flex justify-end items-center xl:group-hover:bottom-0 opacity-0 xl:group-hover:opacity-100">
                            <p className='font-medium underline-animation2 mb-4'>Learn More</p>
                        </Link>
                    </div>
                </div>
               
                
            </div>
            <div className='w-[30vw] bg-hero-pattern2 bg-center bg-cover p-8 bg-red-500 h-[40vh] rounded-[1px]'>
                <div className='bg-black/60 rounded-[1px] flex flex-col gap-2 p-6 items-start justify-center text-white w-full h-full'>
                    <h3 className='text-h3'>Digital Marketing</h3>
                    <p>Become your own one-stop-shop for your clients' needs.</p>
                    <Link href=''alt='' className='py-2 px-8 bg-none rounded-[1px] border-2 outline-white group hover:bg-white mt-8'>
                      <p className='text-white group-hover:text-black underline-animation'>Learn More</p>
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default DMElement
