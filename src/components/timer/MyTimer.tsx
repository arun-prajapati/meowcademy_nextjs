"use client";

import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

interface MyTimerProps {
  initialExpiryTimestamp: Date;
}

const MyTimer: React.FC<MyTimerProps> = ({ initialExpiryTimestamp }) => {

 
  const [expiryTimestamp, setExpiryTimestamp] = useState<Date>(initialExpiryTimestamp);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

 
  const {
    seconds,
    minutes,
    hours,
    days,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      const newTime = new Date();
      newTime.setMinutes(newTime.getMinutes() + 5);
      setExpiryTimestamp(newTime);
      localStorage.setItem("expiryTimestamp", newTime.getTime().toString());
    },
  });

  useEffect(() => {
    const storedExpiryTimestamp = localStorage.getItem("expiryTimestamp");
    if (storedExpiryTimestamp) {
      const storedTime = parseInt(storedExpiryTimestamp);
      const currentTime = new Date().getTime();
      if (storedTime > currentTime) {
        setExpiryTimestamp(new Date(storedTime));
      } else {
        const newTime = new Date();
        newTime.setMinutes(newTime.getMinutes() + 5);
        setExpiryTimestamp(newTime);
        localStorage.setItem("expiryTimestamp", newTime.getTime().toString());
      }
    } else {
      localStorage.setItem("expiryTimestamp", initialExpiryTimestamp.getTime().toString());
      setExpiryTimestamp(initialExpiryTimestamp);
    }
  }, [initialExpiryTimestamp]);

  useEffect(() => {
    restart(expiryTimestamp);
  }, [expiryTimestamp, restart]);

  const formatNumber = (number: number): string => number.toString().padStart(2, "0");
  const formatDigits = (number: number): string[] => [
    formatNumber(number)[0],
    formatNumber(number)[1],
  ];

  const [minuteTens, minuteUnits] = formatDigits(minutes);
  const [secondTens, secondUnits] = formatDigits(seconds);
  if (!isMounted) {
    return null; // Render nothing on the server
  }
  return (
    <div >
      <div className="flex gap-4 justify-center">
        <div className="flex flex-col gap-1 justify-center items-center">
          <p className="bg-[#EF4B27] px-4 text-white rounded-lg text-[25px] lg:text-[50px] w-10 flex justify-center lg:w-16">
            {days}
          </p>
          <p>Days</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <p className="bg-[#EF4B27] px-4 text-white rounded-lg text-[25px] lg:text-[50px] w-10 flex justify-center lg:w-16">
            {hours}
          </p>
          <p>Hours</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div className="flex gap-1">
            <p className="bg-[#EF4B27] px-4 text-white rounded-lg text-[25px] lg:text-[50px] w-10 flex justify-center lg:w-16">
              {minuteTens}
            </p>
            <p className="bg-[#EF4B27] px-4 text-white rounded-lg text-[25px] lg:text-[50px] w-10 flex justify-center lg:w-16">
              {minuteUnits}
            </p>
          </div>
          <p>Minutes</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div className="flex gap-1">
            <p className="bg-[#EF4B27] px-4 text-white rounded-lg text-[25px] lg:text-[50px] w-10 flex justify-center lg:w-16">
              {secondTens}
            </p>
            <p className="bg-[#EF4B27] px-4 text-white rounded-lg text-[25px] lg:text-[50px] w-10 flex justify-center lg:w-16">
              {secondUnits}
            </p>
          </div>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default MyTimer;
