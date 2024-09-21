"use client"
import { useState } from "react";
import Filters from "./Filters";
import Results from "./Results";
import { FilterValuesType } from "@/types/type";

type SchedulesType={
    level?:string,
    subject?:string,
    location?:string
}

const Schedules = ({level,subject,location}:SchedulesType) => {

      // --filter values --
  const [filterValues, setFilterValues] = useState<FilterValuesType>({
    year: ["2024"],
    std_name: level ? [level] : [],
    sub_name: subject ? [subject] : [],
    type: [],
    location: location ? [location] : [],
    day: [],
  });
  return (
   <>
   <div id="schedules">
      <div className="container mt-28">
        {/* class schedules  */}

        <h3 className="text-center text-3xl font-bold my-7">Class schedules</h3>

        {/* --filter-- */}
        <Filters
          level={level}
          subject={subject}
          location={location}
          setFilterValues={setFilterValues}
          filterValues={filterValues}
        />

        {/* --results-- */}
        {filterValues && (
          <Results
            filterValues={filterValues}
            // level={level}
            // subject={subject}
            // location={location}
          />
        )}
      </div>
    </div>

   
   </>
  )
}

export default Schedules
