import RootLayout from '@/styles/RootLayout'
import React from 'react'
import { useRouter } from 'next/router';
import {Accordion, AccordionItem, Button} from "@nextui-org/react";
import Link from 'next/link';
import ContactConverter from '@/components/ContactConverter';
import { SiMaterialdesign } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";

const FAQs = [
  {
    question: 'How much does a website cost?',
    answer: 'There’s not one single answer to this question. A website design is quoted based on the needs of each individual project. Every website is unique and requires different components; we design and develop custom websites specifically for your business. We’ll ask a lot of questions, assess your needs, and give you a price quote based on that assessment. Our smallest package starts at $1,249. Please contact us at Degtyar.Contulting@gmail.com'
  },
  {
    question: 'How long does a project take?',
    answer: 'Our standard timeline is 3-6 weeks to complete a website but this depends on the project since the size and pace of any project is set by each client. How much input you can provide during the initial stages, your feedback, how soon the content is provided – all this affects the speed of completion. The functionality and revisions required will also play a role in your timeline.'
  },
  {
    question: 'What about site maintainance?',
    answer: 'We can help maintain your website, or you can do so yourself with the more minor changes. The choice is 100% up to you. We provide on-going support for many of our clients but it is not mandatory and you will not be charged a monthly fee. You can contact us as you require updates to your website and we will provide an hourly quote based on your requests.'
  },
  {
    question: 'Do you host and provide domain names?',
    answer: 'Yes. Hosting is $10/m and domain pricing depends on how preium of a name you want for your website.'
  },
  {
    question: 'Will the website be mobile friendly?',
    answer: 'Absolutely! Having a mobile-friendly website is more important than ever! We work hard to ensure your website is responsive on modern devices and browsers.'
  },
  {
    question: 'What is photo sourcing?',
    answer: 'If required, we will assist you in finding free stock images.'
  },
  {
    question: 'How do we get started?',
    answer: 'Contact us by email at Degtyar.Consulting@gmail.com  with your website details (current or new project), page breakdown, and any sample websites to reference. Upon review, we will provide an estimate for your project or schedule a call to discuss further.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'Upon agreement of the quote presented, we will accept Debit, Visa, MasterCard, Amex and Cheque.'
  },
  {
    question: 'Is SEO included in my website build?',
    answer: 'No. Although images and text will be indexed by search engines. We have an SEO team that can help you out!'
  },
  {
    question: 'Do you work with new businesses?',
    answer: 'Yes! we work with all types of businesses – new, small, to big corporations. We are excited to work and guide new businesses who are passionate about taking their first steps into an online presence and making their vision come to life.'
  },
  {
    question: 'Who writes the text/content for the website?',
    answer: 'We advice that you write the content for your website, although we can ghostwrite provided we have the relevant information to do so.'
  },


]

