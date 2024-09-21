"use client";
import { TeacherListType } from "@/types/type";
import Image from "next/image";
import React, { useState } from "react";

const TeachersCard = ({
  teacher,
  color,
}: {
  teacher: TeacherListType;
  color: string;
}) => {
  const [showMore, setShowMore] = useState(false);

  // Word limit for "show more" functionality
  const wordLimit = 40;
  const words = teacher?.description?.split(" ");
  const isClamped = words.length > wordLimit;
  return (
    <>
      <div className={`border border-[#EEEEEE] rounded-xl p-4 ${color}`}>
        <div className="flex justify-center h-44">
          <Image
            width={192}
            height={192}
            src={teacher?.image_url}
            alt={teacher?.name}
            className="w-48 h-48 rounded-t-full object-cover"
          />
        </div>
        <div className="mt-8">
          <div className="text-center font-bold text-lg">{teacher?.name}</div>
          <div className="text-center text-[#A0A0A0] font-bold text-xs mb-3">
            {teacher?.subject}
          </div>
          <p>
            {showMore
              ? teacher?.description
              : words.slice(0, wordLimit).join(" ") + (isClamped ? "..." : "")}
          </p>
          {isClamped && (
            <span
              className="block mt-3 cursor-pointer text-[#74C3BE] font-bold"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "show less" : "show more"}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default TeachersCard;
