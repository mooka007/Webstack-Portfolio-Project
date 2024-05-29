import React from "react";
import Map from "./map/Map";

const location = {
  address: "Street 007, La Fouine, Planet Zomroda Morocco :).",
  lat: 5.45234,
  lng: 1.10273,
};

function GoogleMap() {
  return (
    <div className="GoogleMap bg-zinc-600 h-[500px] overflow-hidden">
      <Map location={location} zoomLevel={17} />
    </div>
  );
}

export default GoogleMap;
