import { roadmap } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge';

const SubjectGRoadmap = ({roadmap}:{roadmap:roadmap}) => {
    const [showMore, setShowMore] = useState(true);

  return (
   <>
    <div
                key={roadmap.id}
                className=" relative border rounded-xl  p-3 flex flex-col"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(220, 233, 255, 1.0) 0%, white 33%)",
                }}
              >
                <div className=" flex flex-col gap-5">
                  <div className=" h-60 ">
                    <Image
                      width={512}
                      height={240}
                      quality={100}
                      src={roadmap.image_url}
                      alt={roadmap?.title}
                      className="w-[512px] h-[240px] object-cover rounded-xl mx-auto"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#013668] font-bold text-xl mb-4">
                      
                      {roadmap?.title}
                    </h3>
                    <p className={twMerge(``, showMore && "line-clamp-6")}>
                      {roadmap?.description}
                    </p>
                    <p
                      onClick={() => {
                        setShowMore(!showMore);
                      }}
                      className="cursor-pointer text-[#74C3BE] font-bold"
                    >
                      {showMore ? "show more" : "show less"}
                    </p>
                  </div>

                  <div>
                    <hr />
                    <div className="flex flex-col gap-4 my-4">
                      {roadmap?.sub_name?.map((sub) => (
                        <Link href={`/courses/${sub.slug}`} key={sub.id}>
                          {" "}
                          <button className="button w-full text-nowrap text-ellipsis overflow-hidden ">
                            {sub.full_subject_name}
                          </button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
   </>
  )
}

export default SubjectGRoadmap