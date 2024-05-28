
const FeaturedProperty = ({ items, text, header }) => {
  return (
    <div className="w-full">
      <div className="container">
        {/* section label */}
        <div className="py-10">
          <h3 className="text-purple-700"> {header} </h3>
          <h5 className="pt-4"> {text} </h5>
        </div>

        
        <h3>Items </h3>
        <div className="w-full pt-10 items-center"></div>
        <button>Load More</button>
      </div>
    </div>
  );
};

export default FeaturedProperty;
