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
  let feLogo = [
    {
      name: "ReactJS",
      logo: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
    },
    {
      name: "VueJS",
      logo: "https://nuxt.com/assets/design-kit/icon-green.svg",
    },
    {
      name: "HTML",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    },
    {
      name: "CSS 3",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    },
    {
      name: "JS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    ,
  ];
  let beLogo = [
    {
      name: "NodeJs",
      logo: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
    },
    {
      name: "NestJS",
      logo: "https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png",
    },
    {
      name: "JS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "Aws S3",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1712px-Amazon-S3-Logo.svg.png",
    },
    ,
    ,
  ];
  let otherLogo = [
    {
      name: "PhotoShop",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png",
    },
    {
      name: "Vegas Pro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Vegas_Pro_19.svg/640px-Vegas_Pro_19.svg.png",
    },
    {
      name: "Figma",
      logo: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png",
    },
    {
      name: "MS",
      logo: "https://seeklogo.com/images/M/microsoft-office-logo-8B0EF31E09-seeklogo.com.png",
    },
    {
      name: "progest sql",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Logo_PostgreSQL.png",
    },
  ];
  return (
    <>
      <Nav />
      {/* <div className="fixed top-0 z-[100] text-[100px] ">{showParallaxs}</div> */}
      <ParallaxProvider>
        <div
          className={`md:mt-[110px] relative z-1 bg-cover h-screen w-full bg-center bg-[url('https://res.cloudinary.com/db426bffp/image/upload/v1714553972/kram_ql6s02.jpg')] `}
        >
          <Parallax speed={-25} className=" z-0 flex md:hidden ">
            {showParallax && (
              <div
                className={`w-[131px] h-[131px] text-white absolute bottom-[10px] left-[50px] bg-cover  
      ${
        showParallaxs == 1
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
                className={` text-white absolute bottom-[0px] md:bottom-[100px] left-[25px] md:left-[120px] bg-cover md:w-[250px] md:h-[250px]
      ${
        showParallaxs == 1
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
              <p className="text-[30px]  md:text-left md:pl-[50px] font-bold text-white drop-shadow-md shadow-white">
                - SeeKram -
              </p>
              <div className="flex justify-center">
                {" "}
                <p className="text-[30px] md:text-[0px] md:text-left pr-2 md:pl-[7px] font-bold text-white drop-shadow-md shadow-white">
                  -
                </p>{" "}
                <p className="text-[30px] md:text-left md:pl-[7px] font-bold text-white drop-shadow-md shadow-white">
                  Sorrawit Chaiyasil -
                </p>
              </div>
            </div>
            <p className="text-[30px] md:text-left md:pl-[50px] font-bold text-yellow-400 drop-shadow-md shadow-white">
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
          className="md:mt-[110px] z-1 relative bg-cover h-screen md:h-[2700px] w-full  bg-[url('https://ttd-accounting.s3.ap-southeast-1.amazonaws.com/bg-temp/IMG_1187.JPG')] "
        >
          {!showPage2 ? (
            <div className="text-[24px] md:text-[64px] h-[500px]  items-center mt-[100px] absolute w-full font-bold text-white drop-shadow-xl">
              My Computer & Other Skill
            </div>
          ) : null}
          <Parallax speed={-25} className=" z-0 md:hidden">
            <p className="text-[30px] md:text-left md:pl-[50px] pt-[300px] font-bold text-white drop-shadow-md shadow-white">
              โดเนท สีคราม พร้อมเพย์s 0864667137
            </p>
          </Parallax>

          {showPage2 ? (
            <Parallax speed={-100} className=" hidden md:flex relative ">
              <div className="text-[30px] h-[500px]  items-center absolute w-full mt-[300px] font-bold text-white drop-shadow-md shadow-white">
                Frontend Skrill
              </div>
              <div className="text-[30px] h-[500px] items-center flex justify-center w-full mt-[300px] mb-[100px] font-bold text-white drop-shadow-md shadow-white">
                {feLogo.map((item, index) => (
                  <div className="mx-6">
                    {" "}
                    <img
                      key={index}
                      src={item?.logo}
                      alt="react"
                      width={200}
                      height={200}
                      className="mx-6 "
                    />
                    <p className="hover:scale-150"> {item?.name}</p>
                  </div>
                ))}
              </div>
            </Parallax>
          ) : null}

          {showPage2 ? (
            <Parallax speed={-100} className=" hidden md:flex relative ">
              <div className="text-[30px] h-[500px]  items-center absolute w-full mt-[350px] font-bold text-white drop-shadow-md shadow-white">
                Backend Skrill
              </div>
              <div className="text-[30px] h-[500px] items-center flex justify-center w-full mt-[300px] mb-[100px] font-bold text-white drop-shadow-md shadow-white">
                {beLogo.map((item, index) => (
                  <div className="mx-6">
                    {" "}
                    <img
                      key={index}
                      src={item?.logo}
                      alt="react"
                      width={200}
                      height={200}
                      className="mx-6 "
                    />
                    <p className="hover:scale-150"> {item?.name}</p>
                  </div>
                ))}
              </div>
            </Parallax>
          ) : null}

          {showPage2 ? (
            <Parallax speed={-100} className=" hidden md:flex relative ">
              <div className="text-[30px] h-[500px]  items-center absolute w-full mt-[350px] font-bold text-white drop-shadow-md shadow-white">
                Other Skrill
              </div>
              <div className="text-[30px] h-[500px] items-center flex justify-center w-full mt-[300px] mb-[100px] font-bold text-white drop-shadow-md shadow-white">
                {otherLogo.map((item, index) => (
                  <div className="mx-6">
                    {" "}
                    <img
                      key={index}
                      src={item?.logo}
                      alt="react"
                      width={200}
                      height={200}
                      className="mx-6 "
                    />
                    <p className="hover:scale-150"> {item?.name}</p>
                  </div>
                ))}
              </div>
            </Parallax>
          ) : null}

        </div>
      </ParallaxProvider>
      <div className="md:mt-[110px] z-1 relative bg-cover h-screen w-full bg-center bg-[url('https://ttd-accounting.s3.ap-southeast-1.amazonaws.com/bg-temp/IMG_20191210_211135.jpg')] ">
        <p className="text-[30px] md:text-left md:pl-[50px] pt-[300px] font-bold text-white drop-shadow-md shadow-white">
          โดเนท สีคราม พร้อมเพย์s 0864667137
        </p>
      </div>
      {/* <div className="w-full h-screen bg-red-40">

</div> */}
    </>
  );
}

export default Main;
