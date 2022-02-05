import React from "react";
import { useGlobalContext } from "../context/context";

import { icons } from "../data/Data";

const Icons = () => {
  const { handleClick } = useGlobalContext();
  return (
    <section className="icons no-select" onClick={handleClick}>
      {icons.map((icon, index) => {
        const { img, txt } = icon;
        return (
          <div key={index} className="icon-info">
            <img src={img} alt="icon" />
            <p>{txt}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Icons;
