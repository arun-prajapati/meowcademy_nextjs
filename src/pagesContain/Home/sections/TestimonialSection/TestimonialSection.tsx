import React from "react";

import apihandler from "@/lib/apihandler";
import TestimonialSwiper from "./sections/TestimonialSwiper";

const TestimonialSection = async () => {
  // --get Testimonials data--
  const TestimonialData = await apihandler({
    path: "/api/testimonial_list",
    apiConfig: { method: "get" },
  });

  return (
    <section className=" mt-24">
      <div className="text-center">
        <h6 className="text-primaryBlue text-lg font-bold mb-5">
          Our testimonials
        </h6>
        <h3 className="font-bold text-2xl md:text-4xl mb-9">
          What our Students & their Parents say about us
        </h3>
      </div>

      <TestimonialSwiper TestimonialData={TestimonialData?.data} />
    </section>
  );
};

export default TestimonialSection;
