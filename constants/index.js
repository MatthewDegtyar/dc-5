export const menuNav = [
    {
      title: "Furcheto Packages",
      id:1,
      link:"/packages/default",
      submenu:[
        {
          title: "C8 Corvette — 2020+",
          id:2,
          link:"/packages/c8-corvette-2020-plus",
        },
        {
          title: "C7 Corvette — 2014-2019",
          id:3,
          link:"/packages/c7-corvette-2014-2019",
          submenu:[
            {
              title:"C7 Stringray — 2014-2019",
              id:4,
              link:"/packages/c7-corvette-2014-2019-stringray",
            },
            {
              title:"C7 Grand Sport — 2014-2019",
              id:5,
              link:"/packages/c7-corvette-2014-2019-grandsport",
            },
            {
              title:"C7 Z06 — 2014-2019",
              id:6,
              link:"/packages/c7-corvette-2014-2019-z06",
            },
            {
              title:"C7 ZR1 — 2014-2019",
              id:7,
              link:"/packages/c7-corvette-2014-2019-zr1",
            }
          ]
        },
        {
          title: "C6 Corvette — 2006-2013",
          id:8,
          link:"/packages/c6-corvette-2006-2013-base",
          submenu:[
            {
              title:"C6 Base — 2008-2013",
              id:9,
              link:"/packages/c6-corvette-2006-2013-base",
            },
            {
              title:"C6 Grand Sport — 2010-2013",
              id:10,
              link:"/packages/c6-corvette-2006-2013-grandsport",
            },
            {
              title:"C6 Z06 — 2006-2013",
              id:11,
              link:"/packages/c6-corvette-2006-2013-z06",
            },
            {
              title:"C6 ZR1 — 2009-2013",
              id:12,
              link:"/packages/c6-corvette-2006-2013-zr1",
            },

          ]
        },
        {
          title: "6th Gen Camaro — 2016+",
          id:13,
          link:"/packages/6th-gen-camaro-2016-plus-ss",
          submenu:[
            {
              title:"6th Gen Camaro SS — 2016+",
              id:14,
              link:"/packages/6th-gen-camaro-2016-plus-ss",
            },
            {
              title:"6th Gen Camaro ZL1 — 2016+",
              id:15,
              link:"/packages/6th-gen-camaro-2016-plus-zl1",
            },

          ]
        },
        {
          title: "Gen 3 CADILLAC CTS-V – 2016-2019",
          id:16,
          link:"/packages/c8-corvette-2020-plus",
        },
        {
          title: "Gen 2 CADILLAC CTS-V – 2009-2015",
          id:17,
          link:"/packages/c8-corvette-2020-plus",
        },
        {
          title: "SS SEDAN",
          years: "2014-2017",
          id: 18,
          link: "/packages/ss-sedan-2014-2017",
        },
        {
          title: "GM TRUCK/SUV",
          years: "2014+",
          id: 19,
          link: "/packages/gm-truck-suv-2014-plus",
        },
        {
          title: "Gen 5 Viper",
          years: "2013-2017",
          id: 20,
          link: "/packages/gen-5-viper-2013-2017",
        },
        {
          title: "GT500",
          years: "2020-2021",
          id: 21,
          link: "/packages/gt500-2020-2021",
        },
        {
          title: "GT350",
          years: "2015-2020",
          id: 22,
          link: "/packages/gt350-2015-2020",
        },
        {
          title: "MUSTANG GT",
          years: "2017-2021",
          id: 23,
          link: "/packages/mustang-gt-2017-2021",
        },
        {
          title: "DODGE CHALLENGER HELLCAT",
          years: "2015+",
          id: 24,
          link: "/packages/dodge-challenger-hellcat-2015-plus",
        },
        {
          title: "DODGE CHARGER HELLCAT",
          years: "2015+",
          id: 25,
          link: "/packages/dodge-charger-hellcat-2015-plus",
        },
        {
          title: "DODGE DEMON",
          years: "2018",
          id: 26,
          link: "/packages/dodge-demon-2018",
        },
        {
          title: "Gen 3 CADILLAC CTS-V",
          years: "2016-2019",
          id: 27,
          link: "/packages/gen-3-cadillac-cts-v-2016-2019",
        },
        {
          title: "Gen 2 CADILLAC CTS-V",
          years: "2009-2015",
          id: 28,
          link: "/packages/gen-2-cadillac-cts-v-2009-2015",
        },
    ]
    },
    {
      title: "Featured Builds",
      id:29,
      link:"/featured"
    },
    {
      title: "Maintainance",
      id:30,
      link:"",
    },
    {
      title: "About Us",
      id:31,
      link:"/about",
    },
    {
      title: "Events",
      id:32,
      link:"/events",
    },
    {
      title: "Contact",
      id:33,
      link:"/contact",
    },
];

