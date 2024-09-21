import { WhyMsCardType } from "@/types/type";
import Image from "next/image";

const WhyMsCard = ({title,text,img,className}:WhyMsCardType) => {
  return (
    <>
      <div
        className={`pb-0 p-5 rounded-xl  border border-[#E3E3E3] flex flex-col justify-between ${className}`}
      >
        <div>
          <h5 className=" text-lg font-bold mb-3">{title}</h5>
          <p className="mb-8 text-sm">{text}</p>
        </div>
        <div className=" w-full  mx-auto flex justify-center">
          <Image
            src={img}
            alt={title}
            width={300}
            height={208}
            quality={100}
            className=" object-cover h-[208px] w-[300px] rounded-t-xl"
          />
        </div>
      </div>
    </>
  );
};

export default WhyMsCard;
