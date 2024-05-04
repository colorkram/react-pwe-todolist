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
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

interface Row {
  id: string;
  name: string;
  value: number; // Change type to number
}

function Main(): JSX.Element {

  const [showParallax, setShowParallax] = useState(true);
  const [showParallaxs, setShowParallaxs] = useState(0);
  // const [abc, setabc] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const secondElement = document.getElementById('secondElement');
      if (secondElement && window.scrollY > secondElement.offsetTop/1.2) {
        setShowParallax(false);
        
      } else {
        setShowParallax(true);
      }
      if (secondElement && window.scrollY > secondElement.offsetTop/7) {
        
        setShowParallaxs(1)
      }
      if (secondElement && window.scrollY > secondElement.offsetTop/5) {
        
        setShowParallaxs(2)
      }
      if (secondElement && window.scrollY > secondElement.offsetTop/3) {
        
        setShowParallaxs(3)
      }
      if (secondElement && window.scrollY > secondElement.offsetTop/1.8) {
        
        setShowParallaxs(4)
      }
      
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useEffect(() => {
  //   setabc(showParallaxs+1)
  // }, [window.scrollY])
  

  return (
    <>
      <Nav />
      {/* <div className="fixed top-0 z-[100] text-[100px] ">{showParallaxs}</div> */}
      <ParallaxProvider>
      
      <div  className={`md:mt-[110px] relative z-1 bg-cover h-screen w-full bg-center bg-[url('https://res.cloudinary.com/db426bffp/image/upload/v1714553972/kram_ql6s02.jpg')] `}>
      <Parallax speed={-25} className=" z-0 flex md:hidden">
      {showParallax && (<div className={` text-white absolute bottom-[0px] md:bottom-[100px] left-[30px] md:left-[120px] bg-cover w-[151px] h-[151px] md:w-[250px] md:h-[250px]
      ${showParallaxs == 1 ? "bg-[url('https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png')]": 
      showParallaxs ==2  ? "bg-[url('https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png')]"
      : showParallaxs ==3? "bg-[url('https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png')]"
       : showParallaxs ==4 ? "bg-[url('https://nuxt.com/assets/design-kit/icon-green.svg')]" : "bg-[url('https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png')]"
    }   
      bg-cover w-[250px] h-[250px] `}>

      </div>)}
      </Parallax>
<div className="hidden md:flex">
{showParallax && (<div className={` text-white absolute bottom-[0px] md:bottom-[100px] left-[30px] md:left-[120px] bg-cover w-[151px] h-[151px] md:w-[250px] md:h-[250px]
      ${showParallaxs == 1 ? "bg-[url('https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png')]": 
      showParallaxs ==2  ? "bg-[url('https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png')]"
      : showParallaxs ==3? "bg-[url('https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png')]"
       : showParallaxs ==4 ? "bg-[url('https://nuxt.com/assets/design-kit/icon-green.svg')]" : "bg-[url('https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png')]"
    }   
      bg-cover w-[250px] h-[250px] `}>

      </div>)}
</div>
      
      
      <Parallax speed={-25} className=" z-0">
          <p className="hidden md:flex  md:text-[70px] text-center md:text-left  md:pl-[50px] font-bold text-white drop-shadow-md shadow-white">
            Full Stack Developer
          </p>
        
        <p className="text-[35px] flex md:hidden md:text-[0px] text-center justify-center md:text-left pt-[360px] md:pt-[40px] md:pl-[50px] font-bold text-white drop-shadow-md shadow-white">
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
      </Parallax>
      
      </div>
    </ParallaxProvider>
    
      <div id="secondElement" className="md:mt-[110px] z-1 relative bg-cover h-screen w-full bg-center bg-[url('https://ttd-accounting.s3.ap-southeast-1.amazonaws.com/bg-temp/IMG_20191210_211135.jpg')] ">
        
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
