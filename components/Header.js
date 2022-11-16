import { Link } from "@mui/material";
import React from "react";
import Select from "../RinYato/YatoSelect";

function Header() {
  return (
    <div className="grid grid-cols-3 py-5 px-10">
      <div className="font-bold text-2xl">Real Estate</div>
      <div className="flex gap-16 justify-center items-center font-semibold">
        <Link href="/" className=" text-black no-underline">
          Home
        </Link>

        <Link href="/search" className=" text-black no-underline">
          Search
        </Link>

        <div className=" cursor-pointer">Agent</div>
        <div className=" cursor-pointer">Help</div>
      </div>
      <div className="flex justify-end items-center gap-5">
        <button className="text-sky-800 font-bold py-2 px-4 rounded">
          Register
        </button>
        <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-5 rounded-2xl active:scale-90 duration-200">
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
