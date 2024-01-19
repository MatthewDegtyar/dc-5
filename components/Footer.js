import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaPhoneAlt, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  
    return (
      <div className='w-[100vw] flex flex-col lg:flex-row h-[125px]'>
            <div className='flex items-center w-full flex-col gap-4 lg:flex-row justify-between px-[5vw]'>
                    {/* Logo Holder (Left) */}
                    <div>
                        <Link href='/' alt='/'>
                            <div>
                                <div className='border-3 p-1 w-[200px] text-white font-bold outline-white'>
                                    <p className='mt-8 ml-1'>Degtyar Consulting</p>
                                </div>
                            </div>                       
                        </Link>
                    </div>
            
                    {/* Terms (Center) */}
                    <div className='flex text-[12px] text-center text-white flex-col'>
                        <p>© {year} Degtyar Consulting. All Rights Reserved Terms & Conditions</p>
                        <p>

                        <Link href='https://www.degtyarconsulting.com/'>
                            <span className='font-bold underline-animation-white'>Degtyar Consulting</span>
                        </Link>
                        </p>
                    </div>
            
                    {/* Social Buttons (Right) */}
                    <div className='flex flex-row gap-4 mt-4 lg:mt-0 mb-8 lg:mb-0'>
                    <Link className='hover:opacity-70 transition-all duration-300' href=''alt=''>
                        <MdEmail color="white" size={23} />
                    </Link>
                    <Link className='hover:opacity-70 transition-all duration-300' href=''alt=''>
                        <FaPhoneAlt color="white" size={23} />
                    </Link>
                    <Link className='hover:opacity-70 transition-all duration-300' href=''alt=''>
                        <FaLinkedinIn color="white" size={23} />
                    </Link>
                    <Link className='hover:opacity-70 transition-all duration-300' href=''alt=''>
                        <FaInstagram color="white" size={23} />
                    </Link>
                    <Link className='hover:opacity-70 transition-all duration-300' href=''alt=''>
                        <FaFacebookF color="white" size={23} />
                    </Link>
                    <Link className='hover:opacity-70 transition-all duration-300' href=''alt=''>
                        <FaXTwitter color="white" size={23} />
                    </Link>

                    </div>
            </div>
        </div>
    )
}

export default Footer;
