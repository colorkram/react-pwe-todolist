import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const middleFunction = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight / 4, // Scroll to the middle of the page
      behavior: "smooth", // Smooth scroll
    });
  };
  
  const bottomFunction = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, // Scroll to the bottom of the document
      behavior: "smooth", // Smooth scroll
    });
  };
  

  return (
    <div className="md:hidden">
      <button
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className='w-screen h-screen fixed top-0 left-0' onClick={toggleMenu}>

<div className=" md:hidden h-full absolute right-4 bottom-4 left-4 z-10 flex items-center justify-center  rounded-lg shadow-lg">
 {/* Your mobile menu items go here */}
 <ul className="mt-2 bg-white rounded-md w-full">
   <li>
     <p
       onClick={topFunction}
       className="block text-gray-800 hover:text-white px-4 py-2 rounded-md"
     >
       Home
     </p>
   </li>
   <li>
     <p
       onClick={middleFunction}
       className="block text-gray-800 hover:text-white px-4 py-2 rounded-md"
     >
       About
     </p>
   </li>
   <li>
     <p
       onClick={bottomFunction}
       className="block text-gray-800 hover:text-white px-4 py-2 rounded-md"
     >
       Contact
     </p>
   </li>
   <li>
     <p
       onClick={()=>{window.open('https://cdn.jsdelivr.net/gh/colorkram/images/portfolio.pdf')}}
       className="block text-gray-800 hover:text-white px-4 py-2 rounded-md"
     >
       Download
     </p>
   </li>
 </ul>
</div>
        </div>


      )}
    </div>
  );
};

export default HamburgerMenu;
