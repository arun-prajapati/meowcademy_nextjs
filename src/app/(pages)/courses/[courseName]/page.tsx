import Courses from '@/pagesContain/Courses'
import { Metadata } from 'next';
import React from 'react'

export function generateMetadata({params}:{params:{courseName:string}}): Metadata {
  return {
    
    alternates: {
      canonical: `/courses/${params.courseName}`,
    },
  };
}
const page = ({params}:{params:{courseName:string}}) => {
  return (
<Courses params={params.courseName}/>
)
}

export default page