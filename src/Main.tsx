import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import "./App.css";
import { randomString } from "./helper/random";
import {
  getCash,
  getTable,
  removeCash,
  setCash,
  setTable,
} from "./api/localstorage";
import { formatNumber } from "./helper/formatNumber";
import { useNavigate } from "react-router-dom";
import Modal from "./componants/Modal";
import Nav from "./componants/Nav";
import HamburgerMenu from "./componants/Ham";

interface Row {
  id: string;
  name: string;
  value: number; // Change type to number
}

function Main(): JSX.Element {
  const [title, setTitle] = React.useState(0);

  return (
    <>
      <Nav />
      <div className="md:mt-[110px] z-1 bg-cover h-screen w-full bg-center bg-[url('https://res.cloudinary.com/db426bffp/image/upload/v1714553972/kram_ql6s02.jpg')] ">
        <p className="text-[35px] md:text-[70px] text-center md:text-left pt-[360px] md:pt-[40px] md:pl-[50px] font-bold text-white drop-shadow-md shadow-white">
          Full Stack Developer
        </p>
        <div className="md:flex">
          <p className="text-[30px] md:text-left md:pl-[50px] font-bold text-white drop-shadow-md shadow-white">
            สีคราม
          </p>
          <p className="text-[30px] md:text-left md:pl-[7px] font-bold text-white drop-shadow-md shadow-white">
            สรวิชญ์ ไชยศิลป์
          </p>
        </div>
        <div className="md:flex">
          <p className="text-[30px] md:text-left md:pl-[50px] font-bold text-white drop-shadow-md shadow-white">
            - SeeKram -
          </p>
     <div className="flex justify-center"> <p className="text-[30px] md:text-[0px] md:text-left pr-2 md:pl-[7px] font-bold text-white drop-shadow-md shadow-white">
            - 
          </p>  <p className="text-[30px] md:text-left md:pl-[7px] font-bold text-white drop-shadow-md shadow-white">
            Sorrawit Chaiyasil -
          </p></div>
        </div>
        <p className="text-[30px] md:text-left md:pl-[50px] font-bold text-yellow-400 drop-shadow-md shadow-white">
        <span className="text-white"> {'<>'} </span> I Love Programing <span className="text-white"> {'</>'} </span>
          </p>
        
      </div>
      <div className="md:mt-[110px] z-1 bg-cover h-screen w-full bg-center bg-[url('https://res.cloudinary.com/db426bffp/image/upload/v1714553972/kram_ql6s02.jpg')] ">
        
        <p className="text-[30px] md:text-left md:pl-[50px] pt-[300px] font-bold text-white drop-shadow-md shadow-white">
        โดเนท สีคราม 
        พร้อมเพย์s
        0864667137
          </p>
      </div>

      {/* <div className="w-full h-screen bg-red-40">

</div> */}
    </>
  );
}

export default Main;
