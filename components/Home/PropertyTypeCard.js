import React from "react";
import Image from "next/image";

function PropertyTypeCard({ title, image, imgClassName }) {
  return (
    <div className="card hover:scale-105 active:scale-95 cursor-pointer duration-200 rounded-3xl min-h-[440px] bg-slate-50 flex flex-col overflow-hidden p-10 pt-0">
      <div className="h-full w-full">
        <div className="h-full w-full relative">
          <Image
            src={image}
            alt="heroImage"
            fill
            quality={80}
            sizes="fit-content"
            className={`object-cover ${imgClassName}`}
          />
        </div>
      </div>
      <h3 className="font-semibold text-3xl pb-3 text-center uppercase tracking-wide pt-10">
        {title}
      </h3>
    </div>
  );
}

export default PropertyTypeCard;
