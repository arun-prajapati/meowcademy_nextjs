"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import apihandler from "@/lib/apihandler";
import { LevelListType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ExploreTab = ({
  level,
  standards,
}: {
  level: LevelListType[];
  standards: any;
}) => {
  const [activeTab, setActiveTab] = useState(level?.[0]?.name || "");
  const standard = standards[activeTab] || [];
  const colors = ["blue", "green", "orange", "red", "purple", "yellow"];

  return (
    <>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList>
          {level?.map((e: LevelListType) => (
            <TabsTrigger value={e.name} key={e?.id}>
              {e.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeTab}>
          <div className="tab_content grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
            {standard?.data?.map((data: any, index: number) => {
              let stdtitle = data.slug.replace(/\s+/g, "-").toLowerCase();
              const color = colors[index % colors.length];
              return (
                <Link
                  key={index}
                  href={`/levels/${stdtitle}`}
                  className={` pb-0 pt-5 cursor-pointer pl-5 pr-12 rounded-xl  border border-[#E3E3E3]   relative ${color}`}
                >
                  <div className="flex flex-col gap-1 h-full justify-between">
                    <div>
                      <h5 className=" text-lg text-primaryBlue font-bold mb-3">
                        {data.std_name}
                      </h5>
                      <p className="mb-8 text-sm">{data.description} </p>
                    </div>
                    <div className="min-h-24 mt-6  overflow-auto flex items-center gap-3 flex-wrap mb-5">
                      {data?.logo_url.map((logo: string) => (
                        <div key={logo} className=" w-14 h-16  p-1  rounded-md">
                          <Image
                            src={logo}
                            alt="logo"
                            width={56}
                            height={64}
                            quality={100}
                            className="mr-3 w-full h-full object-cover  mb-3 "
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-end w-full">
                      <div className=" w-full h-40 flex  items-end justify-end">
                        <Image
                          src={data.image_url}
                          width={160}
                          height={160}
                          alt="icon"
                          className=" rounded-t-full h-[160px] w-[160px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ExploreTab;
