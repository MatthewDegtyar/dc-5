import RootLayout from '../styles/RootLayout'
import React, {useState,useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '../sanity/sanity-utils';
import { Skeleton } from '@nextui-org/react';

export default function Page({ projects: initialProjects }) {
  const [projects, setProjects] = useState(initialProjects || []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const formatDate=({date})=>{
    if (date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

      const formatted = new Date(date).toLocaleDateString('en-US', options);
      return formatted;
    }
    return 'N/A';

  }
  
  return (
    <RootLayout canon_url={`/news`} meta_description='News' pageTitle='News'>
      <div className='bg-white px-[5vw] p-6'>
        <h1 className='text-title text-black'>News</h1>
        <div className="mt-5  grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project) => (
          <Link href={`/news/${project.slug}`} key={project?._id} className="group">
            {project?.image && (
              <div className='overflow-hidden rounded-[1px] bg-black'>
                <Image
                  src={project?.image}
                  alt={project?.name}
                  priority
                  width={750}
                  height={300}
                  className="w-full h-[230px] group-hover:scale-110 transition-all duration-300 object-cover rounded-[1px]"
                />
              </div>
            )}
            <div className='flex flex-row gap-4 items-end mt-2'>
              <p className=''>{project.author}</p>
              <p className='text-default-400 text-[14px]'>{formatDate({date: project?._createdAt })}</p>
            </div>


            <h2 className="mt- text-h3 text-black">{project?.name}</h2>
            <h3 className='text-[18px]'>{project.tagline}</h3>
          </Link>
        ))}
        </div>
      </div>
    </RootLayout>
  )
}

export async function getServerSideProps() {
  try {
    const projectsData = await getProjects();
    return { props: { projects: projectsData } };
  } catch (error) {
    console.error('Error fetching projects:', error);
    return { props: { projects: [] } };
  }
}