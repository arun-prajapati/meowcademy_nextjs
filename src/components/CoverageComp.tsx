import React from 'react'

const CoverageComp = ({num,desc}:{num:number,desc:string}) => {
  return (
    <>
     <div className='border border-[#EEEEEE] py-6 px-9 rounded-xl flex gap-4 items-center text-sm lg:text-[16px]'>
        <div className='text-4xl lg:text-5xl font-extrabold'>{num + 1}</div>
        <div>
          <p>{desc}
          </p></div>
      </div>
    </>
  )
}

export default CoverageComp