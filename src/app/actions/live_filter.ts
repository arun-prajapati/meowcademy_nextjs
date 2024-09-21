"use server";

import apihandler from "@/lib/apihandler";

export const liveFilter_action = async (data: any) => {
  const result = await apihandler({
    path: "/api/list_for_live_filter",
    apiConfig: {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    },
  });

  return result;
};

export const liveResult_action=async(data:any)=>{
  const result = await apihandler({
    path: "/api/schedule_list",
    apiConfig: {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    },
  });
  return result
}
