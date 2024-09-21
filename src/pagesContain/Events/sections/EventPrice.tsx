import React from "react";

const EventPrice = ({
  event,
  price,
}: {
  price?: number|string;
  event: { features: string };
}) => {
  return (
    <>
      <div
        className=" w-[90%] mx-auto lg:w-[45%] border border-[#EEEEEE] rounded-xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(25, 115, 249, 0.12) 0%, rgba(25, 115, 249, 0) 100%)",
        }}
      >
        <div className=" p-3 pb-6 border-b border-[#D0DAE8] ">
          <p className="text-center">
            Fees <em>(with GST)</em>
          </p>
          <h2 className="text-2xl xl:text-[48px] text-primaryBlue font-bold my-10 text-center ">
            {price}
          </h2>
        </div>
        <div className="text-left px-6 py-3">
          <div className="mb-6 font-bold">Features:</div>
          <p>{event.features}</p>
          <button className="button w-full my-8 flex items-center gap-3 justify-center">
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
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default EventPrice;
