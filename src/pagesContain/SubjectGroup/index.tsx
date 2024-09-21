import apihandler from "@/lib/apihandler";
import { GroupListType } from "@/types/type";
import Link from "next/link";
import React from "react";
import SubjectGroupRoadmap from "./sections/SubjectGroupRoadmap";
import Image from "next/image";
import TestimonialSection from "../Home/sections/TestimonialSection/TestimonialSection";
import WhyMs from "../Home/sections/whyMs/WhyMs";

const SubjectGroup = async ({ params }: { params: string }) => {
  // --get Subject Group data--
  const GroupData = await apihandler({
    path: "/api/group_list",
    apiConfig: {
      method: "POST",
      body: JSON.stringify({ slug: params }),
      headers: {
        "content-type": "application/json",
      },
    },
  });
  // --get Home Page data--
  const HomePageData = await apihandler({
    path: "/api/homepage_list",
    apiConfig: { method: "get" },
  });

  return (
    <>
      {GroupData?.data?.map((group: GroupListType) => (
        <div className="pt-24" key={group.id}>
          <h3 className="text-center  text-2xl font-bold  border-y border-[#EEEEEE] py-7 uppercase">
            {group.group_name}
          </h3>

          {/* Hero section  */}
          <div className="container mt-10">
            <div className="flex flex-col-reverse items-center xl:flex-row justify-between gap-5">
              <div className="items-center text-center xl:max-w-[560px] xl:text-left xl:items-start flex flex-col gap-5 justify-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-7">
                  {group.group_name}
                </h1>

                <p className="text-xl font-normal mb-6 mt-6">
                  {group.description}
                </p>

                <div className="mt-4 flex flex-col md:flex-row gap-2">
                  <a href="#roadmap">
                    <button className=" button flex items-center justify-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        id="img"
                      >
                        <g clipPath="url(#clip0_1199_17272)">
                          <path
                            d="M18 3C19.657 3 21 4.343 21 6C21 7.657 19.657 9 18 9H15C13.694 9 12.583 8.166 12.171 7H11C9.9 7 9 7.9 9 9V9.171C10.166 9.583 11 10.694 11 12C11 13.306 10.166 14.417 9 14.829V15C9 16.1 9.9 17 11 17H12.17C12.582 15.835 13.694 15 15 15H18C19.657 15 21 16.343 21 18C21 19.657 19.657 21 18 21H15C13.694 21 12.583 20.166 12.171 19H11C8.79 19 7 17.21 7 15H5C3.343 15 2 13.657 2 12C2 10.343 3.343 9 5 9H7C7 6.79 8.79 5 11 5H12.17C12.582 3.835 13.694 3 15 3H18ZM18 17H15C14.448 17 14 17.448 14 18C14 18.552 14.448 19 15 19H18C18.552 19 19 18.552 19 18C19 17.448 18.552 17 18 17ZM8 11H5C4.448 11 4 11.448 4 12C4 12.552 4.448 13 5 13H8C8.552 13 9 12.552 9 12C9 11.448 8.552 11 8 11ZM18 5H15C14.448 5 14 5.448 14 6C14 6.552 14.448 7 15 7H18C18.552 7 19 6.552 19 6C19 5.448 18.552 5 18 5Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1199_17272">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      See course progression
                    </button>
                  </a>
                </div>
              </div>
              <div className=" h-[500px] flex-1     flex justify-center  items-center  rounded-2xl ">
                <Image
                  width={500}
                  height={500}
                  src={group.image_url}
                  alt={group.group_name}
                  className="h-[500px] w-[500px]  rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* roadmap section  */}
          {group.roadmap.length > 0 && (
            <div className="container mt-20" id="roadmap">
              <h6 className="text-primaryBlue text-lg font-bold mb-5 text-center mt-10">
                course roadmap
              </h6>
              <h3 className="font-bold text-2xl text-center md:text-4xl mb-9">
                Journey through our {group.group_name} courses
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
                <SubjectGroupRoadmap group={group?.roadmap} />
              </div>
            </div>
          )}

          <TestimonialSection />
          <WhyMs homePage={HomePageData?.data[0]?.about_us} />
        </div>
      ))}
    </>
  );
};

export default SubjectGroup;