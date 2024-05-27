import React, { useState } from "react";
import "./ServicesTypesItem.css";
import FAQItem from "../FaqSection/FAQItem";
const ServicesTypeItem = ({ type, description, subgroups }) => {
  const [hoveredSubgroup, setHoveredSubgroup] = useState(null);

  const handleSubgroupHover = (index) => {
    setHoveredSubgroup(index);
  };

  const handleSubgroupLeave = () => {
    setHoveredSubgroup(null);
  };

  return (
    <div className="service-symptoms-item">
      <div className="symptom-types">
        <h3>{type}</h3>
        <p>{description}</p>
      </div>
      <div className="symptom-subgroups">
        {subgroups &&
          subgroups.map((subgroup, index) => (
            <FAQItem
              key={index}
              question={subgroup.name}
              answer={subgroup.description}
            />

            // <div
            //     key={index}
            //     className="subgroup"
            //     onMouseEnter={() => handleSubgroupHover(index)}
            //     onMouseLeave={handleSubgroupLeave}
            // >
            //     <h4>{subgroup.name}</h4>
            //     {hoveredSubgroup === index && (
            //         <p>{subgroup.description}</p>
            //     )}
            // </div>
          ))}
      </div>
    </div>
  );
};

export default ServicesTypeItem;
