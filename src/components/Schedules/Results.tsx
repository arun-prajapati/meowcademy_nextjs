"use client";
import { liveResult_action } from "@/app/actions/live_filter";
import { BasketContext } from "@/context/BasketContextProvider";
import { ClassResultType, FilterValuesType } from "@/types/type";
import { LoaderCircle } from "lucide-react";
import React, { useContext, useState, useEffect } from "react";
import { toast } from "sonner";

const Results = ({ filterValues }: { filterValues: FilterValuesType }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [scheduleResult, setScheduleResult] = useState<ClassResultType[]>([]);
  const basketContext = useContext(BasketContext);
  const [isLoading, setIsLoading] = useState(false);
  const cartData = basketContext?.cartData;
  const addToCart = basketContext?.addToCart;
  const removeToCart = basketContext?.removeToCart;

  // Fetch Schedule List data
  const fetchScheduleResult = async () => {
    try {
      setIsLoading(true);
      const result = await liveResult_action({ ...filterValues, paginate: 1 });
      setScheduleResult(result.data);
    } catch (error) {
      toast.error("Failed to show results!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchScheduleResult();
  }, [filterValues]);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center mt-10 text-primaryBlue">
          <LoaderCircle className="animate-spin w-12 h-12" />
        </div>
      ) : (
        <>
          <h3 className="text-center text-3xl font-bold mt-28 mb-10">
            {scheduleResult.length} results
          </h3>
          {seeMore ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {scheduleResult &&
                scheduleResult.map((result, index) => {
                  return (
                    <div
                      className=" p-6 border border-[#EEEEEE] rounded-xl "
                      key={index}
                    >
                      {cartData?.find((f) => f.id === result?.id) ? (
                        <div
                          onClick={() => {
                            const itemInCart = cartData.find(
                              (f) => f.id === result.id
                            );
                            if (itemInCart && removeToCart) {
                              removeToCart(result.id);
                            } else if (addToCart) {
                              addToCart(result);
                            }
                          }}
                          className=" float-right w-16 h-16 rounded-full bg-[#74C3BE] flex items-center justify-center text-white cursor-pointer cart-btn transition-all"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            id="img"
                          >
                            <g clipPath="url(#clip0_894_16397)">
                              <path d="M5 11H19V13H5V11Z" fill="currentColor" />
                            </g>
                            <defs>
                              <clipPath id="clip0_894_16397">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            const itemInCart = cartData?.find(
                              (f) => f.id === result.id
                            );
                            if (itemInCart && removeToCart) {
                              removeToCart(result.id);
                            } else if (addToCart) {
                              addToCart(result);
                            }
                          }}
                          className=" float-right w-16 h-16 rounded-full bg-primaryBlue flex items-center justify-center text-white cursor-pointer cart-btn transition-all"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            id="img"
                          >
                            <g clipPath="url(#clip0_894_16362)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.756836 3.17208L3.99984 6.41408V18.0001C3.99984 18.2653 4.10519 18.5197 4.29273 18.7072C4.48027 18.8947 4.73462 19.0001 4.99984 19.0001H16.9998V17.0001H5.99984V15.0001H18.2558C18.471 15.0001 18.6804 14.9307 18.853 14.8023C19.0255 14.6738 19.1521 14.4932 19.2138 14.2871L21.6138 6.28708C21.6586 6.13777 21.6678 5.98007 21.6407 5.82657C21.6137 5.67306 21.5511 5.52801 21.4581 5.40298C21.365 5.27794 21.244 5.1764 21.1047 5.10645C20.9654 5.03649 20.8117 5.00007 20.6558 5.00008H5.41384L2.17184 1.75708L0.756836 3.17208ZM4.43918 22.5607C4.72048 22.842 5.10201 23.0001 5.49984 23.0001C5.89766 23.0001 6.27919 22.842 6.5605 22.5607C6.8418 22.2794 6.99984 21.8979 6.99984 21.5001C6.99984 21.1023 6.8418 20.7207 6.5605 20.4394C6.27919 20.1581 5.89766 20.0001 5.49984 20.0001C5.10201 20.0001 4.72048 20.1581 4.43918 20.4394C4.15787 20.7207 3.99984 21.1023 3.99984 21.5001C3.99984 21.8979 4.15787 22.2794 4.43918 22.5607ZM16.4392 22.5607C16.7205 22.842 17.102 23.0001 17.4998 23.0001C17.8977 23.0001 18.2792 22.842 18.5605 22.5607C18.8418 22.2794 18.9998 21.8979 18.9998 21.5001C18.9998 21.1023 18.8418 20.7207 18.5605 20.4394C18.2792 20.1581 17.8977 20.0001 17.4998 20.0001C17.102 20.0001 16.7205 20.1581 16.4392 20.4394C16.1579 20.7207 15.9998 21.1023 15.9998 21.5001C15.9998 21.8979 16.1579 22.2794 16.4392 22.5607ZM16 11.0039V9.01176H13.051V6H10.949V9.01176H8V11.0039H10.949V14H13.051V11.0039H16Z"
                                fill="currentColor"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_894_16362">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      )}

                      <div className="text-[18px] font-bold">
                        {result.full_name}
                      </div>
                      <div className="mb-4">{result.type}</div>
                      <div className="flex items-center gap-3 mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          id="img"
                        >
                          <g clipPath="url(#clip0_396_5888)">
                            <path
                              d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM8.5 14H14C14.1326 14 14.2598 13.9473 14.3536 13.8536C14.4473 13.7598 14.5 13.6326 14.5 13.5C14.5 13.3674 14.4473 13.2402 14.3536 13.1464C14.2598 13.0527 14.1326 13 14 13H10C9.33696 13 8.70107 12.7366 8.23223 12.2678C7.76339 11.7989 7.5 11.163 7.5 10.5C7.5 9.83696 7.76339 9.20107 8.23223 8.73223C8.70107 8.26339 9.33696 8 10 8H11V6H13V8H15.5V10H10C9.86739 10 9.74021 10.0527 9.64645 10.1464C9.55268 10.2402 9.5 10.3674 9.5 10.5C9.5 10.6326 9.55268 10.7598 9.64645 10.8536C9.74021 10.9473 9.86739 11 10 11H14C14.663 11 15.2989 11.2634 15.7678 11.7322C16.2366 12.2011 16.5 12.837 16.5 13.5C16.5 14.163 16.2366 14.7989 15.7678 15.2678C15.2989 15.7366 14.663 16 14 16H13V18H11V16H8.5V14Z"
                              fill="currentColor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_396_5888">
                              <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        {result.price} SGD
                      </div>
                      <div className="flex items-center gap-3 mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          id="img"
                        >
                          <g clipPath="url(#clip0_1199_10287)">
                            <path
                              d="M17 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H7V1H9V3H15V1H17V3ZM20 9V5H17V7H15V5H9V7H7V5H4V9H20ZM20 11H4V19H20V11ZM6 13H11V17H6V13Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1199_10287">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        AY{result.year}
                      </div>
                      <div className="flex items-center gap-3 mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          id="img"
                        >
                          <g clipPath="url(#clip0_913_7530)">
                            <path
                              d="M12.5 22C6.977 22 2.5 17.523 2.5 12C2.5 6.477 6.977 2 12.5 2C18.023 2 22.5 6.477 22.5 12C22.5 17.523 18.023 22 12.5 22ZM12.5 20C14.6217 20 16.6566 19.1571 18.1569 17.6569C19.6571 16.1566 20.5 14.1217 20.5 12C20.5 9.87827 19.6571 7.84344 18.1569 6.34315C16.6566 4.84285 14.6217 4 12.5 4C10.3783 4 8.34344 4.84285 6.84315 6.34315C5.34285 7.84344 4.5 9.87827 4.5 12C4.5 14.1217 5.34285 16.1566 6.84315 17.6569C8.34344 19.1571 10.3783 20 12.5 20ZM13.5 12H17.5V14H11.5V7H13.5V12Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_913_7530">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        {result.day} , {result.start_time} - {result.end_time}
                      </div>
                      <div className="flex items-center gap-3">
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
                        {result.loc_name}{" "}
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {scheduleResult &&
                scheduleResult.slice(0, 6).map((result, index) => {
                  return (
                    <div
                      className=" p-6 border border-[#EEEEEE] rounded-xl "
                      key={index}
                    >
                      {cartData?.find((f) => f.id === result.id) ? (
                        <div
                          onClick={() => {
                            const itemInCart = cartData.find(
                              (f) => f.id === result.id
                            );
                            if (itemInCart && removeToCart) {
                              removeToCart(result.id);
                            } else if (addToCart) {
                              addToCart(result);
                            }
                          }}
                          className=" float-right w-16 h-16 rounded-full bg-[#74C3BE] flex items-center justify-center text-white cursor-pointer cart-btn transition-all"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            id="img"
                          >
                            <g clipPath="url(#clip0_894_16397)">
                              <path d="M5 11H19V13H5V11Z" fill="currentColor" />
                            </g>
                            <defs>
                              <clipPath id="clip0_894_16397">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            const itemInCart = cartData?.find(
                              (f) => f.id === result.id
                            );
                            if (itemInCart && removeToCart) {
                              removeToCart(result.id);
                            } else if (addToCart) {
                              addToCart(result);
                            }
                          }}
                          className=" float-right w-16 h-16 rounded-full bg-primaryBlue flex items-center justify-center text-white cursor-pointer cart-btn transition-all"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            id="img"
                          >
                            <g clipPath="url(#clip0_894_16362)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.756836 3.17208L3.99984 6.41408V18.0001C3.99984 18.2653 4.10519 18.5197 4.29273 18.7072C4.48027 18.8947 4.73462 19.0001 4.99984 19.0001H16.9998V17.0001H5.99984V15.0001H18.2558C18.471 15.0001 18.6804 14.9307 18.853 14.8023C19.0255 14.6738 19.1521 14.4932 19.2138 14.2871L21.6138 6.28708C21.6586 6.13777 21.6678 5.98007 21.6407 5.82657C21.6137 5.67306 21.5511 5.52801 21.4581 5.40298C21.365 5.27794 21.244 5.1764 21.1047 5.10645C20.9654 5.03649 20.8117 5.00007 20.6558 5.00008H5.41384L2.17184 1.75708L0.756836 3.17208ZM4.43918 22.5607C4.72048 22.842 5.10201 23.0001 5.49984 23.0001C5.89766 23.0001 6.27919 22.842 6.5605 22.5607C6.8418 22.2794 6.99984 21.8979 6.99984 21.5001C6.99984 21.1023 6.8418 20.7207 6.5605 20.4394C6.27919 20.1581 5.89766 20.0001 5.49984 20.0001C5.10201 20.0001 4.72048 20.1581 4.43918 20.4394C4.15787 20.7207 3.99984 21.1023 3.99984 21.5001C3.99984 21.8979 4.15787 22.2794 4.43918 22.5607ZM16.4392 22.5607C16.7205 22.842 17.102 23.0001 17.4998 23.0001C17.8977 23.0001 18.2792 22.842 18.5605 22.5607C18.8418 22.2794 18.9998 21.8979 18.9998 21.5001C18.9998 21.1023 18.8418 20.7207 18.5605 20.4394C18.2792 20.1581 17.8977 20.0001 17.4998 20.0001C17.102 20.0001 16.7205 20.1581 16.4392 20.4394C16.1579 20.7207 15.9998 21.1023 15.9998 21.5001C15.9998 21.8979 16.1579 22.2794 16.4392 22.5607ZM16 11.0039V9.01176H13.051V6H10.949V9.01176H8V11.0039H10.949V14H13.051V11.0039H16Z"
                                fill="currentColor"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_894_16362">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      )}

                      <div className="text-[18px] font-bold">
                        {result.full_name}
                      </div>
                      <div className="mb-4">{result.type}</div>
                      <div className="flex items-center gap-3 mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          id="img"
                        >
                          <g clipPath="url(#clip0_396_5888)">
                            <path
                              d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM8.5 14H14C14.1326 14 14.2598 13.9473 14.3536 13.8536C14.4473 13.7598 14.5 13.6326 14.5 13.5C14.5 13.3674 14.4473 13.2402 14.3536 13.1464C14.2598 13.0527 14.1326 13 14 13H10C9.33696 13 8.70107 12.7366 8.23223 12.2678C7.76339 11.7989 7.5 11.163 7.5 10.5C7.5 9.83696 7.76339 9.20107 8.23223 8.73223C8.70107 8.26339 9.33696 8 10 8H11V6H13V8H15.5V10H10C9.86739 10 9.74021 10.0527 9.64645 10.1464C9.55268 10.2402 9.5 10.3674 9.5 10.5C9.5 10.6326 9.55268 10.7598 9.64645 10.8536C9.74021 10.9473 9.86739 11 10 11H14C14.663 11 15.2989 11.2634 15.7678 11.7322C16.2366 12.2011 16.5 12.837 16.5 13.5C16.5 14.163 16.2366 14.7989 15.7678 15.2678C15.2989 15.7366 14.663 16 14 16H13V18H11V16H8.5V14Z"
                              fill="currentColor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_396_5888">
                              <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        {result.price} SGD
                      </div>
                      <div className="flex items-center gap-3 mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          id="img"
                        >
                          <g clipPath="url(#clip0_1199_10287)">
                            <path
                              d="M17 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H7V1H9V3H15V1H17V3ZM20 9V5H17V7H15V5H9V7H7V5H4V9H20ZM20 11H4V19H20V11ZM6 13H11V17H6V13Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1199_10287">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        AY{result.year}
                      </div>
                      <div className="flex items-center gap-3 mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          id="img"
                        >
                          <g clipPath="url(#clip0_913_7530)">
                            <path
                              d="M12.5 22C6.977 22 2.5 17.523 2.5 12C2.5 6.477 6.977 2 12.5 2C18.023 2 22.5 6.477 22.5 12C22.5 17.523 18.023 22 12.5 22ZM12.5 20C14.6217 20 16.6566 19.1571 18.1569 17.6569C19.6571 16.1566 20.5 14.1217 20.5 12C20.5 9.87827 19.6571 7.84344 18.1569 6.34315C16.6566 4.84285 14.6217 4 12.5 4C10.3783 4 8.34344 4.84285 6.84315 6.34315C5.34285 7.84344 4.5 9.87827 4.5 12C4.5 14.1217 5.34285 16.1566 6.84315 17.6569C8.34344 19.1571 10.3783 20 12.5 20ZM13.5 12H17.5V14H11.5V7H13.5V12Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_913_7530">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        {result.day} , {result.start_time} - {result.end_time}
                      </div>
                      <div className="flex items-center gap-3">
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
                        {result.loc_name}{" "}
                      </div>
                    </div>
                  );
                })}
            </div>
          )}

          {scheduleResult.length > 6 && (
            <div
              className="text-center mt-7"
              onClick={() => setSeeMore(!seeMore)}
            >
              <button className="button">
                {" "}
                {seeMore ? "Show less" : " Show all results"}
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Results;
