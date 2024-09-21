import { TestimonialCardType } from "@/types/type";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const TestimonialCard = ({ description, name, img, showContent }:TestimonialCardType) => {
    const [showMore, setShowMore] = useState(true);

  return (
    <>
    
    <div className="testimonial-grid flex transition-all duration-500  flex-col gap-5 border border-[#EEEEEE] rounded-xl p-8 ">

        {img && <div className="">
          <Image src={img} width={256} height={256} alt={name} priority className="mx-auto  rounded-t-full object-cover w-[256px] h-[256px]" />
        </div>
        }
        {showContent
          && <div className="h-full">

            <p className={twMerge(`review_quote`, showMore && "line-clamp-6")}>
              {description}
            </p>
            <p
              onClick={() => {
                setShowMore(!showMore);
              }}
              className="cursor-pointer text-[#74C3BE] font-bold"
            >
              {showMore ? "show more" : "show less"}
            </p>
            <p className="font-bold mt-3">{name}</p>
          </div>
        }

      </div>

    </>
  )
}

export default TestimonialCard
