import React from "react";
import ExpertCard from "./ExpertCard";
import agents  from "./AgentData"

const ExpertSection = (props) => {
  // console.log(agents)
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto py-20 px-10 flex-col justify-between text-center md:flex-row">
        {/* section label */}
        <div className="py-10">
          <h3 className="text-purple-700"> {props.header} </h3>
          <h5 className="pt-4"> {props.text} </h5>
        </div>

        {/* property-card-container */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          agents.map(({ id, name, img }) => (
            <div className="p-2"  key={id}>
              <ExpertCard name={name} img={img}/>
            </div>
            ))
        }

          {/* <div className="p-2">
            <ExpertCard name="Agent two" />
          </div>
          <div className="p-2">
            <ExpertCard name="Agent three" />
          </div>
          <div className="p-2">
            <ExpertCard name="Agent four" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ExpertSection;
