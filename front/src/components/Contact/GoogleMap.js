import React from "react";
import Map from "./map/Map";

const location = {
  address: "Street 007, La Fouine, Planet Zomroda Morocco :).",
  lat: 31.7833, // Latitude du Maroc
      lng: -7.0925 // Longitude du Maroc
};

function GoogleMap() {
  return (
    <div className="GoogleMap bg-zinc-600 h-[500px] overflow-hidden">
      <Map location={location} zoomLevel={17} />
    </div>
  );
}

export default GoogleMap;
