import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

function Map({ children }) {
  const [viewport, setViewport] = React.useState({
    latitude: 11.5661723,
    longitude: 104.8920119,
    width: "100%",
    height: "100%",
    zoom: 12,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/rinyato/clacpzio3000k14o20hwx0lv2"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewState)}
    >
      {children}
    </ReactMapGL>
  );
}

export default Map;
