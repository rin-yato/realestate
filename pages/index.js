import React from "react";
import BrowseBar from "../components/BrowseBar";
import Header from "../components/Header";
import Map from "../components/Map";
import PropertyCardList from "../components/PropertyCardList";
import { Marker, Popup } from "react-map-gl";
import YatoButton from "../RinYato/YatoButton";
import PropertyCard from "../components/PropertyCard";
import { ClickAwayListener } from "@mui/material";

function Home() {
  const [popUpInfo, setPopUpInfo] = React.useState(false);

  React.useEffect(() => {
    console.log(popUpInfo);
  }, [popUpInfo]);

  const togglePopUp = () => {
    setPopUpInfo(!popUpInfo);
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <BrowseBar />
      <div className="relative grid grid-cols-[45%,55%] overflow-hidden">
        <div className="h-full no-scroll overflow-y-auto overflow-x-hidden w-full px-10 pb-10">
          <PropertyCardList />
        </div>
        <div className="pr-10 pb-10 flex relative">
          <div className="overflow-hidden shadow-xl rounded-2xl w-full h-full">
            <Map>
              <Marker
                latitude="11.5661723"
                longitude="104.8920119"
                onClick={togglePopUp}
              >
                <YatoButton className="shadow-xl py-1 px-2">
                  Hotel Here
                </YatoButton>
              </Marker>
              {popUpInfo && (
                <Popup
                  latitude="11.5661723"
                  longitude="104.8920119"
                  onClose={togglePopUp}
                  closeOnMove={true}
                  closeButton={false}
                  closeOnClick={false}
                  maxWidth="35%"
                >
                  <PropertyCard>
                    <YatoButton className="w-full text-base bg-sky-200 text-sky-700 mt-1 tracking-wide font-bold">See More</YatoButton>
                  </PropertyCard>
                </Popup>
              )}
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
