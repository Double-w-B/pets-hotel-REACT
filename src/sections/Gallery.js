import React from "react";
import { pets } from "../data/Data";
import { useGlobalContext } from "../context/context";

const Gallery = () => {
  const { setImage, handleClick, setIsGModalOpen, checkModal, checkLocation } =
    useGlobalContext();

  const gallery = React.useRef();

  React.useEffect(() => {
    checkLocation(gallery);
  });

  const openModal = () => {
    setIsGModalOpen(true);
    checkModal();
  };

  return (
    <section
      id="gallery"
      ref={gallery}
      onClick={handleClick}
      className="no-select"
    >
      {pets.map((pet, index) => {
        const { name } = pet;
        return (
          <div
            key={index}
            className="pic"
            onClick={() => {
              openModal();
              setImage(index);
            }}
          >
            <img src={`./img/${name}`} alt="icon" />
          </div>
        );
      })}
    </section>
  );
};

export default Gallery;
