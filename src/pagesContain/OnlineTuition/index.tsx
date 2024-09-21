import React from "react";
import apihandler from "@/lib/apihandler";
import { Daum, JourneyTitle } from "@/types/type";
import Image from "next/image";

const OnlineTuition = async () => {
  const MaOnline = await apihandler({
    path: "/api/online_list_with_title",
    apiConfig: { method: "Get" },
  });
  return (
    <>
      <div className="pt-28 container">
        {MaOnline?.data?.map((data: Daum) => (
          <div key={data.id}>
            <h3 className="font-bold text-2xl md:text-4xl mb-10 text-center">
              {data.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-5">
              {data?.about_us?.map((about) => (
                <div className=" border pb-6 rounded-2xl " key={about.id}>
                  <div className=" h-52">
                    <Image
                    width={308}
                    height={208}
                    quality={100}
                      src={about.image_url}
                      alt={about.name}
                      className="rounded-t-2xl h-full w-full object-cover"
                    />
                  </div>
                  <p className="p-3 font-bold">{about.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-20">
          {MaOnline?.journeyTitles?.map((journey:JourneyTitle) => (
            <div key={journey.id}>
              <h3 className="font-bold text-2xl md:text-4xl mb-10 text-center">
                {journey.title}
              </h3>

              <div className="flex flex-col gap-9 mt-20">
                {journey?.journey?.map((data) => (
                  <div
                    className="flex flex-col md:flex-row md:even:flex-row-reverse  gap-10  "
                    key={data.id}
                  >
                    <div className="w-full md:w-1/2">
                      <h3 className="text-[#013668] font-bold text-xl mb-4">
                        {data.name}
                      </h3>
                      <p>{data.description}</p>
                    </div>
                    <div className="w-full md:w-1/2">
                      <Image
                      width={400}
                      height={400}
                      quality={100}
                        src={data.image_url}
                        alt= {data.name}
                        className=" object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OnlineTuition;
