'use client'
import { MenuIcon, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  //   useEffect(() => {
  //   document.body.style.overflow = IsMenuOpen ? "hidden" : "auto";
  // }, [IsMenuOpen]);
  let nav_data = [
    {
      link: '/features',
      name: 'Features'
    },
    {
      link: '/testimonial',
      name: 'Testimonials'
    },
    {
      link: '/different',
      name: 'About Product'
    },
    {
      link: '#contact',
      name: 'Contact Us'
    },

  ]

  console.log(IsMenuOpen);

  return (
    <div className='flex justify-between w-full h-full items-center'>
      <Link href='/' className='p-6'>
        <Image src='/images/logo.png' alt='logo' width={64} height={64} />
      </Link>
      <nav className=' w-auto h-auto flex justify-center items-center'>
        <ul className=' w-auto h-auto sm:flex hidden justify-center gap-3 items-center'>
          {
            nav_data.map(({ name, link }, index) => (
              <li key={index} className='text-primary-foreground font-sans text-base p-2'>
                <Link href={link}> {name}</Link>
              </li>
            ))
          }
        </ul>
        <div onClick={() => setIsMenuOpen(true)} className='menu-icon w-auto h-auto sm:hidden flex'>
          <MenuIcon size={40} color='#fff' />
        </div>
        <div
          className={`fixed top-0 right-0 z-50 h-screen w-[60%] sm:w-[40%] bg-white transform transition-transform duration-300 ease-in-out ${IsMenuOpen ? 'translate-x-0' : 'translate-x-100'} sm:hidden`}
        >

          <ul className="w-full h-full flex gap-3 p-3 flex-col">
            <li onClick={() => setIsMenuOpen(false)}
              className="menu-icon w-full h-auto p-2 flex justify-end"
            >
              <X size={40} />
            </li>
            {nav_data &&
              nav_data.map((item, index) => (
                <Link key={index} href={item.link}>
                  <li
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                    className="px-3 py-3 border-b xs:text-xl 2xs:text-lg text-base text-primary font-sans border-primary/20 text-left w-full h-auto"
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Header
