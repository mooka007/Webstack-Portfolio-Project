import React from "react";
import Header from "../Header/Header";
import FeaturedProperty from "../Property/FeaturedProperty";
import Footer from "../Footer/Footer";
import SearchBar from "../Utils/SearchBar";
import useFetch  from "../Utils/useFetch";


function Property() {
  const {items} = useFetch()
  console.log(items)
  
  return (
    <div className="Property">
      <Header />
      {/* <SearchBar /> */}
      <FeaturedProperty header="Featured Properties" text="Check Out The top rated Properties around the World " items={items}/>
      <Footer />
    </div>
  );
}

export default Property;