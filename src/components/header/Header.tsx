import apihandler from "@/lib/apihandler";
import Navbar from "./Navbar";
type LevelType = {
  name: string;
};
const Header = async () => {
  //Get level list data
  const level = await apihandler({
    path: "/api/level_list",
    apiConfig: { method: "get" },
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
  //Get Group List
  const GroupList = await apihandler({
    path: "/api/group_list",
    apiConfig: { method: "POST" },
  });

  return (
    <>
      <Navbar
        level={level?.data}
        standards={standards}
        groupList={GroupList?.data}
      />
    </>
  );
};

export default Header;
