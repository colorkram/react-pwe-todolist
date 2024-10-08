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
import { Link, useNavigate } from "react-router-dom";
import Modal from "./componants/Modal";
import Nav from "./componants/Nav";
import HamburgerMenu from "./componants/Ham";
import {
  ParallaxProvider,
  Parallax,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import { start } from "repl";

interface Row {
  id: string;
  name: string;
  value: number; // Change type to number
}

function Main(): JSX.Element {
  const [showParallax, setShowParallax] = useState(true);
  const [showParallaxs, setShowParallaxs] = useState(0);
  const [showPage2, setshowPage2] = useState(false);
  const [showPage2Start, setShowPage2Start] = useState(false);
  // const [abc, setabc] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const secondElement = document.getElementById("secondElement");
      if (secondElement && window.scrollY > secondElement.offsetTop / 1.2) {
        setShowParallax(false);
      } else {
        setShowParallax(true);
      }
      if (secondElement && window.scrollY > secondElement.offsetTop / 7) {
        setShowParallaxs(1);
      }
      if (secondElement && window.scrollY > secondElement.offsetTop / 5) {
        setShowParallaxs(2);
      }
      if (secondElement && window.scrollY > secondElement.offsetTop / 3) {
        setShowParallaxs(3);
      }
      if (secondElement && window.scrollY > secondElement.offsetTop / 1.8) {
        setShowParallaxs(4);
      }
      if (secondElement && window.scrollY > secondElement.offsetTop / 1.6) {
        setshowPage2(true);
      } else {
        setshowPage2(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   setabc(showParallaxs+1)
  // }, [window.scrollY])
  interface Logo {
    name: string;
    logo: string;
    path: string;
  }
  let feLogo = [
    {
      name: "ReactJS",
      logo: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
      path: "https://react.dev",
    },
    {
      name: "VueJS",
      logo: "https://nuxt.com/assets/design-kit/icon-green.svg",
      path: "https://vuejs.org",
    },
    {
      name: "HTML",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      path: "#",
    },
    {
      name: "CSS 3",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
      path: "#",
    },
    {
      name: "JS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      path: "https://www.javascript.com",
    },
    ,
  ];
  let beLogo = [
    {
      name: "NodeJs",
      logo: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
      path: "https://nodejs.org/",
    },
    {
      name: "NestJS",
      logo: "https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png",
      path: "https://nestjs.com/",
    },
    {
      name: "JS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      path: "https://www.javascript.com",
    },
    {
      name: "Aws S3",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1712px-Amazon-S3-Logo.svg.png",
      path: "https://aws.amazon.com/th/s3",
    },
    ,
    ,
  ];
  let otherLogo = [
    {
      name: "PhotoShop",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png",
      path: "https://www.adobe.com/",
    },
    {
      name: "Vegas Pro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Vegas_Pro_19.svg/640px-Vegas_Pro_19.svg.png",
      path: "https://www.vegascreativesoftware.com/us/vegas-pro",
    },
    {
      name: "Figma",
      logo: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png",
      path: "https://www.figma.com",
    },
    {
      name: "MS",
      logo: "https://seeklogo.com/images/M/microsoft-office-logo-8B0EF31E09-seeklogo.com.png",
      path: "https://www.office.com",
    },
    {
      name: "progest sql",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Logo_PostgreSQL.png",
      path: "https://www.postgresql.org/",
    },
  ];

  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    // Set showDiv to true after component mounts
    setShowDiv(true);
  }, []);
  useEffect(() => {
    if (showPage2) {
      setShowPage2Start(true);
    } else {
      setShowPage2Start(false);
    }
  }, [showPage2]);
  const gotopaht = (link: any) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <Nav />
      {/* <div className="fixed top-0 z-[100] text-[100px] ">{showParallaxs}</div> */}
      <ParallaxProvider>
        <div
          className={`md:mt-[110px] relative z-1 bg-cover h-screen w-full bg-center bg-[url('https://res.cloudinary.com/db426bffp/image/upload/v1714553972/kram_ql6s02.jpg')] `}
        >
          <Parallax speed={-25} className={` z-0 flex md:hidden `}>
            {showParallax && (
              <div
                className={`w-[131px] h-[131px] transition-opacity ${showDiv
                  ? "opacity-100 duration-700"
                  : "opacity-0 duration-700"
                  } text-white absolute bottom-[10px] left-[50px] bg-cover  
      ${showParallaxs == 1
                    ? "bg-[url('https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png')]"
                    : showParallaxs == 2
                      ? "bg-[url('https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png')]"
                      : showParallaxs == 3
                        ? "bg-[url('https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png')]"
                        : showParallaxs == 4
                          ? "bg-[url('https://nuxt.com/assets/design-kit/icon-green.svg')]"
                          : "bg-[url('https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png')]"
                  }   
      bg-cover  `}
              ></div>
            )}
          </Parallax>
          <div className="hidden md:flex">
            {showParallax && (
              <div
                className={` text-white absolute bottom-[0px] transition-opacity ${showDiv
                  ? "opacity-100 duration-700"
                  : "opacity-0 duration-700"
                  } md:bottom-[100px] left-[25px] md:left-[120px] bg-cover md:w-[250px] md:h-[250px]
      ${showParallaxs == 1
                    ? "bg-[url('https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png')]"
                    : showParallaxs == 2
                      ? "bg-[url('https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png')]"
                      : showParallaxs == 3
                        ? "bg-[url('https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png')]"
                        : showParallaxs == 4
                          ? "bg-[url('https://nuxt.com/assets/design-kit/icon-green.svg')]"
                          : "bg-[url('https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png')]"
                  }   
      bg-cover w-[250px] h-[250px] `}
              ></div>
            )}
          </div>

          <Parallax speed={-25} className=" z-0">
            <p
              className={`hidden md:flex  transition-opacity ${showDiv ? "opacity-100 duration-700" : "opacity-0 duration-700"
                } md:text-[70px] text-center md:text-left  md:pl-[50px] font-bold text-white drop-shadow-md shadow-white  `}
            >
              Full Stack Developer
            </p>

            <p
              className={` transition-opacity ${showDiv ? "opacity-100 duration-700" : "opacity-0 duration-700"
                } text-[35px] flex md:hidden md:text-[0px] text-center justify-center md:text-left pt-[360px] md:pt-[40px] md:pl-[50px] font-bold text-white drop-shadow-md shadow-white`}
            >
              Full Stack Developer
            </p>
            <div
              className={`md:flex  transition-opacity ${showDiv ? "opacity-100 duration-700" : "opacity-0 duration-700"
                }`}
            >
              <p className="text-[30px] md:text-left md:pl-[50px] font-bold text-white drop-shadow-md shadow-white">
                {/* クラム　 */}
              </p>
              <p className="text-[30px] md:text-left md:pl-[7px] font-bold text-white drop-shadow-md shadow-white">
                ソラウィット　チャイヤシン
              </p>
            </div>
            <div
              className={`md:flex  transition-opacity ${showDiv
                ? "opacity-100 duration-1000"
                : "opacity-0 duration-1000"
                }`}
            >
              <p className="text-[30px]  md:text-left md:pl-[50px] font-bold text-white drop-shadow-md shadow-white">
                - SeeKram -
              </p>
              <div className="flex justify-center">
                {" "}
                <p className="text-[30px] md:text-[0px] md:text-left pr-2 md:pl-[7px] font-bold text-white drop-shadow-md shadow-white">
                  -
                </p>
                <p className="text-[30px] md:text-left md:pl-[7px] font-bold text-white drop-shadow-md shadow-white">
                  Sorrawit Chaiyasil -
                </p>
              </div>
            </div>
            <p
              className={`text-[26px] md:text-left md:pl-[50px] font-bold text-yellow-400 drop-shadow-md shadow-white  transition-opacity ${showDiv
                ? "opacity-100 duration-1000"
                : "opacity-0 duration-1000"
                }`}
            >
              <span className="text-white"> {"<>"} </span> I ❤️ Programming{" "}
              <span className="text-white"> {"</>"} </span>
            </p>
          </Parallax>
        </div>
      </ParallaxProvider>
      {/* ------------------------------------------ PAGE 2 ----------------------------------------------------- */}

      <ParallaxProvider>
        <div
          id="secondElement"
          className="md:mt-[12px] z-1 relative bg-cover h-screen md:h-[2700px] w-full bg-[url('https://ttd-accounting.s3.ap-southeast-1.amazonaws.com/bg-temp/IMG_1187.JPG')] "
        >
          {!showPage2 ? (
            <div
              className={`text-[28px] transition-opacity  ${showPage2
                ? "opacity-0 duration-1000"
                : "opacity-100 duration-1000"
                }  md:text-[64px] mt-[50px] absolute w-full font-bold text-white drop-shadow-xl`}
            >
              <p className="text-right mr-6 underline font-bold">My Skills</p>
            </div>
          ) : null}
          {/* <Parallax speed={-25} className=" z-0 md:hidden">
            <p className="text-[30px] md:text-left md:pl-[50px]  pt-[300px] font-bold text-white drop-shadow-md shadow-white">
              โดเนท สีคราม พร้อมเพย์s 0864667137
            </p>
          </Parallax> */}
          {!showPage2 ? (
            <div className="w-full h-full relative">
              <img
                className="w-10 h-10 md:w-36 md:h-36 absolute top-[80px] md:top-[40px] md:left-[1000px] left-[180px] "
                src="https://media3.giphy.com/media/vpGwCLsVHl3vTV46Wy/giphy.gif?cid=6c09b952jlkayzbmjwth5l8dm5k74kq5wdyspg3l7k5zbskz&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
                alt='help'
              />
            </div>
          ) : null}
          {showPage2 ? (
            <Parallax speed={-100} className=" flex relative ">
              <div
                className={`text-[30px] transition-opacity ${showPage2Start
                  ? "opacity-100 duration-1000"
                  : "opacity-0 duration-1000"
                  } items-center absolute w-full flex justify-center mt-[-50px] md:mt-[300px] font-bold text-white drop-shadow-md shadow-white`}
              >
                <p className="font-bold text-black blur-sm  text-shadow ">
                  Frontend Skill
                </p>
                <p className="absolute mr-2 font-bold text-white text-shadow ">
                  Frontend Skill
                </p>
              </div>
              <div
                className={`md:h-[500px] transition-opacity ${showPage2Start
                  ? "opacity-100 duration-1000"
                  : "opacity-0 duration-1000"
                  } items-center flex justify-center w-full mt-[10px] md:mt-[300px] mb-[100px] font-bold text-white drop-shadow-md shadow-white`}
              >
                {feLogo.map((item, index) => (
                  <div
                    className={`md:mx-6 hover:scale-110 duration-5000`}
                    onClick={() => {
                      gotopaht(item?.path);
                    }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      {" "}
                      {/* Added flex container */}
                      <img
                        key={index}
                        src={item?.logo}
                        alt="react"
                        className="mx-6 w-[50px] h-[50px] md:w-[200px] md:h-[200px]"
                      />
                      <p className="md:text-[30px] bg-black md:bg-transparent bg-opacity-10">
                        {item?.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Parallax>
          ) : null}
          {/* ------------------------------------------ PAGE 3 ----------------------------------------------------- */}
          {showPage2 ? (
            <Parallax
              speed={-100}
              className=" flex relative pointer-events-none"
            >
              <div
                className={`text-[30px] h-[500px] transition-opacity ${showPage2Start
                  ? "opacity-100 duration-1000"
                  : "opacity-0 duration-1000"
                  } items-center absolute flex justify-center w-full mt-[0px] md:mt-[90px] font-bold text-white drop-shadow-md shadow-white`}
              >
                <p className="font-bold text-black blur-sm text-shadow ">
                  Backend Skril
                </p>
                <p className="absolute  font-bold text-yellow-400 text-shadow ">
                  Backend Skill
                </p>
              </div>
              <div
                className={` h-[500px] transition-opacity ${showPage2Start
                  ? "opacity-100 duration-1000"
                  : "opacity-0 duration-1000"
                  } items-center flex justify-center w-full mt-[80px] md:mt-[300px] pointer-events-auto mb-[100px] font-bold text-white drop-shadow-md shadow-white`}
              >
                {beLogo.map((item, index) => (
                  <div
                    className="md:mx-6 hover:scale-110 duration-5000"
                    onClick={() => {
                      gotopaht(item?.path);
                    }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        key={index}
                        src={item?.logo}
                        alt="react"
                        className="mx-6 w-[50px] h-[50px] md:w-[200px] md:h-[200px]"
                      />
                      <p className="md:text-[30px] bg-black md:bg-transparent bg-opacity-10  ">
                        {item?.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Parallax>
          ) : null}

          {showPage2 ? (
            <Parallax
              speed={-100}
              className="flex relative pointer-events-none"
            >
              <div
                className={`text-[30px] transition-opacity ${showPage2Start
                  ? "opacity-100 duration-1000"
                  : "opacity-0 duration-1000"
                  }  h-[500px] items-center absolute flex justify-center  w-full mt-[-140px] md:mt-[100px] font-bold text-white drop-shadow-md shadow-white`}
              >
                <p className="font-bold text-black blur-sm text-shadow ">
                  Other Skill
                </p>
                <p className="absolute mr-2 font-bold text-blue-400 text-shadow ">
                  Other Skill
                </p>
              </div>
              <div
                className={` h-[500px] transition-opacity ${showPage2Start
                  ? "opacity-100 duration-1000"
                  : "opacity-0 duration-1000"
                  } items-center flex justify-center pointer-events-auto w-full mt-[-50px] md:mt-[300px] mb-[100px] font-bold text-white drop-shadow-md shadow-white`}
              >
                {otherLogo.map((item, index) => (
                  <div
                    className="md:mx-6 hover:scale-110 duration-5000"
                    onClick={() => {
                      gotopaht(item?.path);
                    }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        key={index}
                        src={item?.logo}
                        alt="react"
                        className="mx-6 w-[50px] h-[50px] md:w-[200px] md:h-[200px]"
                      />
                      <p className="text-[14px] bg-black md:bg-transparent bg-opacity-10  md:text-[30px] ">
                        {item?.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Parallax>
          ) : null}
        </div>
      </ParallaxProvider>

      {/* page3 */}
      <div className="md:mt-[15px] z-1 relative bg-cover h-screen w-full bg-center bg-[#fdf2e9]">
        <p className="w-full absolute top-[8%] md:top-[12%] left-1/2 transform -translate-x-1/2 font-bold text-shadow text-[25px] md:text-[40px] 2xl:text-[45px] h-[50px] flex justify-center items-center">
          My First Project at <br /> TTD global
        </p>
        <div className="hidden md:flex justify-center items-center absolute top-[-100px] md:top-0 md:relative min-h-screen">
          <img
            src="https://cdn.jsdelivr.net/gh/colorkram/images/page1.png"
            alt="page1"
            className="md:w-[700px] 2xl:w-[900px] shadow-xl hover:scale-105 duration-150"
          />
        </div>
        <div className="md:hidden flex justify-center items-center absolute top-[-30px] md:top-0 md:relative min-h-screen">
          <img
            src="https://cdn.jsdelivr.net/gh/colorkram/images/page1Edit.png"
            alt="page1"
            className="w-[65%] shadow-xl hover:scale-105 duration-150"
          />
        </div>

        <p className=" cursor-pointer absolute bottom-[16%] md:bottom-[14%] left-1/2 transform -translate-x-1/2 font-bold text-shadow text-[18px] md:text-[24px] h-[50px] w-full flex justify-center items-center">
          Web homepage of <p className="text-[#00a18c] ml-2"> TTD GLOBAL</p>
        </p>

        <p className=" cursor-pointer absolute  bottom-[11%] md:bottom-[8%] left-1/2 transform -translate-x-1/2 font-bold text-shadow text-[17px]  w-full md:text-[24px] h-[50px] flex justify-center items-center">
          Tools : Vue JS / Nuxt.js, Ant Design, Tailwind Css, Zustand (hook)
        </p>

        <p className=" cursor-pointer absolute bottom-[5%] md:bottom-[2%] left-1/2 transform -translate-x-1/2 font-bold text-shadow text-[18px] md:text-[24px] h-[50px] w-full flex justify-center items-center">
          Visit Site :  <a href="https://ttdthailand.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline pl-3">https://ttdthailand.com</a>
        </p>


        {/* <iframe 
    src="https://ttdthailand.com/" 
    width="320px" 
    height="520px" 
    frameBorder="0" 
    allowFullScreen
    className="absolute inset-0"
  ></iframe> */}
      </div>
      {/* page4 */}
      <div className="md:mt-[15px] z-1 relative bg-cover h-screen w-full bg-center bg-[#d7dbdd]">
        <p className="w-full absolute top-[8%] md:top-[12%] left-1/2 transform -translate-x-1/2 font-bold text-shadow text-[25px] md:text-[40px] 2xl:text-[45px] h-[50px] hidden md:flex justify-center items-center">
          My Favorite Project at  TTD global
        </p>
        <p className="w-full absolute top-[5%] md:top-[12%] left-1/2 transform -translate-x-1/2 font-bold text-shadow text-[25px] md:text-[40px] 2xl:text-[45px] h-[50px] md:hidden flex justify-center items-center">
          My Favorite Project at <br /> TTD globals
        </p>
        <div className="hidden md:flex justify-center items-center absolute top-[-0px] md:top-0 md:relative min-h-screen">
          <img
            src="https://cdn.jsdelivr.net/gh/colorkram/images/page4-1.png"
            alt="page1"
            className="md:w-[700px] 2xl:w-[900px]  duration-150 p-3"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/colorkram/images/page4-2.png"
            alt="page4-1"
            className="md:w-[700px] 2xl:w-[900px]  duration-150 p-3"
          />
        </div>
        <div className="md:hidden flex justify-center items-center absolute top-[-60px] md:top-0 md:relative min-h-screen">
          <img
            src="https://cdn.jsdelivr.net/gh/colorkram/images/page2-1.png"
            alt="page4-2"
            className="w-[65%] shadow-xl hover:scale-105 duration-150 "
          />
        </div>

        <p className=" cursor-pointer absolute bottom-[16%] md:bottom-[14%] left-1/2 transform -translate-x-1/2 font-bold text-shadow text-[18px] md:text-[24px] h-[50px] w-full hidden md:flex justify-center items-center">

          <p className="text-[#00a18c] mr-2 "> Accounting Project :
          </p> A project for creating and summarizing company financial documents
        </p>

        <div className="cursor-pointer absolute bottom-[22%] md:bottom-[14%] left-1/2 transform -translate-x-1/2 font-bold text-shadow text-[18px] md:text-[24px] h-[50px] w-full  md:hidden justify-center items-center">
          <p className="text-[#00a18c] mr-2">Accounting Project</p>
          <div>
            A project for creating & summarizing <br /> company financial documents
          </div>
        </div>




        <div className=" cursor-pointer absolute  bottom-[9%] md:bottom-[8%] left-1/2 transform -translate-x-1/2 font-bold text-shadow text-[17px]  w-full md:text-[24px] h-[50px] flex justify-center items-center">
          Front-end : NextJs, chartJs, Tailwind Css, Zustand (hook)
        </div>

        <p className=" cursor-pointer absolute bottom-[3%] md:bottom-[2%] left-1/2 transform -translate-x-1/2 font-bold text-shadow text-[18px] md:text-[24px] h-[50px] w-full flex justify-center items-center">
          Back-end : NestJS, TypeOrm, Maria DB, S3
        </p>


        {/* <iframe 
    src="https://ttdthailand.com/" 
    width="320px" 
    height="520px" 
    frameBorder="0" 
    allowFullScreen
    className="absolute inset-0"
  ></iframe> */}
      </div>
      {/* page5 */}
      <div className="md:mt-[15px] z-1 relative bg-cover h-screen w-full bg-center bg-[#f0b27a]">
        <p className="w-full absolute top-[8%] md:top-[6.5%] left-1/2 transform -translate-x-1/2 font-bold text-shadow text-[25px] md:text-[40px] 2xl:text-[45px] h-[50px] flex justify-center items-center">
          The Lastest Project at  TTD global
        </p>
        <div className="hidden md:flex justify-center items-center absolute top-[-100px] md:top-[-30px] md:relative min-h-screen">
          <img
            src="https://cdn.jsdelivr.net/gh/colorkram/images/page5.png"
            alt="page5"
            className="md:w-[650px] 2xl:w-[900px] shadow-xl hover:scale-105 duration-150"
          />
        </div>
        <div className="md:hidden flex justify-center items-center absolute top-[-30px] md:top-0 md:relative min-h-screen">
          <img
            src="https://cdn.jsdelivr.net/gh/colorkram/images/page5-1.png"
            alt="page1"
            className="w-[65%] shadow-xl hover:scale-105 duration-150"
          />
        </div>

        <p className=" cursor-pointer absolute bottom-[19%] md:bottom-[16%] left-1/2 transform -translate-x-1/2 font-bold text-shadow text-[18px] md:text-[24px] h-[50px] w-full flex justify-center items-center">
          <p className="text-[#ffff] mr-2"> One Aisa :</p>  E Commerce Site
        </p>

        <p className=" cursor-pointer absolute  bottom-[13%] md:bottom-[11%] left-1/2 transform -translate-x-1/2 font-bold text-shadow text-[17px]  w-full md:text-[24px] h-[50px] flex justify-center items-center">
          Front-end : React/Next.js, Ant Design, Tailwind Css, Zustand (hook)
        </p>
        <p className=" cursor-pointer absolute  bottom-[6%] md:bottom-[6.5%] left-1/2 transform -translate-x-1/2 font-bold text-shadow text-[17px]  w-full md:text-[24px] h-[50px] flex justify-center items-center">
          Back-end : NestJS, TypeOrm, Posgest, Omise
        </p>

        <p className=" cursor-pointer absolute bottom-[1%] md:bottom-[2%] left-1/2 transform -translate-x-1/2 font-bold text-shadow text-[16px] md:text-[24px] h-[50px] w-full flex justify-center items-center">
          Visit Test Site :<a href="https://uat-fe.tourmasterth.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline pl-1">https://uat-fe.tourmasterth.com</a>
        </p>

        {/* <iframe 
    src="https://ttdthailand.com/" 
    width="320px" 
    height="520px" 
    frameBorder="0" 
    allowFullScreen
    className="absolute inset-0"
  ></iframe> */}
      </div>
      <div className="md:mt-[15px] p-2 md:p-6 z-1 relative bg-cover h-screen w-full bg-center bg-[url('https://cdn.jsdelivr.net/gh/colorkram/images/FB_IMG_1561520190479.jpg')]">
        <div className="bg-gray-400 bg-opacity-75 w-full h-full p-6">
          <p className="text-[30px] md:text-left font-bold drop-shadow-md text-white shadow-white md:mb-4">
            Work Experience
          </p>
          <div className="text-black md:text-[24px] text-[20px] text-left space-y-2">
            <p className="font-semibold">2023 - Present: FullStack Developer @TTD Global</p>
            <ul className="list-disc md:ml-5 space-y-1 text-[18px]">
              <li>Developing full-stack web app for a travel company.</li>
              <li>Including customer web, team, and e-commerce platforms.</li>
              <li>Using JavaScript, React, PostgreSQL, NestJS, and more.</li>
              <li>Built a back-office web app to streamline team workflows.</li>
              <li>Fixed bugs and problems efficiently and in a timely manner.</li>
              <li>Training new internship developers.</li>
            </ul>
          </div>
          <br/>
          <div className="text-black md:text-[24px] text-[20px] md:text-left space-y-2">
            <p className="font-semibold">2023 - Present: IT-SUPPORT  @FOOD STORY</p>
            <ul className="list-disc ml-5 space-y-1 text-[18px]">
              <li>Customer relations.</li>
              <li>Customer Support (About Pos Service).</li>
              <li>IT Coordinator (PC, Network and Printer).</li>
            </ul>
          </div>
        </div>


      </div>
      <div className="md:mt-[15px] z-1 relative bg-cover h-screen w-full bg-center bg-[url('https://ttd-accounting.s3.ap-southeast-1.amazonaws.com/bg-temp/IMG_20191210_211135.jpg')] ">
        <p className="text-[30px] md:text-left md:pl-[50px] pt-[300px] font-bold text-white drop-shadow-md shadow-white">
          โดเนท สีคราม พร้อมเพย์ 0864667137
        </p>
      </div>
      {/* <div className="w-full h-screen bg-red-40">

</div> */}
    </>
  );
}

export default Main;
