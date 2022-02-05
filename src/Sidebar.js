import React from "react";
import stepIcon from "./icons/step.png";
import { useGlobalContext } from "./context/context";
import { links } from "./data/Data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, moveTo, setIsCModalOpen, checkModal } =
    useGlobalContext();
  const { coords } = useGlobalContext();

  const handleClick = (e) => {
    if (e.target.tagName === "P") {
      closeSidebar();
      setIsCModalOpen(true);
      checkModal();
    } else {
      closeSidebar();
      moveTo(e);
    }
  };

  return (
    <div className={`${isSidebarOpen ? "sidebar sidebar-show" : "sidebar"}`}>
      <div className="sidebar-menu">
        <ul className="menu-links no-select">
          {links.map((link, index) => {
            const { name, path } = link;
            if (name === "T&Cs") {
              return (
                <li key={index}>
                  <img src={stepIcon} alt="icon" />
                  <p className="subMenuCond" onClick={handleClick}>
                    {name}
                  </p>
                </li>
              );
            } else {
              return (
                <li
                  key={index}
                  className={
                    coords === path.substring(1) ? "locateSection" : ""
                  }
                >
                  <img src={stepIcon} alt="icon" />
                  <a href={path} onClick={handleClick}>
                    {name}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
