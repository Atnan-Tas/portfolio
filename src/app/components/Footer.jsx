import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link href={'/'}>
        <Image src={'/images/logo_atn.svg'}
              alt='logo atnan'
              className='cursor-pointer'
              width={60}
              height={60}
              >
        </Image>
        </Link>
        <Link href={'https://instagram.com/atnanzer/'}>
        <Image src={'/images/insta_icon.svg'}
              alt='insta atnan'
              className='cursor-pointer'
              width={30}
              height={30}
              >
        </Image>
        </Link>
        <Link href={'https://www.linkedin.com/in/atnan-tas-8a4b82257/'}>
        <Image src={'/images/linkedin_icon.svg'}
              alt='linkedin atnan'
              className='cursor-pointer'
              width={30}
              height={30}
              >
        </Image>
        </Link>
                
        <div className="flex flex-col">
          <p className="text-slate-600">atnan.tas.pro@gmail.com</p>
          <p className="text-slate-600">07.83.14.73.72</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;