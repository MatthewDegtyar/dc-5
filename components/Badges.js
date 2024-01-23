import React from 'react';
import Image from 'next/image';

const Badges = () => {
  return (
    <div className='mt-2 p-4 lg:p-0 flex flex-row overflow-x-auto bg-black scrollbar-hidden no-scrollbar'>
      <div className='w-full gap-4 lg:p-4 lg:px-16 flex flex-row items-center sm:justify-between bg-black h-[15vh]'>
        <Image src='/bdg/shop2.png' width={125} height={75} alt="company's logo" />
        <Image src='/bdg/wix.png' width={100} height={50} alt="company's logo" />
        <Image src='/bdg/wordp.png' width={175} height={125} alt="company's logo" />
        <Image src='/bdg/stripe.png' width={125} height={75} alt="company's logo" />
        <Image src='/bdg/squarespace.png' width={50} height={50} alt="company's logo" />
      </div>
    </div>
  );
};

export default Badges;