const Page = () => {
  const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  
  const midIndex = Math.ceil(FAQs.length / 2); // Calculate the index to split FAQs into two columns

  const firstHalfFAQs = FAQs.slice(0, midIndex);
  const secondHalfFAQs = FAQs.slice(midIndex);
  
  return (
    <RootLayout hideContact={true} pageTitle='SEO'>
        <div className='bg-black h-[25vh] p-4 xl:p-8 bg-hero-pattern11  bg-cover bg-center bg-no-repeat'>
            <div className='bg-black/60 rounded-[1px] flex flex-col gap-2 p-3 xl:p-6 items-center  justify-center text-white w-full h-full'>
                <h1 className='text-title text-pretty text-center'>Ready To Empower Your Business?</h1>
                <h2 className='text-h2'>Search Engine Optimization</h2>
            </div>
        </div>

        <div className='bg-black flex flex-col items-center text-white px-[5vw]' alt='first'>
          <div className='h-8' alt='spacer'></div>
          <h3 className='text-h3 text-center'>What Is SEO?</h3>
          <p className='mt-2 text-center max-w-[500px]'>We research what content drives traffic to your competitors' sites and actively divert it to yours.</p>
          <div className='w-full' alt='holder'>
            <div className='bg-[#191919] flex gap-4 flex-col xl:flex-row items-center xl:items-start mt-8 p-4'>
              <h4 className='text-h3 mr-4 mb-4 xl:mb-0'>The Process</h4>
              <div className='flex overflow-x-scroll flex-col xl:flex-row gap-8' alt='sub holder'>

                <div className='flex flex-col items-center w-96' alt='subitem'>
                  <SiMaterialdesign color='white' size={42}/>
                  <h5 className='mt-4 text-[22px] font-medium'>Traffic Research</h5>
                  <p className='mt-2'>We'll work closely with you to research 1.  what services/products create the most revenue, 2. desired benchmarks for increasing revenue, and 3. outline solutions that delivery on those outcomes.</p>
                </div>
                
                <div className='flex flex-col items-center w-96' alt='subitem'>
                  <FaConnectdevelop color='white' size={42}/>
                  <h5 className='mt-4 text-[22px] font-medium'>Development (0 to 1)</h5>
                  <p className='mt-2'>Now that we have an understanding of what to do, we test effectiveness of the solution. This is a 3 month process of intense A/B testing of different keyword strategies.</p>
                </div>

                <div className='flex flex-col items-center w-96' alt='subitem'>
                  <IoRocket color='white' size={42}/>
                  <h5 className='mt-4 text-[22px] font-medium'>Optimization (1 to n)</h5>
                  <p className='mt-2'>We optimize inefficiencies, manage mission creep, and prepare the solution to be deployed at scale.</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className='bg-black text-white px-[5vw]' alt='first'>
          <div className='h-8' alt='spacer'></div>
          <h3 className='text-h3 text-center'>Why Us?</h3>
          <div className='mt-4 flex flex-col xl:flex-row gap-8 xl:gap-24 sm:px-[10vw] md:px-[15vw] lg:px-[20vw] xl:px-[0vw] cursor-default' alt='holder'>
            <div className='w-full bg-gradient-to-tr from-blue-500 rounded-[1px] to-violet-500'>

              <div className='bg-[#191919] hover:scale-[98%] rounded-[1px] transition-all duration-100 w-full h-full p-4'>
                <p className='text-[60px] font-bold text-center'>1</p>
                <p className='text-center text-h3'>Research Oriented</p>
                <div className='mt-6'>
                  <p>Time is precious. Our mission is to free up more of it for you to focus on big picture planning.</p>
                  <br></br>
                  <p>Our applications are built on top of WordPress's Content Management System.</p>
                  <br></br>
                  <p>We combine WordPress's easy to use CMS with break-neck speeds to create a world class digital storefront.</p>
                  <br></br>
                  <p>If operate an existing WordPress site we guarantee that you'll see no disruption during the redesign process.</p>
                </div>
              </div>

            </div>

            <div className='w-full bg-gradient-to-tr from-blue-500 rounded-[1px] to-violet-500'>
              <div className='bg-[#191919] hover:scale-[98%] transition-all rounded-[1px] duration-100 h-full w-full p-4'>
                <p className='text-[60px] font-bold text-center'>2</p>
                <p className='text-center text-h3'>No Compromises</p>
                <div className='mt-6'>
                  <p>WordPress's Content Mangament System is great. Their hosting isn't.</p>
                  <br></br>
                  <p>Slow web speeds result in an underperformance in lead capture. Our solution gives you the ability to manage content on your website while retaining lightning fast load speeds so you don't turn away potential customers/clients.</p>
                  <br></br>
                  <p>Retain the WordPress CMS you're already familiar with without compromising on performance.</p>
                </div>
              </div>
            </div>
            <div className='w-full bg-gradient-to-tr from-blue-500 rounded-[1px] to-violet-500'>
              <div className='hover:scale-[98%] bg-[#191919] h-full rounded-[1px] transition-all duration-100 w-full p-4'>
                <p className='text-[60px] font-bold text-center'>3</p>
                <p className='text-center text-h3'>Designed To Impress</p>
                <div className='mt-6'>
                    <p>It's hard to design something that truly captures your product/service quality. Let us help.</p>
                    <br></br>
                    <p>Our proven web-flow design philophy ensures that potential customer/clients will stay on your site longer resulting in a higher chance of conversion.</p>
                    <br></br>
                    <p>Each page has a 'goal,' whether it's to fill out a form, give you a call, or purchase your product/service.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className='h-24 flex flex-col items-center bg-black'>
          <Link href='#contact'alt='' className='py-2 px-8 bg-none rounded-[1px] border-2 outline-white group hover:bg-white mt-8'>
                <p className='text-white group-hover:text-black underline-animation'>Let's Start Winning</p>
          </Link>
          </div>

        </div>

        <div className='bg-black -mt-2' id='contact'>
          <ContactConverter/>
        </div>


    </RootLayout>
  )
}

export default Page