import { CourseDetailType } from '@/types/type'
import Image from 'next/image'
import React from 'react'

const HeroSection = ({sub}:{sub:CourseDetailType}) => {
  return (
   <>
     <div className="container mt-10">
              <div className="flex flex-col-reverse items-center xl:flex-row justify-between gap-5">
                <div className="items-center text-center xl:max-w-[560px] xl:text-left xl:items-start flex flex-col gap-5 justify-center">
                  <h1 className="text-3xl md:text-5xl font-bold mb-7">
                    {sub.full_subject_name}
                  </h1>
                  <div className="flex gap-3 text-[#A0A0A0] font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      id="img"
                    >
                      <g clipPath="url(#clip0_396_5888)">
                        <path
                          d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM8.5 14H14C14.1326 14 14.2598 13.9473 14.3536 13.8536C14.4473 13.7598 14.5 13.6326 14.5 13.5C14.5 13.3674 14.4473 13.2402 14.3536 13.1464C14.2598 13.0527 14.1326 13 14 13H10C9.33696 13 8.70107 12.7366 8.23223 12.2678C7.76339 11.7989 7.5 11.163 7.5 10.5C7.5 9.83696 7.76339 9.20107 8.23223 8.73223C8.70107 8.26339 9.33696 8 10 8H11V6H13V8H15.5V10H10C9.86739 10 9.74021 10.0527 9.64645 10.1464C9.55268 10.2402 9.5 10.3674 9.5 10.5C9.5 10.6326 9.55268 10.7598 9.64645 10.8536C9.74021 10.9473 9.86739 11 10 11H14C14.663 11 15.2989 11.2634 15.7678 11.7322C16.2366 12.2011 16.5 12.837 16.5 13.5C16.5 14.163 16.2366 14.7989 15.7678 15.2678C15.2989 15.7366 14.663 16 14 16H13V18H11V16H8.5V14Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_396_5888">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    {sub.price} SGD / month
                  </div>
                  <p className="text-xl font-normal mb-6 mt-6">
                    {sub.description}
                  </p>

                  <div className="mt-4 flex flex-col md:flex-row gap-2">
                  
                    <a href="#schedules">
                      <button className="button2 flex items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          id="img"
                        >
                          <g clipPath="url(#clip0_396_1506)">
                            <path
                              d="M16.672 11.5246L11.308 6.16058L12.722 4.74658L20.5 12.5246L12.722 20.3026L11.308 18.8886L16.672 13.5246H4.5V11.5246H16.672Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_396_1506">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0.5 0.524414)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        View class schedules
                      </button></a>
                  </div>
                </div>
                <div className=" h-[500px] flex-1     flex justify-center  items-center  rounded-2xl ">
                  <Image width={500} height={500}  src={sub.image_url} alt={sub.full_subject_name} className="rounded-2xl object-cover w-[500px] h-[500px]" priority />
                </div>
              </div>
            </div>
   </>
  )
}

export default HeroSection