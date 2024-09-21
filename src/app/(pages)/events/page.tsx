import Events from '@/pagesContain/Events'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Exciting Educational Events at Meowcademy | Join Us Now",
  description: "Stay updated on upcoming educational events. Join Meowcademy’s interactive workshops, webinars, and more. Don’t miss out!",
  alternates:{
    canonical:'/events'
  }
};
const page = () => {
  return (
   <Events/>
  )
}

export default page