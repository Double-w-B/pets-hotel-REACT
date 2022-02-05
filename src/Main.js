import React from "react";
import { Description, Icons, Prices, Gallery } from "./sections";
import { NecessaryInfo, Location } from "./sections";
import GalleryModal from "./modals/GalleryModal";
import ConditionsModal from "./modals/ConditionsModal";
import { useGlobalContext } from "./context/context";

const Main = () => {
  const { handleClick } = useGlobalContext();

  return (
    <main onClick={handleClick}>
      <Description />
      <Icons />
      <Prices />
      <Gallery />
      <NecessaryInfo />
      <Location />
      <GalleryModal />
      <ConditionsModal />
    </main>
  );
};

export default Main;
