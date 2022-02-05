import React from "react";
import "./css/index.css";
import "./css/keyframes.css";
import "./css/media.css";
import Header from "./Header";
import Main from "./Main";
import {Footer} from "./sections";
import { useGlobalContext } from "./context/context";

function App() {
  const { closeSidebar, handleScroll } = useGlobalContext();

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) closeSidebar();
    });
    return () =>
      window.removeEventListener("resize", () => {
        if (window.innerWidth > 1024) closeSidebar();
      });
  });

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll());
    return () => {
      window.removeEventListener("scroll", handleScroll());
    };
  });

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
