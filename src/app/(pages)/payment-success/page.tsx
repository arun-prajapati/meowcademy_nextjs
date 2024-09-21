import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
       <div className="min-h-screen bg-blue-100   flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-lg text-center">
       
        <svg 
          viewBox="0 0 24 24" 
          className="text-green-500 w-16 h-16 mx-auto mb-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
        </svg>
        <h3 className="text-2xl md:text-3xl text-gray-900 font-extrabold mb-4">Payment Successful!</h3>
        <p className="text-md md:text-lg text-gray-600 mb-6">Thank you for your payment to Meowcademy. </p>
        <p className="text-gray-500 mb-8">We hope you have a paw-some day ahead!</p>
        <Link href="/">
          <button className="button">
            Go Back To Home
          </button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default page;
