import axios from "axios";
import HeroSection from "./sections/Hero_Section/HeroSection";
import apihandler from "@/lib/apihandler";
import StatisticSection from "./sections/StatisticSection/StatisticSection";
import { HomePageTypes } from "@/types/type";
import ExploreCourse from "./sections/ExploreCourse/ExploreCourse";
import TestimonialSection from "./sections/TestimonialSection/TestimonialSection";
import WhyMs from "./sections/whyMs/WhyMs";
import LocationSection from "./sections/LocationSection/LocationSection";
import Footer2 from "@/components/footer/Footer2";

const Home = async () => {
  // --get Home Page data--
  const HomePageData= await apihandler({
    path: "/api/homepage_list",
    apiConfig: { method: "get" },
  });

  return (
    <>
      <HeroSection homePage={HomePageData?.data} />
      <StatisticSection homePage={HomePageData?.data} />
      <ExploreCourse />
      <TestimonialSection />
      <WhyMs homePage={HomePageData?.data[0]?.about_us} />
      <LocationSection />
      <Footer2 />
    </>
  );
};

export default Home;
