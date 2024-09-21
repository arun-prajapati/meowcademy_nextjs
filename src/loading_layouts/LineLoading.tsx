import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const LineLoading = () => {
  return (
    <>
     <div className="pt-24 container flex flex-col gap-4">
      <Skeleton className="h-10"/>
      <Skeleton className="h-10"/>
      <Skeleton className="h-10"/>
      <Skeleton className="h-10"/>
      <Skeleton className="h-10"/>
      <Skeleton className="h-10"/>
      <Skeleton className="h-10"/>
      <Skeleton className="h-10"/>
      <Skeleton className="h-10"/>
      <Skeleton className="h-10"/>
    </div>
    </>
  )
}

export default LineLoading