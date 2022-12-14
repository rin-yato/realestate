import React from "react";
import Image from "next/image";

function PropertyTypeCard({ title, image, imgClassName }) {
  return (
    <div className="card group active:scale-95 cursor-pointer duration-200 rounded-3xl min-h-[40vh] bg-slate-50 flex flex-col overflow-hidden p-10 pt-0">
      <div className="h-full w-full">
        <div className="h-full w-full relative">
          <Image
            src={image}
            alt="heroImage"
            fill
            quality={80}
            sizes="fit-content"
            className={`object-cover ${imgClassName} group-hover:scale-110 duration-300`}
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
