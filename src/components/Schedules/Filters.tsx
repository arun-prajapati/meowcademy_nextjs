"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Select, ConfigProvider, Tooltip } from "antd";
import { FilterResultType, FilterType } from "@/types/type";
import { toast } from "sonner";
import { liveFilter_action } from "@/app/actions/live_filter";

const Filters = ({
  level,
  subject,
  setFilterValues,
  filterValues,
  location,
}: FilterType) => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const yearOption = [];
  const [otherOption, setOtherOption] = useState<FilterResultType>();

  yearOption.push({
    label: `AY${currentYear}`,
    value: currentYear,
  });

  yearOption.push({
    label: `AY${nextYear}`,
    value: nextYear,
  });
  const dayOption = [
    { label: "Monday", value: "Mon" },
    { label: "Tuesday", value: "Tue" },
    { label: "Wednesday", value: "Wed" },
    { label: "Thursday", value: "Thu" },
    { label: "Friday", value: "Fri" },
    { label: "Saturday", value: "Sat" },
    { label: "Sunday", value: "Sun" },
  ];

  //Get Search Filter
   // Fetch search filter data
   const fetchOtherOptions = async () => {
    try {
        const result = await liveFilter_action(
            filterValues,
        );
        setOtherOption(result); // Assuming result contains the data you need
    } catch (error) {
        toast.error("Something Went Wrong!");
    }
};

