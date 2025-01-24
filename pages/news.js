import RootLayout from "../styles/RootLayout";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page({ blogs: initialBlogs, totalPages: initialTotalPages }) {
  const [blogs, setBlogs] = useState(initialBlogs || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(initialTotalPages || 1);

  // Fetch blog posts based on the page number
  async function fetchPosts(page = 1, limit = 10) {
    const offset = (page - 1) * limit;

    try {
      const response = await fetch(
        `/api/get-blogs?page=${page}&limit=${limit}`, // Call the custom API route
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
          cache: "no-store", // Avoid caching
        }
      );

      if (!response.ok) {
        console.error("Request failed:", response.status, response.statusText);
        return { posts: [], total: 0 }; // Return empty array and total count on failure
      } else {
        const data = await response.json(); // Parse JSON response
        return { posts: data.data || [], number_pages: data.number_pages || 0 }; // Return posts and total count
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      return { posts: [], total: 0 }; // Return empty array and total count on error
    }
  }

  // Update the state when currentPage changes
  useEffect(() => {
    async function fetchAndUpdate() {
      const { posts, number_pages } = await fetchPosts(currentPage);
      setBlogs(posts); // Update blogs state if fetched
      setTotalPages(number_pages); // Update total pages
    }

    fetchAndUpdate();
  }, [currentPage]); // This will run when currentPage changes

  // Helper function to format date
  const formatDate = ({ date }) => {
    if (date) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      return new Date(date).toLocaleDateString("en-US", options);
    }
    return "N/A";
  };

  return (
    <RootLayout canon_url={`/news`} meta_description="News" pageTitle="News">
      <div className="bg-white px-[5vw] p-6">
        <h1 className="text-title text-black">News</h1>
        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link href={`/news/${blog.slug}`} key={blog?.id} className="group">
              {blog?.image_url && (
                <div className="overflow-hidden rounded-[1px] ">
                  <Image
                    src={blog?.image_url}
                    alt={blog?.title}
                    priority
                    width={750}
                    height={300}
                    className="w-full h-[230px] group-hover:scale-110 transition-all duration-300 object-cover rounded-[1px]"
                  />
                </div>
              )}
              <div className="w-auto h-[1px] bg-zinc-200 mt-2"/>
              <h2 className="mt-1 text-h3 text-black">{blog?.name}</h2>

              <div className="flex flex-row gap-4 items-end mt-3">
                <p>{blog.author}</p>
                <p className="text-default-400 text-[14px]">
                  {formatDate({ date: blog?.created_at })}
                </p>
              </div>

              <h3 className="text-[18px] mt-1">{blog.summary}</h3>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <a
            href="#"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={`px-4 py-2 border rounded ${
              currentPage <= 1 ? "text-gray-400 pointer-events-none" : ""
            }`}
          >
            Previous
          </a>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <a
            href="#"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className={`px-4 py-2 border rounded ${
              currentPage >= totalPages ? "text-gray-400 pointer-events-none" : ""
            }`}
          >
            Next
          </a>
        </div>
      </div>
    </RootLayout>
  );
}

// Server-side data fetching using getServerSideProps
export async function getServerSideProps({ query }) {
  const page = parseInt(query.page || "1", 10); // Default to page 1
  const limit = 10; // Number of posts per page

  try {
    // Fetch data from the API route for the first page (or whichever page is requested)
    const response = await fetch(
      `http://localhost:3000/api/get-blogs?page=${page}&limit=${limit}`
    ); // Adjust the limit or page as necessary
    const data = await response.json();

    return {
      props: {
        blogs: data.data || [],
        totalPages: data.number_pages || 1, // Pass total pages for pagination
      },
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      props: {
        blogs: [],
        totalPages: 0, // In case of error, set totalPages to 0
      },
    };
  }
}
