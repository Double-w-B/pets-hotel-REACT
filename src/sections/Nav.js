import React, { useRef, useEffect } from "react";
import logo from "../img/logo.png";
import iconMenu from "../icons/menu.png";
import iconClose from "../icons/close-cross-menu.png";
import { useGlobalContext } from "../context/context";
import { links } from "../data/Data";

const Nav = () => {
  const { isSidebarOpen, closeSidebar, setNavHeight, descHeight, showLogo } =
    useGlobalContext();
  const { setShowLogo, moveTo, showTown, setIsCModalOpen, checkModal } =
    useGlobalContext();
  const { navHeight, setIsSidebarOpen, coords } = useGlobalContext();

  const nav = useRef(null);

  useEffect(() => {
    const navHeight = Math.round(nav.current.getBoundingClientRect().height);
    setNavHeight(navHeight);
  });

  useEffect(() => {
    descHeight < 420 && descHeight > -380 && window.innerWidth > 1024
      ? setShowLogo(true)
      : setShowLogo(false);
  }, [descHeight, setShowLogo]);

  const openModal = () => {
    setIsCModalOpen(true);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const moveUp = (e) => {
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: e.currentTarget.offsetTop - navHeight,
      behavior: "smooth",
    });
  };
  const handleClick = () => {
    openModal();
    checkModal();
  };

  return (
    <nav ref={nav}>
      <div className="links">
        <ul className="no-select">
          <li className="logo">
            <a
              href="#header"
              onClick={moveUp}
              className={`${showLogo ? "pointer-events" : ""}`}
            >
              <img
                src={logo}
                alt="logo"
                className={`${showLogo ? "hide-logo" : ""}`}
              />
            </a>
          </li>
          {links.map((link, index) => {
            const { name, path } = link;

            if (name === "T&Cs") {
              return (
                <li key={index} className="conditions" onClick={handleClick}>
                  {name}
                </li>
              );
            } else {
              return (
                <li
                  className={
                    coords === path.substring(1) ? "locateSection" : ""
                  }
                  key={index}
                  onClick={moveTo}
                >
                  <a href={path}>{name}</a>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="action">
        <a href="tel:937994923">937 994 923</a>
        <p className={`${showTown ? "show-hidden" : "hide"}`}>San Francisco</p>
      </div>
      <div className="menu hide-button no-select">
        <p>Menu</p>
        <div>
          <img
            src={iconMenu}
            alt="icon"
            className={`${isSidebarOpen ? "menu-open hide-btn" : "menu-open"}`}
            onClick={openSidebar}
          />
          <img
            src={iconClose}
            alt="icon"
            className={`${
              isSidebarOpen ? "menu-close" : "menu-close hide-btn"
            }`}
            onClick={closeSidebar}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
