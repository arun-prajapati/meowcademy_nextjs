import Breadcrumb from "@/components/Breadcrumb";
import React from "react";
import TeachersCard from "./sections/TeachersCard";
import apihandler from "@/lib/apihandler";
import { TeacherListType } from "@/types/type";

const MeowTutors = async () => {
  // --get Teacher list data--
  const teachers = await apihandler({
    path: "/api/teacher_list",
    apiConfig: {
      method: "GET",
     
    },
  });
  const colors = ["green", "orange", "red", "purple", "yellow"];

  return (
    <>
      <div className="pt-24">
        <Breadcrumb menu="Cat Tutors" />
      </div>

      {/* Teachers list  */}

      <div className="mt-20 container">
        <h3 className="font-bold text-2xl text-center md:text-4xl mb-9">
          Meow Teachers
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {teachers?.data?.map((teacher: TeacherListType, index: number) => {
            const color = colors[index % colors.length];

            return (
              <TeachersCard key={teacher.id} teacher={teacher} color={color} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MeowTutors;
