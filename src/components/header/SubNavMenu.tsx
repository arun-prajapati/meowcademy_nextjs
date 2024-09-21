"use client"
import { GroupListType, LevelListType } from "@/types/type";
import Link from "next/link";
import React, { useState } from "react";

const SubNavMenu = ({level,standards,groupList}:{level:LevelListType[],standards:any,groupList:GroupListType[]}) => {
    const [showMoreMenu, setShowMoreMenu] = useState<boolean|string>(false);
    const [showSubjectMenu, setShowSubjectMenu] = useState(false);
    const [activeTab, SetActiveTab] = useState<any>();
    const standard = standards[activeTab] || [];

    const backState = () => {
        setShowMoreMenu(false);
        setShowSubjectMenu(false);
      };
      const handleTabClick = (index:any) => {
        SetActiveTab(index);
        setShowSubjectMenu(true);
      };
  return (
    <>
     <div className="   fixed  bg-white right-0 left-0  pt-24  z-[100] ">
      <div className="flex h-screen  w-screen container pb-24 relative">
        <div className="flex flex-col  border-l  border-l-[#EEEEEE] border-r  pb-24  border-r-[#EEEEEE] absolute top-0 right-0 left-0 bottom-0 w-full md:static md:w-2/6 md:max-w-xs  bg-white overflow-y-auto">
          <a
            href={"/"}
   
            className="px-8 py-5 hover:bg-[#f6f6f6]"
          >
            Home
          </a>
          <p
            className="px-8 py-5 hover:bg-[#f6f6f6] flex justify-between items-center"
            onClick={() => setShowMoreMenu("course")}
          >
            Courses{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_104_2323)">
                <path
                  d="M13.1717 12.0002L8.22168 7.05023L9.63568 5.63623L15.9997 12.0002L9.63568 18.3642L8.22168 16.9502L13.1717 12.0002Z"
                  fill="#74C3BE"
                />
              </g>
              <defs>
                <clipPath id="clip0_104_2323">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </p>
          <a
            href={"/events"}
             
            className="px-8 py-5 hover:bg-[#f6f6f6]"
          >
            Events
          </a>
          <a
            href={"/online-tuition"}
            
            className="px-8 py-5 hover:bg-[#f6f6f6]"
          >
            MA Online
          </a>

          <a
            href={"/locations"}
            
            className="px-8 py-5 hover:bg-[#f6f6f6]"
          >
            Locations & Schedules
          </a>
          <a
            href={"/meow-tutors"}
            className="px-8 py-5 hover:bg-[#f6f6f6]"
          >
            Cat tutors
          </a>
          <a
            href={"/referral-programme"}
            className="px-8 py-5 hover:bg-[#f6f6f6]"
          >
            Referral Programme
          </a>
        </div>

        {showMoreMenu === "course" ? (
          <div className="flex flex-col   border-r border-r-[#EEEEEE]  pb-24  absolute top-0 right-0 left-0 bottom-0 md:static md:w-2/6 md:max-w-xs  bg-white overflow-y-auto">
            <div
              onClick={backState}
              className="text-[#74C3BE] flex gap-3 font-bold py-3 border-b border-[#EEEEEE] md:hidden"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_104_2381)">
                  <path
                    d="M10.828 12.0002L15.778 16.9502L14.364 18.3642L8 12.0002L14.364 5.63623L15.778 7.05023L10.828 12.0002Z"
                    fill="#74C3BE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_104_2381">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
              back
            </div>
            <div className="px-8 py-5 font-bold">Levels</div>
            {level?.map((level) => (
              <p
                key={level.id}
                className="px-8 py-5 hover:bg-[#f6f6f6] flex justify-between items-center"
                onClick={() => handleTabClick(level.name)}
              >
                {level.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_104_2323)">
                    <path
                      d="M13.1717 12.0002L8.22168 7.05023L9.63568 5.63623L15.9997 12.0002L9.63568 18.3642L8.22168 16.9502L13.1717 12.0002Z"
                      fill="#74C3BE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_104_2323">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </p>
            ))}

            <div className="px-8 py-5 font-bold">Subject groups</div>

            {groupList?.map((subject) => (
              <a
                href={`/course-roadmaps/${subject.slug}`}
                className="px-8 py-5 hover:bg-[#f6f6f6]"
                key={subject.id}
              >
                {subject.group_name}
              </a>
            ))}
          </div>
        ) : showMoreMenu === "more" ? (
          <div className="flex flex-col   border-r border-r-[#EEEEEE]  absolute top-0 right-0 left-0 bottom-0 md:static md:w-2/6 md:max-w-xs  bg-white overflow-y-auto">
            <div
              onClick={backState}
              className="text-[#74C3BE] flex gap-3 font-bold py-3 border-b border-[#EEEEEE] md:hidden"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_104_2381)">
                  <path
                    d="M10.828 12.0002L15.778 16.9502L14.364 18.3642L8 12.0002L14.364 5.63623L15.778 7.05023L10.828 12.0002Z"
                    fill="#74C3BE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_104_2381">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
              back
            </div>
            <div className="px-8 py-5 font-bold">More</div>
            {/* <Link className="px-8 py-5 hover:bg-[#f6f6f6]">Careers</Link>
                <Link className="px-8 py-5 hover:bg-[#f6f6f6]">Blog </Link> */}
          </div>
        ) : (
          ""
        )}

        {showSubjectMenu && (
          <div className="flex flex-col  pb-24    border-r border-r-[#EEEEEE] absolute top-0 right-0 left-0 bottom-0 md:static md:w-2/6 md:max-w-xs  bg-white overflow-y-auto">
            <div
              onClick={backState}
              className="text-[#74C3BE] flex gap-3 font-bold py-3 border-b border-[#EEEEEE] md:hidden"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_104_2381)">
                  <path
                    d="M10.828 12.0002L15.778 16.9502L14.364 18.3642L8 12.0002L14.364 5.63623L15.778 7.05023L10.828 12.0002Z"
                    fill="#74C3BE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_104_2381">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
              back
            </div>
            <div className="px-8 py-5 font-bold">{activeTab}</div>
            {standard.length === 0 && <div>No course available</div>}
            {standard?.data?.map((data:any, index:number) => {
              let stdtitle = data.slug.replace(/\s+/g, "-").toLowerCase();

              return (
                <a
                  
                  className="px-8 py-5 hover:bg-[#f6f6f6]"
                  key={index}
                  href={`/levels/${stdtitle}`}
                >
                  {data.std_name}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default SubNavMenu