useEffect(() => {
    fetchOtherOptions(); // Fetch data when the component mounts
}, [filterValues]); 

  const locationOption = useCallback(() => {
    return otherOption?.location?.map((item) => ({
      label: item,
      value: item,
    }));
  }, [otherOption]);

  const levelOption = useCallback(() => {
    const levelOptionData = otherOption?.standard?.map((item) => ({
      label: item,
      value: item,
    }));
    return levelOptionData;
  }, [otherOption]);

  const classTypeOption = useCallback(
    () =>
      otherOption?.class_type?.map((item) => ({
        label: item,
        value: item,
      })),
    [otherOption]
  );

  const subjectOption = useCallback(
    () =>
      otherOption?.subject?.map((item) => ({
        label: item,
        value: item,
      })),
    [otherOption]
  );

  return (
    <div
      className="class-schedules p-3 rounded-xl "
      style={{ boxShadow: "0px 6px 12px rgba(25, 25, 25, 0.24)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <div>
          <label htmlFor="" className=" ml-1 text-[#777777]">
            Academic Year
          </label>
          <div className="bg-[#FBFCFC] border border-[#EEEEEE] rounded-xl flex items-center mt-2">
            <div className="p-3 border-r">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                id="img"
              >
                <g clipPath="url(#clip0_204_4942)">
                  <path
                    d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_204_4942">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="  flex-1">
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      multipleItemBg: "white",
                      optionFontSize: 16,
                      optionSelectedColor: "rgba(116, 195, 190)",
                      controlOutline: "transparent",
                      colorPrimary: "#FBFCFC",
                      colorPrimaryHover: "transparent",
                      colorBorder: "transparent",
                      colorText: "rgb(30 140 133)",
                      fontSize: 16,
                      selectorBg: "#FBFCFC",
                      optionPadding: "10px 20px",
                    },
                  },
                }}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  defaultValue={2024}
                  placeholder="Please select Year"
                  maxTagCount={"responsive"}
                  options={yearOption}
                  onChange={(e) =>
                    setFilterValues&&setFilterValues((pre) => ({ ...pre, year:e }))
                  }
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="" className=" ml-1 text-[#777777]">
            Level
          </label>
          <div className="bg-[#FBFCFC] border border-[#EEEEEE] rounded-xl flex items-center mt-2">
            <div className="p-3 border-r">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                id="img"
              >
                <g clipPath="url(#clip0_204_4942)">
                  <path
                    d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_204_4942">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className=" flex-1">
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      multipleItemBg: "white",
                      optionFontSize: 16,
                      optionSelectedColor: "black",
                      controlOutline: "transparent",
                      colorPrimary: "#FBFCFC",
                      colorPrimaryHover: "transparent",
                      colorBorder: "transparent",
                      colorText: "rgb(30 140 133)",
                      fontSize: 16,
                      selectorBg: "#FBFCFC",
                      optionPadding: "10px 20px",
                      optionSelectedBg: "lightblue",
                    },
                  },
                }}
              >
                <Select
                  mode="multiple"
                  allowClear
                  defaultValue={level}
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please select Level"
                  maxTagCount={"responsive"}
                  options={levelOption()}
                  onChange={(e) =>
                    setFilterValues&&setFilterValues((pre) => ({ ...pre, std_name: e }))
                  }
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="" className=" ml-1 text-[#777777]">
            Subject
          </label>
          <div className="bg-[#FBFCFC] border border-[#EEEEEE] rounded-xl flex items-center mt-2">
            <div className="p-3 border-r">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                id="img"
              >
                <g clipPath="url(#clip0_894_13600)">
                  <path
                    d="M2 3.993C2.00183 3.73038 2.1069 3.47902 2.29251 3.29322C2.47813 3.10742 2.72938 3.00209 2.992 3H21.008C21.556 3 22 3.445 22 3.993V20.007C21.9982 20.2696 21.8931 20.521 21.7075 20.7068C21.5219 20.8926 21.2706 20.9979 21.008 21H2.992C2.72881 20.9997 2.4765 20.895 2.29049 20.7088C2.10448 20.5226 2 20.2702 2 20.007V3.993ZM11 5H4V19H11V5ZM13 5V19H20V5H13ZM14 7H19V9H14V7ZM14 10H19V12H14V10Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_894_13600">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className=" w-full">
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      multipleItemBg: "white",
                      optionFontSize: 16,
                      optionSelectedColor: "black",
                      controlOutline: "transparent",
                      colorPrimary: "#FBFCFC",
                      colorPrimaryHover: "transparent",
                      colorBorder: "transparent",
                      colorText: "rgb(30 140 133)",
                      fontSize: 16,
                      selectorBg: "#FBFCFC",
                      optionPadding: "10px 20px",
                      optionSelectedBg: "lightblue",
                    },
                  },
                }}
              >
                <Select
                  mode="multiple"
                  allowClear
                  defaultValue={subject}
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please select Subject"
                  maxTagCount={"responsive"}
                  maxTagPlaceholder={(omittedValues) => (
                    <Tooltip
                      title={omittedValues.map(({ label }) => label).join(", ")}
                    >
                      <span>Hover me....</span>
                    </Tooltip>
                  )}
                  options={subjectOption()}
                  onChange={(e) =>
                    setFilterValues&& setFilterValues((pre) => ({ ...pre, sub_name: e }))
                  }
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="" className=" ml-1 text-[#777777]">
            Class Type
          </label>
          <div className="bg-[#FBFCFC] border border-[#EEEEEE] rounded-xl flex items-center mt-2">
            <div className="p-3 border-r">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                id="img"
              >
                <g clipPath="url(#clip0_1153_18723)">
                  <path
                    d="M12 7.00002C14.1217 7.00002 16.1566 7.84288 17.6569 9.34317C19.1571 10.8435 20 12.8783 20 15C20 17.1218 19.1571 19.1566 17.6569 20.6569C16.1566 22.1572 14.1217 23 12 23C9.87827 23 7.84344 22.1572 6.34315 20.6569C4.84285 19.1566 4 17.1218 4 15C4 12.8783 4.84285 10.8435 6.34315 9.34317C7.84344 7.84288 9.87827 7.00002 12 7.00002ZM12 9.00002C10.4087 9.00002 8.88258 9.63216 7.75736 10.7574C6.63214 11.8826 6 13.4087 6 15C6 16.5913 6.63214 18.1174 7.75736 19.2427C8.88258 20.3679 10.4087 21 12 21C13.5913 21 15.1174 20.3679 16.2426 19.2427C17.3679 18.1174 18 16.5913 18 15C18 13.4087 17.3679 11.8826 16.2426 10.7574C15.1174 9.63216 13.5913 9.00002 12 9.00002ZM12 10.5L13.323 13.18L16.28 13.61L14.14 15.695L14.645 18.641L12 17.25L9.355 18.64L9.86 15.695L7.72 13.609L10.677 13.179L12 10.5ZM18 2.00002V5.00002L16.637 6.13802C15.5059 5.54461 14.2711 5.17486 13 5.04902V2.00002H18ZM11 1.99902V5.04902C9.72935 5.17467 8.49482 5.54408 7.364 6.13702L6 5.00002V2.00002L11 1.99902Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1153_18723">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className=" w-full">
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      multipleItemBg: "white",
                      optionFontSize: 16,
                      optionSelectedColor: "black",
                      controlOutline: "transparent",
                      colorPrimary: "#FBFCFC",
                      colorPrimaryHover: "transparent",
                      colorBorder: "transparent",
                      colorText: "rgb(30 140 133)",
                      fontSize: 16,
                      selectorBg: "#FBFCFC",
                      optionPadding: "10px 20px",
                      optionSelectedBg: "lightblue",
                    },
                  },
                }}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please select class type"
                  maxTagCount={"responsive"}
                  options={classTypeOption()}
                  onChange={(e) =>
                    setFilterValues&& setFilterValues((pre) => ({ ...pre, type: e }))
                  }
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="" className=" ml-1 text-[#777777]">
            Location
          </label>
          <div className="bg-[#FBFCFC] border border-[#EEEEEE] rounded-xl flex items-center mt-2">
            <div className="p-3 border-r">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                id="img"
              >
                <g clipPath="url(#clip0_894_13615)">
                  <path
                    d="M12 20.8999L16.95 15.9499C17.9289 14.9709 18.5955 13.7236 18.8656 12.3658C19.1356 11.0079 18.9969 9.60052 18.4671 8.32148C17.9373 7.04244 17.04 5.94923 15.8889 5.18009C14.7378 4.41095 13.3844 4.00043 12 4.00043C10.6156 4.00043 9.26222 4.41095 8.11109 5.18009C6.95996 5.94923 6.06275 7.04244 5.53292 8.32148C5.00308 9.60052 4.86442 11.0079 5.13445 12.3658C5.40449 13.7236 6.07111 14.9709 7.05 15.9499L12 20.8999ZM12 23.7279L5.636 17.3639C4.37734 16.1052 3.52019 14.5016 3.17293 12.7558C2.82567 11.0099 3.00391 9.20035 3.6851 7.55582C4.36629 5.91129 5.51984 4.50569 6.99988 3.51677C8.47992 2.52784 10.22 2 12 2C13.78 2 15.5201 2.52784 17.0001 3.51677C18.4802 4.50569 19.6337 5.91129 20.3149 7.55582C20.9961 9.20035 21.1743 11.0099 20.8271 12.7558C20.4798 14.5016 19.6227 16.1052 18.364 17.3639L12 23.7279ZM12 12.9999C12.5304 12.9999 13.0391 12.7892 13.4142 12.4141C13.7893 12.0391 14 11.5304 14 10.9999C14 10.4695 13.7893 9.96078 13.4142 9.58571C13.0391 9.21064 12.5304 8.99992 12 8.99992C11.4696 8.99992 10.9609 9.21064 10.5858 9.58571C10.2107 9.96078 10 10.4695 10 10.9999C10 11.5304 10.2107 12.0391 10.5858 12.4141C10.9609 12.7892 11.4696 12.9999 12 12.9999ZM12 14.9999C10.9391 14.9999 9.92172 14.5785 9.17158 13.8283C8.42143 13.0782 8 12.0608 8 10.9999C8 9.93906 8.42143 8.92164 9.17158 8.17149C9.92172 7.42135 10.9391 6.99992 12 6.99992C13.0609 6.99992 14.0783 7.42135 14.8284 8.17149C15.5786 8.92164 16 9.93906 16 10.9999C16 12.0608 15.5786 13.0782 14.8284 13.8283C14.0783 14.5785 13.0609 14.9999 12 14.9999Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_894_13615">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-full">
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      multipleItemBg: "white",
                      optionFontSize: 16,
                      optionSelectedColor: "black",
                      controlOutline: "transparent",
                      colorPrimary: "#FBFCFC",
                      colorPrimaryHover: "transparent",
                      colorBorder: "transparent",
                      colorText: "rgb(30 140 133)",
                      fontSize: 16,
                      selectorBg: "#FBFCFC",
                      optionPadding: "10px 20px",
                      optionSelectedBg: "lightblue",
                    },
                  },
                }}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  defaultValue={location}
                  placeholder="Please select Location"
                  maxTagCount={"responsive"}
                  options={locationOption()}
                  onChange={(e) =>
                    setFilterValues&&setFilterValues((pre) => ({ ...pre, location: e }))
                  }
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="" className=" ml-1 text-[#777777]">
            Day
          </label>
          <div className="bg-[#FBFCFC] border border-[#EEEEEE] rounded-xl flex items-center mt-2">
            <div className="p-3 border-r">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                id="img"
              >
                <g clipPath="url(#clip0_894_13629)">
                  <path
                    d="M17 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H7V1H9V3H15V1H17V3ZM20 9V5H17V7H15V5H9V7H7V5H4V9H20ZM20 11H4V19H20V11ZM6 13H11V17H6V13Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_894_13629">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-full">
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      multipleItemBg: "white",
                      optionFontSize: 16,
                      optionSelectedColor: "black",
                      controlOutline: "transparent",
                      colorPrimary: "#FBFCFC",
                      colorPrimaryHover: "transparent",
                      colorBorder: "transparent",
                      colorText: "rgb(30 140 133)",
                      fontSize: 16,
                      selectorBg: "#FBFCFC",
                      optionPadding: "10px 20px",
                      optionSelectedBg: "lightblue",
                    },
                  },
                }}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please select Day"
                  maxTagCount={"responsive"}
                  options={dayOption}
                  onChange={(e) =>
                    setFilterValues&&setFilterValues((pre) => ({ ...pre, day: e}))
                  }
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
