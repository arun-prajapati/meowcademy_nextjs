"use client"

import { BasketContext } from "@/context/BasketContextProvider";
import Link from "next/link";
import React, { useContext } from "react";

const FloatingBasketBtn = () => {
  const basketContext = useContext(BasketContext);

  const cartData = basketContext?.cartData;
  return (
    <>
      <Link
        href="/basket"
        className="flex gap-2 items-center justify-center bg-white cursor-pointer px-6 py-4 fixed bottom-6 right-6 z-[1000] transition-all text-primaryBlue font-bold  rounded-[66px] hover:bg-primaryBlue hover:text-white"
        style={{ boxShadow: "0px 6px 12px rgba(25, 25, 25, 0.24)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          id="img"
        >
          <g clipPath="url(#clip0_894_18257)">
            <path
              d="M4.00008 6.41399L0.75708 3.17199L2.17208 1.75699L5.41408 4.99999H20.6561C20.8119 4.99998 20.9657 5.0364 21.1049 5.10636C21.2442 5.17631 21.3652 5.27785 21.4583 5.40288C21.5514 5.52792 21.6139 5.67297 21.641 5.82648C21.668 5.97998 21.6588 6.13768 21.6141 6.28699L19.2141 14.287C19.1523 14.4931 19.0258 14.6737 18.8532 14.8022C18.6806 14.9306 18.4712 15 18.2561 15H6.00008V17H17.0001V19H5.00008C4.73486 19 4.48051 18.8946 4.29297 18.7071C4.10544 18.5196 4.00008 18.2652 4.00008 18V6.41399ZM5.50008 23C5.10226 23 4.72072 22.842 4.43942 22.5606C4.15812 22.2793 4.00008 21.8978 4.00008 21.5C4.00008 21.1022 4.15812 20.7206 4.43942 20.4393C4.72072 20.158 5.10226 20 5.50008 20C5.8979 20 6.27944 20.158 6.56074 20.4393C6.84204 20.7206 7.00008 21.1022 7.00008 21.5C7.00008 21.8978 6.84204 22.2793 6.56074 22.5606C6.27944 22.842 5.8979 23 5.50008 23ZM17.5001 23C17.1023 23 16.7207 22.842 16.4394 22.5606C16.1581 22.2793 16.0001 21.8978 16.0001 21.5C16.0001 21.1022 16.1581 20.7206 16.4394 20.4393C16.7207 20.158 17.1023 20 17.5001 20C17.8979 20 18.2794 20.158 18.5607 20.4393C18.842 20.7206 19.0001 21.1022 19.0001 21.5C19.0001 21.8978 18.842 22.2793 18.5607 22.5606C18.2794 22.842 17.8979 23 17.5001 23Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_894_18257">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Class basket
        <span className="flex items-center justify-center  bg-[#74C3BE] z-[1001] text-white w-6 h-6 rounded-full fixed bottom-16 right-8">
          {cartData?.length}
        </span>
      </Link>
    </>
  );
};

export default FloatingBasketBtn;
