import Image from "next/image"

type Hero_Section={
    std_name:string,
    description:string,
    img:string
}


const HeroSection = ({std_name,description,img}:Hero_Section) => {
  return (
    <>
     <div className="flex flex-col-reverse items-center xl:flex-row justify-between gap-5">
      <div className="items-center text-center xl:max-w-[560px] xl:text-left xl:items-start flex flex-col gap-5 justify-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-7">{std_name}</h1>
        <p className=" md:text-xl font-normal mb-6 ">{description}</p>
        <a href="#explore">
          <button className=" button flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              id="img"
            >
              <g clipPath="url(#clip0_396_1790)">
                <path
                  d="M2 3.993C2.00183 3.73038 2.1069 3.47902 2.29251 3.29322C2.47813 3.10742 2.72938 3.00209 2.992 3H21.008C21.556 3 22 3.445 22 3.993V20.007C21.9982 20.2696 21.8931 20.521 21.7075 20.7068C21.5219 20.8926 21.2706 20.9979 21.008 21H2.992C2.72881 20.9997 2.4765 20.895 2.29049 20.7088C2.10448 20.5226 2 20.2702 2 20.007V3.993ZM12 5V19H20V5H12ZM13 7H19V9H13V7ZM13 10H19V12H13V10Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_396_1790">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Explore programmes
          </button>
        </a>
      </div>
      <div className=" h-[500px] flex-1     flex justify-center  items-center  rounded-2xl ">
        <Image width={500} height={500} src={img} alt={std_name} className="  rounded-2xl object-cover w-[500px] h-[500px]" priority/>
      </div>
    </div>
    </>
  )
}

export default HeroSection
