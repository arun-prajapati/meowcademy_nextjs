import Breadcrumb from "@/components/Breadcrumb";
import apihandler from "@/lib/apihandler";
import { LocationDataType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

const Location = async () => {
  const location = await apihandler({
    path: "/api/location_list",
    apiConfig: { method: "POST" },
  });
  return (
    <>
      <div className="pt-24">
        <Breadcrumb menu="Locations" />
      </div>

      <div className="container allLocationDiv my-8">
        <h3 className="text-center text-4xl font-bold mb-10">Our Locations</h3>

        <div className="locationGrid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
          {location?.data?.map((data: LocationDataType, index: number) => (
            <div
              key={index}
              className="locationcard  border border-[#E3E3E3] p-3 flex flex-col  rounded-xl"
            >
              <div>
                <Image
                  width={240}
                  height={200}
                  priority
                  quality={100}
                  src={data.image_url}
                  alt={data.title}
                  className="rounded-lg h-60  mx-auto object-contain"
                />
              </div>
              <div className="flex-grow">
                <p className=" mt-4 text-xl text-primaryBlue font-bold">
                  {data.title}
                </p>
                <div className="flex gap-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    id="img"
                  >
                    <g clipPath="url(#clip0_913_7637)">
                      <path
                        d="M12.5 20.8999L17.45 15.9499C18.4289 14.9709 19.0955 13.7236 19.3656 12.3658C19.6356 11.0079 19.4969 9.60052 18.9671 8.32148C18.4373 7.04244 17.54 5.94923 16.3889 5.18009C15.2378 4.41095 13.8844 4.00043 12.5 4.00043C11.1156 4.00043 9.76222 4.41095 8.61109 5.18009C7.45996 5.94923 6.56275 7.04244 6.03292 8.32148C5.50308 9.60052 5.36442 11.0079 5.63445 12.3658C5.90449 13.7236 6.57111 14.9709 7.55 15.9499L12.5 20.8999ZM12.5 23.7279L6.136 17.3639C4.87734 16.1052 4.02019 14.5016 3.67293 12.7558C3.32567 11.0099 3.50391 9.20035 4.1851 7.55582C4.86629 5.91129 6.01984 4.50569 7.49988 3.51677C8.97992 2.52784 10.72 2 12.5 2C14.28 2 16.0201 2.52784 17.5001 3.51677C18.9802 4.50569 20.1337 5.91129 20.8149 7.55582C21.4961 9.20035 21.6743 11.0099 21.3271 12.7558C20.9798 14.5016 20.1227 16.1052 18.864 17.3639L12.5 23.7279ZM12.5 12.9999C13.0304 12.9999 13.5391 12.7892 13.9142 12.4141C14.2893 12.0391 14.5 11.5304 14.5 10.9999C14.5 10.4695 14.2893 9.96078 13.9142 9.58571C13.5391 9.21064 13.0304 8.99992 12.5 8.99992C11.9696 8.99992 11.4609 9.21064 11.0858 9.58571C10.7107 9.96078 10.5 10.4695 10.5 10.9999C10.5 11.5304 10.7107 12.0391 11.0858 12.4141C11.4609 12.7892 11.9696 12.9999 12.5 12.9999ZM12.5 14.9999C11.4391 14.9999 10.4217 14.5785 9.67158 13.8283C8.92143 13.0782 8.5 12.0608 8.5 10.9999C8.5 9.93906 8.92143 8.92164 9.67158 8.17149C10.4217 7.42135 11.4391 6.99992 12.5 6.99992C13.5609 6.99992 14.5783 7.42135 15.3284 8.17149C16.0786 8.92164 16.5 9.93906 16.5 10.9999C16.5 12.0608 16.0786 13.0782 15.3284 13.8283C14.5783 14.5785 13.5609 14.9999 12.5 14.9999Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_913_7637">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  {data.address}
                </div>
                <div className="flex gap-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    id="img"
                  >
                    <g clipPath="url(#clip0_1327_17175)">
                      <path
                        d="M3.5 3.56299H21.5C21.7652 3.56299 22.0196 3.66835 22.2071 3.85588C22.3946 4.04342 22.5 4.29777 22.5 4.56299V20.563C22.5 20.8282 22.3946 21.0826 22.2071 21.2701C22.0196 21.4576 21.7652 21.563 21.5 21.563H3.5C3.23478 21.563 2.98043 21.4576 2.79289 21.2701C2.60536 21.0826 2.5 20.8282 2.5 20.563V4.56299C2.5 4.29777 2.60536 4.04342 2.79289 3.85588C2.98043 3.66835 3.23478 3.56299 3.5 3.56299ZM20.5 7.80099L12.572 14.901L4.5 7.77899V19.563H20.5V7.80099ZM5.011 5.56299L12.561 12.225L20.002 5.56299H5.011Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1327_17175">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5 0.562988)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  {data.email}
                </div>
                <div className="flex gap-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    id="img"
                  >
                    <g clipPath="url(#clip0_1327_17180)">
                      <path
                        d="M9.866 11.245C10.8043 12.8935 12.1695 14.2587 13.818 15.197L14.702 13.959C14.8442 13.7599 15.0543 13.6199 15.2928 13.5653C15.5313 13.5108 15.7814 13.5455 15.996 13.663C17.4103 14.4359 18.9722 14.9008 20.579 15.027C20.8298 15.0469 21.0638 15.1605 21.2345 15.3453C21.4052 15.5301 21.5 15.7724 21.5 16.024V20.486C21.5001 20.7336 21.4083 20.9724 21.2424 21.1562C21.0765 21.34 20.8483 21.4557 20.602 21.481C20.072 21.536 19.538 21.563 19 21.563C10.44 21.563 3.5 14.623 3.5 6.06299C3.5 5.52499 3.527 4.99099 3.582 4.46099C3.60725 4.21469 3.72298 3.98651 3.90679 3.82062C4.0906 3.65474 4.32941 3.56293 4.577 3.56299H9.039C9.29056 3.56296 9.5329 3.65774 9.71768 3.82844C9.90247 3.99914 10.0161 4.23321 10.036 4.48399C10.1622 6.09078 10.6271 7.65267 11.4 9.06699C11.5175 9.28155 11.5522 9.53173 11.4977 9.77018C11.4431 10.0086 11.3031 10.2188 11.104 10.361L9.866 11.245ZM7.344 10.588L9.244 9.23099C8.70478 8.06708 8.33535 6.83183 8.147 5.56299H5.51C5.504 5.72899 5.501 5.89599 5.501 6.06299C5.5 13.519 11.544 19.563 19 19.563C19.167 19.563 19.334 19.56 19.5 19.553V16.916C18.2312 16.7276 16.9959 16.3582 15.832 15.819L14.475 17.719C13.9287 17.5067 13.398 17.2561 12.887 16.969L12.829 16.936C10.8676 15.8197 9.24328 14.1954 8.127 12.234L8.094 12.176C7.80691 11.665 7.55628 11.1343 7.344 10.588Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1327_17180">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5 0.562988)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  {data.phone_number}
                </div>
              </div>
              <div className="flex   gap-3 mt-5 w-full">
                <div className="button-container  w-full">
                  <Link
                    className=" flex  gap-1 ExploreBtn justify-center"
                    href={`/locations/${data.slug}`}
                  >
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
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Location;
