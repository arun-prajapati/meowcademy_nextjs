import Breadcrumb from "@/components/Breadcrumb";
import apihandler from "@/lib/apihandler";
import TestimonialSection from "@/pagesContain/Home/sections/TestimonialSection/TestimonialSection";
import TeachersCard from "@/pagesContain/MeowTutors/sections/TeachersCard";
import { EventDataType } from "@/types/type";
import Image from "next/image";
import React from "react";
import EventDate from "./EventDate";
import Accordion from "@/components/Accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventPrice from "./EventPrice";

const DetailedEvent = async ({ params }: { params: string }) => {
  const eventData = await apihandler({
    path: "/api/event_list",
    apiConfig: {
      method: "POST",
      body: JSON.stringify({ slug: params }),

      headers: {
        "content-type": "application/json",
      },
    },
  });

  const colors = ["blue", "green", "orange", "red", "purple", "yellow"];

  return (
    <>
      {eventData?.data?.map((event: EventDataType) => (
        <div className=" pt-24" key={event.id}>
          {/* breadcrumbs section */}
          <Breadcrumb menu="events" submenu={params} />

          <div className="container mt-10">
            {/* hero section */}
            <div className="flex flex-col-reverse items-center xl:flex-row justify-between gap-5">
              <div className="items-center text-center xl:max-w-[560px] xl:text-left xl:items-start flex flex-col gap-5 justify-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {event.title}
                </h1>

                <p className="text-xl font-normal mb-6 mt-6">
                  {event.description}
                </p>

                <div className="mt-4 flex flex-col md:flex-row gap-2">
                  <button className=" button flex items-center justify-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      id="img"
                    >
                      <g clipPath="url(#clip0_396_1749)">
                        <path
                          d="M7.25301 18.494L7.97701 18.917C9.19795 19.6291 10.5866 20.0029 12 20C13.5823 20 15.129 19.5308 16.4446 18.6518C17.7602 17.7727 18.7855 16.5233 19.3911 15.0615C19.9966 13.5997 20.155 11.9911 19.8463 10.4393C19.5376 8.88743 18.7757 7.46197 17.6569 6.34315C16.538 5.22433 15.1126 4.4624 13.5607 4.15372C12.0089 3.84504 10.4004 4.00346 8.93855 4.60896C7.47674 5.21447 6.22731 6.23984 5.34826 7.55544C4.46921 8.87103 4.00001 10.4177 4.00001 12C4.00001 13.436 4.37701 14.813 5.08401 16.024L5.50601 16.748L4.85301 19.149L7.25301 18.494ZM2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.52501 7.298 8.66001 7.298 8.79401 7.304C8.84801 7.308 8.90201 7.314 8.95601 7.32C9.11501 7.338 9.29001 7.435 9.34901 7.569C9.64701 8.245 9.93701 8.926 10.217 9.609C10.279 9.761 10.242 9.956 10.124 10.146C10.0429 10.2745 9.95507 10.3986 9.86101 10.518C9.74801 10.663 9.50501 10.929 9.50501 10.929C9.50501 10.929 9.40601 11.047 9.44401 11.194C9.45801 11.25 9.50401 11.331 9.54601 11.399L9.60501 11.494C9.86101 11.921 10.205 12.354 10.625 12.762C10.745 12.878 10.862 12.997 10.988 13.108C11.456 13.521 11.986 13.858 12.558 14.108L12.563 14.11C12.648 14.147 12.691 14.167 12.815 14.22C12.877 14.246 12.941 14.269 13.006 14.286C13.0732 14.3031 13.1439 14.2999 13.2093 14.2767C13.2746 14.2536 13.3316 14.2116 13.373 14.156C14.097 13.279 14.163 13.222 14.169 13.222V13.224C14.2193 13.1771 14.2791 13.1415 14.3443 13.1196C14.4095 13.0977 14.4786 13.09 14.547 13.097C14.607 13.101 14.668 13.112 14.724 13.137C15.255 13.38 16.124 13.759 16.124 13.759L16.706 14.02C16.804 14.067 16.893 14.178 16.896 14.285C16.9 14.352 16.906 14.46 16.883 14.658C16.851 14.917 16.773 15.228 16.695 15.391C16.6416 15.5022 16.5707 15.6042 16.485 15.693C16.3841 15.7989 16.2736 15.8954 16.155 15.981C16.114 16.0119 16.0723 16.0419 16.03 16.071C15.9056 16.1499 15.7778 16.2233 15.647 16.291C15.3895 16.4278 15.1052 16.5063 14.814 16.521C14.629 16.531 14.444 16.545 14.258 16.535C14.25 16.535 13.69 16.448 13.69 16.448C12.2683 16.074 10.9534 15.3735 9.85001 14.402C9.62401 14.203 9.41501 13.989 9.20101 13.776C8.31101 12.891 7.63901 11.936 7.23101 11.034C7.02218 10.5913 6.90938 10.1094 6.90001 9.62C6.89589 9.01285 7.09436 8.42167 7.46401 7.94C7.53701 7.846 7.60601 7.748 7.72501 7.635C7.85201 7.515 7.93201 7.451 8.01901 7.407C8.13469 7.34903 8.26088 7.31502 8.39001 7.307L8.39101 7.308Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_396_1749">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    chat with us
                  </button>
                </div>
              </div>
              <div className=" h-[500px] flex-1     flex justify-center  items-center  rounded-2xl ">
                <Image
                  width={500}
                  height={500}
                  src={event.image_url}
                  alt={event.title}
                  className="rounded-2xl object-cover w-[500px] h-[500px]"
                  priority
                />
              </div>
            </div>

            {/* Workshop highlights */}

            <div className="mt-20">
              <h3 className="font-bold text-2xl md:text-4xl text-center mb-10">
                Workshop Highlights
              </h3>
              {event?.event__highlights &&
              event.event__highlights.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {event.event__highlights.map((highlight) => (
                    <div
                      className="border border-[#EEEEEE] p-4 rounded-xl"
                      key={highlight.id}
                    >
                      <div className="flex border-b justify-between border-[#EEEEEE] pb-4 items-center font-bold text-xl">
                        <div className="flex items-center gap-2">
                          <div className="w-12">
                            <Image
                              width={40}
                              height={40}
                              src={highlight.image_url}
                              alt="icon"
                            />
                          </div>
                          {highlight.title}
                        </div>
                      </div>
                      <div className="mt-4 font-semibold">
                        {highlight.description}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  No workshop highlights available at this time.
                </div>
              )}
            </div>

            {/* Event Price */}

            <div className="text-center mt-20">
              <h6 className="text-primaryBlue text-lg font-bold mb-6">
                What you are paying for
              </h6>
              <h3 className="font-bold text-2xl md:text-4xl mb-7">
                Incredible value at an affordable price
              </h3>

              <Tabs defaultValue="meowYes">
                <TabsList>
                  <TabsTrigger value="meowYes">Meow Student</TabsTrigger>
                  <TabsTrigger value="meowNo">Non-Meow Student</TabsTrigger>
                </TabsList>
                <TabsContent value="meowYes">
                  <EventPrice event={event} price={event.price_for_yes}/>
                </TabsContent>
                <TabsContent value="meowNo">
                <EventPrice event={event} price={event.price_for_no}/>
                </TabsContent>
              </Tabs>

            </div>

            {/* Event Date and topic */}

            <div className="mt-20">
              <div className="coverage-component flex flex-col lg:flex-row gap-5">
                {/* Event Date Section */}
                <div className="coverage lg:w-1/2">
                  <h3 className="font-bold text-2xl text-center md:text-4xl mb-9">
                    Event Date
                  </h3>
                  {event?.event_date && event.event_date.length > 0 ? (
                    <div className="flex flex-col gap-3">
                      {event.event_date.map((date) => (
                        <EventDate
                          key={date.id}
                          title={date.title}
                          type={date.type}
                          start_date={date.start_date}
                          end_date={date.end_date}
                          start_time={date.start_time}
                          end_time={date.end_time}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-gray-500">
                      No event dates available.
                    </div>
                  )}
                </div>

                {/* Topics Section */}
                <div className="component lg:w-1/2">
                  <h3 className="font-bold text-2xl text-center md:text-4xl mb-9">
                    Topics
                  </h3>
                  {event?.event_topic && event.event_topic.length > 0 ? (
                    <div className="flex flex-col gap-3">
                      {event.event_topic.map((date) => (
                        <Accordion
                          key={date.id}
                          title={date.title}
                          desc={date.description}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-gray-500">
                      No topics available.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Event Teachers */}
            {event?.teacher && event?.teacher?.length > 0 && (
              <>
                <div className="mt-20">
                  <h3 className="font-bold text-2xl text-center md:text-4xl mb-9">
                    Master teachers
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {event?.teacher?.map((teacher, index) => {
                      const color = colors[index % colors.length];

                      return (
                        <TeachersCard
                          key={teacher.id}
                          teacher={teacher}
                          color={color}
                        />
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {/* Testimonial section  */}
          </div>
          <TestimonialSection />

          {/* FAQs Section  */}

          {/* <Faqs /> */}
        </div>
      ))}
    </>
  );
};

export default DetailedEvent;
