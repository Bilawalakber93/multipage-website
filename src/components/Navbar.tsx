"use client";
import Link from 'next/link';
import React from 'react'
import kids from '../app/Kids/Page'

const Navbar = () => {
  return (
    <div className='bg-gray-200'>
      <nav className='bg-gray-600 text-white h-auto sm:h-12 md:h-16 lg:h-16 py-3 px-4 flex flex-col sm:flex-row justify-between items-center'>
        <div className='flex items-center space-x-2 mb-4 sm:mb-0'>
          <img 
          src='/logo.png'
          alt='logo'
          className='w-10 h-10'
          />
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-2xl font-serif font-semibold'>
                <a href="#!">Shop-O-Mind</a>
            </h1>
        </div>
        <div className='w-full sm:w-auto mb-4 sm:mb-0'>
            <ul className=" flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <li><Link href="/" className="hover:text-black">Home</Link></li>
                <li><Link href="/Mens" className="hover:text-black">Mens</Link></li>
                <li><Link href="/Womens" className="hover:text-black">Womens</Link></li>
                <li><Link href="/Kids" className="hover:text-black">Kids</Link></li>
            </ul>
        </div>
        <div className='w-full sm:w-auto'>
            <ul className="flex  flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2">
                <li><Link href="#!" className="hover:text-black">Cart</Link></li>
                <li><button><Link href="#!" className="hover:text-black">Login</Link></button></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
