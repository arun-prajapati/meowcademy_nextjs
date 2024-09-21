import Breadcrumb from "@/components/Breadcrumb";
import apihandler from "@/lib/apihandler";
import formatDate from "@/lib/formatDate";
import { EventDataType } from "@/types/type";
import { CalendarCheck, CalendarHeart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Events = async () => {
  const eventList = await apihandler({
    path: "/api/event_list",
    apiConfig: { method: "POST" },
  });

  return (
    <>
      <div className="pt-24">
        {/* breadcrumbs section */}
        <Breadcrumb menu="events" />

        <div className="container">
          <h3 className="font-bold text-2xl md:text-4xl my-10">
            Explore Workshops
          </h3>

          <div className="border-t border-[#EEEEEE]">
            <div>
              {eventList?.data?.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {eventList?.data?.map((item: EventDataType) => (
                    <Link
                      href={`/events/${item.slug}`}
                      key={item.id}
                      className="border border-[#E3E3E3] flex flex-col rounded-xl cursor-pointer"
                    >
                      <div className="relative h-64">
                        {item.image_url ? (
                          <Image
                            src={item?.image_url}
                            alt={item.title}
                            width={256}
                            height={256}
                            quality={100}
                            className="object-cover w-full h-64 rounded-t-xl"
                          />
                        ) : (
                          <Image
                            src={"/notImage"}
                            alt="No image available"
                            width={256}
                            height={256}
                            className="object-cover w-full h-full rounded-t-xl"
                          />
                        )}

                        <div
                          className="absolute top-3 left-3 bg-white text-center font-bold px-3 py-2 rounded-md"
                          style={{
                            boxShadow: "0px 12px 12px rgba(25, 25, 25, 0.24)",
                          }}
                        >
                          <div>
                            {formatDate(item.start_date)} -{" "}
                            {formatDate(item.end_date)}
                          </div>
                          <div>2024</div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div>
                          <div className="flex gap-2 overflow-y-hidden overflow-x-auto whitespace-nowrap mb-2">
                            {item?.sub_name?.map((sub) => (
                              <div
                                className="bg-[#74C3BE] p-[10px] text-white text-xs rounded-md font-bold"
                                key={sub.id}
                              >
                                {sub}
                              </div>
                            ))}
                          </div>
                          <h5 className="font-bold text-lg">{item.title}</h5>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 bg-gray-100 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100px"
                    height="100px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >

                    <path
                      d="M8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H8Z"
                      fill="#013668"
                    />
                    <path
                      d="M7 17C7 16.4477 7.44772 16 8 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H8C7.44772 18 7 17.5523 7 17Z"
                      fill="#013668"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 3C8 2.44772 7.55228 2 7 2C6.44772 2 6 2.44772 6 3V4.10002C3.71776 4.56329 2 6.58104 2 9V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V9C22 6.58104 20.2822 4.56329 18 4.10002V3C18 2.44772 17.5523 2 17 2C16.4477 2 16 2.44772 16 3V4H8V3ZM20 10H4V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V10ZM4.17071 8C4.58254 6.83481 5.69378 6 7 6H17C18.3062 6 19.4175 6.83481 19.8293 8H4.17071Z"
                      fill="#013668"
                    />
                  </svg>{" "}
                  <div className="text-xl mt-5 font-semibold text-gray-700 mb-2">
                    No Events Available
                  </div>
                  <p className="text-gray-500 text-center">
                    There are currently no events scheduled. Please check back
                    later.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
