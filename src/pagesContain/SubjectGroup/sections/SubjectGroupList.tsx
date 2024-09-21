import apihandler from "@/lib/apihandler";
import { GroupListType2 } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SubjectGroupList = async () => {

  const GroupData = await apihandler({
    path: "/api/group_list",
    apiConfig: { method: "POST" },
  });
  const colors = ["blue", "green", "orange", "red", "purple", "yellow"];

  return (<>
      <div className="mt-20 container">
        <h3 className="text-2xl md:text-4xl font-bold mb-10">
          You may be interested...
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6  ">
          {GroupData?.data?.map((group:GroupListType2, index:number) => {
            const color = colors[index % colors.length];
            return (
              <Link
                key={group.id}
                href={`/course-roadmaps/${group.slug}`}
                className="flex"
              >
                <div
                  className={` px-7 py-4 border border-[#E3E3E3] rounded-xl cursor-pointer ${color}`}
                >
                  <div className="flex justify-between gap-4 items-center text-primaryBlue">
                    <div className="">
                      <Image
                        src={group.image_url}
                        alt= {group.group_name}
                        width={56}
                        height={56}
                        quality={100}
                        className="w-14 h-14 rounded-full object-cover"
                        style={{
                          boxShadow: "0px 6px 6px rgba(25, 25, 25, 0.24)",
                        }}
                      />
                    </div>

                    <div className=" flex-1 ">
                      <h3 className=" text-[18px] font-bold">
                        {group.group_name}
                      </h3>
                    </div>

                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        id="img"
                      >
                        <g clipPath="url(#clip0_396_1506)">
                          <path
                            d="M16.672 11.5246L11.308 6.16058L12.722 4.74658L20.5 12.5246L12.722 20.3026L11.308 18.8886L16.672 13.5246H4.5V11.5246H16.672Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_396_1506">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0.5 0.524414)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="mt-6 ">
                    <p className="">{group.description}</p>
                  </div>
                
                </div>
              </Link>
            );
          })}
        </div>
      </div>
  
  </>);
};

export default SubjectGroupList;
