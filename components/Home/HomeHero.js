import Image from "next/image";
import React from "react";
import YatoButton from "../../RinYato/YatoButton";
import DemoPropertyCard from "../DemoPropertyCard";
import PropertyTypeCard from "./PropertyTypeCard";
import Services from "./Services";

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
          <div className="absolute bottom-0 left-0 w-full h-[65%] bg-gradient-to-t from-black to-transparent opacity-60"></div>
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-full">
          <h1 className="text-6xl font-semibold text-white capitalize text-center">Find your perfect home</h1>
          <YatoButton className="bg-sky-500 w-fit text-white font-semibold capitalize mx-auto mt-5 mb-10">browse now</YatoButton>
        </div>
      </section>
      <section className="mt-20 pt-20">
        <div className="px-16">
          <h2 className="text-3xl font-semibold">
            Select the property you want
          </h2>
          <div className="grid grid-cols-4 mt-10 gap-[3%]">
            <PropertyTypeCard
              title="House"
              image="/house-nobg.png"
              imgClassName="-translate-y-3 -translate-x-0.5"
            />
            <PropertyTypeCard
              title="Condo"
              image="/condo-nobg.png"
              imgClassName="translate-y-5"
            />
            <PropertyTypeCard
              title="Land"
              image="/house-nobg.png"
              imgClassName="-translate-y-3 -translate-x-0.5"
            />
            <PropertyTypeCard
              title="Farm"
              image="/condo-nobg.png"
              imgClassName="translate-y-5"
            />
          </div>
        </div>
      </section>
      <Services />
      <section className="mt-20 pt-20">
        <div className="px-16">
          <h2 className="text-3xl font-semibold">Featured Properties</h2>
          <div className="grid grid-cols-3 mt-10 gap-16">
            <DemoPropertyCard />
            <DemoPropertyCard />
            <DemoPropertyCard />
          </div>
        </div>
      </section>
      <section className="mt-20 pt-20">
        <div className="px-16">
          <h2 className="text-3xl font-semibold">New Listing Properties</h2>
          <div className="grid grid-cols-3 mt-10 gap-16">
            <DemoPropertyCard />
            <DemoPropertyCard />
            <DemoPropertyCard />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomeHero;
