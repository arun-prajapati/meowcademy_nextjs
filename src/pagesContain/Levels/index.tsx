import apihandler from "@/lib/apihandler";
import HeroSection from "./sections/HeroSection";
import LevelSubject from "./sections/LevelSubject";
import { HomePageTypes, StandardType } from "@/types/type";
import Breadcrumb from "@/components/Breadcrumb";
import TestimonialSection from "../Home/sections/TestimonialSection/TestimonialSection";
import WhyMs from "../Home/sections/whyMs/WhyMs";
import LocationSection from "../Home/sections/LocationSection/LocationSection";
import Footer2 from "@/components/footer/Footer2";
import Head from "next/head";

const Level = async ({ params }: { params: string }) => {
  // --get Levels details based on slug--
  const subData: { data: StandardType[] } = await apihandler({
    path: "/api/standard_list",
    apiConfig: {
      method: "POST",
      body: JSON.stringify({ slug: params }),
      headers: {
        "content-type": "application/json",
      },
    },
  });
  console.log(subData)
  // --get Home Page data--
  const HomePageData = await apihandler({
    path: "/api/homepage_list",
    apiConfig: { method: "get" },
  });

  return (
    <>
      {subData?.data?.map((data: StandardType, index: number) => {
        return (
          <div key={index} className="pt-24">
           
            {/* breadcrumbs section */}

            <Breadcrumb menu={data?.std_name} redirect="levels" />

            <div className="container mt-10">
              {/* --hero section-- */}
              <HeroSection
                std_name={data?.std_name}
                description={data?.description}
                img={data?.image_url}
              />

              <div className="text-center mt-20" id="explore">
                <h6 className="text-primaryBlue text-lg font-bold mb-5">
                  {data.std_name} programmes {data.meta_description}
                </h6>
                <h3 className="font-bold text-2xl md:text-4xl mb-9">
                  Level up in core subjects
                </h3>
              </div>

              {/* level subject section */}

              <LevelSubject data={data?.subject} />
            </div>
          </div>
        );
      })}
      <TestimonialSection />
      <WhyMs homePage={HomePageData?.data[0]?.about_us} />
      <LocationSection />
      <Footer2 />
    </>
  );
};

export default Level;
