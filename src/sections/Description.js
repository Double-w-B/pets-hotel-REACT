import React, { useRef } from "react";
import logo from "../img/logo.png";
import welcomeImg from "../img/welcome.webp";
import { useGlobalContext } from "../context/context";

const Description = () => {
  const { setDescHeight, handleClick, checkLocation } = useGlobalContext();

  const desc = useRef(null);

  React.useEffect(() => {
    checkLocation(desc, "description");
  });

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const descH = Math.round(desc.current.getBoundingClientRect().y);
      setDescHeight(descH);
    });
  });

  return (
    <section id="description" ref={desc} onClick={handleClick}>
      <div className="desc-heading">
        <h2>About us</h2>
      </div>
      <div className="desc-info">
        <img src={logo} alt="logo" className="no-select" />
        <p>
          <span className="greenSpan">Pets</span>{" "}
          <span className="blackSpan">Hotel</span> - the first pets hotel in San
          Francisco with underfloor heating, ventilation and air purification
          systems!
        </p>
        <p>
          Here are the most comfortable and safe conditions for your tailed
          friend to stay outside the home.
        </p>
        <p>
          Planning a trip and can't take your pet with you? We are pleased to
          take care of him!
        </p>
      </div>
      <div className="desc-img">
        <img src={welcomeImg} alt="dogs and cats" className="no-select" />
      </div>
    </section>
  );
};

export default Description;
