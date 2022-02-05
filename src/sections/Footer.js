import React from "react";
import { useGlobalContext } from "../context/context";
const Footer = () => {
  const { handleClick } = useGlobalContext();
  return (
    <footer onClick={handleClick}>
      <p>&copy; {new Date().getFullYear()} Pets Hotel. All Rights Reserved.</p>
      <div>
        made by{" "}
        <a
          href="https://github.com/Double-w-B"
          target="_blank"
          rel="noopener noreferrer"
        >
          Władysław Balandin
        </a>
      </div>
    </footer>
  );
};

export default Footer;
