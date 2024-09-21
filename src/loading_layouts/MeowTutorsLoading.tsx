import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const MeowTutorsLoading = () => {
  return (
    <>
      <div className="pt-24 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7">
        <Skeleton className="h-80" />
        <Skeleton className="h-80" />
        <Skeleton className="h-80" />
        <Skeleton className="h-80" />
        <Skeleton className="h-80" />
        <Skeleton className="h-80" />
      </div>
    </>
  );
};

export default MeowTutorsLoading;
