import React from "react";
import BrowseBar from "../components/BrowseBar";
import Header from "../components/Header";
import PropertyCardList from "../components/PropertyCardList";

function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <BrowseBar />
      <div className="relative grid grid-cols-[45%,55%] h-full">
        <div className="h-full no-scroll overflow-y-auto overflow-x-hidden w-full px-10">
          <PropertyCardList />
        </div>
        <div className="Map"></div>
      </div>
    </div>
  );
}

export default Home;
