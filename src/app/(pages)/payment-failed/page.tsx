import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
     
      <div className="min-h-screen bg-red-100    flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-lg text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-red-600 w-16 h-16 mx-auto my-6"
            viewBox="0 0 14 14"
          >
            <g fillRule="evenodd">
              <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z" />
              <path
                d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z"
                fill="currentColor"
              />
              <path d="M7 5.969L5.599 4.568a.29.29 0 0 0-.413.004l-.614.614a.294.294 0 0 0-.004.413L5.968 7l-1.4 1.401a.29.29 0 0 0 .004.413l.614.614c.113.114.3.117.413.004L7 8.032l1.401 1.4a.29.29 0 0 0 .413-.004l.614-.614a.294.294 0 0 0 .004-.413L8.032 7l1.4-1.401a.29.29 0 0 0-.004-.413l-.614-.614a.294.294 0 0 0-.413-.004L7 5.968z" />
            </g>
          </svg>
          <h3 className="text-2xl md:text-3xl text-gray-900 font-extrabold mb-4">
          Payment Failed!
          </h3>
          <p className="text-md md:text-lg text-gray-600 mb-6">Oops! Something went wrong with your payment. Please try again.</p>

        
          <Link href="/">
            <button className="button">Go Back To Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
