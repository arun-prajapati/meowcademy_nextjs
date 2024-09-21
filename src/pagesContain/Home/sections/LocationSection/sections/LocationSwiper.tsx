"use client";

import { LocationDataType } from "@/types/type";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
// import Swiper styles
import "swiper/css";
import Image from "next/image";
const LocationSwiper = ({ location }: { location: LocationDataType[] }) => {
  return (
    <>
      {location?.length > 3 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper  locationSwiperDiv"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3.1,
              spaceBetween: 30,
            },
          }}
        >
          {location?.map((data: any) => (
            <SwiperSlide key={data.id} className="locationSwiper">
              <div className=" bg-blue-50 p-2 flex justify-center  items-center  rounded-2xl">
                <Image
                  width={300}
                  height={300}
                  src={data.image_url}
                  alt={data.title}
                  className=" h-[300px]  relative"
                />
              </div>
              <h2 className=" absolute bottom-4 right-0 bg-primaryBlue text-white w-36 h-8 rounded-l-3xl text-xl">
                {data.title}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex flex-wrap justify-center  gap-6">
          {location?.map((data: any) => (
            <div key={data.id} className="relative ">
              <div className=" bg-blue-50 p-2  rounded-2xl">
                <Image
                  src={data.image_url}
                  alt={data.title}
                  width={300}
                  height={300}
                  className=" h-[300px]  relative"
                />
              </div>
              <h2 className=" absolute bottom-4 right-0 bg-primaryBlue text-white px-2 h-8 rounded-l-3xl text-xl">
                {data.title}
              </h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default LocationSwiper;
