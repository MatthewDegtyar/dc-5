import { getProject } from "../../sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"
import React, {useEffect, useState} from "react";
import Link from "next/link";
import RootLayout from "../../styles/RootLayout";

export default function Project({ project }) {

  const [formattedDate, setFormattedDate] = useState();

  useEffect(() => {
    if (project._createdAt) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

      const formatted = new Date(project._createdAt).toLocaleDateString('en-US', options);
      setFormattedDate(formatted);
    }
  }, [project._createdAt]);

  if (!project) {
    return (
      <RootLayout pageTitle='404'>
        <div className="w-[100vw] bg-black h-[40vh] flex-col flex items-center justify-center text-white">
          <h1 className="text-title">404</h1>
          <h2 className="text-h3 mt-4">Page Not Found</h2>
          <Link href='/news'alt='' className='py-2 px-8 bg-none rounded-[1px] border-2 outline-white group hover:bg-white mt-8'>
            <p className='text-white group-hover:text-black underline-animation'>Back To News</p>
          </Link>
        </div>
      </RootLayout>
    )
  }

  return (
    <RootLayout canon_url={`news/${project.slug}`} meta_description={project.tagline} pageTitle={project.name} imageUrl={project.image}>
      <div className="text-black flex flex-col items-center bg-white py-8">
        <div className="absolute text-white w-[90vw] h-[50vh] " alt='descr holder'>
          <Image src={project.image} alt={project.name} width={1920} height={1080} className="w-full rounded-[1px] z-10 h-[50vh] object-cover absolute" />
          <div className=" w-[90vw] flex flex-col overflow-hidden items-center place-content-center left-0 backdrop-blur-[1px] z-40 bg-[#191919]/60 bottom-0 px-8 absolute gap-4 p-4" alt='header'>
            <div className="md:w-[60vw] w-[90vw]">
              <div className="flex flex-row gap-16">
                    <Image
                      className="rounded-full w-[100px] hover:scale-[95%] transition-all duration-300 h-[100px] resize-none "
                      src='/img/DClogo1024.png'
                      width={75}
                      height={75}
                      priority
                      alt='default pic'
                    />

                <div className="flex flex-col items-start">
                {project.author_link ? (        
                    <Link href={project.author_link} alt={project.author_link}><p className="text-default-200 text-[20px] font-medium underline-animation-white2">{project.author}</p></Link>
                    ) : (
                      <p className="text-white">author: {project.author}</p>
                    )}            
                  <h1 className="text-title ">{project.name}</h1>

              <h2 className="text-h3 mt-2">{project.tagline}</h2>

                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-[50vh]" alt='spacer for header'></div>

        <div className="md:w-[60vw] w-[90vw] text-default-500 mt-8">
          <div className="w-full flex flex-row items-center justify-between mb-2">
            <p >/ <Link href='/news'alt='/news'>News</Link> / {project.slug}</p>
            <p className="text-default-500 text-start mt-1">{formattedDate}</p>
          </div>
          <div className="h-[1.5px] w-full bg-default-500"></div>
        </div>

        <div className="text-lg text-black mt-5 text-start md:w-[60vw] w-[90vw]">
          <PortableText value={project.content} />
        </div>

        <div className="md:w-[60vw] w-[90vw] text-default-500 mt-8" alt='links'>
          <div className="h-[1.5px] w-full bg-default-500 mb-2"></div>
          <div className="w-full flex flex-row items-center justify-between mb-2 text-start">
           <PortableText value={project.closing} />
          </div>
        </div>

        {project.url &&
        <Link href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="text-black underline-animation2">
          View Website
        </Link>
}
      </div>


    </RootLayout>
  );
}

export async function getServerSideProps({ params }) {
  // Fetch data using getProject or any other data-fetching method
  const project = await getProject(params.slug);
  console.log(project);
  // Pass the fetched data as props
  return {
    props: {
      project,
    },
  };
}
