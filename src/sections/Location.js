import React from "react";
import locationImg from "../img/location.webp";
import dogImg from "../img/social.webp";
import iconFB from "../icons/facebook.png";
import iconIG from "../icons/instagram.png";
import { useGlobalContext } from "../context/context";

const Location = () => {
  const { handleClick, scrollPosition, setShowTown, checkLocation } =
    useGlobalContext();

  const location = React.useRef();

React.useEffect(() => {
  checkLocation(location, "location");
});

  React.useEffect(() => {
    let locationH = location.current.getBoundingClientRect().y;
    scrollPosition > locationH * 8 ? setShowTown(false) : setShowTown(true);
  }, [scrollPosition, setShowTown]);

  return (
    <section id="location" ref={location} onClick={handleClick}>
      <div className="location-heading">
        <h2>How to find us?</h2>
      </div>
      <div className="location-info">
        <div className="address">
          <div className="address-img no-select">
            <img src={locationImg} alt="location" />
          </div>
          <div className="address-info">
            <p>San Francisco</p>
            <p>498 Sanchez St</p>
            <p>
              <a href="tel:937994923">937 994 923</a>
            </p>
            <p>
              <a href="mailto:petshotel@gmail.com?subject=Question&nbsp;about&nbsp;the&nbsp;necessaries">
                petshotel@gmail.com
              </a>
            </p>
            <div className="map-btn no-select">
              <a
                href="https://goo.gl/maps/xMvpQiK2WFDuuMzm7"
                target="_blank"
                rel="noreferrer"
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="contact-heading">
            <p>
              We will be happy to answer all your questions and take care of
              your pet!
            </p>
          </div>
          <div className="contact-social">
            <div className="social-heading">
              <p>Find us also on</p>
            </div>
            <div className="social-links no-select">
              <a
                href="https://www.facebook.com/"
                target="blank"
                rel="noreferrer"
              >
                <img src={iconFB} alt="Facebook icon" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="blank"
                rel="noreferrer"
              >
                <img src={iconIG} alt="Instagram icon" />
              </a>
            </div>
            <img className="social-dog no-select" src={dogImg} alt="dog"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
