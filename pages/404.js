import React from "react";
import Link from "next/link";
import RootLayout from "../styles/RootLayout";

export default function NotFound() {

  return (
    <RootLayout canon_url={`/404`} meta_description='Page Not Found' pageTitle='404'>
      <div className="w-[100vw] bg-black h-[40vh] flex-col flex items-center justify-center text-white">
          <h1 className="text-title">404</h1>
          <h2 className="text-h3 mt-4">Page Not Found</h2>
          <Link href='/'alt='' className='py-2 px-8 bg-none rounded-[1px] border-2 outline-white group hover:bg-white mt-8'>
            <p className='text-white group-hover:text-black underline-animation'>Back To Home</p>
          </Link>
        </div>
    </RootLayout>
  );
}


