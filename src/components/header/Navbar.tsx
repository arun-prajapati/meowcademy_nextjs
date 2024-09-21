"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu4Fill, RiWhatsappFill } from "react-icons/ri";
import SubNavMenu from "./SubNavMenu";
import { GroupListType, LevelListType } from "@/types/type";

const Navbar = ({
  level,
  standards,
  groupList,
}: {
  level: LevelListType[];
  standards: any;
  groupList: GroupListType[];
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  //show border while scrolling

  const addBorder = () => {
    if (typeof window !== "undefined" && window.scrollY >= 70) {
      setShowBorder(true);
    } else {
      setShowBorder(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", addBorder);
    }
  }, []);
  return (
    <>
      <nav
        className={` fixed top-0 right-0 left-0  bg-white z-[1000]  ${
          showBorder || showMenu ? "border-b border-[#EEEEEE" : ""
        }`}
      >
        <div className="container">
          <div className="flex justify-between items-center py-4">
            <div
              className="flex items-center gap-3 cursor-pointer font-medium"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <IoMdClose size={30} /> : <RiMenu4Fill size={30} />}
              <span className="hidden md:block">Menu</span>
            </div>
            <div className=" ">
              <Link href="/" className="cursor-pointer flex items-center ">
                <Image
                  src={"/meowLogo.png"}
                  alt="Meowcademy"
                  width={59}
                  height={59}
                  quality={100}
                  className="w-[59px] h-[59px] object-cover"
                />
                <span className="hidden md:block text-[22px] font-bold text-primaryBlue  leading-5">
                  meow
                  <span className="text-[#c6341d]">
                    <br />
                    cademy
                  </span>
                </span>
              </Link>
            </div>

            <a
              href="https://wa.me/+6587713358"
              className="flex items-center gap-3 cursor-pointer font-medium"
            >
              <span className="hidden md:block">Get in touch</span>
              <RiWhatsappFill color="#25d366" size={30} />
            </a>
          </div>
        </div>
      </nav>

      {showMenu && (
        <SubNavMenu level={level} standards={standards} groupList={groupList} />
      )}
    </>
  );
};

export default Navbar;
