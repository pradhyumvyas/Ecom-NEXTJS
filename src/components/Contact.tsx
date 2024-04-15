import React from 'react'
import { Meteors } from '@/components/ui/meteors'
import {SignupFormDemo} from '@/components/ContactUsForm'

function Contact() {
  return (
<div className="">

      <div className="h-screen w-full relative ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          {/* Meaty part - Meteor effect */}
          <SignupFormDemo />
          <Meteors number={100} />
        </div>
      </div>
    </div>
  )
}

export default Contact