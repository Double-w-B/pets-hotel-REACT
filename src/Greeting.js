import React from "react";
import { useGlobalContext } from "./context/context";

const Greeting = () => {
  const { moveTo, checkLocation } = useGlobalContext();

  const hero = React.useRef();

  React.useEffect(() => {
    checkLocation(hero);
  });
  
  return (
    <div className="hero" ref={hero}>
      <div className="greeting">
        <h2>
          Pets <span>Hotel</span>
        </h2>
        <p>
          No worries <span>&#38;</span> Go travel!
        </p>
        <p>Your pet in a safe place.</p>
        <div className="button">
          <a href="#gallery" onClick={moveTo} className="no-select ">
            Gallery
          </a>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
