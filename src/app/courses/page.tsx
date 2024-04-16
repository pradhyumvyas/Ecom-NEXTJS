"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import courseData from "@/data/music_courses.json";

interface courseDataType {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}
function Page() {

  const [courses, setCourse] = useState(courseData.courses)
  const filterCourses =(e:string)=>{
    let courses = courseData.courses.filter((course:courseDataType)=>course.title.toLowerCase().includes(e.toLowerCase()))
    setCourse(courses)
    console.log(e)
  }
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <div className="flex justify-between mx-16">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8">
          All Courses {courses.length}
        </h1>
        <div className=" mr-24 ">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-xl bg-white dark:bg-black dark:text-white text-black text-2xl font-bold"
            onChange={(e) => filterCourses(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {courses.map((course: courseDataType) => (
          <CardContainer className="inter-var mx-4 my-1" key={course.id}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="#"
                  target="__blank"
                  className="px-4 py-1 rounded-xl text-xs font-normal dark:text-white"
                >
                  Buy now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  {course.price}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default Page;
