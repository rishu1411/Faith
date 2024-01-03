import React from 'react'
import Image from 'next/image'
import photo from '../Images/img.jpg'
import Link from 'next/link'
import Drawer from './Drawer'

export default function Navbar() {
  return (
    <>
     
      <nav className='flex items-center h-16 border-b-2 shadow-md justify-between sm:justify-normal'> 
        <div className='mx-8 '>
          <Image src={photo} height={50} alt='Deity' className='rounded-full'/>
        </div>
        <ul className='hidden sm:flex justify-center gap-x-4 items-center content-between text-violet-500 font-medium '>
          <li className='hover:underline underline-offset-4 cursor-pointer'><Link href='#About'>About</Link> </li>
          <li className='hover:underline underline-offset-4 cursor-pointer'><Link href='#Instructor'>Instructor</Link></li>
          <li className='hover:underline underline-offset-4 cursor-pointer'><Link href='#Reviews'>Reviews</Link></li>
        </ul>
        <Drawer/>
        </nav>
       
      </>
  )
}
