import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FeaturedElement = () => {
  return (
<div className='mt-2 h-[60vh] gap-2 flex flex-row '>
            <div className='w-[30vw] bg-hero-pattern3 bg-center bg-cover p-8 bg-no-repeat bg-orange-500 h-[60vh] rounded-l-[1px]'>
                <div className='bg-black/60 rounded-[1px] flex flex-col gap-2 p-6 items-start justify-center text-white w-full h-full'>
                    <h3 className='text-h3'>White Label Templates</h3>
                    <p>We design and build a multifunctional template, you deliver it to your clients.</p>
                    <Link href=''alt='' className='py-2 px-8 bg-none rounded-[1px] border-2 outline-white group hover:bg-white mt-8'>
                      <p className='text-white group-hover:text-black underline-animation'>Learn More</p>
                    </Link>
                </div>
                
            </div>

            <div className='w-[70vw] bg-black flex flex-col p-16 rounded-r-[1px]'>
                
                <div className='bg-black/0 flex flex-col gap-2 px-6 items-center  text-white w-full h-full'>
                    <h3 className='text-h3'>Professional Website Design</h3>
                    <p>We design and build a multifunctional template, you deliver it to your clients.</p>
                    
                </div>
                <div className='flex flex-row gap-4'>
                    <div className='flex text-sub text-white flex-col items-center' alt='item'>
                            <div className='overflow-hidden '>
                            <div className='mb-2'>
                                    <ul className=' text-center top-0'>Oviedo Machine Works</ul>
                                </div>
                                <Link href='/featured/'>
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
                    <div className='flex text-sub text-white flex-col items-center' alt='item'>
                            <div className='overflow-hidden '>
                            <div className='mb-2'>
                                    <ul className=' text-center top-0'>Downballot Solutions</ul>
                                </div>
                                <Link className='flex flex-col group items-center' href='/featured/'>
                                    <Image
                                        className='hover:sm:scale-125 hover:scale-150  transition-all duration-300'
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
                    <div className='flex text-sub text-white flex-col items-center' alt='item'>
                            <div className='overflow-hidden '>
                            <div className='mb-2'>
                                    <ul className=' text-center top-0'>HCA Books (demo)</ul>
                                </div>
                                <Link href='/featured/'>
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
                    <div className='flex text-sub text-white flex-col items-center' alt='item'>
                            <div className='overflow-hidden '>
                            <div className='mb-2'>
                                    <ul className=' text-center top-0'>Furcheto Motorsports (demo)</ul>
                                </div>
                                <Link href='/featured/'>
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
                    
                </div>
                
            </div>
        </div>
  )
}

export default FeaturedElement
