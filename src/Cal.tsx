import React, { useState, useEffect } from "react";
import { formatNumber } from "./helper/formatNumber";
import { useNavigate } from "react-router-dom";

const CurrencyConverter = () => {
  const [JPYValue, setJPYValue] = useState(0);
  const [THBValue, setTHBValue] = useState(0);
  const tax8 = THBValue*8/108
  const tax10 = THBValue*10/110
  const navigate = useNavigate();
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch("https://open.er-api.com/v6/latest/JPY");
        const data = await response.json();
        const exchangeRate = data.rates.THB;

        setTHBValue(JPYValue * exchangeRate);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, [JPYValue]);

  const handleJPYChange = (event:any) => {
    const newValue = parseFloat(event.target.value) || 0;
    setJPYValue(newValue);
  };

  return (
<>
<div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Currency Converter</h2>
      <label className="block mb-4">
        <span className="text-gray-700">JPY Value:</span>
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="number"
        //   value={}
          onChange={handleJPYChange}
          placeholder="JPY"
        />
      </label>

      <p className="text-center">
        Equivalent in THB:{" "}
        <span className="font-bold text-blue-500">{formatNumber(THBValue) }</span>
      </p>
      <p className="text-center">
        Tax Refund 8% THB:{" "}
        <span className="font-bold text-blue-500">{formatNumber(THBValue-tax8) }</span>
      </p>
      <p className="text-center">
      Tax Refund 10% THB:{" "}
        <span className="font-bold text-blue-500">{formatNumber(THBValue-tax10) }</span>
      </p>
    </div>
    <div>
        <br/>
        <p className="text-center">
        Include 8%: {" "}
  <span className="font-bold text-blue-500">{formatNumber(JPYValue * 1.08)}</span>
</p>

<p className="text-center">
Include 10%: {" "}
  <span className="font-bold text-blue-500">{formatNumber(JPYValue * 1.10)}</span>
</p>
<br/>
<p className="text-center">
Exclude 8%: {" "}
  <span className="font-bold text-blue-500">{formatNumber(JPYValue / 1.08)}</span>
</p>

<p className="text-center">
Exclude 10%: {" "}
  <span className="font-bold text-blue-500">{formatNumber(JPYValue / 1.10)}</span>
</p>
    </div>
    <div className=" "></div>
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
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          className="bg-gray-200 p-4 m-2 rounded-lg shadow-md"
          onClick={() => {
            navigate("/expenses");
          }}
        >
          Expenses
        </button>
      </div>
</>
  );
};

export default CurrencyConverter;
