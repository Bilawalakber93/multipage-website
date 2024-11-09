import React from 'react'
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter, FaTiktok} from "react-icons/fa";
import Link from 'next/link';
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-300 py-8 px-10 text-black flex justify-around'>
        <div className='container mx-auto grid grid-cols-3 md:grid-cols-3 gap-8'>
            <div>
                <h3 className='text-2xl font-bold mb-4 underline'>About Shop-O-Mind</h3>
                <ul className='text-m'> 
                    <li>Offering Flexible Payment Option </li>
                    <li>Customer Engagement</li>
                    <li>Logistics and Delivery</li>
                    <li>Customer Engagement</li>
                </ul>
            </div>
            <div>
            <h3 className='text-2xl font-bold mb-4 underline'>Policy</h3>
                <ul className='text-m'> 
                    <li> Return Policy</li>
                    <li> Terms & Condition</li>
                    <li> Privacy</li>
                    <li> Pre Owned Warranty</li>
                    <li> Price Beating</li>
                </ul>
            </div>
            <div> 
            <h3 className='text-2xl font-bold mb-4 underline'> Social Links </h3>
            <div className='flex space-x-4 mb-4'> 
                <Link href="#"><FaFacebookF className='text-white w-6 h-6 rounded-full bg-blue-800 pt-1 pb-1'/></Link>
                <Link href="#"><FaYoutube className='text-white w-6 h-6 rounded-full bg-red-600 pt-1 pb-1' /></Link>
                <Link href="#"><FaInstagram className='instagram text-white w-6 h-6 rounded-full pt-1 pb-1'/></Link>
                <Link href="#"><FaTwitter className='text-white w-6 h-6 rounded-full bg-blue-400 pt-1 pb-1' /></Link>
                <Link href="#"><FaTiktok className='text-white w-6 h-6 rounded-full bg-black pt-1 pb-1'/></Link>
            </div>
            <a href="mailto:shop-o-mind@gmail.com" className='text-blue-800 underline flex items-center gap-4'>
                <MdOutlineMail className='size-6'/>
                shop-o-mind@gmail.com </a>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
