'use client'
import React from 'react'
import courseData from "../data/music_courses.json"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface FeaturedCardType{
   id:number,
   title:string,
   slug:string,
   description: string,
   price:number,
   instructor: string,
   isFeatured:boolean ,
   image?:string
}

function FeaturedSection() {
  const featuredCourse =  courseData.courses.filter((course:FeaturedCardType)=>course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
      <div className='text-center'>
         <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Course</h2>
         <p className="">Learn with the Best</p>
      </div>
      <div className='mt-10'>
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
            {featuredCourse.map((course:FeaturedCardType)=>(
               <div key={course.id} className="flex justify-center">
                  <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
               {/* <Image
                 src={`/jordans.webp`}
                 alt="jordans"
                 height="400"
                 width="400"
                 className="object-contain"
               /> */}
               <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                 {course.title}
               </p>
            
               <p className="text-sm text-neutral-600 dark:text-neutral-400">
                 {course.description}
               </p>
               <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                 <span>Buy now </span>
                 <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                   {course.price}
                 </span>
               </button>
               </BackgroundGradient>
            </div>
            ))}
         </div>
      </div>
      <div className='mt-20 text-center'>
         <Link href={"/courses"}>View All courses</Link>
      </div>
    </div>
  )
}

export default FeaturedSection