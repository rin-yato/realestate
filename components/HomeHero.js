import Image from "next/image";
import React from "react";
import YatoButton from "../RinYato/YatoButton";
import DemoPropertyCard from "./DemoPropertyCard";
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
        {/* <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex p-1.5 gap-1.5">
            <div className="bg-sky-500 select-none duration-300 cursor-pointer active:scale-95 hover:scale-105 text-white py-4 px-8 rounded-full text-2xl shadow-xl font-bold tracking-wide">
              FIND YOUR DREAM HOME NOW
            </div>
          </div>
        </div> */}
      </section>
      <section className="mt-20 pt-20">
        <div className="px-16">
          <h2 className="text-3xl font-semibold">
            Select the property you want
          </h2>
          <div className="grid grid-cols-4 mt-10 gap-20">
            <PropertyTypeCard
              title="House"
              image="/house-nobg.png"
              imgClassName="-translate-y-3 -translate-x-0.5"
            />
            <PropertyTypeCard
              title="Condo"
              image="/condo-nobg.png"
              imgClassName="translate-y-5 scale-110"
            />
            <PropertyTypeCard
              title="Land"
              image="/house-nobg.png"
              imgClassName="-translate-y-3 -translate-x-0.5"
            />
            <PropertyTypeCard
              title="Farm"
              image="/condo-nobg.png"
              imgClassName="translate-y-5 scale-110"
            />
          </div>
        </div>
      </section>
      <section className="mt-20 pt-20">
        <div className="px-16">
          <h2 className="text-3xl font-semibold">Our Services</h2>
          <div className="grid grid-cols-2 mt-10">
            <div className="flex gap-10 border-r-2 border-b-2 p-16 pt-5">
              <div className="w-full h-full bg-sky-200 rounded-2xl"></div>
              <div>
                <h3 className="text-2xl font-semibold">Sell Your Property</h3>
                <p className="text-gray-500 mt-5">
                  Selling your property is a big decision. We can help you make
                  the right one. We have the experience and the tools to help
                  you sell your property quickly and for the best price.
                </p>
              </div>
            </div>
            <div className="flex gap-10 border-b-2 p-16 pt-5">
              <div className="w-full h-full bg-sky-200 rounded-2xl"></div>
              <div>
                <h3 className="text-2xl font-semibold">Buy Your Property</h3>
                <p className="text-gray-500 mt-5">
                  Buying a property has never been easier. With services like
                  our online marketplace, you can get a better idea of what you
                  can afford. We can help find the right property for you.
                </p>
              </div>
            </div>
            <div className="flex gap-10 border-r-2 p-16 pt-10 pb-5">
              <div className="w-full h-full bg-sky-200 rounded-2xl"></div>
              <div>
                <h3 className="text-2xl font-semibold">Legal Service</h3>
                <p className="text-gray-500 mt-5">
                  To make it even easier, we have a team of lawyers who can help
                  you with the legal process of buying and selling a property,
                  so that you don&apos;t have to worry about it.
                </p>
              </div>
            </div>
            <div className="flex gap-10 p-16 pt-10 pb-5">
              <div className="w-full h-full bg-sky-200 rounded-2xl"></div>
              <div>
                <h3 className="text-2xl font-semibold">Free Evaluation</h3>
                <p className="text-gray-500 mt-5">
                  We can help you find out how much your property is worth. We
                  can help you sell your property quickly and for the best price
                  or help find the right property for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 pt-20">
        <div className="px-16">
          <h2 className="text-3xl font-semibold">
            Featured Properties 
          </h2>
          <div className="grid grid-cols-3 mt-10 gap-16">
            <DemoPropertyCard />
            <DemoPropertyCard />
            <DemoPropertyCard />
          </div>
        </div>
      </section>
      <section className="mt-20 pt-20">
        <div className="px-16">
          <h2 className="text-3xl font-semibold">
            New Listing Properties 
          </h2>
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
