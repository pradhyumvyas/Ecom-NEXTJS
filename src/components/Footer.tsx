import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-gray-400 py-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
         <div>
            <h3 className='text-xl font-semibold mb-4'>About Us</h3>
            <ul>
               <li className='mb-2'>Our Story</li>
               <li className='mb-2'>Our Team</li>
               <li className='mb-2'>Careers</li>
               <li className='mb-2'>Press</li>
            </ul>
         </div>
         <div>
            <h3 className='text-xl font-semibold mb-4'>Courses</h3>
            <ul>
               <li className='mb-2'>Music Production</li>
               <li className='mb-2'>Guitar</li>
               <li className='mb-2'>Piano</li>
               <li className='mb-2'>Vocals</li>
            </ul>
         </div>
         <div>
            <h3 className='text-xl font-semibold mb-4'>Resources</h3>
            <ul>
               <li className='mb-2'>Blog</li>
               <li className='mb-2'>Podcast</li>
               <li className='mb-2'>Newsletter</li>
            </ul>
         </div>
         <div>
            <h3 className='text-xl font-semibold mb-4'>Contact</h3>
            <ul>
               <li className='mb-2'>Support</li>
               <li className='mb-2'>Contact Us</li>
            </ul>
         </div>
      </div>
      <p className='text-center text-xs pt-8'>2024 Ed-Tech All rights reserved</p>
    </div>
  )
}

export default Footer