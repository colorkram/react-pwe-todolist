import React, { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();

  return (
    <div className="w-full ">
<div className="h-screen bg-cover bg-center bg-opacity-30 bg-[url('https://cdn.discordapp.com/attachments/1139473738384023643/1192092536844587068/ABLVV85eHGMNgbcXuFini8MjHQkb4CEU6oXNqbjjWAxGlGwcDy9OAcw2fktpTgw1125-h1500-s-no-gm.png?ex=65a7d1b0&is=65955cb0&hm=3c96e33607f040234068c903a2696c3f09ff562f922d92eb1c51a3a175cbe452&')] ">
<p className="text-white font-bold text-[40px]  bg-opacity-45 bg-black ">
  Kiss Me Japan
</p>

</div>
      <div className="grid grid-cols-3 gap-4 bg-opacity-30 bg-black w-full absolute bottom-0">
        <button
          className="bg-gray-200 p-4 m-2 rounded-lg shadow-md"
          onClick={() => {
            navigate("/todo");
          }}
        >
          Todo
        </button>
        <button
          className="bg-gray-200 p-4 m-2 rounded-lg shadow-md"
          onClick={() => {
            navigate("/cal");
          }}
        >
          Calculator
        </button>
        <button
          className="bg-gray-200 p-4 m-2 rounded-lg shadow-md"
          onClick={() => {
            navigate("/exp");
          }}
        >
          Expenses
        </button>
      </div>
    </div>
  );
}

export default Test;
