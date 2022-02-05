import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isGModalOpen, setIsGModalOpen] = useState(false);
  const [isCModalOpen, setIsCModalOpen] = useState(false);
  const [image, setImage] = useState(0);

  const [navHeight, setNavHeight] = useState(79);
  const [descHeight, setDescHeight] = useState(421);
  const [showLinksH, setShowLinksH] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showTown, setShowTown] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  /* Coordinates */
  const [coords, setCoords] = useState();

  const moveTo = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const element = document.querySelector(target).offsetTop;
    const position = element - navHeight;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  };

  const checkLocation = (section, sectionId) => {
    const sectionH = section.current.getBoundingClientRect().height;
    const sectionTop = section.current.offsetTop;
    scrollPosition > sectionTop - sectionH / 3 && setCoords(sectionId);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleClick = (e) => {
    !e.target.classList.contains("menu-open") &&
      !e.target.classList.contains("menu-links") &&
      !e.target.parentElement.classList.contains("menu-links") &&
      !e.target.parentElement.parentElement.classList.contains("menu-links") &&
      closeSidebar();
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const checkModal = () => {
    !(isGModalOpen || isCModalOpen)
      ? document.body.classList.add("no-scrolling")
      : document.body.classList.remove("no-scrolling");
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isGModalOpen,
        setIsGModalOpen,
        isCModalOpen,
        setIsCModalOpen,
        setIsSidebarOpen,
        closeSidebar,
        image,
        setImage,
        navHeight,
        setNavHeight,
        showLogo,
        setShowLogo,
        descHeight,
        setDescHeight,
        moveTo,
        showLinksH,
        setShowLinksH,
        showTown,
        setShowTown,
        scrollPosition,
        setScrollPosition,
        handleScroll,
        checkModal,
        handleClick,
        coords,
        setCoords,
        checkLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
