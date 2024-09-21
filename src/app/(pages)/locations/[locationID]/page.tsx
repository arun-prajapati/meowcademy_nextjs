import DetailedLocation from '@/pagesContain/Location/sections/DetailedLocation'
import React from 'react'

const page = ({params}:{params:{locationID:string}}) => {
  return (
<DetailedLocation params={params.locationID}/>
)
}

export default page