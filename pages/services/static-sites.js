import RootLayout from '../../styles/RootLayout'
import React from 'react'
import { useRouter } from 'next/router';
import {Accordion, AccordionItem, Button} from "@nextui-org/react";
import Link from 'next/link';
import ContactConverter from '../../components/ContactConverter';

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
    <RootLayout canon_url={`services/static-sites`} meta_description='How to make a business website' imageUrl='/img/bg7.jpeg' hideContact={true} pageTitle='Static Sites'>
        <div className='bg-black h-[25vh] p-4 xl:p-8 bg-hero-pattern7 bg-cover bg-center bg-no-repeat'>
            <div className='bg-black/60 rounded-[1px] flex flex-col gap-2 p-3 xl:p-6 items-center  justify-center text-white w-full h-full'>
                <h1 className='text-title text-pretty text-center'>Ready To Empower Your Business?</h1>
                <h2 className='text-h2'>Static Sites</h2>
            </div>
        </div>

        <div className='bg-black text-white px-[5vw]' alt='first'>
          <div className='h-8' alt='spacer'></div>
          <h3 className='text-h3 text-center'>Why Us?</h3>
          <div className='mt-4 flex flex-col xl:flex-row gap-8 xl:gap-24 sm:px-[10vw] md:px-[15vw] lg:px-[20vw] xl:px-[0vw] cursor-default' alt='holder'>
            <div className='w-full bg-gradient-to-tr from-blue-500 rounded-[1px] to-violet-500'>

              <div className='bg-[#191919] rounded-[1px] hover:scale-[98%] transition-all duration-100 w-full h-full p-4 '>
                <p className='text-[60px] font-bold text-center'>1</p>
                <p className='text-center text-h3'>Less Headaches</p>
                <div className='mt-6'>
                  <p>Time is precious. Our mission is to free up more of it for you to focus on big picture planning.</p>
                  <br></br>
                  <p>Our streamlined design process is designed to quickly iterate on your feedback and deploy sites ASAP.</p>
                  <br></br>
                  <p>We'll manage the site's operations, checking for broken links, images, and overall site health.</p>
                </div>
              </div>

            </div>

            <div className='w-full bg-gradient-to-tr from-blue-500 rounded-[1px] to-violet-500'>
              <div className='bg-[#191919] rounded-[1px] hover:scale-[98%] transition-all duration-100 h-full w-full p-4'>
                <p className='text-[60px] font-bold text-center'>2</p>
                <p className='text-center text-h3'>Lightning Speed</p>
                <div className='mt-6'>
                  <p>Our sites are built with speed in mind. Turning away leads due to poor performance is not acceptable to us.</p>
                  <br></br>
                  <p>After three seconds of load time 25% of a site's users will leave. After six seconds that number jumps to 50%.</p>
                  <br></br>
                  <p>Our sites load in a second or less.</p>
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
        </div>

        <div className='flex flex-col items-center bg-black w-full py-3 xl:p-6'>
          <div className='h-8' alt='spacer'></div>

          <div className='text-white w-full flex flex-col items-center px-8' id='shopify-pricing'>
        <h3 className='text-h3 text-center'>Web Design Pricing Schedule (Static Site)</h3>
        <div className='flex cursor-default flex-col xl:flex-row mt-8 gap-4' alt='pricing holder'>

          <div className='p-4 bg-[#191919] hover:bg-gradient-to-br from-transparent to-[#282828] items-center flex flex-col xl:items-start' alt='item'>
            <h4 className='text-h3 text-zinc-300'>Lightning Silver</h4>
            <p className='mt-2'>We will build a templated WordPress CMS website based on your samples provided, direction and brand guidelines</p>
            <div className='mt-4'>
              <p className='text-[18px] font-medium'>Silver Package Details</p>
              <div className='flex flex-col gap-1 mt-2'>
                <div className='ml-4'>
                  <li>1 Hour Brainstorm</li>
                  <li>Customization of Theme</li>
                  <li>Mobile Responsive</li>
                  <li>Social Media Integration</li>
                  <li>Google Maps</li>
                  <li>Contact Form</li>
                  <li>Photo Sourcing</li>
                  <li>2 Rounds of Revisions</li>
                  <li>Server Side Rendering Front End</li>
                  <li>Lightning Fast Global Hosting</li>
                </div>
              </div>
              <div className='flex flex-row mt-6 gap-3'>
                <div className='flex flex-col items-center'>
                  <p className='text-[28px]'>$1,499</p>
                  <p>Silver Package</p>
                </div>
                <div className='flex flex-row'>
                <div className='w-[1.5px] h-full bg-white/70 mr-3' alt='spacer'></div>
                  <div className='flex flex-col'>
                    <p className='font-medium text-[18px] mb-2'>For Example:</p>
                    <p className='font-medium text-[20px]'>3 Page Site $2,249</p>
                    <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>

                    <p className='font-medium text-[20px] mt-2'>5 Page Site $2,549</p>
                    <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>

                    <p className='font-medium text-[20px] mt-2'>10 Page Site $3,299</p>
                    <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[1.5px] h-[600px] hidden xl:shown bg-white/70 self-center" alt='spacer'></div>
          <div className="h-[1.5px] w-[75vw] shown xl:hidden bg-white/70 self-center mt-4 mb-4" alt='spacer'></div>

          <div className='p-4 bg-[#191919] hover:bg-gradient-to-br from-transparent to-[#282828] items-center flex flex-col xl:items-start' alt='item'>
            <h4 className='text-h3 text-amber-300'>Lightning Gold</h4>
            <p className='mt-2'>We will build a customized WordPress website based on your samples provided, direction and brand guidelines</p>
            <div className='mt-4'>
              <p className='text-[18px] font-medium'>Gold Package Details</p>
              <div className='flex flex-col gap-1 mt-2'>
                <div className='ml-4'>
                  <li>1 Hour Brainstorm</li>
                  <li>Mobile Responsive</li>
                  <li>Social Media Integration</li>
                  <li>Custom Icons</li>
                  <li>Google Maps</li>
                  <li>Contact Form</li>
                  <li>Photo Sourcing</li>
                  <li>Google Analytics</li>
                  <li>Social Sharing</li>
                  <li>404 Redirect</li>
                  <li>XML Sitemap</li>
                  <li>3 Rounds of Revisions</li>
                  <li>Server Side Rendering Front End</li>
                  <li>Lightning Fast Global Hosting</li>
                </div>
              </div>
              <div className='flex flex-row mt-6 gap-3'>
                <div className='flex flex-col items-center'>
                  <p className='text-[28px]'>$2,999</p>
                  <p>Gold Package</p>
                </div>
                <div className='flex flex-row'>
                <div className='w-[1.5px] h-full bg-white/70 mr-3'></div>
                  <div className='flex flex-col'>
                    <p className='font-medium text-[18px] mb-2'>For Example:</p>
                    <p className='font-medium text-[20px]'>3 Page Site $3,449</p>
                    <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>

                    <p className='font-medium text-[20px] mt-2'>5 Page Site $3,749</p>
                    <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>

                    <p className='font-medium text-[20px] mt-2'>10 Page Site $4,499</p>
                    <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[1.5px] h-[600px] hidden xl:shown bg-white/70 self-center" alt='spacer'></div>
          <div className="h-[1.5px] w-[75vw] shown xl:hidden bg-white/70 self-center mt-4 mb-4" alt='spacer'></div>

          <div className='p-4 bg-[#191919] hover:bg-gradient-to-br from-transparent to-[#282828] items-center flex flex-col xl:items-start' alt='item'>
            <h4 className='text-h3 text-nuetral-300'>Lightning Platinum</h4>
            <p className='mt-2'>We will build a website from scratch with mock-ups on a WordPress CMS based on your requirements for ultimate success</p>
            <div className='mt-4'>
              <p className='text-[18px] font-medium'>Platinum Package Details</p>
              <div className='flex flex-col gap-1 mt-2'>
                <div className='ml-4'>
                  <li>Website from Scratch</li>
                  <li>2 Page Custom Mock-up</li>
                  <li>1 Hour Brainstorm</li>
                  <li>Mobile Responsive</li>
                  <li>Google Maps</li>
                  <li>Mailing List Plugin</li>
                  <li>Contact Form</li>
                  <li>Social Sharing</li>
                  <li>Photo Sourcing</li>
                  <li>404 Redirect</li>
                  <li>XML Sitemap</li>
                  <li>Google Analytics</li>
                  <li>2 Hour “How To” Tutorial</li>
                  <li>3 Rounds of Revisions</li>
                  <li>Server Side Rendering Front End</li>
                  <li>Lightning Fast Global Hosting</li>
                </div>
              </div>
              <div className='flex flex-row mt-6 gap-3'>
                <div className='flex flex-col items-center'>
                  <p className='text-[28px]'>$4,499</p>
                  <p>Platinum Package</p>
                </div>
                <div className='flex flex-row'>
                <div className='w-[1.5px] h-full bg-white/70 mr-3'></div>
                  <div className='flex flex-col'>
                    <p className='font-medium text-[18px] mb-2'>For Example:</p>
                    <p className='font-medium text-[20px]'>3 Page Site $4,949</p>
                    <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>

                    <p className='font-medium text-[20px] mt-2'>5 Page Site $5,249</p>
                    <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>

                    <p className='font-medium text-[20px] mt-2'>10 Page Site $5,999</p>
                    <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
          <Link href='#contact'alt='' className='py-2 px-8 bg-none rounded-[1px] border-2 outline-white group hover:bg-white mt-8'>
                <p className='text-white group-hover:text-black underline-animation'>Let's Start Winning</p>
          </Link>
        <div className='h-4'></div>

      </div>

          <div className='h-3'></div>
          
          <div className='flex flex-col  lg:flex-row lg:px-[10vw] mt-4 lg:gap-4'>
        {/* First Column */}
        <div className='lg:w-[38vw] w-[85vw] lg:bg-gradient-to-b from-transparent to-[#282828] pr-8 bg-[#191919] p-4 h-fit'>
          <Accordion className='w-full'>
            {firstHalfFAQs.map((faq, index) => (
              <AccordionItem key={index} aria-label={`Accordion ${index + 1}`} subtitle={<p className='text-default-500'>Press to expand</p>} title={<p className='text-white'>{faq.question}</p>}>
                <div className='text-white p-4'>
                  {faq.answer}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Second Column */}
        <div className='lg:w-[38vw] w-[85vw] lg:bg-gradient-to-b from-transparent to-[#282828] bg-[#191919] p-4 h-fit'>
          <Accordion className='w-full'>
            {secondHalfFAQs.map((faq, index) => (
              <AccordionItem key={index + midIndex} aria-label={`Accordion ${index + midIndex + 1}`} subtitle={<p className='text-default-500'>Press to expand</p>} title={<p className='text-white'>{faq.question}</p>}>
                <div className='text-white p-4'>
                  {faq.answer}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
          <div className='h-3'></div>

        </div>
        <div className='bg-black -mt-2' id='contact'>
          <ContactConverter/>
        </div>


    </RootLayout>
  )
}

export default Page

{/**
<AccordionItem key="16" aria-label="Accordion 3" title={<p className='text-white'>Pricing</p>}>
  <div className='text-white'>
    {defaultContent}
  </div>  
</AccordionItem>  */}