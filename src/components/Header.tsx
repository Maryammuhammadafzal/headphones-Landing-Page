import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  let nav_data = [
    {
      link: '/',
      name: 'Home'
    },
    {
      link: '/',
      name: 'Features'
    },
    {
      link: '/',
      name: 'About Product'
    },
    {
      link: '/',
      name: 'Contact Us'
    },

  ]
  return (
    <div className='flex justify-between w-full h-full items-center'>
      <Link href='/' className='p-6'>
        <Image src='/images/logo.png' alt='logo' width={64} height={64} />
      </Link>
      <nav className=' w-auto h-auto flex justify-center  items-center'>
        <ul className=' w-auto h-auto sm:flex hidden justify-center gap-3 items-center'>
          {
            nav_data.map(({ name, link }, index) => (
              <li key={index} className='text-primary-foreground font-sans text-base p-2'>
                <Link href={link}> {name}</Link>
              </li>
            ))
          }
        </ul>
        <div className='menu-icon w-auto h-auto sm:hidden flex'>
          <MenuIcon size={40} color='#fff'/>
        </div>
      </nav>

    </div>
  )
}

export default Header
