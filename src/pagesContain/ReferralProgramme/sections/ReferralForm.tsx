"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

// Define the type for the form data
interface IFormInput {
  name: string;
  email: string;
  message: string;
  household_id: number;
  parent_first_name: string;
  parent_last_name: string;
  mobile: number;
  child_first_name: string;
  child_last_name: string;
  level: string;
  location: string;
  subject: string;
  // Add any other fields you have in the form
}

const ReferralForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IFormInput>();

  const [salutation, setSalutation] = useState<string | null>(null);
  const [day, setDay] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const allValues = {
      ...data,
      salutation: salutation,
      day: day,
      preferred_timing: time,
    };
    const res = await fetch("https://api.meowcademy.com/api/contact_form", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allValues),
    });
    const result = await res.json();
    toast.success("Form Submitted Successfully")

    reset();
  };
  return (
    <>
      <div className="bg-[#f0e691] py-20 mt-10">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl mb-3">Referral Programme Form </h2>
            <p>(For the Referred Party, that is the New Household to fill)</p>
            <p>
              Please complete the form below and we will be in touch within 1 to
              3 working days to process your referral.
            </p>
          </div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-10">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="">
                    SALUTATION*
                  </label>
                  <select
                    name=""
                    id=""
                    className="w-full p-2 rounded-[10px]"
                    onChange={(e) => setSalutation(e.target.value)}
                    required
                  >
                    <option value="" hidden>
                      -Please Select-
                    </option>
                    <option value="dr">Dr</option>
                    <option value="mr">Mr</option>
                    <option value="mrs">Mrs</option>
                    <option value="ms">Ms</option>
                    <option value="mdm">Mdm</option>
                  </select>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="" className="">
                      PARENT - FIRST NAME*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-2 rounded-[10px]"
                      placeholder=" PARENT - FIRST NAME"
                      {...register("parent_first_name")}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="" className="">
                      PARENT - LAST NAME*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-2 rounded-[10px]"
                      placeholder="PARENT - LAST NAME"
                      {...register("parent_last_name")}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="" className="">
                      EMAIL*
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full p-2 rounded-[10px]"
                      placeholder="EMAIL"
                      {...register("email")}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="" className="">
                      MOBILE*
                    </label>
                    <input
                      type="number"
                      required
                      className="w-full p-2 rounded-[10px]"
                      placeholder="MOBILE"
                      {...register("mobile")}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="" className="">
                      CHILD - FIRST NAME*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-2 rounded-[10px]"
                      placeholder=" CHILD - FIRST NAME"
                      {...register("child_first_name")}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="" className="">
                      CHILD - LAST NAME*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-2 rounded-[10px]"
                      placeholder="CHILD - LAST NAME"
                      {...register("child_last_name")}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="" className="">
                      CHILD - LEVEL IN 2024*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-2 rounded-[10px]"
                      placeholder="CHILD - LEVEL IN 2024"
                      {...register("level")}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="" className="">
                      PREFERRED LOCATION OF CLASS*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-2 rounded-[10px]"
                      placeholder="PREFERRED LOCATION OF CLASS"
                      {...register("location")}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="" className="">
                      CHILD - SUBJECT OF INTEREST*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-2 rounded-[10px]"
                      placeholder="CHILD - SUBJECT OF INTEREST"
                      {...register("subject")}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="" className="">
                      PREFERRED DAY*
                    </label>

                    <select
                      name=""
                      id=""
                      className="w-full p-2 rounded-[10px]"
                      onChange={(e) => setDay(e.target.value)}
                      required
                    >
                      <option value="" hidden>
                        -Please Select-
                      </option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="" className="">
                      HOUSEHOLD ID*
                    </label>
                    <input
                      type="number"
                      required
                      className="w-full p-2 rounded-[10px]"
                      placeholder="HOUSEHOLD ID"
                      {...register("household_id")}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="" className="">
                      PREFERRED TIMING*
                    </label>

                    <select
                      name=""
                      id=""
                      className="w-full p-2 rounded-[10px]"
                      onChange={(e) => setTime(e.target.value)}
                      required
                    >
                      <option value="" hidden>
                        -Please Select-
                      </option>
                      <option value="9:00AM">9:00AM</option>
                      <option value="19:00AM">10:00AM</option>
                      <option value="11:00AM">11:00AM</option>
                      <option value="12:00PM">12:00PM</option>
                      <option value="1:00PM">1:00PM</option>
                      <option value="2:00PM">2:00PM</option>
                      <option value="3:00PM">3:00PM</option>
                      <option value="4:00PM">4:00PM</option>
                      <option value="5:00PM">5:00PM</option>
                      <option value="6:00PM">6:00PM</option>
                      <option value="7:00PM">7:00PM</option>
                      <option value="8:00PM">8:00PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-20 flex gap-3 items-baseline">
                <input type="checkbox" required name="" id="" />
                <p>
                  I AGREE THAT meowcademy GROUP MAY COLLECT, USE AND DISCLOSE MY
                  PERSONAL DATA AND CONSENT TO RECEIVE MARKETING, ADVERTISING,
                  AND PROMOTIONAL MATERIAL FROM meowcademy GROUP IN ACCORDANCE
                  WITH THE FULL TERMS HEREIN INCLUDING THE{" "}
                  <a href="/privacy-policy" className="underline">
                    MEOWCADEMY GROUP PRIVACY POLICY
                  </a>{" "}
                  . VIEW FULL TERMS{" "}
                  <a href="/terms-and-conditions" className="underline">
                    HERE
                  </a>
                  .
                </p>
              </div>

              <div className="text-center mt-10">
                <button
                  disabled={isSubmitting}
                  className="bg-[#aa945b] px-6 py-2 text-white rounded-lg"
                >
                  {isSubmitting ? (
                    <span className="spinner-border spinner-border-sm mr-1">
                      loading...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReferralForm;
