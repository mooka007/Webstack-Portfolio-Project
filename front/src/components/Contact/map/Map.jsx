import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'

function Map({ location, zoomLevel }) {

  return (
    <div className="map">
    <h4 className="map-h2">Come Visit Us At Our Office</h4>

    <div className="google-map">
      <GoogleMapReact />
    </div>
  </div>
  )
  }
export default Map