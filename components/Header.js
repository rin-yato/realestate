import React from "react";
import Select from "../RinYato/YatoSelect";


function Header() {
  return (
    <div className="grid grid-cols-3 py-5 px-10">
      <div className="font-bold text-2xl">Real Estate</div>
      <ul className="flex gap-16 justify-center items-center font-semibold">
        <li className=" cursor-pointer">Home</li>
        <li className=" cursor-pointer">Search</li>
        <li className=" cursor-pointer">Agent</li>
        <li className=" cursor-pointer">Help</li>
      </ul>
      <div className="flex justify-end items-center gap-5">
        <button className="text-sky-800 font-bold py-2 px-4 rounded">
          Register
        </button>
        <button className="bg-sky-600 hover:bg-sky-800 text-white font-bold py-2 px-5 rounded-2xl active:scale-90 duration-200">
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;