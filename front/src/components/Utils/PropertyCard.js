import React from "react";
import { useNavigate } from "react-router-dom";
const PropertyCard = (items) => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/login")
  }
  return (
    <div className="bg-zinc-800 rounded-[50px] rounded-tr-none  hover:border-2 border-zinc-400 duration-300">
      <div className="Image-wrapper w-full bg-zinc-500 rounded-[50px] rounded-tr-none h-60 overflow-hidden ">
        <img className="w-full object-cover" src={items.img} alt=" property-img" />
      </div>
      
      <div className="px-6 pb-4 ">
        <p className="text-right font-semibold">{items.price}</p>
        <div className="flex justify-between pt-2">
          <p>{items.purpose}</p>
          <p>
            {items.state}
          </p>
          <p>{items.title}</p>
          <button><a onClick={handleClick}>Contact agent</a></button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;