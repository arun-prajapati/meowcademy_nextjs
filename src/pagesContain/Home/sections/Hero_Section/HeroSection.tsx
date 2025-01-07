import MyTimer from "@/components/timer/MyTimer";
import { MdOutlineWhatsapp } from "react-icons/md";
import OpenVideo from "./components/OpenVideo";
import Image from "next/image";
import { HomePageTypes } from "@/types/type";
import { getVideoType } from "@/lib/getVideoType";

const HeroSection = ({ homePage }: { homePage: HomePageTypes[] }) => {
  const initialTime = new Date();
  initialTime.setMinutes(initialTime.getMinutes() + 5);
  return (
    <>
      {homePage?.map((home) => (
        <div key={home.id}>
          {/* Hero section video */}
          <div className="pt-24">
            <div className="w-full relative">

              <video
                playsInline
                autoPlay
                muted
                loop     
                className="h-svh w-full object-cover overlayVideo hidden sm:block"
                src={home?.desktop_video}
              />

              <video
                playsInline
                autoPlay
                muted
                loop     
                className="h-svh w-full object-cover overlayVideo block sm:hidden"
                src={home?.moblie_video}
              />

              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40">
                <div className="text-white text-center">
                  <h1 className="text-white text-3xl lg:text-5xl font-bold mb-6">
                    Leading small group tuition
                  </h1>
                  <h1 className="text-white text-3xl lg:text-5xl font-bold mb-10 mt-3">
                    @Meowcademy
                  </h1>
                  <p className="text-xl lg:text-2xl font-medium mb-4">
                    Available for all levels and subjects
                  </p>
                  <p className="lg:text-xl">
                    Confidence first, results will follow
                  </p>
                  <div className="mt-10">
                    <a href="https://wa.me/+6587713358" className="ctaBtn">
                      Contact Us Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timer */}

          <div className="pt-24 container  ">
            <div className="bg-[#EF4B27]  py-3 text-white flex justify-center rounded-lg border  flex-col items-center">
              <div className="bg-white text-[#EF4B27] font-bold text-center py-2 px-4 lg:w-1/2 w-[95%]  text-xl sale_banner ">
                Need a Trial?
                <br /> Try Us Out for 4 Lessons With No Risk!
              </div>
              <div className="mt-5">
                <ul className="list-disc px-8">
                  <li>
                    Pay only for courses fees (4 lessons) WITHOUT registration
                    fee or deposit.
                  </li>
                  <li>
                    Registration fee and deposit will only be collected on the 5
                    <sup>th</sup> lesson
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="text-2xl font-bold">At Just $50/lesson</p>
              <div className="flex flex-col gap-3 mt-2">
                claim your offer now!{" "}
                <MyTimer initialExpiryTimestamp={initialTime} />
              </div>
              <p className="mt-2 text-sm">
                *minimum 4 trial lessons at $200 a month
              </p>
            </div>

            <div className="flex justify-center">
              <a
                className="offer_btn flex items-center  gap-4 my-5 w-fit"
                href="https://wa.me/+6587713358"
              >
                <MdOutlineWhatsapp size={24} />
                Contact Us Now
              </a>
            </div>
          </div>

          <main className="container mt-5">
            <div className="flex flex-col items-center xl:flex-row justify-between gap-10">
              <div className="items-center text-center xl:max-w-[560px] xl:text-left xl:items-start flex flex-col gap-5 justify-center">
                <h1 className=" text-3xl md:text-4xl font-bold  leading-normal md:leading-relaxed my-5">
                  {home.name}
                </h1>
                <p className=" md:text-xl">{home.description}</p>
                <div className="">
                  <a
                    href="#explore"
                    className="button  flex items-center gap-4 my-5 "
                  >
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
                    <span className=" font-bold"> Explore courses </span>
                  </a>
                </div>
              </div>

              <div className="relative h-[450px]">
                <Image
                  width={700}
                  height={700}
                  src={home.image_url}
                  alt=""
                  className=" rounded-2xl h-full object-cover"
                />
                <div className=" absolute  bg-blue-400 top-1/3 left-0 right-0 bottom-[5%] opacity-[0.18]  blur-[60px]"></div>
                {(home.video || home.custom_video_url) && (
                  <OpenVideo home={home} />
                )}
              </div>
            </div>
          </main>
        </div>
      ))}
    </>
  );
};

export default HeroSection;
