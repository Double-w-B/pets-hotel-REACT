import React, { useRef } from "react";
import dogIcon from "../icons/dog.png";
import catIcon from "../icons/cat.png";
import checkedIcon from "../icons/checked.png";
import { useGlobalContext } from "../context/context";

const Prices = () => {
  const { handleClick, checkLocation } = useGlobalContext();

  const prices = useRef();
  const dog = useRef();
  const cat = useRef();
  const pets = [dog, cat];

  const showPet = (e) => {
    pets.map((pet) => Object.values(pet)[0].classList.remove("show-pet"));
    e.currentTarget.classList.add("show-pet");
  };

  React.useEffect(() => {
    checkLocation(prices, "prices");
  });

  return (
    <section id="prices" ref={prices} onClick={handleClick}>
      <div className="prices-heading">
        <h2>Prices and services</h2>
      </div>

      <div className="prices-info">
        <div className="pricelist">
          <div className="dog-price pets show-pet" onClick={showPet} ref={dog}>
            <div className="pet-icon no-select">
              <img src={dogIcon} alt="" />
              <p>Dogs</p>
            </div>
            <div className="pet-price">
              <div className="pet-accom">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime numquam corrupti officiis inventore unde omnis nam
                  rerum quidem harum alias distinctio aut odit hic, dolores
                  possimus quo enim illo doloribus?
                </p>
              </div>
              <div className="underline"></div>
              <div className="pet-accom-price">
                <p>$50/day</p>
              </div>
            </div>
          </div>

          <div className="cat-price pets" onClick={showPet} ref={cat}>
            <div className="pet-icon no-select">
              <img src={catIcon} alt="" />
              <p>Cats</p>
            </div>

            <div className="pet-price">
              <div className="pet-accom">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime numquam corrupti officiis inventore unde omnis nam
                  rerum quidem harum alias distinctio aut odit hic, dolores
                  possimus quo enim illo doloribus?
                </p>
              </div>
              <div className="underline"></div>
              <div className="pet-accom-price">
                <p>$30/day</p>
              </div>
            </div>
          </div>
        </div>

        <div id="services">
          <div className="serv-heading">
            <h3>Other services</h3>
          </div>
          <div className="serv-info">
            <div className="serv-one">
              <p>
                <img src={checkedIcon} alt="icon" className="no-select" />
                Grooming
              </p>
              <p>
                <img src={checkedIcon} alt="icon" className="no-select" />
                SPA treatments
              </p>
            </div>
            <div className="serv-two">
              <p>
                <img src={checkedIcon} alt="icon" className="no-select" />
                Animal Taxi
              </p>
              <p>
                <img src={checkedIcon} alt="icon" className="no-select" />
                Training
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
