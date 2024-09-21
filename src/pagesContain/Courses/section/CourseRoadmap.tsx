"use client";
import { CourseDetailType } from "@/types/type";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const CourseRoadmap = ({ sub }: { sub: CourseDetailType }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
    {sub?.Roadmap.length > 0 && (
  <div className="container mt-28">
    <h3 className="text-center text-3xl font-bold my-5">
      Course roadmap
    </h3>
    <p className="text-center mb-3">
      Journey through our {sub.group_name} course
    </p>

    <div className="roadmap flex flex-col lg:flex-row justify-around">
      {sub?.Roadmap?.map((roadmap) => (
        <div key={roadmap.id}>
          <div className="w-full relative mb-7">
            <div className="line"></div>
            <div className="indicator"></div>
          </div>
          <div
            className="p-9 border border[#EEEEEE] rounded-xl text-ellipsis overflow-hidden transition-all cursor-pointer duration-300"
            style={{ boxShadow: "0px 6px 6px rgba(25, 25, 25, 0.24)" }}
          >
            <div className="text-2xl font-bold text-primaryBlue mb-5 text-nowrap">
              {roadmap.title}
            </div>
            <div>
              <p
                className={twMerge(
                  `review_quote`,
                  roadmap.description.split('\n').length > 6 && !showMore && "line-clamp-[10]"
                )}
              >
                {roadmap.description}
              </p>
              {roadmap.description.split('\n').length > 6 && (
                <p
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                  className="cursor-pointer text-[#74C3BE] font-bold"
                >
                  {showMore ? "show less" : "show more"}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

    </>
  );
};

export default CourseRoadmap;
