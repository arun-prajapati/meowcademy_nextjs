"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import TestimonialCard from "@/components/TestimonialCard";
import { useState } from "react";
import { TestimonialType } from "@/types/type";
const TestimonialSwiper = ({
  TestimonialData,
}: {
  TestimonialData: TestimonialType[];
}) => {
  const [activeIndex, setactiveIndex] = useState(0);

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onActiveIndexChange={(e) => setactiveIndex(e.realIndex)}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        autoplay={{
          delay: 250,
          disableOnInteraction: false,
        }}
        modules={[Navigation]}
        className="mySwiper testimonialSwiperDiv"
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
        {TestimonialData?.map((data, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard
              img={data.image_url}
              showContent={
                activeIndex === index && data.image_url
                  ? true
                  : !data.image_url
                  ? true
                  : false
              }
              description={data.description}
              name={data.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialSwiper;
