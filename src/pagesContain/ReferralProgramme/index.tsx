import apihandler from "@/lib/apihandler";
import Image from "next/image";
import ReferralQuestion from "./sections/ReferralQuestion";
import ReferralForm from "./sections/ReferralForm";
import ReferralTerms from "./sections/ReferralTerms";
import { Toaster } from "@/components/ui/sonner";

const ReferralProgramme = async () => {
  // --get Referral Programme data--
  const referral = await apihandler({
    path: "/api/contact_us_list",
    apiConfig: { method: "GET" },
  });
  const referralData = referral?.data[0];
  return (
    <>
      <div className="pt-24 ">
        <div className="lg:h-[550px]">
          <Image
            width={900}
            height={550}
            quality={100}
            src={referralData?.image_url}
            alt={referralData?.title}
            className="w-full object-cover h-full"
          />
        </div>
        <div className=" bg-[#f1d3d5] ">
          <div className="container py-14 flex flex-col lg:flex-row justify-between items-center">
            <div className="max-w-[750px]">
              <h1 className="sm:text-2xl lg:text-5xl font-bold mb-2">
                {referralData?.title}
              </h1>

              <div className="mt-6 flex flex-col gap-5 font-medium ">
                <p className="">{referralData?.description}</p>
                <p>
                  Spread the joy and let&apos;s share the love of learning today
                </p>
                <p>Terms apply</p>
              </div>
            </div>

            <div className="w-full hidden lg:flex">
              <Image
              width={400}
              height={400}
                src={referralData?.logo_url}
                alt="image"
                className="rounded-xl w-full h-full  object-cover min-w-[400px]"
              />
            </div>
          </div>
        </div>

        <div className="container py-20">
          <h1 className="text-2xl lg:text-4xl mb-10 text-center">
            How Meowcademy&apos;s referral Programme Works
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className="flex flex-col items-center gap-7 w-full lg:w-1/2">
              <div className="w-14 h-14 text-2xl rounded-full bg-[#f3e9a1] flex justify-center items-center">
                1
              </div>
              <div className="text-2xl">Share</div>
              <div className="w-full sm:w-96">
                <Image width={384} height={384} src={"/rf1.png"} alt="share" />
              </div>
              <div className="text-center max-w-96">
                Share your personalised link with your friends. This link can be
                found in the email we sent you.
              </div>
            </div>
            <div className="flex flex-col items-center gap-7  lg:w-1/2">
              <div className="w-14 h-14 text-2xl rounded-full bg-[#f9d6dd] flex justify-center items-center">
                2
              </div>
              <div className="text-2xl">Enjoy</div>
              <div className="sm:w-96">
                <Image width={384} height={384} src={"/rf2.png"} alt="enjoy" />
              </div>
              <div className="text-center max-w-96">
                Upon the successful enrolment of your friend’s child in our core
                programmes, you will enjoy $300 off your child’s subsequent term
                fees.*.
              </div>
            </div>
          </div>
          <p className="text-center mt-10 italic">
            Terms and conditions apply.*
          </p>
        </div>

        <ReferralQuestion />
        <ReferralForm />
        <ReferralTerms />
        <Toaster />
      </div>
    </>
  );
};

export default ReferralProgramme;
