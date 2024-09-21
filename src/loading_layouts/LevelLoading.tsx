import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LevelLoading = () => {
  return (
    <>
      <div className="container mt-10 pt-24">
        <div className="flex flex-col-reverse items-center xl:flex-row justify-between gap-5">
          <div className="h-[500px] flex flex-col w-1/2 rounded-2xl">

          <Skeleton className=" h-7" />
          <Skeleton className=" h-7 mt-5" />
          <Skeleton className=" h-20 mt-5" />
          <Skeleton className=" h-7 mt-5" />
          </div>


          <div className="h-[500px] flex-1 flex justify-center items-center rounded-2xl">
            <Skeleton className="w-[500px] h-[500px] rounded-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LevelLoading;
