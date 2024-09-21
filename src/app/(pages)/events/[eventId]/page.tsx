import DetailedEvent from '@/pagesContain/Events/sections/DetailedEvent'
import React from 'react'

const page = ({params}:{params:{eventId:string}}) => {
  return (
   <>
   <DetailedEvent params={params.eventId}/>
   </>
  )
}

export default page
