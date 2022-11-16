import Image from "next/image";
import React from "react";
import YatoButton from "../RinYato/YatoButton";
import PropertyTypeCard from "./Home/PropertyTypeCard";

function HomeHero() {
  return (
    <main className="px-10 pt-10 pb-48">
      <section className="relative">
        <div className="h-[600px] w-full bg-sky-100 rounded-2xl overflow-hidden relative">
          <Image
            src={"/Property/2.jpeg"}
            alt="heroImage"
            fill
            quality={80}
            sizes="fit-content"
            className="object-cover"
          />
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex p-1.5 gap-1.5">
            <YatoButton className="bg-sky-500 duration-300 hover:scale-105 text-white py-4 px-8 rounded-full text-2xl shadow-xl font-bold tracking-wide">
              FIND YOUR DREAM HOME NOW
            </YatoButton>
          </div>
        </div>
      </section>
      <section className="mt-20 pt-20">
        <div className="px-16">
          <h2 className="text-3xl font-semibold">
            Select the property you want
          </h2>
          <div className="grid grid-cols-4 mt-10 gap-20">
            <PropertyTypeCard title="House" image="/house-nobg.png" imgClassName="-translate-y-3 -translate-x-0.5" />
            <PropertyTypeCard title="Condo" image="/condo-nobg.png" imgClassName="translate-y-5 scale-110" />
            <PropertyTypeCard title="Land" image="/house-nobg.png" imgClassName="-translate-y-3 -translate-x-0.5" />
            <PropertyTypeCard title="Farm" image="/condo-nobg.png" imgClassName="translate-y-5 scale-110" />
          </div>
        </div>
      </section>
      <section className="mt-20 pt-20">
        <div className="px-16">
          <h2 className="text-3xl font-semibold">
            Our Services
          </h2>
          <div className="grid grid-cols-4 mt-10 gap-10">
            <PropertyTypeCard title="House" image="/house-nobg.png" imgClassName="-translate-y-3 -translate-x-0.5" />
            <PropertyTypeCard title="Condo" image="/condo-nobg.png" imgClassName="translate-y-5 scale-110" />
            <PropertyTypeCard title="Land" image="/house-nobg.png" imgClassName="-translate-y-3 -translate-x-0.5" />
            <PropertyTypeCard title="Farm" image="/condo-nobg.png" imgClassName="translate-y-5 scale-110" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomeHero;
