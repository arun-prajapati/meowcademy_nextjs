import MeowTutors from '@/pagesContain/MeowTutors'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "Meet Our Expert Tutors | Personalized Learning at Meowcademy",
  description: "Discover our team of expert tutors dedicated to personalized learning. Enhance your education with Meowcademy’s best.",
  alternates:{
    canonical:'/meow-tutors'
  }
};
const page = () => {
  return (
    <MeowTutors/>
  )
}

export default page