"use client";
import Schedules from "@/components/Schedules/Schedules";
import { BasketContext } from "@/context/BasketContextProvider";
import apihandler from "@/lib/apihandler";
import generatePaymentToken from "@/lib/generatePaymentToken";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SubjectGroupList from "../SubjectGroup/sections/SubjectGroupList";
import { Loader2 } from "lucide-react";

const Basket = () => {
  interface IFormInput {
    name: string;
    number: string;
    email: string;
    address: string;
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const basketContext = useContext(BasketContext);

  const cartData = basketContext?.cartData;
  const removeToCart = basketContext?.removeToCart;

  const totalPrice: any = cartData?.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  const productIds: any = cartData?.map((product) => product.id);

  const onSubmit: SubmitHandler<any> = async (formData) => {
    const form = new FormData();
    form.append("schedule_id", productIds);
    form.append("amount", totalPrice);
    form.append("name", formData.name);
    form.append("number", formData.number);
    form.append("email", formData.email);
    form.append("address", formData.address);
    const paymentResult = await apihandler({
      path: "/api/add_basket",
      apiConfig: { method: "POST", body: form },
    });

    const paymentData = {
      unique_id: paymentResult.tokens.unique_id,
      price: totalPrice,
    };
    const result = await generatePaymentToken(paymentData);
    window.location.href = result; // --payment call back--
  };
  return (
    <>
      <div className=" pt-24">
        <h3 className="text-center  text-2xl font-bold  border-y border-[#EEEEEE] py-7">
          Class Basket
        </h3>

        {/* NO Items in cart section */}
        {cartData?.length === 0 && (
          <div className=" container ">
            <div className="border border-[#EEEEEE] px-4 py-6 rounded-3xl  text-center  flex flex-col gap-5 items-center mt-6 mb-5 bg-[#FBFCFC]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="112"
                  height="112"
                  viewBox="0 0 112 112"
                  fill="none"
                >
                  <rect
                    width="112"
                    height="112"
                    rx="56"
                    fill="#74C3BE"
                    fillOpacity="0.12"
                  />
                  <path
                    d="M52.8279 18.248C53.7239 17.816 54.7799 17.6 55.9959 17.6C57.2119 17.6 58.2599 17.816 59.1399 18.248C60.0359 18.68 60.7399 19.296 61.2519 20.096C61.7639 20.896 62.1399 21.808 62.3799 22.832C62.6199 23.84 62.7399 24.984 62.7399 26.264C62.7399 27.544 62.6199 28.696 62.3799 29.72C62.1399 30.728 61.7639 31.632 61.2519 32.432C60.7399 33.232 60.0359 33.848 59.1399 34.28C58.2599 34.712 57.2119 34.928 55.9959 34.928C54.7799 34.928 53.7239 34.712 52.8279 34.28C51.9479 33.848 51.2519 33.232 50.7399 32.432C50.2279 31.632 49.8519 30.728 49.6119 29.72C49.3719 28.696 49.2519 27.544 49.2519 26.264C49.2519 24.984 49.3719 23.84 49.6119 22.832C49.8519 21.808 50.2279 20.896 50.7399 20.096C51.2519 19.296 51.9479 18.68 52.8279 18.248ZM57.1959 21.728C56.8599 21.536 56.4599 21.44 55.9959 21.44C55.5319 21.44 55.1239 21.536 54.7719 21.728C54.4359 21.904 54.1719 22.128 53.9799 22.4C53.8039 22.672 53.6599 23.032 53.5479 23.48C53.4359 23.928 53.3639 24.36 53.3319 24.776C53.2999 25.192 53.2839 25.688 53.2839 26.264C53.2839 26.84 53.2999 27.336 53.3319 27.752C53.3639 28.168 53.4359 28.6 53.5479 29.048C53.6599 29.496 53.8039 29.856 53.9799 30.128C54.1719 30.4 54.4359 30.632 54.7719 30.824C55.1239 31 55.5319 31.088 55.9959 31.088C56.4599 31.088 56.8599 31 57.1959 30.824C57.5479 30.632 57.8119 30.4 57.9879 30.128C58.1799 29.856 58.3319 29.496 58.4439 29.048C58.5559 28.6 58.6279 28.168 58.6599 27.752C58.6919 27.336 58.7079 26.84 58.7079 26.264C58.7079 25.688 58.6919 25.192 58.6599 24.776C58.6279 24.36 58.5559 23.928 58.4439 23.48C58.3319 23.032 58.1799 22.672 57.9879 22.4C57.8119 22.128 57.5479 21.904 57.1959 21.728Z"
                    fill="#74C3BE"
                  />
                  <g clipPath="url(#clip0_894_19903)">
                    <path
                      d="M36.0001 48.035L27.8926 39.93L31.4301 36.3925L39.5351 44.5H77.6401C78.0297 44.5 78.414 44.591 78.7622 44.7659C79.1105 44.9408 79.413 45.1947 79.6457 45.5072C79.8783 45.8198 80.0347 46.1825 80.1023 46.5662C80.1699 46.95 80.1469 47.3442 80.0351 47.7175L74.0351 67.7175C73.8807 68.2327 73.5643 68.6844 73.1329 69.0055C72.7014 69.3266 72.1779 69.5 71.6401 69.5H41.0001V74.5H68.5001V79.5H38.5001C37.837 79.5 37.2012 79.2366 36.7323 78.7678C36.2635 78.2989 36.0001 77.663 36.0001 77V48.035ZM41.0001 49.5V64.5H69.7801L74.2801 49.5H41.0001ZM39.7501 89.5C38.7555 89.5 37.8017 89.1049 37.0984 88.4016C36.3952 87.6984 36.0001 86.7446 36.0001 85.75C36.0001 84.7554 36.3952 83.8016 37.0984 83.0984C37.8017 82.3951 38.7555 82 39.7501 82C40.7446 82 41.6985 82.3951 42.4017 83.0984C43.105 83.8016 43.5001 84.7554 43.5001 85.75C43.5001 86.7446 43.105 87.6984 42.4017 88.4016C41.6985 89.1049 40.7446 89.5 39.7501 89.5ZM69.7501 89.5C68.7555 89.5 67.8017 89.1049 67.0984 88.4016C66.3952 87.6984 66.0001 86.7446 66.0001 85.75C66.0001 84.7554 66.3952 83.8016 67.0984 83.0984C67.8017 82.3951 68.7555 82 69.7501 82C70.7446 82 71.6985 82.3951 72.4017 83.0984C73.105 83.8016 73.5001 84.7554 73.5001 85.75C73.5001 86.7446 73.105 87.6984 72.4017 88.4016C71.6985 89.1049 70.7446 89.5 69.7501 89.5Z"
                      fill="#74C3BE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_894_19903">
                      <rect
                        width="60"
                        height="60"
                        fill="white"
                        transform="translate(26 32)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h5> Your class basket is empty</h5>
              <p>
                Looks like you have not added any classes to your basket!
                Discover classes below now!
              </p>
            </div>

            <Schedules />
          </div>
        )}

        {cartData && cartData.length > 0 && (
          <div className="container mt-10 flex flex-col lg:flex-row">
            <div className="w-full  lg:w-1/2 flex flex-row   lg:flex-col">
              <div className="stepLine relative box-border mr-4   lg:mr-0 mb-3  ">
                <div className="step mx-auto   flex justify-center  items-center bg-[#74C3BE] w-10 h-10 text-white font-bold rounded-full">
                  1
                </div>
                <div className="h-full w-[1px] left-[20px] lg:w-full lg:h-[1px] bg-[#74C3BE] absolute  lg:left-0 top-[20px] z-[-10]"></div>
                <div className="circle-left hidden lg:block absolute w-4 h-4 rounded-full bg-[#74C3BE] top-3 left-[-8px]"></div>
                <div className="circle-right hidden lg:block absolute w-4 h-4 rounded-full bg-[#74C3BE] top-3 right-[-8px]"></div>
              </div>
              <div className="border-r border-[#EEEEEE] pr-4">
                <div className="flex  items-center gap-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                  >
                    <rect
                      width="70"
                      height="70"
                      rx="35"
                      fill="#74C3BE"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M24.3104 26.0152L19.5 21.1315L21.5989 19L26.4078 23.8852H49.0166C49.2478 23.8852 49.4758 23.94 49.6824 24.0454C49.889 24.1508 50.0685 24.3038 50.2065 24.4921C50.3446 24.6804 50.4374 24.899 50.4775 25.1302C50.5176 25.3614 50.504 25.599 50.4376 25.8239L46.8776 37.8749C46.786 38.1854 46.5983 38.4575 46.3423 38.651C46.0863 38.8445 45.7757 38.949 45.4566 38.949H27.277V41.9617H43.5936V44.9745H25.7937C25.4003 44.9745 25.023 44.8158 24.7449 44.5333C24.4667 44.2508 24.3104 43.8676 24.3104 43.4681V26.0152ZM26.5354 51C25.9453 51 25.3794 50.7619 24.9621 50.3382C24.5448 49.9144 24.3104 49.3397 24.3104 48.7404C24.3104 48.1412 24.5448 47.5664 24.9621 47.1427C25.3794 46.7189 25.9453 46.4809 26.5354 46.4809C27.1255 46.4809 27.6914 46.7189 28.1087 47.1427C28.5259 47.5664 28.7604 48.1412 28.7604 48.7404C28.7604 49.3397 28.5259 49.9144 28.1087 50.3382C27.6914 50.7619 27.1255 51 26.5354 51ZM44.3352 51C43.7451 51 43.1792 50.7619 42.7619 50.3382C42.3447 49.9144 42.1102 49.3397 42.1102 48.7404C42.1102 48.1412 42.3447 47.5664 42.7619 47.1427C43.1792 46.7189 43.7451 46.4809 44.3352 46.4809C44.9253 46.4809 45.4913 46.7189 45.9085 47.1427C46.3258 47.5664 46.5602 48.1412 46.5602 48.7404C46.5602 49.3397 46.3258 49.9144 45.9085 50.3382C45.4913 50.7619 44.9253 51 44.3352 51Z"
                      fill="#74C3BE"
                    />
                  </svg>
                  <div className="">
                    <h5 className="text-[18px] lg:text-2xl font-bold mb-3">
                      Class Basket
                    </h5>
                    <p className="text-sm">
                      View your selected class timeslots below!
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  {cartData?.map((result) => (
                    <div
                      className=" p-6 border border-[#EEEEEE] rounded-xl "
                      key={result.id}
                    >
                      <div
                        onClick={() => {
                          const itemInCart = cartData.find(
                            (f) => f.id === result.id
                          );
                          if (itemInCart && removeToCart) {
                            removeToCart(result.id);
                          }
                        }}
                        className=" float-right w-11 h-11 lg:w-16 lg:h-16 rounded-full bg-[#74C3BE] flex items-center justify-center text-white cursor-pointer cart-btn transition-all"
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

                      <div className="lg:text-[18px] font-bold mb-1">
                        {result.full_name}
                      </div>
                      <div className="text-sm lg:text-[16px] mb-4">
                        {result.type}
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
                      <div className="flex items-center gap-3 mb-1 text-sm lg:text-[16px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
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
                      <div className="flex items-center gap-3 mb-1 text-sm lg:text-[16px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
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
                      <div className="flex items-center gap-3 text-sm lg:text-[16px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
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
                        {result.loc_name}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 font-bold">Total : {totalPrice} SGD</div>

                <div className="mt-5 text-sm ">
                  <p>
                    Note: The prices indicated above are indicative – there may
                    be additional one-time fees such as deposits and
                    registration fees, and further discounts for signing up for
                    multiple courses. Speak to our education consultants via
                    WhatsApp for more details!
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full  lg:w-1/2 flex flex-row   lg:flex-col ">
              <div className="stepLine relative box-border mr-4   lg:mr-0 mb-3  ">
                <div className="step lg:mx-auto   flex justify-center  items-center bg-[#74C3BE] w-10 h-10 text-white font-bold rounded-full">
                  2
                </div>
                <div className="h-full w-[1px] left-[20px] lg:w-full lg:h-[1px] bg-[#74C3BE] absolute  lg:left-0 top-[20px] z-[-10]"></div>
                <div className="circle-left hidden lg:block absolute w-4 h-4 rounded-full bg-[#74C3BE] top-3 left-[-8px]"></div>
                <div className="circle-right hidden lg:block absolute w-4 h-4 rounded-full bg-[#74C3BE] top-3 right-[-8px]"></div>
              </div>

              <div className="lg:pl-5 mt-10 lg:mt-0">
                <div className="flex  items-center gap-7">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                    >
                      <rect
                        width="70"
                        height="70"
                        rx="35"
                        fill="#74C3BE"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M24.3104 26.0152L19.5 21.1315L21.5989 19L26.4078 23.8852H49.0166C49.2478 23.8852 49.4758 23.94 49.6824 24.0454C49.889 24.1508 50.0685 24.3038 50.2065 24.4921C50.3446 24.6804 50.4374 24.899 50.4775 25.1302C50.5176 25.3614 50.504 25.599 50.4376 25.8239L46.8776 37.8749C46.786 38.1854 46.5983 38.4575 46.3423 38.651C46.0863 38.8445 45.7757 38.949 45.4566 38.949H27.277V41.9617H43.5936V44.9745H25.7937C25.4003 44.9745 25.023 44.8158 24.7449 44.5333C24.4667 44.2508 24.3104 43.8676 24.3104 43.4681V26.0152ZM26.5354 51C25.9453 51 25.3794 50.7619 24.9621 50.3382C24.5448 49.9144 24.3104 49.3397 24.3104 48.7404C24.3104 48.1412 24.5448 47.5664 24.9621 47.1427C25.3794 46.7189 25.9453 46.4809 26.5354 46.4809C27.1255 46.4809 27.6914 46.7189 28.1087 47.1427C28.5259 47.5664 28.7604 48.1412 28.7604 48.7404C28.7604 49.3397 28.5259 49.9144 28.1087 50.3382C27.6914 50.7619 27.1255 51 26.5354 51ZM44.3352 51C43.7451 51 43.1792 50.7619 42.7619 50.3382C42.3447 49.9144 42.1102 49.3397 42.1102 48.7404C42.1102 48.1412 42.3447 47.5664 42.7619 47.1427C43.1792 46.7189 43.7451 46.4809 44.3352 46.4809C44.9253 46.4809 45.4913 46.7189 45.9085 47.1427C46.3258 47.5664 46.5602 48.1412 46.5602 48.7404C46.5602 49.3397 46.3258 49.9144 45.9085 50.3382C45.4913 50.7619 44.9253 51 44.3352 51Z"
                        fill="#74C3BE"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <h5 className="text-[18px] lg:text-2xl font-bold mb-3">
                      Check out now to meow with us!
                    </h5>
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="border border-[#EEEEEE] mt-10 p-4 rounded-xl">
                    <div className="flex gap-5 mb-5">
                      <div>
                        Parent name:
                        <input
                          type="text"
                          className="w-full p-3 rounded-xl border border-[#EEEEEE] outline-0"
                          {...register("name", { required: true })}
                        />
                        {errors.name && (
                          <span className="text-red-500 text-sm">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div>
                        Phone number:
                        <input
                          type="number"
                          className="w-full p-3 rounded-xl border border-[#EEEEEE] outline-0"
                          {...register("number", { required: true })}
                        />
                        {errors.number && (
                          <span className="text-red-500 text-sm">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      Email :
                      <input
                        type="email"
                        className="w-full p-3 rounded-xl border border-[#EEEEEE] outline-0"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-sm">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="mt-5">
                      Address :
                      <textarea
                        className="w-full resize-none p-3 rounded-xl border border-[#EEEEEE] outline-0"
                        {...register("address", { required: true })}
                      />
                      {errors.address && (
                        <span className="text-red-500 text-sm">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="mt-10 flex justify-center">
                      <button className="bg-[#F1F9F9] text-[#74C3BE] font-bold px-9 py-5 rounded-full flex items-center gap-3">
                        {isSubmitting ? (
                          <Loader2 className="animate-spin" />
                        ) : (
                          <>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="currentColor"
                                d="m528.12 301.319 47.273-208c3.413-15.018-8.002-29.319-23.403-29.319h-392.782l-9.166-44.81c-2.284-11.169-12.112-19.19-23.513-19.19h-102.529c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435c-16.806 9.665-28.131 27.787-28.131 48.565 0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647c-10.376 10.165-16.823 24.326-16.823 40 0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319h-268.418l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                              />
                            </svg>
                            Check Out{" "}
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Basket;
