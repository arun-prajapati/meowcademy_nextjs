"use client"
import { AccordionType } from "@/types/type";
import Image from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const Accordion = ({title,desc,icon}:AccordionType) => {
    
    const str =  desc.split(',') ;

    const [openAccordion, setOpenAccordion] = useState(false);
  return (

      <>

        <div className="  border border-[#EEEEEE] rounded-xl cursor-pointer accordion">
          <div className={twMerge(openAccordion && "border-b")}>
            <div
              className="flex px-6 py-3 justify-between items-center  "
              onClick={() => {
                setOpenAccordion(!openAccordion);
              }}
            >
              <div className="flex items-center gap-3">
                {icon && (
                  <div className=" w-9 h-9 bg-[#0136681f] rounded-md flex items-center justify-center text-primaryBlue">
                    <Image width={36} height={36} src={icon} alt="icons" className="w-9 h-9" />
                  </div>
                )}

                <h3 className="font-bold text-[16px] lg:text-lg">{title}</h3>
              </div>

              {openAccordion ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_204_4357)">
                    <path
                      d="M11.9997 10.828L7.04974 15.778L5.63574 14.364L11.9997 8L18.3637 14.364L16.9497 15.778L11.9997 10.828Z"
                      fill="#74C3BE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_204_4357">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 24) rotate(-90)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_204_4349)">
                    <path
                      d="M12.0003 13.172L16.9503 8.222L18.3643 9.636L12.0003 16L5.63626 9.636L7.05026 8.222L12.0003 13.172Z"
                      fill="#74C3BE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_204_4349">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(24) rotate(90)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>
          </div>
          {openAccordion && (
            <div className="accordion_content relative">
              <div className=" pl-20 py-4">
                <ul className="flex flex-col gap-2">
                  {str.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </>
  
  );
};

export default Accordion;
