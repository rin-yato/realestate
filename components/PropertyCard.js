import Image from "next/image";
import React from "react";
import KingBedRoundedIcon from "@mui/icons-material/KingBedRounded";
import ShowerRoundedIcon from "@mui/icons-material/ShowerRounded";
import StraightenRoundedIcon from "@mui/icons-material/StraightenRounded";
import YatoButton from "../RinYato/YatoButton";

function PropertyCard() {
  return (
    <div className="rounded-2xl shadow-xl overflow-hidden flex flex-col w-full h-full">
      <div className="rounded-2xl overflow-hidden w-full">
        <div className="min-h-[200px] relative row-span-3 ">
          <Image
            src={"/Property/1.jpeg"}
            alt="PropertyPic"
            quality={100}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="row-span-4 p-4 flex flex-col gap-3">
        <p className="font-semibold m-0">$ 445,500</p>
        <p className="text-xs text-gray-400 m-0">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          accusantium
        </p>
        <div className="flex justify-between mt-1">
          <YatoButton className="gap-1 py-1 px-3 text-sm">
            <KingBedRoundedIcon className="text-orange-500 text-base" /> 3
          </YatoButton>
          <YatoButton className="gap-1 py-1 px-3 text-sm">
            <ShowerRoundedIcon className="text-sky-500 text-base" /> 2
          </YatoButton>
          <YatoButton className="gap-1 py-1 px-3 text-sm">
            <StraightenRoundedIcon className="text-green-500 text-base" /> 40x40
          </YatoButton>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
