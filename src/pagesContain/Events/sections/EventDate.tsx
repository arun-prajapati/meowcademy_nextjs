import formatDate from '@/lib/formatDate';
import formatTime from '@/lib/formatTime'
import { EventDateType } from '@/types/type';
import React from 'react'

const EventDate = ({title,start_time,end_time,start_date,end_date,type}:EventDateType) => {

    
  //time converter
  function formatTime(timeString:string) {
    const [hourString, minute] = timeString.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
  }

  return (
   <>
       <div
            className="border -border-[#EEEEEE] p-4 rounded-xl "
        
          >
            <div className="flex justify-between items-center">


              <div className="text-[#013668] text-xl font-bold">
                {title}
              </div>
          



            </div>

            <div className="border border-[#EEEEE] p-4 rounded-xl mt-4">
              <h5 className="text-[#74C3BE] font-bold ">{type}</h5>
              <div className="flex items-center gap-4 mt-3 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  id="img"
                >
                  <g clipPath="url(#clip0_1199_10287)">
                    <path
                      d="M17 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H7V1H9V3H15V1H17V3ZM20 9V5H17V7H15V5H9V7H7V5H4V9H20ZM20 11H4V19H20V11ZM6 13H11V17H6V13Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1199_10287">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {formatDate(start_date)} - {formatDate(end_date)}
              </div>
              <div className="flex items-center gap-4 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 25 24"
                  fill="none"
                  id="img"
                >
                  <g clipPath="url(#clip0_913_7530)">
                    <path
                      d="M12.5 22C6.977 22 2.5 17.523 2.5 12C2.5 6.477 6.977 2 12.5 2C18.023 2 22.5 6.477 22.5 12C22.5 17.523 18.023 22 12.5 22ZM12.5 20C14.6217 20 16.6566 19.1571 18.1569 17.6569C19.6571 16.1566 20.5 14.1217 20.5 12C20.5 9.87827 19.6571 7.84344 18.1569 6.34315C16.6566 4.84285 14.6217 4 12.5 4C10.3783 4 8.34344 4.84285 6.84315 6.34315C5.34285 7.84344 4.5 9.87827 4.5 12C4.5 14.1217 5.34285 16.1566 6.84315 17.6569C8.34344 19.1571 10.3783 20 12.5 20ZM13.5 12H17.5V14H11.5V7H13.5V12Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_913_7530">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                {formatTime(start_time)} - {formatTime(end_time)}
              </div>
            </div>
          
          </div>
   </>
  )
}

export default EventDate
