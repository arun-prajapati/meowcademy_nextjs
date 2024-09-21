
const StatisticsCard = ({count,text}:{count:string,text:string}) => {
  return (
    <>

    <div className='px-6 py-8 md:py-12 border rounded-md'>
        <h2 className='text-primaryBlue text-3xl  font-bold min-h-20 '>{count}</h2>
        <p className=' font-semibold mt-5 '>{text}</p>
    </div>
</>
  )
}

export default StatisticsCard
