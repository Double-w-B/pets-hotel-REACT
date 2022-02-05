import React from "react";
import {Nav} from "./sections";
import Sidebar from "./Sidebar";
import Greeting from "./Greeting";
import { useGlobalContext } from "./context/context";

const Header = () => {
  const { handleClick } = useGlobalContext();

 
  return (
    <header id="header" onClick={handleClick}>
      <Nav />
      <Greeting />
      <Sidebar />
    </header>
  );
};

export default Header;
