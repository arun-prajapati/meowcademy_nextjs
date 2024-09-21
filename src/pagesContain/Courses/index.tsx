import Breadcrumb from "@/components/Breadcrumb";
import apihandler from "@/lib/apihandler";
import { CourseDetailType } from "@/types/type";
import Image from "next/image";
import HeroSection from "./section/HeroSection";
import Accordion from "@/components/Accordion";
import CoverageComp from "@/components/CoverageComp";
import CourseRoadmap from "./section/CourseRoadmap";
import TestimonialSection from "../Home/sections/TestimonialSection/TestimonialSection";
import WhyMs from "../Home/sections/whyMs/WhyMs";
import LocationSection from "../Home/sections/LocationSection/LocationSection";
import Footer2 from "@/components/footer/Footer2";
import Schedules from "@/components/Schedules/Schedules";

const Courses = async({params}:{params:string}) => {
    const courseData = await apihandler({
        path: "/api/subject_list",
        apiConfig: { method: "POST",
            body: JSON.stringify({ slug: params }),
            headers: {
              "content-type": "application/json",
            },
         },
      });

       // --get Home Page data--
 const HomePageData = await apihandler({
  path: "/api/homepage_list",
  apiConfig: { method: "get" },
});
  return (
    <>
    {courseData?.data?.map((sub:CourseDetailType) => {
        return (
          <div key={sub.id} className="pt-24">
            {/* breadcrumbs  */}


            <Breadcrumb menu={sub.standard_name} submenu={sub.full_subject_name} redirect="levels" />

            {/* hero section */}

          <HeroSection sub={sub}/>

            {/* programme outline  */}

            <div className="container">
              <h6 className="text-primaryBlue text-lg font-bold mb-5 text-center mt-10">
                Programme outline
              </h6>

              <div className="coverage-component flex flex-col  lg:flex-row gap-3">
                <div className="coverage  lg:w-1/2">
                  <h3 className="font-bold text-2xl text-center md:text-4xl mb-9">
                    Coverage
                  </h3>
                  <div className="flex flex-col gap-3">
                    {sub.coverage.map((coverage, index) => (
                      <CoverageComp
                        key={index}
                        desc={coverage.description}
                        num={index}
                      />
                    ))}
                  </div>
                </div>
                <div className="component  lg:w-1/2">
                  <h3 className="font-bold text-2xl text-center md:text-4xl mb-9">
                    Components
                  </h3>
                  <div className="flex flex-col gap-3">
                    {sub.component.map((component, index) => (
                      <Accordion
                        key={index}
                        title={component.title}
                        desc={component.description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Plans */}

            <div className="container mt-28">
              <h3 className="text-center text-2xl md:text-4xl font-bold my-5">
                Lesson plans
              </h3>
              <div className="flex flex-col gap-3 mt-10">
                {sub.lessonplans.map((lesson, index) => (
                  <Accordion
                    key={index}
                    icon={lesson.logo_url}
                    title={lesson.title}
                    desc={lesson.description}
                  />
                ))}
              </div>
            </div>


                {/* Course roadmap */}
            <CourseRoadmap sub={sub}/>



            {/* --Schedules-- */}
             <Schedules level={sub.standard_name} subject={sub.sub_name}  />
          </div>
        );
      })}

<TestimonialSection />
      <WhyMs homePage={HomePageData?.data[0]?.about_us} />
      <LocationSection />
      <Footer2 />
    </>
    
    
  )
}

export default Courses