import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import RootLayout from "../../styles/RootLayout";
import styles from "../../styles/slug.module.css";

export default function Project({ project }) {
  const [formattedDate, setFormattedDate] = useState();

  useEffect(() => {
    if (project?.created_at) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      const formatted = new Date(project?.created_at).toLocaleDateString(
        "en-US",
        options
      );
      setFormattedDate(formatted);
    }
  }, [project?.created_at]);

  if (!project || !project?.title) {
    return (
      <RootLayout pageTitle="404">
        <div className="w-[100vw] bg-black h-[40vh] flex-col flex items-center justify-center text-white">
          <h1 className="text-title">404</h1>
          <h2 className="text-h3 mt-4">Page Not Found</h2>
          <Link
            href="/news"
            alt=""
            className="py-2 px-8 bg-none rounded-[1px] border-2 outline-white group hover:bg-white mt-8"
          >
            <p className="text-white group-hover:text-black underline-animation">
              Back To News
            </p>
          </Link>
        </div>
      </RootLayout>
    );
  }

  return (
    <RootLayout
      canon_url={`news/`}
      meta_description={"Deggie News"}
      pageTitle={"Deggie News"}
    >
      <div className="text-black flex flex-col items-center bg-white py-2">
        <div
          className="absolute text-white w-[90vw] h-[50vh]"
          alt="descr holder"
        >
          <Image
            placeholder="blur"
            blurDataURL={`data:image/jpeg;base64,/img/bg1.webp`}
            src={project?.image_url}
            alt={project?.title}
            width={1400}
            height={500}
            className="w-full bg-black rounded-[1px] z-10 h-[50vh] object-cover absolute"
          />
          <div
            className="w-[90vw] flex flex-col overflow-hidden items-center place-content-center left-0 backdrop-blur-[1px] z-40 bg-[#191919]/60 bottom-0 px-8 absolute gap-4 p-4"
            alt="header"
          >
            <div className="lg:w-[60vw] w-[90vw] px-2">
              <div className="flex flex-row gap-16">
                <Image
                  className="rounded-full w-[100px] hover:scale-[95%] transition-all duration-300 h-[100px]"
                  src="/img/DClogo1024.webp"
                  width={75}
                  height={75}
                  priority
                  alt="default pic"
                />

                <div className="flex flex-col items-start">
                  <p className="text-white">{project?.author}</p>

                  <h1 className="text-h3-g">{project?.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[50vh]" alt="spacer for header"></div>

        <div className="md:w-[60vw] w-[90vw] text-default-500 mt-8">
          <div className="w-full flex flex-row items-center justify-between mb-2">
            <p>
              /{" "}
              <Link href="/news" alt="/news">
                News
              </Link>{" "}
              / {project?.slug}
            </p>
            <p className="text-default-500 text-start mt-1">{formattedDate}</p>
          </div>
          <div className="h-[1.5px] w-full bg-default-500"></div>
        </div>

        <div
          className={`${styles.news} text-black mt-5 text-start md:w-[60vw] w-[90vw]`}
        >
          <div
            className="mt-8 blog-content"
            dangerouslySetInnerHTML={{ __html: project?.content }}
          />{" "}
        </div>

        <div className="md:w-[60vw] w-[90vw] text-default-500 mt-8" alt="links">
          <div className="h-[1.5px] w-full bg-default-500 mb-2"></div>
        </div>

        {project?.url && (
          <Link
            href={project?.url}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline-animation2"
          >
            View Website
          </Link>
        )}
      </div>
    </RootLayout>
  );
}

// Fetch an individual project by ID
async function getProject(id) {
  try {
    const response = await fetch(
      `http://localhost:3001/api/get-blog?slug=${id}`, // Use the slug for the query
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch blogpost:", response.statusText);
      return null;
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

// Fetch project data during server-side rendering
export async function getServerSideProps({ params, res }) {
  try {
    const project = await getProject(params.slug);

    if (!project) {
      res.statusCode = 404; // Return 404 if no project is found
      return { props: {} };
    }

    return {
      props: {
        project,
      },
    };

  } catch (error) {
    console.error("Error loading content:", error);
    res.statusCode = 500;
    return { props: {} };
  }
}
