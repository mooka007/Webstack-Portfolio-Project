import React from "react";
//import React, {useState, useEffect} from "react";
import Header from "../Header/Header";
import FeaturedProperty from "../Property/FeaturedProperty";
import Footer from "../Footer/Footer";
import SearchBar from "../Utils/SearchBar";


function Property() {

  
  
  return (
    <div className="Property">
      <Header />

      <SearchBar />
    
      <FeaturedProperty header="Featured Properties" text="Check Out The top rated Properties around the World "  />

      
      <Footer />
    </div>
  );
}

export default Property;