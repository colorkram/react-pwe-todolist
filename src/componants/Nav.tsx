import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import HamburgerMenu from "./Ham";

function Nav(): JSX.Element {
  const [title, setTitle] = React.useState(0);

  return (
    <>
      <div className="w-screen h-[50px] md:h-[100px] fixed top-0 z-[10] bg-white">
        <div className="w-full flex justify-between absolute top-1/2 transform -translate-y-1/2">
          <div className="flex justify-between w-full mx-[10%]">
            <p className="text-[30px] font-bold">SeeKram</p>
            <HamburgerMenu/>
            <div className="hidden md:flex gap-[40px] mr-26 mt-2">
              <p className="w-[auto] text-[16px] cursor-pointer  hover:border-black hover:border-b-2">
                รุ้จักสีคราม
              </p>
              <p className="w-[auto] text-[16px] cursor-pointer  hover:border-black hover:border-b-2">
                ผลงาน
              </p>
              <p className="w-[auto]text-[16px] cursor-pointer  hover:border-black hover:border-b-2">
                ติดต่อสีคราม
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
