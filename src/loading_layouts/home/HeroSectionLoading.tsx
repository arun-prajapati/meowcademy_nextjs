import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const HeroSectionLoading = () => {
  return (
   <>
    {/* <div className="pt-24">
        <div className="w-full relative">
          <Skeleton className="h-svh w-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-white text-center">
              <Skeleton className="h-10 lg:h-16 w-3/4 lg:w-1/2 mb-6" />
              <Skeleton className="h-10 lg:h-16 w-3/4 lg:w-1/2 mb-10 mt-3" />
              <Skeleton className="h-6 lg:h-8 w-3/4 lg:w-1/2 mb-4" />
              <Skeleton className="h-5 lg:h-7 w-1/2 lg:w-1/3" />
            </div>
          </div>
        </div>
      </div> */}
    
      <div className="container  pt-24">
        <div className="flex flex-col-reverse items-center xl:flex-row justify-between gap-5">
          <div className="h-[500px] flex flex-col w-1/2 rounded-2xl">

          <Skeleton className=" h-7" />
          <Skeleton className=" h-7 mt-5" />
          <Skeleton className=" h-20 mt-5" />
          <Skeleton className=" h-7 mt-5" />
          </div>


          <div className="h-[500px] flex-1 flex justify-center items-center rounded-2xl">
            <Skeleton className="w-[500px] h-[500px] rounded-2xl" />
          </div>
        </div>
      </div>
   </>
  )
}

export default HeroSectionLoading
