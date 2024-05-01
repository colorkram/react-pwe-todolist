import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
     <a
       href="#"
       className="block text-gray-800 hover:text-white px-4 py-2 rounded-md"
     >
       Home
     </a>
   </li>
   <li>
     <a
       href="#"
       className="block text-gray-800 hover:text-white px-4 py-2 rounded-md"
     >
       About
     </a>
   </li>
   <li>
     <a
       href="#"
       className="block text-gray-800 hover:text-white px-4 py-2 rounded-md"
     >
       Contact
     </a>
   </li>
 </ul>
</div>
        </div>


      )}
    </div>
  );
};

export default HamburgerMenu;
