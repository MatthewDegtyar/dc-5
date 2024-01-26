import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaPhoneAlt, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  
    return (
      <div className='w-[100vw] bg-black mt-2 flex flex-col lg:flex-row '>
            <div className='flex items-center w-full flex-col gap-4 lg:flex-row justify-between px-[5vw] mt-8 mb-8'>
                    {/* Logo Holder (Left) */}
                    <div>
                        <Link href='/' alt='/'>
                            <div>
                                <div className='border-3 p-1 w-[200px] text-white outline-white'>
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
            </div>
        </div>
    )
}

export default Footer;
