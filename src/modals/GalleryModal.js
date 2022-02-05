import React, { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { pets } from "../data/Data";
import iconClose from "../icons/close-cross.png";
import iconRightArrow from "../icons/right-arrow.png";
import iconLeftArrow from "../icons/left-arrow.png";

const GalleryModal = () => {
  const { isGModalOpen, setIsGModalOpen, image, setImage, checkModal } =
    useGlobalContext();

  useEffect(() => {
    const lastIndex = pets.length - 1;
    image < 0 && setImage(lastIndex);
    image > pets.length - 1 && setImage(0);
  }, [image, setImage]);

  const prevPicture = () => {
    setImage(image - 1);
  };
  const nextPicture = () => {
    setImage(image + 1);
  };

  const closeModal = () => {
    setIsGModalOpen(false);
  };

  return (
    <div
      className={`${
        isGModalOpen ? "modal-gallery open-gallery-modal" : "modal-gallery"
      }`}
    >
      <div
        className="gallery-container"
        style={{ backgroundImage: `url("./img/pet${image}.webp")` }}
      >
        <button className="left-btn">
          <img src={iconLeftArrow} alt="" onClick={prevPicture} />
        </button>
        <button className="right-btn">
          <img src={iconRightArrow} alt="" onClick={nextPicture} />
        </button>
        <button className="gallery-close-btn">
          <img
            src={iconClose}
            alt=""
            onClick={() => {
              closeModal();
              checkModal();
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;
