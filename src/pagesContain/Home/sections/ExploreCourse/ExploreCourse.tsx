
import apihandler from "@/lib/apihandler";
import ExploreTab from "./sections/ExploreTab";
type LevelType = {
  name: string;
};
const ExploreCourse = async () => {
//Get level list data
const level = await apihandler({
  path: "/api/level_list",
  apiConfig: { method: "get", },
});
const levelData: LevelType[] = level?.data ?? [];

//standard list
type StandardsType = {
  [key: string]: any[]; // Assuming the standardList is an array of objects
};
const standards: StandardsType = {};
if (levelData.length > 0) {
  for (const l of level?.data) {
    const standardList = await apihandler({
      path: "/api/standard_list",
      apiConfig: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ type: l.name }),
      },
    });

    standards[l.name] = standardList;
  }
}
  return (
    <>
      <section className="container mt-24" id="explore">
        <div className="text-center">
          <h6 className="text-primaryBlue text-lg font-bold mb-5">
            Explore courses
          </h6>
          <h3 className="font-bold text-2xl md:text-4xl mb-7">
            A learning programme for every student
          </h3>
        </div>
        <div className="tabs_btn text-center mb-7">
           <ExploreTab level={level?.data} standards={standards}/>
        </div>
      </section>
    </>
  );
};

export default ExploreCourse;
