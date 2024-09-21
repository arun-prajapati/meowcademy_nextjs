import OnlineTuition from '@/pagesContain/OnlineTuition'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Expert Online Tuition for All Levels",
  description: "Access top-quality online tuition across various subjects and levels. Learn from experienced tutors anytime, anywhere.",
  alternates:{
    canonical:'/online-tuition'
  }
};

const page = () => {
  return (
   <OnlineTuition/>
  )
}

export default page