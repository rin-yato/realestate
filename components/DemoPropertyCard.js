import Image from "next/image";
import React from "react";
import KingBedRoundedIcon from "@mui/icons-material/KingBedRounded";
import ShowerRoundedIcon from "@mui/icons-material/ShowerRounded";
import StraightenRoundedIcon from "@mui/icons-material/StraightenRounded";
import YatoButton from "../RinYato/YatoButton";

function DemoPropertyCard({ children }) {
  return (
    <div className="group rounded-2xl relative shadow-xl overflow-hidden flex flex-col w-full min-h-[40vh] border-8 border-slate-200">
      <Image
        src={"/Property/1.jpeg"}
        alt="PropertyPic"
        quality={75}
        sizes="fit-content"
        fill
        priority
        className="object-cover group-hover:scale-110 duration-500 ease-in-out"
      />
      {/* linear gradiant overlay */}
      <div className="absolute inset-0 top-[15%] bg-gradient-to-b from-transparent to-black opacity-75 flex"></div>
      <div className="absolute inset-0 top-[32%]">
        <div className="p-6 pt-16 text-white">
          <h3 className="font-semibold tracking-wide text-lg">
            TK Lane Premium Condo
          </h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
          <YatoButton className="mt-4 bg-sky-500 font-semibold tracking-wide">View Details</YatoButton>
        </div>
      </div>
    </div>
  );
}

export default DemoPropertyCard;
