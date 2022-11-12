import React from "react";
import BrowseBar from "../components/BrowseBar";
import Header from "../components/Header";
import Map from "../components/Map";
import PropertyCardList from "../components/PropertyCardList";

function Home() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <BrowseBar />
      <div className="relative grid grid-cols-[45%,55%] overflow-hidden">
        <div className="h-full no-scroll overflow-y-auto overflow-x-hidden w-full px-10">
          <PropertyCardList />
        </div>
        <div className="pr-10 pb-10 flex relative">
          <div className="overflow-hidden rounded-2xl w-full h-full">
            <Map></Map>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
