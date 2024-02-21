"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
  { title: "A propos", path: "#apropos" },
  { title: "Mes Travaux", path: "#travaux" },
  { title: "Contact", path: "#contact" },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>   
        <div className='flex flex-wrap items-center justify-between mx-auto p-4 py-2'>
              <Link href={'/'} className='text-5xl text-white font-semibold'>
              <Image src={'/images/logo_atn.svg'}
              alt='logo atnan'
              className='cursor-pointer'
              width={60}
              height={60}
              >
              </Image>
              </Link>
              <div className="mobile-menu block md:hidden">
               {!navbarOpen ? (
               <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
               >
               <Bars3Icon className="h-5 w-5" />
               </button>
                          ) : (
               <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
               >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
              <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-5'>
                {
                  navLinks.map((link, index) => (
                    <li className='flex space-x-8 font-bold text-xl' key={index}>
                     <NavLink href={link.path} title={link.title} />   
                    </li>
                  ))
                }
              </ul>
            </div>
        </div>
        {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  )
}

export default Navbar