import Link from "next/link";
import {Accordion, AccordionItem} from "@nextui-org/react";

const itemClasses = {
  base: "py-0 w-full",
  title: "font-normal text-medium",
  trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
  indicator: "text-medium",
  content: "text-small px-2",
};

export const serviceData = {
  "web-design": {
    title: "Web Design",
    image: '/img/chev1.jpeg',
    info: 
      <div>

      </div>
    ,
    data1: 
    <div className='text-white w-full flex flex-col items-center px-2 md:px-8' id='wordpress'>
    <h3 className='text-h3 text-center'>WordPress Pricing Schedule (Non-Ecommerce)</h3>
    <div className='grid grid-cols-1 xl:grid-cols-3 mt-8 gap-4' alt='pricing holder'>

      <div className='p-4 sm:bg-[#191919] xl:flex-none xl:items-start flex flex-col items-center' alt='item'>
        <h4 className='text-h3 text-zinc-300'>WordPress Silver</h4>
        <p className='mt-2 max-w-[500px] text-center'>We will build a template Shopify website based on your samples provided, direction and brand guidelines</p>
        <div className='mt-4'>
          <p className='text-[18px] font-medium mt-4'>Silver Package Details</p>
          <div className='flex flex-col gap-1 mt-2'>
            <div className='ml-4'>
              <li>Website from Scratch</li>
              <li>WordPress CMS Compatible Front End</li>
              <li>1 Hour Brainstorm</li>
              <li>Customization of Theme</li>
              <li>Mobile Responsive</li>
              <li>Social Media Integration</li>
              <li>Google Maps</li>
              <li>Mailing List Plugin</li>
              <li>Contact Form</li>
              <li>Photo Sourcing</li>
              <li>2 Rounds of Revisions</li>
              <li>Server Side Rendering Front End</li>
              <li>Lightning Fast Global Hosting</li>
            </div>
          </div>
          <div className='flex flex-row mt-6 gap-3'>
            <div className='flex flex-col items-center'>
              <p className='text-[28px]'>$1,249</p>
              <p className=' text-nowrap'>Silver Package</p>
            </div>
            <div className='flex flex-row'>
            <div className='w-[1.5px] h-full bg-white/70 mr-3'></div>
              <div className='flex flex-col'>
                <p className='font-medium text-[18px] mb-2'>For Example:</p>
                <p className='font-medium text-[20px]'>3 Page Site $1,699</p>
                <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>

                <p className='font-medium text-[20px] mt-2'>5 Page Site $1,999</p>
                <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>

                <p className='font-medium text-[20px] mt-2'>10 Page Site $2,749</p>
                <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div className='p-4 sm:bg-[#191919] xl:flex-none xl:items-start flex flex-col items-center' alt='item'>
        <h4 className='text-h3 text-amber-300'>WordPress Gold</h4>
        <p className='mt-2 max-w-[500px] text-center'>We will build a customized WordPress website based on your samples provided, direction and brand guidelines</p>
        <div className='mt-4'>
          <p className='text-[18px] font-medium mt-4'>Gold Package Details</p>
          <div className='flex flex-col gap-1 mt-2'>
            <div className='ml-4'>
              <li>Website from Scratch</li>
              <li>WordPress CMS Compatible Front End</li>
              <li>1 Hour Brainstorm</li>
              <li>Mobile Responsive</li>
              <li>Social Media Integration</li>
              <li>Custom Icons</li>
              <li>Google Maps</li>
              <li>Mailing List Plugin</li>
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
              <p className='text-[28px]'>$2,499</p>
              <p>Gold Package</p>
            </div>
            <div className='flex flex-row'>
            <div className='w-[1.5px] h-full bg-white/70 mr-3'></div>
              <div className='flex flex-col'>
                <p className='font-medium text-[18px] mb-2'>For Example:</p>
                <p className='font-medium text-[20px]'>3 Page Site $2,949</p>
                <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>

                <p className='font-medium text-[20px] mt-2'>5 Page Site $3,249</p>
                <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>

                <p className='font-medium text-[20px] mt-2'>10 Page Site $3,999</p>
                <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div className='p-4 sm:bg-[#191919] xl:flex-none xl:items-start flex flex-col items-center' alt='item'>
        <h4 className='text-h3 text-nuetral-300'>WordPress Platinum</h4>
        <p className='mt-2 max-w-[500px] text-center'>We will build a website from scratch with mock-ups on a WordPress CMS based on your requirements for ultimate success</p>
        <div className='mt-4'>
          <p className='text-[18px] font-medium mt-4'>Platinum Package Details</p>
          <div className='flex flex-col gap-1 mt-2'>
            <div className='ml-4'>
              <li>Website from Scratch</li>
              <li>WordPress CMS Compatible Front End</li>
              <li>2 Page Custom Mock-up</li>
              <li>1 Hour Brainstorm</li>
              <li>Mobile Responsive</li>
              <li>Social Media Integration</li>
              <li>6 Custom Icons</li>
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
              <p className='text-[28px]'>$7,499</p>
              <p>Platinum Package</p>
            </div>
            <div className='flex flex-row'>
            <div className='w-[1.5px] h-full bg-white/70 mr-3'></div>
              <div className='flex flex-col'>
                <p className='font-medium text-[18px] mb-2'>For Example:</p>
                <p className='font-medium text-[20px]'>3 Page Site $7,949</p>
                <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>

                <p className='font-medium text-[20px] mt-2'>5 Page Site $8,249</p>
                <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>

                <p className='font-medium text-[20px] mt-2'>10 Page Site $8,999</p>
                <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <Link href='/contact'alt='' className='py-2 px-8 bg-none rounded-[1px] border-2 outline-white group hover:bg-white mt-8'>
            <p className='text-white group-hover:text-black underline-animation'>Let's Start Winning</p>
        </Link>
    <div className='h-4'></div>

  </div>,
    services: {
    },
  },
  "e-commerce": {
    title: "Shopify (E-Commerce)",
    image: '/img/chev1.jpeg',
    data1: 
    <div className='text-white w-full flex flex-col items-center p-2 md:px-8' id='shopify'>
        <h3 className='text-h3 text-center'>Shopify Pricing Schedule (Ecommerce)</h3>
        <div className='grid grid-cols-1 xl:grid-cols-3 mt-8 gap-4' alt='pricing holder'>

        <div className='p-4 sm:bg-[#191919] xl:flex-none xl:items-start flex flex-col items-center' alt='item'>
            <h4 className='text-h3 text-zinc-300'>Shopify Silver</h4>
            <p className='mt-2 max-w-[500px] text-center'>We will build a templated Shopify website based on your samples provided, direction and brand guidelines</p>
            <div className='mt-4'>
              <p className='text-[18px] font-medium mt-4'>Silver Package Details</p>
              <div className='flex flex-col gap-1 mt-2'>
                <div className='ml-4'>
                  <li>Website from Scratch</li>
                  <li>Shopify CMS Compatible Front End</li>
                  <li>1 Hour Brainstorm</li>
                  <li>Customization of Theme</li>
                  <li>Mobile Responsive</li>
                  <li>Social Media Integration</li>
                  <li>Dynamic Page Link Previews For Items & Pages</li>
                  <li>Dynamic Shopify SEO (Every Page)</li>
                  <li>Google Maps</li>
                  <li>Mailing List Plugin</li>
                  <li>Contact Form</li>
                  <li>Photo Sourcing</li>
                  <li>2 Rounds of Revisions</li>
                  <li>Server Side Rendering Front End</li>
                  <li>Lightning Fast Global Hosting</li>
                </div>
              </div>
              <div className='flex flex-row mt-6 gap-3'>
                <div className='flex flex-col items-center'>
                  <p className='text-[28px]'>$2,499</p>
                  <p>Silver Package</p>
                </div>
                <div className='flex flex-row'>
                <div className='w-[1.5px] h-full bg-white/70 mr-3' alt='spacer'></div>
                  <div className='flex flex-col'>
                    <p className='font-medium text-[18px] mb-2'>For Example:</p>
                    <p className='font-medium text-[20px]'>3 Page Site $3,499</p>
                    <p className='text-default-400 text-[13px]'>($300 per additional website page)</p>

                    <p className='font-medium text-[20px] mt-2'>5 Page Site $3,999</p>
                    <p className='text-default-400 text-[13px]'>($300 per additional website page)</p>

                    <p className='font-medium text-[20px] mt-2'>10 Page Site $5,499</p>
                    <p className='text-default-400 text-[13px]'>($300 per additional website page)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          <div className='p-4 sm:bg-[#191919] xl:flex-none xl:items-start flex flex-col items-center' alt='item'>
            <h4 className='text-h3 text-amber-300'>Shopify Gold</h4>
            <p className='mt-2 max-w-[500px] text-center'>We will build a customized Shopify website based on your samples provided, direction and brand guidelines</p>
            <div className='mt-4'>
              <p className='text-[18px] font-medium mt-4'>Gold Package Details</p>
              <div className='flex flex-col gap-1 mt-2'>
                <div className='ml-4'>
                  <li>Website from Scratch</li>
                  <li>Shopify CMS Compatible Front End</li>
                  <li>1 Hour Brainstorm</li>
                  <li>Mobile Responsive</li>
                  <li>Social Media Integration</li>
                  <li>Dynamic Page Link Previews For Items & Pages</li>
                  <li>Dynamic Shopify SEO (Every Page)</li>
                  <li>Custom Icons</li>
                  <li>Google Maps</li>
                  <li>Mailing List Plugin</li>
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
                  <p className='text-[28px]'>$4,999</p>
                  <p>Gold Package</p>
                </div>
                <div className='flex flex-row'>
                <div className='w-[1.5px] h-full bg-white/70 mr-3'></div>
                  <div className='flex flex-col'>
                    <p className='font-medium text-[18px] mb-2'>For Example:</p>
                    <p className='font-medium text-[20px]'>3 Page Site $5,899</p>
                    <p className='text-default-400 text-[13px]'>($300 per additional website page)</p>

                    <p className='font-medium text-[20px] mt-2'>5 Page Site $6,499</p>
                    <p className='text-default-400 text-[13px]'>($300 per additional website page)</p>

                    <p className='font-medium text-[20px] mt-2'>10 Page Site $7,999</p>
                    <p className='text-default-400 text-[13px]'>($300 per additional website page)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          <div className='p-4 sm:bg-[#191919] xl:flex-none xl:items-start flex flex-col items-center' alt='item'>
            <h4 className='text-h3 text-nuetral-300'>Shopify Platinum</h4>
            <p className='mt-2 max-w-[500px] text-center'>We will build a website from scratch with mock-ups on a Shopify CMS based on your requirements for ultimate success</p>
            <div className='mt-4'>
              <p className='text-[18px] font-medium mt-4'>Platinum Package Details</p>
              <div className='flex flex-col gap-1 mt-2'>
                <div className='ml-4'>
                  <li>Website from Scratch</li>
                  <li>Shopify CMS Compatible Front End</li>
                  <li>2 Page Custom Mock-up</li>
                  <li>1 Hour Brainstorm</li>
                  <li>Mobile Responsive</li>
                  <li>Social Media Integration</li>
                  <li>Dynamic Page Link Previews For Items & Pages</li>
                  <li>Dynamic Shopify SEO (Every Page)</li>
                  <li>6 Custom Icons</li>
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
                  <p className='text-[28px]'>$7,499</p>
                  <p>Platinum Package</p>
                </div>
                <div className='flex flex-row'>
                <div className='w-[1.5px] h-full bg-white/70 mr-3'></div>
                  <div className='flex flex-col'>
                    <p className='font-medium text-[18px] mb-2'>For Example:</p>
                    <p className='font-medium text-[20px]'>3 Page Site $14,99</p>
                    <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>

                    <p className='font-medium text-[20px] mt-2'>5 Page Site $15,899</p>
                    <p className='text-default-400 text-[13px]'>($150 per additional website page)</p>

                    <p className='font-medium text-[20px] mt-2'>10 Page Site $17,999</p>
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

        <div className="" alt='faq'>
            <div className="w-full min-w-[90vw] text-sub xl:px-[20vw] flex flex-col items-center" alt='item' id='scrollto'>
          <Accordion key='1' className="w-full" alt='holder' defaultExpandedKeys='1'>
              <AccordionItem key="2" aria-label={`Package-1`} title={
                <div className="text-white items-center justify-between flex flex-row">
                  <div>
                    <h5 className='text-[18px]'>Title</h5>
                  </div>
                  <div>
                    <p className='underline-animation-white'>View Stages</p>
                  </div>
                </div>
              }>
              </AccordionItem>

          </Accordion>
        </div>
        </div>

      </div>,
  }
};

