import Link from "next/link"

import apihandler from "@/lib/apihandler";
import LocationSwiper from "./sections/LocationSwiper";

const LocationSection = async() => {
  
  const location = await apihandler({
    path: "/api/location_list",
    apiConfig: { method: "POST" },
  });
  return (
   <>
     <section className=" mt-24">
        <div className="text-center">
          <h6 className="text-primaryBlue text-lg font-bold mb-5">
            Our locations
          </h6>
          <h3 className="font-bold text-xl md:text-4xl mb-9">
            Serving thousands of parents and students islandwide
          </h3>
        </div>

       <LocationSwiper location={location?.data}/>
        <div className="location_btn text-center mt-6">
          <Link href="/locations">
            <button className="button flex items-center m-auto gap-2">
              Our locations
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                id="img"
              >
                <g clipPath="url(#clip0_396_1506)">
                  <path
                    d="M16.672 11.5246L11.308 6.16058L12.722 4.74658L20.5 12.5246L12.722 20.3026L11.308 18.8886L16.672 13.5246H4.5V11.5246H16.672Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_396_1506">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5 0.524414)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>{" "}
          </Link>
        </div>
      </section>
   </>
  )
}

export default LocationSection
